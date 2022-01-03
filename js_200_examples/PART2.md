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
    <br/><br/>

### 44. 클로저 이해하기
```js
  function createCounterClosure(){
    let count = 0
    return {
      increase: function() {  // 클로저
        // 클로저 : "자유 변수에 엮여 있는 함수"로 많이들 표현한다.
        count++
      },
      getCount: function() {  // 클로저
        return count
      }
    }
  }

  const counter1 = createCounterClosure()
  const counter2 = createCounterClosure()

  counter1.increase()
  counter1.increase()
  console.log('conuter1 의 값 : ' + counter1.getCount())  
  // counter1 의 값 : 2
  counter2.increase()
  console.log('counter2 의 값 : ' + counter2.getCount())
  // counter2 의 값 : 1
```
  - 해설
    * 1~2 : createCounterClosure 함수를 정의하고 count 변수에 0을 할당한다.
    * 3~11 : createCounterClosure 함수는 객체를 반환하는데 객체는 increase와 getCount 메소드가 있고, 모두 count 변수에 접근합니다. 
    * 13~14 : createCounterClosure 함수를 호출하고 반환된 객체를 counter1과 counter2에 할당한다.
    * 16~20 : counter1과 counter2 객체의 increase 메소드를 호출하면 2라인에서 볼 수 있는 createCounterClosure 함수 내부의 count 변수에 모두 접근한다. <br/>
    하지만 counter1과 counter2의 getCount를 호출한 결과를 보면 counter1의 메소드들이 가리키는 count와 counter2의 메소드들이 가리키는 count가 다른 값을 가지고 있는 것을 알 수 있다.
    <br/><br/>
  - 위 코드에서 counter1과 counter2의 메소드들이 다른 count에 접근하는 것은 다른 렉시컬 환경의 환경 레코드에서 count에 접근하는 것이다. <br/>
  이러한 현상이 가능한 이유는 바로 클로저 때문.
  - <b style="color: coral">클로저</b>란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말한다.
  - 4라인과 7라인의 increase와 getCount 함수가 정의될 때의 렉시컬 환경은 createCounterClosure 실행 컨텍스트의 렉시컬 환경이다. <br/>
  이 실행 컨텍스트는 13, 14라인에서 각각 생성된다. 그래서 increase 함수와 getCount 함수는 createCounterClosure 실행 컨텍스트의 렉시컬 환경을 기억하고 있는 클로저가 된다.
  - 대체로 실행 컨텍스트가 컨텍스트 스택에서 제거되면 해당 환경은 사라지가 마련인데 위 예제 처럼 클로저가 만들어지면 해당 환경은 사라지지 않는다.<br/>
  왜냐하면 해당 참조가 존재하기 때문이다. (예제는 counter1과 counter2가 전역 변수에 할당되어 참조가 존재한다.)
  <br/><br/>
  - JS는 1급 객체로 취급한다. <b style="color: coral">이는 함수를 다른 함수의 인자로 넘길 수도 있고, <br/>
    return으로 함수를 통째로 반환받을 수도 있다.</b>
  - 최종 반환되는 함수가 외부 함수의 지역변수에 접근하고 있다는 것이 중요하다.<br/>
    이 지역변수에 접근하려면 함수가 종료되어 외부함수의 컨텍스트가 반환되더라도, <br/>
    변수 객체는 반환되는 <b style="color: coral">내부 함수의 스코프체인에 그래도 남아있어야만 접근할 수 있다.</b><br/>
    이것이 바로 클로저다.
  - 쉽게 풀어 말하면, <br/>
    <b style="color: coral">이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.</b>
    <br/><br/>

### 45. 객체 속성 기술자 이해하기
```js
  let user = {
    name: "jeado"
  }
  let desciptor = Object.getOwnPropertyDescriptot(user, 'name')
  console.log(descriptor) // {value: 'jeado', writable: true, enumerable: true, configurable: true }

  let user2 = {}
  Object.defineProperty(user2, "name", {
    value: "jeado", //  값
    enumerable: true, // 나열 가능 여부
    configurable: true, // 속성 기술자의 변경 여부
    writable: false // 값이 변할 수 있는 여부
  })
  console.log(user2.name) // jeado
  user2.name = "bbo"  // jeado
  console.log(user2.name) // name

  let user3 = {
    name: 'jeado',
    toString(){
      return this.name
    }
  }
  Object.defineProperty(user3, "toString", {
    enumerable: false
  })
  for (let key in user3) {
    console.log(key)  // {name: "jeado"}
  }

  let user4 = {}
  Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
  })
  delete user4.name
  console.log(user4)  // Uncaught TypeError: Cannot redefine property: name
  Object.defineProperty(user4, "name", {
    writable: true
  })
```
  - 해석
    * 1~5 : JS의 모든 객체 속성은 <b>자기 자신에 대한 정보를 담고 있는 <b style="color: coral">속성 기술자</b>(Property Descriptor)를 가지고 있다.</b> 이 속성 기술자는 객체로 표현된다.<br/>
    4라인 처럼 <b style="color:coral">Object.getOwnPropertyDescriptor</b>를 통해 속성 기술자 객체를 가지고 올 수 있다.
    * 7~16 : user2 객체를 선언하고 Object.defineProperty를 통해 객체의 속성을 정의한다.<br/>
    1번째 인자는 속성을 정의할 객체이고 2번째 인자는 속성명, 그리고 3번째 인자는 속성 기술자다.  
    * 속성 기술자는 객체로써 다음과 같은 <b style="color: coral">속성</b>을 가진다. <br>
      <b style="color: coral">value</b> : 값을 나타낸다. <br>
      <b style="color: coral">enumerable</b> : for...in 루프나 Object.keys 메소드 같이 속성을 나열할 때 나열 가능여부를 정의한다. false일 경우 나열되지 않는다. <br>
      <b style="color: coral">writable</b> : 값을 변경할 수 있는 여부를 정의한다. false일 경우 값이 변하지 않는다.<br>
      <b style="color: coral">configurable</b> : 속성 기술자를 변경할 수 있는 여부를 정의한다. false일 경우 속성 기술자를 다시 변경할 수 없다.<br>
    * user2 속성 기술자에 writable 속성을 false로 주고 value를 jeado로 주었다. <br>
      그렇기 떄문에 15라인에서 bbo로 값을 재할당해도 콘솔에는 바뀌지 않고 기존 값이 출력된다. 
    * 18~29 : user3 객체에 toString 메소드로 정의하고 속성 기술자를 통해 이 메소드 enumerable을 false로 재정의한다. 그런 후 27~29라인에서 for...in 루프로 모든 속성에 접근하여 속성 이름을 콘솔에 출력한다. <br>
    하지만 toString 속성은 enumerable를 false로 정의하여 출력되지 않는다.
    * 31~40 : user4 객체에 속성 기술자를 통하여 name 속성을 정의하면서 configurable 속성을 false로 하였다.<br>
      configurable이 false라서 delete를 통하여 name 속성을 지우려고 하면 해당 속성이 지워지지 않고 false가 리턴된다. <br>
      37라인에서 지워지지 않은 것을 확인하기 위해 콘솔에 출력하는데, 결과를 보면 이전과 동일하게 name 속성에 jeado가 할당된 것을 확인할 수 있다.<br>
      그리고 새롭게 name 속성을 속성 기술자로 재정의하려면 configurable이 false이기 때문에 에러가 발생하는 것을 확인 할 수 있다. <br><br>
  - Object.defineProperty -> 데이터 정보 정의, 데이터에 접근하는 방법 정의를 할 수 있다. (get, set 함수를 통해 할 수 있다.)
<br><br>

### 46. Get, Set을 통한 속성 접근 관리하기
- 객체의 속성에 접근하여 값을 가져오거나 대입할 때 get 함수와 set 함수를 통해 속성 접근을 관리하는 방법.
<br><br>

```js
  let user = {}
  Object.defineProperty(user, "age", {
    get: function() {
      return this._age
    },
    set: function(age) {
      if (age < 0) {
        console.log('0보다 작은 값은 올 수 없습니다.')
      } else {
        this._age = age
      }
    },
    enumerable: true
  })
  user.age = 10
  console.log(user.age) // 10
  user.age = -1 // 0보다 작은 값은 올 수 없습니다.

  let user2 = {
    get name(){
      return this._name
    },
    set name(val) {
      if (val.length < 3) {
        throw new Error('3자 이상이어야 합니다.')
      }
      this._name = val
    }
  }
  user2.name = 'harin'
  console.log(user2.name) // harin
  user2.name = 'ha' // 3자 이상이어야 합니다. 
```

-  해설
  * 1~14 : 속성 기술자를 통해 user 객체의 age 속성을 정의한다. <br>
    이때 <b>값에 접근하는 방식을 정의하는 객체를 전달하는데 이 객체</b>를 <b style="color: coral">접근 기술자</b>(Accessor Descriptor)라 하고, <b style="color: coral">get</b>과 <b style="color: coral">set</b>을 메소드로 가진다.<br>
    age 속성의 접근 기술자의 <b style="color: coral">get 메소드는 속성에 접근할 때 호출</b>된다. <br>
    그리고 <b style="color: coral">set 메소드는 속성에 값을 대입할 때 호출</b>한다.

  * 3~5 : get 메소드는 속성에 접근할 때 호출된다. <br>
  그래서 user.age에 접근하면 user._age의 결과를 반환한다.

  * 6~11 : set 메소드는 속성에 값을 대입할 때 호출된다. <br>
    그래서 user.age에 값을 할당할 때 0보다 작은 값을 주면 에러 로그를 출력하고 0보다 큰 값을 주었을 때 user 객체의 _age 속성에 값을 대입한다. 

  * 15~16 : user.age 값 10을 대입한다. 그러면 age 속성 접근 기술자의 set 메소드가 호출되고, user 객체의 _age 속성에 값 10이 할당된다.<br> 
  그리고 user.age 결과를 콘솔에 출력하는데 이때 접근 기술자의 get 메소드가 호출되면서 _age 속성값인 10을 반환한다.

  * 17 : user.age에 값 -1을 대입한다. 접근 기술자의 set 메소드가 호출되면서 if(age < 0)에 의해 콘솔에 에러가 출력된다.

  * 19~29 : user2 객체를 정의할 때 name 속성의 접근 기술자를 정의한다. <br>
  객체를 정의할 때 메소드를 정의하는 <b style="color: coral">메소드명 앞에 get과 set으로 각각의 get 메소드와 set 메소드를 정의할 수 있다.</b>

  * 30~32 : user2 객체의 name 속성에 값을 할당할 때 접근 기술자의 set 메소드가 호출된다. <br>
  마지막 라인에서 'ha'룰 할당하면 글자수가 3자 이상이 되진 안항 콘솔에 에러가 출력된다. 

- 속성 이름에 _를 붙이는 것은 암묵적 비공개(Private) 속성임을 나타낸다. <br>
  JS 객체는 속성 접근 제한자가 없어서 모든 속성은 공개(Public)이다. 그래서 대체로 이름 규칙을 통해 비공개임을 나타낸다.
<br><br>

### 47. 화살표 함수 이해하기
- ES6에서는 기존 함수를 간결하게 표현할 수 있고 기능이 개선된 화살표 함수가 추가됨.
- 화살표 함수는 `function` 키워드를 사용하지 않고 화살표 모양의 `=>` 연산자를 이용하여 정의한다. 화살표 함수를 정의할 때는 몇가지 규칙이 있다. 
- * <b style="color: coral">매개변수가 하나</b>일 경우에는 <b style="color: coral">인자를 정의할 때 괄호를 생략</b>할 수 있다.
  * <b style="color: coral">매개변수가 없거나 둘 이상일 경우 괄호를 작성</b>해야 한다. 
  * 화살표 함수 코드 블록을 지정하지 않고 한 문장으로 작성 시 return 문을 사용하지 않아도 <b style="color: coral">화살표 오른쪽 표현식의 계산 결과값이 반환</b>된다. 
  * <b style="color: coral">화살표 함수 코드 블록을 지정했을 경우 반환하고자 하는 값에 return 문을 작성해야 한다.</b><br> return 문이 없을 시 undefined가 반환된다. 

```js
  const double = x > x + x
  console.log(double(2))  // 4

  const add = (a, b) => a + b
  console.log(add(1,2)) // 3

  const printArguments = () => {
    console.log(arguments)  // Uncaught ReferenceError: arguments is not defined
  }
  printArguments(1, 2, 3) 

  const sum = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
      total += args[i]
    }
    return total
  }
  console.log(sum(1, 2, 3)) // 6

  setTimeout(() => {
    console.log('화살표 함수!') // 화살표함수!
  }, 10)
```
<br><br>

-  해설
-   * 1~2 : 매개변수 x를 전달 받아 x + x 결과를 반환하는 화살표 함수를 정의하고 double 변수에 할당한다. double(2)는 2 + 2 결과인 4가 반환되고, console.log에 전달하여 4가 출력된다. <br><br>
    
    * 4~5 : a와 b 두 매개변수를 가지는 화살표 함수를 정의하였다. <br>
      그래서 매개변수에는 괄호를 사용하였고, 코드 블록은 한문장이기 때문에 두 매개변수 합의 결과값이 반환된다. <br><br>

    * 7~10 : 아무런 매개변수를 정의하지 않았기 때문에 괄호로 빈 매개변수를 표현한다. <br>
      화살표 함수 코드 블록을 작성하고 내부에 arguments 객체를 콘솔에 출력한다.<br> return문이 없기 때문에 반환값은 없다.<br>
      10라인에서 인자로 1, 2, 3을 전달하면서 정의된 화살표 함수를 호출하지만, 콘솔에는 Uncaught ReferenceError 에러가 발생한다.<br>
      <b style="color: coral">화살표 함수는 기본 함수와 다르게 arguments 객체가 만들어지지 않아 에러가 발생하게 된다.</b> <br><br>

    * 12~19 : 전달받은 인자들의 합을 구하는 화살표 함수를 정의한다. <br>
      arguments 객체 대신 나머지 연산자를 통하여 매개변수를 정의한다. <br>
      args는 전달받은 인자 목록을 배열로 사용할 수 있다. <br>
      그리고 화살표 함수 <b style="color: coral">코드 블록에 대괄호를 사용하였기 때문에 return 문을 작성하여 반환값을 명시</b>한다. <br><br>

    * 21~23 : <b style="color: coral">화살표 함수 또한 함수의 인자로 전달 가능</b>하다. <br>
      setTimeout 함수의 인자로 화살표 함수가 전달되고 이때 매개변수가 없어 괄호를 작성해 준다. 
<br><br>

### 48. 자바스크립트 객체지향 프로그래밍 이해하기
- 자바스크립트에서 객체지향 프로그래밍을 어떻게 지원하는가?
- 객체지향 프로그래밍이란, <b style="color: coral">프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법</b>이다.<br>
  그러면 객체에 대해 다시 정의할 필요가 있다. <br>
  "객체 이하히기"에서 객체 값들을 그룹으로 묶은 데이터 모음이라고 소개를 했다. <br>
  하지만 객체지향에서 객체란, 식별 가능한 구체적인 사물 또는 추상적인 개넘이라고 정의한다.<br>
  그리고 객체는 <b style="color: coral">특징적인 행동</b>과 <b style="color: coral">변경 가능한 상태</b>를 가진다.<br>
  자바스크립트에서는 <b style="color: coral">함수 값으로 가지는 속성을 메소드</b>라고 하는데, 이 메소드를 특징적인 행동이며, 그 외에 다른 값들은 변경 가능한 상태라 볼 수 있다.
- 자바스크립트의 객체를 객체지향에서 말하는 객체로 사용하려면 코드를 작성하는 프로그래머가 그에 맞게 작성해야 한다. 단순히 객체를 정의하였다고 객체지향 프로그래밍을 하는것은 아니다.
<br><br>

```js
  const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
      student.gainExp()
    }
  }

  const studentBbo = {
    name: '뽀',
    age: 20, 
    exp: 0,
    gainExp: function(){
      this.exp++
    }
  }
  console.log(studentsBbo.exp)  // 0
  teacherJay.teachJavascript(studentBbo)
  console.log(studentBbo.exp)  // 1
```
- 해설
- * 1~7 : 제이 선생을 객체로 표현한다. 제이 선생은 이름과 나이를 속성으로 가지고 있고 자바스크립트를 가르치는 행위를 한다. teachJavascript 메소드는 학생을 매개변수로 정의하고 있다. <br>
  즉, teachJay 객체는 student 객체를 사용한다. <b style="color: coral">객체지향에서는 객체들이 서로 의사소통을 하게 되는데, 메소드를 통해 서로 메시지를 전달</b>한다. <br>
  그리고 객체지향에서는 협력하지 않는 객체란 존재하지 않는다. 이때 협력은 메시지 전달을 통해 이루어 진다.<br><br>

  * 9~16 : 뽀 학생을 객체로 표현한다. 뽀 학생은 이름과 나이 그리고 경험치를 상태로 가지고 있다. 그리고 경험치를 얻는 행위를 한다. 이 행위를 통해 내부 상태인 경험치를 변경 시킬 수 있다. <br><br>

- 객체지향에서는 무수히 많은 객체들을 <b style="color: coral">공통적인 특성을 기준으로 객체를 묶어서 하나의 타입으로 정의한다.</b> <br>
  이렇게 <b style="color: coral">타입을 정의하는 작업을 분류(classification)라고 하며</b>, 이는 일종의 추상화를 하는 것이다. <br>
  예를 들어 세상에는 자바스크립트를 가르치는 많은 선생이 존재하고, 제이도 그 중의 일부 객체이다. <br>
  이떄 우리는 자바스크립트 선생이란 타입을 분류하고 모든 자바스크립트 선생은 자바스크립트를 가리키는 공통 특징이 있다고 정의할 수 있다.

- 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. <br>
  자바의 클래스 기반 과의 큰 차이점으로 <b style="color: coral">프로토타입으로 객체에 공통 사항을 적용할 수 있다.</b><br>
  즉, 모든 객체는 다른 객체의 <b style="color: coral">원형(Prototype)</b>이 될 수 있다. <br>
  특징을 묘사하는 원형 객체를 만들고 이 원형객체에 기반하는 여러 객체들을 만들면 모두 같은 특징을 가질 수 있다. 

```js
  const studentProto = {
    gainExp: function(){
      this.exp++
    }
  }

  const harin =  {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
  }

  const bbo = {
    name: "뽀",
    age: 20,
    exp: 10,
    __proto__: studentProto
  }

  bbo.gainExp() // 11
  harin.gainExp() // 1
  harin.gainExp() // 2
  console.log(harin)  // {name: 하린, age: 10, exp: 2}
  console.log(bbo)  // {name: 뽀, age: 20, exp: 11}
```

- 해설
- * 1~5 : 학생의 경험치를 얻는 행위를 gainExp 메소드로 작성한 원형(prototype)객체를 정의한다. <br><br>
  * 7~12 : 이름이 하린이고 나이와 경험치를 가지는 harin 객체를 정의한다. <br>
  그리고 자바스크립트에서는 `__proto__` 속성으로 원형 객체를 정의할 수 있다.<br>
  <b style="color: coral">모든 자바스크립트 객체는 `__proto__`속성을 가지는데 예제 코드에서 처럼 별로로 `__proto__`속성에 다른 객체를 할당하지 않으면 기본적으로 Object.prototype 객체가 연결되어 있다.</b> <br>
  harin객체는 `__proto__` 속성에 studentProto 객체를 연결했기 때문에 경험치를 얻는 행위가 가능하게 된다. <br><br>
  * 14~19 : 앞에서 정의한 harin 객체와 유사한 bbo 객체를 정의한다.<br>
    같은 속성 키를 가지지만 다른 값을 가진다. 이름도 뽀이고 나이와 경험치도 다르다. <br>
    하지만 bbo 객체 또한 `__proto__`속성에 studentProto 객체를 할당함으로써 경험치를 얻는 행위를 할 수 있다. <br><br>
  * 21~23 : harin 객체와 bbo 객체 모두 경험치를 얻는 행위를 할 수 있다. <br>
    두 객체 모두가 공통된 경험치를 얻는 행위가 가능하다. 왜냐하면 모두 같은 원형 객체에 연결되어 있기 때문이다. 그래서 두 객체는 학생 타입이라 할 수 있다. <br>
    그리고 경험치를 한 행위 때문에 변경된 상태를 콘솔에 출력한다. 
  <br><br>

### 49. 생성자 함수 이해하기
- 객체를 생성하는 생성자 함수를 정의하고 사용하는 법을 배운다.

- JS 함수는 재사용 가능한 코드의 묶음으로 사용하는 것 외에 객체를 생성하기 위한 방법으로도 사용된다. <br>
  객체를 생성하기 위해 직접적으로 객체를 반환해도 되지만, <b style="color: coral">new 키워드를 사용하여 함수를 호출하게 되면 return 문이 없어도 새로운 객체가 반환된다.</b> <br>
  그리고 함수 바디에서 <b style="color: coral">this</b> 키워드를 사용하여 반환되는 객체의 초기 상태와 행위를 정의할 수 있다.<br>

- <b style="color: coral">객체를 생성하는 역할</b>을 하는 함수를 생성자 함수라고 하는데 <b style="color: coral">생성자 함수는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다.</b><br>
  그렇기 때문에 함수명을 대문자로 시작하는 관례를 가진다.

- 객체에 타입이 적용되면 해당 객체는 그 타입의 <b style="color: coral">인스턴스</b>라고 부른다.<br>
  <b>생성자 함수는 새로운 타입을 정의하는데 사용</b>된다. <br>
  그래서 <b style="color: coral">new 키워드로 만들어진 객체는 해당 타입의 인스턴스</b>가 된다.

```js
function Teacher(name, age, subject) {
  this.name = name
  this.age = age
  this.subject = subject
  this.teach = function (student) {
    console.log(student + '에게' + this.subject + '를 가르칩니다.')
    // bbo에게 JavaScript를 가르칩니다.
  }
}

const jay = new Teacher('jay', 30, 'JavaScript')
console.log(jay)
// Teacher {name: "jay", age: 30, subject: "JavaScript", teach: f}
jay.teach('bbo')

console.log(jay.constructor)
/**
 * f Teacher(name, age, subject){
 *  this.name = name
 *  this.age = age
 *  this.subject = subject
 *  this.teach = function(student) {
 *    console.log(student + '에게' + this.subject + '를 가르칩니다.')
 *  }
 * }
*/
console.log(jay instanceof Teacher) // true

const jay2 = Teacher('jay', 30, 'JavaScript')
console.log(jay2) // undefined
console.log(age)  // 30
```

- 해설
  * 1~8 : Teacher 생성자 함수를 정의. 매개변수로 name, age, subject를 정의하고 전달받은 매개변수들의 값을 this 속성으로 대입한다. 그리고 teach 메소드를 정의한다. 
  <br><br>
  * 10 : <b style="color: coral">new 키워드와 함께 생성자 함수를 호출하면 생성자 함수 블록이 실행되고 별도의 return문이 없어도 새로운 객체가 반환된다.</b> 이때 <b>반환되는 새로운 객체를 가리키는 것이 <b style="color: coral">this</b>다.</b> 그래서 jay 변수에 반환된 객체가 할당된다. 
  <br><br>
  * 11~12 : Teacher 타입의 객체를 콘솔에 출력한다. 그리고 해당 객체의 teach 메소드를 호출한다. 콘솔에 "bbo에게 JavaScript를 가르칩니다."가 출력되는 것을 확인할 수 있다.
  <br><br>
  * 14~15 : <b style="color: coral">모든 객체는 constructor 속성을 가진다.</b> 이 속성은 객체를 만든 생성자 함수를 가리킨다. 그렇기 때문에 jay 객체의 constructor 속성은 Teacher 생성자 함수를 가리키고 콘솔에 해당 내용이 출력된다. 그리고 <b style="color: coral">instanceof</b> 연산자를 이용하여 jay 객체가 Teacher <b style="color: coral">생성자 함수의 인스턴스 여부를 확인</b>할 수 있다. <br><br>
  * 17~19 : <b>new 키워드를 빼고 Teacher 생성자 함수를 호출한다. 이때 생성자 함수의 <b style="color: coral">this는 전역 객체를 가리키게 된다.</b></b> 전역 객체에 name과 age 그리고 subject 속성으로 전달받은 매개변수가 할당된다. 그래서 전역 변수의 age를 참조해 콘솔에 30이 출력된다. 그리고 새로운 객체가 반환되지 않아 jay2는 undefined가 출력된다.
<br><br>

- 생성자 함수의 new 호출을 통한 객체 생성 과정은 다음과 같다. 
1. 빈 객체를 만든다.
2. 만든 빈 객체를 this에 할당한다.
3. 생성자 함수 바디의 코드를 실행한다. (this에 속성 및 메소드 추가)
4. 만든 빈 객체의 `__proto__`에 생성자 함수의 prototype 속성을 대입한다.
5. this를 생성자의 반환값으로 변환한다. 
<br><br>

### 50. 프로토타입 기반 상속 이해하기
- JS 프로토타입 기반의 상속에 대해 배운다.
- JS에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입(Prototype)객체를 상속한다.<br>
  즉, 모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용할 수 있다.
- JS에서 모든 함수는 prototype 속성으로 프로토타입 객체를 가진다.<br>
  그리고 "객체지향 프로그래밍" 예제에서 본 것과 같이 모든 객체는 `__proto__`속성을 가지는데, `__proto__`속성은 해당 객체를 생성한 생성자 함수의 protorype 객체를 가리킨다.<br>
  그래서 생성자 함수를 통해서 타입을 정의할 수 있다.
  <br><br>

```js
  function Storage() {
    this.dataStore = {}
  }
  Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data
  }
  Storage.prototype.getData = function(key) {
    return this.dataStore[key]
  }

  const productStorage = new Storage()
  productStorage.put('id001', {name: '키보드', price: 2000})
  console.log(productStorage.getData('id001')) // {name: "키보드", price: 2000}

  function RemovableStorage() {
    Storage.call(this)
  }
  RemovableStorage.prototype = Object.create(Storage.prototype)
  RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {}
  }
  const productStorage2 = new RemovableStorage()
  productStorage2.put('id001', {name: '키보드', price: 2000})
  productStorage2.removeAll()
  const item2 = productStorage2.getData('id001')
  console.log(item2)  // undefine
```
- 해설
  * 1~3 : Storage 생성자 함수를 정의한다. 내부 속성으로 dataStore를 가지고 빈 객체를 할당한다. 
  * 4~6 : Storage 생성자 함수의 프로토타입 객체에 put 메소드를 추가한다. put 메소드는 주어진 키에 해당하는 값을 dataStore 속성에 할당한다. 
  * 7~9 : Storage 생성자 함수의 프로토타입 객체에 getData 메소드를 추가한다. getData 메소드는 매개변수의 값을 키로 해서 dataStore 속성에서 찾아 반환한다.
  * 11~12 : Storage 타입의 인스턴스를 생성하면 인스턴스는 해당 생성자 함수의 프로토타입을 상속한다. 그래서 Storage 생성자 함수의 프토로 타입에 정의된 메소드들을 해상 인스턴스들은 사용할 수 있다.
  * 15~17 : RemovableStorage 생성자 함수를 정의한다. 이때 Storage 함수를 호출하면서 this를 전달하는데 이렇게 되면 Storage 생성자 함수가 호출되면서 RemovableStorage 생성자 함수의 this에 Storage 생성자 함수에서 정의한 대로 dataStore가 속성으로 추가된다. 
  * 18~21 : Object.create 메소드는 주어진 인자를 `__proto__`에 연결한 새로운 객체를 반환한다. Object.create를 이용하면 간단히 상속 관계를 형성할 수 있다. RemovableStorage.prototype에 Object.create(Storage.prototype)를 할당하면 Storage 함수의 프로토타입 객체가 RemovableStorage 함수의 프로토타입 객체의 `__proto__`에 할당된다. 그러면 두 프로토타입이 상속 관계를 형성하게 된다. 그리고 RemovableStorage 생성자 함수의 프로토타입 객체에 removeAll 메소드를 추가한다. 
  * 22~26 : RemovableStorage 생성자 함수에 의해 만들어지는 인스턴스들은 내부에 없는 메소드를 RemovableStorage 생성자 함수의 프로토타입에서 먼저 찾고, 없으면 Storage 생성자 함수의 프로토타입에서 찾게 된다. 나아가 Object.prototype에서까지 찾게 된다. 이렇게 프로토타입 객체가 서로 연결되어 있다 하여 이를 <b style="color: coral">프로토타입 체인</b>이라고 한다. 다음은 각 생성자 함수의 프로토타입이 연결된 형태를 보여준다.  
  <br><br>

  ### 51. 클래스 정의하기
  - ES6에서 추가된 class 키워드를 통해 클래스를 어떻게 정의하고 사용하는지 알아봅니다.
  <br><br>
  - ES6부터 class 키워드를 통해 클래스를 정의할 수 있다. <br>
    <b style="color: coral">클래스</b>는 별도 타입의 객체를 생성하는 <b style="color: coral">설계 도면</b>이라 볼 수 있다. 예를 들어, 붕어빵 틀은 붕어빵을 만들기 위한 틀이라고 볼 수 있는데, 여기서 붕어빵은 객체이고 붕어빵 틀이 클래스라고 볼 수 있다.
  <br><br>
  - <b style="color: coral">클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.</b> 예를들어, 카트 객체들은 상품을 추가할 수 있어야 하고, 상품 아이디에 따라 상품을 반환해야 한다. 이러한 카트 객체들의 특성을 카트 클래스로 정의하고 해당 클래스에서 만들어진 객체들은 모두 이러한 행위를 할 수 있게 된다. 
  <br><br>
  - 카트 클래스에서 만들어진 객체들을 카트 인스턴스라고 한다. <b style="color: coral">즉, 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스라고 한다.</b> 
  <br><br>

```js
  class Cart {
    constructor() {
      this.store = {}
    }

    addProduct(product) {
      this.store[product.id] = product
    }

    getProduct(id) {
      return this.store[id]
    }
  }

  const cart1 = new Cart()

  cart1.addProduct({id: 1, name: '노트북'})
  console.log(cart1.store)  // {'1': {id: 1, name: '노트북'}}

  const p = cart1.getProduct(1)
  console.log(p)  // {id: 1, name: '노트북'}
```
- 해설
  * class 키워드를 이용해서 Cart 클래스를 정의한다. 관례상 클래스 이름의 첫 글자는 대문자로 작성한다. 클래스를 정의할 때 클래스 명 이후로 중괄호가 오고 그 안을 클래스 몸통(Body)이라고 부른다.
  <br><br>
  * 2~4 : <b style="color: coral">클래스 몸통에는 생성자 함수를 작성할 수 있다.</b> constructor로 작성하고 매개변수도 정의 할 수 있다. 여기서는 아무런 매개변수를 정의하고 있지 않는다. <br>
  ES6 이전의 생성자 함수와 같은 역할을 하지만 funciton 키워드가 없고 함수 이름이 constructor로 고정되었다고 볼 수 있다.<br>
  <b style="color: coral">그리고 꼭 하나의 생성자만 정의할 수 있다.</b> 생성자는 new 키워드를 통해 객체가 생성될 때 호출된다. 여기서는 store 속성에 빈 객체를 추가한다. <br> 요약하면, <b style="color: coral">생성자 함수에서는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로한다.</b> 
  <br><br>
  * 6~12 : addProduct 메소드와 getProduct 메소드를 정의한다.<br> 
    <b style="color:coral">메소드는 클래스가 생성한 객체를 통해 사용할 수 있다.</b> 17라인에서 cart1 인스턴스를 통해 addProduct를 호출하는 것을 볼 수 있다. 여기서는 전달받은 product 객체의 id를 store 객체의 키로 하여 객체 자체를 값으로 저장하고 있다.<br>
    getProduct 메소드를 통해 전달받은 id 인자에 해당하는 product를 반환한다. 
    <br><br>
  * 15 : Cart 클래스를 new 키워드를 사용하여 객체를 생성한다. 이렇게 만들어진 인스턴스를 cart1변수에 할당한다. <br>
  const를 통해 정의하기 때문에 cart1에는 다른 값을 대입할 수 없다. 
  <br><br>
  * 17~19 : cart1 인스턴스의 addProduct 메소드에 아이디가 1이고 이름이 "노트북"인 상품 객체를 전달하여 호출한다. 6~7라인에 정의한대로 store 속성에 1이라는 키에 해당 상품 객체가 값으로 추가된다.<br>
  18라인에서 cart1의 store 속성을 출력하면 실제 추가된 내용이 콘솔에 출력되는 것을 볼 수 있다. 
  <br><br>
  * 20~21 : getProduct 메소드를 통해 아이디에 1에 해당하는 상품 객체를 반환 받는다. <br>
  그리고 반환된 상품 객체의 내용을 확인하기 위해 콘솔에 출력한다.
  <br><br>

### 52. 클래스 상속 이해하기
- 클래스로 상속을 어떻게 할 수 있는지 배운다.

```js
class Chart {
  constructor(width, height){
    this.width = width
    this.height = height
  }

  drawLine() {
    console.log('draw line')
  }
}

class BarChart extends Chart {
  constructor(width, height) {
    super(width, height)
  }

  draw() {
    this.drawLine()
    console.log(`draw ${this.width} X ${this.heihgt} barChart`)
  }
}

const barChart1 = new BarChart(100, 100)
barChart1.draw()
// draw line
// draw 100 X 100 barChart
```

- 해설
  *  1~10 : 차트 클래스를 정의한다. drawLine 메소드를 통해 라인을 그리는데, 편의상 콘솔에서만 출력하도록 작성되었다.
  <br><br>
  * 12~15 : 차트 클래스를 상속하는 바차트 클래스를 정의한다.<br> 
  <b style="color: coral">클래스의 상속은 extends 키워드를 사용</b>한다.<br>
  상속을 하게 되면 생성자 함수에서 <b style="color: coral">상속한 부모 클래스의 생성자를 호출해야 하는데 이때 super 키워드를 사용</b>한다.<br>
  즉, super가 부모 생성자 함수를 가리킨다.
  <br><br>
  * 17~20 : 상속을 했기 때문에 부모 클래스에 정의된 메소드를 사용할 수 있다. 
  <br><br>
  * 23~24 : 바차트 클래스의 인스턴스를 만들고 draw 메소드를 호출합니다. 부모 클래스인 차트 클래스의 생성자 함수가 호출되어 width와 height 속성에 주어진 값이 할당되고, 부모 클래스에 정의된 drawLine 메소드도 잘 호출되는 것을 확인할 수 있다.
  <br><br>
  * ES6의 클래스를 통한 상속은 앞에서 배운 생성자 함수의 프로토타입 기반의 상속과 크게 다르지 않다. JS는 새로운 기능이 추가되면 하위 버전의 코드로 변환이 되어야 한다. 그래서 <b style="color: coral">ES6의 클래스는 생성자 함수로 변환</b>되고, <b style="color:coral">extends 키워드의 상속은 prototype 기반 상속 코드로 변경</b>될 수 있다. <b style="color: coral">JS는 여전히 프로토타입 기반의 상속</b>임을 알아햐 한다.
<br><br>

### 53. 클래스 정적 메소드와 속성 정의하기
- <b style="color: coral">일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출</b>한다.<br> 
반면 <b>정적 메소드는 클래스를 통해 직접 호출하는 메소드</b>를 말한다. 클래스에서 정적 메소드는 <b style="color: coral">static 키워드를 사용</b>하여 정의한다. 
<br><br>

```js
  class Product {
    static build(name, price) {
      const id = Math.floor(Math.random() * 1000)
      return new Product(id, name, price)
    }

    static getTaxPrice(product) {
      return (product.price * 0.1) + product.price
    }

    constructor(id, name, price) {
      this.id = id
      this.name = name
      this.price = price
    }
  }

  class DeposableProduct extends Product {
    depose() {
      this.depose = true
    }
  }

  const gum = Product.build('껌', 1000)
  console.log(gum)  // Product {id: 420, name: '껌', price: 1000}

  const clothes = new DeposableProduct(1, '옷', 2000)
  const taxPrice = DeposableProduct.getTaxPrice(clothes)
  console.log(taxPrice) // 2000
```
- 해설
  * 1~5 : static 키워드를 사용하여 build 정적 메소드를 정의한다. build 정적 메소드를 정의할 때 Math.random 함수를 사용하는데 Math.random 함수를 호출하면 0부터 1까지의 난수가 반환된다.<br>
  반환된 값에 1000을 곲하고 그 결과를 Math.floor 함수의 인자로 전달하면 소수점을 버려서 0부터 1000의 난수 값을 얻을 수 있다. build 정적 메소드는 난수를 아이디로 하는 상품 인스턴스를 반환한다.
  <br><br>
  * 7~8 : 세금을 계싼하여 반환하는 getTaxPrice 정적 메소드를 정의한다.
  <br><br>
  * 11~15 : 상품 클래스의 생성자 함수를 정의한다.
  <br><br>
  * 18~22 : 폐기가 가능한 상품 클래스를 정의한다. DeposableProduct 클래스는 상품 클래스를 상속한다. <b style="color: coral">생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 된다.</b>
  <br><br>
  * 24~25 : Product 클래스의 build 정적 메소드를 호출한다. 랜덤하게 아이디가 부여된 이름이 "껌"인 상품 인스턴스가 반환되고 콘솔에 인스턴스를 출력한다. 
  <br><br>
  * 27~29 : DeposableProduct 인스턴스를 생성한다. DeposableProduct 클래스에서 getTaxPrice 정적 메소드를 정의하지 않았지만 Product 클래스를 상속하였기 때문에 호출이 가능하다.
<br><br>
- 클래스를 정의할 때 정적 속성 또한 <b style="color: coral">static</b> 키워드와 <b style="color: coral">get</b> 키워드를 통해 정의할 수 있다.
<br><br>

```js
  class ProductWithCode {
    static get CODE_PREFIX() {
      return "PRODUCT-"
    }

    constructor(id) {
      this.id
      this.code = ProductWithCode.CODE_PREFIX + id
    }
  }

  const product1 = new ProductWithCode('001')
  console.log(ProductWithCode.CODE_PREFIX) // PRODUCT-
  console.log(product1.code)  // PRODUCT-001
```
- 해설
  * 1~4 : ProductWithCode 클래스를 정의하면서 codePrefix 정적 속성을 정의한다.<br>
    물론 클래스 몸통 블록 밖에서 ProductWithCode.CODE_PREFIX = "PRODUCT-"로 정의할 수 있다. 하지만 <b style="color: coral">코드의 가독성을 높이려면 몸통 안에서 정의하는 것이 좋다.</b><br>
    위 코드처럼 몸통 안에서 <b style="color: coral">static get</b> 키워드를 통해 정의한다.
  <br><br>
  * 6~10 : ProductWithCode 클래스의 생성자 함수를 정의한다. 이때 코드 속성을 정의하는데 ProductWithCode.CODE_PREFIX와 id의 조합으로 정의한다.
  <br><br>
  * 12~14 : ProductWithCode 클래스의 인스턴스를 생성한다. 그리고 해당 인스턴스의 code값과 ProductWithCode 클래스의 CODE_PREFIX 정적 속성을 콘솔에 출력한다.
<br><br>

### 54. this 이해하기 
- JS에서 this 키워드가 사용 방법에 따라 어떤 값을 반환하는지 살펴본다.
<br><br>
- this는 함수가 어떻게 호출되는지에 따라 동적으로 결정된다. this의 주요 목적은 작성된 코드를 여러 목적으로 재사용하기 위해 존재하는데, 호출되는 방식에 따라 동적으로 결정되어 간혹 잘못된 코드를 작성할 수 있다. 
<br><br>
- this는 전역에서 사용할 수도 있도 함수 안에서도 사용할 수 있다. <br>
  하지만 <b style="color: coral">함수는 객체 안에 메소드로 정의</b>될 수도 있고 <b style="color: coral">생성자 함수</b>로 사용될 수도 있고 <b style="color: coral">특정 로직을 계산하여 값을 반환하는 목적</b>으로 사용할 수도 있다. 
<br><br>
- 이렇게 함수가 다양하게 사용되다 보니 this도 각 함수별로 다르게 해석된다. <br>
  물론 화살표 함수에서의 this도 다르게 해석된다. 그리고 class 안에서 사용되는 this는 생성자 함수와 동일하다.
<br><br>

```js
  this.valueA = "a"
  console.log(valueA) // a
  valueB = "b"  // b
  console.log(this.valueB)

  function checkThis() {
    console.log(this) // window
  }

  function checkThis2() {
    "use strict"
    console.log(this) // undefined
  }
  checkThis()
  checkThis2()

  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  const product1 = Product('가방', 2000)
  console.log(window.name)  // 가방
  console.log(window.price) // 2000

  const product2 = {
    name: '가방2',
    price: 3000,
    getVAT() {
      return this.price / 10;
    }
  }
  const valueOfProduct2 = product2.getVAT()
  console.log(valueOfProduct2)  // 300

  const calVAT = product2.getVAT
  const VAT2 = calVAT()
  console.log(VAT2) // 200

  const newCalVAT = calVAT.bind(product2)
  const VAT3 = newCalVAT()
  console.log(VAT3) // 300

  const counter1 = {
    count: 0,
    addAfter1Sec() {
      setTimeout (function() {
        this.count += 1;
        console.log(this.count) // NaN
      }, 1000)
    }
  }
  counter1.addAfter1Sec()

  const counter2 = {
    count: 0,
    addAfter1Sec() {
      setTimeout(() => {
        this.count += 1;
        console.log(this.count) // 1
      }, 1000)
    }
  }
  counter2.addAfter1Sec()
```
- 해설
   * 1~4 : 브라우저 환경에서 <b style="color: coral">this를 전역에서 사용하면 전역 객체인 Window 객체를 가리킵니다.</b> 그래서 valueA는 window.valueA로 해석되고 console.log(valueA)로 해석된다. 
   <br><br>

   * 6~14 : 함수에서 this를 사용하고 함수를 호출하면 this는 전역 객체인 Window를 가리킵니다. 하지만 <b style="color: coral">함수 내의 코드를 엄격한 모드로 실행하게 되면 this는 undefined</b>가 된다. <br>
   엄격한 모드는 전역으로 모드를 지정하거나 함수 단위로도 지정할 수 있다.
   <br><br>

  * 16~22 : Product 함수는 <b style="color: coral">생성자 함수</b>로 작성되었다. 하지만 <b style="color: coral">new 키워드 없이 호출되면</b> 이때 <b style="color: coral">this는</b> 6라인과 동일하게 <b style="color: coral">전역 객체인 Window</b>를 가리킵니다.<br>
  <b style="color: coral">new 키워드와 함께 호출하면 this는 그 객체를 가리킨다.</b> 
  <br><br>

  * 26~32 : 객체 내에 정의된 함수인 메소드 안에서 this를 사용하고 객체를 통해 메소드를 호출하면 this는 그 객체를 가리킨다. 
  <br><br>

  * 34~36 : 메소드 안에서 this를 정의했지만 메소드를 다른 변수에 저장라고 그 변수를 통해 호출하면 일반적인 함수 호출이 되어 this는 전역 객체를 가리킨다. <br>
  <b style="color: coral">즉, 호출하는 시점에 점(.) 연산자와 함께 객체가 주어져야 메소드 안의 this가 호출의 주체인 객체가 된다.</b>
  <br><br>

  * 38~40 : <b style="color: coral">this는 bind 메소드를 통해 전달한 인자값으로 변경할 수 있다.</b><br>
  this 외에 <b style="color: coral">call과 apply 메소드</b> 또한 this가 가리키는 값을 변경할 수 있다.
  <br><br>

  * 42~51 : <b style="color: coral">메소드 안에서 중첩 함수로 함수가 작성됐을 때 내부 함수의 this는 전역 객체를 가리킨다.</b> 그래서 1초 뒤 this.count는 window.count로 해석되어 undefined에 값을 더하려고 해서 NaN이 콘솔에 출력된다. 
  <br><br>

  * 화살표 함수와 bind가 JS에 추가되기 전에 대체로 this에 대한 레퍼런스를 다른 변수에 보관하였다가 내부 함수에서 그 변수를 참조하는 방식으로 메소드를 소유한 객체에 접근하였다.
  <br><br>
  ```js
  const counter1 = {
    count: 0,
    addAfter1Sec() {
      const me = this
      setTimeout(function() {
        me.count += 1;
        console.log(this.count)
      }, 1000)
    }
  }
  counter1.addAfter1Sec()
  ```
  <br><br>

  * 53~62 : <b style="color: coral">화살표 함수에서 this를 사용하면 this는 부모 환경의 this</b>를 가리킨다. <br>
  그래서 중첩된 함수로 작성되었을 때 화살표 함수를 사용하면 화살표 함수는 부모 함수의 this와 같다.
  <br><br>
  
  * <b style="color:coral">화살표 함수에서 this는</b> 일반적인 this와 다르게 호출 시점에 동적으로 정의되는 것이 아니라 <b style="color:coral">코드를 작성하는 시점에 정적으로 결정된다.</b> <br>
  <b style="color: coral">화살표 함수를 작성하는 시점의 부모 환경에서의 this로 정의되고 변경이 불가능하다.</b> 
  <br>
  즉, 다음과 같이 bind를 통해 this를 변경할 수 없다.  
  <br><br>
  ```js
    const arrowFunc = () => {
      console.log(this)
    }
    const nowArrowFunc = arrowFunc1.bind({d : 2})
    nowArrowFunc()  // window 전역 객체가 콘솔에 출력된다. 
  ```
  <br><br>
  * <b style="color: orange">Node.js에서는 전역에서 this를 통한 전역변수에 할당되지 않는다.</b>
  <br><br>

### 55. 모듈 이해하기
- 모듈을 이해하고 JS에서 <b style="color: coral">네임스페이스</b>를 통해 모듈을 정의하는 법을 배워본다. 
- <b style="color:coral">모듈은 파일이나 코드의 묶음 단위로 애플리케이션 하나의 구성요소로 볼 수 있다.</b> 이렇게 모듈로 정의하면 <b style="color:coral">모듈 단위로 코드를 재사용</b> 할 수 있고, 하나의 애플리케이션이라는 큰 기능을 작은 기능 단위로 잘게 분리하여 관리할 수 있다.<br>
예를 들어 베이스볼 게임이라는 애플리케이션을 문제 생성 모듈, 플레이어 관리 모듈, 정답 채점 모듈 등과 같이 여러 모듈로 구성할 수 있다. 
<br>
- ECMAScript 5.x 버전까지는 모듈에 대한 정의를 JS 표준으로 제공하지 않았다.<br>
  그래서 네임스페이스 패턴을 통해 모듈을 정의했다. 다음의 예제를 통하여 네임스페이스 패턴을 알아보겠다. 
<br><br>

```js
  let namespaceA = (function(){
    let privateVariable = '비공개변수'
    return {
      publicApi: function() {
        console.log(privateVariable + '를 접근할 수 있습니다.')
      }
    }
  })()

  namespaceA.publicApi() // 비공개 변수를 접근할 수 있습니다.
```
<br>

- <b style="color: coral">네임스페이스</b>란 C# 언어에서 제공하는 기능으로 코드를 그룹화하고 이름 충돌을 방지하게 도와준다. 하지만 JS에서는 네임스페이스를 직접적으로 지원하지 않는다. 그래서 <b style="color: coral">함수를 정의함과 동시에 실행하는 즉각 호출 패턴을 통하여 네임스페이스를 유사하게 구현할 수 있다.</b><br>
이렇게 하는 이유는 기본적으로 변수와 함수를 선언하게 되면 전역으로 정의되어 다른 라이브러리나 타인의 코드에서 정의된 이름들과 충돌이 날 수 있기 때문이다.

- 위 예제는 즉각 호출 패턴을 통해 함수를 정의함과 동시에 실행하여 util이라는 네임스페이스를 생성하고 있다. let 키워드로 생성된 변수의 스코프는 함수이기 때문에 네임스페이스 안에 정의된 변수들은 그 외부에서 접근을 못한다. 

- 해설
  * 1 : 즉각 호출 패턴인 (function(){//코드})();를 통하여 namespaceA의 변수에 함수에서 반환된 객체를 할당한다.<br>
  * 2 : 함수 안에 선언된 변수는 함수 내부에서만 접근이 가능하기 떄문에 비공개 영역이 된다.<br>
  * 3~7 : 반환되는 객체는 namespaceA에 할당되고, 외부에서 접근이 가능하기 때문에 해당 객체의 속성과 메소드들은 공개 API가 된다. <br>
  * 10 : namespaceA의 publicApi 메소드를 호출한다.
<br><br>
- namespaceA 자체는 전역으로 등록되기 때문에 여전히 이름 충돌이 발생할 수 있다. 그리고 즉각 호출 패턴을 통해 정의된 다른 모듈을 사용하는 것 또한 전역을 통해 가져오게 된다. <br>
  이러한 문제점을 해결하기 위해 ES6 이전에는 RequireJS를 통하여 모듈을 정의하였다. <br>
  ES6에서 모듈 시스템에 대한 표준이 정의되었기 때문에 RequireJS과 같은 별도의 라이브러리 필요없이 이러한 문제점을 해결할 수 있다.
<br><br>

### 56. 모듈 시스템 이해하기
- ES6의 모듈은 JS코드를 담고 있는 하나의 파일
- 하나의 파일이 하나의 모듈인 셈.
- ES6의 모듈은 엄격한 모드의 코드
- <b>import</b> & <b>export</b>
- export -> 모듈 내의 특정 코드를 외부에서 사용할 수 있다.
- import -> export한 코드들을 가지고 올 수 있다.

```js
// hello.js
export function hello(name) {
  console.log(`hello ${name}`)
}
```

```js
//  app.js
import {hello} from './hello.js'

hello('es6 module') // hello es6 module
```

- hello.js에서 hello 함수를 정의하고 이 함수를 export 키워드를 이용하여 외부에서 가져올 수 있게 내보냈다.
- app.js에서는 hello.js의 hello 함수를 import 키워드를 이용하여 가지고 온다.
- 이렇게 가져온 함수는 app.js 모듈 내에서 자유롭게 사용할 수 있다.
- 내보낸(Export) 코드를 가져오면(Import) 두 모듈은 서로 의존하게 되어 <b style="color:coral">의존 관계 그래프가 형성</b>된다.
- 의존 관계 그래프에서는 <b style="color:coral">최상의 루트</b>가 필요, 이 루트 모듈이 애플리케이션의 시작 지점이 된다.
- 위 예제 코드에서는 app.js가 루트 모듈이라고 볼 수 있다.

#### 실행 방법에 따른 두가지 분류
1. <b style="color: coral">런타임 로딩(Runtime Loading)</b>
- 의존 관계가 형성된 모듈들을 애플리케이션이 <b style="color: coral">구동 시점</b>에 <b style="color: coral">비동기 HTTP 요청으로 불러오고 실행된다</b>. 이때 모듈 로더가 필요한데 system.js나 require.js를 이용할 수 있다.
- <b style="color: coral">system.js</b>는 다양한 모듈 형식을 지원하는 모듈 로더.
- ES6 모듈 형식 외에 require.js, CommonJS 등 다양한 포맷을 지원한다. 뿐만 아니라 system.js 자체 포맷 또한 제공하고 있다.

2. <b style="color: coral">번들링(Bundling)</b>
- 의존 관계가 형성된 모듈들을 하나의 파일로 묶어준다. 그리고 애플리케이션이 구동할 때 묶여진 이 파일을 로드한다.
- 번들링은 <b style="color: coral">개발 시점</b>에 이루어지게 되고 브라우저에서 이루어지지 않고 대체로 <b style="color: coral">node.js 환경에서 이루어지게 된다</b>.
- 대표적인 모듈 번들로는 <b style="color: coral">웹팩(Webpack)</b>이 있다.
- 웹팩은 모듈 번들러로 JS 코드 외에 CSS, 이미지, 폰트 등 다양한 자원들을 모듈화시켜 의존 관계 그래프를 형성, 병합된 파일들을 만들 수 있다.
- node.js 플랫폼에서 동작하는 애플리케이션이고, 다양한 플러그인을 제공한다.
- 크롬 61 버전부터 `<script type="module">`을 지원하면서 별도의 모듈 로더 없이 ES6 모듈을 사용할 수 있게 되었다. 


```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>Module Sample</title>
    <script type="module" src="app.js"></script>
  </head>
  <body>
  </body>
</html>
```
<br></br>

### 57. 모듈 기본값 정의하고 가져오기
- ES6 모듈 시스템에서는 <b style="color: coral">default</b> 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다. 
- <b style="color: coral">숫자</b>, <b style="color: coral">문자</b>, <b style="color: coral">불리언</b>과 같은 기본형 값
- <b style="color: coral">객체</b>, <b style="color: coral">함수</b>, <b style="color: coral">클래스</b>와 같은 참조형 값

```js
// hello.js
  export default 'hello'
  export default function hello(name) {
    console.log('hello' + name)
  }
  export default class Hello {
    constructor(greeting) {
      this.greeting = greeting
    }
    hi(name) {
      console.log(`${this.greeting} ${name}`)
    }
  }
```

- <b style="color: coral">default</b> 키워드 사용에 있어 중요한 점이 있는데, default 키워드는 <b style="color:coral">하나의 모듈에서 한 번만 사용할 수 있다</b>.
- <b style="color: coral">default 키워드 다음에 var, let, const와 같은 변수 선언 키워드가 올 수 없다</b>.
- ex). A라는 모듈이 있으면, A.default = "hello"와 같이 A모듈의 기본값을 할당 한다고 볼 수 있다.

```js
// app.js
import Hello from "./hello.js"

const koreaHi = new Hello("안녕하세요.")
koreaHi.hi("하린")  // 안녕하세요. 하린
```
-
  * 1 : hello.js에서 default로 내보낸 값을 가져오고 import하는 모듈에서(현재 파일) 이름을 부여한다. 여기에는 Hello라는 이름으로 부여하였다.
  * 3 : hello.js에서는 <b style="color:coral">클래스</b>를 기본값으로 내보냈기 때문에, <b style="color:coral">new 키워드</b>를 사용하여 객체를 생성한다. 
  * 4 : Hello 클래스의 인스턴스인 koreaHi의 hi 메소드를 호출한다.
<br><br>

### 58. 모듈을 여러 이름으로 내보내고 가져오기
- ES6 모듈 시스템에서는 <b style="color:coral">이름있는 변수</b>나 <b style="color: coral">함수</b> 혹은 <b style="color: coral">클래스</b>를 export 키워드를 사용하여 내보낼 수 있습니다.
- <b>기본값(default)</b>과 다르게 <b style="color: coral">이름이 있기 때문에 중복되지 않는 한 여러 이름있는 것들을 내보낼 수 있다</b>.

```js
// hello.js
export const version = "v1.0"

export var personA = {
  name = "a"
}

export function add(a,b) {
  return a + b
}

export class Person {
  constructor(name) {
    this.name = name
  }
}
```
- 해설
  * 1 : const 키워드 version 이름으로 상수를 정의하였다. 그리고 export 키워드로 정의된 상수의 이름인 version으로 내보낸다.
  * 3 ~ 5 : personA 이름으로 정의된 변수에 객체를 할당했다. 이 변수 또한 personA이름으로 내보낸다. 
  * 7 ~ 9 : add 함수를 선언하고 선언된 함수의 이름으로 내보낸다.
  * 11 ~ 15 : Person 클래스를 선언하고 선언된 함수의 이름으로 내보낸다.  

<b style="color: red">* 주의</b>
- 다음과 같이 클래스, 함수 그리고 변수들을 선언한 후에 export로 내보낼 수 있다. 하지만 <b style="color: coral">export 바로 뒤에 이름을 작성하면 안 되고 {} 안에 나열해야 한다</b>.

```js
class Person {
  constructor(name) {
    this.name = name
  }
}
const version = "v1.0"

export Person // 문법 오류
export {version, Person} // 오류 X, 올바른 방법
```

```js
// app.js
import {add, Person, version} from "./hello.js"

const result = add(1,2)
const harin = new Person("하린")

console.log(result) // 3
console.log(harin.name) // 하린
console.log(version)  // v1.0
```

- 해설
  * 1 : hello.js에서 내보낸 이름으로 가져온다. 여기서 이름들을 콤마로 구분하고 {}를 안에 나열한다. hello.js에서는 personA를 export하였지만 app.js에서 personA를 가져오지는 않았다.
  * 3 ~ 4 : 가져온 add 함수와 Person 클래스를 사용한다.
  * 6 ~ 8 : 결과를 콘솔에 출력한다. version은 문자열이기 때문에 가져온 그대로 출력한다.

<b style="color: red">* 주의</b>
- <b style="color: coral">다른 모듈에서 가져온 이름은 오직 읽기만 가능하다</b>. 즉 해당 이름에 다른 값을 할당할 수 없다.

```js
  import {personA} from ".hello.js"
  personA = "v2"  // 오류 발생
```