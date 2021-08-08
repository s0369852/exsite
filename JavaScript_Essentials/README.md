# JavaScript Essentials
<br/>

## Node.js
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





