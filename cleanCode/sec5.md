# 섹션5. 분기 다루기

## 20.<b style="color: #458fed">값식문</b>
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