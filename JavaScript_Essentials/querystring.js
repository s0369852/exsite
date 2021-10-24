// Query String
/**
 * 주소?속성=값&속성=값&속성=값
 * 특정한 주소 뒤에 물음표를 적고 그 뒤에 속성과 값의 형태로 어떤 특정한 옵션을 적을 수 있다.
 * 대표적으로 -> ?apiKey=특정한키값을 통해 인증을 받고 그 뒤에는 &(엠퍼센드)를 붙여 하나의 속성과 값이 입력이 끝났다고 명시하여서 구분, 다시 속성=값을 통해 추가로 얻고자 하는 옵션을 적어준다.
 * 특정한 주소에 물음표로 시작하는 어떠한 값의 모음이 바로 Query String이라고 부른다. 
 * Query String은 특정한 주소로 접근을 할때 기본적인 페이지에 대한 옵션을 명시하는 용도로 활용되는 문자이다. 
 */

// axios
/**
 * Promise 기반의 HTTP 클라이언트, 브라우저와 node.js 환경에서 사용할 수 있는 HTTP요청을 처리해주는 자바스크립트 패키지
 * npm i axios
 * npm i axios -D => 이렇게 설치 하면 안된다.
 * axios는 실제로 브라우저에서 HTTP 요청을 처리를 할 수 있어야 하기 때문에, 개발 의존성 모듈로 설치를 하면 안된다.  
 * 설치를 마치면 package.json 파일의 dependencies를 통해서 axios 설치가 제대로 되었는지 확인을 해준다.
 */

import axios from 'axios'

function fetchMovies() {
  // 여기서 주의사항은 http가 아닌 https로 입력을 하는 것, 간혹 http로 하였을때 문제가 발생하기 떄문.
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
  // 위와 같이 메소드를 연결하여 사용하는 것을 '메소드체이닝' 이라고 한다.
}

fetchMovies()