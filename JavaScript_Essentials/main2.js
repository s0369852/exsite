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
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}
