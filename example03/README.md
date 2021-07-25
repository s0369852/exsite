# Starbucks

  * 오픈 그래프
  웹페이지가 소셜미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정한다.
  최소한의 메타정보로만 이뤄져있다.
  - og: type :페이지의 유형(website, video.movie)
  - og:site_name : 속한 사이트의 이름
  - og:title : 페이지의 이름(제목)
  - og:description : 페이지의 간단한 설명
  - og:image : 페이지의 대표 이미지 주소(URL)
  - og:url : 페이지 주소(URL) -> 필요에 따라 주소가 다르게 적힐 수 있다.

  * 트위터 카드
  웹페이지가 소셜미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정한다. 
  - twitter:card : 페이지(카드)의 유형(summary, player)
  - twitter:site : 속한 사이트의 이름
  - twitter:card : 페이지의 이름(제목)
  - twitter:card : 페이지의 간단한 설명
  - twitter:card : 페이지의 대표 이미지 주소(URL)
  - twitter:card : 페이지 주소(URL)

  => 외부에서 접속해서 빨리 파악해야 하는 정보들은 되도록 위쪽에 작성하는 것이 좋다. 
    타이틀과 파비콘 사이에 적는 것이 좋다. 

  * SEO (검색엔진최적화)
  구글이나 네이버 등에 자신의 웹사이트/페이지를 노출할 수 있도록 정보를 최적화하는 작업을 말한다. 

  * 구글 아이콘
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />

  <span class="material-icons-outlined">
    login
  </span>
  - CDN으로 가져오는 주소와 Class가 일치해야한다. 
  - 꼭 태그가 <span> 필요는 없다. 
  - family=Material+Icons+Outlined = material-icons-outlined
  - family=Material+Icons = material-icons
  - 기본적으로 크기조절은 font-size로 한다. (기본값 : font-size: 24px)

  * baseline
  - 문자, 글자의 아래쪽에 기준이 되는 선을 말함
  - inline 요소는 기본적인 baseline이 있다.
  - <img/> 역시 inline 속성을 갖고 있으므로, 아래쪽 즉 baseline의 공간이 있다.
  - <img/> 태그를 block요소로 바꿔준다.

  * inline 요소는 margin, padding의 위&아래 여백을 정상적으로 사용할 수 없다. 추가적으로 가로&세로 값도 정상적으로 갖을 수 없다.

  * position을 이용한 수직 가운데 배치
  - 부모 요소가 될 container와 자식 요소가 될 item
  - container { position: relative; }
  - item {position: absolute; top: 0; bottom: 0; margin: auto 0; height:100px;}
  - 결국엔 위쪽 여백과 아래쪽 여백을 알아서 자동으로 분배하려면 요소의 높이값을 알아야 한다.  
  - 수평의 가운데 배치도 이와 동일하다. 
  - { position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; width: 100px; height: 100px; }
  - position: absolute & fixed 가 사용이 되면 요소의 display값은 block으로 변한다. 
  - top, bottom 속성을 사용하지 않아 수직 위치 값이 없다면, 요소의 원래 위치를 그대로 사용한다.
    만약 position:absolute를 사용했다면, 위치상 부모 요소를 기준으로 하므로 화면의 뷰포트 좌우 끝까지 늘어 날 수 없게 된다. 
  - 일반적으로 block요소는 가로 너비가 최대한 늘어나려고 한다.(100%)
    하지만, absolute, fixed의 경우가 되면 가로 너비는 최소한으로 줄어들려고 한다

  * URL 해시(Hash)는 몇가지 쓰임이 있지만, 그중 CSS ID 선택자를 이용해 페이지 내 특정 위치로 이동할 수 있다. 
  - # : 페이지 상단으로 이동
  - javascript:void(0) : javascript를 통해서 동작을 시킬껀데, 그 동작이 void -> 아무기능이 없다. 정말 아무 동작이 일어나지 않는다. 

  * defer : HTML의 구조가 모두 해석이 되면, 그때 main.js가 동작이 되게 한다.

  * addEventListener('이벤트', function(){})에서 이벤트 뒤에 실행 되는 함수(function)를 핸들러라고 부른다. 

  * BEM (Blcok Element Modifier) : HTML 클래스 속성의 작명법
  - 요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분을 표시
  - 요소--상태 : Hyphen(Dash) 기호로 요소의 상태를 표시

  * Lodash CDN
  - 스크롤 이벤트시 스크롤 할 때마다 함수가 실행되면, 과부하가 걸릴 수 있다.
    그럴때 _.throttle()을 하면, 초단위로 부하를 줘서 함수가 계속 실행되는 것을 방지하는 용도.
  - 화면이 스크롤 될 때 실행되는 함수의 갯수를 throttle이라는 메소드(기능)을 이용해서 일정 시간에 한번씩만 실행되도록 제한을 걸었다. 
  - _.throttle(함수(){},시간)

  * GSAP CDN
  - JS애니메이션 라이브러리
  - opacity 속성처럼 값을 숫자로 입력하는 속성들은, 전환 효과(transitioin 속성이나 GSAP 라이브러리등)를 통해 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만, display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환 효과를 적용할 수 없다.  
  - gsap.to(요소, 지속시간, 옵션);

  * javascript는 요소를 제어할 때 하나씩 일일이 다 제어하는 것이 아니라 반복적으로 처리하는 개념이 들어가게 된다. 자동화 시켜주는 것이 목적 

  * CDN을 가지고 올때 min이 있다면 min으로 가져오는 이유는 우리가 원본을 직접적으로 수정할 일을 거의 드물기 때문에 조금더 최적화가 되어져 있는 minify(경량화) 버전을 가져온다.

  * new
  - new Swiper(); -> new라는 javascript 키워드를 실행시켜주고, Swiper라는 생성자를 실행시킨다.
  - new라는 키워드를 사용한다는 것은 javascript의 생성자(클래스)라고 부르는데, HTML쪽의 class가 아니라 javascript의 class라는 개념이 있는데, 이러한 개념을 통해서 여러가지 객체들을 다룰 수 있다.

  * padding ( 16:9 비율 만들기 )
  - padding은 내부 여백, 요소의 크기가 늘어날 수 있는 구조를 가진다. 
    %라는 단위를 사용하게 되면 상대적 단위이기 때문에, 무엇인가를 기준으로 해서 크기가 상대적으로 커지게 한다. 
  - 부모요소와 자식요소 하나를 가지고 몇 대 몇 비율의 가로, 세로 너비를 가지고 있는 
    요소의 크기를 만들어 낼 수 있다. 
  - youtube, vimeo 등의 영상은 16:9의 비율을 가지고 있다. 
    100% : 56.25% = 16 : 9

  * youtube
  - 소스코드를 복사해서 붙여넣는 방식은 단지 출력만을 위한 방식이다. 제어를 할 수 없다. 
  - API를 통해 script로 가져와 반복 재생, 음소거 기능, 등을 제어해야 한다.
  - IFrame Player API를 통해 YouTube 동영상을 제어할 수 있다.
    (https://developers.google.com/youtube/iframe_api_reference?hl=ko)
  - 유튜브 영상이 출력될 위치에 요소를 지정(생성)한다.
  <!-- in HEAD -->
  <script defer src="./js/youtube.js"></script>

  <!-- in BODY -->
  <div id="player"></div>
  - onYouTubePlayerAPIReady 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않는다! 그리고 함수는 전역(Global) 등록해야 한다!
  - 플레이어 매개변수(playerVars)에서 더 많은 옵션을 확인할 수 있다.
    (https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)
  <script>
  // Youtube IFrame API를 비동기로 로드합니다.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubePlayerAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
      playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        // 영상이 준비되었을 때,
        onReady: function (event) {
          event.target.mute(); // 음소거!
        }
      }
    });
  }
  </script>

  * 메소드
  - 객체 데이터 내부에 함수 데이터가 할당 되어져 있는 것

  * 랜덤한 숫자를 생성하는 함수
  <script>
    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
      // '.toFixed()'를 통해 반환된 문자 데이터를,
      // 'parseFloat(())'을 통해 소수점을 가지는 숫자 데이터로 변환
      return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }
  </script>

  * GSAP & ScrollToPlugin
  - <a href="https://greensock.com/gsap/">GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. </a>
  - <a href="https://greensock.com/scrolltoplugin/">ScrollToPlugin</a>은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.
  - <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
  - <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
  - <a href="https://greensock.com/docs/v3/GSAP/gsap.to()">.to() 사용법</a>, <a href="https://greensock.com/docs/v2/Easing">GSAP Easing </a>
  <script>
    gsap.to(요소, 시간, 옵션)
  // 또는
  TweenMax.to(요소, 시간, 옵션)

  gsap.to(window, .7, {
    scrollTo: 0
  });     
  </script>

  * HTML의 특수기호들
  - "html entities"

