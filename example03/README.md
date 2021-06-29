
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

  * URL 해시(Hash)는 몇가지 쓰임이 있지만, 그중 CSS ID 선택자를 이용해 페이지 내 특정 위치로 이동할 수 있다. 
  - # : 페이지 상단으로 이동
  - javascript:void(0) : javascript를 통해서 동작을 시킬껀데, 그 동작이 void -> 아무기능이 없다. 정말 아무 동작이 일어나지 않는다. 

  * defer : HTML의 구조가 모두 해석이 되면, 그때 main.js가 동작이 되게 한다.

  * addEventListener('이벤트', function(){})에서 이벤트 뒤에 실행 되는 함수(function)를 핸들러라고 부른다. 