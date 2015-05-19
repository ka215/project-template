// Initialize
var argv         = require('minimist')(process.argv.slice(2));
var browserSync  = require('browser-sync').create();
var changed      = require('gulp-changed'); 
var coffee       = require('gulp-coffee');
var coffeelint   = require('gulp-coffeelint');
var concat       = require('gulp-concat');
var flatten      = require('gulp-flatten');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var imagemin     = require('gulp-imagemin');
var jshint       = require('gulp-jshint');
var lazypipe     = require('lazypipe');
var less         = require('gulp-less'); 
var merge        = require('merge-stream');
var please       = require('gulp-pleeease');
var plumber      = require('gulp-plumber');
var rev          = require('gulp-rev');
var runSequence  = require('run-sequence');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var manifest     = require('asset-builder')('./sources/manifest.json');

var path = manifest.paths;
var config = manifest.config || {};
var globs = manifest.globs;
var project = manifest.getProjectGlobs();
var enabled = {
  comment: !argv.production, 
  rev: argv.production,
  maps: !argv.production,
  failStyleTask: argv.production
};
var revManifest = path.dist + 'assets.json';

// Closures
// Tasks to build css
var cssTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return gulpif(!enabled.failStyleTask, plumber());
    })
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.init());
    })
    .pipe(function() {
      return gulpif('*.less', less());
    })
    .pipe(function() {
      return gulpif('*.scss', sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.'],
        errLogToConsole: !enabled.failStyleTask
      }));
    })
    .pipe(concat, filename)
    .pipe(please, {
      'autoprefixer': { 'browsers': [ 'last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12' ] },
      'filters': true,
      'rem': false,
      'opacity': true,
      'pseudoElements': false,
      'minifier': true,
      'mqpacker': true
    })
    .pipe(function() {
      return gulpif(enabled.rev, rev());
    })
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.write('.'));
    })();
};

// Tasks to build js
var jsTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.init());
    })
    .pipe(concat, filename)
    .pipe(function() {
      return gulpif(enabled.comment, uglify({ preserveComments: 'some' }), uglify());
    })
    .pipe(function() {
      return gulpif(enabled.rev, rev());
    })
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.write('.'));
    })();
};


// Tasks to write to manifest
var writeToManifest = function(directory) {
  return lazypipe()
    .pipe(gulp.dest, path.dist + directory)
    .pipe(browserSync.stream, {match: '**/*.{js,css}'})
    .pipe(rev.manifest, revManifest, {
      base: path.dist,
      merge: true
    })
    .pipe(gulp.dest, path.dist)();
};

var consoleInfo = function(obj) {
  return console.info(obj);
};

// Main Tasks
// `gulp styles` or `gulp --production styles`
gulp.task('styles', ['wiredep'], function() {
  var merged = merge();
  manifest.forEachDependency('css', function(dep) {
    var cssTasksInstance = cssTasks(dep.name);
    if (!enabled.failStyleTask) {
      cssTasksInstance.on('error', function(err) {
        console.error(err.message);
        this.emit('end');
      });
    }
    merged.add(gulp.src(dep.globs, {base: 'styles'})
      .pipe(cssTasksInstance));
  });
  return merged
    .pipe(writeToManifest('styles'));
});

// `gulp scripts` or `gulp --production scripts`
gulp.task('scripts', ['coffee', 'jshint'], function() {
  var merged = merge();
  manifest.forEachDependency('js', function(dep) {
      merged.add(
      gulp.src(dep.globs, {base: 'scripts'})
        .pipe(jsTasks(dep.name))
    );
  });
  return merged
    .pipe(writeToManifest('scripts'));
});

// `gulp fonts`
gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + 'fonts'))
    .pipe(browserSync.stream());
});

// `gulp images`
gulp.task('images', function() {
  return gulp.src(globs.images)
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}]
    }))
    .pipe(gulp.dest(path.dist + 'images'))
    .pipe(browserSync.stream());
});

// `gulp coffee`
gulp.task('coffee', function() {
  return gulp.src(path.source + 'scripts/coffee/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'))
    .pipe(coffee())
    .pipe(gulp.dest(path.source + 'scripts'));
});

// `gulp jshint`
gulp.task('jshint', function() {
  return gulp.src([
    'bower.json', 'gulpfile.js'
  ].concat(project.js))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// `gulp clean`
gulp.task('clean', require('del').bind(null, [path.dist]));

// `gulp watch` or `gulp --production watch`
gulp.task('watch', function() {
  browserSync.init({
    files: ['{lib,templates}/**/*.php', '*.php'],
    proxy: config.devUrl,
    snippetOptions: {
      whitelist: ['/wp-admin/admin-ajax.php'],
      blacklist: ['/wp-admin/**']
    }
  });
  gulp.watch([path.source + 'styles/**/*'], ['styles']);
  gulp.watch([path.source + 'scripts/**/*'], ['coffee', 'jshint', 'scripts']);
  gulp.watch([path.source + 'fonts/**/*'], ['fonts']);
  gulp.watch([path.source + 'images/**/*'], ['images']);
  gulp.watch(['bower.json', 'sources/manifest.json'], ['build']);
});

// `gulp build` of `gulp --production build`
gulp.task('build', function(callback) {
  runSequence('styles',
              'scripts',
              ['fonts', 'images'],
              callback);
});

// `gulp wiredep`
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;
  return gulp.src(project.css)
    .pipe(wiredep())
    .pipe(changed(path.source + 'styles', {
      hasChanged: changed.compareSha1Digest
    }))
    .pipe(gulp.dest(path.source + 'styles'));
});

// `gulp` or `gulp --production`
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
