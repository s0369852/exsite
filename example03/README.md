
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
  - family=Material+Icons+Outlined = material-icons-outlined
  - family=Material+Icons = material-icons
  - 기본적으로 크기조절은 font-size로 한다. (기본값 : font-size: 24px)