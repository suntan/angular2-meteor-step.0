# angular2-meteor-step.0
請先安裝 Meteor 指令如下:
$ curl https://install.meteor.com/ | sh

下載範例到專案根目錄，以　/usr/src 為例，並變更專案名稱 (以 my-app 為例 )，輸入指令如下 :
$ cd /usr/scr
$ git clone https://github.com/suntan/angular2-meteor-step.0.git
$ mv angular2-meteor-step.0 my-app
$ cd my-app

用自己喜歡的 port 啟動(以下用1688為例)，輸入指令如下:
$ meteor -p  1688

=============================================================================================

# 詳細說明 / 教程
一.	安裝與設定:
開啟SSH terminal 進入到專案目錄進行安裝 ，指令如下:
$ curl https://install.meteor.com/ | sh

安裝完成，會列出以下關於建立Meteor Application的簡單引道訊息:
Meteor 1.3.2.4 has been installed in your home directory (~/.meteor).
Writing a launcher script to /usr/local/bin/meteor for your convenience.  為了啟動Meteor的方便，已將啟動腳本寫入到 /usr/local/bin/meteor 

To get started fast:
  $ meteor create ~/my_cool_app
  $ cd ~/my_cool_app
  $ meteor
Or see the docs at:
  docs.meteor.com   詳細說明的網址

按照官網的介紹教學引導建立socially專案，輸入指令如下:
$ meteor create socially

專案建立完成可得到如下訊息:
Created a new Meteor app in 'socially'.
To run your new app:   啟動此專案的步驟指令
  cd socially
  meteor
If you are new to Meteor, try some of the learning resources here:
  https://www.meteor.com/learn   詳細的新手操作學習資源


進入剛建立的 socially 範例專案資料，並以 meteor -p <port> 啟動專案:
$ cd socially
$ meteor -p 3002   很多時候我們的機器上會有許多個應用服務，可以透過此 -p指令來指定端口

請啟過程中會進行如下三步的編譯動作，成功後可開啟瀏覽器進行範例測試:
=> Started proxy
=> Started MongoDB.
=> Started your app.
>=> App running at: http://localhost:3002/   測試位址


Meteor Web Application 是一個Server & Client 的架構；我們在剛建立的socially專案中也可以找到server、client兩個資料夾作為對應，預設情況下我們所剛啟動的Meteor 應用是使用我們剛建立的 socially 專案 client資料夾中的 *.js、*.html、*.css 這三個檔案。

照官網的介紹是要建立一個全新的 socially專案，請把上述client 資料夾中的檔案全刪掉，輸入指令如下 :

$ cd client
$ rm -rf *.*

建立一個新的檔案 index.html ，並寫入如下內容 :

<body>
<p>Nothing here</p>
</body>

沒有<html>、< head>標籤，Meteor會自動掃名所有的 HTML檔案，並自動整合所有包含HTML、HEAD、BODY標籤的所有區段回應給前端使用者。

回到socially專案跟目錄下重新以 meteor -p <port> 指令啟動專案，並檢視網頁原始碼；就可以看到上述的情境結果。

# NPM-套件管理
可於專案根目錄下使用 npm init 以問答方式重新建立 package.json；或修改 package.json 檔案內容如下:

{
  "name": "socially",
  "version": "1.0.0",
  "description": "Tutorial is based on building Angular2 UI for a Meteor app called Socially.",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dotansimha/meteor-angular2.0-socially.git"
  },
  "author": "Dotan Simha &lt;dotansimha@gmail.com&gt; (http://github.com/dotansimha/)",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/dotansimha/meteor-angular2.0-socially/issues"
  },
  "homepage": "https://github.com/dotansimha/meteor-angular2.0-socially#readme"
}

# CommonJS-模組管理核心
Meteor 1.3 本身是使用CommonJS進行模組的 import / export 動作，而Angular 2.0是使用SystemJS進行模組的加載，當然我們也可以使用 SystemJS ，但 Meteor 建議使用 CommonJS，原因是Meteor 1.3 版本中CommonJS是內建的。

# TypeScript-語言
官網講的很長，大概的意思是，目前多數主流瀏覽器仍是以ES5為核心，縱使ES6普及也要一段時間，實際發展中的版本已到達ES7，而Angular 2.0 的框架是在server side撰寫ES6，最終還是會轉譯為ES5提供給前端使用者(這視前端使用者的瀏覽器而定，如果前端瀏覽器支援ES6那就無需轉譯) 。而TypeScript (Microsoft 與 Google 攜手打造的) 無論如何都會編譯成用戶端可執行的JS版本，而且在後續的應用中我們會體驗到 TypeScript所帶來的便利性與其他的擴充延展，在教學的後面將慢慢有所以驗。( 畢竟你Meteor也還沒那實力跟 Google和Microsoft其中任一家叫板吧! 何況兩個巨人相加，- 而且Angular 2.0以後本來主推TypeScript ；有能耐你弄一套更屌的出來嘛!)

要使用TypeScript，所以請新增 tsconfig.json 檔案；並寫入基本設定如下 :

{
  "compilerOptions": {
    "experimentalDecorators": true,
    "module": "commonjs",
    "target": "es5",
    "isolatedModules": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "removeComments": false,
    "noImplicitAny": false,
    "sourceMap": true
  }
}

解讀一下上述 tsconfig.json 檔案的設定如下 :
. module : 因為Metetor 1.3內建commonjs，也可以改成Angular 2.0內建的 systemjs
. target : 編譯給用戶端的ES版本
. moduleResolution : 套件管理，交給 NPM套件管理器處理
. emitDecoratorMetadata , experimentalDecorators : decorators 的設定跟Angular 2.0 相同

# Adding Angular 2 (加入Angular 2 結構) :
官網這裡在說明一些套件依附，與編譯處理交互間的因果關係；大概意思是說，tsconfig.json 中我們聲明了用 NPM 來作套件管理，而Metor本身需要Atmopshere來處理定義文件的編譯器和相關套件加載，實際上還是Angular 2.0跟NPM產生實際關聯，所以要先進行套件編譯器的整合，請執行以下指令:
$ meteor add angular2-compilers

可得到以下訊息:

Changes to your project's package version selections:
angular2-compilers            added, version 0.5.6
angular2-html-templates        added, version 0.5.2
barbatus:typescript            added, version 0.2.10
barbatus:typescript-compiler     added, version 0.5.7
barbatus:typescript-runtime      added, version 0.1.1
angular2-compilers: Angular 2 Templates, HTML and TypeScript compilers for Meteor

安裝 Meteor 套件，並依照package.json設定載入套件相依性，執行以下指令:

$ meteor npm install --save angular2-meteor
$ meteor npm install --save meteor-node-stubs

Note : 上述執行過程中，會有很多NPM套件的警告訊息；具官網說這是’正常’的，如果有興趣可參考: http://blog.npmjs.org/post/110924823920/npm-weekly-5 

# HTML整合
從上面的操作中我們知道Meteor會自動將所有HTML進行合併，而Angular 則是使用我們自己開發定義的元組件directive 或component，而無論directive、component都是一個HTML樣板與一支JS所組成的，Angular不是一開始就將所有的元組件進行加載，而是在需要該自定義元組件時才進行載入，所以使用angular-compilers 替換 Meteor 的HTML處理方式，使用以下指令去除 Meteor HTML Processor :

$ meteor remove blaze-html-templates

可得到以下訊息 :

Changes to your project's package version selections:
blaze-html-templates   removed from your project
caching-html-compiler  removed from your project
templating           removed from your project
templating-tools       removed from your project
blaze-html-templates: removed dependency

依照官網所說的是在稱頌自己將回應給client的HTML進行合併為一個<HTML>、<HEAD>、<BODY>， Angular 2 則還是用Component 來作page對應開發元組件；至於在每個directive、component的 template中寫<HTML>、<HEAD>、<BODY>這本來就是一種很怪的事..XXD! 但假設有這種情況照目前的情況看來，Metor 就會將頁面進行整合. (感覺上像是一種防蠢機制)

# Root Component-應用程式啟動元件
翻譯稱為-根組件。個人還是習慣稱它是 Entry Point (應用程式進入點)，可能是開發應用程式的不同所以習慣上的稱呼也不近相同吧!

Meteor官網的說明是Angular 專案就像一株Component Tree(元件樹) , 而Root Componet 就像這棵樹的根。可能多數時間都是寫C#、JAVA，我把Component、Directive都看成Object，Object可以是Class、Interface . . . ; 至於Component、Directive中所包含的 tempalte、Injetable . . .就是 Object 中的 Property，而在C#、JAVA的應用程式中都必定由Entry Point開始。

在client 資料夾內建立 app.ts 作為 Entry Point ( Root Component )，並寫入以下內容:

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
 
@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Socially { }
 
bootstrap(Socially);

上述Component 中聲明了 app.html 作為樣板，建立 app.html 檔案，並寫入以下內容:
Hello World!

動作說明:
首先引入 angular2/core 、angular2/platform/browser，透過CommonJS加載的這兩個套件並不在專案client目錄內，而是在 node_modules 目錄中，這兩個套件同時也是Angular 2的主要套件，也是我使用angular2-meteor 所會用到的相依套件。

在Angular 2 中使用 @符號，稱之為Annotations ，Annotation 簡單翻起來也是註解，不過他和 comment 不一樣，不是給人看，而是要給 compiler 和 JS engine 看的，而且實際上也會影響程式的一些運作，annotation 應該是一種完全沒有也不影響程式執行的 metadata，不過細分下去應該可以分為兩類，第一種是 Java 的 annotation，以 metadata 為主，像是物件的角色、物件間關係等，另外一種則是 decorator annotation，可以讓函數加上各種不同特性，其實就是 decorator pattern 的簡易語法，看到一些範例當中，最讓我覺得厲害的就是 memorize 了吧，如果程式引擎支援，加上一行 memorize 的 annotation 就可以讓那個函數自動有 memorize 特性，如果使用不支援此特性的引擎來執行程式，函數的輸出也不會有錯，就是沒有 memorize 的效果，效率會比較差，Python 中就有lru_cache這個 decorator 可以做到這樣的效果（Python 的 decorator 語法是提供 syntax sugar，不過寫法和其它語言的 annotation 很像）。
在ES7中Annotations 是Decorators，而在TypeScript中則是達成Decorators的一種metadata。

以上是學術概念，照我個人的看法姑且稱之為[編譯解析元件](@Component)；在這裡就把它當作在app.ts 當中有一個[編譯解析元件] (@Component)；他告訴編譯器. . .請把我編譯為一個執行動作，透過templateUrl的指定值，去開啟client/app.html這個樣板檔案，再透過selector的設定值app , 找到這個HTML TAG把這個元件塞進去。

至於編譯中聲明的動作定義 templateUrl、selector. . .等動作就看Angular 2提供那些方法給我們用了。
最終透過bootstrap 將此檔案設定為 Root Component，一個 Angular 2 Application 可以有多個 Root Component ，但必須在同一層級才可互相呼叫。

# Run the App - 執行應用程式
透過上述過程，我們將index.html修改如下:

<body>
  <app></app>
</body>

執行App ,　回到專案根目錄，並輸入以下指令:

$ meteor -p 3002

Note: 開啟瀏覽器應該會看到 Hello World! 字串，檢視原始碼，也會看到index.html中我們剛剛添加的內容。

TypeScript Typings – TS & Meteor Typings 設定
Meteor執行到此沒有發生編譯錯誤，那是上面一開始就定義了tsconfig.json 設定。但接下來可能就會出現來自TypeScript 編譯器的meteor/meteor 與meteor/tracker 的警告訊息。

讓 TypeScript 編譯器知道我們使用外部套件的方法下列兩種　：
1.	在開發的 *.ts 檔案中加入 import 寫法如下:

/// <reference path="typings/angular2-meteor/angular2-meteor.d.ts" />

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

2.	在專案根目錄下定義一個 tsconfig.json ，按照Meteor官網所說，往下的引導教學將會用到此檔案；而且 Angular 2 、Meteor 的API每個檔案也都會使用到．請執行以下指令安裝 typins :

$ npm install typings -g
$ typings install es6-promise
$ typings install es6-shim --ambient

透過上述指令的執行，專案根目錄下會由npm 帶入 typings 資料夾及其definition 設定檔main.d.ts，但Meteor的typings 則需要我們手動建立，將Meteor於GitHub上的 meteor.d.ts 檔案下載到 typings 資料夾內 ，執行命令如下 :

$ cd typings
$ git clone https://gist.github.com/tomitrescak/8366ce98f1857e202ea8
$ cp 8366ce98f1857e202ea8/meteor.d.ts meteor.d.ts
$ rm -rf 8366ce98f1857e202ea8/

然後開啟 typings/main.d.ts 檔案，加入以下設定 :

/// <reference path="meteor.d.ts" />

最後官網建議日後在 tsconfig.json 檔案中記得加入 "moduleResolution": "node" 的設定，讓TypeScript可以在node_modules自動尋找到 *.d.ts 檔案。

# Experiments - 實驗
請將 client/app.html 修改如下，並以 memtor -p <port> 進行測試:

<p>1 + 2 = {{ 1 + 2 }}</p>

