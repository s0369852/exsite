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






// Object: {}
