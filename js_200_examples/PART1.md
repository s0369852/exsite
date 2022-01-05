# PART 1. 

### 00. 개발 환경 구축 (Node.js와 NPM 설치)
- node.js 다운로드(https://nodejs.org/ko/download/) 설치 파일 다운로드
- 버전선택
  1. LTS : 최소 18개월 지원 (장기간 유지 관리)
  2. Current : 6개월 만 지원 (기능 추가, 업데이트 자주 일어남)
- 설치가 정상적으로 완료되었는지 확인하기 위해 Mac OS (터미널) 또는 Windows (명령 프롬프트) 실행 후 `node-v`와 `npm-v` 명령어를 실행 아래와 같은 결과가 반환되는지 확인
```zsh
last login: 로그인 일자
$ node -v
v12.14.1
$ npm -v
6.13.4
```
<br/><br/>

### 01. 웹 콘솔로 코드 실행하기
- 자바스크립트 코드 오류 검증, 실행 결과를 보여주는 도구
  1. 웹 콘솔(단일 탭마다 환경을 다르게 활용) / 브라우저 콘솔 (전체 브라우저에 적용되는 콘솔)
  2. 노드(Node) REPL
  <br/><br/> 

- 웹 콘솔의 용도
  1. 디버깅 (오류, 경고, 정보메세지)
  2. 대화형 쉘 프롬프트 (대화형 상호작용)
  <br/><br/>

- 브라우저 객체 모델 : 웹 브라우저와 관련된 객체의 집합을 의미
  * window
  * location
  * navigator
  * history
  * screen
  * document

```js
  documet.createElement('div') // <div></div>
  let elment_div = document.createElement('div') // undifined -> 브라우저 내부 메모리에 변수 div를 저장했기 때문.
  element_div.id = "div_name" ;
```
<br/><br/>

### 02. Node.js REPL로 코드 실행하기
- REPL(Read-Eval-Print-Loop) : 사용자가 입력한 결과를 바로 반환하는 대화형 Shell 환경을 의미 (간단한 코드 디버깅 & 라이브러리 테스트)
  * Read : 사용자의 명령어를 입력받으면 메모리에 JS 데이터 구조로 분석
  * Eval : 분석한 명령어를 내부 데이터 구조로 가져와 평가(평가란 해당 명령어를 실행하는 것을 의미)
  * Print : Eval에 의해 얻어진 결과를 받아서 사용자에게 출력(Print)
  * Loop : Print까지 완료된 다음, 다시 Read 상태로 돌아가는 환경이 반복(Loop) / "ctrl(cmd) + c"를 입력하면 루프 종료.
- Mac (터미널), Window (명령 프롬프트 - node.js가 설치된 환경일 때) 열기
- 해당 창에서 `node`를 입력하면 Node REPL 환경이 실행 된다.
- '>'로 시작하는 프롬프트에서 원하는 자바스크립트 코드를 입력할 수 있다. 
```zsh
node
>
```
```js
1 + 12 // 13
x = 5
var foo = 'hello'
console.log(foo); // hello
```
<br/><br/>

### 03. VS Code로 프로그래밍 하기 1
```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>자바스크립트 200제</title>
  </head>  
  <body>
    <script type="text/javascript" src="./003.js"></script>
  </body> 
</html>
```
```js
console.log('Visual Studio Code로 코드 실행해보기 1')
var a = 5;
var b = 2;
console.log(a + b);
```
- VS Code -> Open with Live Server를 통해 해당 파일이 함께 실행. 브라우저에서 콘솔을 열고 실행 결과를 확인 할 수 있다. 

<br/><br/>

### 04. VS Code로 프로그래밍 하기 2
- VS Code에서 <strong style="color:coral;">Code Runner</strong>라는 확장 플러그인 설치 (Java, C, C++, JavaScript, Python 등) 40여 개의 언어를 지원하는 플러그인
- <strong style="color: coral;">Code Runner</strong> 플러그인은 쉘 환경에서 각 언어에 맞는 명령어를 사용하여 실행, 따라서 JS뿐만 아니라 Node.js 코드에서도 활용 가능
```JS
console.log('Visual Studio Code로 코드 실행해보기 2');
var a = 5;
var b = 2;
console.log(a + b)
```
- 파일 위치에서 마우스 우클릭을 통해 <strong style="color: coral;">Run Code</strong>를 클릭하면, 실행과 동시에 하단부에 출력창이 나타난다. 

<br/><br/>

### 05. 값(Value)과 변수(variable) 이해하기
- 컴퓨터의 모든 데이터('bit'(2진수)로 구성) -> 프로그래밍 -> Value(값)
```js
foo = 'bar' // 임시적 선언
```
- 변수(variable) : 값을 넣어 놓는 공간. (별도의 키워드 없이 변수 할당 => 임시적 선언(권장X))
- 키워드를 사용하여 변수를 선언하는 것을 권장 -> 변수가 선언되는 범위(Scope) 때문
```js
let name = 'Peter',
    number = 200,
    isTrue = true
    nothing = null,
    empty = undefined,
    list = [],
    ref = {},
    func = function(){}
```
- 
  * <strong>선언 키워드</strong> : JS는 다른 커파일 언어와 달리 값을 변수로 저장할 때 어떤 유형(type)인지 명시하지 않아도 된다. 일관된 let 키워드를 맨 앞에 작성하여 변수를 선언한다. 프로그래밍할 때 값의 유형(type)을 일일이 명시하지 않으면, 런타임 시 변수의 값에 의해 동적으로 유형이 결정된다. -> <strong style="color: coral;">동적바인딩(Dynamic Binding)</strong>
  * <strong>변수명</strong> : 어떤 변수명으로 할지 정하는 것은 재량이지만, 반드시 피해야할 변수명이 있다. -> <strong style="color: coral;">키워드(Keyword)</strong>
  ```
  JS 키워드(Keyword) 종류

  break case catch class const continue debugger default delete do else export extends finally for function if import in instance of let new return supper switch this throw try type of var void while with yield
  ```
  * <strong>등호(=)</strong> : 등호를 사이에 두고 왼쪽에 변수명과 오른쪽에 값을 작성한다. 변수명이 정의된 변수 메모리에 값을 대입한다는 의미.
  * <strong>값</strong> : 자바스크립트에서 변수에 넣을 수 있는 값은 다양하다. 간단다헤는 단일 자료형의 값부터 표현식, 함수까지 값으로 대입될 수 있다.

<br/><br/> 

### 06. JS 문장 배우기
- JS 코드를 구성하는 가장 작은 기본 단위는 <strong style="color: coral;">값, 변수, 연산자, 키워드</strong>
- JS 구문 패턴을 살펴보면 <strong style="color: coral;">표현식(Expressions)</strong>과 <strong style="color: coral;">명령문(Statements)</strong> 두 종류로 나눌 수 있습니다.
  * <strong>표현식(Expressions)</strong>은 값을 생성한다. <br/>
  연산자를 통해 값을 생성하거나, 변수 또는 인자로 값을 넣을 때 표현식을 사용한다.
  ```js
  (3 + 12) / 5
  declaredVariable
  greeting('Hello')
  ```
  * <strong>명령문(Statements)</strong>은 일종의 행동 또는 행위를 수행하게 하는 코드. <br/>
  JS의 명령문은 if, if-else, for, switch 등이 있다.
  ```js
  if (true) {
    
  }
  ```
  * 명령문 대신해서 표현식이 쓰여질 수 있다.(표현식 명령문) <br/>
    표현식 대신에 명령문을 쓸 수는 없다. (값을 의도한 곳에 명령문을 작성할 수 없기 때문.)
  ```js
  function greeting() {
    "hello"
    "Chole" + 3
    greeting()
  }
  // 함수 몸통부(block)에는 일반적으로 명령문을 작성한다. 명령문 대신 표현식을 사용할 수 있다. 

  greeting( if(true) { console.log("It is not acceptable") }) 
  // 오류 발생. 인자에는 값이 들어가야 한다. (표현식. 명령문이 들어갈 수 없다.)
  ```
<br/><br/>

### 07. 주석 처리하기
- <strong>주석</strong> : 코드 결과를 실행하지 않는 문장.
```js
// x 변수에 "a" 값을 할당하여 선언한다.
let x = "a"
console.log(x); // 변수 x를 console.log로 출력한다.

/*
  x = "b";
  console.log(x);
*/
```
<br/><br/>

### 08. 자료형 이해하기
- 프로그래밍 언어는 값을 특정 유형(Type)으로 분류한다. <br/>
  특정 유형을 다른 말로 <strong>자료형</strong> 또는 <strong>타입(type)</strong>이라고 한다.
- 프로그래밍 언어는 <strong style='color: coral;'>타입의 일관된 속성에 따라 데이터 값을 구분</strong>하게 된다.
```js
  let x = 5,  // 숫자형(Number)
      y = 'five', // 문자형(String)
      isTrue = true,  // 불린형(Boolean)
      empty = 'null', // null
      nothing, // undefined
      sym = Symbol('me') // Symbol

  let item = {
    price : 5000,
    count : 10
  } // 객체(Object)

  let friuts = ['apple', 'orange', 'kiwi'] // 배열(Array)
  
  let addFruit = funciton (fruit) {
    fruit.push(friut);
  } // 함수(function)
  
  addFruit('wartermelon')
  console.log(fruits)
```
- JS는 크게 2가지 타입으로 구분한다. 
  1. <strong>원시 타입 (Primitive Data Type)</strong>
  - 고정된 크기로 저장. 해당 변수가 직접 값을 보관. 고정된 공간에 보관된 원시 타입의 값은 변경이 불가능한 값. <strong>불변값(Immutable Value)</strong>
    * <strong style="color: coral">숫자형(Number)</strong><br/>
      정수, 실수 등 여러 종류로 구분하지만 JS에서는 숫자형 하나로 포괄한다.<br/>
      숫자형끼리 연산이 가능하다.
    * <strong style="color: coral">문자형(String)</strong><br/>
      '',""를 양끝에 두고 그 안에 한글자 이상의 문자, 기호 또는 숫자가 있는 형태
    * <strong style="color: coral">불린형(Boolean)</strong><br/>
      true, false 두가지 값을 가진다.
    * <strong style="color: coral">심볼형(Symbol)</strong><br/>
      ES6부터 추가된 원시 자료형. 다른 원시형과 다르게 유일하게 변경 불가능한 자료형으로, 참조형(object)의 키(key)로도 사용가능
    * <strong style="color: coral">null</strong>과 <strong style="color: coral">undefined</strong><br/>
      null은 빈 값을 의미하고, undefined는 존재하지 않는 값을 의미.
      <br/><br/>
  
  2. <strong>참조 타입 (Reference Data Type)</strong>
    - 참조 타입은 원시 타입과 달리 변수에 고정된 크기를 저장하지 않고, 값의 메모리 주소를 참조한다.
    - 객체는 속성들(Properties)의 집합을 의미하며, 집합 내부에는 순서도 크기도 고정되어 있지 않다.
    - 이러한 고정되지 않은 값을 변수에 할당하려면 직접 해당 값을 저장할 수 없으나 참조하는 것은 가능하다.<br/>
    따라서 <strong style="color: coral">값의 메모리 주소를 변수에 할당하여 값을 참조한다.</strong>
    - <strong style="color: coral">주소</strong>는 변수의 값을 불러오려면 저장되어 있는 메모리의 주소를 찾아가서 값을 가져오는 것인데 이때 메모리 주소를 말한다. 
      * <strong style="color: coral">객체</strong>는 {} 안에 키:값 쌍으로 이루어진 속성들의 모음이다. <br/>
      여기서 <strong style="color: coral">키는 반드시 문자 자료형이어야 하고</strong>, 이 속성 키를 통해 해당 속성에 매핑된 값에 접근할 수 있다.
      * <strong>Global Object 객체</strong>는 모든 객체의 부모가 되는 객체. <br/>
      이를 부모삼아 함수(Function), 배열(Array), 원시 자료형을 객체로 감싼 새로운 형태의 객체(String, Number, Boolean)와 특수 연산에 특화된 내장객체(Math, JSON, RegEx) 그리고 Iterable과 Collection 특성의 객체(Map, Set, WeakMap, WeakSet)등의 <strong>표준 내장 객체</strong>가 있다.

<br/><br/>

### 09. 콘솔로 자료형 출력하기
- <strong>console.log()</strong>
```js
  let str = 'JavaScript',
      num = 200,
      arr = [1, 2, 3, 4, 5],
      obj = {a: 1, b: 2, c: 3}

  console.log(str) // JavaScript
  console.log(num)  // 200
  console.log(arr)  // [1, 2, 3, 4, 5]
  console.log(obj)  // {a: 1, b: 2, c: 3}

  console.debug('log와 동일한 로그 메시지를 출력한다.')
  console.error('에러 메시지를 출력한다.')
  console.info('정보성 메시지를 출력한다.')
  console.warn('경고성 메시지를 출력한다.')
```
- debug(디버그-로그), error(에러), info(정보), warn(경고) 메소드로 메시지의 레벨을 설정하면 브라우저 웹 콘솔에서 원하는 레벨의 메시지 들만 필터링 검색하여 출력 결과를 볼 수 있다.<br/>
또한 서버 로그를 파일로 저장할 수 있는데, 이때에도 console 메소드를 활용하여 원하는 레벨 이상의 로그만 출력하도록 설정할 수 있다. 

<br/><br/>

### 10. 조건문 배우기 -if
- 어떤 조건이 참인지 거짓인지, 조건문에 따라 특정 코드릴 실행하게 만들 수도, 실행하지 못하게 만들 수도 있다. 
- JS의 조건문에는 대표적으로 <strong style="color: coral;">if</strong>, <strong style="color: coral;">switch</strong>가 있다.
```js
if (표현식) {
  명령문
}
```
- if 조건문은 소괄호()로 둘러싼 형태를 가진다. 이때 표현식에는 <strong style="color:coral">의사결정을 할 수 있는 조건문</strong>을 작성하면 된다. 이 조건문의 결과값은 항상 불린형 값으로 반환되어야 하며, if 조건문 결과없이 불린형 true인 경우에만 다음 명령문이 실행된다. 
```js
let result = true
if (result) console.log('result가 참 입니다.') // result가 참입니다.
if (!result) console. log('실행되지 않습니다.')
if (result) {
  console.log('result의 결과')  // result의 결과
  console.log('>> 참 입니다.')  // >> 참 입니다.
}
```
- if() 다음의 명령문이 한 줄 이상인 경우에는 중괄호{}를 통해 블록을 잡을 수 있습니다.

<br/><br/>

### 11. 조건문 배우기 - if, else if, else 
- else if와 else는 if의 결과값이 false 일 때 추가 실행되는 조건문.
- else if는 if 조건문 외에 추가적으로 조건식을 추가하고 싶을 때, if 조건문 뒤에 덧붙여 사용한다. 
- ==는 동등 연산자. ==를 가운데 두고 왼쪽과 오른쪽 값을 비교하여 나온 결과값을 반환.
```js
  let number = 2;
  if (number == 1) {
    console.log('number는 1입니다.')
  } else if (number == 2) {
    console.log('number는 2입니다.')
  } else if (number == 3) {
    console.log('number는 3입니다.')
  } else {
    console.log('number는 1,2,3 중 해당되는 것이 없습니다.')
  }
  // number는 2입니다.
```
<br/><br/>

### 12. 조건문 배우기 - switch
```js
switch(표현식) {
  case 값1:
    명령문1
    break
  case 값2:
    명령문2
    break
  default:
    명령문3
}
```
- if 조건문은 여러 조건문들이 중첩되어 복잡하게 보일 수 있는데, 경우에 따라 switch를 사용하면 정돈된 코드를 만들 수 있다.
- switch의 표현식은 case의 값과 일치 여부를 확인하며, 이때 일치 연산자(===)를 사용한다.<br/>
일치 연산자(===)는 값과 자료형을 모두 비교하고, 결과값으로 true 또는 false를 반환한다. (엄격한 연산자)
- 여러 case문이 있는 경우, 위에서부터 순차적으로 일치한 값이 나올 때까지 case값을 확인하며 내려간다. 그리고 case값이 일치하면 해당 명령문을 실행한다. <br/>
break는 그 다음의 코드들을 더이상 실행하지 않고 switch 조건문을 끝내는 역할을 수행한다. <br/>
<strong style="color: coral;">만일 일차하는 case 값이 없는 경우 마지막 default로 선언된 명령문이 실행된다.</strong><br/>
default로 선언된 것은 명령문만 들어갈 수 있다. (값이 필요없다.)

```js
  let subject = '자바스크립트'
  switch (subject) {
    case 'C언어' :
      console.log('초보자를 위한 C++ 200제')
      break
    case '자바스크립트' :
      console.log('초보자를 위한 자바스크립트 200제')
      break
    case '파이썬' :
      console.log('초보자를 위한 파이썬 200제')
      break
    default : 
      console.log('이젠 초보자가 아닙니다.')
      break;
  }
  // 초보자를 위한 자바스크립트 200제
``` 
<br/><br/>

### 13. 반복문 배우기 - for
- <strong>for 반복문</strong>은 특정 코드를 반복하는 흐름을 제어한다. 
- 어떤 지점으로 다시 돌아가려 하고, 그 지점부터 다시 반복하여 실행하기를 원할 때 유용하게 사용할 수 있다.
- 반복문을 통해 언제부터 어디까지 실행할지, 그리고 몇 번을 반복할지도 설정할 수 있다. 

```js
  for(초기값; 조건식; 어떤 간격으로) {
    실행할 문장
  }
```
- 소괄호()로 둘러싼 부분에는 "반복문을 어떻게 실행할지"에 대한 내용을 작성. <br/>
이때, 정해진 규칙이 존재, 규칙은 세미콜론;으로 구분되며, 첫 번째 <strong>초기값</strong>, 두번째는 <strong>언제까지 반복할지 정하는 조건식</strong>, 세번째는 <strong>어떤 간격으로 값이 변화하는지</strong> 작성.
- 중괄호{}로 둘러싼 부분에는 <strong>실행할 문장</strong>을 작성

```js
  for (let i = 0; i < 10; i++>) {
    console.log(i + '번째 반복 문장 입니다.')
  }

  /**
   * 0번째 반복 문장 입니다.
   * 1번째 반복 문장 입니다.
   * 2번째 반복 문장 입니다.
   * 3번째 반복 문장 입니다.
   * 4번째 반복 문장 입니다.
   * 5번째 반복 문장 입니다.
   * 6번째 반복 문장 입니다.
   * 7번째 반복 문장 입니다.
   * 8번째 반복 문장 입니다.
   * 9번째 반복 문장 입니다.
  */
```

```js
let hometown = [
  {name: '남준', place: '일산', city: '고양'},
  {name: '진', place: '과천'},
  {name: '호석', place: '광주', city: '전라도'},
  {name: '지민', place: '부산', city: '경상도'},
];

for (let i = 0; i < hometown.length; i++) {
  let h = hometown[i];
  if (!h || !h.city) continue;

  console.log( i + ' 번째 실행입니다.');

  if (h.name === '호석') {
    console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.')
    break
  }
}
/**
 * 0 번째 실행입니다.
 * 2 번째 실행입니다.
 * 호석의 고향은 전라도 광주 입니다.
*/
```
- for 문에는 break와 continue를 통해 반복문의 흐름을 제어할 수 있다. 
  * <strong>continue</strong>는 지시자가 놓인 지점 다음의 문장들은 무시되고 다음 반복으로 넘어가게 한다. <br/>
  (바로 다음 문장은 무시되고 그 다음 문장으로 넘어간다.)
  * <strong>break</strong>는 break가 있는 지점까지만 실행되고 반복문을 종료한다. 

<br/><br/>

### 14. 반목문 배우기 - for in
- <strong>for-in 반복문</strong>는 for 키워드를 사용한다. <br/>
단, 순회 조건과 내부 요소에 접근하는 방법에 차이가 있다. <br/>
for-in 반복문은 <strong>in</strong> 키워드를 사용한다.<br/>
in 키워드를 사이에 두고 <strong style="color: coral">오른쪽에는 반복할 대상 변수</strong>를, <strong style="color: coral">왼쪽에는 속성명</strong>을 작성한다.

```js
  for (속성명 in 반복할 대상) {

  }
```
- 반복문을 통해 내부 요소를 하나씩 순회할 때마다, 각 요소의 키(Key) 정보가 for in에서 정의한 속성명으로 선언과 동시에 할당된다.

```js
  let store = { 
    snack: 1000, 
    flower: 5000,
    beverage: 2000 
    }

  for (let item in store) {
    if (!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이 ' + store[item] + ' 입니다.')
  }

  /**
   * snack는 가격이 1000 입니다.
   * flower는 가격이 5000 입니다.
   * beverage는 가격이 2000 입니다. 
  */
```
- 해설
  * store 객체는 순환하는 for-in 반복문. <br/>
    변수 item은 store 객체의 요소를 접근하는 속성명이다. 
  * 매 반복마다 hasOwnProperty를 이용하여 store 객체에 item 키 정보가 있는지 확인, 없으면 continue를 통해 아래 코드는 실행하지 않고 다음 순서로 넘어간다.
  * for-in 반복문을 사용할 때는 <strong style="color: coral;">hasOwnProperty를 통해 객체 안에 속성이 있는지 한 번 더 확인하는 것을 권장</strong>한다. 
  * 정상적으로 접근한 요소에 대해 출력.
  * item에는 순회하며 접근한 각 요소의 속성명(키정보)이 순서대로 "snack", "flower", "beverage"가 할당된다.
  * 속성명을 통해 속성값을 가져올 수 있다. 

- JS는 객체 자료형 자체에 기본적으로 내장된 속성들이 있다. <br/>
  <strong>hasOwnProperty</strong> 속성도 이에 속하는 내장속성이다. <br/>
  내장 속성은 별도로 정의하지 않고도 언제든지 사용할 수 있다.
- for-in은 순회 가능한 객체의 요소들을 열거한다. <br/>
  단, 객체 속성 중에서 hasOwnProperty와 같은 내장 속성은 열거하지 않고, <br/>
  <strong style="color: coral;">처음에 사용자가 직접 정의한 속성값들에 대해서만 열거한다.</strong><br/>
  따라서 예제에서는 store 객체에 직접 정의한 3개의 속성에 대해서만 반복한 것을 알 수 있다. 

<br/><br/>

### 15. 반복문 배우기 - while
- <strong>while 반복문</strong>은 지시어 while로 시작.
- 소괄호() 안에 조건식이 들어가는데, 조건식의 결과값은 true 또는 false만 가능하다.
- 조건식이 true를 만족하는 경우에만 중괄호{}의 내용이 실행된다.
- 조건식이 false가 되면 더이상 반복 실행하지 않는다. 
- while 반복문에서도 break와 continue문을 사용할 수 있다. 

```js
  while (조건식) {
    반복하게 될 문장
  }
```

- <strong>do while 반복문</strong>은 맨 앞에 위치한 지시어 do의 사전적 의미 그대로,<br/>
<strong style="color: coral;">처음은 조건 결과와 상관없이 무조건 문장을 실행(do)</strong>한다.<br/>
그리고 조건식의 결과값을 확인하고 다음의 흐름은 이전 while과 동일하다.

```js
  do {
    반복하게 될 문장
  } while (조건식)
```

```js
  let hometown = [
    {name: '진', city: '과천'}
    {name: '남준', place: '일산', city: '고양'}
    {name: '호석', place: '광주', city: '전라도'}
    {name: '지민', place: '부산', city: '경상도'}
  ]

  let isHometown = function(h, name) {
    console.log('함수가 실행되었습니다. ${h..city} 도시에서 ${name} 을 찾습니다.')

    if (h.name === name) {
      console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`)
      return true
    }
    return false
  }

  let h;

  while (h = hometown.shift()) {
    if (!h.name || !h.place || !h.city) continue

    let result = isHometown(h, '호석')
    if (result) break
  }

  let i = 0,
      names = ['남준', '정국', '윤기', '호섭'],
      cities = ['경기', '부산', '대구', '광주']

  do {
    hometown[i] = {name: names[i], city: cities[i]}
    i++
  } while (i < 4)

  console.log(hometown)
  
  /**
   * 함수가 실행되었습니다. 고양 도시에서 호석을 찾습니다.
   * 함수가 실행되었습니다. 전라도 도시에서 호석을 찾습니다.
   * 호석의 고향은 전라도 광주 입니다.
   * [ {name: '남준', city: '경기'},
   *   {name: '정국', city: '부산'},
   *   {name: '윤기', city: '대구'},
   *   {name: '호섭', city: '광주'},]
  */
```
- 해설
  * 변수 hometown을 선언, 변수에는 객체 자료형 요소가 4개 들어 있는 배열을 할당
  * 인자값을 h와 name을 받는 함수 isHometown을 선언, 객체인 h의 name과 인자로 받은 name이 다른 경우, false를 반환하며 함수를 종료 시킨다. <br/>
    값이 동이랗면 console.log를 출력하고 true를 반환한다. 
  * shift()는 배열의 앞에서부터 값을 하나씩 빼내오는 함수.<br/>
    예를 들어 [1,2] 배열에 shift()가 실행되어 1이 방출되면, 해당 배열은 [2]가 된다.
  * h 변수에 hometown.shift()로 반환된 값을 할당하는 것과 동시에 할당된 값을 확인한다. hometown의 요소는 객체로 채워져 있어 값이 유효한 경우 true, 유효하지 않으면 false를 반환하고 이를 통해 반복문을 실행한다. 
  * 변수 h에 할당된 객체의 name, place, city 속성이 모두 있는지 확인,
    <br/>하나라도 없는 경우 continue문을 통해 반복문의 다음 순서로 넘어간다.<br/>
    place 속성이 없는 {name: '진', city: '과천'}인 경우 이 조건식을 충족하여 continue가 실행되어, 아래 문장들은 실행되지 않은 채 다음으로 넘어가게 된다.
  * isHometown 함수에 h 변수와 '호석' 값을 넣어 결과를 반환받는다.
  * result 값이 true면 break문을 통해 반복문을 종료시킨다. <br/>
    이전 함수 설명을 미루어보아 {name: '호석', place: '광주', city: '전라도'} 요소일 때 true임을 알 수 있다. 따라서 while 반복문은 배열 3번째 값까지만 실행된다. 
  * 빈 배열이 된 hometown을 다시 채울 변수를 준비한다. <br/>
    names 배열과 cities 배열 그리고 각 배열의 인덱스(순서)를 매칭해줄 i 변수에 초기값을 할당하여 선언한다.
  * do-while 반복문의 지시자를 작성한다.
  * hometown 배열 값에 인덱스 0부터 객체 값을 할당한다. <br/>
    이때, names, cities 배열 또한 동일한 인덱스에서 값을 가져와 넣는다. <br/>
    예를 들어, i가 1이면 name은 '정국', city는 '부산'이 되어 hometown[1]에는 {name: '정국', city: '부산'}이 할당된다.
  * i 변수값에 +1을 더한다.
  * do-while의 조건식으로 i 변수값이 4보다 작은 경우에만 반복문을 실행시킨다.