# 섹션4. 경계 다루기

## 15.<b style="color: #458fed">min - max</b>

```js
/**
 * 경계 다루기 (min-max)
*/
  function genRandomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 상수
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 45;
  // const MIN_IN_NUMBER = 1;
  // const MAX_IN_NUMBER = 45;
  // const MIN_NUMBER_LIMIT = 1;
  // const MAX_NUMBER_LIMIT = 45;

  genRandomNumber(MIN_NUMBER, MAX_NUMBER);

```

```js
/**
 * 경계 다루기 (age)
 * 포함하는지 안하는지에 대한 경계
*/

  function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const MAX_AGE = 20

  function isAdult(age) {
    // 최소값, 최대값 (포함되는지 vs 안되는지 )
    // 이상, 초과 vs 이하, 미만
    if (age > 20) {

    }
  }
```
- 경계 다루기
  * 1. 최소값와 최대값을 다룬다.
  * 2. 최소값와 최대값 포함 여부를 결정해야 한다. (이상-초과 / 이하-미만)
  * 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다. 
<br><br>

## 16.<b style="color: #458fed">begin - end</b>
- 경계를 포함하지만 또 제외하는 경우가 있을 수 있다. 
- 시작은 동일한데 끝이 다른 경우
- 시작은 고정되어있는데, 끝은 포함되지 않는 경우
- <b>ex)</b>. airbnb에서의 <b style="color: coral">체크인(begin)과 체크아웃(end)</b>

```js
/**
 * begin - end
 * 경계를 포함하지만 제외하는 경우
*/

  function reservationDate(beginDate, endDate) {
    // ...some code
  }

  reservationDate('YYYY-MM-DD', 'YYYY-MM-DD')
```
<br><br>

## 17. <b style="color: #458fed">first - last</b>
- 순차적으로 계산을 처리하는 함수가 있다고 가정할 때, min - max가 어느정도 명시적으로 유효성이 있다.
- first 와 last는 비슷한 면이 있으면서도 다른 면이 있다.
- <b style="color: coral">연속성과 규칙성이 없는 경우</b>에 <b style="color: coral">first - last</b>를 고려할 수 있다.
- 양 끝점이 존재하나, 그 안에 있는 요소에 대한 규칙이나 연속성에 대해서 보장이 되지 않을 경우에 사용해볼 수 있다. 
- ex). <b style="color: coral">dom first child last child</b>
- 뭐든지 시작과 끝이 있다는 개념에 명시적으로 다가오는 경계를 다룰 수 있는 네이밍이 first와 last다라는 생각을 해볼 수 있다. 

```js
/**
 * fisrt - last
 * 포함된 양 끝을 의미한다.
 * 부터 ~~~ 까지
*/

  const students = ['포코', '존', '현석']

  function getStudents(first, last) {
    // ...some code
  }

  getStudents('포코', '현석')
```
<br><br>

## 18. <b style="color: #458fed">prefix - suffix</b>
- 접두사(prefix)와 접미사(suffix)
- ex) JS의 getter & setter  -> JS의 객체를 다룰때 사용
- ex) JS의 privateField
- ex) jQuery의 $ (prefix로 $를 사용)

```js
// JS의 클래스필드
// 과거의 JS에선 privateField를 표현하기 위해 언더바(_)를 사용했었다.
// 현재 JS에선 #으로 privateField를 나타낸다.

// 변경 전
  function FactoryFunction(name) {
    this._name = name;
  }

// 변경 후
  class FactoryFunction {
    #name = name;
  }
```
<br><br>

## 19. <b style="color: #458fed">매개변수의 순서가 경계다</b>
- 다양한 매개변수를 선언해놓고 인자로 넘길때 2개 정도는 시작과 끝이 있다고 가정하게 된다.
- 시작과 끝이 있기 때문에 역할에 대해서 어느정도 대립되는 관계나, 평등하면서 평행하는 관계나 뭔가 다양한 관계들을 함수 네이밍과 넘기는 인자들을 보면서 유추할 수 있다.
- 웬만한 인자는 2개를 넘지 않게 넘길 수 있도록 함수를 만들때 부터 매개변수를 2개가 넘지않도록 고정시켜주는 것이 좋다.
- 그런데 만약에 JS를 사용하는 입장에서 매개변수가 상당히 많아지면 어떻게 할 것인가?
  * 1. <b style="color: coral">arguments객체</b> 활용
  * 2. ES2015+ 부터 등장한 나머지 매개변수 -> <b style="color:coral">...someArg</b>
- 만들때가 아닌 <b style="color: coral">호출할 때</b> 함수의 네이밍과 인자의 순서의 연관성을 고려.
  * 1. 매개변수를 2개가 넘지 않도록 만든다.
  * 2. 규칙적이지 않는 매개변수가 들어온다? -> arguments, rest parameter 고려
  * 3. 매개변수를 객체에 담아서 넘긴다. 
  * 4. 이미 만든 함수가 있다. -> 랩핑하는 함수를 만든다.

```js
/**
 * 매개변수의 순서가 경계다
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.
*/

  // 4개의 매개변수 중 someArg3, someArg4만 많이 사용한다는 가정
  function someFunc(someArg1, someArg2, someArg3, someArg4) {

  }

  function getFunc(someArg1, someArg2) {
    someFunc(someArg1, someArg2)
  }

  // 최악의 경우 순서가 다를 경우가 있다면?
  function getFunc2(someArg1, someArg3) {
    someFunc(someArg1, undefined, someArg3)
    /**
     * 함수를 고칠 수 없다는 상황이라면
     * 함수를 또 호출하는 형태의 함수를 만든다. 
    */
  }

  // 애초에 객체로 만든다면 순서가 상관이 없다.
  function getFunc3( { someArg1, someArg2, someArg3, someArg4 } ) {
  }

  // 매개변수가 2개 일때 시작과 끝이 있다고 많이 가정한다.
  // genRandomNumver(1, 50);
  // getDates('2021-10-01', '2021-10-31');
  // genShuffleArray(1, 5)
```