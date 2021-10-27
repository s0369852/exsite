# TypeScript란 무엇인가?
- 우리가 사용하는 JS에 type이라는 개념을 적용시킨 것을 말한다. (JS확장)
- JS를 이해함으로써, 에러를 잡거나 고치는데에 드는 시간을 절약해준다.
- 어떤 브라우저, 어떤 OS, 어떤 JS 실행환경(node, 브라우저)에서 작동
- 완전한 오픈소스
- JS 기능의 강화, compiles 라는 과정을 거처 순수한(브라우저, node -> 실행가능한 환경에서 이해할 수 있는 환경 = plain) JS로 compile 해준다.
- 전통적인 compiled language와는 다른 점이 많다. 그래서 "Transpile"이라고도 한다. 

Compiled | Interpreted
-- | --
컴파일이 필요 O | 컴파일이 필요 X
컴파일러가 필요 O | 컴파일러가 필요 X
컴파일하는 시점 O => `컴파일 타임` | 컴파일하는 시점 X
컴파일된 결과물을 실행 | 코드 자체를 실행
컴파일된 결과물을 실행하는 시점 | 코드를 실행하는 시점 O => 런타임

- Compiled와 Interpreted의 가장 중요한 차이점은 compile해서 실행할 수 있는 코드를 만들어 내는 것인데, compiled 하는 시점이 있다. interpreted 언어 경우에는 작성한 코드를 바로 실행하고, 실행하면서 문제가 생기면 런타임상황에서 에러가 난다. 근데, 런타임상에서 에러가 나는 것을 발견하기 전에, compiled language는 컴파일 타임이 있기 때문에, 컴파일 타임에 미리 에러를 찾아서 고칠 수 있다. 

# TypeScript 환경 세팅
## JavaScript 실행 환경
node.js | browser(대표적)
-- | --
Chrome V8 JS엔진을 사용하여, 자바스크립트를 해석하고 OS레벨에서의 API를 제공하는 서버사이드용 JS 런타임 환경 | HTML을 동적으로 만들기 위해 브라우저에서 JS를 해석하고, DOM을 제어할 수 있도록 하는 JS 런타임 환경

## TypeScript 설치
- npm
* `npm i typescript -g`
* `node_modules/.bin/tsc`
* `tsc source.ts`

1. 글로벌 설치
* `npm i typescript -g`
* typescript 컴파일러 사용하는 명령어 -> `tsc test.ts` -> test.ts는 특정파일이다.
* 컴파일 후 아무 문제가 없다면 터미널에서 아무 문제없이 종료되고 test.js라는 파일이 생성된다. 

2. 프로젝트별 설치 
* 글로벌(g)로 설치했다면 tsc만 입력해도 전체가 다 컴파일 되지만 프로젝트를 만들고 그 프로젝트 안에 있는 모든 ts파일을 어떤식으로 컴파일 할건지를 "설정파일"을 넣어줘야 한다. 
* 설정파일을 자동으로 생성해 줄 수 있는 defalut 명령어가 있다.
* `tsc --init` -> tsconfig.json 파일이 생성됨
* tsconfig.json이 설치된 폴더에 설정에 맞게 컴파일러가 실행이 된다. 
* tsconfig.json이 defalut로 설치가 되었기 때문에, 표준적인 설정이 담겨져 있다.

3. .ts파일을 변경하면 변경하는 즉시 컴파일이 새로 생성되도록 하는 명령
* `tsc -w`
* 변경이력을 보여주는 모드로 실행되면서 .ts파일에서 변경을 하면 .js파일로 바로 컴파일이 된다. 따로 `tsc` 명령을 하지 않아도 된다. 

4. 프로젝트에 타입스크립트 설치
* global로 설치할 경우 해당 프로젝트에만 의존성이 있는게 아니라 전체의 의존성이 생기기 때문에 선호하지 않는 방식이 될 수도 있다.
* tsc-project를 생성하고 npm프로젝트(node프로젝트) 라이브러리에 의존성이 전부다 등록될 수 있도록 만들기 위해 `npm init -y`
* `npm iniy -y`로 pacakge.json 파일이 생성된다. 이 프로젝트를 이제 npm 프로젝트라고 부른다.
* npm 라이브러리를 설치해준다. -> typescript `npm i typescript`
* 컴파일러는 node_modules라는 폴더안에 생성된다. (typescript)
* 컴파일러를 실행하려면 `tsc`명령어를 사용해야 하는데, 보통 node_modules 폴더 안에 .bin이라는 숨긴폴더가 있는데, 그안에 존재한다. 
### 컴파일러 실행방법 (프로젝트에서 실행할때 (글로벌X))
1. `node_modules/.bin/tsc`
2. `node_modules/typescript/bin/tsc`
3. `npx tsc`
* 이 프로젝트 안에 tsconfig.json파일이 존재해야 실행이 가능하다.
* 보통은 바로 `npx tsc`를 바로 실행하지 않고, 이 프로젝트에 어떤 스크립트가 돌아갈 수 있는지를 등록을 하는데, 이 등록을 package.json에 한다.
* package.json 파일안에 "scripts" 값에다가 "bulid": "tsc"라고 적어주면 node_modules라고 적혀 있는 앞부분을 생략하고 사용할 수 있다. -> `npm run bulid`라는 명령어를 사용해서 scripts안에 들어있는 build에 대응되는 tsc를 실행할 수 있다.  
* 마찬가지로 package.json 파일 안 scripts에다가 "build": "tsc -w"라고 적어주고 `npm run build:watch`를 편하게 사용할 수 있다.

