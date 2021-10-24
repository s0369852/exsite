// 정규표현식
/**
 * 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)입니다.
 * 문자를 검색하고, 대체하고 추출할 수 있는 방법을 제공하는 JS뿐만 아니라 많은 다른 언어환경에서 사용할 수 있는 기능
 * 정규표현식은 직관적이지 않은 특수한 문자들을 사용한다. 
 */

let str = `
  010-1234-5678
  theone@email.com
  http://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd.
`
console.log('//--------------생성자 함수 방식')
const regexpA = new RegExp('the','gi')
// 정규식 같은 경우에는 기본적으로 우리가 원하는 패턴을 적어주고, 그 패턴으로 검색을 어떻게 할 것 인지에 대한 기본적인 옵션을 추가해주면 된다. 
console.log(str.match(regexpA))

console.log('//--------------리터럴 방식')
const regexpB = /the/gi
console.log(str.match(regexpB))

console.log('//--------------test()메소드 사용방식')
const regexpC = /bottle/gi
console.log(regexpC.test(str))

console.log('//--------------replace()메소드 사용방식')
const regexpD = /fox/gi
console.log(str.replace(regexpD, 'AAA')) 
// 원본 데이터에는 영향을 주지 않는다. 원본에 바뀐내용을 할당을 해줘야 한다. 
str = str.replace(regexpD, 'AAA') 
// str이 const가 아닌 let인 변수여서 재할당이 가능.
console.log(str)

console.log('//--------------플래그(옵션)')
const regexpF = /the/
console.log(str.match(regexpF))
const regexpF1 = /the/g
console.log(str.match(regexpF1))
console.log(str.match(/the/gi))
console.log(str.match(/./gi))
// 정규식에서 .(마침표) 하나는 특정한 문자를 검색하는 일종의 패턴이다. 
console.log(str.match(/\./gi))
// 이스케이프 문자(Escape Character)란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다. -> 명령으로 동작하지 않고 일반적인 문자로 해석되라고 특정한 기호의 앞에다가 \(백슬래시)를 붙여줄 수 있다. 
console.log(str.match(/\.$/gi))
// $(달러)는 꼭 .(마침표) 뒤쪽에 붙여줘야 한다. -> $앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다. 문자데이터의 끝부분은 끝나는 `(백틱) 바로 앞부분까지를 말한다. 
console.log(str.match(/\.$/gim))
// m(멀티라인)이라는 옵션 -> 하나의 문자 데이터는 시작부분과 끝부분이 딱 하나만 존재하는데, 문자 데이터 내부에 실제로 줄바꿈이 되어져 있는 각각의 줄들을 시작하고 끝내고 하는 형태로 줄마다 해석하겠다는 의미를 같는다. -> 각각의 줄을 하나의 시작과 끝으로 보겠다



