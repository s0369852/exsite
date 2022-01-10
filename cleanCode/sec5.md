# 섹션5. 분기 다루기

## 20. <b style="color: #458fed">값식문</b>
- 문법의 중요성
- <b style="color: crimson">함수의 매개변수로 for문, if문, switch문을 받을 수 있을까?</b>
- 값식문은 리엑트에서 많이 실수하기 때문.
- 리액트는 JSX라는 것을 사용한다. 
- JSX를 사용하는 과정에서 많은 실수를 한다. 
- <b style="color: crimson">함수가 어떠한 인자를 받을 때 인자는 값 혹은 식이 되어야 한다.</b>
- () -> 괄호는 함수 호출
- {} -> 중괄호 안에는 값과 식만 들어가야 한다.

### 1. case 01
```js
// case-01

  // This JSX :
  ReactDOM.render(
    <div id="msg">Hello World!</div>,
    mountNode
  )

  // Is trnasformed to this JS : 
  // -> JSX가 Babel을 만나면 이렇게 트랜스 파일링이 된다.
  ReactDOM.render(React.createElement('div', {id: 'msg'}, 'Hello World!'), mountNode)

```
<br>

---
### 2. case 02
```js
// case-02

  // This JSX :
  <div id={if (condition) { 'msg' }}>Hello World!</div> 
  // 문법 에러가 난다.

  // Is transformed to this JS :
  React.createElement("div", {id: if (condition) {'msg'}, "Hello World!"});
  // 문법 에러가 난다.

  ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode)
  // 문법 에러가 나지 않는다. 이유는?
  // {condition ? 'msg' : null} => 문이 아닌 삼항연산자로 값으로 귀결되기 때문
  // 표현식은 값으로 귀결될 수 있고, 값으로 수렴될 수 있는 식이기 때문.
  // 객체의 값에는 값이 들어갈 수 있는 식이 올 수 있다. (문이 오면 안된다.)


  const obj = {id: if (condition) { 'msg' }}
  /**
   * if문을 객체의 키가 가진 값으로 넣을 수가 있을까?
   * 문을 값으로 넣으면 당연히 안들어간다. 
   * 값의 자리에는 값이 들어와야 한다. 문이 아니라.
  */
```
<br>

---
### 3. case 03
```js
// case-03

/**
 * 그럼에도 불구하고 if문을 사용하고 싶다면?
 * => switch 케이스 문
 * switch문은 왜 가능할까?
 * 즉시실행함수를 사용하고 있는 예제인데, 즉시실행함수(IIFE)
 * 중괄호 안에는 값과 식만 넣어야 하는데, 즉시실행함수는 바로 값을 리턴하기 때문에, 이 내부에서 switch 케이스문을 사용할 수 있는 것이다.
 * 
*/

  function ReactComponent() {
    return (
      <section>
        <h1>Color</h1>
        <h3>Name</h3>
        <p>{this.state.color || 'white'}</p> 
        // -> if문이 아닌 논리연산자를 사용한 케이스 
        <h3>Hex</h3>
        <p>
          {(() => {
            switch (this.state.color) {
              case 'red':
                return '#FF0000';
              case 'green':
                return '#00FF00';
              case 'blue':
                return '#0000FF';
              default:
                return '#FFFFFF';
            }
          })()}
        </p>
      </section>
    )
  }
```
<br>

---
### 4. case 04
```js
// case-04

/**
 * 리엑트 내부에서 map, filter, reduce를 많이 사용하면서 그냥 당연히 사용하는 것으로 생각
 * 이 예제는 좋지않은 로직을 보여준다.
 * 즉시실행함수로 감싸져있고 for문을 계속 돌리면서 임시 변수 rows에다가 계속 push로 누적을 시키고, 누적시킨 배열을 나중에 반환하는 형식이다. 
 * 이때는 고차함수를 적용 시켜줘야 한다.
 * {} -> 중괄호 안에는 값과 식만 들어가야 한다.
*/

  // 좋지 않은 로직
  function ReactComponent() {
    return (
      <tbody>
        {(() => {
          const rows = []

          for (let i = 0; i < objectRows.length; i++) {
            rows.push(<ObjectRow key={i} data={objectRows[i]} />);
          }
          return rows;
        })()}
      </tbody>
    );
  }

  // 변경 후
  function ReactComponent() {
    return (
      <tbody>
        {objectRows.map((obj, i) => (
          <ObjectRow key={i} data={obj} />);
        ))}
      </tbody>
    );
  }
```
<br>

---
### 5. case 05
```js
// case-05

/**
 * 함수가 어떠한 인자를 받을 때 인자는 값 혹은 식이 되어야 한다.
 * JSX는 문법적 설탕(syntax sugar)라고 하는데 결국 Babel을 통해서 트랜스 파일링 되면 객체로 바뀐다는 점, 객체로 바뀌면 객체 내부의 값과 식만 넣을 수 있는데, 값과 식 안에 if문, for문, switch 케이스문 같은 것들을 넣을 수가 없다.
 * 고차함수를 활용해야 하는 이유.
*/

  // 좋지 않은 로직
  function ReactComponent() {
    return (
      <div>
        {(() => {
          if (conditionOne) return <span>One</span>;
          if (conditionTwo) return <span>Two</span>;
          else conditionOne;
          return <span>Three</span>;
        })()}
      </div>
    );
  }

  // 변경 후
  function ReactComponent() {
    return (
      <div>
        {conditionOne && <span>One</span>}
        {conditionTwo && <span>Two</span>}
        {!conditionTwo && <span>Three</span>}
      </div>
    );
  }
```
<br><br>

## 21. <b style="color: #458fed">삼항 연산자 다루기</b>
- 삼항연산자를 사용할때는 일관성있게 사용해야 한다.
- 3개의 피연산자를 취한다. (조건, 참, 식)
- <b style="color: coral">조건 ? 참[식] : 거짓[식]</b>
- 삼항연산자를 사용해서 무언가의 값을 만들고 그 값을 변수로 담아 낼때 사용할 수 있다.
- 함수가 내뱉는 값이 바로 값을 반환하는 간단한 경우에도 사용할 수 있다.  
- 조건을 기준으로 참만 필요한 경우 || 조건을 기준으로 거짓만 필요한 경우 -> truethy, falsy

---
### 1. case 01
```js
  function example() {
    return condition1 ? value1
      : condition2 ? value2
      : condition3 ? value3
      : value4
  }

  function example() {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; } 
  }

  // -> switch 케이스문으로 이용할 수 있다.
  /**
   * if , else if 를 반복해서 도는 것보다 switch 케이스문에서 다양한 case를 고려하다가 default 케이스로 떨어지는 방법이 현업에서 조금 더 일관적으로 사용됨.
   * 조건의 복잡함이 있다면 일단 이 조건들을 정리를 해본 다음에 조건이 너무 많다면 그땐 switch문을 고려하는 것이 더 낫다. 
  */
  function example() {
    switch () {
      case value :
        
        break;

      default:
        break;
    }
  }
```
<br>

---
### 2. case 02
```js

  /**
   * if문의 중첩이 일어나는 경우 -> 헷갈림
   * 사람을 위해 코드를 작성한다는 것을 생각해야함.
   * ()를 사용하면 함수의 느낌도 있지만, 연산자 입장에선 우선순위가 생성된다.
   * 조건에도 ()를 사용하면 구분을 지을 수 있다.
  */

  // 변경 전
  const example = condition1
    ? a === 0 
      ? 'zero' 
      : 'positive';
    : 'negative';

  // 변경 후
  const example = condition1
    ? ((a === 0 )? 'zero' : 'positive';)
    : 'negative';
```
<br>

---
### 3. case 03
```js
  /**
   * 삼항연산자 사용은 값이 null(빈값)일 때도 충분히 유용하게 사용할 수 있다. 
  */

// 삼항 연산자 사용
  const welcomeMessage = (isLogin) => {
    const name = isLogin ? getName() : '이름없음';

    return `안녕하세요 ${name}`;
  }

  // if 문 사용
  const welcomeMessage = (isLogin) => {

    if( isLogin ){
      return `안녕하세요 ${getName()}`
    }  
    
    return `안녕하세요 이름없음`;
  }
```
<br>

---
### 4. case 04
- badcase 예제

```js

  /**
   * 안좋은 케이스 예제
   * alert는 window API
   * 삼항연산자를 써서 참인 값 혹은 식, 거짓인 값 혹은 식을 활용하면 좋은데 alert는 함수를 실행시키고 있다. 
   * alert는 void -> 반환이 없다는 것을 뜻한다. 
   * 반환이 없기 때문에 어떠한 값이 들어와도 결과가 똑같다. 
   * 억지로 숏코딩을 사용하고자 한다면 그냥 if문을 통해 분기처리하는 편을 고려해보자
  */

  function alertMessage(isAdult) {
    isAdult
      ? alert('입장이 가능합니다.') // undefined
      : alert('입장이 불가능합니다.');  // undefined
  }

  // if문 사용
  function alertMessage(isAdult) {
    
      if ( isAdult ) {
        alert('입장이 가능합니다.') 
      } else {
        alert('입장이 불가능합니다.') 
      }
  }

  // 삼항연산자 사용
  function alertMessage(isAdult) {
    return isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.'; 
  }

  // 변수에 담아 사용
  function alertMessage(isAdulut) {
    const isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.';

    if (isAdult) {
      // some logic
    }

    if (isAdult && gende === 'MAN') {

    }

    if (isAdult && gende === 'MAN') {
      
    }

    if (isAdult && gende === 'MAN') {
      
    }
  
  }
```
<br><br>

## 22. <b style="color: #458fed">Truthy & Falsy</b>
- JS는 동적인 언어다 보니까 형변환이 아주 자유롭다. 
- 사용자가 요구하지 않아도 형변환이 일어난다. 
- truthy & falsy 를 이용하면 코드를 다채롭게 바꿀 수 있고, 간단하게 응용을 할 수 있다.
- ||, && 연산자의 좌항과 우항에 넣는 값들도 truthy & falsy를 사용할 수 있다. 
- 철저한 검사가 필요하지 않은 간단한 로직이라면 truthy & falsy를 이용하는게 효율적이다.


---
### 1. case 01
```js
  if ('string'.length > 0) {
  }

  if (!isNaN(10)) {
  }

  if (boolean === true) {
  }

  // 참 같은 값(truthy)일때는 조건들이 필요가 없다. -> true(참)으로 인식
  if ('string'.length) {
  }

  if (10) {
  }

  if (true) {
  }

  // 거짓 같은 값(falsy) -> false(거짓)으로 인식
  if (undefined) {
  }

  if (null) {
  }

  if (false) {
  }
```
<br>

---
### 2. case 02
```js
  function printName(name) {
    if (name === undefined || name === null) {
      return '사람이 없네요';
    }

    return '안녕하세요 ' + name + '님';
  }

  printName()

  // truthy & falsy 를 사용했을 때
  /**
   * 위의 예제에서 문자열일 들어왔을떈 truthy, 문자열이 안들어왔을땐 falsy로 귀결
  */  
 function printName(name) {
    if (!name) {
      return '사람이 없네요';
    }

    return '안녕하세요 ' + name + '님';
  }

  printName()
```
<br><br>

## 23. <b style="color: #458fed">단축 평가(short-circuit evaluation)</b>
- 평가 -> 논리연산자, 삼항연산자, 값식문 등 평가로 이뤄져 있다.
- 단축평가도 위와 같이 비슷하지만, 다른 점이 있다.
- AND, OR 연산자를 보고 어떻게 단축이 되었는지 생각해보자.
- AND: 모두가 참이어야 참
- OR : 하나라도 참이면 참으로 인정
- 우항에서 좌항으로 넘어가는 과정에서의 단축이 일어난다.
- 우항 첫번쨰부터 값이 true인지를 확인하면서 좌항으로 넘어간다.
- AND 연산자는 모두가 참이어야 하기 때문에 순서대로 전부 확인한다.
- OR 연산자는 하나라도 참이어야 하기 때문에 순서대로 확인하다 참이 나오면 멈춘다.
- if, for문을 늘어지게 사용하는 것이 아니라 논리연산자를 활용해서 단축평가를 사용하자.

```js
/**
 * AND
*/
  true && true && '도달 O'  // '도달 O'
  true && false && '도달 X' // false

/**
* OR
*/
  false || false || '도달 O'  // '도달 O'
  true || true || '도달 X'  // true (가장 첫번째에 true값이 나와서 더이상 진행 할 필요가 없어서 첫번째 값 true가 리턴되었다.)
```
<br><br>

```js
// OR 연산자의 단축평가 예시 1

  // 변경 전
  function fetchData() {
    if (state.data) {
      return state.data;
    } else {
      return 'Fetching...';
    }
  }

  // 변경 후
  function fetchData() {
    return state.data || 'Fetching...';
  }
```
<br><br>

---
```js
// OR 연산자 단축평가 예시 2

  // 변경 전
  function favoriteDog(someDog) {
    let favoriteDog;

    if (someDog) {
      favoriteDog = dog;
    } else {
      favoriteDog = '냐용'
    }
    return favoriteDog + '입니다.';
  }

  favoriteDog() // 인자로 강아지 이름을 안넘기면 '냐용'
  favoriteDog('포메') // 인자로 강아지 이름을 넘기면 포메 입니다.

  // 변경 후
  function favoriteDog(someDog) {
    return (someDog || '냐옹') + '입니다.';
  }

  favoriteDog() // 인자로 강아지 이름을 안넘기면 '냐용' 입니다.
  // 인자에 아무것도 넘기지 않았을때 JS는 undefiend로 귀결된다. 
  // 왜냐면 JS 함수에 어떠한 값이 들어오지 않은 매개변수는 바로 undefined로 처리가 된다.
  // undefined는 바로 falsy로 귀결이 되기 때문에 or 연산자에 의해서 바로 '냐옹'이 호출되게 된다. 

  favoriteDog('포메') // 인자로 강아지 이름을 넘기면 포메 입니다.
```
<br><br>

---
```js
// 활성화된 유저의 이름을 반환해주는 함수
// AND 연산자를 활용한 단축 함수

  // 변경 전
  const getActiveUserName(user, isLogin) {
    if (isLogin) {
      if (user) {
        if (user.name) {
        return user.name
      } else {
        return '이름없음'
      }
      }
    }
  }

  // 변경 후
  const getActiveUserName(user, isLogin) {
    if (isLogin && user) {
      if (user.name) {
        return user.name
      } else {
        return '이름없음'
      }
    }
  }

  // OR 연산자도 같이 사용 한 변경 후
  const getActiveUserName(user, isLogin) {
    if (isLogin && user) {
      return user.name || '이름없음'
    }
  }
```