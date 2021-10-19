/**
 * export : 공통으로 사용하게 될 함수에 대하여 내보내기 위함
 * default : 정의된 함수가 가장 기본적인 형태임을 나타내기 위함
*/

export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// export default 123 -> error, 하나의 모듈에서 하나의 내보내기만 가능하다 (export default의 경우)

