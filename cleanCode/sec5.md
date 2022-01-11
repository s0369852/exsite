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
<br><br>

## 24. <b style="color: #458fed">else if & else 피하기</b>
- else if에 대해서 promise의 then 체이닝이랑 비슷하다고 생각하는 경우들이 있다.
- then 체이닝 혹은 .(점)을 찍어서 하는 모든 행위들과 비슷하다고 생각하는 경우가 있다.
- 로직이 순차적으로 실행되면 실행되고 실행되면 실행되고 하는 것과 비슷하다고 생각하는 경우가 있다.
- 하지만, 그렇지 않다.
- else if를 사용한다는 것은 애초에 무언가 조건에 대해서 명확하게 생각하고 있지 못하는 상황일 수 있다는 것.
- else if를 아예 안쓰거나, 혹은 늘어질 경우에 switch문으로 대체를 하는게 낫다.
- else if를 사용할 때에는 pipe라인과 같이 흐른다라고 생각해선 안된다. 
- else if문을 사용하면 else 처리를 한번 하고 그 다음 if문이 동작한다는 것을 알아야 한다.
<br><br>

```js
// case 01.

const x = 1;

if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // x는 0과 같거나 크다.
} else if ( x > 0) {
  console.log('x는 0보다 크다');
} else {
  console.log('Else');
}

/**
 * 02, 03번은 논리적으로 같고, 언어가 이해하고 처리하는 방식도 마찬가지다.
 * else if의 경계를 떼어놔도 된다는 것이다. 
 * if 랑 else를 먼저 처리하고, 그 다음 바로 if문이 한번 더 실행되는게 else if와 같다는 것이다. 
 * else if를 계속 사용하지 않도록 의식적으로 훈련하는 것이 중요하다. 
*/

02.
if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // x는 0과 같거나 크다.
} else if ( x > 0) {
  console.log('x는 0보다 크다');
}

03. 
if (x >= 0) {
  console.log('x는 0과 같거나 크다'); // x는 0과 같거나 크다.
} else {
  if ( x > 0) {
    console.log('x는 0보다 크다');
  }
}

04. 
// 굳이 이 커버리지에 대해서 거대해지는 것보다는 명확하게 조건을 분리하는 것이 낫다.

if (x >= 0) {
  console.log('x는 0과 같거나 크다.') // x는 0과 같거나 크다.
}

if (x > 0) {
  console.log('x는 0보다 크다.')  // x는 0보다 크다. 
}
```
<br><br>

## 25. <b style="color: #458fed">else 피하기</b>
- else if와 else는 맹목적으로 사용할 필요가 없다. 
- else를 사용하게 되면 논리적으로 완전히 반전된 로직을 작성하게 된다. 
- if, else는 참일때의 반환과 거짓일때의 반환이 아주 명백하게 짜여져 있는 로직이 된다. 
- 이러한 로직이 필요한 경우 사용할 수 있지만, 그렇지 않은 경우에는 논리적으로나 스타일적으로 문제가 생길 수 있다. 
- 바로, 하나의 함수가 2가지 역할을 할때 문제가 생긴다. 
- else 문은 습관이 되어선 안된다. 

<br><br>

```js
// case 01.

  // 변환 전
  function getActiveUserName(user) {
    if (user.name) {
      return user.name;
    } else {
      return '이름없음';
    }
  }

  // 변환 후 (else 없애기)
  // JS는 return이 되면 return된 곳 까지만 실행이 된다. 
  function getActiveUserName(user) {
    if (user.name) {
      return user.name
    }

    return '이름없음';
  }

  // 변환 후 (단축평가)
  function getActiveUserName(user) {
    return user.name || '이름없음'
  }
```
<br><br>

---
```js
// case 02.

/**
 * age가 20 미만시 특수 함수 실행
 * 
 * 여기서 문제점.
 * 습관적으로 else를 사용해서 로직이 반전되어 성인이 아닌 사람이 왔을 경우에도 '안녕하세요'가 return이 되어야 하는데 else까지 오지 않아 로직이 실행이 안되게끔 해놓았다.
 * 
 * 함수가 1개의 역할만 해야하는데 2개의 역할로 통합을 시켜서 분리를 못해버리게 된 것.
*/

  // 변경 전
  function getHelloCustomer(user) {
    if (user.age < 20) {
      report(user);
    } else {
      return '안녕하세요';
    }
  }

  // 변경 후
  // 함수를 분리시키지 않고도 요구 사항을 충족하게 된다. 
  function getHelloCustomer(user) {
    if (user.age < 20) {
      report(user);
    } 
    
    return '안녕하세요';
  }
```
<br><br>

## 26. <b style="color: #458fed">Early Return</b>
- Early Return을 사용하면 depth가 줄어들기 때문에 많은 로직이 실행될때 굉장히 편하다.
- 수많은 로직들이 의존성이 생길 수가 있다. 
- 많은 로직들을 다룰때는 하나로 몰아놓는것이 사고하기에 편하다. 
- 수많은 Early Return을 만드는 것도 옳은 방법은 아니다.
- 하지만 로직이 굉장히 하나의 조건에만 의존적으로 작성이 되어있을때, if문들이 늘어나게 되는데, 이럴때는 Early Return으로 코드를 분리하면 로직의 흐름이 더 간단하고 명시적으로 변할 수 있다.
<br><br>

```js
// case 01.
/**
 * 로그인 관련된 함수
 * 만약에 로그인이 안되어있다라는게 서버에서 날라오면 브라우저에서 한번 토큰이 있는지 확인한다.
 * 토큰이 있는지 확인하고 유저의 닉네임이 존재하지 않으면 가입한적이 없다는 유저이므로 회원가입에 유저를 보낸다. 
 * 근데 만약 닉네임이 존재한다면 refreshToken();을 동작시키고 '로그인 성공'을 반환한다.
*/

  // 변환 전
  function loginService(isLogin, user) {
    if (!isLogin) {
      if (checkToken()) {
        if (!user.nickName) {
          return registerUser(user);
        } else {
          refreshToken();

          return '로그인 성공';
        }
      } else {
        throw new Error('No Token')
      }
    }
  }

  // 변환 후 (Early Return)
  function loginService(isLogin, user) {
    // Early Return
    /**
     * 함수를 미리 종료
     * 사고하기 편하다.
     * 검증 결과를 빠르게 명확하게 걸친다.
    */

    if (isLogin) {
      return
    }
    // 로그인이 되어 있으면 여기서 함수 종료.

    if (!checkToken()) {
      throw new Error('No Token')
    }
    // 만약에 토큰이 없으면 오류 메시지.

    if (!user.nickName) {
      return registerUser(user);
    }
    // 닉네임이 존재하지 않을경우 회원가입으로 보낸다.
    
    // 아래의 구간은 아무것도 조건에 걸리지 않는 정상적인 구간이구나라는 것을 알 수 있다.
    refreshToken();

    return '로그인 성공'; 
  }

  // 변환 후 (Early Return), 함수 분리
  function login(){
    refreshToken();

    return '로그인 성공'; 
  }

  function loginService(isLogin, user) {
    if (isLogin) {
      return
    }

    if (!checkToken()) {
      throw new Error('No Token')
    }

    if (!user.nickName) {
      return registerUser(user);
    }

    login()
  }
```
<br><br>

---
```js
// case 02.
/**
 * 오늘하루 컨디션이 좋을때만 모든 행위가 일어나도록 되어있다. 
*/

  // 변경 전
  function 오늘하루(condition, weather, isJob) {
    if (condition === 'GOOD') {
      공부();
      게임();
      유튜브보기();

      if (weather === 'GOOD') {
        운동();
        빨래();
      }

      if (isJob === 'GOOD') {
        야간업무()
        조기취침()
      }
    }
  }

  // 변경 후
  function 오늘하루(condition, weather, isJob) {
    if (condition !== 'GOOD') {
      return
    }
      
    공부();
    게임();
    유튜브보기();

    if (weather !== 'GOOD') {
      return
    }

    운동();
    빨래();

    if (isJob !== 'GOOD') {
      return
    }

    야간업무()
    조기취침()
  }
```
<br><br>

## 27. <b style="color: #458fed">부정 조건문 지양하기</b>
- NaN -> 검사할때 가장 헷갈리는 것중 하나.
- 생각을 여러번 해야한다는 점이 안좋다.
- 프로그래밍 언어 자체로 if문은 참(true)부터 온다.
<br><br>

### 부정 조건문을 그럼 언제 사용하는가?
- Early Return을 사용할 때
- 유효성 검증(Form Validation)
- 보안 혹은 계속 검사해야하는 로직

```js
  // 숫자일때만 동작하는 로직
  // isNaN을 한번 더 뒤집어야 하는 상황이 발생
  if (!isNaN(3)) {
    console.log('숫자입니다.')
  }

  // 차라리 함수를 만들고 함수에서 typeof를 이용해 비교하는 것이 덜 헷갈리는 방법
  function isNumber(num) {
    return !Number.isNan(num) && typeof num === 'number'
  }

  // 비추천
  if (!Number.isNaN(3)) {
    console.log('숫자입니다') // 숫자입니다.
  }

  // 추천
  if (isNumber(3)) {
    console.log('숫자입니다');  // 숫자입니다.
  }

const isCondition = true;
const isNotCondition = false;

  if (isCondition) {
    console.log('참인 경우에만 실행') 
  } else {
    console.log('거짓인 경우에만 실행')
  }

  if (!isCondition) {
    console.log('거짓인 경우에만 실행')
  }

  if (!isNotCondition) {
    console.log('거짓인 경우에만 실행')
  }
```
<br><br>

## 28. <b style="color: #458fed">Default Case 고려하기</b>
- 프로그램을 개발하고 협업을 하면서 만약 사용자에게 값을 얻지 못했을때 어떤 기본 값을 둘 것인지를 생각해봐야 한다.
- 팀의 코어한 유틸리티 함수나, 코어 라이브러리를 개발하는 팀에선 항상 기본값을 염두해두고 개발을 해야한다. 그래야 안전하고 확장성 높은 코드를 작성할 수 있다.
- 어떠한 라이브러리이든 default값을 굉장히 중요하게 생각한다. 
- 프론트엔드 개발자는 사용자의 실수를 예방하는 차원에서 Dafault Case를 의식적으로 고려해야 한다.

```js
// case 01.
/**
 * 만약 함수에 값을 넣지 않더라도 함수가 실행이 되었으면 하는 로직을 만들고 싶다면?
*/
  // 변경 전
  function sum(x,y) {
    return x + y
  }

  sum(100, 200)

  // 변경 후
  function sum(x,y) {
    x = x || 1;
    y = y || 1;
    return x + y
  }

  sum();
```
<br>

----
```js
// case 02.
/**
 * 특정 엘리먼트를 만들어주는 커스텀 함수
 * 그런데 항상 값을 입력하기가 귀찮다면?
 * 값을 넣지 않았을 때의 기본 값을 정해야 한다.
*/

  // 변경 전
  function createElement(type, height, width) {
    const element = document.createElement(type);

    element.style.height = height;
    element.style.width = width;

    return element;
  }

  createElement('div', 100, 200)

  // 변경 후
  function createElement(type, height, width) {
    const element = document.createElement(type || 'div');

    element.style.height = height || 100;
    element.style.width = width || 100;

    return element;
  }

  createElement()
```
<br>

----
```js
// case 03.
/**
 * 만약 사용자가 키값의 오타를 작성하게 된다면?
 * 사용자의 입력을 받는 프론트엔드 단의 잘못이 발생할 수 있는 경우라면 기본값을 당연히 고려해야 한다.
*/

  // 변경 전
  function registerDay(userInputDay) {
    switch (userInputDay) {
      case '월요일' : // some code
      case '화요일' : // some code
      case '수요일' : // some code
      case '목요일' : // some code
      case '금요일' : // some code
      case '토요일' : // some code
      case '일요일' : // some code
    }
  }

  e.target.value = '월료일'
  registerDay(e.target.value)

  // 변경 후
  function registerDay(userInputDay) {
    switch (userInputDay) {
      case '월요일' : // some code
      case '화요일' : // some code
      case '수요일' : // some code
      case '목요일' : // some code
      case '금요일' : // some code
      case '토요일' : // some code
      case '일요일' : // some code
      default :
        throw Error('입력값이 유효하지 않습니다.')
    }
  }

  e.target.value = '월료일'
  registerDay(e.target.value)
```
<br>

----
```js
// case 04.
/**
 * 리엑트에 있는 Switch 구문.
 * 누구나 Switch case문을 사용하면 마지막에는 edge case를 고려할 수 있다는 점.
 * => <Route component={NotFound} />
*/

  const Root = () => {
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/welcome" component={welcome} />
        <Route component={NotFound} />
      <Switch>
    </Router>
  }  
```
<br><br>

## 29. <b style="color: #458fed">명시적인 연산자 사용 지향하기</b>
- 연산자 우선순위에 대해서 안전하게 사용하는 방법을 추구
- 연산자 사용에 있어서 괄호()를 달아서 사용하는 것을 권장
- 우선순위를 넣어서 사람이 보기 편하게, 나중에 스스로 보기 편하게 만드는 것이 중요
- Redux에서 가장 추구하는 가치가 예측 가능한 상태 컨테이너
- 항상 예측가능한 코드를 짜야 한다.
- 명시적으로 작성하는 습관을 기르는 것이 좋다. 

```js
/**
 * 전위연산자(--number,++number)와 후위연산자(number--, number++)
 * 굉장히 헷갈리는 것중 하나, 특히 setTimeout 비동기 상황에 코드가 돌아간다거나 loop문 안에 증감에 대한 식이 들어간다거나 하면 코드가 굉장히 보기 힘들어지고 오류가 생겼을때 디버깅하기가 힘들어져서 예측하기가 어려워진다.
 * 예측 가능하고 디버깅 하기 쉬운
 * 연산자 우선 순위 (((x + y) * z) && token)
*/

// (몸무게 / (신장 x 신장))
// if ((isLogin && token) || user)

let number;

// 변경 전
function increment(number) {
  number--
  --number
}

function increment(number) {
  number++
  ++number
}

setTimeout( () => {

}, timeout);

while (condition) {
  number++
}

  // 변경 후
  function increment() {
    number = number - 1
  }

  function increment() {
    number = number + 1
  }
```