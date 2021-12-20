# 섹션1. 과정 소개  
<br>

## 1. <b style="color: #458fed">클린 코드에 대해 고민하기</b>
* 타인의 정의한 답을 의심한다. -> 맹목적인 믿음 지양
* 배움에 열린 태도를 가진다. -> 디자인 패턴, 구조, 라이브러리, 설계를 나만의 프레임에 갖혀선 안된다. 
* 직접 생각하고 또 고민한다.
* 클린 코드가 무엇인지를 자바스크립트를 통해 학습한다.
* 흔히 알려진 자바스크립트 코드 스타일에 대한 견해를 탐구한다. <br>
-> 자바스크립트 코드 스타일 : 에어비앤비, 구글, ECMA 스크립트 표준, Prettier, ESLint, JSHint, Lint.... 이러한 것들에 대해 왜 패턴이 생겼고, 왜 주의를 해야 했을까?
<br><br>

## 2.<b style="color: #458fed"> JS 특성 파악하기</b>
* JS는 역사적으로 굉장히 변화를 많이 겪은 언어. 
* 어느정도 특성과, 맥락을 파악 -> 향후 단 번에 이해할 수 있는 배경지식을 가질 수 있음
* 타입(type)이 동적으로 형변환되는 자연스러운 변화 즉, <b style="color: coral">몽키 패치</b><br>
-> 런타임 중인 프로그램의 내용이 변경되는 행동을 의미한다. (<b style="color: coral">안티 패턴</b>)
* 유사성
  - 문법 -> 자바(Java)
  - 문자열, 배열, 정규표현식 -> 펄
  - 함수 -> 오크
  - 클로저, 스코프환경 -> 스키마
  - 프로토타입 -> 셀프
  - 이벤트 -> 하이퍼토크
<br><br>

### <b style="color: orange">프론트엔드 개발자의 실수 줄이기</b>
* 자바스크립트는 원래 브라우저 위에서 동작하는 언어 
* Node.js가 등장하면서 부터 굉장히 많은 변화가 생김.
* Node.js -> 크롬 V8 엔진으로 빌드된 자바스크립트 실행환경이다.
* 근데 요즘은 express라는 프레임워크를 사용을 해서 만드는 것 조처 NodeJS 서버 만들기 과정의로 강의가 나오다 보니, NodeJS 자체를 그저 자바스크립트 서버라고 생각하는 경우가 있는데, 그것보다는 크롬 V8 엔진의 자바스크립트 런타임이다.
* NodeJS가 생기고 나서 JS는 폭발적인 성장을 하게 되고, 많은 곳에서 사용을 하게 된다. 
* 그 예로 <b style="color: coral">Electron</b>이 사용된 곳들을 보면 <b style="color: violet">VSCode, Facebook Messenger, Twitch, Microsoft Teams, InVision...</b> (<b>Electron은 JS로 데스크탑 애플리케이션을 개발할 수 있는 프레임 워크</b>)
* 이렇게 <b style="color: coral">JS는 어디에서나 쓸 수 있는 언어</b>여서, 브라우저를 초월해서 다양한 곳에서 작성되는 언어이기 때문에, <b style="color: coral">실수가 많은 곳에서 나올 수 있는 환경</b>이다. (클린코드가 중요한 이유는 바로 여기에 있다.)
* 대표적으로 야놀자 -> 모바일 네이티브 앱처럼 보이지만, 웹이다. <br>
  웹으로 만들어진 앱인데, 결국 웹뷰를 통해서 네이티브 앱에서 처럼 돌아가는 것이다. <br>
  이러한 모바일 퍼스트 웹 앱에서 동작되는 JS이기 때문에, 결국은 JS가 어디에서나 조재하고, 또 어디에서도 작동이 되는구나 알 수가 있다. 
<br><br>

## 3. <b style="color: #458fed">사례를 통해 파악하기</b>
* 상황에 따라 코드가 다를 수 있다. 

## 4. <b style="color: #458fed">좋은 코드 작성을 위한 의식적인 수련</b>
* 넥스트스텝 -> 피드백 받을 수 있는 환경 
<br><br>

---
# 섹션2. 변수 다루기

## 5. <b style="color: #458fed">var를 지양하자</b>
* ECMA 2015 이전에 변수 설정하기 위해서 필요했던 var 예약어
* let & const가 생긴 후로는 var 사용을 지양
* 변수
  - var : 함수 스코프
  - <b style="color:coral">let & const : 블록 단위 스코프, TDZ(Temporal Dead Zone)</b> -> 안전하게 코드를 작성할 수 있다.

```js
  var name = '이름'
  var name = '이름2'
  var name = '이름3'
  var name = '이름3'
  console.log(name)   // 이름3 -> 가장 마지막에 할당된 변수의 값이 나온다. 
  /**
   * 값은 다른데 변수명은 일치 선언이 가능하다.
   * 심지어 값이 똑같아도 아무런 문제가 나타나지 않는다.  
  */
```
<br>

```js
  console.log(name) // undefined

  var name = '이름3'
  /**
   * 편하게 재할당까지 할 수 있고 재할당을 넘어서 재선언(중복선언)까지 계속 할 수 있다.
   * 코드가 1000줄을 넘어 10000줄까지 이어진다고 했을때, 이러한 내용이 계속된다면 얼마나 헷갈리고 어디서부터 꼬이게 된 건지 찾을 수 있을까?
  */
```
<br>

```js
  let name = '이름3'
  let name = '이름3'
  let name = '이름3'

  /**
   * SyntaxError : Identifier 'name' has already been decleared (에러발생)
   * 이미 선언했기 때문에 또 한 번 사용할 수가 없다.
  */
```
<br>

```js
  const name = '이름3'
  const name = '이름3'
  const name = '이름3'

  /**
   * SyntaxError : Identifier 'name' has already been decleared (에러발생)
   * 이미 선언했기 때문에 또 한 번 사용할 수가 없다.
  */
```
* let과 const의 차이는 무엇이냐? <br>
  -> <b style="color: coral">재할당</b>의 차이<br>

```js
  let name;

  name = '이름'
  console.log(name) // 이름
  name = '이름2'
  console.log(name) // 이름2
  name = '이름3'
  console.log(name) // 이름3
  // let은 먼저 선언하고 언제든지 재할당할 수 있다.
```
<br>

```js
  const name = '이름'
  console.log(name) // 이름
  // const는 선언과 동시에 할당까지 해야 가능하다.
  // 변수를 한번 만들고 재할당 할 수가 없다.  
```
<br><br>

## 6. <b style="color: #458fed">function scope & block scope</b>
* 전역변수 사용을 지양해라.
<br>

```js
// ex 1.
var global = '전역'

if (global == '전역') {
  var global = '지역'

  console.log(global) // 지역
}

console.log(global) // 지역 -> 전역 공간에 있는 스코프까지 오염이 되었다. 
/**
 * 이렇게 오염된 이유는 바로 if문이기 때문, var는 함수 단위!
 * {} -> 함수가 아니기 때문에 블럭 단위 스코프로 바꾸지 않는 이상 불안한 요소를 가지고 있는 것.
*/
```
<br>

```js
// ex 2.
let global = '전역'

if (global == '전역') {
  let global = '지역'

  console.log(global) // 지역
}

console.log(global) // 전역
/**
 * {} -> 블럭 안에서는 지역 변수로서 역할을 블록 단위로 잘하고 있다.
 * 전역 공간에서는 그에 합당한 값을 보여주고 있다. 
*/
```
<br>

```js
// ex 3.
let global = '전역'

{
  let global = '지역'

  console.log(global) // 지역
}

console.log(global) // 전역
/**
 * if문이 아니더라도 {} 안에서 그 역할을 충실하게 하고 있다. 
*/
```
<br>

* let & const는 조금 더 안전하게 생각하고 코드를 작성할 수 있다.
* let & const라는 예약어를 통해 변수를 다루는게 굉장히 좋다.
* <b style="color: coral">let 보다도 const</b>를 사용하는게 더 좋다. 
* const를 사용하면 객체를 다루기가 더 힘들지 않나?? <br>
  -> 전혀 그렇지 않다. <b style="color: coral">재할당</b>이라는 키워드만 생각하면 된다. <br>
  -> JS는 아무래도 변수안에 많은 것을 담을 수 있다보니 헷갈릴 수가 있다. <br>
  ->
<br>

```js
// ex. 객체
  const person = { // 선언 + 할당
    name: 'lee',
    age: '30',
  }

  person = {name: 'jang', age: '50'}  // Assignment to constant variable.
  // 당연히 재할당은 금지가 되어있다.

  person.name = 'jang'
  person.age = '50'

  console.log(person) // {name : jang, age: '50'}
  /**
   * person을 재할당하지 않고 객체 내부의 값만 바꾼 것이기 때문에 이렇게 동작을 할 수가 있다. 
  */
```
<br>

```js
// ex. 배열
const person = [{
  name: 'lee',
  age: '30'
}]

person.push({
  name: 'jang',
  age: '50'
})

console.log(person) // [{name: 'lee', age: '30'}, {name: 'jang', age:'50'}]
```
<br>

* <b style="color: coral">const는 재할당만 금지된다라고 보면 된다.</b>
* 본연의 객체, 배열 같은 레퍼런스 객체들을 조작할 때는 이상이 없다.