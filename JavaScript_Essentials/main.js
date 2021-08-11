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

