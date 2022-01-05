# PART 3. 

### 60. 표준 내장 객체 이해하기
- <b style="color: coral">표준 내장 객체(Standard Built-in Object 또는 Global Object)</b> : 전역 스코프안에 있는 객체들을 참조하고 있어, 어떤 환경(브라우저, 서버)이라도 전역에서 사용가능하다.
- <b style="color: coral">몇몇 표준 내장 객체</b>는 객체임에도 불구하고 <b style="color: coral">함수처럼 호출 할 수 있다.</b><br>
    매개변수를 받고, 함수 몸통(중괄호부분)에 내장 함수 객체의 행위를 특징화 하는 코드들이 구현되어 있다.
- 이러한 형태를 <b style="color: coral">내장 함수 객체(Built-in Function Object)</b>
- <b style="color: coral">new</b> 지시자를 사용하여 함수 형태로 호출, 생성자(Constructor)를 생성한다.
- <b style="color: coral">표준 내장 객체</b> 내부에는 <b style="color: coral">속성</b>과 <b style="color: coral">메소드</b>가 정의되어 있다.

```js
const str = new String('자바스크립트')
const num = new Number(200)
const bool = new Boolean(true)
const date = new Date()
const map = new Map()
const set = new Set()

console.log(Math.PI)  //3.141592653589793
console.log(Date.parse('2019-01-01')  // 1546300800000
console.log(JSON.parse('{}')) // {}
```
- 해설
  * 1~6: 표준 내장 객체에 <b style="color: coral">new</b>를 이용하여 생성자를 만들고 변수에 선언한다.
  * 8~10: <b style="color: coral">어떤 객체는 선언없이</b> 객체의 <b style="color: coral">메소드</b>와 <b style="color: coral">속성</b>을 바로 가져다 사용할 수 있다.
<br><br>  
- 여기서 <b style="color: coral">표준 내장 객체</b> String, Number, Boolean이 원시 자료형의 문자형, 숫자형, 불린형과 어떻게 다른지 의문이 생긴다.

```js
const str1 = "자바스크립트 200제"
const str2 = new String("자바스크립트 200제")

console.log(typeof str1)  // string
console.log(typeof str2)  // object

console.log(str1 === "자바스크립트 200제")  // true
console.log(str2 === new String("자바스크립트 200제"))  // false

console.log(str1.valueOf()) // 자바스크립트 200제
console.log(str2.valueOf()) // 자바스크립트 200제
```
- <b style="color:coral">원시 자료형이 각 성격에 맞게 표준 내장 객체로 자동으로 래핑된다.</b>
- 즉, 문자열로 작성된 값이 String 객체로 래핑된다는 의미.
- 자료형을 확인하면 확연하게 다른 것으로 구분되지만, <br>
  원시 자료형 값이지만 표준 내장 객체로 래핑됨에 따라 내장 객체에서 제공하는 <br>
  메소드나 속성을 가져다 사용할 수 있다.
- 해설
  * 1~2: 동일한 문자열 "자바스크립트 200제"를 변수 str1와 str2에 대입한다. 단, str2는 String 객체로 선언한다.
  * 4~5: typeof는 변수에 할당된 값에 대한 자료형 정보를 문자열로 반환한다.<br>
    typeof를 활용하여 변수 str1과 str2의 자료형 정보를 확인해보면,<br>
    원시 자료형의 str1은 'string'(문자형)을 반환하는 반면, <br>
    str2은 'object'를 반환한다. <b style="color: coral">new</b> String으로 선언했기 때문에 문자형과 관련된 정보가 반환될 것 같지만, <b style="color: coral">String이란 이름의 객체</b>이기 때문에 object를 반환한 것이다. 
  * 7~8: 대입한 문자열 "자바스크립트 200제"를 각 변수와 일치하는지 확인한다.<br>
    <b style="color: coral">원시 자료형</b>으로 대입된 str1은 <b style="color: coral">값 자체가 할당</b>되어 있어서 true를 반환<br>
    그러나 <b style="color: coral">String 객체</b>로 대입된 str2는 <b style="color: coral">값이 아닌 주소값을 참조</b>하기 때문에 false
  * 10~11: str1과 str2 변수에 <b style="color: coral">valueOf</b> 메소드를 호출한다. <br>
    이 메소드는 <b style="color: coral">String 내장 객체에 정의된 메소드</b>로, 객체의 원시형 값, 즉 <b style="color: coral">문자열을 반환하는 메소드</b>다.<br>
    이를 통해 <b style="color: coral">원시 자료형</b>인 str1도 <b style="color: coral">String 내장 객체가 지원하는 메소드를 사용할 수 있다</b>는 것을 알 수 있다.
  <br><br>

- 표준 내장 객체
  
  표준 내장 객체 |  설명
  --|--
  Object | 다른 표준 내장 객체의 기본이 되는 일반 객체
  Number | 숫자형을 감싼 객체, 숫자형과 관련된 함수와 속성을 갖고 있다.
  String | 문자형을 감싼 객체, 문자형 조작, 특정 문자열을 찾고 추출하는 등의 메소드와 속성을 활용 할 수 있다.
  Array | 모든 배열은 Array.prototype을 상속받는다. Array 객체는 리스트처럼 배열 역할을 지니며, 배열 요소를 추가/삭제하거나, 배열 자체를 순회/변형하는 다양한 메소드와 속성을 지니고 있다.
  Math | 수리 연산을 하기 위한 속성과 메소드를 지닌 내장 객체, 다른 내장 객체와 달리 Math 객체는 new를 통해 인스턴스를 생성하지 않는다. static으로 정의된 속성과 메소드를 직접 호출해야 한다. 
  Date | 시간에 관련된 객체, 현재 시간을 비롯하여, 국제 표준시에 따른 시간 변환 계산도 할 수 있다.
  JSON | JavaScript Object Notation(JSON)을 의미한다. 이를 다른 자료형으로 변환하거나 다시 JSON으로 변환하는 등의 메소드를 제공하고 있다.
  RegExp | 정규표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미한다. 정규표현식을 적용 가능한 문자열 탐색, 비교, 대체 등의 문자열 처리 메소드들을 지원한다.
  <b style="color: coral">Map</b> | ES6부터 표준으로 추가된 Map 객체는 <b style="color:coral">키 : 값 데이터 구조를 지닌 데이터 집합체(Collection)</b>. <b style="color: coral">키의 중복성을 허용하지 않으며 관련된 속성, 메소드들을 갖고 있다</b>. 또한 <b style="color:coral">Iterator</b>로 <b style="color: coral">순환된다는 점, 값의 중복성을 허용하지 않는 차이점</b>이 있다.
  <b style="color:coral">Set</b> | ES6부터 표준으로 추가된 객체형으로, <b style="color:coral">오직 값으로 이루어진 데이터 집합체</b>. 그래서 언뜻 배열과 비슷하게 느껴질 수도 있으나 내부 속성, 메소드의 구성이 다르고, 또한 <b style="color:coral">Iterator로 순회된다는 점, 값의 중복성을 허용하지 않는 차이점이 있다</b>.
<br><br>

### 61. 자료형 확인하기 (typeof, instanceof)

```js
const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = funciton(){};
const arr = [10, 200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string'); // true
console.log(typeof strObj === 'object');  // true
console.log(typeof num === 'number'); // true
console.log(typeof numObj === 'object');  // true
console.log(typeof bool === 'boolean'); // true
console.log(typeof boolObj === 'object'); // true
console.log(typeof func === 'function');  // true
console.log(typeof arr === 'object'); // true
console.log(typeof obj === 'object'); // true
console.log(typeof empty === 'object'); // true
console.log(typeof notCalled === 'undefined');  // 
```
- 해설
  * 1~11: 자료형을 확인할 변수들을 선언한다. 이때 다양한 자료형을 확인해보기 위해 원시 자료형과 내장 객체값들을 변수에 대입한다.
  * 13~23: typeof를 통해 자료형을 확인하면, 원시 자료형 값 중 문자형(string), 숫자형(number), 불린형(boolean), undefined는 예상한 그대로 출력된다. <br>
  반대로 내장 객체인 String, Number, Bollean, Function과 원시 자료형의 null일 때는 "Object"문자열을 반환한다.

- 이를 통해 알 수 있듯 <b style="color: coral">typeof</b>는 <b style="color: coral">특정 원시 자료형 확인</b>하거나, <b>원시 자료형과 객체형을 구분</b>하기 위해 활용하는 것이 좋다.
- 만일 <b style="color: coral">객체를 확인</b>하고 싶다면, <b style="color: coral">instanceof</b>를 사용하는 것이 좋다. <br>
  instanceof는 원시 타입을 확인하는데 적합하지 않지만, 어떤 객체인지 구분하는데 용이하다.<br> 그렇기 때문에 instanceof는 어떤 종류의 객체인지 확인하는데 주로 활용한다.

```js
console.log(str instanceof String)  // false
console.log(strObj instanceof String) // true
console.log(num instanceof Number)  // false
console.log(numObj instanceof Number) // true
console.log(bool instanceof Boolean)  // false
console.log(boolObj instanceof Boolean) // true
console.log(arr instanceof Array) // true
console.log(obj instanceof Object)  // true
console.log(func instanceof Object) // true
console.log(empty instanceof Object)  // false
console.log(notCalled instanceof undefined) // TypeError
```
- 해설
  * 25~30: 원시 타입에 대한 결과는 false를 반환하고, 내장객체로 선언된 변수는 true를 반환한다.
  * 31~33: <b style="color:coral">객체, 배열, 함수는 각각 Object를 상속받는 내장 객체</b>다. 따라서 true를 반환한다.
  * 34: <b style="color:crimson">실제로 null은 Object를 상속받은 객체가 아니다.</b> typeof에서는 자바스크립트 언어에서 의도한대로 object를 반환했지만, instanceof에서는 false를 반환하여 객체가 아님을 확인할 수 있다. 
  * 35: instanceof 우측에 있는 undefined는 객체가 아니기 때문에 에러를 발생한다. 
<br><br>

### 62. NaN 값 확인하기 (Number.isNaN)

```js
console.log(Number.isNaN(NaN))  // true
console.log(Number.isNaN(undefined))  // false
console.log(Number.isNaN('Is it Number?'))  // false
console.log(Number.isNaN(0))  // false
console.log(Number.isNaN(null)) // false
```
- Number 객체의 <b style="color: coral">isNaN</b> 메소드는 NaN을 구별한다.
- NaN이면 true를 반환, NaN이 아니면 false를 반환한다. <br>
- 여기서 NaN이란 전역 객체의 속성으로 Not a Number(숫자가 아님)의 줄임말이다.

**<b style="color:crimson">주의</b>**
```js
console.log(Number.isNaN(-1)) // false
console.log(Number.isNaN(0/0))  // true
console.log(Number.isNaN(new Date())) // false
console.log(Number.isNaN(new Date().toString))  // false
console.log(Number.isNaN('Infinity')) // false
```
- 해설
  * 6: <b style="color: coral">음수는 숫자 자료형</b>이다. NaN이 아니기 때문에 false
  * 7: 0을 0으로 나누는 것은 수학적으로 정의되지 않는 의미가 없는 연산. 이 연산에 대한 결과값은 NaN이기 때문에 true를 반환한다.
  * 8: <b style="color: coral">new Date()</b>가 실행되면 결과값은 현재 시간이 long 자료형의 값으로 변환된다.<br>
  이는 NaN이 아닌 <b style="color: coral">숫자형</b>으로 false를 반환한다.
  * 9: new Date()는 현재 시간을 long 자료형으로 반환하지만, <b style="color: coral">toString()</b>을 통해 문자형으로 변환하면 "Sat Sep 01 2018 14:53:26 GMT+0900 (KST)"와 같은 형태로 반환한다. 문자열은 NaN이 아니기 때문에 false를 반환한다.
  * 10: JS에서 'Infinity'는 무한대를 의미한다. 이 또한 NaN이 아닌 숫자형으로 구분되어 false를 반환한다.

- 또한 Number 객체의 isNaN 메소드를 활용하면 다음과 같은 처리를 할 수 있다. <br>
  함수 verifyNumber를 통해 NaN 여부를 검증하여 모든 값이 정상 숫자임을 확인한 후 안전하게 산술 연산 한다.

```js
function verifyNumber(n) {
  if (!n || Number.isNaN(n)) return 0;
  return n;
}

const num1 = verifyNumber(15) // 15
const num2 = verifyNumber(undefined)  // 0
const num3 = verifyNumber(null) // 0
const num4 = verifyNumber(NaN)  // 0
console.log(num1 + num2 + num3 + num4)  // 15
```
- 해설
  * 2: 함수에 대입된 값이 빈 값이거나 NaN이면 산술처리 불가한 값으로 인식한다.<br>
    이때 산술연산에서 에러가 발생하지 않도록, 0을 리턴하며 함수를 빠져나온다.
  * 3: 함수에 대입된 값이 정상 숫자형인 경우 그대로 값을 반환한다.
  * 5: 숫자 15는 정상 숫자형이므로 값 그대로 num1 변수에 대입된다.
  * 6~8: undefined, null, NaN은 verifyNumber 함수의 2라인 조건문에 해당하여 결과값 0을 반환한다. 각 값을 변수에 대입한다.
  * 9: 변수 num1, num2, num3, num4 모두 합산한 결과값 15가 출력된다.
<br><br>

### 63. 정수 확인하기 (isInteger)

```js
console.log(Number.isInterger(0)) // true
console.log(Number.isInterger(-1))  // true
console.log(Number.isInterger(7777777777777777777)) // true
console.log(Number.isInterger(null))  // false
console.log(Number.isInterger(0/0)) // false
console.log(Number.isInterger('Infinity'))  // false
console.log(Number.isInterger(true))  // false  
console.log(Number.isInterger({}))  // false
```
- Number 내장객체의 isInteger() 메소드는 값이 정수인지 아닌지 확인한다. <br>
  수학적으로 정의된 정수에 대해서는 모두 true를 반환하고, 정수가 아닌 값은 false를 반환한다.
- 해설
  * 4: null은 정수가 아니기 때문에 false를 반환한다.
  * 5: 수학적으로 정의하지 않는 산술 연산 결과는 false를 반환한다.
  * 6: 양의 무한대, 음의 무한대 값은 정수가 아니므로 false
  * 7: 참/거짓을 의미하는 불리언 자료형(boolean) 값은 정수가 아니므로 false
  * 8: 객체 또한 정수가 아니므로 false를 반환한다.

```js
function verifyInteger(n) {
  if (!Number.isInterger(n)) return 0
  return n
}
const num1 = verifyInteger(15)
const num2 = verifyInteger(Infinity)
const num3 = verifyInteger(0.05)
console.log(num1, num2, num3) // 15, 0, 0
```
- 해설
  * 2: 함수에 대입된 값이 정수가 아니면 산술 처리 불가로 인식한다.<br>
    따라서 바로 0을 리턴하며 함수를 빠져나온다.
  * 3: 함수에 대입된 값이 정수인 경우, 함수에 대한 결과값으로 반환한다.
  * 5: 숫자 15는 바로 반환되어 num1에 대입된다.
  * 6: 'Infinity'는 사실 무한대수를 뜻하는 숫자형이지만, Integer의 byte 크기를 뛰어넘는 큰 수다. 따라서 isInteger 결과값은 0을 반환한다.
  * 7: 0.05는 실수형 값이기 때문에 결과값 0을 반환한다.
<br><br>

### 64. 배열 자료형 확인하기 (isArray)
- JS는 <b style="color: coral">변수의 자료형이 동적으로 바뀔 수 있기 때문에</b> 의도한 자료형인지 확인해야 하는 경우가 종종 생긴다.
- isArray 메소드는 배열 자료형 여부를 true/false로 간단하게 구별할 수 있다.
`Array.isArray(배열)`

```js
function callRoll(students) {
  if (!Array.isArray(students)) return

  students.forEach((student) => {
    console.log(`Are you here, ${student}`)
  })
}

const students = ['Jun', 'Ali', 'Murry', 'Toby']
callRoll(students)
// Are you here, Jun
// Are you here, Ali
// Are you here, Murry
// Are you here, Toby
```
- 해설
  * 1: 매개변수 students를 받는 callRoll 함수를 선언한다.
  * 2: 만일 변수 students가 배열이 아니면 의도하지 않은 자료형이라 판단하고 함수를 빠져나간다.
  * 4~6: 변수 students를 forEach로 반복하여 배열 요소를 console.log로 하나하나 출력한다.