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

## 7. NPM 프로젝트의 버전 관리(.gitignore)
- npm을 통해서 프로젝트를 관리할 때에는 몇가지 주의사항이 있다. 
- .cache, dist, node_modules 이러한 폴더들은 npm install, npm run, npm build 라는 프로젝트를 제품으로 만들어주는 명령을 통해서 알아서 자동으로 만들어지는 폴더들. <br/>
이러한 후작업을 통해서 만들어지는 폴더들은 버전관리를 할 필요가 없다. 
- 버전관리를 할 필요없는 폴더들과 파일들은 깃허브 저장소에 push를 하지 않아도 된다.
- node_modules라는 폴더를 버전으로 관리하지 않아도 언제든지 **npm install**로 다시 npm의 생태계에서 가져와서 설치를 할 수 있다. (완벽하게 동일한 버전으로, 왜냐하면 package.json, package-lock.json에 버전이 명시가 되어 있기 때문.)
- .cache, dist 폴더도 **npm run dev**, **npm run build** 명령어를 통해서 언제든 다시 생성할 수 있다. 
- **.gitignore** 파일을 만든다.
- 버전관리를 무시 할 폴더나 파일을 한줄에 하나씩 입력해준다.

## 8. 정규표현식 (RegExp, Regular Expression, 정규식)
- https://heropy.blog/2018/10/28/regexp/
- 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)
- 간단한 문자 검색부터 이메일, 패스워드 검사 등의 복잡한 문자 일치 시켜서 다른 문자로 추출하거나 활용할 수 있다.
- 정규식의 패턴이 수행하는 역할과 잘 매치가 되지 않아 가독성이 많이 떨어진다. (특수기호 사용)

### 정규표현식의 역할
- 1. 문자 검색(search),
- 2. 문자 대체(replace),
- 3. 문자 추출(extract)

### 정규표현식 테스트 사이트 (https://regexr.com)
- 정규표현식은 JS에서만 사용되는 것이 아니기 때문에 다른 프로그래밍 언어 혹은 특정한 환경에서도 사용 가능, 여기서 주의해야 할 부분은 JS에서는 동작하는데 다른 프로그래밍 언어에서는 동작하지 않는 기능 들이 있을 수 있고, 다른 언어에서는 동작하는데 JS에서는 동작하지 않을 수 있다. 

### 정규식 생성 방식
- 1. 생성자 함수 방식 (RegExp) : 생성자 함수를 호출하여 사용할 수 있다. 
```js
const regexp1 = new RegExp('^1bc'); // new RegExp(표현식)
const regexp2 = new RegExp('^abc', 'gi'); // new RegExp(표현식, 플래그)

new RegExp('표현', '옵션')
new RegExp('[a-z]','gi')
```

- 2. 리터럴(Literal) 방식 : 정규식은 /로 감싸진 패턴을 리터럴로 사용한다.
```js
- 2-1. const regexp1 = /^abc/;  // /표현식/
- 2-2. const regexp2 = /^abc/gi;    // /표현식/플래그

/표현/옵션
/[a-z]/gi
```

### 정규식을 다루는 메소드(Methods)
매소드 | 문법 | 설명
--|--|--
exec | `정규식.exec(문자열)` | 일치하는 하나의 정보(Array) 반환
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자열의 배열(Array) 반환
search | `문자열.search(정규식)` | 일치하는 문자열의 인덱스(Number) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
split | `문자열.split(장규식)` | 일치하는 문자열을 분할하여 배열(Array)로 반환
toString | `생성자_정규식.toString()` | 생성자 함수 방시그이 정규식을 리터럴 방식의 문자열(String)로 반환


### 예제 문자
```js
    const str = `
        010-1234-5678
        theone@email.com
        http://www.omdbapi.com/?apikey=7035c60c&s=frozen
        The quick brown fox jumps over the lazy dog.
        abbcccdddd
        `
```

### 플래그(옵션)
플래그 | 설명
-- | --
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치 (ignore case)
m | 여러 줄 일치(multi line)
u | 유니코드(unicode)
y | `lastIndex` 속성으로 지정된 인덱스에서만 1회 일치(sticky)

### 패턴(표현)
패턴 | 설명
-- | --
`^` | 줄(line)의 시작에서 일치 `/^ab/`
`$` | 줄(line)의 끝에서 일치 `/ab$/`
`.` | 임의의 한 문자와 일치
` a\|b ` | a 또는 b와 일치, 인덱스가 작은 것을 우선 반환
`*` | 0회 이상 연속으로 반복되는 문자와 가능한 많이 일치, `{0,}`와 동일
`*?` | 0회 이상 연속으로 반복되는 문자와 가능한 적게 일치(lazy), `{0}`와 동일
`+` | 1회 이상 연속으로 반복되는 문자에 가능한 많이 일치, `{1,}`와 동일
`+?` | 1회 이상 연속으로 반복되는 문자에 가능한 적게 일치(lazy), `{1}`와 동일
`?` | 없거나 1회 가능한 많이 일치
`??` | 없거나 1회 가능한 적게 일치 (lazy)
`{3}` | 3(숫자)개 연속 일치
`{3,}` | 3개 이상 연속 일치
`{3,5}` | 3개 이상 5개 이하(3~5개) 연속 일치
`{3,5}?` | 3개 이상 5개 이하(3~5개) 연속 중 가능한 적은 3개 연속일치(lazy), `{3}`와 동일
`()` | 캡처(Capture)할 그룹
`(?<>)` | 캡처 그룹 이름 지정, `/(?<name>pattern)/` ES2018
`\1~9` | 정규식 내 캡처된 값 참조 `/(abc)\1/`
`(?:)` | 캡처(Capture)하지 않는 그룹
`(?=)` | 앞쪽 일치(Lookahead), `/ab(?=c)/`
`(?!)` | 부정 앞쪽 일치(Negative Lookahead), `/ab(?!c)/`
`(?<=)` | 뒤쪽 일치(Lookbehind), `/(?<=ab)c/` ES2018
`(?<!)` | 부정 뒤쪽 일치(Negative Lookbehind), `/(?<!ab)c/` ES2018
`[abc]` | a 또는 b 또는 c와 일치, 점(.)이나 별표(*) 같은 특수문자는 `[]` 안에서 특수 문자가 아님, `/\.[.]/`
`[a-z]` | a부터 z사이의 문자 구간에 일치(영어 소문자)
`[A-Z]` | A부터 Z사이의 문자 구간에 일치(영어 대문자)
`[0-9]` | 0부터 9사이의 문자 구간에 일치(숫자)
`[가-힣]` | 가부터 힣 사이의 문자 구간에 일치(한글)
`[2-7]` | 2부터 7사이의 문자 구간에 일치(2,3,4,5,6,7)
`[b-f]` | b부터 f사이의 문자 구간에 일치(b,c,d,e,f)
`[다-바]` | 다부터 바사이의 문자 구간에 일치(마,다,라,바)
`[^abc]` | a또는 b또는 c가 아닌 나머지 문자에 일치(부정)
`\` | 이스케이프 문자, `/\.\?\/\$\^/`
`\b` | 63개 문자(영문 대소문자 52개 + 숫자 10개 + `_`(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)
`\B` | 63개 문자에 일치하는 경계
`\d` | 숫자(Digit)에 일치
`\D` | 숫자가 아닌 문자에 일치
`\p{}` | 유니코드 속성(Property) 집합에 맞는 문자에 일치, `/\p{Emoji}/u` ES2018
`\P{}` | 유니코드 속성(Property) 집합에 맞지 않는 문자에 일치, `/\p{Uppercase}/u` ES2018
`\s` | 공백(Space, Tab 등)에 일치
`\S` | 공백이 아닌 문자에 일치
`\w` | 63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + `_`)에 일치
`\W` | 63개 문자가 아닌 나머지 문자에 일치
`\x` | 16진수 문자에 일치, `/\x61/`는 `a`에 일치
`\0` | 8진수 문자에 일치, `/\141/`은 `a`에 일치
`\u` | 유니코드(Unicode) 문자에 일치, `/\u0061/`는 `a`에 일치
`\c` | 제어(Control) 문자에 일치
`\f` | 폼 피디(FF, U+000C) 문자에 일치
`\n` | 줄 바꿈(LF, U+000A) 문자에 일치
`\r` | 캐리지 리턴(CR, U+000D) 문자에 일치
`\t` | 탭(U+0009) 문자에 일치
`$` ` | 문자 대체(replace)시 일치한 문자 이전 값 참조
`$'` | 문자 대체(replace)시 일치한 문자 이후 값 참조
`$+` | 문자 대체(replace)시 마지막으로 캡처된 값 참조
`$&` | 문자 대체(replace)시 일치한 문자 결과 전체 참조
`$_` | 문자 대체(replace)시 입력(input)된 문자 전체 참조
`$1~9` | 문자 대체(replace)시 캡처(Capture)된 값 참조 