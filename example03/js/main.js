// scroll badge & #to-top ----------------------------------------------------------------

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(scrollY)
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0 
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,  // 여기 위치의 숫자를 적으면 해당 페이지 스크롤의 px로 옯겨준다. 
  });
});

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

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
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

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8, // 내가 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시 되었다는 것을 판단할 것인가를 지정해주는 옵션
    })  
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 'new ScrollMagic.Controller()' 이부분은 기본적으로 ScrollMagic에서 우리가 추가한 옵션들은 내부의 컨트롤러에 내용을 할당해서 실제로 동작할 수 있는 구조로 만들어 주는 용도로 사용 된다.
});

