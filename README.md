おさらいシリーズ第3弾w

今やWEBアプリケーションのフロントエンド開発では手放せなくなってきたタスクランナー（gulp）とパッケージマネージャ（bower）だが、なにげに設定が煩雑で、どんなプロジェクトにも汎用的に使えそうな基本セット的なものも見つけられなかった。それなら──と、仕組みのおさらいをしながら、自分用のプロジェクトのテンプレートとして汎用的なセットを作ってみた次第。

今回作ったプロジェクトテンプレートでの各アセットの流れを図にしてみると、下図のようになる。

![プロジェクトアセットビルドの流れ](http://ka2.org/assets/2015/05/project-assets-publishing-flow.png)

簡単に言えば、 **bower** で必要なアセットを外部からインストールして、それらとプロジェクト独自のスタイルやスクリプトを **gulp** を使って結合・最適化、最終的な公開用フォルダに配置するという流れだ。

ちなみに、今回作った[プロジェクトテンプレートはこちら](#プロジェクトテンプレートのダウンロード)からダウンロードできる。


# プロジェクトテンプレートの環境

さーて、まずはどんなプロジェクトにするかというのが重要だ。プロジェクトテンプレートの建付けとしては、外部リソースと内部リソース、そしてビルド用のタスクという三本柱構成で考えていく。

## 外部リソース
 
 自分のプロジェクト用に外部から読み込むリソース群を下記のように定義してみた。これらは、bowerでインストール＆パッケージ管理して、gulpのタスクで公開用のビルドディレクトリにパブリッシュする。

| リソース名 | パッケージ名 | 利用バージョン | 備考 |
|:---------|:-----------|:---------------:|:------|
| [Modernizr](http://modernizr.com/) | modernizr | 2.8.3 以上 | ブラウザサポート機能判定ライブラリ |
| [jQuery](https://jquery.com/) | jquery | 2.1.4 以上 | IE8対応とかもはや眼中にないので、2系ですw |
| [Bootstrap](http://getbootstrap.com/) | bootstrap-sass | 3.3.4 以上 | CSSフレームワーク。今回の例ではSass版ソースをコンパイルして利用する |
| [Font Awesome](http://fortawesome.github.io/Font-Awesome/) | font-awesome-sass | 4.3.0 以上 | フリーのアイコンフォントライブラリ |
| [Fuel UX](http://getfuelux.com/) | fuelux | 3.6.5 以上 | jQuery+Bootstrap環境の拡張UXライブラリ |

## gulpプラグイン

タスクランナーのgulpで使用するタスク用のプラグインモジュールを下記のように定義してみた（利用バージョンは2015/5/19時点での最新）。

| プラグイン名 | 利用バージョン | 利用用途 | 参考URL |
|:-----------|:------------:|:--------|:-------|
| asset-builder | 1.1.0 以上 | アセット結合を定義ファイルとして一元化する | [https://github.com/austinpray/asset-builder](https://github.com/austinpray/asset-builder) |
| browser-sync | 2.7.1 以上 | アセットソースの変更検知時にgulpタスクを自動実行してパブリッシュアセットへの同期を行う | [http://www.browsersync.io](http://www.browsersync.io) |
| coffee-script | 1.9.2 以上 | CoffeeScriptの実行用ライブラリ | [http://coffeescript.org/](http://coffeescript.org/) |
| del | 1.1.1 以上 | 指定されたディレクトリやファイルを削除する | [https://www.npmjs.com/package/del](https://www.npmjs.com/package/del) |
| gulp | 3.8.11 以上 | gulp本体 | [http://gulpjs.com/](http://gulpjs.com/) |
| gulp-changed | 1.2.1 以上 | ソースディレクトリとビルドディレクトリをチェックして変更されたファイルだけストリームに流す | [https://www.npmjs.com/package/gulp-changed](https://www.npmjs.com/package/gulp-changed) |
| gulp-coffee | 2.3.1 以上 | CoffeeScriptのコンパイルを行う | [https://www.npmjs.com/package/gulp-coffee](https://www.npmjs.com/package/gulp-coffee) |
| gulp-coffeelint | 0.5.0 以上 | CoffeeScriptの構文チェックを行う | [https://www.npmjs.com/package/gulp-coffeelint](https://www.npmjs.com/package/gulp-coffeelint) |
| gulp-concat | 2.5.2 以上 | 複数ファイルを結合する | [https://www.npmjs.com/package/gulp-concat](https://www.npmjs.com/package/gulp-concat) |
| gulp-flatten | 0.0.4 以上 | ファイルのディレクトリ階層を平坦化する | [https://github.com/armed/gulp-flatten](https://github.com/armed/gulp-flatten) |
| gulp-if | 1.2.5 以上 | 分岐処理用。条件に合致した時にタスクを実行する | [https://www.npmjs.com/package/gulp-if](https://www.npmjs.com/package/gulp-if) |
| gulp-imagemin | 2.2.1 以上 | GIF,JPEG,PNG,SVGをロスレスで軽量化する | [https://www.npmjs.com/package/gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) |
| gulp-jshint | 1.10.0 以上 | JavaScript構文チェッカー | [https://www.npmjs.com/package/gulp-jshint](https://www.npmjs.com/package/gulp-jshint) |
| gulp-less | 3.0.3 以上 | LESSのコンパイルを行う | [https://www.npmjs.com/package/gulp-less](https://www.npmjs.com/package/gulp-less) |
| gulp-pleeease | 1.2.0 以上 | CSSのベンダープレフィックス自動付与、ミニファイ、メディアクエリ最適化等を一括で処理する | [https://github.com/danielhusar/gulp-pleeease](https://github.com/danielhusar/gulp-pleeease) |
| gulp-plumber | 1.0.0 以上 | ストリーム中のエラーによってタスクが強制停止するのを防ぐ | [https://www.npmjs.com/package/gulp-plumber](https://www.npmjs.com/package/gulp-plumber) |
| gulp-rename | 1.2.2 以上 | 指定のファイルをリネームする | [https://www.npmjs.com/package/gulp-rename](https://www.npmjs.com/package/gulp-rename) |
| gulp-rev | 3.0.1 以上 | ビルド時にファイル名にリビジョン番号を追加する | [https://github.com/sindresorhus/gulp-rev](https://github.com/sindresorhus/gulp-rev) |
| gulp-sass | 2.0.1 以上 | Sass/SCSSのコンパイルを行う | [https://www.npmjs.com/package/gulp-sass](https://www.npmjs.com/package/gulp-sass) |
| gulp-sourcemaps | 1.5.2 以上 | ビルドソースのソースマップを出力する | [https://www.npmjs.com/package/gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) |
| gulp-uglify | 1.2.0 以上 | Uglify JSを利用したJavaScriptファイルのミニファイ用プラグイン | [https://www.npmjs.com/package/gulp-uglify](https://www.npmjs.com/package/gulp-uglify) |
| imagemin-pngcrush | 4.1.0 以上 | imageminプラグインの拡張ライブラリ。PNG画像の減色とビット深度を下げる | [https://github.com/imagemin/imagemin-pngcrush](https://github.com/imagemin/imagemin-pngcrush) |
| jshint-stylish | 1.0.2 以上 | JavaScript構文チェッカー「jshint」の出力を整形するフィルタ | [https://www.npmjs.com/package/jshint-stylish](https://www.npmjs.com/package/jshint-stylish) |
| lazypipe | 0.2.3 以上 | 複数のタスクをグループ化（クロージャ化）して別のタスクで再利用できるようにする | [https://github.com/OverZealous/lazypipe](https://github.com/OverZealous/lazypipe) |
| merge-stream | 0.1.7 以上 | タスク内の複数ストリームをマージする | [https://www.npmjs.com/package/merge-stream](https://www.npmjs.com/package/merge-stream) |
| minimist | 1.1.1 以上 | gulpコマンド（CLI）の引数をタスクで受け取れるようになる | [https://www.npmjs.com/package/minimist](https://www.npmjs.com/package/minimist) |
| run-sequence | 1.1.0 以上 | タスクを任意の順番で（同期的に）実行する | [https://www.npmjs.com/package/run-sequence](https://www.npmjs.com/package/run-sequence) |
| traverse | 0.6.6 以上 | JSオブジェクト内の階層を無視してすべてのノードを再帰的に処理する | [https://www.npmjs.com/package/traverse](https://www.npmjs.com/package/traverse) |
| wiredep | 2.2.2 以上 | 自動的にLESSとSassのBower依存関係を読み込みます。 | [https://github.com/taptapship/wiredep](https://github.com/taptapship/wiredep) |

結局、`traverse` は使わなかったんだが、まぁ、機能紹介的にリストに残してある。あと、`gulpfile.js` を CoffeeScript で書くとかのニーズがない限り、CoffeeScript の実行環境はいらないかな。

## ディレクトリ構造と各種設定ファイル

汎用的に使えると思われるプロジェクト用ディレクトリ構造を下記のようにしてみた。
コレが本当に汎用的なのかどうか──というところは、まぁ、一旦おいておこうw

```bash:
/my-project/
├─.git/
├─assets/  #<-- ビルドディレクトリ（パブリッシュ用）
│  ├─fonts/  #<-- 読み込まれたフォント群をすべて格納
│  ├─images/  #<-- 軽量化された画像群をすべて格納
│  ├─scripts/  #<-- コンパイル+結合+ミニファイされたJavaScript群をすべて格納
│  ├─styles/  #<-- コンパイル+結合+ミニファイされたCSS群をすべて格納
│  └─.gitkeep
├─bower_components/  #<-- bower install によって作成されるパッケージ格納ディレクトリ
├─lib/  #<-- プロジェクトのロジックを格納するディレクトリ（任意）
├─node_modules/  #<-- npm install によって作成されるモジュール格納ディレクトリ
├─sources/  #<-- アセットソースディレクトリ（開発用）
│  ├─images/  #<-- 原本画像ファイル群を格納
│  ├─scripts/  #<-- 自分のプロジェクト用のJavaScriptを格納
│  │  ├─coffee/  #<-- 自分のプロジェクト用のCoffeeScriptを格納
│  │  │  └─custom-main.coffee
│  │  └─custom-main.js
│  ├─styles/  #<-- Sass/SCSSやLESSのオリジナルソースを格納
│  │  ├─common/
│  │  │  ├─_global.less
│  │  │  ├─_variables.less
│  │  │  └─_variables.scss
│  │  └─layouts/
│  │  │  ├─_header.less
│  │  │  ├─_body.less
│  │  │  └─_footer.less
│  │  ├─concat-assets.scss  #<-- SCSS用の importer スタイル
│  │  └─custom-main.less  #<-- LESS用の importer スタイル
│  └─manifest.json  #<-- アセットソースのビルド定義ファイル
├─templates/  #<-- プロジェクトのテンプレートを格納するディレクトリ（任意）
├─.bowerrc
├─.gitignore
├─.travis.yml  #<-- Travis CIによるビルド検証用の設定（この記事での詳細は割愛）
├─.jshintrc
├─bower.json
├─gulpfile.js
├─index.php  #<-- プロジェクトの起点ファイル
├─package.json
└─README.md
```

管理対象のソースから除外するものとしては、ビルドディレクトリとnpmモジュール群、bowerでインストールされたコンポーネントパッケージ群となる。GitHubでのソース管理を前提としているので、 `.gitignore` には下記のように除外定義をしておく。

```:.gitignore
assets/
bower_components/
node_modules/
npm-debug.log
```

bower用の設定としては、`bower install` 実行時に参照するパッケージ定義ファイルとアセットソース展開用のディレクトリを定義できる `.bowerrc` に下記のように設定を記述しておく。

```json:.bowerrc
{
  "directory": "bower_components",
  "json": "bower.json"
}
```

`.jshintrc` はgulpプラグインの `jshint` にてJavaScript構文チェックを行う場合の、チェックルールを定義できる。このテンプレートでの設定は下記のようにしているが、このルール定義はプロジェクトの性質に応じて調整する必要があるかと。

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

詳しくは、maccotsan さんが「[.jshintrc日本語版](http://qiita.com/maccotsan/items/0fb82ccab014f49ff95d)」にて解説されているので、そちらを参照してみてください。なお、[原本ドキュメントはこちら](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)である。


# 各種リソース、パッケージをインストールする

## 必要なnpmパッケージをインストール

まず、gulp でコンパイルビルドを行うにあたっては、gulp をはじめとした必要なプラグインをインストールする必要がある。必要に応じて `npm install gulp gulp-sass` とか個別にインストールしてもいいのだが、面倒なので必要なものは一括でインストールできるようにしたい。そのためには、プロジェクト用のパッケージ定義ファイル「 **package.json** 」を準備する（ `npm init` コマンドでも作成できるが、今回は設定内容を理解したかったので自分で作ってみた）。
今回定義した gulp プラグインを一括インストールするための設定は下記のようになる。

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

`package.json` の[記述仕様はこちら](http://liberty-technology.biz/PublicItems/npm/package.json.html)を参照。
`scripts` オプションにはこのプロジェクトディレクトリ下（npmローカルインストールディレクトリ下）で有効なCLIコマンドを定義できる。ここで定義したコマンドは `npm build` のように利用でき、今回の記事では詳しい説明はしないが、Travis CIを利用したビルドテストで使おうと考えている。

上記の `package.json` が定義されている状態で、コマンドラインから、

```bash:
$ npm install
```

を実行すると、すべてのnpmモジュールが一括でインストールされる。このプロジェクトテンプレートでは依存モジュールが多いため、インストールにはちょっと時間がかかる。

## bowerで外部リソースをインストール

次に、定義した外部リソースを bower でインストールする。それにはまず、インストールする外部リソースの依存関係を含んだパッケージ定義ファイル「 **bower.json** 」を準備してパッケージ情報を追加する必要がある（ `bower init` コマンドでも作成できるが、今回は設定内容を理解したかったので自分で作ってみた）。
今回定義した外部リソースをインストールする場合、下記のような設定になる。

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

`bower.json` の[記述仕様はこちら](https://github.com/bower/bower.json-spec)を参照。
`overrides` オプションは、bower でインストールされたパッケージ内の `bower.json` の依存関係定義を上書きするためのオプションである。これを利用して、オリジナルパッケージ内で `main` で定義されている依存関係を上書きして、自分のプロジェクト専用にパッケージ内のリソースを利用できるようにしている（もし、インストールされたオリジナルパッケージ内に `main` が指定されていなかった場合に、このオプションの値で代替される）。
このプロジェクトテンプレートでは「 **Fuel UX** 」のパッケージを利用するのだが、このパッケージのインストール時には「LESS版のbootstrap」や「 requirejs 」、「 moment 」といった依存パッケージも一緒にインストールされてしまう。今回、「bootstarap」はSass版を利用するため、LESS版のパッケージは要らず、また「Fuel UX」の読み込みに「requirejs」も使わないのでこのパッケージも不要だ。なので、不要なパッケージを `main` から取り除くように `overrides` している。

この `bower.json` が定義された状態で、コマンドラインから、

```bash:
$ bower install
```

──を実行すると、定義したパッケージが依存するパッケージも含めて自動でインストールされる。


# gulp のタスクを作る

## タスク順を考える

タスクランナーを使ってビルドを行う場合、どのようなソースを使って、どの順序でどんな風にビルドするか、最終的な公開用のアセットとしてどのようなものを利用するのか、ということを考える必要がある。考え方としては、公開用のアセットの種類からビルド処理を逆上るように考えると必要なタスクを洗い出しやすい。

> 例えば、公開用のスタイルシートファイルは「main.css」一つにしたい。「main.css」に含まれるのは最新版の「Bootstrap」のスタイル定義の後に、自分のプロジェクト用に定義したスタイルが上書きされるような順序で結合し、CSSにはベンダープレフィックスを自動付与して、さらにミニファイして利用する。そして、自分のプロジェクト用のスタイル定義はSassで記述したい。

──こんな欲望を満たすためのタスクを定義する場合の処理順:

1. bowerでSass版のBootstrap最新版を取得する
2. Sass形式のBootstrapと自分のプロジェクト用スタイルをCSSファイルへコンパイルする
3. 最新版Bootstrapのスタイルの後に自分のプロジェクト用のスタイルを結合する
4. 結合したスタイルにベンダープレフィックスを付与してミニファイ化する
5. ビルドディレクトリに「main.css」として出力する

──実際に gulp のタスクとして置き換えてみた場合の処理順:

1. wiredep で bower でインストールされたパッケージ「bootstrap-sass」の依存関係を読み出す 
2. Sass/SCSSファイルがあれば、 gulp-sass でコンパイル
3. asset-builder でスタイルの結合順序を読み出す
4. gulp-concat でスタイルを結合
5. gulp-pleeease でベンダープレフィックス付与、ミニファイを行う
6. ビルドディレクトリに「main.css」として出力する

この流れに沿って、実際のタスクとして `gulpfile.js` に定義していくことで自分用プロジェクトのタスクランナーが完成する次第だ。

まぁ、これは概念的な方法なんで、実際に作ってみると希望通りのタスクがなかなかできないんだけどね･･･;


## タスクファイルの作成

gulp のタスクは `gulpfile.js` に定義する。今回の汎用化の例ではタスク記述の量が多くなることもあって、設定を細分化して都度補足していく。

### Initialize処理

まず、タスクで必要となる処理をライブラリとしてグローバルスコープに読み込む。

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

このセクションはあまり説明がいらないと思うが、`minimist` プラグインの定義
部と `asset-builder` プラグインの定義部についてだけ補足しておく。

`minimist` プラグインを使うことでCLIで gulp コマンドに付与された引数をタスク側で受け取れるようになる。ここではCLIで指定された引数をメソッドに渡していて、タスク内のフラグオブジェクト `enabled` で引数を各種フラグに展開している。実際には商用環境用のビルドコマンドとして `gulp --production` が実行された場合に、一部のタスク処理を切り替えるための定義である。

`asset-builder` プラグインはビルドソースの依存関係やビルド順序などを別途 `manifest.json` に定義して、その定義ファイルを利用して gulp タスクが実行できるようにするモジュールだ。ここでは、`sources/manifest.json` を定義ファイルとして読み込み、

- `path` : 各アセットファイルの格納ディレクトリのパス情報
- `config` :  ビルド用の任意の設定値
- `globs` : 最終的なビルドソースの出力先情報（ `gulp.src()` で呼ばれる）
- `project` : first-partyアセットのパス情報

──をそれぞれ定義している。このビルド定義ファイル `sources/manifest.json` については[後述する](#ビルドファイルの定義)。

### 各種クロージャ定義

`gulpfile.js` 内で再利用するようなタスクは `lazypipe` プラグインを使ってクロージャとして事前に定義しておく。

まずは、CSS系のタスク・クロージャ。

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
        outputStyle: 'nested', // libsass ではまだ非対応
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

> それぞれのプラグインでのビルド処理を行う前に `gulp-if` を使って引数 `--production` が指定されているかどうかの判定を行っている。また、 `gulp-sourcemap` はビルドされたソースをマッピングしてくれる開発用のプラグインで、これは `init` メソッドから `write` メソッドが指定されたところまでのビルドをマッピングしてくれる。

次に、JavaScript系のタスク・クロージャ。

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

> JavaScriptは原則として、結合とミニファイしかしないが、開発用ビルド（ `gulp` コマンド実行時、 `--production` 引数なし）では、コメント欄の先頭に `!` が入っているコメントを削除しないようにしてある（ `uglify({ preserveComments: 'some' })` 部）。これによって、外部リソースと自前のJavaScriptの結合順序が正しいかの確認が容易になる。

最後に、リビジョン設定ファイルの書き込み用クロージャ

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

> 商用環境へのビルド（`gulp --production` コマンド実行）時、ビルドされたアセット群のリビジョンハッシュ付ファイルのリスト用の `assets.json` をビルドディレクトリ直下に出力する処理。

### メインタスク

#### スタイル系タスク

単体実行コマンドは `gulp styles` 。タスクの流れとしては、bowerパッケージの依存関係を読み込み→コンパイル→結合→CSS最適化。もしプリコンパイルエラーが発生した場合、デフォルトでは警告のみをログに出力する。ただし、 `gulp --production styles` で実行された場合は、タスクを完全に失敗させて終了させる。

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

> なお、bower パッケージの依存関係読み込みは別途「 `wiredep` タスク」を呼んでいる。

#### スクリプト系タスク

単体実行コマンドは `gulp scripts` 。タスクの流れとしては、CoffeeScriptのコンパイル→JSHintで構文チェック→クロージャのjsTasksをコール。エラー処理はそれぞれの構文チェック時に行われる。

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

#### CoffeeScript系タスク

単体実行コマンドは `gulp coffee` 。CoffeeScriptの構文チェック後にエラーがなければコンパイルを行うタスクで、スクリプト系タスク `gulp scripts` のインナータスクとなっている。単体で実行する必要はあまりない。

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

> このプロジェクトでは `sources/scripts/coffee/` 下のCoffeeScriptのみをコンパイル対象としていて、コンパイル後は同名のJSファイルが `sources/scripts/` にビルドされる。このJSファイルを中間ソースとして、最終的なビルドが行われるため、中間ソースであるJSファイルを変更しても `gulp` コマンド実行時に CoffeeScript から上書きされてしまう。もし、JSファイルだけでプロジェクトのスクリプトを管理したい場合は、スクリプト系タスクからCoffeeScript系タスクを除外する必要がある。つまりは、スクリプト系タスクの関数定義部を `gulp.task('scripts', ['jshint'], function() {...` と変更することで対応できる。

#### JavaScript構文チェック タスク

単体実行コマンドは `gulp jshint` 。JavaScriptの構文チェックのみを行うタスク。スクリプト系タスク `gulp scripts` のインナータスクでもある。

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

#### フォント系タスク

単体実行コマンドは `gulp fonts` 。タスク内容はbowerパッケージでインストールしたすべてのフォントを取得し、パスを平坦化してビルドディレクトリにパブリッシュする。

```js:
gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + 'fonts'))
    .pipe(browserSync.stream());
});
```

> `Bootstrap` や `Font Awesome` のアイコンフォントはスタイルシート側でパスが指定してあるため、ビルド後に相対パスが変わってしまうとパブリッシュしても利用できなくなる。そのため、スタイル系タスクでSass/SCSSのコンパイルする時に自分のプロジェクト用のフォントパスを埋め込んでやる必要がある。その埋め込みは、`sources/styles/concat-assets.scss` で行っている（詳しくは後述する「[フォントパスのローカライズ](#フォントパスのローカライズ)」にて）。

#### イメージ系タスク

単体実行コマンドは `gulp images` 。タスク内容はソースディレクトリ内の `images` フォルダ内の画像ファイルをロスレス圧縮してビルドディレクトリにパブリッシュするもの。

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

#### クリーンアップ タスク

単体実行コマンドは `gulp clean` 。ビルドディレクトリを完全に削除するユーティリティタスク。

```js:
gulp.task('clean', require('del').bind(null, [path.dist]));
```

#### 監視（Watch）タスク

単体実行コマンドは `gulp watch` 。 ブラウザ同期機能（BrowsrSync）を利用して、特定のディレクトリやファイルへの変更を監視し、変更が検知された場合に任意のビルドタスクを実行するもの。この `gulp watch` のプロセスを有効化しておくと、ソースへの変更が自動でビルド環境に反映されるため、いちいち `gulp` のコマンドを実行する必要がなくなる。

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

> もしCoffeeScriptでのコンパイルを利用しない場合は、 `gulp.watch([path.source + 'scripts/**/*'], ['jshint', 'scripts']);` としておく。

#### Wiredep タスク

単体実行コマンドは `gulp wiredep` 。bowerパッケージの LESS と Sass/SCSS の依存関係を自動的に読み込む。

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


#### ビルドタスク

単体実行コマンドは `gulp build` 。すべてのタスクを実行する。ただし、事前にクリーンアップタスクは実行しない。

```js:
gulp.task('build', function(callback) {
  runSequence('styles',
              'scripts',
              ['fonts', 'images'],
              callback);
});
```

> このタスクを実行前に `gulp` か `gulp wiredep` を実行して Bower パッケージの依存構造を展開させないと、期待するビルド結果を得られないので注意。

#### デフォルトタスク

単体実行コマンドは `gulp` 。事前にクリーンアップを行った後にビルドタスクを実行する。基本的にコンパイルビルド時はこのタスクを実行する。商用環境の場合のコマンドは、`gulp --production` となる。

```js:
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
```

### 全タスクのソース

`gulpfile.js` の全ソースは下記のようになる。

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


## ビルドファイルの定義

gulpのタスクでビルドされるファイルの定義を行うのが、 `sources/manifest.json` というJSONファイルである。このファイルでは、ソースファイルの置き場所やビルドファイルの出力先、どのソースを結合して最終的にどんなファイルとしてビルドするか、`gulp watch` タスクで利用する BrowserSync 機能用の Proxy 設定などが定義される。

今回のプロジェクト用の定義内容は下記のとおり。

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

設定値の詳細は下記のとおりである:

- `dependencies` オプション : gulpタスクによってビルドされるファイル名とそのファイルに含まれるリソースの依存関係を定義する。注意が必要なのが、 `files` で指定したファイル群は最後に結合されること。さらに `bower` オプションにパッケージ名を指定すると、指定されたパッケージの `bower.json` （デフォルトは `bower_components/` の各パッケージフォルダ内の `bower.json` ファイル）内の `main` オプションに定義されているリソースが結合対象になる。ただし、 `my-project/` 直下の `bower.json` で `overrides` オプションを指定しているリソースに関してはそちらで指定したリソースが使われる。あと `main` オプションに `true` を指定すると、`bower.json` 内の `main` オプションに定義されているすべてのリソースを結合する。
- `Paths` オプション : bower でインストールされた外部リソース以外のビルド元ソースが格納されているディレクトリパスと、gulpによってビルドされるアセットの出力ディレクトリのパスをプロジェクトルートからの相対パスで指定する。 `sources` オプションにビルド元ディレクトリを、 `dist` にビルド後の出力ディレクトリを指定する。末尾に `/` が必要。
- `config` オプション : `gulp watch` コマンドでBrowserSyncするProxyホストの設定。ホスト名かFQDNを設定する。

ちなみに、このプロジェクトのビルドファイルの定義で開発環境用の `gulp` コマンドを実行すると、 `assets/` ディレクトリ内に、下記のような構成でアセットファイルが生成される。

```bash:
/my-project/
└─assets/
   ├─fonts/
   │  ├─fontawesome-webfont.eot    #<-- Font Awesome のアイコンフォント
   │  ├─fontawesome-webfont.svg    #<-- Font Awesome のアイコンフォント
   │  ├─fontawesome-webfont.ttf    #<-- Font Awesome のアイコンフォント
   │  ├─fontawesome-webfont.woff   #<-- Font Awesome のアイコンフォント
   │  ├─fontawesome-webfont.woff2  #<-- Font Awesome のアイコンフォント
   │  ├─fuelux.eot   #<-- Fuel UX のアイコンフォント
   │  ├─fuelux.svg   #<-- Fuel UX のアイコンフォント
   │  ├─fuelux.ttf   #<-- Fuel UX のアイコンフォント
   │  ├─fuelux.woff  #<-- Fuel UX のアイコンフォント
   │  ├─glyphicons-halflings-regular.eot    #<-- Bootstrap のアイコンフォント
   │  ├─glyphicons-halflings-regular.svg    #<-- Bootstrap のアイコンフォント
   │  ├─glyphicons-halflings-regular.ttf    #<-- Bootstrap のアイコンフォント
   │  ├─glyphicons-halflings-regular.woff   #<-- Bootstrap のアイコンフォント
   │  └─glyphicons-halflings-regular.woff2  #<-- Bootstrap のアイコンフォント
   ├─images/  #<-- sources/images/ に画像があれば圧縮ファイルを格納
   ├─scripts/
   │  ├─jquery.js      #<-- jQuery のコアスクリプト
   │  ├─jquery.js.map  #<-- jquery.js 生成時のソースマップファイル
   │  ├─main.js        #<-- このプロジェクト用のメインスクリプト（※）
   │  ├─main.js.map    #<-- main.js 生成時のソースマップファイル
   │  ├─modernizr.js      #<-- Modernizr のコアスクリプト
   │  └─modernizr.js.map  #<-- modernizr.js 生成時のソースマップファイル
   └─styles/
       ├─assets.css      #<-- Bootstrap と Font Awesome のスタイル
       ├─assets.css.map  #<-- assets.css 生成時のソースマップファイル
       ├─fuelux.css      #<-- Fuel UX のスタイル
       ├─fuelux.css.map  #<-- fuelux.css 生成時のソースマップファイル
       ├─main.css        #<-- このプロジェクト用のメインスタイル（※）
       └─main.css.map    #<-- main.css 生成時のソースマップファイル
```

もちろん、それぞれのスクリプトやスタイルのファイルはミニファイや最適化が行われた状態である。それぞれのビルドファイルの中身は各ソースマップファイルを開いてみることで確認可能だ。ちなみに、ビルドされるプロジェクト用のメインスクリプト（ `main.js` ）とメインスタイル（ `main.css` ）の中身は下記のようになっている。

| ビルドファイル | 内容 |
|:------------:|:----|
| main.js | `bower_components/bootstrap/dist/js/bootstrap.js` <br> `bower_components/moment/moment.js` <br> `bower_components/fuelux/dist/js/fuelux.js` <br> `sources/scripts/custom-main.js` <br> が結合されてミニファイされたスクリプト |
| main.css | `sources/styles/custom-main.less` <br> `sources/styles/common/_global.less` <br> `sources/styles/common/_valiables.less` <br> `sources/styles/layouts/_header.less` <br> `sources/styles/layouts/_body.less` <br> `sources/styles/layouts/_footer.less` <br> がコンパイル、結合、最適化、ミニファイされたスタイル |

本当は `assets.css` と `fuelux.css` と `main.css` も結合して一つにしたかったのだが、Sassコンパイルビルドソースの集合体である `assets.css` と LESSコンパイルビルドソースである `main.css` 、そして現在 bower パッケージ内のLESSソースをコンパイルするとエラーになってしまう fuelux はディストリビューションソースである `fuelux.js` を元ソースとしているため、これらを結合するにはスクリプトの結合のみを行うタスクが必要になるうえに、コンパイルした中間ソースをテンポラリとして出力する必要があるなど、ちょっとタスクが複雑になり過ぎるため、それぞれ分割して出力する仕様とした。

一方で、商用環境用の `gulp --production` コマンドを実行すると、下記のようにビルドされる。

```
/my-project/
└─assets/
   ├─fonts/  #<-- フォントのビルド構成は開発環境用と同じ
   ├─images/
   ├─scripts/
   │  ├─jquery-da8d18b5.js      #<-- jQuery のコアスクリプト
   │  ├─main-090f2908.js        #<-- このプロジェクト用のメインスクリプト
   │  └─modernizr-9d550bd1.js   #<-- Modernizr のコアスクリプト
   ├─styles/
   │  ├─assets-aa6a6578.css     #<-- Bootstrap と Font Awesome のスタイル
   │  ├─fuelux-ecb66f52.css     #<-- Fuel UX のスタイル
   │  └─main-7a529457.css       #<-- このプロジェクト用のメインスタイル
   └─assets.json    #<-- リビジョン番号管理ファイル
```

開発環境でビルドされたソースマップがなくなり、各ビルドソースのファイル名にはリビジョン番号のハッシュが追加され、リビジョン番号管理用の `assets.json` が出力される。
商用環境ではスクリプトやスタイルがブラウザにキャッシュされてしまい、変更がなかなかフロントエンドに反映されないという状態を抑止するため、それらのファイルが変更された時にはリビジョン番号のハッシュを変更してファイル名自体を変えることで、ブラウザへの予期しないキャッシュを防ぐことができるようになる。
そして、スクリプトを読み込むHTML側で、そのハッシュ付ファイルをインクルードする際にリビジョン番号を意識せずにインクルードするための管理ファイルが `assets.json` なのである。

## フォントパスのローカライズ

**Bootstrap** や **Font Awesome** のアイコンフォントはCSSからの相対パスでフォントフォルダのフォントを読み出すが、bower パッケージ内のディストリビューションソースからビルドしてしまうと、そのフォントパスの変更ができずに、ビルド後のディレクトリ構成によってはフォントを読み込めなくなる場合がある。
デフォルトでは、それぞれのパッケージのフォントパスは下記のようになっている。

| パッケージ名 | 初期フォントパス | Sass用変数 | LESS用変数 |
|:----------:|:--------------|:----------:|:---------:|
| bootstrap | `../fonts/bootstrap/` | - | `@icon-font-path` |
| bootstrap-sass | `../fonts/bootstrap/` | `$icon-font-path` | - |
| font-awesome-less | `../fonts/font-awesome/` | - | `@fa-font-path` |
| font-awesome-sass | `../fonts/font-awesome/` | `$fa-font-path` | - |
| Fuel UX | `../fonts/` | - | `@fueluxFontPath` |

このプロジェクトテンプレートでのフォントパスは一律で `../fonts/` になっている必要がある（ `gulp fonts` のタスクで、フォントファイルは `gulp-flatten` モジュールによってパスが平坦化されているため ）。
そんなわけで、SassやLESSをコンパイルする時に変数を定義してフォントディレクトリのパスを変更する必要が出てくる。ちなみに、LESSの場合、変数は定数のため、一度定義されると上書きできない特性があり、一方でSassの場合、コアソース側の変数定義時に `!default` オプションがついているので、すでに変数値が定義されている場合に上書きが行われない。つまりは、SassもLESSもコンパイルする際に一番最初に変数を定義してしまえば、その変数値によってCSSがコンパイルされるというわけだ。
そこで、SassやLESSをコンパイルする前に各ソースファイル群をインポートする「**インポータースタイル**」を利用して、自分のビルド環境に合わせて変数を定義するのだ。
このプロジェクトテンプレートにおける「インポータースタイル」は `sources/styles/` 直下にある `concat-assets.scss` と `custom-main.less` の二つだ。

では中身を見てみる。
まずは、Sass/SCSS用のインポータースタイル `concat-assets.scss` だ。

```scss:concat-assets.scss
@import "common/_variables";

// bower:scss
// endbower
```

一行目で変数定義用の `common/_variables.scss` をインポートしているのがわかる。ただ、他にインポートされるソースの定義がないように見えるが、 **重要なのは `// bower:scss ～ // endbower` のコメント行だ** 。 この  `// bower:scss` で始まり `// endbower` で終わるコメントには gulp コマンド実行時に **wiredep** プラグインによって、`bower_conponents/` 下にインストールされたパッケージのSass/SCSS用ソースの「インポータースタイル」が自動でインポートされるという仕組みが隠れている（正確には `bower.json` の `main` に登録されているパッケージが対象になる）。
実際に`gulp` コマンドを実行した後にこの `concat-assets.scss` を開いてみると、下記のようにファイルが書き換わっている。

```scss:concat-assets.scss
@import "common/_variables";

// bower:scss
@import "../../bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
@import "../../bower_components/font-awesome-sass/assets/stylesheets/font-awesome.scss";
// endbower
```

つまりこのインポータースタイルは、最初に変数定義用の `_variables.scss` をインポートした後に、各種外部パッケージのSass/SCSSファイルをインポートする建付けになっている。そのため、 `_variables.scss` で定義された変数値が有効化された状態でCSSにコンパイルされるというわけだ。
──で、肝心の変数定義ファイルの中身だが、

```scss:_variables.scss
// Glyphicons font path
$icon-font-path:  "../fonts/";

// Font Awesome font path
$fa-font-path:  "../fonts/";
```

──となっている。

次にLESS用のインポータースタイル `custom-main.less` だ。

```less:custom-main.less
@import "common/_variables.less";
@import "common/_global.less";
@import "layouts/_header.less";
@import "layouts/_body.less";
@import "layouts/_footer.less";
```

今回のプロジェクトテンプレートではLESS版の外部リソースとしては Fuel UX を使っているのだが、このパッケージのLESSはコンパイル時にエラーになってしまうので、すでにコンパイル済みのディストリビューションソースを利用している。そのため、`wiredep` で読み込むLESSコンパイルがないので `wiredep` エリアを設けていない。
もし、LESSコンパイルが必要になった場合は、Sass/SCSS版と同じように、

```less:
// bower:less
// endbower
```

──の二行を追加すれば対応できる。

# アセットのローディング

さて、以上で bower で外部リソースのパッケージ管理＆インストール、 gulp で全リソースのコンパイルビルド＆パブリッシュという仕組みが完成したのだが、開発環境と商用環境ではアセットの読み込み方が変わるうえ、商用環境ではリビジョンハッシュの追加によってアセットのファイル名が動的になってしまった。このままだと、プロジェクトのフロントエンドを確認する時にいちいちアセットの読み込み処理を修正する必要が出てくる。

そこで、環境に応じてアセットのローディングを自動化してみる。今回のプロジェクトテンプレートはPHPのアプリケーションを想定しているので、ロジックはPHPである。
テンプレートなのでかなり簡潔に作ってあるので、あしからず。

まずは、エンドポイントとなる起点ファイル `index.php` だ。

```php:index.php
<?php

define( 'PROJECT_ROOT', dirname(__FILE__) );
define( 'PROJECT_URL', sprintf( '//%s/%s/', $_SERVER['HTTP_HOST'], basename(PROJECT_ROOT) ) );

$environment = file_exists( PROJECT_ROOT . '/assets/assets.json' ) ? 'production' : 'development';
define( 'ENV', $environment );

require_once( 'lib/functions.php' );
require_once( 'templates/sample.php');
```

商用環境かどうかの環境フラグ `ENV` は、`assets/assets.json` ファイルのあり・なしで判定しているので、 `gulp` と `gulp --production` のどちらでビルドしてもPHP側を修正することはない。ただし、 `PROJECT_ROOT` や `PROJECT_URL` はプロジェクトの実行環境に応じて定義しなおす必要がある。

次は、先にテンプレート `templates/sample.php` から。

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

最後に、肝心のロジック部 `lib/functions.php` だ。

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
～ ここは静的コンテンツなので割愛 ～
<?php
}

function get_footer() {
  
  assets_loader( [ 'modernizr.js', 'jquery.js', 'main.js' ] );
  
}
```

今回の gulp タスクでビルドされるアセットの特徴として、開発環境の場合は格納パスやファイル名が固定なので、静的に読み込める。一方、商用環境ビルドの場合はファイル名が動的になるため、リビジョン番号管理ファイル `assets/assets.json` を使ってアセットファイルを読み込むことになる。
ロジックとしては、アセットを読み込みたい場所で関数 `assets_loader()` を呼ぶことになる。引数として、読み込むアセットを読み込まれる順に配列として指定してあげる。引数がなければ、商用環境なら `assets.json` で定義されているアセット全てを読み込むし、開発環境なら読み込みは行われない。
エラー処理を含めて、記述がちょっと冗長なので、もうちょっとスッキリ書きたいところだが、まぁサンプルなので良いかなw


**gulp** と **bower** を徹底的に習得しようという目論見もあってこの記事を書いてきたが、もうそろそろ止めます。ホントは、あと **Travis CI** でのビルドテストと、 **jscs** を使ってプロジェクト用のコーディング規約の定義とかもこの記事に盛り込もうと思っていたんだけど、あまりにも長大になってしまったので、それらは今後別途記事にしようかと思う。


# APPENDIX

## プロジェクトテンプレートのダウンロード

もしこの記事のプロジェクトテンプレートのソースが欲しいって方がいましたら、下記に置いてあるので、好きにお使いください。

[]()

※ 将来的に Travis CI と jscs のお勉強する時にこのリポジトリをまた使おうと思っている。

## 参考URL

記事内で紹介したURL以外で、参考にしたものを覚えている限り揚げつらっておこうかと。

- []()
- []()



以上です。最後まで読んでくれた方、ありがとうございました！
