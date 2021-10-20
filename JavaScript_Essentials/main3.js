// import & export -> 가져오기&내보내기
import getType from './getType' // getType.js
import getRandom from './getRandom' // getRandom.js

console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3]))
console.log(getRandom(), getRandom())

console.log('------------------------------------------')
console.log('------------------------------------------')

// import { random, user as Bottle } from './random'
// 이름이 지정된 통로로 나오는 데이터의 경우에는 { named }, {}로 감싸줘야 한다. 
// 객체 구조 분해때 처럼 추출한 데이터의 이름을 바꾸고 싶다면 ':'(콜론) 대신에 'as'를 작성하여 준다.
// console.log(random(), Bottle)

import * as R from './random' // 지정된 함수를 한번에 꺼내오고 싶다면 '* as named' 를 적어 한번에 꺼내올 수 있다. 
// 와일드카드(Wildcard Character, *)는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호
console.log(R)
// 이름이 없는 기본(export default)함수와 이름이 지정된 함수를 같이 사용할 수 있다.

console.log('------------------------------------------------')
console.log('------------------------------------------------')

/**
 * JS는 외부에 있는 JS를 가져오는 import라는 하나의 통로가 존재, export로 내보낼 때에는 default export와 namead export 2가지의 통로가 존재한다.
 * default export -> 이름을 따로 지정하지 않아도 된다. (기본)
 * named export -> 이름을 꼭 지정해야 한다.  
 * 내보내는 코드가 어디선가에서 사용할 수 있는 형태의 파일을 만드는 것을 모듈이라고 한다.
 * JS 파일은 언제든지 모듈이 될 수 있다. 꼭 내보내기(export)를 해야 모듈이 되는 것은 아니다. 
 * 기본(export default)에서는 하나의 파일에서 하나의 데이터만 통로로 내보낼 수 있다.
 * 이름이 지정된(named) 통로에서는 이름만 지정되어 있으면 몇개의 데이터를 내보내던지 상관이 없다. 
 */

// ---------------------------------------------------------------------------------------------
import _ from 'lodash'  // From `node_modules`!

const usersA = [
  { userId: '1', name: 'Bottle' },
  { userId: '2', name: 'Neo'}
]

const usersB = [
  { userId: '1', name: 'Bottle' },
  { userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // .uniqBy -> 중복된 데이터 제거 -> .uniqBy(중복된 배열 데이터, 중복을 구분 할 고유의 속성의 이름)
// 첫번째 인수로는 중복된 배열 데이터, 두번째 인수로는 중복을 구분하기 위한 고유한 속성의 이름

const usersD = _.unionBy(usersA, usersB, 'userId') // 중복이 발생할 데이터가 2개가 있고 아직 합치기 전이라면 .unionBy를 사용한다.
/** 
 * 중복이 발생할 데이터 순서대로 인수를 넣어준다.  
 * 넣은 배열을 합치는데, 고유값으로 사용할 속성의 이름을 마지막 인수로 적어준다.
 * 중복된 요소를 제거하고 새롭게 합쳐진 배열이 반환된다. 
*/ 
console.log('unionBy', usersD)

console.log('------------------------------------------------')
console.log('------------------------------------------------')

const users = [
  { userId: '1', name: 'Bottle'},
  { userId: '2', name: 'Neo'},
  { userId: '3', name: 'Amy'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Lewis'}
]

const foundUser = _.find(users, {name: 'Amy'}) // .find(찾고자하는 데이터 기준, 찾고자 하는 데이터(ex.객체데이터)) -> 해당하는 데이터를 반환
const foundUserIndex = _.findIndex(users, {name: 'Amy'})  // .findIndex() -> 해당하는 객체의 index 번호를 반환
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'Bottle' })
console.log(users)

console.log('------------------------------------------------')
console.log('------------------------------------------------')

// ---------------------------------------------------------------------------------------------
/**
 * JSON (JavaScript Object Notation)
 * 자바스크립트의 데이터를 표현하는 하나의 포멧.
 * key-value형태의 객체 데이터와 유사.
 * .json이라는 확장자를 가진 하나의 파일로 데이터를 만들어 낼 수 있다. 
 * JSON의 공식 인터넷 미디어 타입은 application/json 이며, JSON의 파일 확장자는 .json 이다. 
 * 속성-값 쌍 또는 "키-값 쌍"으로 이뤄진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포멧이다.
 * 비동기 브라우저/서버 통신 (AJAX)을 위해, 넓게는 XML(AJAX가 사용)을 대체하는 주요 데이터 포맷이다. 
 * 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다. 
 * 자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수 값을 표현하는 데 적합하다.

 * 기본 자료형 (숫자, 문자열, 불린, 배열, 객체, null / undefined만 제외하고 다 사용 가능)
    -> 문자열의 경우에는 큰 따옴표("")만 사용이 가능하며, 역슬래시 이스케이프(\) 문법을 지원
 */
import myData from './myData.json' // 확장자 생략은 확장자가 .js 인 경우에만 가능, 다른 확장자의 파일인 경우에는 제대로 명시해줘야 한다.
console.log(myData)
/**
 * .json이라는 확장자를 가지고 있는 파일은 하나의 문자(string) 데이터
 * import를 통해 .json을 가져오면 json은 기본적인 포멧의 규칙이 있기 때문에, 자동으로 변환되어서 실제 객체데이터 처럼 출력이 가능
 * 정확하게 .json이라는 파일은 하나의 문자 데이터로 이루어져있다.   
 * 통신을 하기 위한 용도, 가볍게 사용하는 용도로는 적합하지 않다. 
 * 사용하려는 목적이 명확, 최대한 경량화를 시키기 위함. -> 하나의 메모리만 참조할 수 있는 큰 덩어리의 문자데이터로 관리가 된다.
*/

const numOne = {
  name: 'Bottle',
  age: 85,
  emails: [
    'one@email.com',
    'two@email.com'
  ]
}
/**
 * 자바스크립트에서 기본적으로 키(속성) 값에는 따옴표를 붙이지는 않으나, 붙여서 사용해도 무방하다 -> 'name': 'Bottle'
 * 예외적으로 키(속성) 값에 따옴표를 붙이는 경우는 특수문자가 붙거나 하는 경우 -> 'company-name!': 'Apple'
 * 보통 키(속성) 값에는 카멜케이스로 작성하는 것이 대부분이지만 예외적인 상황은 있을 수 있다.
 * JSON파일의 경우에는 '키-값 쌍'에 모두 큰 따옴표를 붙여줘야 한다. -> "name": "js-test"
 * node.js 환경에서 npm을 통해서 패키지를 관리하는 프로젝트는 기본적으로, package.json 파일이 자동으로 해석이 되서 프로젝트를 구성할 수 있는 구조가 된다.
 * 터미널에서 npm init -y 입력하면 자동으로 package.json 파일이 만들어진다. 
 * json이라는 확장자를 가진 하나의 파일이 곧 하나의 데이터가 된다.
 * 하나의 파일이 하나의 데이터이기 때문에 예를들어 하나의 파일에 숫자데이터, 불린데이터 등 2개 이상의 종류가 다른 데이터는 들어갈 수 없다.
 */
console.log('numOne', numOne)

const strOne = JSON.stringify(numOne) // JSON은 자바스크립트 전체에서 사용할 수 있는 "전역 객체" 이다. 
// 자바스크립트 파일 내부에서 어떤 특정한 데이터를 JSON의 포멧으로 문자데이터화 시켜주는 메소드 -> .stringify() 
console.log('strOne', strOne)
console.log(typeof strOne)

const objOne = JSON.parse(strOne)
// JSON을 분석해서 자바스크립트에서 활용할 수 있는 하나의 데이터로 제조립하는 메소드 -> .parse()
console.log('objOne', objOne)