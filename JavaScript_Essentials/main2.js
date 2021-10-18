// JS 데이터

// String: "", '', ``
/**
 * 특정한 기호를 통해서 데이터를 손쉽게 만들어내는 방식을 리터럴 방식이라고 한다. (권장)
 * 리터럴 방식이 아니라면 new라는 키워드를 통해서 그때 그때 데이터를 생성해야 한다. -> 생성자
 * prototype -> prototype으로 지정한 메소드는 메모리에 딱 한번만 만들어 지고, 그것을 앞에 있는 생성자가 new라는 키워드로 만들어 내는 인스턴스에서 언제든지 활용할 수 있다. (new라는 키워드 대신에 리터럴방식을 통해서 만들어진 데이터에도 사용할 수 있다.)
 */

// String.prototype.indexOf()
const result = 'hello world!'.indexOf('world')
console.log(result)

const str = '0123'
console.log(str.length)

const str2 = 'hello world!'
console.log(str2.indexOf('BOTTLE') !== -1)
console.log(str2.slice(6, 11))
console.log(str2.replace('world', 'BOTTLE'))
console.log(str2.replace(' world!', ''))

const EMAIL = 'bottle@mail.com'
console.log(EMAIL.match(/.+(?=@)/)) // 정규표현식 사용 ex. /.+(?=@)/
console.log(EMAIL.match(/.+(?=@)/)[0])

const str3 = '     Hello world     '
console.log(str3)
console.log(str3.trim())  // .trim() -> 특정한 문자 데이터의 연결된 모든 공백문자 제거
// ------------------------------------------------------------------------------------------------------------------------------------------

// Number
const pi = 3.14159265358979
console.log(pi)

const str4 = pi.toFixed(2)
console.log(str4)
console.log(typeof str4)

const integer = parseInt(str4) // 전역함수(global), 정수
const float = parseFloat(str4)  // 전역함수(global), 소수점 유지하면서 문자데이터를 숫자데이터로 변환
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abs: ', Math.abs(-12))
console.log('min: ', Math.min(2, 8))
console.log('max: ', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14))
console.log('floor: ', Math.floor(3.14))
console.log('round: ', Math.round(3.14))
console.log('random: ', Math.random())


// Boolean: true, false
// undefined
// null
// ------------------------------------------------------------------------------------------------------------------------------------------

// Array: []
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);

console.log(found);

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)
console.log([].length)

// .concat() -> 2개의 배열 데이터를 병합해서 새로운 배열 데이터를 그 자리에 반환, 원본의 데이터는 손상되지 않는다.
console.log(numbers.concat(fruits))

// .forEach() -> 메소드가 붙어있는 배열 데이터의 아이템 갯수 만큼 인수로 사용된 콜백 함수가 반복적으로 실행이 된다. 
fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})

// .map() -> 배열 데이터의 아이템 갯수 만큼 인수로 사용된 콜백 함수가 반복적으로 실행, return 키워드를 사용해서 콜백 함수 밖으로 반환 할 수 있다.
// .map()은 내부의 콜백에서 반환된 특정한 데이터를 기준으로해서 데이터들의 모음인 새로운 배열을 메소드가 실행된 자리에서 반환해 준다. 반환된 값이 지정한 변수에 할당이 된다. 
// forEach()와 map()의 차이점은 return 값을 통해 콜백 함수 밖으로 반환할 수 있냐 없느냐의 차이. 

const a = fruits.forEach(function (fruit, i) {
  console.log(`${fruit}-${i}`)
})
console.log(a) // forEach의 경우에는 따로 forEach메소드가 실행되고 반환되는 내용이 없기 때문에 undefinded가 출력된다. 

const b = fruits.map( (fruit, i) => ({ 
  id: i,
  name: fruit
}))
console.log(b)

// .filter() -> 어떠한 배열 데이터 안에 들어있는 각각의 아이템들을 특정한 기준에 의해서 필터링을 하는 것(true인 데이터만), 필터링된 결과를 새로운 배열 데이터로 반환한다. 
// .filter()로 만들어진 새로운 배열은 원본 배열의 갯수와 다를 수 있다. (map()으로 만들어진 새로운 배열은 원본의 배열의 갯수와 동일하다.)
// map(), filter()는 원본의 배열 데이터를 훼손하지 않는다. (원본의 영향이 없이 새로운 배열을 반환하는 메소드.)
const c = numbers.map(number => number < 3)
console.log(c)

const d = numbers.filter(number => number < 3)
console.log(d)

// .find() & .findIndex()
// .find() -> 콜백 함수를 통해 배열 데이터를 가지고 반복을 하는데 어떠한 기준에 true값이 나타나게 되면 더 이상 반복은 하지 않는다. (true가 나온 데이터에서 멈춘다.)
// .findIndex() -> find를 통해 배열 데이터에서 기준에 충족하는 데이터를 찾고, 그 데이터가 제로베이스로 따졌을 때 몇 번째 인지를 인덱스 번호로 반환해준다. 
const e = fruits.find(fruit => /^B/.test(fruit))
console.log(e)

const f = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(f)

// .includes() -> 배열 데이터 부분에 인수로 사용된 특정한 데이터가 포함이 되어있는지 확인을 하는 것 (불린데이터로 반환)
const g = numbers.includes(3)
console.log(g)

const h = numbers.includes('HELLO')
console.log(h)

// .push() & .unshift() -> ***** 배열 데이터 원본이 수정 됨 *****
// .push() -> 배열의 가장 뒤쪽에 특정한 인수의 데이터를 밀어넣는다(삽입).
// .unshift() -> 배열의 가장 앞쪽에 특정한 인수의 데이터를 밀어넣는다(삽입).
numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

// .reverse() -> ***** 배열 데이터 원본이 수정 됨 *****
// .reverse() -> 배열 데이터를 거꾸로 뒤집게 된다.
numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

// .splice() -> ***** 배열 데이터 원본이 수정 됨 *****
// .splice() -> 첫번째 값은 배열 데이터의 인덱스 값(해당 인덱스 부터), 두번째 값은 해당 배열 데이터에서 지울 데이터의 개수, 세번째 값은 삽입하려는 데이터
// .splice() -> 몇번째 아이템을 지우는 용도 일 수 도 있고, 몇번째 자리에 새로운 아이템을 끼워넣는 용도 일 수도 있다 (삭제 & 삽입 가능)
numbers.splice(2, 0)
numbers.splice(2, 0, '999')
numbers.splice(2, 1, 99)

console.log(numbers)

fruits.splice(1, 0, 'Orange')

console.log(fruits)
// ------------------------------------------------------------------------------------------------------------------------------------------

// Object: {}
/**
 * Object.prototype().~
 * object.assign() -> .prototype()이 붙어있지 않는 메소드를 '정적(static) 메소드' 라고 한다.
 * 정적메소드(static) -> 리터럴방식 [ex. ( {}.assign() / userAge.assign() ) -> error] 에는 직접적으로 사용을 할 수가 없다.
 * object의 정적메소드(static)의 활용방법은 따로 있다. -> ex. Object(전역객체).assign()
 */

// .assign() -> 첫번째 인수로 들어가져 있는 객체에다가 두번째 인수로 들어가 있는 객체를 병합하여 병합된 객체를 반환해준다.
// 객체 데이터에서 속성의 이름은 고유해야 하며, 중복된 경우 첫번째 인수(대상 객체)가 두번쨰 인수(출처 객체)로 들어오는 객체로 덮여씌워진다.
// 대상 객체(첫번째 인수)가 하나이고, 출처 객체(두번째 인수 부터)는 여러개가 올 수 있다.
const userAge = {
  // key: value
  name: 'Bottle',
  age: 85
}

const userEmail = {
  name: 'Bottle',
  email: 'Bottle@mail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge) // (대상 객체) 원본 객체 데이터 수정 O
console.log(userEmail) // (출처 객체) 원본 객체 데이터 수정 X
console.log(target === userAge) // true

const i = { k : 123 }
const j = { k : 123 }
console.log( i === j ) // false
/**
 * 객체 데이터의 생김새가 똑같지만 서로 다른 객체다. -> 자바스크립트 데이터의 불변성과 가변성 관련
 * 하나의 객체 데이터는 특정한 메모르 주소에 값이 할당되어 있다.
 * 이때 userAge라는 변수는 메모리에 있는 특정한 객체 데이터의 메모리 주소만 참고해서 가지고 있는 것. 그것을 사용할 때 메모리 주소에 있는 내용만 가지고 와서 참고로 사용하고 있는 것. -> 참조형 데이터
 * 참조형 데이터 -> 객체데이터{}, 배열데이터[], 함수function : 메모리에 있는 특정 주소를 참조만 해서 사용을 한다.
 * 실제 객체 데이터가 저장된 위치는 하나이고, 이름이 달라지더라도 저장된 위치를 같이 바라보고 있는 것 (userAge, target)
 * 생긴 건 똑같지만 서로 다른 메모리 주소를 바라보고 있기 때문에 사실상 다른 것이다 판단하여 일치 하지 않는 것 (i, j)
 */

// userAge2 와 userEmail2 을 합쳐서 새로운 객체 데이터를 만드는 방법
// 대상 객체에 {} 비어있는 새로운 객체 리터럴을 작성, 출처 객체에 userAge2, userEmail2를 작성
const userAge2 = {
  // key: value
  name: 'Bottle2',
  age: 90
}

const userEmail2 = {
  name: 'Bottle2',
  email: 'Bottle2@mail.com'
}

const target2 = Object.assign( {}, userAge2, userEmail2)
console.log(target2) // 비어있는 대상 객체에 새로운 객체 데이터를 생성 
console.log(userAge2) // (출처 객체) 원본 객체 데이터 수정 X
console.log(userEmail2) // (출처 객체) 원본 객체 데이터 수정 X
console.log(target2 === userAge2) // false

// 복사의 개념
const userAge3 = {
  // key: value
  name: 'Bottle2',
  age: 90
}

const target3 = Object.assign( {}, userAge3, )
console.log(target3) // 비어있는 대상 객체에 새로운 객체 데이터를 생성 (출처 객체를 복사)
console.log(userAge3) // (출처 객체) 원본 객체 데이터 수정 X
console.log(target3 === userAge3) // false

// .key()
const user = {
  name: 'Bottle',
  age: 70,
  email: 'Bottle@mail.com'
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']

console.log(user.email)
console.log(user['email']) // 객체의 key나 value를 하나의 배열 데이터로 만들기 위한 방법으로 용이하게 쓰이는 인덱싱 작성법 -> 동적으로 객체 데이터의 내용들을 가져와서 활용할 수 있다.

const values = keys.map(key => user[key])
console.log(values)

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user2 = {
  name: 'Bottle',
  age: 85,
  email: 'Bottle.email.com',
  address: 'USA'
}
const { name: bottle, age, email, address = 'korea' } = user2
// E.g, user.address

console.log(`사용자의 이름은 ${bottle}입니다.`)
console.log(`${bottle}의 나이는 ${age}세 입니다.`)
console.log(`${bottle}의 이메일 주소는 ${email}입니다.`)
console.log(address) // undefined -> 아직 데이터가 들어있지 않다. / undefined가 나올때, 'korea'와 같이 같이 기본값을 정해줄 수 있다. / USA -> address의 해당 데이터가 있는 경우 기본값으로 설정해둔 'korea'는 값은 무시된다. 

/**
 * 구조 분해 할당이라는 문법을 사용할 때, 만약 어떤 데이터를 꺼내올때 그 데이터가 undefined로 비어있다면, 할당 연산자(=)를 통해서 기본값을 정해줄 수 있다.
 * name이라는 변수의 이름이 적합하지 않거나, 다른 변수의 이름을 사용하고 싶을 때는 콜론(:) 기호를 붙여서 'bottle'로 바꾼 것 같이 변수의 이름을 바꿔줄 수 있다. 
 * 속성의 데이터를 꺼내올 때 속성의 이름을 바꾸고 싶다면 "꺼내오는 것은 그 속성의 이름을 꺼내오지만" 사용할 때는 다른 이름으로 바꾸고 싶다면 콜론(:)을 적고 다른 이름으로 적어주면 된다.
 */

// fruits = ['Cherry', 'Orange', 'Banana', 'Apple']
const [a2, b2, c2, d2, e2] = fruits
console.log(a2, b2, c2, d2, e2) // Cherry Orange Banana Apple undefined 

const [, , b3] = fruits
console.log(b3)

/**
 * 배열의 경우에는 순서대로 인덱싱되어 들어가져 있는데, 구조분해에서 꺼내올 때도 단순하게 "순서대로 꺼내오면" 된다.
 * 배열의 구조분해는 순서대로 추출되는 것이기 때문에, 순서를 명확하게 적어주기 위해서는 쉼표(,)를 꼭 적어줘야 하고 추출하지 않을 배열은 명시하지 않으면 된다.
 */

// ------------------------------------------------------------------------------------------------------------------------------------------

// 전개 연산자 (Spread) -> ...
// 배열 데이터가 전개되서 만들어 짐

const fruits2 = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits2)
console.log(...fruits2)
// console.log('Apple', 'Banana', 'Cherry')

// function toObject(a, b, ...c) {
//   return {
//     a: a, // 속성의 이름과 변수의 이름(데이터의 이름)이 같으면 축약해서 만들 수 있다. -> a 
//     b,
//     c
//   }
// }
const toObject = (a, b, ...c) => ({a, b, c})
/** 
 * {}중괄호는 화살표 함수에서 함수의 범위를 나타내는 블럭으로 쓰인다. (객체데이터의 {}중괄호와 다르다.)
 * 그렇기 때문에 화살표 함수에서 객체 데이터를 축약하고 싶다면, 소괄호()를 씌우고 중괄호{}를 넣어줘야 한다.
 */ 


console.log(toObject(...fruits2)) // {a: 'Apple', b: 'Banana', c: Array(2)}
// 매개변수에도 전개연산자를 사용할 수 있고, 그 때는 매개변수가 나머지의 모든 인수들을 받아내는 역할을 함 = rest parameter(나머지 매개변수)

// ------------------------------------------------------------------------------------------------------------------------------------------

// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// ----------------------------------------------------
// |1:          |2:          |3:          |4:          
// ----------------------------------------------------
/** *********
 * 원리는 해당하는 데이터를 비교할 때는 사실상 메모리에 있는 특정한 주소들이 동일한지를 비교하는 것이다.
 * 원시 데이터에서는 생긴 것이 같은지 1 === 1을 보고 동일한지 아닌지를 파악해도 된다. (원시 데이터에서만 가능)
 * 새로운 원시 데이터를 사용했을 때(ex. let c4 = 1), 원시 데이터가 기존의 메모리 주소의 들어있다면 그 원시 데이터를 새로운 메모리에 새롭게 만드는 것이 아닌,
 * 기존의 존재하는 메모리 주소만 바라보도록 만드는 것이다. 
 * 즉, 원시 데이터들은 새롭게 만들어지는 것이 아니고 항상 불변한다는 개념이 된다. -> 불변성
 */
let a4 = 1
let b4 = 4
console.log(a4, b4, a4 === b4)
b4 = a4
console.log(a4, b4, a4 === b4)
a4 = 7
console.log(a4, b4, a4 === b4)
let c4 = 1
console.log(b4, c4, b4 === c4)


// ------------------------------------------------------------
// |1: {      }    |2: {      }    |3: {      }    |4: {      } 
// ------------------------------------------------------------
/**
 * 참조형 데이터를 이해하기 위해선 불변성에 대해서 이해해야 한다. 
 * 참조형 데이터는 생긴 것이 똑같아도 서로 같은 데이터가 아닐 수도 있다. 
 * 참조형 데이터는 원시형 데이터와 다르게 새로운 값을 만들때마다, 새로운 메모리 주소로 할당되는 구조를 가지고 있다. -> 가변성
 * 같은 메모리를 바라보고 있는 여러개의 변수들이 있을 경우 한쪽에 있는 변수의 값을 수정하게 되면, 다른 값에서 확인을 할때 의도하지 않게 이미 값이 바뀌어져 있는 형태가 될 수 있다.
 * 참조형 데이터를 할당 연산자로 다른 변수에 할당할 때, 메모리 주소만 옮겨가게 하는 것이라면 상관없지만, 그렇지 않고 a라는 변수와 b라는 변수를 완전히 구분해서 관리하고 싶다고 한다면,
 * 복사라는 개념을 사용해야 한다. (얕은 복사 -> 표면만 복사 & 깊은 복사 -> 내부에 있는 모든 참조 관계까지 새로운 메모리로 복사해 만드는 개념)
 */
let a0 = { k0 : 1 }
let b0 = { k0 : 1 }
console.log(a0, b0, a0 === b0)
a0.k0 = 7
b0 = a0
console.log(a0, b0, a0 === b0)
a0.k0 = 2 
console.log(a0, b0, a0 === b0)
let c0 = b0
console.log(a0, b0, c0, a0 === c0)
a0.k0 = 9
console.log(a0, b0, c0, a0 === c0)

// ------------------------------------------------------------------------------------------------------------------------------------------

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// ----------------------------------------------------
// |1:          |2:          |3:          |4:          
// ----------------------------------------------------
const user4 = {
  name: 'Bottle' ,
  age: 88,
  emails: ['one@email.com']
}
const copyUser = user4
console.log(copyUser === user4)

const copyUser2 = Object.assign({}, user4) // (얕은 복사) 
console.log(copyUser2 === user4)
// 간단하게 복사하는 방법 (Object.assign({}, ) )-> 첫번쨰 인수로 빈 객체 데이터(대상 객체), 두번째 인수로는 복사할 객체 데이터를 넣어줍니다.(출처 객체)
// 참조형 데이터 (특히, 객체, 배열 데이터)를 복사해서 많이 이용

const copyUser3 = {...user4} // 전개 연산자를 통한 복사 (얕은 복사)
console.log(copyUser3 === user4)


user4.age = 28
console.log('user4', user4)
console.log('copyUser', copyUser)
console.log('copyUser2', copyUser2)
console.log('copyUser3', copyUser3)

console.log('------')
console.log('------')

user4.emails.push('two@email.co.kr')
console.log(user4.emails === copyUser3.emails) // true
/**
 * 우리가 복사한 것은 user4라는 객체데이터, user4안에 있는 배열 데이터를 복사하진 않았다. 
 * user4 안에 들어있는 새로운 참조 데이터인 email이라는 배열 데이터는 따로 복사한 것이 아니고 그대로 같은 메모리 주소만 공유하고 있는 것이다.
 * 그렇기 때문에 일치연산자를 사용했을때 배열의 메모리 주소는 같아 true 값이 나온 것. 
 * 위와 같이 얕은 복사를 하였을 경우 표면만 복사가 된 것이기 때문에 속의 내용은 전혀 복사가 되지 않았다.
 */
console.log('user4', user4)
console.log('copyUser3', copyUser3)

console.log('------')
console.log('------')

/**
 * 깊은 복사의 경우 javaScript로 직접접으로 구현하기가 복잡하다.
 * lodash(패키지)을 통해서 구현
 * 참조형 데이터 안에 또 다른 참조형 데이터가 있다면 얕은 복사보다는 깊은 복사가 필요하다.
 */
import _ from 'lodash' // lodash에서 권장하기를 _ 사용해서 여러가지 기능들을 사용하도록 함, _는 하나의 객체데이터 

const copyUser4 = _.cloneDeep(user4)
// _cloneDeep -> _clone과 비슷한데, 재귀적(하나의 데이터 안에서 어떠한 내용이 반복적으로 실행되는 것)으로 값을 복사 -> 반복 실행하면서 모든 값들을 복사
user4.age = 30
user4.emails.push('three@email.net')
console.log(user4.emails === copyUser4.emails)

console.log(copyUser4 === user4)
console.log('user4', user4)
console.log('copyUser4', copyUser4)

