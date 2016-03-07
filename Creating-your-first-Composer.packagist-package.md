참조 : http://blog.jgrossi.com/2013/creating-your-first-composer-packagist-package/

# Using Composer

Composer is a package manager for PHP.
Composer 는 PHP 의 패키지 매니저이다. 

 You can use packages the community developed and you can contribute with your packages too.
당신은 커뮤니티에서 개발된 패키지를 사용할 수 있고, 당신의 패키지로 기여 할수도 있다.

Here I'll show how to create a project/package, install Composer inside it and send to Packagist, where others developers can use it inside their projects.
여기서 나는 project/package를 만들고, 그 내부에 Composer를 설치하고, 다른 개발자들이 그들의 프로젝트에서 사용할 수 있게 Packagist로 보내는 방법을 보여줄 것이다.

# Creating the Package


You can create a new project or update one to use Composer.
너는 Composer를 사용해서 새로운 프로젝트를 만들거나 갱신할 수 있다.

I'll create a hello world class.
나는 hello world class 를 만들 것이다.

It's a simple class but you can create complex projects and share them with the others developers.
간단한 클래스 이다. 그러나 너는 복잡한 프로젝트를 만들수 있고,  다른 개발자들에게 공유할 수 있다.

I'll use "hello-world" as project's name.
나는 프로젝트 이름으로  "hello-world" 를 사용할 것이다.

Composer work in "vendor/package" name format.
Composer 는 "vendor/package" 의 이름 포맷으로 동작한다.

Here we can set as "vendor" name my name: "juniorgrossi" and as package name "hello-world", the name of the project.
여기서 우리는 "vendor" 이름으로 나의 이름 "juniorgrossi" 로 . 그리고 package 이름으로  "hello-world"로 설정한다. 프로젝트의 이름을

- Files Structure
You can put all files inside the main dir, but I strongly recommend to create another dir, as "src" to be easier to understand and maintain your code organized.
너는 모든 파일을 main dir 에 넣을 수 있다. 근데 나는  "src" 처럼 너의 코드 구성을 유지하고 이해하기 쉬운  다른 dir 를 만드는걸 강력하게 추천한다.

The project structure will start with the follow: * hello-world (root dir) * src * HelloWorld * SayHello.php Our SayHello.php file will have:

프로젝트의 구조는 .....  

```php
<?php 

namespace HelloWorld;

class SayHello{
    public static function world()
    {
        return 'Hello World, Composer!';
    }}
```

#  Starting Composer
As our project is ready we can "install" Composer inside it.
우리 프로젝트는 Composer  로 그것 안에 있는것을 설치 할 준비가 되어있을 것이다.

This is only create a "composer.json" file inside root dir, but Composer can do that for you. Inside your project root:
composer init You'll have the follow Composer response:
이것은 단지 root dir 에 "composer.json" 파일을 만드는 것이다. composer는 당신을 위해 그것을 할수 없다.
너의 project root 에서 : composer init  너는 composer 의 응답을 따라야한다.

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

우리는 최소 요구조건 PHP 5.3 에 대한 정보를 추가했고, 
Composer 에 "src" dir 에 안에 있는 "HelloWorld" namespace 를 가지고 모든 파일을 "autoload" (using PSR-0) 되내고 물어볼 수 있다.


# Testing Package
Shure we want to do a simple test to verify if our class is working well.
Shure(?) 우리의 class 가 잘 동작하는지 아닌지 확인하기 위해 간단한 테스트를 해볼 수 있다.

You can create a new project and "paste" your classes inside it or test inside your own project, wich is better and easier.
너는 새로운 프로젝트를 만들고 너의 class 들을 그 안에 붙여 넣거나, 너의 프로젝트 안에 있는 것을 테스트 할수 있다.
더 좋고 쉬운

We're creating a Composer project so we must have Composer files installed inside our projects.
우리는  우리의 프로젝트 안에 설치된 composer file 들을 가지고 잇어야만 composer 프로젝트를 생성 할수 있다.

So, install it running"composer install" inside your root dir:

```shell
composer install
```
     

As you have only "php >=5.3.0" inside "composer.json", Composer will install only it's own files.


With Composer installed create a directory "tests" inside your root dir.

Create the "test.php" file inside it with the follow content:

```php
<?php 

require_once __DIR__ . '/../vendor/autoload.php'; // Autoload files using Composer autoload

use HelloWorld\SayHello;

echo SayHello::world();
 Go to the terminal (or create a PHP web server inside "tests" dir) and type: 

php tests/test.php
```
You'll get "Hello World, Composer!". It's working now.



# Sending to Packagist.org

Now your project is working and you want to send it to Packagist.
지금 너의 프로젝트는 동작하고 있고, 너는 그것을 Packagist 로 보낸다.

The easy way is push your project to Github using Git.
git 을 사용해서 Github 에 너의 프로젝트를 push 하는 쉬운 방법

Go to Github and create a new public repo called "helloworld", start the Git project inside your root dir and push it:
Github 에 간다. "helloworld"    로 불리는 새로운 프로젝트를 생성한다. 
너의 root dir 안의 Git 프로젝트를 시작한다. 그리고 push it.

```
git init 
git add . 
git commit -m "First commit" 
git remote add origin git@github.com:username/helloworld.git 
git push origin master
```

Now you have your project inside a Github repo and you're ready to send it to Packagist.
너는 Github repo 에 너의 프로젝트를 가지고 있다. 그리고 너는 Packagist 에 보낼 준비가 되었다.


Go to Packagist web site, create your account, login and Submit a Package.
package 웹사이트에 가서 너의 계정을 만들고, 로그인 그리고 Submit a Package.


Packagist'll ask you forRepository URL (Git/Svn/Hg).
package 는 Repository URL 를 묻는다.


Paste there git@github.com:username/helloworld.git and click "Check!".
git@github.com:username/helloworld.git 를 붙여 넣는다. 그리고 "Check!" 를 클릭


Packagist will check your project and return the project name.
Packagist 는 너의 프로젝트를 체크하고 프로젝트 이름을 돌려준다. 

 If it's correct accept it.

Packagist Details

Every time you do a new commit to Github you must update the Packagist.
Github 에 새로운 commit 을 할때마다 너는  Packagist를 갱신해야한다.


Go to your account, your package and click "Force Update!".

너의 account, package 로 간다.  "Force Update!" 를 클릭한다.


Packagist will go to Github and update the sources.
Packagist 는 Github 으로 가고, 그 소스를 갱신한다.


You can turn on "auto update" going to your Github repo, clicking "Settings", after "Service Hooks" and click the "Packagist" service.
너의 Github repo에 가서 settings 를 클릭하고 "auto update" 를 켠다. 그 후에 "Service Hooks" 과  "Packagist" service 를 클릭한다.


There update with your information, like:


	* User: your Packagist username, like juniorgrossi
	* Token: your API token, that you can find inside your Packagist settings link
	* Domain: packagist.org Ok! Auto update finished and your package is available to other developers.

너의 정보를 업데이트한다.  

	* User :  juniorgrossi  같은  Packagist의 username
	* Token :   너의 Packagist settings link 안을 찾을 수 있는 API token
	* Domain : packagist.org Ok!   Auto update는 끝났다. 그리고 너의 패키지는 다른 개발자가 이용가능하다.


Our first Composer package is finished, but you can do much more using it. Thanks!
우리의 첫번째 composer package 는 완료되었다.  하지만 너는 그것을 사용해서 더 많은 것을 할 수 있다.  감사!


