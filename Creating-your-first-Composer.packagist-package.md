참조 : http://blog.jgrossi.com/2013/creating-your-first-composer-packagist-package/

# Creating your first Composer/Packagist package

## Using Composer

Composer is a package manager for PHP.

Composer 는 PHP 의 패키지 매니저이다.


You can use packages the community developed and you can contribute with your packages too.

당신은 커뮤니티에서 개발된 패키지를 사용할 수 있고, 당신의 패키지에 기여 할수도 있다.


Here I'll show how to create a project/package, install Composer inside it and send to Packagist, where others developers can use it inside their projects.

여기서 나는 project/package를 만들고, 그 내부에 Composer를 설치하고, 다른 개발자들이 그들의 프로젝트에서 사용할 수 있게 Packagist로 보내는 방법을 보여줄 것이다.


## Creating the Package

You can create a new project or update one to use Composer.

너는 Composer를 사용해서 새로운 프로젝트를 만들거나 갱신할 수 있다.


I'll create a hello world class.

나는 hello world class 를 만들 것이다.


It's a simple class but you can create complex projects and share them with the others developers.

이건 간단한 클래스지만 당신은 복잡한 프로젝트를 만들어 다른 개발자들에게 공유할 수 있다.


I'll use "hello-world" as project's name.

나는 프로젝트 이름으로 "hello-world" 를 사용할 것이다.


Composer work in "vendor/package" name format.

Composer는 "vendor/package"의 이름 포맷으로 동작한다.


Here we can set as "vendor" name my name: "juniorgrossi" and as package name "hello-world", the name of the project.

여기서 우리는 "vendor" 이름으로 나의 이름 "juniorgrossi"를, package 이름으로 프로젝트의 이름인 "hello-world"로 설정한다.


### Files Structure
You can put all files inside the main dir, but I strongly recommend to create another dir, as "src" to be easier to understand and maintain your code organized.

모든 파일을 main 디렉토리에 놓아둘 수도 있지만, "src"와 같은, 당신의 코드 구성을 이해하고 유지하기 쉬운 다른 디렉토리를 만드는걸 강력하게 추천한다.


The project structure will start with the follow: * hello-world (root dir) * src * HelloWorld * SayHello.php Our SayHello.php file will have:

프로젝트의 구조는 아래와 같이 시작한다 :


```php
<?php

namespace HelloWorld;

class SayHello{
    public static function world()
    {
        return 'Hello World, Composer!';
    }}
```

### Starting Composer
As our project is ready we can "install" Composer inside it.

이제 우리의 프로젝트가 준비되었으니 그 안에 Composer를 설치할 수 있다.


This is only create a "composer.json" file inside root dir, but Composer can do that for you. Inside your project root:

이건 단지 root 디렉토리에 "composer.json" 파일을 만드는 것 뿐이지만, Composer가 대신 해줄 수도 있다. project root 에서 :


composer init You'll have the follow Composer response:

composer init을 하면 다음과 같은 응답을 받을 것이다.


```shell
macbook:hello-world grossi$ composer init


  Welcome to the Composer config generator



This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [juniorgrossi/hello-world]:
 You can accept the default or customize it like "yourname/hello" or what you want. Complete all Composer questions like:

Package name (<vendor>/<name>) [juniorgrossi/hello-world]: juniorgrossi/hello-worldDescription []: My first Composer projectAuthor [Junior Grossi <me@juniorgrossi.com>]: Your Name <your@name.com>Minimum Stability []: dev

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? noWould you like to define your dev dependencies (require-dev) interactively [yes]? no

{
    "name": "juniorgrossi/hello-world",
    "description": "My first Composer project",
    "authors": [
        {
            "name": "Your Name",
            "email": "your@name.com"
        }
    ],
    "minimum-stability": "dev",
    "require": {

    }}

Do you confirm generation [yes]? yes
 Now you have "composer.json" file saved in your root dir. It's almost ready but we must do some changes:

{
    "name": "juniorgrossi/hello-world",
    "description": "My first Composer project",
    "authors": [
        {
            "name": "Your Name",
            "email": "your@name.com"
        }
    ],
    "minimum-stability": "dev",
    "require": {
        "php": ">=5.3.0"
    },
    "autoload": {
        "psr-0": {
            "HelloWorld": "src/"
        }
    }}
```

What we did here is add information about PHP 5.3 as minimum requirements (require section) and tell Composer to "autoload" (using PSR-0) all files with "HelloWorld" namespace that are inside "src" dir.

require 영역에 최소 요구조건으로 PHP 5.3에 대한 정보를 추가했고,

Composer에게 "src" 디렉토리 안에 있는 모든 파일을 "HelloWorld"라는 namespace로 (PSR-0을 이용해) "autoload"하라고 지시했다.


### Testing Package
Shure we want to do a simple test to verify if our class is working well.

우린 class가 잘 동작하는지 검증하기 위해 간단한 테스트를 하고 싶다는 점을 명심하자.


You can create a new project and "paste" your classes inside it or test inside your own project, wich is better and easier.

새로운 프로젝트를 만들어 당신의 class들을 그 안에 붙여 넣을 수도 있고, 좀 더 쉽고 좋은 방법으로, 당신의 프로젝트 내부에서 테스트를 할 수도 있다.


We're creating a Composer project so we must have Composer files installed inside our projects.

이제 Composer 프로젝트를 새로 생성하고, 우리의 프로젝트 안에 Comoser 파일들이 설치되도록 하려한다.


So, install it running"composer install" inside your root dir:

즉, root 디렉토리에서 "composer install"를 실행하여 설치하면 된다.


```shell
composer install
```


As you have only "php >=5.3.0" inside "composer.json", Composer will install only it's own files.

"composer.json"안에 "php >=5.3.0"으로 설정했으니, Composer는 이에 해당하는 파일만 설치할 것이다.


With Composer installed create a directory "tests" inside your root dir.

Composer가 설치됐으면, root 디렉토리 아래 "tests" 디렉토리를 만들자.


Create the "test.php" file inside it with the follow content:

"test.php"라는 파일을 만들고 아래 내용을 넣어보자.


```php
<?php

require_once __DIR__ . '/../vendor/autoload.php'; // Autoload files using Composer autoload

use HelloWorld\SayHello;

echo SayHello::world();
```
 Go to the terminal (or create a PHP web server inside "tests" dir) and type:

 터미널로 가서 (혹은 "tests" 디렉토리 아래 PHP 웹 서버를 생성하여) 아래와 같이 쳐보자:

```
php tests/test.php
```
You'll get "Hello World, Composer!". It's working now.

"Hello World, Composer!"라는 문구가 보이면 성공한 것이다.



### Sending to Packagist.org

Now your project is working and you want to send it to Packagist.

이제 당신의 프로젝트는 잘 동작하고 있고, 그것을 Packagist로 보내고 싶을 것이다.


The easy way is push your project to Github using Git.

쉬운 방법은, 당신의 프로젝트를 Git을 이용해 Github에 push하는 것이다.


Go to Github and create a new public repo called "helloworld", start the Git project inside your root dir and push it:

Github에 가서 "helloworld"라는 불리는 새로운 리파지토리를 생성하고, 당신의 root 디렉토리 안에 Git 프로젝트를 시작하고 push 하라.


```
git init
git add .
git commit -m "First commit"
git remote add origin git@github.com:username/helloworld.git
git push origin master
```

Now you have your project inside a Github repo and you're ready to send it to Packagist.

이제 당신의 프로젝트는 Github 리파지토리에 위치해 있고, Packagist에 보낼 준비가 되었다.


Go to Packagist web site, create your account, login and Submit a Package.

Packagist 웹사이트에 가서, 계정을 만들고, 로그인 그리고 패키지를 Submit 하라.


Packagist'll ask you forRepository URL (Git/Svn/Hg).

Packagist는 Repository URL (Git/Svn/Hg)을 물을 것이다.


Paste there git@github.com:username/helloworld.git and click "Check!".

git@github.com:username/helloworld.git 를 붙여 넣는다. 그리고 "Check!" 를 클릭


Packagist will check your project and return the project name.

Packagist는 너의 프로젝트를 체크하고 프로젝트 이름을 돌려줄 것이다.


If it's correct accept it.

이상없으면 수락한다.


### Packagist Details

Every time you do a new commit to Github you must update the Packagist.
Github에 새로운 commit을 할 때마다 반드시 Packagist를 갱신해야한다.


Go to your account, your package and click "Force Update!".

당신의 계정, package로 가서 "Force Update!"를 클릭한다.


Packagist will go to Github and update the sources.

Packagist는 Github으로 가, 소스를 갱신해올 것이다.


You can turn on "auto update" going to your Github repo, clicking "Settings", after "Service Hooks" and click the "Packagist" service.

당신의 Github 리파지토리에 가서 settings를 클릭한 후, "Service Hooks"에서 "Packagist"를 클릭하면 "auto update"를 켤 수 있다.

(역자 주 : 현재는 Webhooks & services > Service > add service를 클릭해서 Packagist를 검색하면 찾을 수 있다.  <- 요거 확인 좀!)


There update with your information, like:

* User: your Packagist username, like juniorgrossi
* Token: your API token, that you can find inside your Packagist settings link
* Domain: packagist.org Ok! Auto update finished and your package is available to other developers.

거기서 아래와 같은 정보를 업데이트하면 된다.

* User :  juniorgrossi  같은  Packagist의 username
* Token :   너의 Packagist settings link 안을 찾을 수 있는 API token
* Domain : packagist.org Ok!   Auto update는 끝났다. 그리고 너의 패키지는 다른 개발자가 이용가능하다.


Our first Composer package is finished, but you can do much more using it. Thanks!

우리의 첫번째 composer package가 완성됐다. 하지만 그걸 이용하면 훨씬 더 많은 걸 할 수 있다. 감사!


