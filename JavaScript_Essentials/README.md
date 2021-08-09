# JavaScript Essentials
<br/>

## 1. Node.js 개요 및 설치
- Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 <span style='color: darkgreen'>JavaScript 런타임</span>
<br>(런타임 : 프로그래밍 언어가 동작하는 환경)
- **자바스크립트**라는 프로그래밍 언어가 동작하는 컴퓨터 환경 = <span style='color: darkgreen'>Node.js</span>
- 자바스크립트가 동작할 수 있는 환경
    1. Node.js가 설치 되어있는 특정한 컴퓨터 
    2. 크롬 같은 웹브라우저
- 웹 페이지 개발을 위해서 약간의 도움을 받는 정도에서 프론트엔드 개발에게 필요로 하다.
    - 기본적으로 웹 브라우저에서는 HTML, CSS, JS만 동작을 한다.
    - 우리가 개발을 하는 컴퓨터에다가 개발을 도와주는 여러가지 모듈들을 설치하여 도움을 받아 개발을 하는 것이 효율적<br/> 
    (_stylus, Sass, less, BABEL, EJS, Pug 등_)
    - 모듈들은 실제로 브라우저에서 직접적으로 동작 할 수 가 없기 때문에, 대표적으로 <span style='color: coral'>Node.js</span> 환경에서 도움을 받은 내용 들을 HTML, CSS, JS로 변환을 해줘야 한다. 
    - 변환작업에 대한 명령을 내려줘야 하고, 명령이 돌아가는 환경이 필요하다. 
    - Node.js 환경에서 JavaScript라는 프로그래밍 언어로 변환을 만들어 줄 수 있고, 변환된 결과로 브라우저에서 동작을 시켜주면 되는 개념이 최신의 웹프론트앤드 개발. 
- https://nodejs.org/ko/
    1. LTS(Long term Supported) : 장기적으로 안정되고 신뢰도가 높은 지원이 보장되는 버전으로, 유지/보수와 보안(서버 운영 등)에 초점을 맞춰 대부분 사용자에게 추천되는 버전.
    2. 최신버전 : 웹에서 사용할 수 있는 가장 최신의 기술을 사용 할 수 있다. 최신기능을 자주 이용해야 해서 업데이트가 자주 일어날 수 있고, 변경사항이 많을 수 있다. (비교적 안정적이지 못하다. 연습할때는 최신버전을 사용해도 문제가 없지만, 되도록이면 안정적인 버전을 설치하는 것을 권장.)
    3. **여러버전의 Node.js를 써야할 경우가 있기 때문에, 홈페이지에서 직접 다운받는 것은 권장하지 않는다.**
    4. Node.js의 버전을 내가 원할때 언제든지 바꿀 수 있는 <span style='color: coral'>노드버전매니저(NVM)</span>를 먼저 설치하는 것을 권장.
        * https://github.com/nvm-sh/nvm
        * https://github.com/nvm-sh/nvm#installing-and-updating
        * 운영체제의 터미널 혹은 VS code의 터미널을 열어 해당 코드 설치<br/>
          curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
        * 설치 후 nvm --version을 입력하여 설치된 버전을 확인한다. 
        * 터미널이 <strong style='color: red'>bash</strong>인 경우
        * <strong style='color: red;'>bash : nvm : command not found</strong>
        * 위와 같은 문구가 뜨는 경우는 시스템에 명령이 설정된 [.bash_profile 파일]이 없을 수 있습니다. touch ~ / .bash_profile 을 사용하여 간단하게 만들고 설치 스크립트를 다시 실행하십시오. 터미널 인스턴스를 다시 시작해야합니다. 터미널에서 새 탭 / 창을 열고 다시 시도하십시오.<br/>
            1. 터미널에 .bash_profile 있는지 확인<br/>
            find ./.bash_profile
            2. 파일이 존재한다면 -> ./.bash_profile
            3. 파일이 없다면 -> find: ./.bash_profile:No such file or directory
            4. 없다면 .bash_profile을 만든다.<br/>
            touch .bash_profile
            5. 이제 .bash_profile을 열어준다. <br/>
            open .bash_profile
            6. .bash_profile 안에 해당 코드를 적고 저장한다. 
            ```javascript
            export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
            ```
            7. 터미널에 맞게 찾아서 6번의 내용을 저장해줘야 한다. (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc) 
            <br/></br>
        * 자주 사용하는 명령어
            - nvm --version   ( 설치된 nvm 버전 )
            - node --version  ( 설치된 node 버전 )
            - nvm ls  ( 현재 설치된 버전을 보여준다. )
            - nvm ls-remote ( 설치 가능한  node 버전을 알려준다. )
            - nvm install v5  ( node 5버전대에 latest 버전을 설치한다. )
            - nvm use v5  ( node 설치된 v5버전으로 사용한다. )
            - nvm alias default v5.12.0

## 2. NVM 사용법
- 유의적 버전 : node.js를 다운받는데 다운 받는 버전의 자리를 3자리까지 작성 하는 것을 말한다. <br /> (ex. 12.14.1)
- node.js를 사용할 수 있을때, node라는 명령을 사용할 수 있다. 
- node버전을 여러개를 같이 관리하는 이유는 하나의 프로젝트를 여러명이 관리하다 보면 프로젝트가 처음 만들어진 node의 버전이 해당 프로젝트에 충분히 영향을 줄 수 있기 때문.
- nvm uninstall 12.21.0 -> nvm 해당 버전 삭제
- node.js의 최적화된 버전은 프로젝트에 따라 달라질 수 있다.
- nvm --help -> nvm으로 사용할 수 있는 여러 명령어가 나타난다. 


##  3. NPM 개요(1)
- NPM(Node Package Manager)은 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈, 기능)들을 관리.
- Trade-off(상충관계) : 학습 난도 증가! -> 관리 효율 증가! 손쉬운 기능 고도화!

## 4. NPM 개요(2)
- node.js를 받았다면 npm도 사용할 수 있다.
- npm init -y : 프로젝트 구조에 package.json 파일이 생성된다.  
- "main" : main이라는 옵션은 우리도 직접적으로 생태계에 업로드 할 수 있는 패키지를 만들때, 현재의 프로젝트를 하나의 패키지처럼 만들어서 npm생태계에 업로드할때 필요한 옵션.<br/> 
하나의 웹사이트를 만드는 프로젝트에선 main이라는 옵션은 필요하지 않다. 삭제해도 가능
- "scripts" : 현재 프로젝트 내부에서 사용할 수 있는 여러가지 script명령들을 scripts부분에다가 명시를 해놓으면 우리 프로젝트와 관련된 명령들을 사용할 수 있다.
- "keywords" : 프로젝트와 관련된 키워드
- "author" : 소유주
- "license" : 프로젝트의 라이센스
- npm install parcel-bundler -D : npm을 통해서 설치를 하는데, 설치할 패키지의 이름이 'parcel-bundler'고, -D를 붙여서 설치를 해준다. (여기서 주의 -D는 무조건 대문자D)
- 설치를 하고나면, node_modules라는 폴더, package-lock.json라는 파일이 깔려졌는지 확인
- node modules안에 들어있는 것들은 하나의 패키지인 셈.
- parcel-bundler외에 생긴 폴더들은 parcel-bundler가 활용될 때 필요한 또다른 패키지들
- parcel-bundler의 package.json을 들여다보면 dependencies라는 것이 있는데, 사용하는 여러가지의 패키지들이 명시되어 있다. 
- 처음 만들었던 패키지 파일을 열어보면 "devDependencies" , "dependencies" : 우리가 설치한 패키지가 명시되어 있는 것을 확인할 수 있다. 특정한 패키지를 설치하면 패키지의 설치한 내역이 남게된다. <br/>
현재 패키지의 어떤 것들을 사용하고 있고, 그리고 그 버전은 어떻게 되는지에 대한 내역을 확인할 수 있다.  
- npm install = npm i 
- 한번 설치한 패키지는 내역으로 남게 되고, 그 내역을 바탕으로 해서 실제 패키지파일을 지우더라도, npm install 이라는 명령을 통해서, 다시 프로젝트에 해당하는 패키지를 설치할 수 있다. 
- package-lock.json -> 해당 패키지들의 내부에서 사용되는 또다는 패키지에 대한 정보가 자동으로 들어가게 된다. 
- package.json은 직접적으로 관리하는 개념 / package-lock.json 은 자동으로 관리되는 파일
- node_modules파일은 지워도 언제든지 npm install로 받을 수 있지만, package.json, package-lock.json은 절대 삭제되면 안되는 파일이다. 
- **-D(--save-dev)** 를 붙이면 devDependencies => 개발용 의존성 패키지 설치 , 붙이지 않으면 dependencies => 일반 의존성 설치 <br/>
        * 개발용 의존성 패키지 설치 : 내가 설치한 특정한 패키지들이 개발할 때에만 필요로 하고, 나중에 웹브라우저에서 동작할 때는 필요하지 않은 개념 (BABEL, Sass, parcel 등)
        * 일반 의존성 패키지 설치 : 실제로 웹브라우저에서 동작할 수 있다는 것을 전제로 한다. (GSAP, lodash 등)  

## 5. 개발 서버 실행과 빌드
- parcel-bundler 패키지를 다운 받았기 때문에 parcel 명령어를 사용할 수 있다. 
- parcel index.html -> index.html을 기준으로해서 내 컴퓨터 환경 즉, 로컬환경에서 개발용으로 서버를 열겠다. 그리고 그 서버에 접근을 해서 내가 만든 프로젝트를 브라우저에서 확인을 하겠다. 
- 이때 parcel을 사용할 경우 parcel: command not found 라며 찾지를 못하는데, package.json으로 가서 "scripts" 옵션 "dev" : "parcel index.html" 을 입력해준다.
- 이것은 프로젝트에서만 parcel-bundler가 설치된 것이기 때문에 터미널에서 직접적으로 parcel이라는 명령을 동작시킬수가 없다. 
- 프로젝트에서 "scripts" 옵션에 명령을 추가하게 되면 어디까지나 프로젝트 내부에서만 명령이 동작 하는 것으로 인식을 시켜줄 수 있고 대신에 그 명령을 "dev" 라는 이름으로 실행을 시켜주면 된다. 
- "bulid" : "parcel build index.html" -> build 라는 추가 명령을 붙인 상태에서 index.html을 실행하게 되면 실제로 사용자들이 보는 용도의 결과물이 출력이 된다. 
- Ctrl + C 키를 누르면 개발용 서버가 종료가 되고 새롭게 터미널을 열 수 있도록 변경이 된다. 
- build로 열게 되면 서버가 열리는 것이 아니라 dist/ 폴더가 생성이 되는데, 거기에 코드 난독화가 되어있는 index와 js등의 파일이 들어있다.<br/>
코드 난독화는 작성된 코드를 읽기 어렵게 만드는 작업을 말한다. 빌드된 결과(제품)는 브라우저에서 해석되는 용도로, 용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋다. <br/>
번들(Bundle)은 우리가 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업을 말한다. 

## 6. 유의적 버전(SemVer, Semantic Versioning)
- 특정한 프로그램의 버전을 명시할때 유의적 버전이라는 것을 사용하게 된다. 숫자를 3개 입력하고 마침표를 찍는 것으로 나타낸다. ex). 12.14.1
- 버전의 의미를 부여해서 그것을 구분하고 해석할 수 있다.
- Major버전.Minor버전.Patch버전
- Major -> 기존 버전과 호환되지 않는 새로운 버전. (기존과 다른 버전의 갯수)
- Minor -> 기존 버전과 호환되는 새로운 기능이 추가된 버전. (기존 버전에서 기능이 추가된 횟수)
- patch -> 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전 (마이너 버전에서 버그, 오타 수정 횟수)
- ^Major.Minor.Patch : ^ => Major 버전 안에서 가장 최신 버전으로 업데이트 허용, 버전 변경 가능 <br/>
    Major에 해당하는 부분은 바뀌지 않고, Minor와 Patch부분이 업데이트 된다.
- **npm info 패키지** : 패키지에 대한 정보를 나타낸다. 
- **npm install 패키지@4.17.20** : @뒤의 특정한 버전을 명시하면 해당하는 버전의 설치가 진행된다.
- **npm update 패키지** : 해당 패키지의 업데이트
- ^ 기호가 없다면 지정된 버전으로 항상 유지가 되는 것이다.
- ^ 기호는 npm install을 할때 자동으로 붙기도 하고, 붙지 않기도 한다. 잘 확인해서 사용하자.

