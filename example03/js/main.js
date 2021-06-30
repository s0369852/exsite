// search icon click evnet

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus(); // 여기서 focus는 javascript를 통해서 focus가 적용 가능한 곳에 강제로 적용시키는 명령. 
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // setAttribute() -> HTML의 속성을 지정 하겠다.
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // setAttribute() -> HTML의 속성을 지정 하겠다.
});

// // search icon click evnet

// scroll badge

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(scrollY)
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// // scroll badge

// visual animation

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간(초), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, 
    // -> 요소가 순차적으로 delay속성을 갖기 위함. index에 + 1을 하는 이유는 javascrip는 0부터 시작하기 때문에 0을 곱하면 어차피 0이니까 delay가 없는 것이 되기 때문에. 
    // 0.7 -> 1.4 -> 2.1 -> 2.8
    opacity: 1,
  });
});

// // visual animation
