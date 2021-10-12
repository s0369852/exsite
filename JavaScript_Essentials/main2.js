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
// Array: []
// Object: {}
