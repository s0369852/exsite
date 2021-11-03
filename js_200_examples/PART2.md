### 16. 숫자형 이해하기
- 자바스크립트에서 숫자형(Number)이란, 숫자 형태를 가진 데이터를 의미한다. 
```JS
  3
  5.0
  2.789e5
``` 
- 다른 언어와 달리 JS는 숫자의 형태를 구체적으로 나눠 정의하지 않는다.<br/>
  정수, 부동 소수점, 작은 수, 큰 수 등 여러 유형의 숫자를 (Number) 하나로 정의
- JS의 숫자형은 64-bit Floating Point(64비트 부동 소수점), 숫자값을 64비트 정보로 저장한다.
- 숫자는 <strong style="color:coral;">0~51</strong>에 저장되고 지수는 비트 <strong>52~62</strong>, 그리고 부호는 비트<strong>63</strong>에 저장된다.
- 이외에도 JS에는 <strong style="color: coral">Infinity, NaN</strong> 값이 있다. (숫자형으로 분류되지만, 일반적인 숫자와는 조금 다른 역할을 수행한다.)

```js
  console.log(Infinity) // Infinity
  console.log(1 / Infinity) // 0
  console.log(0 / 0)  // NaN
  console.log(Infinity - Infinity)  // NaN
  console.log(0 / "말도 안되는 값") //  NaN
```

- 해설
  * Infinity는 다른 어떤 수보다 가장 큰 수를 뜻한다.
  * NaN : Not a Number, 산술 연산의 결과가 유효하지 않은 값 또는 숫자가 너무 커서 표현할 수 없는 값일 때 NaN으로 표현.
  * Infinity로 나누면 무슨 값이든 0이 된다.
  <br/><br/>

### 17. 문자형 이해하기
- 문자형(String)은 값이 텍스트 형태인 데이터를 의미한다.
```JS
  console.log("I'm in jeju")
  console.log('Sewha ocean is wonderful')
  console.log(`Have you ever eaten Makgeolli?`)
  console.log('This is the first line\nAnd this is the second')
```
- 해설
  * 다른 언어와 달리 JS는 큰따옴표 문자열과 작은따옴표 문자열 간의 차이점은 없다.
  * 따옴표 기호들은 단일 문장이어야 유효하나, 간혹 개행이 필요한 문장도 있다.
<br/><br/>

### 18. 불린형 이해하기
- 불린형(Boolean)은 <strong>참(true)</strong>과 <strong>거짓(false)</strong> 값으로 이루어진 자료형
```js
  console.log( 7 > 3 )  // true
  consoel.log( 7 < 3 )  // false
```

<br/><br/>

### 19. null과 undefined 이해하기
- null과 undefined를 보이는 그대로 해석하면 <strong>'빈 값', '없는 값'</strong>을 의미하는 것 처럼 보이지만, <strong>사실 큰 차이점이 있다.</strong>

```js
  let value = null
  console.log(value)  // null
  console.log(typeof value) // object

  let value
  console.log(value)  // null
  console.log(typeof value) // object
```
- 해설
  * <b>null</b>은 <b style="color: coral">비어있는, 존재하지 않는 값</b>을 의미
  * <b>null은 값의 부재를 의미하며</b> 원시 자료형 null로 분류가 된다. <br/>
    단, typeof로 자료형을 확인할 때 object(객체)를 반환하는데, 이는 JS 기존 이슈로 인한 결과 (<b style="color:coral; font-style: italic">null이 객체형이라 오해하지 않도록 주의</b>)
  * <b>undefined</b>는 <b style="color: coral">변수가 정의되었지만, 아무 값도 할당받지 않은 상태</b>를 의미.
  * 함수에서 명시적으로 값을 반환하지 않았을 때 또는 변수에 어떠한 값도 대입하지 않고 정의했을 때 undefined가 반환된다. (undefined는 undefined 원시 자료형으로 분류)
  * typeof는 우측에 있는 값이 어떤 자료형인지 확인하고, 확인된 자료형 정보를 문자형으로 반환한다. 
  * <b>동등 연산자(==)</b>인 경우에는 자료형 비교까지 이루어지지 않기 때문에 덜 엄격한 연산자라고 볼 수 있다. 
  * <b>일치 연산자(===)</b>로 확인하면, 자료형 비교까지 이루어져 엄격한 연산자라고 할 수 있다.
- 연산자에 다라 null과 undefined의 비교 결과가 다르다.
<br/><br/>

### 20. 템플릿 문자열 이해하기
- <b style="color: coral;">ES6에 추가된 템플릿 문자열(Template String)</b>
```js
  let cart = [
    {name: '옷', price: 2000},
    {name: '가방', price: 1000}
  ]

  let numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`
  let cartTable = `
    <ul>
      <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
      <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
    </ul>`
  
  console.log(numOfItems) // 카트에 2개의 아이템이 있습니다.
  console.log(cartTable)  
  /**
    <ul>
      <li>품목: 옷, 가격: 2000</li>
      <li>품목: 가방, 가격: 1000</li>
    </ul>
  */ 

  let personName = 'harin',
      helloString = 'hello' + `hello ${personName}`
      helloTemplateString = `hello ${personName}`
  console.log(helloString === helloTemplateString)  // true
  console.log(typeof helloTemplateString) // string
```
- 해설
  * 탬플릿 문자열은 `(백틱- 억음부호)로 작성한다. 
  * 탬플릿 문자열을 이용하면 `${표현식}`를 이용하여 삽입처리(interpolation)가 가능하다.
  * 삽입처리란 표현식의 계산된 결과가 문자열로 변경되어 해당 위치에 삽입되는 것을 말한다.
  * 템플릿 문자열은 기존 문자열과 다르게 멀티 라인이 가능하다. (개행하여 작성한 그대로 정의)
  * 탬플릿 문자열도 새로운 타입이 아니라 문자열이다.(String)
<br/><br/>

### 21. 산술 연산자
- <b>표준 산술 연산자(덧셈, 뺄셈, 곱셈, 나눗셈)</b>를 통해 숫자형 값을 계산할 수 있다.
```js
  10 + 5  // 15
  10 - 5  // 5
  10 * 5  // 50
  10 / 5  // 2
  "문자열" + " 이어 붙이기" // 문자열 이어 붙이기 (나눗셈, 곱셈, 뺄셈은 안된다.)
```
- JS 산술 연산자는 숫자형 값 연산에만 국한되지 않는다. <br/>
  덧셈(+) 연산자인 경우 문자형에 사용 가능, 두 개 이상의 문자열을 이어 붙일 수 있다. <br/>
  단, 나눗셈, 곱셈, 뺄셈 에서는 문자열을 사용할 수 없다. 
- 산술 연산자 <b>=연산자</b>를 함께 사용하는 <b>산술 등호 연산</b>도 가능하다.
```js
  let x = 10
  x += 5
  x *= 2
  console.log(x)  // 30
  let y = 10
  y -= 5
  y /= 5
  console.log(y)  // 1
```
- 해석
  * <b>+=</b>를 사용하면, <b>x = x + 5</b>로 처리된다. 
  * <b>*=</b>도 마찬가지, <b>x = x * 5</b>로 처리된다. 
  * <b>-=</b>도 마찬가지, <b>y = y - 5</b>로 처리된다.
  * <b>/=</b>도 마찬가지, <b>y = y / 5</b>로 처리된다.
  <br/><br/>

- <b>나머지연산자(%), 거듭제곱 연산자(**), 단항음수/양수(-/+), 증감 연산자(++/--)</b>
```js
  console.log( 15 % 4)  // 3
  console.log( 3 ** 3 ) // 9
  console.log(+10)  // 10
  console.log(-10)  // -10
  let value = 10
  ++value
  --value
  console.log(value)  // 10
```
- 해설
  * 거듭제곱 연산자는 <b>a ** b</b>로 작성하고 a의 b 거듭제곱수를 반환
  * <b>++</b> 연산자는 <b>++value</b>로 작성하며,  <b>value = value + 1</b>로 연산
  * <b>--</b> 연산자는 <b>--value</b>로 작성하며, <b>value = value - 1</b>로 연산
<br/><br/>

### 22. 비교 연산자
- 두 개의 값을 비교하여 true와 flase 결과값을 반환한다.
- 값이 동등한지 비교하는 <b style="color: coral;">일치 연산자</b>와 값의 관계를 비교하는 <b style="color:coral">관계 연산자</b>가 있다.
- 일치 연산자는 값의 일치 여부를 확인, 종류에는 <b>동등 연산자</b>, <b>부등 연산자</b>, <b>일치 연산자</b>, <b>불일치 연산자</b>가 있다.
```js
  console.log(5 == 5) // true
  console.log("5" == 5) // true
  console.log(5 == '5') // true
  console.log(5 != 1) // true
  console.log(5 != "1") // true
  console.log(5 != "5") // false
  console.log(5 === 5)  // true
  console.log(5 === "5")  // false
  console.log(5 !== 10) // true
  console.log(5 !== "5")  // true
```
- 해설
  * <b>동등 연산자 ==</b>는 비교 대상값의 <b style="color: coral">자료형이 서로 다르면 강제로 형을 바꾼 뒤에 비교</b>한다. <br/>
  값의 자료형과 상관없이, 내용이 같은 경우 참(true)을 반환한다.<br/>
  만약 두 값이 객체형이라면 메모리 주소를 바라보는지 확인한다.
  * <b>부등 연산자 !=</b>는 값이 다른 경우 참(true)을 반환한다. <br/>
    <b style="color: coral">자료형이 다른 경우 동등 연산자와 동일하게 형을 변환하고 비교</b>하게 된다. 
  * <b>일치 연산자 ===</b>는 엄격한 기준을 갖고 있으며, 값의 내용을 비교하는 것 뿐만 아니라, 자료형까지 일치하는지 비교한다.
  * <b>불일치 연산자 !==</b>는 엄격한 기준으로 값의 불일치 여부를 확인하는 연산자.<br/>
    같은 자료형에서 값의 내용이 다르거나 다른 자료형인 경우 참(true)을 반환한다.
<br/><br/>

- <b>관계 연산자</b>는 <b style="color: coral">두 개의 값 간의 크기 비교를 통해 관계를 확인</b>하는 연산자이다. <br/>
```js
  console.log( 5 > 3 )  // true
  console.log( 5 < 3 )  // false
  console.log( 5 <= 6 ) // true
  console.log( 5 >= 5 ) // true
```
* <b style="color: coral">JS는 숫자형 비교 외 문자형에서도 비교 연산이 가능</b>하다.
* 알파벳으로 문자형을 나열하게 되면, 항상 대문자가 소문자보다 앞선 순서로 정렬되는 것을 볼 수 있는데, "Z"보다 "a"가 큰 값으로 이해하면 된다. 
```js
  "Italy" > "America" // true -> I = 9, A = 1
  "Korea" < 'korea' // true -> K = 11, k = 35
```
<br/><br/>

### 23. 논리 연산자
- 논리 연산자는 어떠한 명제에 대한 논리적인 판단을 내리는 연산자. <br/>
  참 또는 거짓의 값을 받아 논리적 연산의 결과로 (true, false)를 반환한다. <br/>
  <b>AND연산자(&&)</b>, <b>OR연산자(||)</b>, <b>NOT연산자(!)</b>가 있고, 결과값은 항상 불리언(Boolean) 자료형으로 반환한다. 

```js
  // AND 논리 연산자 &&
  console.log( true&&true ) // true
  console.log( true&&false )  // false
  console.log( '문장' == '문장' && 5 == 5 ) // true
  console.log( 5 == 5 && '다른 문장 1' == '다른 문장 2' ) // false

  // OR 논리 연산자 ||
  console.log( true || true ) // true
  console.log( false || false )  // false
  console.log( '문장' == '문장' || 5 == 10 )  // true

  // NOT 논리 연산자 !
  console.log(!true)  // false
  console.log(!false) // true
  console.log(!5) // false
  console.log(!'문장')  // false
  console.log(!!5)  // true
  console.log(!!'문장') // true
```
- 해설
  * <b>AND 논리 연산자 &&</b>의 문장은 <b>표현식1 && 표현식2</b>와 같이 작성한다.<br/> 표현식1과 표현식2 <b style="color: coral">모두 참인 경우 true를 반환</b>하고 그렇지 않으면 false를 반환한다.
  * <b>OR 논리 연산자 ||</b>의 문장은 <b>표현식1 || 표현식2</b>로 작성되며, 표현식1, 표현식2 <b style="color: coral">둘 중 하나가 참인 경우 true를 반환</b>한다.  
  * <b>NOT 논리 연산자 !</b>의 문장은 <b>!표현식</b>으로 작성되며, <b style="color: coral">true를 !로 부정(NOT)하면 false가 되고, 반대로 false를 !로 부정하면 true</b>가 된다.
  * <b>!!연산자</b>는 NOT 연산자에 한 번 더 NOT 연산자를 처리하는 방법이다. <br/>
    숫자형 5와 "문장"은 항상 true로 변환하는 값이며,<br/>
    !!를 통해 <b style="color: coral;">두 번 부정</b>한 결과로 다시 true 값이 반환된다.
  * 불리언 자료형이 아니더라도, 값을 논리 연산자로 처리하면 참인지 거짓인지 구분할 수 있다.
  * 아래와 같이 <b style="color: coral">값의 정보가 유효한 경우 참(true)의 값으로 판단되고, 논리 연산자의 결과값은 무조건 true가 반환</b>된다. 
  ```js
    3 10 '문자' [1,2,3] {tom: 'boy'} function() {}
  ```
  * 반대로 <b style="color: coral">값의 정보가 비어 있는 경우 유효하지 않다고 판단되어 거짓을 의미하는 값인 false를 반환</b>한다. 
  ```js
    false 0 -0 "" NaN null undefined
  ```

<br/><br/>

### 24. 삼항 연산자
- 삼항 연산자는 if와 switch처럼 조건문을 처리하는 연산자입니다.<br/>
  일반적으로 <b style="color: coral;">if 조건문의 축약형으로 사용되며, 세 개의 문장으로 구성</b>된다.

```js
  조건문 ? 표현문1 : 표현문2
```

- 조건문은 반드시 결과가 참(true)과 거짓(false)로 반환되어야 한다.<br/>
  그리고 그 결과가 <b style="color: coral;">true면 표현문1을 실행</b>, <b style="color: coral;">false면 표현문2를 실행</b>

```js
  let condition = 5 > 10
  condition ? console.log('left') : console.log('right')  // right
  
  let result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
  ) : (
    console.log("삼항 연산식의 두 번째 표현식 입니다."), // 삼항 연산식의 두 번째 표현식입니다.
    "표현식2"
  )
  console.log(result) // result
```

- 해설
  * 삼항 연산의 결과로 반환된 값은 다시 변수로 할당 할 수 있다.<br/>
    이때 할당되는 값은 삼항 연산 실행문의 마지막 값이 할당된다. 
  * 변수 result에 삼항 연산식을 대입한다. <br/>
    condition의 값 false로 인해 두 번째 표현식이 실행되어 "삼항 연산식의 두 번째 표현식 입니다." 콘솔로그가 출력되고, 변수 result에는 마지막 값인 "표현식2"가 할당된다. 
  * result에 할당된 "표현식2" 값이 콘솔로 출력된다.