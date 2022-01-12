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
<br><br>

### 65. 문자열을 숫자형 정수로 변환하기(parseInt)
- parseInt()는 어떤 내장함수 객체에도 속하지 않은, 전역에서 사용할 수 있는 내장 함수.
- parseInt()를 활용하여 <b style="color:coral">문자열 자료형을 숫자로 변환</b>할 수 있다.
- parseInt는 두개의 인자를 받는다.
- 첫번째 인자 : 숫자로 변환하고 싶은 값
- 두번쨰 인자 : 특정 진수를 나타내는 정수 값
- `parseInt(값, 진수)`

```js
  console.log(parseInt('15')) // 15
  console.log(parseInt('15', 10)) // 15
  console.log(parseInt('15', 2)) // 1
  console.log(parseInt(5.15)) // 5
  console.log(parseInt('5.15')) // 5
```
- 해설
  * 1: parseInt 함수는 두번째 인자가 없는 경우, 기본값인 10진수로 숫자를 변환한다.
  * 2: 두번째 인자에 10을 넣어 사용할 수도 있다.
  * 3: 두번째 인자에 2를 넣으면 문자 '15'를 2진수 숫자로 변환한다. 따라서 숫자 1을 반환한다.
  * 4~5: 실수인 숫자 또는 문자를 정수로 변환하는데 parseInt 함수를 사용할 수 있다.
<br><br>

### 66. 실수형 숫자로 변환하기
- 소수점이 있는 실수를 반환 또는 변환
- parseFloat함수는 대입된 값을 부동 소수점 숫자로 변환한다.
- 만일 <b style="color:coral">값에 숫자, 소수점, 지수, 기호가 아닌 다른 값이 들어오는 경우 생략된다</b>.
- `parseFloat(값)`
- parseFloat 함수도 parseInt 함수와 동일하게, 어떤 내장 함수 객체에도 속하지 않은 전역에서 사용 가능한 내장 함수다. 

```js
  console.log(parseFloat(5.55)) // 5.55
  console.log(parseFloat('5.55')) // 5.55
  console.log(parseFloat('5.55 숫자의 결과값')) // 5.55
```
- 해설
  * 1: 숫자 5.55를 넣으면 소수점 있는 실수이기 때문에 그대로 값을 반환한다.
  * 2: 문자 5.55를 넣으면 소수점이 있는 숫자형으로 변환하여 반환한다.
  * 3: 문자 5.55 이외에 다른 문자 또는 공백은 생략되어 숫자 5.55만이 반환된다.
<br><br>

### 67. 문자열 양 끝의 공백 없애기(trim)
- String 내장 객체의 <b style="color:coral">trim 메소드는 문자열 양 끝의 공백, 탭, 줄바꿈을 제거한다.</b>
- 단, 함수가 적용된 문자열 원본 값에는 영향을 끼지지 않기 때문에 활용하려면 별도로 값을 저장해야 한다.

```js
  const sentences = ['    ABC abc', 'ABC abc   ', ` first
  second third
          forth
  sentence


  `]
  const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
      filtered.push(s.trim());
    })
    return filtered;
  }

  console.log(filterSentence(sentences))
```
- 해설
  * 7~13: filterSentence 함수는 매개변수로 전달된 배열을 forEach로 순환하여 각 요소에 접근한다. 이때 배열 요소에 trim()을 적용하여 공백, 탭, 줄바꿈을 삭제하고, 필터링된 값들은 배열로 다시 반환한다.
  * 15: filterSentence 함수에 sentences 변수를 인자로 대입하여 실행한다. 
<br><br>

### 68. 문자열 자르기 1.(slice)
- <b style="color: coral">원하는 위치의 특정 문자열만 잘라내는 것</b>이 필요한 경우가 있다.
- 여러 내장 함수들을 활용하여 다양한 방법으로 문자열을 자를 수 있다.
- 각 함수마다 장단점이 있기 때문에, 각각의 특징을 고려햐여 경우에 맞게 활용하는 방법을 알아두자.
- String 내장객체의 slice 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다.
- 두번째 인자인 종료 인덱스는 선택 사항이므로 필수값이 아니다.
- 지정한 범위의 인덱스 문자열을 반환하되, <b style="color:coral">기존 문자열에 영향을 미치지 않는다</b>.
- `'문자열'.slice(시작 인덱스, 종료 인덱스)`

```js
  const sentence = "The sun will shine on us again";
  console.log(sentence.slice(13)) // shine on us again
  console.log(sentence.slice(13, 24)) // shine on us
  console.log(sentence.slice(0))  // The sun will shine on us again
  console.log(sentence.slice(0, -23)) // The sun
  console.log(sentence.slice(50))
  console.log(sentence.slice(7, 2))
```
- 해설
  * 2: 첫번째 인자를 넣어 시작 인덱스를 지정한다. <b style="color:coral">종료 인덱스를 지정하지 않았기 때문에</b> 변수 sentence의 13번재 인덱스부터 <b style="color:coral">마지막까지의 문자열을 반환</b>한다.
  * 3: 시작 인덱스는 13, 종료 인덱스는 24로 지정한다. 따라서 인덱스가 13부터 24까지의 문자열을 반환한다.
  * 4: 시작 인덱스 0은 첫 번째 문자를 의미한다. 두번째 인자가 없기 때문에 처음부터 끝까지 전체 문장을 출력한다.
  * 5: slice 메소드는 <b style="color:coral">음수도 가능</b>하다. 음수는 인덱스를 <b style="color:coral">문자열의 뒤에서 부터 시작하여 인덱스를 셈한다</b>. <br>
  인덱스 0은 첫번째 문자를 의미하고, 인덱스 -23은 뒤에서부터 23번째 문자를 의미한다.
  * 6: <b style="color:coral">문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환</b>한다.
  * 7: <b style="color:coral">첫번째 인자보다 두번째 인자가 크면 slice 함수는 정상적으로 수행되지 않는다</b>.
<br><br>

### 69. 문자열 자르기 2.(substring)
- String 내장 객체의 substring 메소드는 인자로 시작 인덱스와 종료 지점의 인덱스를 받는다.
- 두 번째 인자인 종료 인덱스는 선택사항이다.
- 실행한 결과값은 새로운 문자열을 반환하며 기존 문자열을 변경하지 않는다.
- `'문자열'.substring(시작 인덱스, 종료 인덱스)`
- substring 메소드는 <b style="color: coral">거의 대부분 slice 메소드와 동일하게 수행하지만, 몇 가지 부분에서 다른 결과값을 반환</b>한다.

```js
  const sentence = "This will be the end of Wakanda"
  console.log(sentence.substring(13)) // the end of Wakanda
  console.log(sentence.substring(13, 20)) // the end
  console.log(sentence.substring(0))  // This will be the end of Wakanda
  console.log(sentence.substring(0, -20))
  console.log(sentence.substring(50))
  console.log(sentence.substring(20, 13)) // the end
```
- 해설
  * 2: 두번째 인자 없이 첫번째 인자에만 인덱스 13을 대입한다. 이는 변수 sentence의 13번째 인덱스부터 마지막까지의 문자열을 반환하여 'the end of Wakanda'가 출력된다.
  * 3: 시작 인덱스는 13, 종료 인덱스는 20으로 지정한다. 따라서 인덱스가 13부터 20까지의 문자열을 반환한다.
  * 4: 시작 인덱스 0은 첫 번째 문자를 의미한다. 두번째 인자가 없기 때문에 처음부터 끝까지 전체 문장을 출력한다.
  * 5: substring 메소드는 <b style="color: coral">음수를 넣으면 정상적으로 수행하지 않는다</b>.
  * 6: <b style="color: coral">문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환</b>한다.
  * 7: 첫번째 인자 > 두번째 인자 인 경우엔 두개의 인수를 교환하여 수행한다. 따라서 substring(20,13) -> substring(13,20)
<br><br>

### 70. 문자열 자르기 3.(substr)
- String 내장객체의 substr 메소드는 인자로 <b style="color:coral">시작 지점의 인덱스와 길이</b>를 받는다.
- 두번째 인자인 종료 인덱스는 선택사항이므로 필수값은 아니다.
- <b style="color:coral">지정된 인덱스부터 시작</b>해서 <b style="color:coral">지정된 문자 수 또는 길이만큼의 새 문자열을 반환</b>한다.
- <b style="color:coral">추출하고자 하는 문자열의 길이를 정확히 알고 있는 경우 substr을 활용하는 것이 좋다</b>.
- `'문자열'.substr(시작 인덱스, 길이)`

```js
  const sentence = 'Wakanda Forever!!!'
  cnosole.log(sentence.substr(8)) // Forever!!!
  cnosole.log(sentence.substr(8, 7))  // Forever
  cnosole.log(sentence.substr(0)) // Wakanda Forever!!!
  cnosole.log(sentence.substr(-10)) // Forever!!!
  cnosole.log(sentence.substr(0, -3))
  cnosole.log(sentence.substr(30))
  cnosole.log(sentence.substr(0, 30)) // Wakanda Forever!!!
```
- 해설
  * 2: 두번째 인자 없이 첫번째 인자에만 인덱스 8을 대입, 두번째 인자에 길이를 지정하지 않았기 때문에 변수 sentence의 8번째 인덱스부터 마지막까지의 문자열을 반환한다.
  * 3: 8번째 인덱스의 문자부터 뒤이어 7개의 문자들을 반환하여 'Forever'가 출력된다.
  * 4: 시작 인덱스 0은 첫번째 문자를 의미한다. <b style="color: coral">두번째 인자가 없기 때문에 처음부터 끝까지 전체 문장을 출력</b>한다. 
  * 5: substr 메소드는 <b style="color:coral">첫번째 인자에 음수를 넣으면 문자열의 뒤에서부터 위치를 결정</b>한다. -10인덱스는 뒤에서부터 10번째 문자인 F를 의미한다. 두번째 인자가 없기 때문에 F부터 마지막까지 반환하여 "Forever!!!"가 출력된다.
  * 6: substr 함수의 두번째 인자에 음수를 넣으면 정상적으로 수행되지 않는다.
  * 7: 변수 sentence 문자열 길이보다 큰수를 첫 번째 인자에 대입하면 해당하는 인덱스를 찾지 못하기 때문에 빈 값을 반환한다.
  * 8: 두번째 인자가 변수 sentence 문자열 길이보다 크다면, 이는 기존 문자열보다 큰 길이를 의미한다. 따라서 2번 5번 라인의 수행결과와 동일하게 작동된다.
- 첫번째 인자에 음수 => 뒤에서 부터 위치 결정
- 두번째 인자에 음수 => 정상 작동 X
- 첫번째 인자에 문자열 길이보다 큰 수를 대입 => 인덱스를 찾지 못함, 빈값 반환
- 두번째 인자가 문자열 길이보다 큰 수를 대입 => 마지막까지 반환하여 나타냄
<br><br>

### 71. 문자열 길이 구하기(length)
- length는 String 객체에 미리 정의되어 있는 기본 속성(Property)
- 문자열의 길이를 구할 수 있다.
- `문자열.length`

```js
  const arr = ['short', 'long sentence, it is not appropriate'];

  arr.forEach(str => {
    if (str.length < 10) console.log(str);  // short
  });
```
- 해설
  * 1: 변수 arr에 두개의 문자열을 요소로 갖고 있는 배열을 대입한다. arr[0]에는 'short'인 짧은 문장, arr[1]에는 'long sentence, it is not appropriate'인 긴 문장
  * 3~5: 변수 arr를 forEach로 순환하여 내부 요소에 접근한다. 이때 길이가 10보다 작은 경우에만 console.log로 값을 출력한다. 이 조건문은 변수 arr 내부 값 중에서 'short'만 해당하므로 'short'만 출력되고, 다른 문자열은 출력되지 않는다.
<br><br>

### 72. 문자열로 변환하기(toString)
- <b style="color:coral">JS 모든 객체는 Object를 상속받기 때문에</b>, 다른 모든 객체는 <b style="color:coral">prototype</b>을 통해 Object의 내장 메소드 <b style="color:coral">toString()에 접근하고 재정의(Override)한다</b>.
- 이는 Object 객체의 toString()을 상속받은 것과 다르다.

```js
  const num = 5;
  const bool = true;
  const str = "문자열 값";
  const arr = [1, 2, 3];
  const obj = {a: 15};

  console.log(num.toString()) // 5
  console.log(bool.toString())  // true
  console.log(str.toString()) // 문자열 값
  console.log(arr.toString()) // 1, 2, 3
  console.log(obj.toString()) // [object, object]

  num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
  };

  console.log(num.toString());  // toString 덮어쓰기
```
- 해설
  * 1~5: 숫자, 불린, 문자, 배열, 객체 자료형의 값을 각각 변수로 대입한다.
  * 7~11: 선언한 변수의 toString()를 호출하여 console.log로 출력한다.
  * 13~15: 변수 중에서 num 변수의 <b style="color: coral">__proto__를 통해 toString 메소드를 직접 재정의 한다</b>. 새로 정의한 함수는 고정된 문자열 'toString 덮어쓰기'를 반환한다.
  * 16: 여기서 호출된 toString() 메소드는 13~15라인에서 재정의한 toString가 호출되며 console.log()로 출력된다.
<br><br>

### 73. 두 개의 문자열 하나로 합치기 (concat)
- String 내장 객체 메소드 중에서 문자열을 합치는 concat을 살펴본다.

```js
  const str1 = 'Good afternoon';
  const str2 = ', Good evening';
  const str3 = ', and Good night!';
  const str4 = ' - The Truman Show, 1998';
  console.log(str1.concat(str2, str3, str4))
  // Good afternoon, Good evening, and Good night! - The Truman Show, 1998
```
- 해설
  * 1~4: 문자열이 대입된 변수 str1, str2, str3, str4를 선언한다. 
  * 5: concat 메소드로 위 변수들을 하나로 합치고, console.log()로 출력한다. 문자열을 concat으로 합칠 때에는 맨 처음에 놓일 변수를 기준으로 concat 메소드를 호출한다. 두 개 이상의 문자열을 추가하려 할 때, 나머지 변수들은 메소드 인자로 문자열을 순서대로 나열하여 대입하면 된다.
- concat 이외에도 <b style="color:coral">+ 연산자</b>를 활용하여 문자열을 합칠 수 있다. <br>
  사실 + 연산자가 concat보다 활용면에서 많이 사용된다. 그 이유는 <b style="color: coral">다른 자료형(숫자)과 문자를 하나의 문자열로 만드는 경우가 일반적으로 많을 뿐더라, + 연산자가 concat 메소드 보다 성능상 빠르기 때문</b>에 + 연산자의 사용을 권장하고 있다.
<br><br>

### 74. 특정 위의 문자 반환하기 (charAt)
- String 내장객체 메소드인 <b style="color:coral">charAt()는 숫자형 인자를 받는다.</b><br>
  <b>괄호 안에 대입된 값은 문자열에서 인덱스를 가리키고 해당 위치의 문자를 반환</b>한다. 

```js
  const str = 'Good afternoon, Good evening, and Good night!'
    + '- The Truman Show, 1998';

  console.log(str.charAt(0)); //  G 
  console.log(str.chatAt(5)); // a
  console.log(str.chatAt(14));  // ,
  console.log(str.length);  // 69
  console.log(str.charAt(500));  //
```
- 해설
  * 4~6: 인덱스 0, 5, 14의 문자를 반환한다. 각각 알파벳 G, a, 특수문자','가 반환되어 출력된다.
  * 7~8: 변수 str의 문자열은 길이가 69입니다. 따라서 인덱스 500가 가르키는 위치는 유효하지 않기 때문에 빈 값이 출력된다. 
<br><br>

### 75. 특정 문자열 위치 확인하기1 (indexOf)
- String 내장객체의 메소드 indexOf를 활용하면 문자열에서 특정 문자열이 있는지 확인 할 수 있다.

```js
  const str = 'Carpe diem, seize the day';
  console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있습니다.`);
  // "e"는 4 번째 인덱스에 있습니다.
  console.log(`대문자"C"는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`);
  // "C"는 0 번째 인덱스에 있습니다.
  console.log(`소문자"c"는 ${str.indexOf('c')} 번째 인덱스에 있습니다.`);
  // "c"는 -1 번째 인덱스에 있습니다.
  console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`);
  // // ", se"는 10 번째 인덱스에 있습니다.

  const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
  const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
      if (str.indexOf('e') > -1) count++;
    });
    return count;
  }

  console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`);
  // Carpe,diem,seize,the,day에 "e"가 있는 요소는 모두 4개 입니다.
```
- 해설
  * 1: 변수 str에 문자열 'Carpe diem, seize the day'를 대입한다.
  * 2: indexOf 메소드는 <b style="color: coral">특정 문자와 일치하는 첫 번째 인덱스 값을 반환</b>한다.
  * 3~4: <b style="color: coral">indexOf는 대소분자를 구별</b><br>
    대문자 C는 첫번째 인덱스를 반환하지만, 소문자 c와 <b style="color: coral">일치하는 문자가 없기 때문에 숫자 -1을 리턴</b>한다.
  * 5: 단일 문자뿐만 아니라 <b style="color:coral">문자열 단위로도 일치 여부를 확인</b>한다.<br>
    이때에도 일치하는 가장 첫번째 인덱스 값을 반환한다.
  * 7: 문자열을 요소로 갖는 배열 arr 변수를 선언한다.
  * 8: 배열 인자를 바든 hasManyHasE 함수를 선언한다.
  * 9~14: 매개변수로 전달된 arr변수를 forEach로 순환하면서, 문자열 요소에 소문자 e가 있는지 확인한다.<br>
    만일 소문자 e가 있다면 indexOf 함수의 결과값은 -1보다 크 수를 반환하고, 해당 조건이 충족하면 count 변수의 수가 1씩 증가한다. 
  * 16: 함수 howManyHasE에 arr 변수를 대입하여 반환된 값을 출력한다.
  <br><br>

### 76. 특정 문자열 위치 확인하기2 (lastIndexOf)
- indexOf와 달리, lastIndexOf 메소드는 <b style="color:coral">문자열의 뒤에서부터 일치여부를 확인</b>한다.

```js
  const str = 'Carpe diem, seize the day';

  console.log(`"e"는 ${str.lastIndexOf('e')} 번째 인덱스에 있습니다.`);
  // "e"는 20 번째 인덱스에 있습니다.
  console.log(`대문자"C"는 ${str.lastIndexOf('C')} 번째 인덱스에 있습니다.`);
  // "C"는 0 번째 인덱스에 있습니다.
  console.log(`소문자"c"는 ${str.lastIndexOf('c')} 번째 인덱스에 있습니다.`);
  // "c"는 -1 번째 인덱스에 있습니다.
  console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')} 번째 인덱스에 있습니다.`);
  // // ", se"는 10 번째 인덱스에 있습니다.
```
- 해설
  * 1: 변수 str에 문자열 'Carpe diem, seize the day'를 할당한다.
  * 3: String 객체의 lastIndexOf 메소드는 <b style="color:coral">문자열의 뒤에서부터 동일한 첫 번째 인덱스 값을 반환</b>한다. <br>
  <b style="color:coral">여기서 문자열의 인덱스 순서 자체는 변함 없다.</b>
  * 4~5: lastIndexOF 메소드는 대소문자를 구별한다. 대문자 C는 첫번쨰 인덱스 0을 반환하지만, 소문자 c와 <b style="color:coral">일치하는 문자가 없기 때문에 숫자 -1을 리턴</b>한다. 
  * 6: 단일 문자뿐만 아니라 문자열 단위로도 일치 여부를 확인한다. 이때에도 일치하는 가장 첫번째 인덱스 값을 반환한다.
<br><br>

### 77. 특정 문자열 포함 여부 확인하기 (includes)
- String 내장객체의 메소드 includes는 <b style="color:skyblue">일치하는 문자열이 있는 경우 true</b>를, <b style="color: deeppink">없으면 false를 반환</b>한다.
- `문자열.includes(문자열, 인덱스)`
- 두번째 인자의 인덱스는 필수값은 아니다.
- 추가로 <b style="color:coral">두번째 인자에 인덱스를 지정하면, 해당 인덱스 위치에서부터 문자열을 확인</b>한다.
- <b style="color: coral">두번째 인자가 없으면 기본값 0 인덱스부터 문자열을 확인</b>한다.

```js
  const str = 'Make your lives extradordinary';

  console.log(str.includes('Make')); // true
  console.log(str.includes('Make', 1)); // false
```
- 해설
  * 1: 'Make'와 일치하는 문자열이 확인되면 true를 반환한다.
  * 2: 두 번째 인자에 숫자 1을 대입한다. 인덱스 1부터 'Make'와 일치하는 문자열을 확인하면 동일한 문자열이 없기 때문에 false가 반환된다.
<br><br>

### 78. 문자열 대소문자 변환하기 (toLowerCase, toUpperCase)
- String 내장객체의 메소드 toLowerCase, toUpperCase를 사용하면 문자열의 대소문자를 일괄 변환할 수 있다.

```JS
  console.log('Find Your Own Voice'.toLowerCase())
  // find your own voice
  console.log('Find Your Own Voice'.toUpperCase())
  // FIND YOUR OWN VOICE

  const value = 'Find Your Own Voice';
  console.log(value.toLowerCase() === value.toUpperCase());
  // false
```
- 해설
  * 1: toLowerCase()는 해당 문자열을 모두 소문자로 변환하여 반환한다.
  * 2: toUpperCase()는 해당 문자열을 모두 대문자로 변환하여 반환한다.
  * 4: 문자열 'Find Your Own Voice'를 value 변수에 대입한다.
  * 5: 변수 value에 toLowerCase와 toUpperCase로 변환한 값을 비교 연산자로 확인한다.
<br><br>

### 79. 배열 요소를 분할/변환하기 (from)
- Array 내장객체의 메소드 from은 <b style="color: coral">대입된 문자열 값을 구분자 없이 분할</b>한다.
- 그리고 <b style="color:coral">분할된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환</b>한다.
- <b style="color:coral">첫번째 인자는 배열요소로 분할 변환될 문자열을 대입</b>한다.
- <b style="color:coral">두번째 인자는 필수값은 아니지만, callback함수를 대입하면 분할함과 동시에 각 값을 변환</b>시킬 수 있다.
- `Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)`

```js
  const str = '12345678'

  const distributeArr = Array.from(str);
  console.log(distributeArr);
  // ['1','2','3','4','5','6','7','8']

  const modifiedArr = Array.from(distributeArr, el => el * 2)
  console.log(modifiedArr)
  // ['2','4','6','8','10','12','14','16']
```
- 해설
  * 3: 변수 str을 Array.form에 대입하여 호출한다. 호출한 결과값은 distributeArr에 다시 할당한다. Array.from에 문자열을 대입하면 구분자 없이 문자열을 하나씩 쪼개서 배열을 반환한다.
  '12345678' 문자열이 분할되어, 배열 ['1','2','3','4','5','6','7','8']이 distributeArr 변수에 대입된다.
  * 6: Array.from의 <b style="color:coral">두번째 인자로 callback 함수를 넣을 수 있다</b>. 이때에는 분할된 배열값의 내부 요소들이 하나씩 callback 함수로 전달된다. 전달된 요소들은 callback 함수에 따라 처리되고, 처리된 이후 최종 결과값으로 반환된다.
<br><br>

### 80. 문자열을 특정 구분자에 의해 배열로 나누기 (split)
- String 내장객체의 메소드 <b style="color:coral">split은 문자열을 배열로 변환하여 반환</b>한다.
- 이때 split <b style="color:coral">인자로 받은 구분자로 문자열을 분리한 후, 각각을 배열 요소에 넣는다</b>.

```js
  const capitals = `Prague,Czech Republic
  Copenhagen,Denmark
  Paris,France
  Mardrid,Spain
  Rome,Italy`

  capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
    /**
    Prague is in Czech Republic
    Copenhagen is in Denmark
    Paris is in France
    Mardrid is in Spain
    Rome is in Italy
    */
  });
```
- 해설
  * 7: split 메소드를 활용하여 변수 capitals의 문자열 값을 줄바꿈으로 분리한다.<br>
  배열로 변환된 값은 forEach를 통해 순환하면서 각 요소로 접근할 수 있다.<br>
  예를 들어, forEach를 통해 접근한 변수 s에는 첫번째 요소 'Prague',Czech Republic'가 할당되고, 두번째 요소는 'Copenhagen,Denmark'가 할당된다.
  * 8~10: 각 문장을 다시 split 메소드를 통해 배열로 변환한다. <br>
  구분자 쉼표,로 분리된 배열 0 인덱스의 요소는 capital변수에 대입하고, 1 인덱스의 요소는 country 변수에 대입하여 선언한다. 
<br><br>

### 81. 배열 뒤에 요소 추가하기 (push)
- JS 배열 자료형은 <b style="color: coral">Linked List 자료구조 형태</b>를 갖고 있다.<br>
  따라서 <b style="color:coral">배열 앞과 뒤에 요소를 추가하는 것이 가능</b>.
- Array 내장객체 메소드 <b style="color:coral">push는 배열 뒤에서 요소를 추가</b> 한다.

```js
  const festa = ['mang'];
  fasta.push('chimmy');
  festa.push('tata');
  festa.push('cooky');
  festa.push('shooky');
  festa.push('koya');
  festa.push('rj');

  festa.forEach(name => {
    console.log(name);
  })

  /**
    mang
    chimmy
    tata
    cooky
    shooky
    koya
    rj
  */
```
- 헤설
  * 2~7: 문장 순서대로 festa 배열 뒤에 요소를 추가한다.
  * 9~11: 반복문을 이용하여 festa 배열의 요소들을 콘솔로 출력한다.
<br><br>

### 82. 배열 앞에 요소 추가하기 (unshift)
- Array 내장객체의 <b style="color:coral">unshift 매소드는 배열 맨 앞에 요소를 추가</b>하는 함수다.
```js
  const festa = ['mang'];
  fasta.unshift('chimmy');
  festa.unshift('tata');
  festa.unshift('cooky');
  festa.unshift('shooky');
  festa.unshift('koya');
  festa.unshift('rj');

  festa.forEach(name => {
    console.log(name);
  })
    /**
    rj
    koya
    shooky
    cooky
    tata
    chimmy
    mang
  */
```
- 해설
  * 2~7: 메소드를 활용하여 순서대로 festa 배열 앞에 요소를 추가한다.
<br><br>

### 83. 배열 길이 구하기 (length)
- Array 내장객체는 <b style="color:coral">배열의 길이</b>를 확인할 수 있는 <b style="color:coral">length</b> 속성을 갖고 있다.

```js
  const ship = {
    max: 4,
    passengers: [],
    onBoard: function(name) {
      if (this.passengers.length === 4) {
        console.log(`This ship is full. ${name} can not board this ship.`)
      } else {
        this.passengers.push(name);
        console.log(`${name} boarded.`);
      }
    }
  }

  ship.onBoard('chloe');  
  ship.onBoard('jay');
  ship.onBoard('david');
  ship.onBoard('asher');
  ship.onBoard('daniel');
  console.log(ship.passengers);
  /**
  chloe boarded.
  jay boarded.
  david boarded.
  asher boarded.
  This ship is full. daniel can not board this ship.
  ['chloe', 'jay', 'david', 'asher']
  */
```
- 해설
  * 1: 객체 리터럴이 할당된 변수 ship을 선언한다.
  * 2: ship 객체의 첫번째 속성으로, 키 이름은 max, 값은 숫자 4를 정의한다. max 속성은 '배의 정원 수'를 의미한다.
  * 3: 두번쨰 속성의 키 이름은 passengers, 값은 빈 배열을 정의한다. passenger 속성은 '탑승객 리스트'를 의미한다.
  * 4: 마지막 속성의 키 이름은 onBoard이다. onBoard 속성에는 특정 함수가 정의되어 있다.
  * 5: ship 객체의 passangers 속성에 접근하여, 배열 길이를 확인한다. 확인된 배열의 길이가 숫자 4와 일치하는지 아닌지 확인하는 조건문이다.
  * 6: 확인된 배열의 길이가 숫자 4와 일치하면, 6번째 문장을 실행하여 콘솔 로그를 출력한다.
    즉, 이 배의 승객 수가 4가 되면 만선이 되어 더이상 탑승객을 받지 않는다는 의미다.
  * 7~9: 확인된 배열의 길이가 아직 숫자 4가 아니면, 인자로 받은 name 문자열을 해당 배열 요소에 추가하고 콘솔 로그를 출력한다. 즉, 배의 승객 수가 4가 되지 않았기 때문에 해당 탑승자 이름을 탑승객 명단에 추가한다는 의미다.
  * 14~18: 문자열을 인자로 받는 ship 객체의 onBoard 함수르 호출한다.
  * 19: ship 객체의 passenger 속성을 호출하여, 해당 속성의 값을 출력한다.
<br><br>

### 84. 배열 합치기 (concat)
```js
  const prevList = [1, 2, 3];
  const currentList = [4, 5, 6];
  const nextList = [7, 8, 9];

  console.log(prevList.concat(currentList));
  console.log(prevList.concat(currnetList, nextList));

  console.log(['배열'].concat('합치기'))
  console.log(['배열'].concat('합치기', 'JavaScript200'));
```
- 해설
  * 1~3: 배열 값을 각각 prevList, currnetList, nextList 이름의 변수로 할당한다.
  * 5: Array 내장 객체의 concat 메소드를 사용하여 배열을 병합한다. <br>
    prevList 배열 요소 뒤에 currentList 배열 요소가 합쳐져 하나의 배열을 반환한다.
  * 6: prevList 배열 변수의 concat 함수를 호출한다.<br> 
    <b style="color:coral">concat 함수는 여러 인자를 넣는 것이 가능</b>하다. <b style="color:coral">이때에도 하나의 배열을 반환</b>하는데, <b style="color:coral">배열 내부에는 인자에 넣은 순서대로 요소가 나열</b>된다. 
  * 8~9: 간단하게 <b style="color:coral">인자에 직접 리터럴 값을 넣을 수도 있다</b>. <br> 
    단, concat 함수를 호출하는 <b style="color:coral">첫번째 리터럴이 배열 자료형이어야만</b> Array 객체 메소드 concat이 실행된다. <br>
    <b style="color:coral">문자형의 concat 함수와 헷갈리지 않도록 주의</b>하자.
<br><br>

### 85. 배열에 특정 구분자 넣어 문자형으로 변환하기 (join)
- Array 객체의 메소드 join은 <b style="color: coral">각 배열 요소를 병합하여 하나의 문자열로 변환</b>한다.

```js
  const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you'.
  ];

  console.log(dialogue.join('. '));
  console.log(dialogue.join('.\n'));
```
- 해설
  * 9: dialogue 배열 각 요소 사이에 '.' 구분자를 넣어 하나의 문자열로 병합한다.
  * 10: dialogue 배열 각 요소 사이에 '.\n' 구분자를 넣어 하나의 문자열로 병합한다.
<br><br>

### 86. 배열 마지막 요소 추출하기 (pop)
```js
  const arr = [1, 2, 3]
  console.log(arr.pop())
  console.log(arr.pop())
  console.log(arr.pop())
  console.log(arr.pop())
```
- 해설
  * 1: 변수 arr에 배열 [1, 2, 3] 리터럴을 할당한다.
  * 2~5: 변수 arr에 pop()을 연달아 호출한다. <br>
    arr 배열의 요소는 1,2,3 세 개의 요소가 들어 있는데 반해, pop()는 4번 호출되었다.<br>
    <b style="color: coral">요소 개수보다 많이 호출되면 undefined를 반환한다.</b>
<br><br>
- Array 객체의 메소드 <b style="color:coral">pop은 배열의 마지막 요소를 추출</b>한다.<br>
이떄 <b style="color:coral">원본 배열도 함께 수정되기 때문에</b> pop 함수를 실행할때에는 반드시 원본 수정에 대해서 미리 고려해야한다.
- 뒤에서 차례대로 호출되기 때문에, 배열 [1, 2, 3]의 pop() 호출 결과는 3->2->1 순서로 추출된다. <br>
만일 위처럼 배열 요소보다 더 많이 호출하게 되면, 더이상 추출할 요소가 없으므로 undefined를 반환한다.
<br><br>

### 87. 배열 맨 앞 요소 추출하기 (shift)
```js
const arr = [1, 2, 3]
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
```
- 해설
 * 1: 변수 arr에 배열 [1, 2, 3] 리터럴을 할당한다.
 * 2~5: 변수 arr에 shift()를 연달아 호출한다. 마지막 호출에서 반환할 요소가 없으므로 undefined가 출력된다.
<br><br>

- Array 객체의 메소드 <b style="color:coral">shift</b>는 앞에서 배운 pop 함수와 반대로, <b style="color:coral">배열의 첫 번째 요소를 추출</b>합니다. shift 메소드는 호출과 동시에 <b style="color:coral">원본 배열이 수정되기 때문에 주의</b>해야한다. 
- 앞에서부터 차례대로 호출되기 때문에, 배열 [1, 2, 3]의 shift() 호출 결과는 1->2->3 순서로 추출된다. 만일 위처럼 배열 요소보다 더 많이 호출하게 되면, <b style="color:coral">더 이상 추출할 요소가 없으므로 undefined를 반환</b>한다. 
<br><br>

### 88. 배열 특정 위치의 요소 추출하기 (slice)
- Array 객체의 메소드 slice는 인덱스의 시작과 끝을 지정하여 배열 요소를 추출한다.
- 시작 인덱스부터 끝 인덱스까지의 배열 요소를 추출한다.
- 단, <b style="color:corla">끝 인덱스에 있는 요소는 제외하고 그 이전까지의 요소들을 추출</b>한다.
- `배열.slice(시작 인덱스, 끝 인덱스)`

```js
  const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
  console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4,5)} 입니다.`)
  console.log(arr.slice(0, 10));
```
- 해설
  * 2: slice 메소드에 시작-끝 인덱스로 2,3을 넣으면 arr 배열의 'source'가 반환된다. <br>
  두번째 slice 메소드에는 4,5를 넣어 배열의 'juice'가 반환된다.
  * 3: 변수 arr의 시작 인덱스에 0은 배열 첫번째를 의미한다. 그리고 <b style="color:coral">배열 길이보다 더 큰 값을 끝 인덱스에 넣으면 배열 가장 마지막까지 모두 반환</b>한다.
  <br><br>
- slice 함수는 <b style="color:coral">원본 배열을 변경하지 않고 복제(얕은 복사)를 수행</b>한다. 따라서 splice 함수를 통해 처리된 결과값을 활용하려면 별도의 변수로 대입해야 한다.
<br><br>

### 89. 배열 인덱스로 특정 요소 수정하기 (splice)
- Array 객체의 메소드 splice는 특정 위치의 요소를 삭제하거나 수정할 수 있다.
- `배열.splice(시작 인덱스, 삭제할 요소의 개수, 추가될 요소들 ...)`
- <b style="color:coral">시작 인덱스</b> : 배열 요소가 변경될 시작 지점. (필수) <br> 첫번째 인자값은 <b style="color:coral">배열 길이보다 작아야 유효</b>하다.
- <b style="color:coral">삭제할 요소의 개수</b> : 시작 인덱스의 위치부터 삭제하고자 하는 개수만큼 요소를 제거한다. <br> 이때 해당 요소가 제거됨과 동시에 메소드 호출 결과로 값을 반환한다.
- <b style="color:coral">추가될 요소들</b> : <b style="color:coral">시작 인덱스부터</b> 해당 요소들이 추가된다.

```js
  const fruits = ['melon', 'lemon', 'source', 'apple', 'juice']

  fruits.splice(4, 1);
  fruits.splice(4, 0, 'grape');
  fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');
  console.log(fruits);
```
- 해설
  * 1: 변수 fruits에 배열 리터럴을 할당하여 선언한다. 이 배열의 내부 요소에는 문자열들이 있는데, 과일과 과일이 아닌 종류들이 섞여있습니다.
  * 3: splice(4, 1)를 실행하면 과일이 아닌 'juice'문자열이 추출된다.
  * 4: splice(4, 0, 'grape')는 삭제할 개수를 지정하지 않아 추출되는 요소가 없습니다. 그러나 세번째 인자로 인해 시작 인덱스에 'grape' 문자열이 추가됩니다.
  * 5: 세번째 인덱스를 활용하면 두 개 이상의 요소를 추가할 수 있습니다.
<br><br>

### 90. 배열의 특정 요소 위치 확인하기 (indexOf)
- Array 객체의 메소드 indexOf는 <b style="color:coral">대입된 값(첫 번째 인자)을 배열 내부에서 검색</b>한다.
- <b style="color:coral">값이 일치</b>하는 경우 <b style="color:coral">해당 인덱스를 반환</b>한다.
- 두 번째 인자인 시작 인덱스는 필수값이 아니다.
- 만일 <b style="color:coral">두 번째 인자에 숫자형 값</b>을 넣으면, indexOf는 <b style="color:coral">해당 인덱스부터 값을 찾는다</b>.
- 만일 <b style="color:coral">찾는 값이 없으면 indexOf는 숫자 -1을 반환</b>한다.
- `배열.indexOf(검색할 값, 시작 인덱스)`

```js
  const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down']

  console.log(`"winter" is in this index ${arr.indexOf('winter')}`)
  // "winter" is in this index 3
  console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);
  // "winter" is not in here, look this value -1
```
- 해설
  * 3: arr 배열 요소 중에서 winter 문자열을 찾기 위해 indexOf 메소드를 활용한다.<br>
  해당 값은 arr의 3 인덱스에 위치해 있는 것을 알 수 있다.
  * 4: arr 배열의 인덱스 4부터 winter 문자열을 검색하면 값을 찾을 수 없으므로 -1을 반환한다.
<br><br>

### 91. 배열 순환하기 (forEach)
- Array 내장 객체의 forEach 메소드는 배열 내부 요소를 순환하며, 각 요소에 대해 callback 함수를 실행한다.
`배열.forEach(callback 함수)`

```js
  const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2},
  ];

  arr.forEach( (el) => {
    console.log(el.name)
  });
  // 혜림
  // 현일
  // 현아
  // 우림
```
- 해설
  * 8: 배열 내부 요소는 callback 함수의 변수 el로 전달된다.
  * 9: arr의 요소들은 객체 자료형으로 통일되어 있다. 객체 el의 속성 name을 콘솔 출력한다.

