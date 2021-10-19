// export function named -> 이름이 있어야하는 형태

export function random() {
  return Math.floor(Math.random() * 10)
}

/**
 * Math라는 수학 객체
 * Math.random() : 무작위의 숫자
 * Math.floor() : 내림 처리
 */

export const user = {
  name: 'Bottle',
  age: 88,
  email: 'one@email.com'
}

export default 123
// 이름이 없는 기본(export default)함수와 이름이 지정된 함수를 같이 사용할 수 있다.