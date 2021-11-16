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
<br/><br/>

### 25. 비트 연산자
- 비트(bit)란 이진수(Binary digit)의 줄임말로, 0과 1로 구성된 숫자 체계를 갖고 있는 이진수의 단일 값을 가진다.
- <b style="color: coral">데이터의 가장 작은 기억장치의 최소 단위</b>
- 비트는 바이트(Byte)와 같이 자주 언급되는 용어,<br/>
  여기서 <b style="color: coral">바이트는 컴퓨터 용량의 기본 단위</b>로, 컴퓨터의 RAM과 하드 디스크의 용량, 파일 브라우저에서 보여지는 파일 크기 등을 측정하는 단위로 쓰인다.
- <b style="color: coral">1 byte = 8 bits</b>
- 이러한 비트를 활용한 연산이 비트 연산자다.
- 비트 연산은 숫자 1과 0으로만 구성된 값인 이진수로 연산이 가능하다.
- 자바스크립트의 비트 연산자는 크게 <b>비트 논리 연산자</b>와 <b>비트 이동 연산자</b>로 나뉜다.
- 비트 논리 연산자로는 <b>AND 연산자 &</b>, <b>NOT 연산자 ~</b>, <b>OR 연산자 |</b>, <b>XOR 연산자 ^</b>가 있다. 
- 비트 이동 연산자로는 <b><<</b>, <b>>></b>, <b>>>></b>가 있다.

```js
  console.log(14 & 11) // 10
  console.log(~14)  // -15
  console.log(14 | 11)  // 15
  console.log(14 ^ 11)  // 5
  console.log(2 << 2) //8
  console.log(14 >> 1)  // 7
  console.log(14 >>> 2) // 3
```
- 해설
  * <b style="color: coral">AND 비트 연산자 &</b>는 a & b로 작성한다.<br/>
    이 연산자는 '곱하기'처럼 0이 하나라도 있으면 결과값이 0이 된다.<br/>
    반대로 대응되는 비트는 변환하고, 모든 값이 1일 때만 1을 반환한다.<br/>
    따라서 1110와 1011의 논리곱 연산 결과는 1010이 되고, 십진수로 표현하면 10이 출력된다.
  * <b style="color: coral">NOT 비트 연산자 ~</b>는 ~a로 작성된다. <br/>
    입력된 비트값을 반대의 값(1이면 0으로, 0이면 1으로)으로 바꿔 반환한다.<br/>
    따라서 ~1110을 연산하면 -1111값이 나온다.<br/>
    십진수로 변환하면 -15값이 출력된다.
  * <b style="color: coral">OR 비트 연산자 |</b> a | b로 작성된다.<br/>
    대응되는 비트값 중 최소 하나만 1이어도 1을 반환하기 떄문에, 1110과 1011의 OR 연산 결과는 1111이 된다. 이 값을 십진수로 변환하면 15가 출력된다.
  * <b style="color: coral">XOR 비트 연산자 ^</b>는 a ^ b로 작성되며, 배타적으로 1인 경우에만 1을 반환한다.<br/> 
    따라서 1110과 1011을 XOR 연산하면 0101이 되고, 이를 십진수로 변환하면 5가 출력된다.
  * <b style="color: coral"> << 비트연산자 </b>는 a << b로 작성한다.<br/>
    이 연산은 a의 이진수 표현을 b 바트의 자리수만큼 왼쪽으로 이동하고, 오른쪽은 0으로 채운다.<br/> 이에 따라 이진수 10을 10비트 자리수(2개)만큼 왼쪽으로 이동하고, 오른쪽에는 0으로 채워진다. <br/>
    결과값은 1000, 이 값을 십진수로 변환하여 8이 콘솔 출력된다. 
  * <b style="color: coral"> >> 비트연산자 </b>는 a >> b로 작성한다.<br/>
    a의 이진수 표현을 b 비트의 자리수만큼 오른쪽으로 이동하고, 오른쪽 남은 비트는 버린다. <br/>
    왼쪽의 빈자리는 원래 해당 자리에 있던 비트값으로 채운다. <br/>
    1110을 1비트 자리수(1개)만큼 오른쪽으로 이동하여 연산 계산하면 111이 된다.<br/>
    이를 십진수로 변환하여 7이 출력된다. 
  * <b style="color: coral"> >>> 비트 연산자 </b>는 a >>> b로 작성한다. <br/>
    a의 이진수 표현을 b 비트 오른쪽으로 이동한다. <br/>
    오른쪽 남은 비트는 버리고 왼쪽의 빈자리는 0으로 채운다. <br/>
    이에 따라 1110을 10비트 자리수(2개)만큼 오른쪽으로 이동하여 조금전과 같이 계산한다.<br/> 따라서 11이 되고, 이 값을 십진수로 변환하여 3이 출력된다. 
```js
  150.toString(2) // 10010110
```
  - 비트 연산을 위해 이진수로 변환하는 방법. <br/>
    연산 JSdml <b style="color: coral">.toString(2)</b>를 활용하면 숫자를 바이너리 형태로 변환할 수 있다.
<br/><br/>

### 26. 자료형 변환 이해하기
  - JS에서는 <b style="color: coral">자료형 간 변환을 지원한다.</b> <br/>
    예를 들어 숫자형 변수값을 문자형으로 변환하거나, 문자형 변수값을 숫자형으로 변환할 수 있다. <br/>
    이를 자료형 변환(type coercion)또는 형변환이라고 부른다.
  - 1. 개발자가 직접 명시적으로 자료형을 변환. <br/>
    2. JS엔진에 의해 자동으로 자료형이 변환되는 방법
  - 특히 JS엔진에 의해 자동으로 자료형이 변환되는 것은 JS가 동적 자료형 언어이기 때문에 적용되는 특징이다. <br/>
    처음 개발자가 작성한 코드가 어떤 의도를 품고 있던 간에 JS가 미리 정해놓은 규칙에 따라 자료형이 변환된다.
```js
  console.log("5" + 1)  // 51
  console.log("5" - 1)  // 4
  console.log("5" * 2)  // 10
  console.log("There is " + 5)  // There is 5
  console.log("Five" * 2) // NaN

  console.log('- 연산자를 활용한 자료형 변환')
  
  let str = 5 + "1"
  console.log(str)  // 51 
  console.log(typeof str) // string 

  let num = +str
  console.log(num)  // 51
  console.log(typeof num) // number

  console.log('- 함수를 활용한 자료형 변환')

  str = String(num)
  console.log(str)  // 51
  console.log(typeof str) // string

  num = Number(str)
  console.log(num)  // 51
  console.log(typeof num) // number
```

- 해설
  * 자동으로 자료형이 변환되는 경우, 연산자에 따라 반환 결과가 다르다. <br/>
    덧셈 + 연산자는 대입된 값에 따라 숫자형 또는 문자형으로 반환된다. <br/>
    그러나 <b style="color: coral">뺄셈, 곱셈, 나눗셈 연산자는 항상 숫자형을 반환</b>한다.
  * 문자열 5의 숫자형 1을 더한 표현식은 51을 반환한다. <br/>
    1이 문자열 "1"로 변환된 것을 알 수 있다.<br/> 
    여기서 <b style="color: coral">덧셈 연산자 +가 다른 자료형끼리의 연산에서 숫자형보다 문자형을 우선순위로 처리</b>하는 것을 알 수 있다. <br/>
    따라서 숫자 1이 문자 "1"로 변환된 것이다. typeof로 값의 자료형을 확인하면 문자형을 의미하는 string이 출력된다. 
  * 단항 양수 +를 통해 문자형을 숫자형으로 변환할 수 있다. 
  * 명시적으로 자료형 변환할 때에는 내장 객체 함수를 사용한다. <br/>
    String 갹체에 값을 넣으면 문자형으로, Number 객체에 값을 넣으면 숫자형으로 변환된다.
<br/><br/>

### 27. 배열 이해하기
```js
  []
  [ 1, 2, 3, 4 ]
  [ 1, 'A', true, null ]
```
  - 배열 자료형의 형태는 대괄호[]와 괄호 사이의 요소(들)로 구성된다.<br/>
    요소가 없는 대괄호[]는 빈 배열을 의마한다. 배열에 요소들을 나열하는 경우 콤마(,)룰 통해 구분한다. <br/>
    따라서 형태는 <b style="color: coral">[요소1, 요소2, 요소3,...]</b>가 된다.<br/>
    JS는 동적 자료형 성격을 갖고 있기 때문에, 배열의 길이와 자료형은 고정되지 않는다.<br/>
    여기서 배열의 길이란 배열 내부의 요소 개수를 계산한 값이다.
  - 배열 내부의 특정 위치에 있는 요소로 바로 접근할 때에는 인덱스(index)가 반드시 필요하다. <br/>
    <b style="color: coral">인덱스란, 배열 안에 위치한 요소의 좌표</b>라고 할 수 있는데, 좌표의 원점이 되는 시작값은 숫자 0이다. <br/>
    배열의 맨 앞에 위치한 첫 번째 요소 인덱스 값은 0이며, 인덱스 값은 하나씩 증가한다.
    <br/><br/>

```js
  let arr = [1, 2, 3, 4, 5]
  console.log(arr.length) // 5
  console.log(arr[0]) // 1
  console.log(arr[2]) // 3
  console.log(arr[8]) // undefined
```
  - 해설
    * 다른 자료형처럼 배열도 변수 대입이 가능하다.
    * 배열의 <b style="color: coral">length 속성</b>을 활용하면 배열의 길이를 숫자형으로 반환받아 확인 할 수있다.
<br/><br/>

### 28. 객체 이해하기1
  - 여러 개의 값을 한번에 접근할 수 있도록, JS는 객체(Object)를 제공하고 있다.
  - 객체(Object)는 <b style="color: coral">값들을 그룹으로 묶은 데이터 모음</b>
  - <b style="color: coral">{키(key) : value(값)}</b>을 한쌍으로 정의하며 이를 <b style="color: coral">속성(Properties)</b>라 부른다.
  - <b>하나의 키(key)에는 하나의 값이 매핑된다.</b>
  - 객체 안에 <b>중복된 키 이름은 허용하지 않으며</b>, 두 줄 이상의 속성을 정의할 때에는 콤마(,)를 사용하여 구분한다.
  <br/><br/>
  ```js
  let family = {
    'address' : 'Seoul',
    members: {},
    addFamily: function(age, name, role){
      this.members[role] = {
        age: age,
        name: name
      }
    },
    getHeadcount: function(){
      return Object.keys(this.members).length
    }
  }

  family.addFamily(30, 'chloe', 'aunt')
  family.addFamily(3, 'lyn', 'niece')
  family.addFamily(10, 'dangdangi', 'dog')
  console.log(family.getheadcount()); // 3
  ```
  - 해설
    * 객체는 다양한 원시 자료형의 값을 가질 수 있고, 객체 속성으로 또다른 객체와 함수 리터럴을 가질 수 있다.
    * 객체에 <b>키(Key)를 작성할 때에는 이렇게 문자열 ''기호를 넣은 것과 넣지 않은 것의 차이를 두지 않는다.</b> 
    * 객체를 설명하는데 있어 JSON을 설명하지 않을 수 없다.
    * JSON(JavaScript Object Notation)은 <b style="color: coral">자바스크립트의 객체와 매우 유사한 구조를 지닌 데이터 교환 형식</b>
    * <b>키 : 값</b> 쌍의 모음들로 이루어져 있다.
    * 여기서 반드시 <b style="color: coral">키 이름은 큰 따옴표""로 표시된 문자열이어야 하고, 값은 오직 문자열, 숫자, 배열, true, false, null 또는 다른 JSON 객체만 가능</b>하다.
    ```json
      {"key" : "value"}
    ```
    * 이처럼 객체와 JSON의 형태는 비슷해 보여도 동일하지 않다.
    * <b>JS에서는 JSON을 분석하고 직렬화하는 메소드들을 제공하는 JSON 객체가 있다.</b>
    <br/><br/>

### 29. 객체 이해하기2 (속성 접근/추가/수정/삭제)
- 객체 내부에 있는 <b style="color: coral">특정 속성에 바로 접근하고, 새로운 속성을 추가/삭제하는 방법</b>
```js
  let family = {
    'address' : 'Seoul'
    members: {},
    addFamily: function(age, name, role) {
      this.members[role] = {
        age: age,
        name: name
      }
    },
    getHeadcount: function(){
      return Object.keys(this.members).length
    }
  }

  family.addFamily(30, 'chloe', 'aunt')
  family.addFamily(3, 'lyn', 'niece')
  family.addFamily(10, 'dangdangi', 'dog')

  let printMembers = function() {
    let members = family.members
    for(role in members) {
      console.log(
        'role => ' + role + ', 
        name => '+ members[role].name +',
        age => ' + members[role].age'
        )
    }
  }
  printMembers()
  /*
    role => aunt, name => chloe, age => 30
    role => niece, name => lyn, age => 3
    role => dog, name => dangdangi, age => 10
  */

  let members = family.members
  members['nephew'] = {age: 3, name: 'hyun'}
  members.niece = {age: 5, name: 'lyn'}
  delete members.aunt
  delete members['dog']
  printMembers()
  /*
    role => niece, name => lyn, age => 5
    role => nephew, name => hyun, age => 3
  */
```
- 해설
  * 1. 객체의 속성에 접근하는 방법은 <b>객체의 우측에 콤마(.)를 두고, <br/>
      그 다음에 객체 속성으로 정의된 키 이름을 작성</b>하면 된다.
    2. 대괄호<b>[""]</b>안에 키 값을 문자열로 작성하는 방법도 있으나, <br/>
      <b style="color: coral">콤마로 속성에 접근하는 것이 선호되는 방식</b>이다.
    3. 그 외 객체에 속성을 추가/수정/삭제하는 방법 역시 콤마와 대괄호를 사용하는 방식과 유사하다.
  
  * for-in으로 member 객체를 순환한다. members의 속성을 하나씩 접근할 때마다 name과 age 속성값을 반환하여 출력한다.

  * `members['nephew']  {age: 3, name: 'hyun'}`는 객체에 새로운 속성을 추가하는 방법이다. <br/>
    키가 'nephew'이고 값은 {age: 3, name: 'hyun'}인 속성을 members에 추가한다.

  * `members.niece = {age: 5, name: 'lyn'}`는 'niece'라는 키 속성은 members 객체 변수 안에 원래 있는 값이다. <br/>
    존재하는 속성 값을 수정하기 위해 콤마.로 접근하여 새로운 값 {age: 5, name: 'lyn'}을 할당한다. 
    
  * 객체의 특정 속성을 삭제하는 방법은 키워드 <b style="color: coral">delete</b>를 앞에 두고 특정 객체의 속성을 뒤에 작성하면된다.
<br/><br/>

### 30. ES6의 향상된 객체 문법 알아보기(단축 속성명)
- 단축 속성명은 변수가 미리 준비되어 있는 경우 활용 가능하며, <b style="color: coral">변수명으로 속성의 키와 값을 한번에 정의</b> 할 수 있다. 
```js
  let address = 'Seoul',
      members = {},
      addFamily = function(age, name, role) {
        this.members[role] = {age, name}
      }
  let getHeadcount = function(){
        return Object.keys(this.members).length
      }

  let family = {address, members, addFamily, getHeadcount}

      family.addFamily(30, 'chloe', 'aunt')
      family.addFamily(3, 'lyn', 'niece')
      family.addFamily(10, 'dangdangi', 'dog')
      console.log(family.getHeadcount())  // 3
```
- 해설
  * 각 속성의 키 이름을 변수명으로 정의하고, 값을 해당 변수에 할당한다.<br/>
    따라서 변수 address, members, addFamily, getHeadcont에 해당하는 속성값이 할당된다.
  * family 객체 리터럴을 선언한다. 정의한 변수들을 중괄호 {}안에 넣는다.<br/>
    이 떄 {변수명}으로 정의한 객체는 <b style="color: coral">{변수명 : 변수값}</b>으로 정의된 것과 동일하다.<br/>
    단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용 가능하다. 
<br/><br/>

### 31. ES6의 향상된 객체 문법 알아보기 - 속성 계산명
- 속성 계산명(Computed Property Name)은 속성 이름을 정의하는 다른 방법이다.<br/>
  대괄호[]안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성할 수 있다. 
  ```js
    let obj = {}
    for (let i = 0; i < 4; i++) {
      obj['key' + i] = i
    }
    console.log(obj)

    let profile = 'chloe:30'
    let person = {
      [profile] : true,
      [profile.split(':')[0]]: profile.split(':')[1]
    }
    console.log(person)
    /*
      {key0: 0, key1: 1, key2: 2, key3: 3}
      {chloe:30: true, chloe: '30'}
    */
  ```
  - 해설
    * 객체 obj에 속성을 추가한다. 속성 접근자[]를 활용해, 계산된 속성명을 정의한다.<br/>
    이 때, 속성명은 key0, key1, key2, key3으로 숫자가 증가하도록 정의한다.
    * 객체 obj를 콘솔 출력한다.
    * 변수 profile에 'chloe:30' 문자열을 대입한다.
    * 객체 person 리터럴 정의할 때 속성 계산명을 활용한다. <br/>
      profile 문자열을 키값으로 하는 속성을 정의한다. <br/>
      속성 접근자 구문과 동일한 대괄호 []를 사용하고 그 안에 profile 변수를 그대로 넣으면 해당 변수값이 속성명으로 정의된다. 
    * `profile.split(':')[0]`은 문자 ':'를 중심으로 profile 문자열을 나누고,<br/>
      나눠진 부분 중 왼쪽 문자열 chloe를 가져온다.<br/>
      `profile.split(':')[1]`은 오른쪽 문자열 30을 의미한다.<br/>
      계산된 값이 속성명, 속성값으로 정의되어, 속성 계산된 결과는 chloe : 30이 된다.
  <br/><br/>

### 32. ES6의 향상된 객체 문법 알아보기 - 비구조화 할당
- 비구조화 할당(Destructuring Assignment)이란, <b style="color: coral">배열이나 객체의 값을 새로운 변수에 쉽게 할당</b>한다. 
- ES6 이전에는 변수 하나에 값 하나를 일일히 할당해야 했으나 ES6부터는 비구조화 할당을 통해 손쉽게 값을 할당할 수 있게 되었다.
- 객체 비구조화 할당 -> 중괄호{} 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져올 수 있다.
<br/><br/>

```js
  let obj = {a: 1, b: 2, c: 30 ,d: 44, e: 5}

  let {a, c} = obj
  console.log(`a >>> ${a}`) // a >>> 1
  console.log(`c >>> ${c}`) // c >>> 30

  let {a: newA=10, f:newF= 5} = obj
  console.log(`newA >>> ${newA}`) // newA >>> 1
  console.log(`newF >>> ${newF}`) // newF >>> 5
```
- 해설
  * obj 객체에는 a,b,c,d,e 속성이 정의되어 있다. <br>
    여기서 비구조화를 통해 속성 a와 c속성값을 가져와 변수에 할당한다. <br/>
    중괄호 안에 원하는 속성명을 넣으면, obj 객체를 비구조화하여 해당 속성명에 따른 값을 각 변수에 할당한다.
  * 기존 속성명의 값을 가져와서 새로운 변수명으로 할당하여 정의할 수 있다.<br/>
    <b style="color:coral">구분자 : 를 사이에 두고, 왼쪽에 객체의 속성명을, 오른쪽에는 새로운 변수명</b>을 넣으면 된다.<br/>
    또한 기본값을 설정할 수 있다. 예를 들어 `a:newA=10`은 객체의 <b style="color:coral">a 속성값을 새로운 변수 newA로 다시 할당하되, undefined로 값이 없는 경우에는 기본값 10을 할당</b>한다는 의미다.<br/>
    따라서 <b style="color:coral">f속성은 없는 속성이기 때문에, newF 변수에는 기본값 숫자 5가 할당</b>된다.

- 배열 비구조화 할당은 객체 비구조화 방식에서 중괄호를 대괄호[]로 바꾸면 된다.<br/>
  객체의 경우와 비슷하게 여러 값을 한 번에 가져올 수 있다.
```js
  let arr = [1, 2, 30, 44, 5]

  let [b, c, ...rest] = arr
  console.log(`0) b >>> ${b}`)  // 0) b >>> 1
  console.log(`0) c >>> ${c}`)  // 0) c >>> 2
  console.log(`0) rest >>> ${rest}`)  // 0) rest >>> 30, 44, 5

  let [a=10, f=9] = [1]
  console.log(`1) a >>> ${a}`)  // 1) a >>> 1
  console.log(`1) f >>> ${f}`)  // 1) f >>> 9

  [a, f] = [f, a]
  console.log(`2) a >>> ${a}`)  // 2) a >>> 9
  console.log(`2) f >>> ${f}`)  // 2) a >>> 1

  function getArr() {
    return [1, 2, 3, 4, 5, 6]
  }

  [a, , , , , f] = getArr()
  console.log(`3) a >>> ${a}`)  // 3) a >>> 1
  console.log(`3) f >>> ${f}`)  // 3) f >>> 6
```
- 해설
  * arr 배열에 숫자형 요소들이 5개 대입되어 있다. 배열을 비구조화 할 때는 대괄호를 사용하며 대괄호 안의 변수에 배열 요소가 순서대로 하나씩 할당된다. <br/>
  따라서 b 변수에는 첫번째 요소 1, c 변수에는 두번째 요소 2가 대입된 것이다. 나머지 변수 지시자 ...를 활용하면 rest 변수 처럼 나머지 값들을 한꺼번에 따로 담을 수 있다.<br/>
  따라서 rest 변수에는 b,c 값 이외의 나머지 [30, 44, 5]이 할당된다.
  * <b style="color: coral">배열 비구조화에서도 기본값 설정이 가능</b>하다. <br/>
    배열값 [1]을 비구조화 하면 a변수에 첫번째 요소 1이 할당된다. <br/>
    두번째 f변수에는 해당 순서의 요소가 없으므로 기본값 9가 할당된다. 
  * <b style="color: coral">함수에서 반환된 배열값을 비구조화할 수 있다.</b><br/>
    <b>일부 배열 요소를 무시하고, 원하는 요소만 가져오는 것도 가능하다.</b><br/>
    `[a, , , , , f]`중간에 4개 요소를 반환받고 싶지 않을 때 해당 위치의 요소는 콤마 사이에 공백으로 비워두면 된다.<br/>
    따라서 첫번째 요소 1이 a변수에 할당되고, 마지막 요소 6이 f변수에 할당된다. 
<br/><br/>

### 33. 심볼형 이해하기
```js
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3)); // true
console.log(Symbol('symbol') === Symbol('symbol')); // false
console.log(Symbol() === Symbol()); // false
console.log(typeof Symbol()); // symbol

const nationility = Symbol('nationility');
const user = {
  name : 'jay'
}
user[nationiliity] = 'korean'
console.log(user[nationility]); // korean

for (let key in user) }{
  console.log(key)  // name
}
console.log(Object.keys(user))  // ["name"]
console.log(Object.getOwnPropertyNames(user)) // ["name"]
console.log(JSON.stringify(user)) // {"name" : "jay"}

const symbolProperties = Object.getOwnPropertySymbols(user)
console.log(symbolProperties) // [Symbol(nationility)]
console.log(user[symbolProperties[0]])  // korean
```
  - 해설
    * 심볼(Symbol)은 함수 호출을 통해 생성 가능하다. <br/>
      <b style="color: coral">new 키워드를 통한 호출(new Symbol())을 사용할 경우 에러가 발생.</b>
    * Symbol을 함수 호출 시 값을 전달 할 수 있는데, 이 값은 디버깅 용도이며<br/>
      고유한 Symbol 값은 만들어지지 않습니다.<br/>
      즉, <b style="color: coral">Symbol()은 늘 고유한 값을 반환</b>한다. 그래서 각각의 Symbol은 false로 서로 다르다고 나타남.
    * <b style="color: coral">심볼은 객체의 키로 사용 가능</b>하다. 객체의 키로 사용하기 위해선 <b style="color: coral">Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때마다 사용해야 한다.</b>
    * <b style="color: crimson">심볼이 객체의 키로 사용되면 for-in 루프를 통해 심볼 키를 가져올 수 없다.</b>
    * <b style="color: coral">그렇기 때문에 Object의 키를 반환하는 메소드를 사용해도 가져올 수 없고, JSON 문자열로 만들 때에도 해당 키는 빠지게 된다.</b>
    * 심볼을 객체의 키로 사용할 때 해당 키를 가져올 방법이 없는 것은 아니다. <br/>
      `Object.getOwnPropertySymbols` <b style="color: crimson">메소드를 통해 해당 객체의 키에 해당하는 심볼들을 가져올 수 있다.</b> 
<br/><br/>

### 34. 함수 이해하기
```js
  function 함수 이름 (매개변수 목록) {
    함수 실행부
  }
```
- 함수 형태를 표현하면 크게 4가지로 구분된다.
1. <b style="color: coral">키워드function</b><br/>
  함수 자료형은 키워드 function을 앞에 붙여 함수로 정의한다. <br/>
  그러나 ES6부터는 function 없이도 함수로 정의할 수 있다.
2. <b style="color: coral">함수 이름</b><br/>
  function과 소괄호()사이에 이름을 정의하며, 이를 통해 함수를 식별할 수 있다.<br/>
  더 나아가 <b>함수 내에서 재귀로 자기 자신을 참조할 수도 있다.</b><br/>
  이름을 정의하지 않은 함수도 존재한다. 이를 익명함수라고 부른다.
3. <b style="color: coral">매개변수 목록</b><br/>
  함수 이름 옆에 소괄호 ()로 둘러싸인 부분이 있다. <b style="color: coral">함수 선언 시 매개변수 목록을 정의하면 함수를 호출할 때 인자값을 전달 할 수 있다.</b><br/>
  물론 함수 안에서 전역 변수를 가져와 처리할 수도 있지만, 되도록 매개변수를 통해 값을 전달하는 것을 권장한다. 
4. <b style="color: coral">함수 실행부</b><br/>
  함수가 호출되면 실행되는 몸통부로 중괄호 {} 안에 다발의 코드를 작성한다.
<br/><br/>

- JS에서는 함수를 만드는 데 2가지 다른 방식으로 나타낼 수 있다.
1. 함수 표현식
2. 함수 선언문

```js
  /* 1. 함수 표현식 */
  let greeting_expression = function(name) {
    console.log('Hi, ' + name)
  }

  /* 2. 함수 선언문 */
  function greeting_declaration(name) {
    console.log('Hi, ' + name)
  }

  greeting_expression('Chloe')  // Hi, Chloe
  greeting_declaration('Chloe') // Hi, Chloe
```
- 해설
  * 함수 표현식은 함수를 정의하면서 동시에 변수 greeting_expression에 바로 할당한다.<br/>
    다시 말해, greeting_expression 변수에 함수 리터럴을 할당한다. 
  * 함수 선언문은 일반적인 다른 개발 언어와 비슷한 함수 선언 방식으로, greeting_declaration이라는 함수 이름으로 선언한다. 
  * 함수를 호출할 때는 함수 리터럴이 할당된 변수 이름 또는 함수 선언문의 함수 이름이 필요하다.<br/>
    <b style="color: coral">주의할 점은 함수 표현식에서 정의한 함수 이름은 해당 함수 안에서만 호출이 가능하다.</b><br/>
    그리고 선언된 함수가 매개변수를 필요로 하는 경우 소괄호 ()안에 전달할 값을 나열한다. <br/>
    함수 표현식과 함수 선언문은 정의한 방식이 다르지만, 실행부 코드와 매개변수 목록이 같다.<br/><br/>
- 많은 양의 코드를 연관 있는 것끼리 정리해서 함수로 만들면 코드를 보기 좋게 정리할 수 있다.
- 또는 반복 사용하는 코드를 함수로 만들어 필요할 때마다 호출 할 수 있다. 
- 중복 코드를 줄이고, 코드의 재사용이라는 장점을 이용해야 한다. 
<br/><br/>

### 35. 예외 처리하기
- JS는 코드를 실행하다가 에러가 발생하면 그 즉시 중단된다. <br/>
  이를 대비해서 예외 처리는 반드시 필요하다. 자바스크립트에서 사용할 수 있는 예외 처리 방법에는 <b style="color: coral">throw 문</b>과 <b style="color: coral">try-catch-finally 문</b>이 있다.
- 예외 처리 시 에러 종류는 크게 두가지로 나뉜다. 
  1. 예상치 못한 에러
  2. 개발자가 의도한 에러
- 여기서 개발자가 의도한 에러란, 코드에서 잘못될 가능성을 예상하고 발생시키는 에러를 의미한다.<br/>
  <b style="color: coral">throw문은 고의로 에러를 발생시켜 예외 상황을 알리는 역할을 한다.</b> <br/>
  그리고 throw문이 실행되면 살행되고 있던 블록을 빠져나간다. <br/><br/>

```js
  function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.'
    console.log('숫자형 값으로 확인되었습니다.')
  }

  checkNumber(100)  // 숫자형 값으로 확인 되었습니다.
  checkNumber('Wrong type')
  /*
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.'
      ^
    유효하지 않은 값입니다.
  */
  console.log('완료')
```
- 해설
  * 숫자형 값 여부를 확인하는 함수를 선언한다.
  * typeof val을 통해 숫자형 값이 아닌 경우, throw문을 통해 함수 블록을 빠져나간다.
  * 숫자형이 확인되면 출력되는 문장
  * 숫자형 값 100을 넣으면 3라인이 출력된다.
  * 문자형 값 'Wrong type'을 넣으면 typeof val 결과값은 string을 반환한다. <br/>
    따라서 2라인 조건문 아래 throw문이 실행된다.
  * 7라인에서 에러가 발생하여 예제 코드 실행이 중단된다. <br/>
    마지막 8라인은 실행되지 않는다. 
<br/><br/>

- throw 문은 예외 상황을 미리 파악하고 에러를 발생시켜 이후 코드가 실행되지 않도록 합니다. <br/>
  이는 결국 에러를 발생시킨 것이므로, 프로그램이 중단되는 것은 막을 수 없습니다. <br/>
  이 에러 발생에 대한 대응책이 바로 <b style="color: coral">try-catch-finally 문이다. 그리고 try-catch-finally 문을 통해 앞에서 설명한 예상치 못한 에러와 개발자가 의도한 에러 모두 대응 가능하다. </b>
- try-catch-finally 문은 try 블록 안에서 발생된 에러를 잡아내고, catch 블록으로 제어권을 넘깁니다. try 블록에서 발생된 에러 정보는 catch 문의 변수로 전달되기 때문에, 개발자는 프로그램 종료 없이 어떤 에러가 발생했는지 확인할 수 있습니다. finally 블록은 에러 발생 여부와 상관없이 실행되는 블록이다.<br/>
  예를 들어, 이를 활용하면 파일 읽기/쓰기를 할 때 에러가 발생되더라도 항상 파일 close 구문을 실행할 수 있다. 

```js
  function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.'
    console.log('숫자형 값으로 확인되었습니다.')
  }

  try {
    checkNumber(100); // 숫자형 값으로 확인되었습니다.
    checkNumber('Wrong type')
  } catch (e) {
    console.log(`에러가 발생했습니다. >>> ${e}`)  // 에러가 발생했습니다. >>> 유효하지 않은 값입니다.
  } finally {
    console.log('완료') // 완료
  }
```
- 해설
  * 8라인에서 에서가 발생한다. 그러나 try문의 블록 안에 있기 때문에 발생된 에러 정보는 catch 블록으로 전달된다.
  * 변수 e에 에러 정보가 전달된다. 여기에는 2라인에서 throw 문의 문자열 '유효하지 않은 값입니다.'가 대입되어 있다. 콘솔로 에러 정보를 출력한다.
  * finally 블록은 6~10라인의 코드가 모두 처리되고 난 뒤 마지막에 실행된다. 에러 여부와 상관없이 항상 실행되기 때문에 '완료' 문자열이 출력된다. 
<br/><br/>

### 36. arguments 객체 이해하기
- JS 함수는 매개변수를 가진다. 여기서 매개변수와 같이 사용되는 용어가 있는데,<br/>
  바로 <b style="color: coral">전달 인자(argument)</b>이다. 매개변수가 함수 선언 시 작성되는 변수라면, <b style="color: coral">전달 인자는 함수가 호출될 때 전달되는 값이다.</b>
- <b style="color: coral">JS는 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않는다.</b><br/>
  그래서 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달할 수 있다.<br/>
  매개변수 외에 함수에서만 사용가능한 특별한 객체를 제공한다. 바로 argumnets 객체
<br/><br/>

```js
  function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i]
    }
    console.log(arguments instanceof Array) // false
    return total
  }

  let sumOf1to3 = sum(1,2,3)
  console.log(sumOf1to3)  // 6

  function testArg() {
    let newArr = Array.prototype.slice.call(arguments);
    console.log(newArr) // ["a", "b"]
    console.log(newArr.indexOf('b'))  // 1
    console.log(arguments.indexOf('b')) // function-arguments.js::19 Uncaught TypeError: arguments.indexOf is not a funtion
  }

  testArg('a', 'b')
```
  - 해설
    * sum 함수를 정의하면서 내부에 arguments 객체를 통해 전달된 인자의 합을 반환한다. <br/>
      <b style="color: coral">arguments 객체는 배열과 유사하게 인덱스를 통해 접근할 수 있다. 하지만, length 속성 외에는 배열의 어떠한 속성과 메소드를 가지고 있지 않다. </b>
    * instanceof 연산자를 이용하여 arguments 객체가 배열이 아닌 것을 확인할 수 있다.
    * sum 함수는 매개변수를 정의하고 있지 않지만, 전달 인자로는 1,2 그리고 3을 전달하고 있다.
    * arguments 객체를 배열로 바꾸기 위해 배열의 프로토타입에 정의된 slice 메소드를 호출한다. 이렇게 하면 arguments 객체의 요소들을 복사하는 새로운 배열이 만들어진다.
    * 배열이기 때문에 indexOf 메소드를 사용하여 문자열 b의 인덱스를 반환한다.
    * arguments 객체는 배열이 아니기 때문에 에러가 발생한다.
<br/><br/>

### 37. 함수 기본 매개변수 처리하기
- ES6에 새롭게 추가된 기본 매개변수는 매개변수를 정의할 때 <b style="color: coral">기본으로 할당될 인자값과 함께 작성하는 매개변수를 말한다.</b> <br/>
  값을 할당하는 연산자인 =를 이용하여 정의하게 된다.

```js
  function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height} 차트를 그립니다.`)
  }
  drawChart(100)  // 100 X 400 차트를 그립니다.
  drawChart() // 200 X 400 차트를 그립니다.

  function drawChart2(width = 200, height = width / 2 ) {
    console.log(`${width} X ${height} 차트를 그립니다.`)
  }
  drawChart2(300) // 300 X 150 차트를 그립니다.
  drawChart2(); // 200 X 100 차트를 그립니다. 
```
  - 해설
    * 1~3 drawChart를 정의할 때 매개변수로 width와 height을 선언한다. 이때 전달 인자가 없을 때 기본으로 할당될 값으로 200과 400을 함께 작성한다.
    * 4 drawChart를 호출할 때 인자로 100을 전달한다. width에는 100이 할당되지만 height에는 전달 인자가 없어 기본값인 400이 할당된다.
    * 5 전달 인자 없이 drawChart를 호출한다. 그래서 width와 height에는 기본값인 200과 400이 할당된다.
    * 7~9 drawChart2는 width와 height을 기본 매개변수로 정의하는데, height의 기본값으로 앞의 매개변수인 width를 참조하여 작성한다. width로 전달되는 값의 2로 나눈 값이 height의 기본값이 된다. 
    * 10 drawChart2를 호출할 때 인자로 300을 전달한다. width에는 300이 할당되지만 height에는 전달인자가 없어 앞의 width를 2로 나눈 값인 150이 할당된다. 
    * 11 전달 인자 없이 drawChart2를 호출한다. 그래서 width와 height에는 기본값인 200과 200을 2로 나눈 값인 100이 할당된다. 
<br/><br/>

### 38. 함수 나머지 매개변수 이해하기
- ES6에서 새로 추가된 나머지 매개변수는 매개변수를 정의할 때 정해지지 않은 매개변수들을 정의할 수 있게 한다.
- argument 객체와 유사하나 argument 객체는 함수에 전달되는 모든 전달 인자를 포함하는 반면에, <b style="color: coral">나머지 매개변수는 정해지지 않은 나머지를 의미한다.</b>
- 나머지 매개변수는 argument 객체와 다르게 <b style="color: coral">매개변수를 작성하는 곳에서 작성하고, 다른 매개변수와의 차이점을 두기 위해 ...연산자와 함께 작성한다.</b>

```js
  function(parameter, ...restParameter) {
    // arguments 객체는 나머지 매개변수와 다르게 함수 몸통에서만 사용한다.
  }
```

- arguments 객체와 나머지 매개변수와의 <b style="color: coral">가장 큰 차이점은 arguments 객체는 배열이 아니지만 나머지 매개변수는 배열이라는 점이다.</b>
<br/><br/>

```js
  function sum(...args){
    let total = 0;
    for(let i = 0; i < args.length; i++) {
      total += args[i]
    }
    console.log(args.indexOf(1))  // 0
    return total;
  }
  console.log(sum(1, 2, 3)) // 6

  function sum2(a, b, ...others) {
    let total = a + b;
    for (let i = 0; i < others.length; i++) {
      total += others[i]
    }
    return total
  }
  console.log(sum2(1, 2)) // 3
  console.log(sum2(1, 2, 3, 4)) // 10
```
- 해설
  * 1~9. sum 함수를 나머지 매개변수로 정의하고 있다. 나머지 매개변수인 args는 배열이기 때문에 [인덱스]를 통해 접근이 가능하고 indexOf와 같은 메소드를 사용할 수 있다.  <br/>
  9라인에서 전달한 1, 2, 3 전달 인자들은 args 배열이 되고 배열을 순차적으로 접근하여 total 변수값과 더 하면서 그 결과를 바로 대입한다. 마지막으로 전체 합계인 total을 반환한다. 
  * 11~17. sum2 함수는 sum 함수와 다르게 a와 b 매개변수를 가지고 있다. 그리고 두 매개변수 외에 others라는 나머지 매개변수를 정의하고 있다.
  * 18 . sum2 함수 호출 시 a와 b 매개변수에 1과 2로 인자들을 전달하고 있다.
    이때 others는 빈 배열이 된다.
  * 19 . sum2 함수 호출 시 a와 b 두 매개변수보다 더 많은 인자가 전달되기 때문에 1과 2는 각각 a와 b에 전달되고 나머지 3과 4는 others 나머지 매개변수의 배열의 요소로 전달된다.
<br/><br/>

### 39. 스코프 이해하기
- 스코프는 <b style="color: coral">유효 범위로써 변수와 매개변수가 어디까지 유효한지를 나타냅니다.</b><br/> 
예를 들어, 코드에서 a라고 작성했을 때, a라는 식별자가 어디를 참조할지, 실제 값이 무엇인지를 찾을 때 스코프를 활용하여 찾게 된다.
- JS는 기본적으로 <b style="color: coral">전역</b>과 <b style="color: coral">함수 단위</b>로 스코프를 생성한다. <br/>
  <b style="color: coral">함수 안에서 선언된 변수는 함수 블록 안에서만 접근이 가능하다. 그리고 전역에 선언한 변수들은 코드 어디에서든 접근이 가능하다.</b> 

```js
  let a = 10;
  console.log(a)  // 10

  function print() {
    let b = 20;
    if(true) {
      let c = 30
    }
    console.log(c)  // 30
  }

  print()
  console.log(b)  // ReferenceError: b is not defined
```
- 해설
  * 1 : 변수 a를 전역으로 선언하고 10을 대입한다.
  * 2 : a에 해당하는 값을 찾아 콘솔에 출력한다. 이때 전역 스코프에서 a 식별자에 연결된 10을 찾아서 출력한다. 
  * 4 : print라는 이름으로 함수를 선언한다.
  * 5 : 함수 내부에 변수 b를 선언하고 20을 대입한다.
  * 6~9 : if문 안의 블록에서 변수 c를 선언하고 블록 밖에서 c를 출력한다. <br/>
    <b style="color: coral">변수 c는 if문 안의 블록에서 선언된었지만 let 키워드로 선언한 변수들은 모두 함수 스코프에 정의된다. 그래서 print 함수 내 어디에서든 변수 c에 접근할 수 있다.</b>
  * 13 : print 함수에서 선언한 변수 b에 접근하려 한다. 함수 스코프에 정의된 변수 b는 해당 함수 내에서만 접근이 가능하기 때문에 함수 밖에서는 접근할 수 없고, 전역에도 b라는 이름으로 정의된 겂이 없기 때문에 ReferenceError가 출력된다.
<br/>
-  스코프는 일반적으로 <b style="color: coral">렉시컬(Lexical) 스코프</b>와 <b style="color: coral">다이나믹(Dynamic) 스코프</b>로 분류된다. <br/>
  <b style="color: coral">렉시컬 스코프는 코드를 작성하는 시점에 스코프가 결정되어진다고 해서 정적 스코프라고도 부른다.</b><br/>
  <b>JS는 대표적인 렉시컬 스코프다.</b>
<br/><br/>

```js
  let a = "global";

  function print1() {
    console.log(a)
  }

  function print2() {
    let a = "local"
    print1()
  }

  print1()  // global
  print2()  // global
```
- 해설
  * 위의 코드를 실행하면 모두 global이 출력된다. <b style="color: coral">만약 JS가 다이나믹 스코프였다면 global 다음에 local이 출력되었을 것이다.</b>
  * 1~5 : 전역으로 변수 a, print1 함수를 선언한다. 전역 변수 a에는 문자열 global을 대입한다.
  * 7~10 : print2 함수 내부에 a 이름으로 지역변수를 선언하고 문자열 local을 대입한다. 내부에서 전역에 정의된 print1 함수를 호출한다.
  * 12 : print1 함수를 호출한다. print1 함수 블록이 실행되는데 a에 해당하는 값을 찾아 콘솔에 출력하게 된다. a는 print1 함수 스코프에서 찾을 수 없어 전역에서 찾아 문자열 global을 출력하게 된다. 
  * 13 : print2 함수를 호출한다. 하지만 함수 내부에서 print1 함수를 호출하고 있기 때문에 print1 함수 블록이 실행된다. 이때 a라는 이름을 전역에서 정의된 a로 찾을 건지 print2 내부에서 정의된 a로 찾을 건지가 렉시컬 스코프와 다이나믹 스코프에 따라 다르게 해석된다. <br/>
  JS는 렉시컬 스코프이기 때문에 코드를 작성하는 시점에 확정된다. 그래서 print1이 작성될 때에는 이미 전역 a를 참조하고 있기 때문에 문자열 global이 출력된다.
  <br/><br/>

  ### 40. 함수 호이스팅 이해하기
  - <b style="color: coral">JS에서는 함수를 선언하기 전에 호출이 가능하다.</b> 이러한 현상을 호이스팅이라고 한다. <br/>
    호이스팅을 직역하면 '끌어 올리기'인데 <b style="color: coral">함수가 실제 호출하기 이전으로 끌어올라간 것처럼 동작하기 때문이다.</b>
<br/><br/>

```js
  hello() // 안녕하세요.
  function hello(){
    console.log('안녕하세요.')
  }
```
<br/><br/>

```js
  hello2()  // Uncaught TypeError: hello is not a function
  let hello2 = function(){
    console.log("안녕하세요")
  }
```
- 해설
  * 1 : TypeError 에러가 발생한다. 에러의 종류가 TypeError라는 점이 조금 의외인데, 실제로는 hello2 이름으로 선언된 변수는 호이스팅이 이루어졌고, 여기에 undefined가 할당된다.<br/>
  그래서 undefined는 호출할 수 없기 때문에 TypeError가 발생한 것이다. 만약 호이스팅이 이루어지지 않았다면 ReferenceError로 hello가 선언되지 않았다는 에러가 나와야 한다.
<br/><br/>
- 호이스팅은 JS의 코드를 해석하고 실행하는 방식 때문에 나타난다.<br/>
  간단하게 생각하면 JS는 코드를 해석하는 단계와 실행하는 단계로 나뉘고, 해석하는 단계에서 선언 문장을 초기화하면서 스코프를 형성하고 실행하는 단계에서 값을 할당하거나 계산을 하는 행위를 한다고 볼 수 있다.
- 두 번째 코드를 예들 들면, 해석 단계에서 2라인의 hello2 변수를 선언하는 문장이 먼저 초기화를 하여 스코프에 hello2라는 이름에 undefined라는 값을 할당했다가 실행 단계에서 1라인의 hello2()를 호출하는 것이다. 
<br/><br/>

### 41. let으로 변수 선언하기
- ES6가 나오기 전까지 변수는 var 키워드로만 정의할 수 있었다.<br/>
  하지만 ES6에서 <b style="color: coral">let 키워드가 나오면서 변수 선언 시 변수의 유효 범위를 블록 범위로 지정할 수 있게 되었다.</b>

```js
  if(true) {
    var functionScopeValue = 'global'
    let blockScopeValue = 'local'
  } 
  console.log(functionScopeValue) // global
  console.log(blockScopeValue)  // ReferenceError
```
  - 해설
    * 1~4 : if 문의 블록 안에 두 변수를 정의한다. 하나는 var 키워드로 정의하고 다른 하나는 let 키워드로 정의한다. 
    * 5 : var 키워드로 정의한 functionScopeValue 변수는 함수 단위의 유효 범위를 가지게 되어 if 문의 블록에서 정의하여도 블록 밖에서도 접근이 가능하다.
    * 6 : let 키워드로 정의한 blockScopeValue 변수는 블록 단위의 유효 범위를 가지게 되어 if 문의 블록 밖에서 접근할 경우 ReferenceError가 발생한다. 

```js
  let value = "바깥값"
  if (true) {
    console.log(value)
    let value = "안쪽값"
  } // Uncaught ReferenceError: value is not defined
```
  - 해설
    * 1~5 : let으로 선언한 변수는 호이스팅에서 설명한 것과 동일하게 블록 단위로 일어난다. 하지만 var과 다르게 undefined 값이 할당되기보다는 블록 시작부터 선언이 이루어진 라인까지 일시적으로 접근을 막는다. 만약 4라인이 없다면 전역에서 정의된 value를 참조하여 "바깥값"이 출력된다. 하지만 if 블록 안에서 let으로 변수를 정의하였기 때문에, value는 if 블록문 안에 위쪽으로 호이스팅되어 실제 let으로 선언이 이루어지기 전까지 일시적으로 접근이 안되는 영역을 만들고 그 안에서 접근을 하게 되면 에러가 발생한다.
<br/><br/>

### 42. const로 상수 선언하기
- ES6에서 추가된 const 키워드는 let 키워드와 마찬가지로 블록 단위로 스코프를 정의할 수 있습니다. 하지만 let과의 큰 차이점은 선언 시 값을 할당해야 하고 이후에 재할당을 할 수 없다.
```js
  const URL = 'http://js.com'
  URL = 'http://js.com'

  if(true) {
    const URL2 = 'http://js.com'
  }

  console.log(URL2) //
```
  - 해설
    * 2 : const로 정의된 URL 상수에 새로운 문자열을 할당하면 Uncaught TypeError: Assignment to constant variable. 에러가 발생한다. 그리고 <b style="color: coral">const는 관례적으로 변하지 않는 값을 정의하기 때문에 대문자로 작성한다.</b>
    * 4~8 : if 문 <b style="color: coral">블록 안에서 const로 정의된</b> URL2 <b style="color: coral">변수는 블록 밖에서 접근할 경우 에러가 발생한다.</b><br/> 
    const 키워드로 정의된 상수에 객체를 할당하면 불변 객체(Immutable Object)가 되지는 않는다. 불변 객체는 정의된 후에 그 상태를 바꿀 수 없는 객체를 의미한다.</br>
    
```js
  const CONST_USER = {name: 'jay', age: '30'}
  console.log(CONST_USER.name, CONST_USER.age)  // jay 30
  CONST_USER.name = 'jay2'
  CONST_USER.age = 31
  console.log(CONST_USER.name, CONST_USER.age)  // jay2 31
  CONST_USER = {name: 'bbo'}  // Uncaught TypeError: Assignment to constant variable
```   
  - 해설
    * 1~5 : const로 정의된 CONST_USER는 불변 객체가 아니라서 name 속성에 다른 값을 할당할 수 있다. 마찬가지로 age 속성도 변경 가능하다. 객체의 내부 상태가 변경 가능하기 때문에 const로 배열을 선언하여도 새로운 요소를 추가하거나 변경할 수 있다.
    * 6 : const로 정의되었기 때문에 재할당만 되지 않는다. 즉 <b style="color: coral">새로운 객체로 할당은 못하고 객체 내부의 상태만 변경할 수 있다.</b>
<br/><br/>

### 43. 스코프 체인 이해하기
- 스코프 체인은 문자 그대로 스코프가 연결되어 있음을 나타낸다. JS에서 스코프 체인을 이해하기 위해서는 <b style="color:coral">실행 컨텍스트</b>(Execution Context)와<b style="color:coral">렉시컬 환경</b>(Lexical Environment)에 대해 먼저 알아야 한다.
- <b style="color: coral">실행 컨텍스트</b>는 코드가 실행되기 위해 필요한 정보를 가지고 있다. 이 <b style="color: coral">실행 컨텍스트는 실행 가능한 코드가 실행될 때 생성된다.</b> 대표적인 실행 가능한 코드로는 <b style="color: coral">전역 코드</b>와 <b style="color: coral">함수 코드</b>가 있다. 그 외에 <b style="color: coral">eval</b>과 <b style="color: coral">모듈 코드</b>도 있다.
- 처음에는 전역 코드가 먼저 실행된다.<br/>
  이때 전역 컨텍스트를 만들고 전역 코드를 순차적으로 평가한다.<br/> 
  그러다가 함수가 호출문을 만나면 새로운 실행 컨텍스트가 만들어지면서 해당 함수 실행부의 코드를 순차적으로 평가한다.<br/>
  이 때 스택(Stack)을 이용해 실행 컨텍스트를 관리하게 되는데, <br/>
  새로운 실행 컨텍스트가 생성되면 스택에 쌓고 실행 중인 코드가 종료되면 해당 실행 컨텍스트를 스택에서 제거한다. <br/>

```js
  let person = 'harin'

  function print() {
    let person2 = 'jay'

    function innerPrint() {
      console.log(person);
      console.log(person2);
    }
  
  innerPrint();

  console.log('print finisihed')
  }

  print()
  /**
   * harin
   * jay
   * print finished
  */
  console.log('finished') // finished
```   
  - 해설
    * 16문장 전까지 전역실행 컨텍스트
    * 16문장에서 print 실행컨텍스트 생성
    * 4~11문장까지 실행 후 innerPrint 실행 컨택스트 생성
    * 13문장 print 실행 컨택스트 실행(innerPrint 실행 컨텍스트 삭제)
    * 17문장 전역 실행 컨택스트 실행(print 실행 컨텍스트 삭제)
<br/><br/>

  - 실행 컨텍스트는 렉시컬 환경을 가지고 있는데, 렉시컬 환경은 환경 레코드(EnvironmentRecord)와 외부 렉시컬 환경(OuterLexicalEnvironment)으로 구성된다. 실행 컨텍스트를 JS 객체 형태로 표현하면 다음과 같다.
```js
  ExcutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {

      },
      OuterLexicalEnvironment: 참조
    }
  }
```
  - 실제 함수와 변수같은 식별자와 그 식별자가 가리키는 값은 키(key)와 값의 쌍으로 환경 레코드(EnvironmentRecord)에 기록된다. <br/>
  그리고 렉시컬 환경은 환경 레코드 외에 자신의 실행 환경을 감싸는 외부 실행 환경에 대한 참조를 가지고 있다.

```js
  // 전역 실행 컨텍스트
  LexicalEnvironment: {
    environmentRecord: {
      person: 'harin',
      print: `<function>`
    }
    outerLexicalEnvironment: null
  }

  // print 실행 컨텍스트
  LexicalEnvironment: {
    environmentRecord: {
      person: 'jay',
      print: `<function>`
    }
    outerLexicalEnvironment: `전역 실행 컨텍스트`
  }

  // inner 실행 컨텍스트
  LexicalEnvironment: {
    environmentRecord: {
    }
    outerLexicalEnvironment: `print 실행 컨텍스트`
  }
``` 
  - 각 실행 컨텍스트는 outerLexicalEnvironment로 체인처럼 연결되어 있다. <br/>
    이렇게 각 렉시컬 환경이 연결되어 있기 때문에 스코프 체인이 형성될 수 있다.
  - 7~8 : 11라인에 의해 innerPrint 함수가 호출될 때 두 변수 person과 person2, 즉 각 식별자는 연결된 값을 자신의 실행 컨텍스트의 렉시컬 환경에서 찾는다.<br/>
    하지만 person과 person2는 innerPrint 함수 내에 선언되지 않았다.<br/> 
    그러면 위 코드 처럼 inner 실행 컨텍스트의 환경 레코드에는 아무런 키-값의 쌍이 없게 된다. 
  - 이렇게 자신의 실행 컨텍스트에 없으면 외부 렉시컬 환경의 참조를 통해 연결된 print 실행 컨텍스트에서 해당 식별자를 찾게 된다.<br/> 
    이떄 person을 print 실행 컨텍스트의 환경 레코드에서 찾아서 "jay"를 출력하게 된다.<br/> 마찬가지로 person2는 전역 실행 컨텍스트까지 가서 찾아 값을 출력한다. 







































