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
<br><br>

## 7. <b style="color: #458fed">전역 공간 사용 최소화</b>
* 전역 공간이란?
  - <b>Window</b>와 <b>Global</b>
  - <b>브라우저 환경</b>에서 돌아가는 경우는 Window가 최상위
  - <b>NodeJs 환경</b>에서는 Global이 최상위
  - 최상위 공간이 전역 공간
<br>

* 전역 공간을 사용하게 되면 서로 다른 .js파일이어도 지정한 변수를 사용할 수 있게 된다.
* 만약 하나의 .js에는 헤더를, 다른 하나의 .js에는 바디를 만들고 싶으나 전역 공간을 사용하면 코드가 겹칠 수 있는 문제가 발생한다. 
* 파일을 나누면 스코프(코드 구역)도 나뉘게 되는가? -> <b>NO</b>, 그렇지 않다.
* 전역 공간에서 사용하면 안좋은 var, setTimeout() ....
* 변수를 만들때 내장함수와 이름이 같게 만들면 안된다. 
* 함수가 실행되기 이전에 전역으로 같은 이름의 변수가 설정되어서 함수의 개입이 일어나지 않기 때문.
* JS로 코드를 작성하는 단계에서는 Web Api의 개입이 없기 때문에 오류가 나타나지 않는다. -> 굉장히 큰 문제로 나타날 수 있다.  

```js
const array = [10, 20, 30]

for (var index = 0; index < array.length; index++) {
  const element = array[index]
}

console.dir(array)
console.dir(window)
```

* for문은 함수 Scope가 아니기 때문에, var는 전역 공간에서도 볼 수 있다. 
* 즉시실행함수, 모듈, 클로저(Closure), const, let -> 전역공간사용을 최소화하기 위해 사용하는 것들.
* 전역공간은 어디서나 접근이 가능하기 때문에 최소화 시키는것이 바람직하다. 
* 사람이 생각하기엔 분리가 되어있지만, 런타임 환경에서는 분리가 되어있지 않기 때문. (스코프 분리 위험)
* 
  1. 전역 변수를 애초에 만들지 않는 것이 중요 
  2. 그리고 지역 변수만을 사용하는 것이 중요 
  3. window, global에 접근하여 조작하지 않는다. 
  4. const & let으로만 변경해도 많은 부분이 해소될 수 있다. 
  5. IIFE(즉시실행함수), 모듈, 클로저(Closure) -> 스코프(Scope)를 나누는 방법에 대해 고민할 필요가 있다.
<br><br> 

## 8. <b style="color: #458fed">임시 변수 제거하기</b>
* 임시 변수 -> 어느 특정 공간 Scope 안에서 전역변수처럼 활용되는 변수
* 임시 객체도 함수가 커지면 전역 공간이나 다름 없는 상황이 발생
* 그렇게 되면 임시 객체 역시 매우 위험한 요소가 된다. 
* 함수를 잘게 쪼갠다면 임시 변수도 큰 문제는 없겠지만, 함수가 커질 수록 전역 변수와 유사하게 되어 위험해진다. 
<br>

```js
// 1차
  function getElements() {
    const result = {} // 임시 객체

    result.title = document.querySelector('.title')
    result.text = document.querySelector('.text')
    result.value = document.querySelector('.value')

    return result
  }
```
<br>

```js
  // 2차
  function getElements() {
    const result = {
      title: document.querySelector('.title'),
      text: document.querySelector('.text'),
      value: document.querySelector('.value')
    }

    return result
  }
```
<br>

```js
  // 3차
  function getElements() {
    return {
      title: document.querySelector('.title'),
      text: document.querySelector('.text'),
      value: document.querySelector('.value')
    }
  }
```
* 임시 변수나 객체들을 과연 어떻게 CRUD(조작)할까? (접근해서 고치고 뜯고) 
* 함수를 가장 많이 쪼개는 것이 베스트
* 임시 변수나 임시 객체가 공간에 생기는 순간 이 변수나 객체에 접근해 CRUD(조작) 하고 싶다는 유혹에 빠질 수 있다. (접근해서 뭔가 만들고 넣고 지우고 반복)
* 결국 조작을 많이하고 반환만 하면 된다라고 생각하고 싶은 유혹에 빠지게 된다.
<br>

```js
  // 데이트 함수(유틸 함수 격)
  // 1차
  function getDateTime(targetDate) {
    let month = targetDate.getMonth()
    let day = targetDate.getDate()
    let hour = targetDate.Hours()

    month = month > 10 ? month : "0" + month
    day = day > 10 ? day : "0" + day
    hour = hour > 10 ? hour : "0" + hour

    return {
      month, day, hour
    }
  }
```
* 1차와 같이 했을 경우 추가적인 스펙, 기획적인 요소의 변경, 날짜에 대한 요구사항이 생겼을 때, 요구 사항을 위해서 2가지 경우를 생각해 볼 수 있다.
* 함수를 추가로 만드느냐? VS 함수를 유지 보수하며 수정
* 함수를 유지 보수하겠다고 생각하면 또 다른 문제들이 생길 수 있다.
* 이 함수를 10~100 곳에서 쓸 수도 있다. 
* let으로 변수를 삼았다는 것은 즉, 수정 & 재할당한다라는 약속을 의미할 수 있다. 
<br>

```js
  // 2차
  function getDateTime(targetDate) {
    const month = targetDate.getMonth()
    const day = targetDate.getDate()
    const hour = targetDate.Hours()
  
    return {
      month : month > 10 ? month : "0" + month, 
      day : day > 10 ? day : "0" + day,
      hour : hour > 10 ? hour : "0" + hour
    }
  }

  function getDateTime() {
    const currentDateTime = getDateTime(new Date())
  
    return {
      month : currentDateTime.month +  "분 전",
      day : currentDateDay.day + "분 전",
      hour : currentDateDay.hour + "분 전"
    }
  }
```
* 함수를 한번 더 추상화했기 때문에 재활용 할 수 있다. 
* 한 함수는 명확한 역할만 하면 되는 건데, 임시 변수라는 유혹에 빠지면 임시 변수만 계속 내부에서 조작하게 되기 때문이다.
* 함수를 추상화 한것을 가지고 계속해서 재활용 또는 로직을 변경하는 유지 보수를 통해 사용할 수 있게 된다. 
<br>

```js
  // 3차
  function getDateTime() {
    const currentDateTime = getDateTime(new Date())

    return {
      month : computedKrDate(currentDateTime.month) +  "분 전",
      day : computedKrDate(currentDateDay.day) + "분 전",
      hour : computedKrDate(currentDateDay.hour) + "분 전"
    }
  }
```
* 또 다른 함수가 내부에 존재하거나 생긴다면, 이런 식으로 하나 하나의 함수의 껍데기를 씌워나가고, 벗기고 하면서 추상화를 할 수 있게된다. 
<br>

```js
  function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1) + min)

    return randomNumber
  }
```
* 함수를 만들 때 다른 누군가가 함수 내부의 임시변수 속에서 유혹을 받지 못하도록 단 하나의 역할만 할 수 있는 그런 함수로 만들어 주는게 굉장히 좋다.
<br>

```js
// 처음 JS를 접하고 코드를 짜게 되면 이런 식으로 코드를 작성한다. 
  function getSomeValue(params) {
    let tempVal = ''

    for (let index = 0; index < array.length; index++>) {
      temp = array[index]
      temp += array[index]
      temp += array[index]
      temp += array[index]
    } // 지속적으로 임시 변수를 넣기도, 심지어 연산을 넣기도 한다.

    if (temp ??) {
      tempVal = '??' // 지속적으로 임시 변수에 무언가를 넣는다. 
    } else if (temp ??) {
      temp += ??
    }

    return temp
  }
```
* 위와 같은 코드는 혼란하고, 완전한 명령에 가까운 코드다.
* 하나의 임시변수가 함수가 동작하는 동안 여기서 바뀌고 저기서 바뀌고 반복문을 돌고, 또 분기문에서 바뀌고 심지어 연산도 하는데, 이러면 최종적으로 이 값이 무엇인지 예측하기가 어렵다.
* 임시 변수를 사용하지 않는 방법을 많이 고민하는 것이 좋다. 
* 후에 <b>배열 고차 함수</b>를 사용할 때 많이 필요
* 임시 변수를 제거해야하는 이유는 명령형으로 가득한 코드한 로직이 나오고, 어디서 어떻게 잘못되었는지 디버깅이 어렵게 되기 때문이다. 
* 타인이 추가적인 코드를 작성하고 싶은 유혹에 빠지게 하기 쉽다.
* 함수는 하나의 역할만 하게 해야 하는데, 임시 변수라는 키워드가 유혹하게 만들게 되면 코드의 유지보수가 어려워 진다.
* 임시 변수 제거 해결책
  1. <b style="color: coral">함수를 나누는 것</b> 
  2. 바로 <b style="color:coral">return</b> 반환하는 것 
  3. <b style="color:coral">고차 함수 사용</b> -> map(), filter(), reduce() 등
  4. <b style="color:coral">선언형 코드</b>로 바꿔보는 연습 (선언형 프로그래밍)
  <br><br>

## 9. <b style="color: #458fed">호이스팅 주의하기</b>

* 호이스팅 -> <b style="color: coral">선언과 할당이 분리된 것</b>을 뜻한다. 
* 런타임시(프로그램이 동작) 선언과 할당이 분리된다.
* 런타임시에 바로 선언을 최상단으로 끌어올려 준다.
* 코드를 작성할 때는 이 스코프는 이렇게 동작할 것이다라고 예상을 하는데, 런타임에서 동작할 때는 스코프가 예상대로 움직여주지 않는다.
* 그 현상 중에 하나가 바로 호이스팅이다.
* 호이스팅은 var로 선언한 변수가 초기화가 제대로 되어 있지 않았을 때 undefined로 최상단에 끌어올려줄 수 있는 것을 뜻한다. 
* 선언부만 최상단으로 옮기는 것을 얘기하는데 let & const를 사용하면 이런 현상을 잘 겪지 않겠지만, var에서 특히 이런 상황을 볼 수 있다. 
* 함수도 호이스팅이 되기 때문에 함수도 조심해야 하고, 좋은 방법은 함수 표현식을 사용하는 방법이다. 
<br>
  
```js
// 예제 원본
  var global = 0

  function outer() {
    console.log(global) // undefined -> 호이스팅이 동작한 사례, 선언과 할당이 분리된 경우 
    var global = 5

    function inner() {
      var global = 10

      console.log(global) // 10
    }

    inner()

    global = 1
    
    console.log(global) // 1
  }

  outer()
```
* var는 함수 스코프를 let & const는 블럭 스코프를 가지기 때문
<br>

```js
// 예제 설명
  var global = 0

  function outer() {
    var global;
    console.log(global) // undefined
    global = 5
  /**
   * 선언과 할당 부분이 메모리 공간을 선언하기 전에 미리 할당을 하기 때문에 발생
   * var 키워드로 선언 했을 경우 이렇게 위험한 결과를 초래할 수 있다. 
  */

    function inner() {
      var global = 10

      console.log(global) // 10
    }

    inner()

    global = 1
    
    console.log(global) // 1
  }

  outer() // undefined
```
<br>

```js
// 예제2 원본
  function duplicatedVar() {
    var a;

    console.log(a)  // undefined

    var a = 100

    console.log(a)  // 100
  }

  duplicatedVar() // undefined
```
* var는 중복 선언이 가능하고, 계속 만들어 낼 수 있기 때문에 중복 선언 해도 오류 없이 undefined값이 나온다. 
* 위는 선언만 했고 그 이후에 어떻게 중복선언해도 동작이 가능
* 런타임에 예측할 수 없는 동작들이 발생하는 언어 JS
<br>

```js
// 예제3 원본 - 변수 선언하고 그 변수에 함수를 추가적으로 할당
  var sum

  sum = function() {
    return 1 + 2
  }

  console.log(sum())  // 3
```
<br>

```js
// 예제3 변형 - 변수 선언, 이미 선언된 변수와 같은 이름의 함수 선언
  var sum

  function sum() {
    return 1 + 2
  }

  console.log(sum())  // 3
```
<br>

```js
// 예제3 변형 - 변수 선언, 이미 선언된 변수와 같은 이름의 함수 선언2
  var sum

  console.log(typeof sum)  // function
  /**
   * 왜 3번 라인에서 1번 라인의 변수를 찾지 않았을까?
   * 바로 함수도 호이스팅 되기 떄문!!
   * 결국 함수도 호이스팅이 되기 떄문에 JS가 어렵다고 느껴진다. (혼란)
   * 함수 선언문으로 또 한번 만들게 되면 변수를 덮어쓴다. 
  */

  function sum() {
    return 1 + 2
  }
```
<br>

```js
// 예제3 변형 - 변수 선언, 이미 선언된 변수와 같은 이름의 함수 선언3
  var sum

  console.log(sum())  // 11
  /**
   * 가장 마지막에 선언된 함수까지 포함되어 호이스팅 된다.
  */

  function sum() {
    return 1 + 2
  }

  function sum() {
    return 1 + 2 + 3
  }

  function sum() {
    return 1 + 2 + 3 + 5
  }
```
* 어떻게 하면 좋을까?
<br>

```js
// 예제3 변형 - 호이스팅을 벗어나는 방법

  var sum = 10

  console.log(sum())  // 10
  // 변수 선언 => 할당 => 초기화 완료 => 정확한 분리
  // 이제 함수 호이스팅이 아닌 최상단에 초기화 되어있는 변수가 나오게 된다.

  function sum() {
    return 1 + 2
  }

  function sum() {
    return 1 + 2 + 3
  }

  function sum() {
    return 1 + 2 + 3 + 5
  }
```
* 이러한 호이스팅이 프로그래밍에 안좋은 영향을 많이 준다.
* 보통 함수를 만들때 const를 사용 해서 만들고 함수를 할당하는 방식을 추천한다. 
<br>

```js
// 예제3 변형 - const 사용

  var sum = 10

  console.log(sum())  // Uncaught SyntaxError: Identifier 'sum' has already been declared

  /**
   * const를 사용한 덕분에 에러를 표기한다.
  */

  const sum = function() {
    return 1 + 2
  }
```
<br>

```js
// 예제3 변형 - const 사용
  const sum = function() {
    return 1 + 2
  }

  console.log(sum())  // 3
```
* 이것을 바로 <b style="color: coral">함수 표현식</b>이라고 한다. (선언문과는 다르다)
* 익명 함수를 하나 만들어 변수에 할당하는 것.
* 이것도 함수로 본연의 역할을 잘한다.
* 함수를 만들땐 함수 표현식으로 만드는 것을 추천한다. 
