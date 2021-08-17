// 데이터 타입
/* 
  한줄의 명령이 끝나면 ;(세미콜론)을 통해서 명령이 끝났다는 것을 명시해준다. 
  기본적으로 하나의 명령은 한줄에 하나만 올 수 있도록 작성하는 것이 좋다. 
  자바스크립트 엔진에서는 기본적으로 ;(세미콜론)을 붙어있는 형태로 해석을 하고 동작을 시켜준다. 
  기본적인 bundeler 통해서 압축과정을 거치면 ;(세미콜론)이 붙어서 나온다. 
*/
console.log(typeof 'Hello world!')
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined); // 의도하지 않은 비어있는 값
console.log(typeof null); // 의도해서 비어놓은 값
console.log(typeof {});
console.log(typeof []);

import getType from './getType';
/**
 * import : 어떠한 내용을 가지고 오기 위함
 * from : 어디서 불러 오는 건지를 작성하기 위함
 * getType이라는 변수를 만들어 getType.js로 부터 그 내용을 가져오겠다.
 * 주변 경로를 잘 파악해서 입력해야 한다. 그렇지 않으면 node_modules 내부에서 찾게되기 때문.
 */

console.log(getType('123'))
console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))
/**
 * null, {}, [] 전부 다 object라는 단어로 데이터의 타입이 출력되는 것을 확인 할 수 있다.
 * {}(객체데이터)와 [](배열데이터)의 타입을 확인하기 위해서 typeof를 쓰기에는 무리가 있다.
 * 별개의 getType이라는 함수를 만들고 return값으로 인수에 대한 값의 타입을 나타나게 만들 수 있다. 
 */

// ------------------------------------------------------------------------------------------------------------------------------------------

// 산술 연산자 (arithemetic operator)
console.log( 1 + 2 )
console.log( 5 - 7 )
console.log( 3 * 4 )
console.log( 10 / 2)
console.log( 7 % 5)

// 할당 연산자 (assignment operator)
const ab = 2
let a = 2
// a = a + 1
a += 1 // a = a + 1
a -= 1 // a = a - 1
a *= 1 // a = a * 1
a /= 1 // a = a / 1
a %= 1 // a = a % 1

console.log(a)  // 3

// ------------------------------------------------------------------------------------------------------------------------------------------

// 비교 연산자 (comparision operator)
const ae = 13;
const be = 13;
console.log( ae == be )
console.log( ae !== be )
console.log( ae < be)
console.log( ae > be)
console.log( ae >= be)
console.log( ae <= be) // eqaual 기호는 꺽쇠괄호 뒤에 적어줘야 한다. 

function isEqual(x, y){
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

// 논리 연산자 (logical operator)
const ac = 1 === 1
const bc = 'AB' === 'ABC'
const cc = false

console.log(ac)
console.log(bc)
console.log(cc)

console.log('&&: ', ac && bc && cc ) // 그리고(AND) 연산자 -> 전부 다 true인 경우에만 true
console.log('&&: ', ac && bc ) 
console.log('&&: ', ac && cc )

console.log('||: ', ac || bc || cc ) // 또는(OR) 연산자 -> 비교 중 한가지만 이라도 true인 경우 true
console.log('&&: ', ac || bc )
console.log('&&: ', ac || bc )

console.log('!: ', !bc) //  부정(not) 연산자 => true면 false를 반환, false면 true를 반환

// ------------------------------------------------------------------------------------------------------------------------------------------

// 삼항 연산자 (ternary operator)
const ad = 1 < 2

if (ad) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log('삼항 연산자 : ', ad ? '참' : '거짓') // 물음표를 기준으로 앞의 값을 확인 그 값이 true면 콜론(:)기호의 앞부분을, false면 뒷 부분을 실행하는 구조를 가지고 있다.

// ------------------------------------------------------------------------------------------------------------------------------------------
import random from './getRandom'

// 조건문 (If statement)
// console.log(random())

const af = random()

if ( af === 0 ){
  console.log( 'af is 0' )
} else if (af === 2) {
  console.log( 'af is 2' )
} else if (af === 4) {
  console.log( 'af is 4' )
} else {
  console.log( 'rest...' )
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// 조건문 (Switch statement)
const ag = random()

switch (ag) {
  case 0:
    console.log( 'ag is 0' )
    break // 하나의 case가 끝나면 꼭 break로 종료를 해줘야 한다. 안그러면 다른 case까지 이어서 실행됨.
  case 2:
    console.log( 'ag is 2' )
    break
  case 4:
    console.log( 'ag is 4' )
    break
  default: 
    console.log('rest...')
    // case가 전부 다 해당이 안되면 맨 밑에서 default라는 키워드를 붙여줄 수 있다. 특정한 입력 값이 없고 나머지인 경우에만 붙여주는 것이기 때문에 바로 :(콜론)으로 마무리를 해주면 되고, 조건문의 else부문 처럼 마지막에 실행되는 부분이기 때문에 break가 따로 필요가 없다.
}

// 조건의 내용이 어떠한 변수가 특정한 값으로 딱 떨어지는 값으로 분기처리를 하고 있다면 이때는 if문 보다는 switch문을 사용하자

// ------------------------------------------------------------------------------------------------------------------------------------------

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')

// console.log(ulEl)

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ( (i + 1) % 2 === 0) {
    li.addEventListener('click', function (){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 반복문을 실행 할때 조건에서 사용되는 변수를 통상적으로 i라고 한다. (다른 이름도 상관없다.)

// ------------------------------------------------------------------------------------------------------------------------------------------

// 변수 유효범위 (Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const ah = 123
    console.log(ah)
  }
  /**
   * 변수는 자신이 동작할 수 있는 유효한 범위를 갖는다. 
   * let, const 키워드를 사용하게 되면 그 변수가 선언 되어있는 특정한 블록 내부 '{}(중괄호)'가 하나의 유효범위가 된다. 
   * 변수가 동작할 수 있는 유효범위 안에 존재하긴 하나, 변수가 실질적으로 할당되는 코드보다 실행코드가 먼저 실행된다면 undefined라는 값이 나온다.
   * let과 const는 블록레벨의 유효범위를 갖는다. 
   * var 라는 키워드를 사용했을때는 블록레벨의 유효범위가 아니고, 함수레벨의 유효범위를 갖는다. 함수 범위 안에서는 어디서 든지 사용할 수 있다. 대신에 값이 지정되기 전에 실행코드를 입력할 경우 동일하게 undefined라는 값이 나온다.
   * var는 함수레벨의 유효범위를 갖고 있다보니 범위가 크다. 그러다 보면 의도하지 않은 범위에서 이 변수가 사용이 될 수 있고, 그만큼 메모리를 차지하고 있고, 결국 확인을 하지 못한 메모리 누수가 발생할 수 있다.
   * 일반적인 경우에는 var 보단 let, const를 이용하는 것이 관리에 편하다.
   */
}
scope()

// ------------------------------------------------------------------------------------------------------------------------------------------

// 형 변환 (Type Conversion)
const ai = 1
const bi = '1'

console.log('=== : ', ai === bi )
console.log('== : ', ai == bi ) // == : 동등연산자를 사용할 경우 자동으로 형변환이 일어난다.
/**
 * JS를 이용할 때 되도록이면 동등연산자(==)를 사용하는 것을 권장하지 않는다.
 * 의도하지 않게 서로 다른 값이 같다라는 결과가 나올 수 있기 때문
 * 일치 연산자(===) 사용을 권장한다. 
 */

/** Truthy (참 같은 값)
 * true, {}, [], 1, 2, 'false', -12, '3.14' ...
 */

/** Falsy (거짓 같은 값)
 * false, '', null, undefined, 0, -0, NaN
 * '' -> 빈 문자 데이터
 * NaN(Not a Number)는 데이터 자체는 숫자 데이터
 * 1 + undefined -> NaN, 숫자 데이터에 산술연산자를 사용해 어떤 값을 구했는데 구한 값이 숫자로 판단할 수 없는 특정 값을 말한다. 
 */

if ('false') {
  console.log(123)
}

// 함수 실행

// 함수선언빙식 (기명함수)
function sum(x,y) {
  return x + y
}

sum(1,3)

// 함수 표현 (익명함수를 변수에 담아서 사용)
const sumTwo = function(x,y){
  return x + y
}

sumTwo(4,5)

// 함수 내부에서 return 키워드를 사용하는 것은 return의 내용이 함수 밖으로 반환된다는 것도 의미하지만, 추가적으로 사용된 그 부분에서 함수가 종료된다는 것도 의미한다. return코드 이하의 내용은 실행이 되지 않는다.

// 조건을 만들어서 특정한 내용을 실행할 것인지 실행하지 않을 것인지를 return키워드를 통해서 함수 안에서 작성할 수 있다.

function sumThree(x,y) {
  if (x < 2) {
    return
  } 
  return x + y
}

console.log( sumThree(1,3) )
console.log( sumThree(7,3) )

/** 
 * 함수 안에서는 따로 매개변수를 지정하지 않아도 arguments라는 특정한 객체를 사용할 수 있다.
 * arguments는 함수 안에서 언제든지 사용 할 수 있다. 
 * arguments객체에는 인수로 넣은 매개변수가 배열형태로 들어가 있다.
 * 인수를 직관적으로 보기 위해 arguments가 아닌 명시적인 이름을 권장하지만, 대신에 인수가 너무 많거나 매개변수 이름을 일일이 지정할 수 없는 경우에 arguments 객체가 사용된다. 
*/


function sumFour() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log( sumFour(8,5) ) 

