�����炢�V���[�Y��3�ew

����WEB�A�v���P�[�V�����̃t�����g�G���h�J���ł͎�����Ȃ��Ȃ��Ă����^�X�N�����i�[�igulp�j�ƃp�b�P�[�W�}�l�[�W���ibower�j�����A�Ȃɂ��ɐݒ肪�ώG�ŁA�ǂ�ȃv���W�F�N�g�ɂ��ėp�I�Ɏg�������Ȋ�{�Z�b�g�I�Ȃ��̂��������Ȃ������B����Ȃ焟���ƁA�d�g�݂̂����炢�����Ȃ���A�����p�̃v���W�F�N�g�̃e���v���[�g�Ƃ��Ĕėp�I�ȃZ�b�g������Ă݂�����B

���������v���W�F�N�g�e���v���[�g�ł̊e�A�Z�b�g�̗����}�ɂ��Ă݂�ƁA���}�̂悤�ɂȂ�B

![�v���W�F�N�g�A�Z�b�g�r���h�̗���](http://ka2.org/assets/2015/05/project-assets-publishing-flow.png)

�ȒP�Ɍ����΁A **bower** �ŕK�v�ȃA�Z�b�g���O������C���X�g�[�����āA�����ƃv���W�F�N�g�Ǝ��̃X�^�C����X�N���v�g�� **gulp** ���g���Č����E�œK���A�ŏI�I�Ȍ��J�p�t�H���_�ɔz�u����Ƃ������ꂾ�B

���Ȃ݂ɁA��������[�v���W�F�N�g�e���v���[�g�͂�����](#�v���W�F�N�g�e���v���[�g�̃_�E�����[�h)����_�E�����[�h�ł���B


# �v���W�F�N�g�e���v���[�g�̊�

���[�āA�܂��͂ǂ�ȃv���W�F�N�g�ɂ��邩�Ƃ����̂��d�v���B�v���W�F�N�g�e���v���[�g�̌��t���Ƃ��ẮA�O�����\�[�X�Ɠ������\�[�X�A�����ăr���h�p�̃^�X�N�Ƃ����O�{���\���ōl���Ă����B

## �O�����\�[�X
 
 �����̃v���W�F�N�g�p�ɊO������ǂݍ��ރ��\�[�X�Q�����L�̂悤�ɒ�`���Ă݂��B�����́Abower�ŃC���X�g�[�����p�b�P�[�W�Ǘ����āAgulp�̃^�X�N�Ō��J�p�̃r���h�f�B���N�g���Ƀp�u���b�V������B

| ���\�[�X�� | �p�b�P�[�W�� | ���p�o�[�W���� | ���l |
|:---------|:-----------|:---------------:|:------|
| [Modernizr](http://modernizr.com/) | modernizr | 2.8.3 �ȏ� | �u���E�U�T�|�[�g�@�\���胉�C�u���� |
| [jQuery](https://jquery.com/) | jquery | 2.1.4 �ȏ� | IE8�Ή��Ƃ����͂�ᒆ�ɂȂ��̂ŁA2�n�ł�w |
| [Bootstrap](http://getbootstrap.com/) | bootstrap-sass | 3.3.4 �ȏ� | CSS�t���[�����[�N�B����̗�ł�Sass�Ń\�[�X���R���p�C�����ė��p���� |
| [Font Awesome](http://fortawesome.github.io/Font-Awesome/) | font-awesome-sass | 4.3.0 �ȏ� | �t���[�̃A�C�R���t�H���g���C�u���� |
| [Fuel UX](http://getfuelux.com/) | fuelux | 3.6.5 �ȏ� | jQuery+Bootstrap���̊g��UX���C�u���� |

## gulp�v���O�C��

�^�X�N�����i�[��gulp�Ŏg�p����^�X�N�p�̃v���O�C�����W���[�������L�̂悤�ɒ�`���Ă݂��i���p�o�[�W������2015/5/19���_�ł̍ŐV�j�B

| �v���O�C���� | ���p�o�[�W���� | ���p�p�r | �Q�lURL |
|:-----------|:------------:|:--------|:-------|
| asset-builder | 1.1.0 �ȏ� | �A�Z�b�g�������`�t�@�C���Ƃ��Ĉꌳ������ | [https://github.com/austinpray/asset-builder](https://github.com/austinpray/asset-builder) |
| browser-sync | 2.7.1 �ȏ� | �A�Z�b�g�\�[�X�̕ύX���m����gulp�^�X�N���������s���ăp�u���b�V���A�Z�b�g�ւ̓������s�� | [http://www.browsersync.io](http://www.browsersync.io) |
| coffee-script | 1.9.2 �ȏ� | CoffeeScript�̎��s�p���C�u���� | [http://coffeescript.org/](http://coffeescript.org/) |
| del | 1.1.1 �ȏ� | �w�肳�ꂽ�f�B���N�g����t�@�C�����폜���� | [https://www.npmjs.com/package/del](https://www.npmjs.com/package/del) |
| gulp | 3.8.11 �ȏ� | gulp�{�� | [http://gulpjs.com/](http://gulpjs.com/) |
| gulp-changed | 1.2.1 �ȏ� | �\�[�X�f�B���N�g���ƃr���h�f�B���N�g�����`�F�b�N���ĕύX���ꂽ�t�@�C�������X�g���[���ɗ��� | [https://www.npmjs.com/package/gulp-changed](https://www.npmjs.com/package/gulp-changed) |
| gulp-coffee | 2.3.1 �ȏ� | CoffeeScript�̃R���p�C�����s�� | [https://www.npmjs.com/package/gulp-coffee](https://www.npmjs.com/package/gulp-coffee) |
| gulp-coffeelint | 0.5.0 �ȏ� | CoffeeScript�̍\���`�F�b�N���s�� | [https://www.npmjs.com/package/gulp-coffeelint](https://www.npmjs.com/package/gulp-coffeelint) |
| gulp-concat | 2.5.2 �ȏ� | �����t�@�C������������ | [https://www.npmjs.com/package/gulp-concat](https://www.npmjs.com/package/gulp-concat) |
| gulp-flatten | 0.0.4 �ȏ� | �t�@�C���̃f�B���N�g���K�w�𕽒R������ | [https://github.com/armed/gulp-flatten](https://github.com/armed/gulp-flatten) |
| gulp-if | 1.2.5 �ȏ� | ���򏈗��p�B�����ɍ��v�������Ƀ^�X�N�����s���� | [https://www.npmjs.com/package/gulp-if](https://www.npmjs.com/package/gulp-if) |
| gulp-imagemin | 2.2.1 �ȏ� | GIF,JPEG,PNG,SVG�����X���X�Ōy�ʉ����� | [https://www.npmjs.com/package/gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) |
| gulp-jshint | 1.10.0 �ȏ� | JavaScript�\���`�F�b�J�[ | [https://www.npmjs.com/package/gulp-jshint](https://www.npmjs.com/package/gulp-jshint) |
| gulp-less | 3.0.3 �ȏ� | LESS�̃R���p�C�����s�� | [https://www.npmjs.com/package/gulp-less](https://www.npmjs.com/package/gulp-less) |
| gulp-pleeease | 1.2.0 �ȏ� | CSS�̃x���_�[�v���t�B�b�N�X�����t�^�A�~�j�t�@�C�A���f�B�A�N�G���œK�������ꊇ�ŏ������� | [https://github.com/danielhusar/gulp-pleeease](https://github.com/danielhusar/gulp-pleeease) |
| gulp-plumber | 1.0.0 �ȏ� | �X�g���[�����̃G���[�ɂ���ă^�X�N��������~����̂�h�� | [https://www.npmjs.com/package/gulp-plumber](https://www.npmjs.com/package/gulp-plumber) |
| gulp-rename | 1.2.2 �ȏ� | �w��̃t�@�C�������l�[������ | [https://www.npmjs.com/package/gulp-rename](https://www.npmjs.com/package/gulp-rename) |
| gulp-rev | 3.0.1 �ȏ� | �r���h���Ƀt�@�C�����Ƀ��r�W�����ԍ���ǉ����� | [https://github.com/sindresorhus/gulp-rev](https://github.com/sindresorhus/gulp-rev) |
| gulp-sass | 2.0.1 �ȏ� | Sass/SCSS�̃R���p�C�����s�� | [https://www.npmjs.com/package/gulp-sass](https://www.npmjs.com/package/gulp-sass) |
| gulp-sourcemaps | 1.5.2 �ȏ� | �r���h�\�[�X�̃\�[�X�}�b�v���o�͂��� | [https://www.npmjs.com/package/gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) |
| gulp-uglify | 1.2.0 �ȏ� | Uglify JS�𗘗p����JavaScript�t�@�C���̃~�j�t�@�C�p�v���O�C�� | [https://www.npmjs.com/package/gulp-uglify](https://www.npmjs.com/package/gulp-uglify) |
| imagemin-pngcrush | 4.1.0 �ȏ� | imagemin�v���O�C���̊g�����C�u�����BPNG�摜�̌��F�ƃr�b�g�[�x�������� | [https://github.com/imagemin/imagemin-pngcrush](https://github.com/imagemin/imagemin-pngcrush) |
| jshint-stylish | 1.0.2 �ȏ� | JavaScript�\���`�F�b�J�[�ujshint�v�̏o�͂𐮌`����t�B���^ | [https://www.npmjs.com/package/jshint-stylish](https://www.npmjs.com/package/jshint-stylish) |
| lazypipe | 0.2.3 �ȏ� | �����̃^�X�N���O���[�v���i�N���[�W�����j���ĕʂ̃^�X�N�ōė��p�ł���悤�ɂ��� | [https://github.com/OverZealous/lazypipe](https://github.com/OverZealous/lazypipe) |
| merge-stream | 0.1.7 �ȏ� | �^�X�N���̕����X�g���[�����}�[�W���� | [https://www.npmjs.com/package/merge-stream](https://www.npmjs.com/package/merge-stream) |
| minimist | 1.1.1 �ȏ� | gulp�R�}���h�iCLI�j�̈������^�X�N�Ŏ󂯎���悤�ɂȂ� | [https://www.npmjs.com/package/minimist](https://www.npmjs.com/package/minimist) |
| run-sequence | 1.1.0 �ȏ� | �^�X�N��C�ӂ̏��ԂŁi�����I�Ɂj���s���� | [https://www.npmjs.com/package/run-sequence](https://www.npmjs.com/package/run-sequence) |
| traverse | 0.6.6 �ȏ� | JS�I�u�W�F�N�g���̊K�w�𖳎����Ă��ׂẴm�[�h���ċA�I�ɏ������� | [https://www.npmjs.com/package/traverse](https://www.npmjs.com/package/traverse) |
| wiredep | 2.2.2 �ȏ� | �����I��LESS��Sass��Bower�ˑ��֌W��ǂݍ��݂܂��B | [https://github.com/taptapship/wiredep](https://github.com/taptapship/wiredep) |

���ǁA`traverse` �͎g��Ȃ������񂾂��A�܂��A�@�\�Љ�I�Ƀ��X�g�Ɏc���Ă���B���ƁA`gulpfile.js` �� CoffeeScript �ŏ����Ƃ��̃j�[�Y���Ȃ�����ACoffeeScript �̎��s���͂���Ȃ����ȁB

## �f�B���N�g���\���Ɗe��ݒ�t�@�C��

�ėp�I�Ɏg����Ǝv����v���W�F�N�g�p�f�B���N�g���\�������L�̂悤�ɂ��Ă݂��B
�R�����{���ɔėp�I�Ȃ̂��ǂ��������Ƃ����Ƃ���́A�܂��A��U�����Ă�����w

```bash:
/my-project/
����.git/
����assets/  #<-- �r���h�f�B���N�g���i�p�u���b�V���p�j
��  ����fonts/  #<-- �ǂݍ��܂ꂽ�t�H���g�Q�����ׂĊi�[
��  ����images/  #<-- �y�ʉ����ꂽ�摜�Q�����ׂĊi�[
��  ����scripts/  #<-- �R���p�C��+����+�~�j�t�@�C���ꂽJavaScript�Q�����ׂĊi�[
��  ����styles/  #<-- �R���p�C��+����+�~�j�t�@�C���ꂽCSS�Q�����ׂĊi�[
��  ����.gitkeep
����bower_components/  #<-- bower install �ɂ���č쐬�����p�b�P�[�W�i�[�f�B���N�g��
����lib/  #<-- �v���W�F�N�g�̃��W�b�N���i�[����f�B���N�g���i�C�Ӂj
����node_modules/  #<-- npm install �ɂ���č쐬����郂�W���[���i�[�f�B���N�g��
����sources/  #<-- �A�Z�b�g�\�[�X�f�B���N�g���i�J���p�j
��  ����images/  #<-- ���{�摜�t�@�C���Q���i�[
��  ����scripts/  #<-- �����̃v���W�F�N�g�p��JavaScript���i�[
��  ��  ����coffee/  #<-- �����̃v���W�F�N�g�p��CoffeeScript���i�[
��  ��  ��  ����custom-main.coffee
��  ��  ����custom-main.js
��  ����styles/  #<-- Sass/SCSS��LESS�̃I���W�i���\�[�X���i�[
��  ��  ����common/
��  ��  ��  ����_global.less
��  ��  ��  ����_variables.less
��  ��  ��  ����_variables.scss
��  ��  ����layouts/
��  ��  ��  ����_header.less
��  ��  ��  ����_body.less
��  ��  ��  ����_footer.less
��  ��  ����concat-assets.scss  #<-- SCSS�p�� importer �X�^�C��
��  ��  ����custom-main.less  #<-- LESS�p�� importer �X�^�C��
��  ����manifest.json  #<-- �A�Z�b�g�\�[�X�̃r���h��`�t�@�C��
����templates/  #<-- �v���W�F�N�g�̃e���v���[�g���i�[����f�B���N�g���i�C�Ӂj
����.bowerrc
����.gitignore
����.travis.yml  #<-- Travis CI�ɂ��r���h���ؗp�̐ݒ�i���̋L���ł̏ڍׂ͊����j
����.jshintrc
����bower.json
����gulpfile.js
����index.php  #<-- �v���W�F�N�g�̋N�_�t�@�C��
����package.json
����README.md
```

�Ǘ��Ώۂ̃\�[�X���珜�O������̂Ƃ��ẮA�r���h�f�B���N�g����npm���W���[���Q�Abower�ŃC���X�g�[�����ꂽ�R���|�[�l���g�p�b�P�[�W�Q�ƂȂ�BGitHub�ł̃\�[�X�Ǘ���O��Ƃ��Ă���̂ŁA `.gitignore` �ɂ͉��L�̂悤�ɏ��O��`�����Ă����B

```:.gitignore
assets/
bower_components/
node_modules/
npm-debug.log
```

bower�p�̐ݒ�Ƃ��ẮA`bower install` ���s���ɎQ�Ƃ���p�b�P�[�W��`�t�@�C���ƃA�Z�b�g�\�[�X�W�J�p�̃f�B���N�g�����`�ł��� `.bowerrc` �ɉ��L�̂悤�ɐݒ���L�q���Ă����B

```json:.bowerrc
{
  "directory": "bower_components",
  "json": "bower.json"
}
```

`.jshintrc` ��gulp�v���O�C���� `jshint` �ɂ�JavaScript�\���`�F�b�N���s���ꍇ�́A�`�F�b�N���[�����`�ł���B���̃e���v���[�g�ł̐ݒ�͉��L�̂悤�ɂ��Ă��邪�A���̃��[����`�̓v���W�F�N�g�̐����ɉ����Ē�������K�v�����邩�ƁB

```json:.jshintrc
{
  "bitwise": true,
  "browser": true,
  "curly": true,
  "eqeqeq": true,
  "eqnull": true,
  "esnext": true,
  "immed": true,
  "jquery": true,
  "latedef": true,
  "newcap": true,
  "noarg": true,
  "node": true,
  "strict": false
}
```

�ڂ����́Amaccotsan ���񂪁u[.jshintrc���{���](http://qiita.com/maccotsan/items/0fb82ccab014f49ff95d)�v�ɂĉ������Ă���̂ŁA��������Q�Ƃ��Ă݂Ă��������B�Ȃ��A[���{�h�L�������g�͂�����](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)�ł���B


# �e�탊�\�[�X�A�p�b�P�[�W���C���X�g�[������

## �K�v��npm�p�b�P�[�W���C���X�g�[��

�܂��Agulp �ŃR���p�C���r���h���s���ɂ������ẮAgulp ���͂��߂Ƃ����K�v�ȃv���O�C�����C���X�g�[������K�v������B�K�v�ɉ����� `npm install gulp gulp-sass` �Ƃ��ʂɃC���X�g�[�����Ă������̂����A�ʓ|�Ȃ̂ŕK�v�Ȃ��͈̂ꊇ�ŃC���X�g�[���ł���悤�ɂ������B���̂��߂ɂ́A�v���W�F�N�g�p�̃p�b�P�[�W��`�t�@�C���u **package.json** �v����������i `npm init` �R�}���h�ł��쐬�ł��邪�A����͐ݒ���e�𗝉������������̂Ŏ����ō���Ă݂��j�B
�����`���� gulp �v���O�C�����ꊇ�C���X�g�[�����邽�߂̐ݒ�͉��L�̂悤�ɂȂ�B

```
{
  "name": "my-project",
  "version": "0.1.0",
  "author": "project-owner <owner@email.addr>",
  "homepage": "http://my-web-site/",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git://github.com/project-owner/my-project.git"
  },
  "bugs": {
    "url": "https://github.com/project-owner/my-project/issues"
  },
  "licenses": [
    {
      "type": "GPL-2.0",
      "url": "http://opensource.org/licenses/GPL-2.0"
    }
  ],
  "scripts": {
    "build": "bower install && gulp",
    "jshint": "gulp jshint"
   },
  "engines": {
    "node": ">= 0.12.0",
    "npm": ">=2.1.5"
  },
  "devDependencies": {
    "asset-builder": "^1.0.2",
    "browser-sync": "^2.7.1",
    "coffee-script": "^1.8.0", 
    "del": "^1.1.1",
    "gulp": "^3.8.11",
    "gulp-changed": "^1.2.1",
    "gulp-coffee": "^2.3.0",
    "gulp-coffeelint": "^0.4.0",
    "gulp-concat": "^2.5.2",
    "gulp-flatten": "0.0.4",
    "gulp-if": "^1.2.5",
    "gulp-imagemin": "^2.2.1",
    "gulp-jshint": "^1.9.4",
    "gulp-less": "^3.0.2",
    "gulp-pleeease": "^1.2.0",
    "gulp-plumber": "^1.0.0",
    "gulp-rename": "^1.2.0",
    "gulp-rev": "^3.0.1",
    "gulp-sass": "^2.0.0",
    "gulp-sourcemaps": "^1.5.1",
    "gulp-uglify": "^1.1.0",
    "imagemin-pngcrush": "^4.0.0",
    "jshint-stylish": "^1.0.1",
    "lazypipe": "^0.2.2",
    "merge-stream": "^0.1.7",
    "minimist": "^1.1.1",
    "run-sequence": "^1.0.2",
    "traverse": "^0.6.6",
    "wiredep": "^2.2.2"
  }
}
```

`package.json` ��[�L�q�d�l�͂�����](http://liberty-technology.biz/PublicItems/npm/package.json.html)���Q�ƁB
`scripts` �I�v�V�����ɂ͂��̃v���W�F�N�g�f�B���N�g�����inpm���[�J���C���X�g�[���f�B���N�g�����j�ŗL����CLI�R�}���h���`�ł���B�����Œ�`�����R�}���h�� `npm build` �̂悤�ɗ��p�ł��A����̋L���ł͏ڂ��������͂��Ȃ����ATravis CI�𗘗p�����r���h�e�X�g�Ŏg�����ƍl���Ă���B

��L�� `package.json` ����`����Ă����ԂŁA�R�}���h���C������A

```bash:
$ npm install
```

�����s����ƁA���ׂĂ�npm���W���[�����ꊇ�ŃC���X�g�[�������B���̃v���W�F�N�g�e���v���[�g�ł͈ˑ����W���[�����������߁A�C���X�g�[���ɂ͂�����Ǝ��Ԃ�������B

## bower�ŊO�����\�[�X���C���X�g�[��

���ɁA��`�����O�����\�[�X�� bower �ŃC���X�g�[������B����ɂ͂܂��A�C���X�g�[������O�����\�[�X�̈ˑ��֌W���܂񂾃p�b�P�[�W��`�t�@�C���u **bower.json** �v���������ăp�b�P�[�W����ǉ�����K�v������i `bower init` �R�}���h�ł��쐬�ł��邪�A����͐ݒ���e�𗝉������������̂Ŏ����ō���Ă݂��j�B
�����`�����O�����\�[�X���C���X�g�[������ꍇ�A���L�̂悤�Ȑݒ�ɂȂ�B

```json:bower.json
{
  "name": "my-project",
  "version": "0.1.0",
  "homepage": "http://my-web-site/",
  "authors": [
    "project-owner"
  ],
  "license": "GPL-2.0",
  "private": true,
  "dependencies": {
    "modernizr": "~2.8.3",
    "jquery": "~2.1.4",
    "bootstrap-sass": "~3.3.4",
    "font-awesome-sass": "~4.3.0",
    "fuelux": "~3.6.5"
  },
  "overrides": {
    "modernizr": {
      "main": "./modernizr.js"
    },
    "bootstrap-sass": {
      "main": [
        "./assets/stylesheets/_bootstrap.scss",
        "./assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
        "./assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
        "./assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
        "./assets/fonts/bootstrap/glyphicons-halflings-regular.woff",
        "./assets/fonts/bootstrap/glyphicons-halflings-regular.woff2",
        "./assets/javascripts/bootstrap.js"
      ]
    },
    "font-awesome-sass": {
      "main": [
        "./assets/stylesheets/font-awesome.scss",
        "./assets/fonts/font-awesome/fontawesome-webfont.eot",
        "./assets/fonts/font-awesome/fontawesome-webfont.svg",
        "./assets/fonts/font-awesome/fontawesome-webfont.ttf",
        "./assets/fonts/font-awesome/fontawesome-webfont.woff",
        "./assets/fonts/font-awesome/fontawesome-webfont.woff2"
      ]
    },
    "requirejs": {
      "main": null
    },
    "bootstrap": {
      "main": null
    }
  }
}
```

`bower.json` ��[�L�q�d�l�͂�����](https://github.com/bower/bower.json-spec)���Q�ƁB
`overrides` �I�v�V�����́Abower �ŃC���X�g�[�����ꂽ�p�b�P�[�W���� `bower.json` �̈ˑ��֌W��`���㏑�����邽�߂̃I�v�V�����ł���B����𗘗p���āA�I���W�i���p�b�P�[�W���� `main` �Œ�`����Ă���ˑ��֌W���㏑�����āA�����̃v���W�F�N�g��p�Ƀp�b�P�[�W���̃��\�[�X�𗘗p�ł���悤�ɂ��Ă���i�����A�C���X�g�[�����ꂽ�I���W�i���p�b�P�[�W���� `main` ���w�肳��Ă��Ȃ������ꍇ�ɁA���̃I�v�V�����̒l�ő�ւ����j�B
���̃v���W�F�N�g�e���v���[�g�ł́u **Fuel UX** �v�̃p�b�P�[�W�𗘗p����̂����A���̃p�b�P�[�W�̃C���X�g�[�����ɂ́uLESS�ł�bootstrap�v��u requirejs �v�A�u moment �v�Ƃ������ˑ��p�b�P�[�W���ꏏ�ɃC���X�g�[������Ă��܂��B����A�ubootstarap�v��Sass�ł𗘗p���邽�߁ALESS�ł̃p�b�P�[�W�͗v�炸�A�܂��uFuel UX�v�̓ǂݍ��݂Ɂurequirejs�v���g��Ȃ��̂ł��̃p�b�P�[�W���s�v���B�Ȃ̂ŁA�s�v�ȃp�b�P�[�W�� `main` �����菜���悤�� `overrides` ���Ă���B

���� `bower.json` ����`���ꂽ��ԂŁA�R�}���h���C������A

```bash:
$ bower install
```

���������s����ƁA��`�����p�b�P�[�W���ˑ�����p�b�P�[�W���܂߂Ď����ŃC���X�g�[�������B


# gulp �̃^�X�N�����

## �^�X�N�����l����

�^�X�N�����i�[���g���ăr���h���s���ꍇ�A�ǂ̂悤�ȃ\�[�X���g���āA�ǂ̏����łǂ�ȕ��Ƀr���h���邩�A�ŏI�I�Ȍ��J�p�̃A�Z�b�g�Ƃ��Ăǂ̂悤�Ȃ��̂𗘗p����̂��A�Ƃ������Ƃ��l����K�v������B�l�����Ƃ��ẮA���J�p�̃A�Z�b�g�̎�ނ���r���h�������t���悤�ɍl����ƕK�v�ȃ^�X�N��􂢏o���₷���B

> �Ⴆ�΁A���J�p�̃X�^�C���V�[�g�t�@�C���́umain.css�v��ɂ������B�umain.css�v�Ɋ܂܂��͍̂ŐV�ł́uBootstrap�v�̃X�^�C����`�̌�ɁA�����̃v���W�F�N�g�p�ɒ�`�����X�^�C�����㏑�������悤�ȏ����Ō������ACSS�ɂ̓x���_�[�v���t�B�b�N�X�������t�^���āA����Ƀ~�j�t�@�C���ė��p����B�����āA�����̃v���W�F�N�g�p�̃X�^�C����`��Sass�ŋL�q�������B

��������ȗ~�]�𖞂������߂̃^�X�N���`����ꍇ�̏�����:

1. bower��Sass�ł�Bootstrap�ŐV�ł��擾����
2. Sass�`����Bootstrap�Ǝ����̃v���W�F�N�g�p�X�^�C����CSS�t�@�C���փR���p�C������
3. �ŐV��Bootstrap�̃X�^�C���̌�Ɏ����̃v���W�F�N�g�p�̃X�^�C������������
4. ���������X�^�C���Ƀx���_�[�v���t�B�b�N�X��t�^���ă~�j�t�@�C������
5. �r���h�f�B���N�g���Ɂumain.css�v�Ƃ��ďo�͂���

�������ۂ� gulp �̃^�X�N�Ƃ��Ēu�������Ă݂��ꍇ�̏�����:

1. wiredep �� bower �ŃC���X�g�[�����ꂽ�p�b�P�[�W�ubootstrap-sass�v�̈ˑ��֌W��ǂݏo�� 
2. Sass/SCSS�t�@�C��������΁A gulp-sass �ŃR���p�C��
3. asset-builder �ŃX�^�C���̌���������ǂݏo��
4. gulp-concat �ŃX�^�C��������
5. gulp-pleeease �Ńx���_�[�v���t�B�b�N�X�t�^�A�~�j�t�@�C���s��
6. �r���h�f�B���N�g���Ɂumain.css�v�Ƃ��ďo�͂���

���̗���ɉ����āA���ۂ̃^�X�N�Ƃ��� `gulpfile.js` �ɒ�`���Ă������ƂŎ����p�v���W�F�N�g�̃^�X�N�����i�[���������鎟�悾�B

�܂��A����͊T�O�I�ȕ��@�Ȃ�ŁA���ۂɍ���Ă݂�Ɗ�]�ʂ�̃^�X�N���Ȃ��Ȃ��ł��Ȃ��񂾂��ǂ˥��;


## �^�X�N�t�@�C���̍쐬

gulp �̃^�X�N�� `gulpfile.js` �ɒ�`����B����̔ėp���̗�ł̓^�X�N�L�q�̗ʂ������Ȃ邱�Ƃ������āA�ݒ���ו������ēs�x�⑫���Ă����B

### Initialize����

�܂��A�^�X�N�ŕK�v�ƂȂ鏈�������C�u�����Ƃ��ăO���[�o���X�R�[�v�ɓǂݍ��ށB

```
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
```

���̃Z�N�V�����͂��܂����������Ȃ��Ǝv�����A`minimist` �v���O�C���̒�`
���� `asset-builder` �v���O�C���̒�`���ɂ��Ă����⑫���Ă����B

`minimist` �v���O�C�����g�����Ƃ�CLI�� gulp �R�}���h�ɕt�^���ꂽ�������^�X�N���Ŏ󂯎���悤�ɂȂ�B�����ł�CLI�Ŏw�肳�ꂽ���������\�b�h�ɓn���Ă��āA�^�X�N���̃t���O�I�u�W�F�N�g `enabled` �ň������e��t���O�ɓW�J���Ă���B���ۂɂ͏��p���p�̃r���h�R�}���h�Ƃ��� `gulp --production` �����s���ꂽ�ꍇ�ɁA�ꕔ�̃^�X�N������؂�ւ��邽�߂̒�`�ł���B

`asset-builder` �v���O�C���̓r���h�\�[�X�̈ˑ��֌W��r���h�����Ȃǂ�ʓr `manifest.json` �ɒ�`���āA���̒�`�t�@�C���𗘗p���� gulp �^�X�N�����s�ł���悤�ɂ��郂�W���[�����B�����ł́A`sources/manifest.json` ���`�t�@�C���Ƃ��ēǂݍ��݁A

- `path` : �e�A�Z�b�g�t�@�C���̊i�[�f�B���N�g���̃p�X���
- `config` :  �r���h�p�̔C�ӂ̐ݒ�l
- `globs` : �ŏI�I�ȃr���h�\�[�X�̏o�͐���i `gulp.src()` �ŌĂ΂��j
- `project` : first-party�A�Z�b�g�̃p�X���

���������ꂼ���`���Ă���B���̃r���h��`�t�@�C�� `sources/manifest.json` �ɂ��Ă�[��q����](#�r���h�t�@�C���̒�`)�B

### �e��N���[�W����`

`gulpfile.js` ���ōė��p����悤�ȃ^�X�N�� `lazypipe` �v���O�C�����g���ăN���[�W���Ƃ��Ď��O�ɒ�`���Ă����B

�܂��́ACSS�n�̃^�X�N�E�N���[�W���B

```js:
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
        outputStyle: 'nested', // libsass �ł͂܂���Ή�
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
```

> ���ꂼ��̃v���O�C���ł̃r���h�������s���O�� `gulp-if` ���g���Ĉ��� `--production` ���w�肳��Ă��邩�ǂ����̔�����s���Ă���B�܂��A `gulp-sourcemap` �̓r���h���ꂽ�\�[�X���}�b�s���O���Ă����J���p�̃v���O�C���ŁA����� `init` ���\�b�h���� `write` ���\�b�h���w�肳�ꂽ�Ƃ���܂ł̃r���h���}�b�s���O���Ă����B

���ɁAJavaScript�n�̃^�X�N�E�N���[�W���B

```js:
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
```

> JavaScript�͌����Ƃ��āA�����ƃ~�j�t�@�C�������Ȃ����A�J���p�r���h�i `gulp` �R�}���h���s���A `--production` �����Ȃ��j�ł́A�R�����g���̐擪�� `!` �������Ă���R�����g���폜���Ȃ��悤�ɂ��Ă���i `uglify({ preserveComments: 'some' })` ���j�B����ɂ���āA�O�����\�[�X�Ǝ��O��JavaScript�̌������������������̊m�F���e�ՂɂȂ�B

�Ō�ɁA���r�W�����ݒ�t�@�C���̏������ݗp�N���[�W��

```js:
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
```

> ���p���ւ̃r���h�i`gulp --production` �R�}���h���s�j���A�r���h���ꂽ�A�Z�b�g�Q�̃��r�W�����n�b�V���t�t�@�C���̃��X�g�p�� `assets.json` ���r���h�f�B���N�g�������ɏo�͂��鏈���B

### ���C���^�X�N

#### �X�^�C���n�^�X�N

�P�̎��s�R�}���h�� `gulp styles` �B�^�X�N�̗���Ƃ��ẮAbower�p�b�P�[�W�̈ˑ��֌W��ǂݍ��݁��R���p�C����������CSS�œK���B�����v���R���p�C���G���[�����������ꍇ�A�f�t�H���g�ł͌x���݂̂����O�ɏo�͂���B�������A `gulp --production styles` �Ŏ��s���ꂽ�ꍇ�́A�^�X�N�����S�Ɏ��s�����ďI��������B

```js:
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
```

> �Ȃ��Abower �p�b�P�[�W�̈ˑ��֌W�ǂݍ��݂͕ʓr�u `wiredep` �^�X�N�v���Ă�ł���B

#### �X�N���v�g�n�^�X�N

�P�̎��s�R�}���h�� `gulp scripts` �B�^�X�N�̗���Ƃ��ẮACoffeeScript�̃R���p�C����JSHint�ō\���`�F�b�N���N���[�W����jsTasks���R�[���B�G���[�����͂��ꂼ��̍\���`�F�b�N���ɍs����B

```js:
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
```

#### CoffeeScript�n�^�X�N

�P�̎��s�R�}���h�� `gulp coffee` �BCoffeeScript�̍\���`�F�b�N��ɃG���[���Ȃ���΃R���p�C�����s���^�X�N�ŁA�X�N���v�g�n�^�X�N `gulp scripts` �̃C���i�[�^�X�N�ƂȂ��Ă���B�P�̂Ŏ��s����K�v�͂��܂�Ȃ��B

```js:
gulp.task('coffee', function() {
  return gulp.src(path.source + 'scripts/coffee/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'))
    .pipe(coffee())
    .pipe(gulp.dest(path.source + 'scripts'));
});
```

> ���̃v���W�F�N�g�ł� `sources/scripts/coffee/` ����CoffeeScript�݂̂��R���p�C���ΏۂƂ��Ă��āA�R���p�C����͓�����JS�t�@�C���� `sources/scripts/` �Ƀr���h�����B����JS�t�@�C���𒆊ԃ\�[�X�Ƃ��āA�ŏI�I�ȃr���h���s���邽�߁A���ԃ\�[�X�ł���JS�t�@�C����ύX���Ă� `gulp` �R�}���h���s���� CoffeeScript ����㏑������Ă��܂��B�����AJS�t�@�C�������Ńv���W�F�N�g�̃X�N���v�g���Ǘ��������ꍇ�́A�X�N���v�g�n�^�X�N����CoffeeScript�n�^�X�N�����O����K�v������B�܂�́A�X�N���v�g�n�^�X�N�̊֐���`���� `gulp.task('scripts', ['jshint'], function() {...` �ƕύX���邱�ƂőΉ��ł���B

#### JavaScript�\���`�F�b�N �^�X�N

�P�̎��s�R�}���h�� `gulp jshint` �BJavaScript�̍\���`�F�b�N�݂̂��s���^�X�N�B�X�N���v�g�n�^�X�N `gulp scripts` �̃C���i�[�^�X�N�ł�����B

```js:
gulp.task('jshint', function() {
  return gulp.src([
    'bower.json', 'gulpfile.js'
  ].concat(project.js))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
```

#### �t�H���g�n�^�X�N

�P�̎��s�R�}���h�� `gulp fonts` �B�^�X�N���e��bower�p�b�P�[�W�ŃC���X�g�[���������ׂẴt�H���g���擾���A�p�X�𕽒R�����ăr���h�f�B���N�g���Ƀp�u���b�V������B

```js:
gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + 'fonts'))
    .pipe(browserSync.stream());
});
```

> `Bootstrap` �� `Font Awesome` �̃A�C�R���t�H���g�̓X�^�C���V�[�g���Ńp�X���w�肵�Ă��邽�߁A�r���h��ɑ��΃p�X���ς���Ă��܂��ƃp�u���b�V�����Ă����p�ł��Ȃ��Ȃ�B���̂��߁A�X�^�C���n�^�X�N��Sass/SCSS�̃R���p�C�����鎞�Ɏ����̃v���W�F�N�g�p�̃t�H���g�p�X�𖄂ߍ���ł��K�v������B���̖��ߍ��݂́A`sources/styles/concat-assets.scss` �ōs���Ă���i�ڂ����͌�q����u[�t�H���g�p�X�̃��[�J���C�Y](#�t�H���g�p�X�̃��[�J���C�Y)�v�ɂāj�B

#### �C���[�W�n�^�X�N

�P�̎��s�R�}���h�� `gulp images` �B�^�X�N���e�̓\�[�X�f�B���N�g������ `images` �t�H���_���̉摜�t�@�C�������X���X���k���ăr���h�f�B���N�g���Ƀp�u���b�V��������́B

```js:
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
```

#### �N���[���A�b�v �^�X�N

�P�̎��s�R�}���h�� `gulp clean` �B�r���h�f�B���N�g�������S�ɍ폜���郆�[�e�B���e�B�^�X�N�B

```js:
gulp.task('clean', require('del').bind(null, [path.dist]));
```

#### �Ď��iWatch�j�^�X�N

�P�̎��s�R�}���h�� `gulp watch` �B �u���E�U�����@�\�iBrowsrSync�j�𗘗p���āA����̃f�B���N�g����t�@�C���ւ̕ύX���Ď����A�ύX�����m���ꂽ�ꍇ�ɔC�ӂ̃r���h�^�X�N�����s������́B���� `gulp watch` �̃v���Z�X��L�������Ă����ƁA�\�[�X�ւ̕ύX�������Ńr���h���ɔ��f����邽�߁A�������� `gulp` �̃R�}���h�����s����K�v���Ȃ��Ȃ�B

```js:
gulp.task('watch', function() {
  browserSync.init({
    files: ['{lib,templates}/**/*.php', '*.php'],
    proxy: config.devUrl
  });
  gulp.watch([path.source + 'styles/**/*'], ['styles']);
  gulp.watch([path.source + 'scripts/**/*'], ['coffee', 'jshint', 'scripts']);
  gulp.watch([path.source + 'fonts/**/*'], ['fonts']);
  gulp.watch([path.source + 'images/**/*'], ['images']);
  gulp.watch(['bower.json', 'sources/manifest.json'], ['build']);
});
```

> ����CoffeeScript�ł̃R���p�C���𗘗p���Ȃ��ꍇ�́A `gulp.watch([path.source + 'scripts/**/*'], ['jshint', 'scripts']);` �Ƃ��Ă����B

#### Wiredep �^�X�N

�P�̎��s�R�}���h�� `gulp wiredep` �Bbower�p�b�P�[�W�� LESS �� Sass/SCSS �̈ˑ��֌W�������I�ɓǂݍ��ށB

```js:
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;
  return gulp.src(project.css)
    .pipe(wiredep())
    .pipe(changed(path.source + 'styles', {
      hasChanged: changed.compareSha1Digest
    }))
    .pipe(gulp.dest(path.source + 'styles'));
});
```


#### �r���h�^�X�N

�P�̎��s�R�}���h�� `gulp build` �B���ׂẴ^�X�N�����s����B�������A���O�ɃN���[���A�b�v�^�X�N�͎��s���Ȃ��B

```js:
gulp.task('build', function(callback) {
  runSequence('styles',
              'scripts',
              ['fonts', 'images'],
              callback);
});
```

> ���̃^�X�N�����s�O�� `gulp` �� `gulp wiredep` �����s���� Bower �p�b�P�[�W�̈ˑ��\����W�J�����Ȃ��ƁA���҂���r���h���ʂ𓾂��Ȃ��̂Œ��ӁB

#### �f�t�H���g�^�X�N

�P�̎��s�R�}���h�� `gulp` �B���O�ɃN���[���A�b�v���s������Ƀr���h�^�X�N�����s����B��{�I�ɃR���p�C���r���h���͂��̃^�X�N�����s����B���p���̏ꍇ�̃R�}���h�́A`gulp --production` �ƂȂ�B

```js:
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
```

### �S�^�X�N�̃\�[�X

`gulpfile.js` �̑S�\�[�X�͉��L�̂悤�ɂȂ�B

```js:gulpfile.js
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


// Tasks to write revision
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
  return gulp.src(path.source + 'scripts/*.coffee')
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
```


## �r���h�t�@�C���̒�`

gulp�̃^�X�N�Ńr���h�����t�@�C���̒�`���s���̂��A `sources/manifest.json` �Ƃ���JSON�t�@�C���ł���B���̃t�@�C���ł́A�\�[�X�t�@�C���̒u���ꏊ��r���h�t�@�C���̏o�͐�A�ǂ̃\�[�X���������čŏI�I�ɂǂ�ȃt�@�C���Ƃ��ăr���h���邩�A`gulp watch` �^�X�N�ŗ��p���� BrowserSync �@�\�p�� Proxy �ݒ�Ȃǂ���`�����B

����̃v���W�F�N�g�p�̒�`���e�͉��L�̂Ƃ���B

```json:sources/manifest.json
{
  "dependencies": {
    "main.js": {
      "files": [
        "scripts/custom-main.js"
      ],
      "bower": [
        "bootstrap",
        "fuelux",
        "moment"
      ]
    },
    "assets.css": {
      "files": [
        "styles/concat-assets.scss"
      ],
      "main": true
    },
    "main.css": {
      "files": [
        "styles/custom-main.less"
      ]
    },
    "jquery.js": {
      "bower": ["jquery"]
    },
    "modernizr.js": {
      "bower": ["modernizr"]
    },
    "fuelux.css": {
      "bower": [
        "fuelux"
      ]
    }
  },
  "paths": {
    "source": "sources/",
    "dist": "assets/"
  },
  "config": {
    "devUrl": "localhost:8000"
  }
}
```

�ݒ�l�̏ڍׂ͉��L�̂Ƃ���ł���:

- `dependencies` �I�v�V���� : gulp�^�X�N�ɂ���ăr���h�����t�@�C�����Ƃ��̃t�@�C���Ɋ܂܂�郊�\�[�X�̈ˑ��֌W���`����B���ӂ��K�v�Ȃ̂��A `files` �Ŏw�肵���t�@�C���Q�͍Ō�Ɍ�������邱�ƁB����� `bower` �I�v�V�����Ƀp�b�P�[�W�����w�肷��ƁA�w�肳�ꂽ�p�b�P�[�W�� `bower.json` �i�f�t�H���g�� `bower_components/` �̊e�p�b�P�[�W�t�H���_���� `bower.json` �t�@�C���j���� `main` �I�v�V�����ɒ�`����Ă��郊�\�[�X�������ΏۂɂȂ�B�������A `my-project/` ������ `bower.json` �� `overrides` �I�v�V�������w�肵�Ă��郊�\�[�X�Ɋւ��Ă͂�����Ŏw�肵�����\�[�X���g����B���� `main` �I�v�V������ `true` ���w�肷��ƁA`bower.json` ���� `main` �I�v�V�����ɒ�`����Ă��邷�ׂẴ��\�[�X����������B
- `Paths` �I�v�V���� : bower �ŃC���X�g�[�����ꂽ�O�����\�[�X�ȊO�̃r���h���\�[�X���i�[����Ă���f�B���N�g���p�X�ƁAgulp�ɂ���ăr���h�����A�Z�b�g�̏o�̓f�B���N�g���̃p�X���v���W�F�N�g���[�g����̑��΃p�X�Ŏw�肷��B `sources` �I�v�V�����Ƀr���h���f�B���N�g�����A `dist` �Ƀr���h��̏o�̓f�B���N�g�����w�肷��B������ `/` ���K�v�B
- `config` �I�v�V���� : `gulp watch` �R�}���h��BrowserSync����Proxy�z�X�g�̐ݒ�B�z�X�g����FQDN��ݒ肷��B

���Ȃ݂ɁA���̃v���W�F�N�g�̃r���h�t�@�C���̒�`�ŊJ�����p�� `gulp` �R�}���h�����s����ƁA `assets/` �f�B���N�g�����ɁA���L�̂悤�ȍ\���ŃA�Z�b�g�t�@�C�������������B

```bash:
/my-project/
����assets/
   ����fonts/
   ��  ����fontawesome-webfont.eot    #<-- Font Awesome �̃A�C�R���t�H���g
   ��  ����fontawesome-webfont.svg    #<-- Font Awesome �̃A�C�R���t�H���g
   ��  ����fontawesome-webfont.ttf    #<-- Font Awesome �̃A�C�R���t�H���g
   ��  ����fontawesome-webfont.woff   #<-- Font Awesome �̃A�C�R���t�H���g
   ��  ����fontawesome-webfont.woff2  #<-- Font Awesome �̃A�C�R���t�H���g
   ��  ����fuelux.eot   #<-- Fuel UX �̃A�C�R���t�H���g
   ��  ����fuelux.svg   #<-- Fuel UX �̃A�C�R���t�H���g
   ��  ����fuelux.ttf   #<-- Fuel UX �̃A�C�R���t�H���g
   ��  ����fuelux.woff  #<-- Fuel UX �̃A�C�R���t�H���g
   ��  ����glyphicons-halflings-regular.eot    #<-- Bootstrap �̃A�C�R���t�H���g
   ��  ����glyphicons-halflings-regular.svg    #<-- Bootstrap �̃A�C�R���t�H���g
   ��  ����glyphicons-halflings-regular.ttf    #<-- Bootstrap �̃A�C�R���t�H���g
   ��  ����glyphicons-halflings-regular.woff   #<-- Bootstrap �̃A�C�R���t�H���g
   ��  ����glyphicons-halflings-regular.woff2  #<-- Bootstrap �̃A�C�R���t�H���g
   ����images/  #<-- sources/images/ �ɉ摜������Έ��k�t�@�C�����i�[
   ����scripts/
   ��  ����jquery.js      #<-- jQuery �̃R�A�X�N���v�g
   ��  ����jquery.js.map  #<-- jquery.js �������̃\�[�X�}�b�v�t�@�C��
   ��  ����main.js        #<-- ���̃v���W�F�N�g�p�̃��C���X�N���v�g�i���j
   ��  ����main.js.map    #<-- main.js �������̃\�[�X�}�b�v�t�@�C��
   ��  ����modernizr.js      #<-- Modernizr �̃R�A�X�N���v�g
   ��  ����modernizr.js.map  #<-- modernizr.js �������̃\�[�X�}�b�v�t�@�C��
   ����styles/
       ����assets.css      #<-- Bootstrap �� Font Awesome �̃X�^�C��
       ����assets.css.map  #<-- assets.css �������̃\�[�X�}�b�v�t�@�C��
       ����fuelux.css      #<-- Fuel UX �̃X�^�C��
       ����fuelux.css.map  #<-- fuelux.css �������̃\�[�X�}�b�v�t�@�C��
       ����main.css        #<-- ���̃v���W�F�N�g�p�̃��C���X�^�C���i���j
       ����main.css.map    #<-- main.css �������̃\�[�X�}�b�v�t�@�C��
```

�������A���ꂼ��̃X�N���v�g��X�^�C���̃t�@�C���̓~�j�t�@�C��œK�����s��ꂽ��Ԃł���B���ꂼ��̃r���h�t�@�C���̒��g�͊e�\�[�X�}�b�v�t�@�C�����J���Ă݂邱�ƂŊm�F�\���B���Ȃ݂ɁA�r���h�����v���W�F�N�g�p�̃��C���X�N���v�g�i `main.js` �j�ƃ��C���X�^�C���i `main.css` �j�̒��g�͉��L�̂悤�ɂȂ��Ă���B

| �r���h�t�@�C�� | ���e |
|:------------:|:----|
| main.js | `bower_components/bootstrap/dist/js/bootstrap.js` <br> `bower_components/moment/moment.js` <br> `bower_components/fuelux/dist/js/fuelux.js` <br> `sources/scripts/custom-main.js` <br> ����������ă~�j�t�@�C���ꂽ�X�N���v�g |
| main.css | `sources/styles/custom-main.less` <br> `sources/styles/common/_global.less` <br> `sources/styles/common/_valiables.less` <br> `sources/styles/layouts/_header.less` <br> `sources/styles/layouts/_body.less` <br> `sources/styles/layouts/_footer.less` <br> ���R���p�C���A�����A�œK���A�~�j�t�@�C���ꂽ�X�^�C�� |

�{���� `assets.css` �� `fuelux.css` �� `main.css` ���������Ĉ�ɂ����������̂����ASass�R���p�C���r���h�\�[�X�̏W���̂ł��� `assets.css` �� LESS�R���p�C���r���h�\�[�X�ł��� `main.css` �A�����Č��� bower �p�b�P�[�W����LESS�\�[�X���R���p�C������ƃG���[�ɂȂ��Ă��܂� fuelux �̓f�B�X�g���r���[�V�����\�[�X�ł��� `fuelux.js` �����\�[�X�Ƃ��Ă��邽�߁A��������������ɂ̓X�N���v�g�̌����݂̂��s���^�X�N���K�v�ɂȂ邤���ɁA�R���p�C���������ԃ\�[�X���e���|�����Ƃ��ďo�͂���K�v������ȂǁA������ƃ^�X�N�����G�ɂȂ�߂��邽�߁A���ꂼ�ꕪ�����ďo�͂���d�l�Ƃ����B

����ŁA���p���p�� `gulp --production` �R�}���h�����s����ƁA���L�̂悤�Ƀr���h�����B

```
/my-project/
����assets/
   ����fonts/  #<-- �t�H���g�̃r���h�\���͊J�����p�Ɠ���
   ����images/
   ����scripts/
   ��  ����jquery-da8d18b5.js      #<-- jQuery �̃R�A�X�N���v�g
   ��  ����main-090f2908.js        #<-- ���̃v���W�F�N�g�p�̃��C���X�N���v�g
   ��  ����modernizr-9d550bd1.js   #<-- Modernizr �̃R�A�X�N���v�g
   ����styles/
   ��  ����assets-aa6a6578.css     #<-- Bootstrap �� Font Awesome �̃X�^�C��
   ��  ����fuelux-ecb66f52.css     #<-- Fuel UX �̃X�^�C��
   ��  ����main-7a529457.css       #<-- ���̃v���W�F�N�g�p�̃��C���X�^�C��
   ����assets.json    #<-- ���r�W�����ԍ��Ǘ��t�@�C��
```

�J�����Ńr���h���ꂽ�\�[�X�}�b�v���Ȃ��Ȃ�A�e�r���h�\�[�X�̃t�@�C�����ɂ̓��r�W�����ԍ��̃n�b�V�����ǉ�����A���r�W�����ԍ��Ǘ��p�� `assets.json` ���o�͂����B
���p���ł̓X�N���v�g��X�^�C�����u���E�U�ɃL���b�V������Ă��܂��A�ύX���Ȃ��Ȃ��t�����g�G���h�ɔ��f����Ȃ��Ƃ�����Ԃ�}�~���邽�߁A�����̃t�@�C�����ύX���ꂽ���ɂ̓��r�W�����ԍ��̃n�b�V����ύX���ăt�@�C�������̂�ς��邱�ƂŁA�u���E�U�ւ̗\�����Ȃ��L���b�V����h�����Ƃ��ł���悤�ɂȂ�B
�����āA�X�N���v�g��ǂݍ���HTML���ŁA���̃n�b�V���t�t�@�C�����C���N���[�h����ۂɃ��r�W�����ԍ����ӎ������ɃC���N���[�h���邽�߂̊Ǘ��t�@�C���� `assets.json` �Ȃ̂ł���B

## �t�H���g�p�X�̃��[�J���C�Y

**Bootstrap** �� **Font Awesome** �̃A�C�R���t�H���g��CSS����̑��΃p�X�Ńt�H���g�t�H���_�̃t�H���g��ǂݏo�����Abower �p�b�P�[�W���̃f�B�X�g���r���[�V�����\�[�X����r���h���Ă��܂��ƁA���̃t�H���g�p�X�̕ύX���ł����ɁA�r���h��̃f�B���N�g���\���ɂ���Ă̓t�H���g��ǂݍ��߂Ȃ��Ȃ�ꍇ������B
�f�t�H���g�ł́A���ꂼ��̃p�b�P�[�W�̃t�H���g�p�X�͉��L�̂悤�ɂȂ��Ă���B

| �p�b�P�[�W�� | �����t�H���g�p�X | Sass�p�ϐ� | LESS�p�ϐ� |
|:----------:|:--------------|:----------:|:---------:|
| bootstrap | `../fonts/bootstrap/` | - | `@icon-font-path` |
| bootstrap-sass | `../fonts/bootstrap/` | `$icon-font-path` | - |
| font-awesome-less | `../fonts/font-awesome/` | - | `@fa-font-path` |
| font-awesome-sass | `../fonts/font-awesome/` | `$fa-font-path` | - |
| Fuel UX | `../fonts/` | - | `@fueluxFontPath` |

���̃v���W�F�N�g�e���v���[�g�ł̃t�H���g�p�X�͈ꗥ�� `../fonts/` �ɂȂ��Ă���K�v������i `gulp fonts` �̃^�X�N�ŁA�t�H���g�t�@�C���� `gulp-flatten` ���W���[���ɂ���ăp�X�����R������Ă��邽�� �j�B
����Ȃ킯�ŁASass��LESS���R���p�C�����鎞�ɕϐ����`���ăt�H���g�f�B���N�g���̃p�X��ύX����K�v���o�Ă���B���Ȃ݂ɁALESS�̏ꍇ�A�ϐ��͒萔�̂��߁A��x��`�����Ə㏑���ł��Ȃ�����������A�����Sass�̏ꍇ�A�R�A�\�[�X���̕ϐ���`���� `!default` �I�v�V���������Ă���̂ŁA���łɕϐ��l����`����Ă���ꍇ�ɏ㏑�����s���Ȃ��B�܂�́ASass��LESS���R���p�C������ۂɈ�ԍŏ��ɕϐ����`���Ă��܂��΁A���̕ϐ��l�ɂ����CSS���R���p�C�������Ƃ����킯���B
�����ŁASass��LESS���R���p�C������O�Ɋe�\�[�X�t�@�C���Q���C���|�[�g����u**�C���|�[�^�[�X�^�C��**�v�𗘗p���āA�����̃r���h���ɍ��킹�ĕϐ����`����̂��B
���̃v���W�F�N�g�e���v���[�g�ɂ�����u�C���|�[�^�[�X�^�C���v�� `sources/styles/` �����ɂ��� `concat-assets.scss` �� `custom-main.less` �̓���B

�ł͒��g�����Ă݂�B
�܂��́ASass/SCSS�p�̃C���|�[�^�[�X�^�C�� `concat-assets.scss` ���B

```scss:concat-assets.scss
@import "common/_variables";

// bower:scss
// endbower
```

��s�ڂŕϐ���`�p�� `common/_variables.scss` ���C���|�[�g���Ă���̂��킩��B�����A���ɃC���|�[�g�����\�[�X�̒�`���Ȃ��悤�Ɍ����邪�A **�d�v�Ȃ̂� `// bower:scss �` // endbower` �̃R�����g�s��** �B ����  `// bower:scss` �Ŏn�܂� `// endbower` �ŏI���R�����g�ɂ� gulp �R�}���h���s���� **wiredep** �v���O�C���ɂ���āA`bower_conponents/` ���ɃC���X�g�[�����ꂽ�p�b�P�[�W��Sass/SCSS�p�\�[�X�́u�C���|�[�^�[�X�^�C���v�������ŃC���|�[�g�����Ƃ����d�g�݂��B��Ă���i���m�ɂ� `bower.json` �� `main` �ɓo�^����Ă���p�b�P�[�W���ΏۂɂȂ�j�B
���ۂ�`gulp` �R�}���h�����s������ɂ��� `concat-assets.scss` ���J���Ă݂�ƁA���L�̂悤�Ƀt�@�C��������������Ă���B

```scss:concat-assets.scss
@import "common/_variables";

// bower:scss
@import "../../bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
@import "../../bower_components/font-awesome-sass/assets/stylesheets/font-awesome.scss";
// endbower
```

�܂肱�̃C���|�[�^�[�X�^�C���́A�ŏ��ɕϐ���`�p�� `_variables.scss` ���C���|�[�g������ɁA�e��O���p�b�P�[�W��Sass/SCSS�t�@�C�����C���|�[�g���錚�t���ɂȂ��Ă���B���̂��߁A `_variables.scss` �Œ�`���ꂽ�ϐ��l���L�������ꂽ��Ԃ�CSS�ɃR���p�C�������Ƃ����킯���B
�����ŁA�̐S�̕ϐ���`�t�@�C���̒��g�����A

```scss:_variables.scss
// Glyphicons font path
$icon-font-path:  "../fonts/";

// Font Awesome font path
$fa-font-path:  "../fonts/";
```

�����ƂȂ��Ă���B

����LESS�p�̃C���|�[�^�[�X�^�C�� `custom-main.less` ���B

```less:custom-main.less
@import "common/_variables.less";
@import "common/_global.less";
@import "layouts/_header.less";
@import "layouts/_body.less";
@import "layouts/_footer.less";
```

����̃v���W�F�N�g�e���v���[�g�ł�LESS�ł̊O�����\�[�X�Ƃ��Ă� Fuel UX ���g���Ă���̂����A���̃p�b�P�[�W��LESS�̓R���p�C�����ɃG���[�ɂȂ��Ă��܂��̂ŁA���łɃR���p�C���ς݂̃f�B�X�g���r���[�V�����\�[�X�𗘗p���Ă���B���̂��߁A`wiredep` �œǂݍ���LESS�R���p�C�����Ȃ��̂� `wiredep` �G���A��݂��Ă��Ȃ��B
�����ALESS�R���p�C�����K�v�ɂȂ����ꍇ�́ASass/SCSS�łƓ����悤�ɁA

```less:
// bower:less
// endbower
```

�����̓�s��ǉ�����ΑΉ��ł���B

# �A�Z�b�g�̃��[�f�B���O

���āA�ȏ�� bower �ŊO�����\�[�X�̃p�b�P�[�W�Ǘ����C���X�g�[���A gulp �őS���\�[�X�̃R���p�C���r���h���p�u���b�V���Ƃ����d�g�݂����������̂����A�J�����Ə��p���ł̓A�Z�b�g�̓ǂݍ��ݕ����ς�邤���A���p���ł̓��r�W�����n�b�V���̒ǉ��ɂ���ăA�Z�b�g�̃t�@�C���������I�ɂȂ��Ă��܂����B���̂܂܂��ƁA�v���W�F�N�g�̃t�����g�G���h���m�F���鎞�ɂ��������A�Z�b�g�̓ǂݍ��ݏ������C������K�v���o�Ă���B

�����ŁA���ɉ����ăA�Z�b�g�̃��[�f�B���O�����������Ă݂�B����̃v���W�F�N�g�e���v���[�g��PHP�̃A�v���P�[�V������z�肵�Ă���̂ŁA���W�b�N��PHP�ł���B
�e���v���[�g�Ȃ̂ł��Ȃ�Ȍ��ɍ���Ă���̂ŁA�������炸�B

�܂��́A�G���h�|�C���g�ƂȂ�N�_�t�@�C�� `index.php` ���B

```php:index.php
<?php

define( 'PROJECT_ROOT', dirname(__FILE__) );
define( 'PROJECT_URL', sprintf( '//%s/%s/', $_SERVER['HTTP_HOST'], basename(PROJECT_ROOT) ) );

$environment = file_exists( PROJECT_ROOT . '/assets/assets.json' ) ? 'production' : 'development';
define( 'ENV', $environment );

require_once( 'lib/functions.php' );
require_once( 'templates/sample.php');
```

���p�����ǂ����̊��t���O `ENV` �́A`assets/assets.json` �t�@�C���̂���E�Ȃ��Ŕ��肵�Ă���̂ŁA `gulp` �� `gulp --production` �̂ǂ���Ńr���h���Ă�PHP�����C�����邱�Ƃ͂Ȃ��B�������A `PROJECT_ROOT` �� `PROJECT_URL` �̓v���W�F�N�g�̎��s���ɉ����Ē�`���Ȃ����K�v������B

���́A��Ƀe���v���[�g `templates/sample.php` ����B

```php:templates/sample.php
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Project Template</title>
    <?php get_head(); ?>
  </head>
  <body class="fuelux">
    <?php get_content(); ?>

    <?php get_footer(); ?>
  </body>
</html>
```

�Ō�ɁA�̐S�̃��W�b�N�� `lib/functions.php` ���B

```php:lib/functions.php
<?php
// Sample Logic

function assets_loader( $load_order=[] ) {
  
  if ( ! file_exists( PROJECT_ROOT . '/assets/assets.json' ) ) {
    if ( 'production' === ENV ) 
      trigger_error( '"assets/assets.json" is not exists.', E_USER_ERROR );
    
    // development env.
    if ( empty($load_order) )
      return;
    
    foreach ( $load_order as $asset_file ) {
      $extention = array_pop(explode('.', $asset_file));
      if ( 'css' === $extention ) 
        printf( '<link href="%sassets/styles/%s" rel="stylesheet">', PROJECT_URL, $asset_file );
      
      if ( 'js' === $extention ) 
        printf( '<script src="%sassets/scripts/%s"></script>', PROJECT_URL, $asset_file );
      
    }
    
  } else {
    if ( 'development' === ENV ) 
      trigger_error( 'Defined environment is invalid.', E_USER_ERROR );
    
    // production env.
    $assets = json_decode( @file_get_contents( PROJECT_ROOT . '/assets/assets.json' ) );
    $load_order = empty($load_order) ? array_keys($assets) : $load_order;
    foreach ( $load_order as $asset_file ) {
      $extention = array_pop(explode('.', $asset_file));
      if ( 'css' === $extention ) 
        printf( '<link href="%sassets/styles/%s" rel="stylesheet">', PROJECT_URL, $assets->$asset_file );
      
      if ( 'js' === $extention ) 
        printf( '<script src="%sassets/scripts/%s"></script>', PROJECT_URL, $assets->$asset_file );
      
    }
    
  }
  
}

function get_head() {
  
  assets_loader( [ 'assets.css', 'fuelux.css', 'main.css' ] );
  
}

function get_content() {
?>
<!-- Wizard Example -->
�` �����͐ÓI�R���e���c�Ȃ̂Ŋ��� �`
<?php
}

function get_footer() {
  
  assets_loader( [ 'modernizr.js', 'jquery.js', 'main.js' ] );
  
}
```

����� gulp �^�X�N�Ńr���h�����A�Z�b�g�̓����Ƃ��āA�J�����̏ꍇ�͊i�[�p�X��t�@�C�������Œ�Ȃ̂ŁA�ÓI�ɓǂݍ��߂�B����A���p���r���h�̏ꍇ�̓t�@�C���������I�ɂȂ邽�߁A���r�W�����ԍ��Ǘ��t�@�C�� `assets/assets.json` ���g���ăA�Z�b�g�t�@�C����ǂݍ��ނ��ƂɂȂ�B
���W�b�N�Ƃ��ẮA�A�Z�b�g��ǂݍ��݂����ꏊ�Ŋ֐� `assets_loader()` ���ĂԂ��ƂɂȂ�B�����Ƃ��āA�ǂݍ��ރA�Z�b�g��ǂݍ��܂�鏇�ɔz��Ƃ��Ďw�肵�Ă�����B�������Ȃ���΁A���p���Ȃ� `assets.json` �Œ�`����Ă���A�Z�b�g�S�Ă�ǂݍ��ނ��A�J�����Ȃ�ǂݍ��݂͍s���Ȃ��B
�G���[�������܂߂āA�L�q��������Ə璷�Ȃ̂ŁA����������ƃX�b�L�����������Ƃ��낾���A�܂��T���v���Ȃ̂ŗǂ�����w


**gulp** �� **bower** ��O��I�ɏK�����悤�Ƃ����ژ_���������Ă��̋L���������Ă������A�������낻��~�߂܂��B�z���g�́A���� **Travis CI** �ł̃r���h�e�X�g�ƁA **jscs** ���g���ăv���W�F�N�g�p�̃R�[�f�B���O�K��̒�`�Ƃ������̋L���ɐ��荞�����Ǝv���Ă����񂾂��ǁA���܂�ɂ�����ɂȂ��Ă��܂����̂ŁA�����͍���ʓr�L���ɂ��悤���Ǝv���B


# APPENDIX

## �v���W�F�N�g�e���v���[�g�̃_�E�����[�h

�������̋L���̃v���W�F�N�g�e���v���[�g�̃\�[�X���~�������ĕ������܂�����A���L�ɒu���Ă���̂ŁA�D���ɂ��g�����������B

[]()

�� �����I�� Travis CI �� jscs �̂��׋����鎞�ɂ��̃��|�W�g�����܂��g�����Ǝv���Ă���B

## �Q�lURL

�L�����ŏЉ��URL�ȊO�ŁA�Q�l�ɂ������̂��o���Ă������g������Ă��������ƁB

- []()
- []()



�ȏ�ł��B�Ō�܂œǂ�ł��ꂽ���A���肪�Ƃ��������܂����I
