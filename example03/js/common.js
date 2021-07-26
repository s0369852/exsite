// search icon click evnet  ----------------------------------------------------------------

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 여기서 focus는 javascript를 통해서 focus가 적용 가능한 곳에 강제로 적용시키는 명령. 
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // setAttribute() -> HTML의 속성을 지정 하겠다.
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // setAttribute() -> HTML의 속성을 지정 하겠다.
});


// THISYEAR ----------------------------------------------------------------
const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();  // 2021