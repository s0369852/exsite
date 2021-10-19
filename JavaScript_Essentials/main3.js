// import & export -> 가져오기&내보내기
import _ from 'lodash'  // From `node_modules`!
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

/**
 * JS는 외부에 있는 JS를 가져오는 import라는 하나의 통로가 존재, export로 내보낼 때에는 default export와 namead export 2가지의 통로가 존재한다.
 * default export -> 이름을 따로 지정하지 않아도 된다. (기본)
 * named export -> 이름을 꼭 지정해야 한다.  
 * 내보내는 코드가 어디선가에서 사용할 수 있는 형태의 파일을 만드는 것을 모듈이라고 한다.
 * JS 파일은 언제든지 모듈이 될 수 있다. 꼭 내보내기(export)를 해야 모듈이 되는 것은 아니다. 
 * 기본(export default)에서는 하나의 파일에서 하나의 데이터만 통로로 내보낼 수 있다.
 * 이름이 지정된(named) 통로에서는 이름만 지정되어 있으면 몇개의 데이터를 내보내던지 상관이 없다. 
 */