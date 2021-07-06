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

// scroll badge ----------------------------------------------------------------

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
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

// visual animation ----------------------------------------------------------------

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // -> 요소가 순차적으로 delay속성을 갖기 위함. index에 + 1을 하는 이유는 javascrip는 0부터 시작하기 때문에 0을 곱하면 어차피 0이니까 delay가 없는 것이 되기 때문에. 
    // 0.7 -> 1.4 -> 2.1 -> 2.8
    opacity: 1,
  });
});

// swiper slide ----------------------------------------------------------------

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  roop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 첫번째 슬라이드 왼쪽에 마지막 슬라이드가 있어야 하고, 마지막 슬라이드 오른쪽에 첫번째 슬라이드가 있게 하려면 loop(반복재생)를 이용해줘야 한다.
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// promotion toggle ----------------------------------------------------------------

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion; // !는 not (현재 값의 반대값으로 전환)
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide')
  }
});
// javascript 자체로 요소가 단순하게 class를 추가해서 보이고 안보이고, 단순한 애니메이션 처리하는 것은 css로 처리해주는 것이 좋다. 

// floating object  ----------------------------------------------------------------

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // '.toFixed()'를 통해 반환된 문자 데이터를,
  // 'parseFloat(())'을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자 
    random(1.5, 2.5), // 애니메이션의 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 반복 설정을 -1로 설정하게 되면 무한반복이 된다. (javascript에서 지원하는 라이브러리 기능)
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생하여, 위로 올라갔다가 내려오게끔 하는 것이다.
      ease: Power1.easeInOut,
      delay: random(0, delay), 
    }
  );
}

floatingObject('.floating1' , 1, 15);
floatingObject('.floating2' , 0.5, 15);
floatingObject('.floating3' , 1.5, 20);