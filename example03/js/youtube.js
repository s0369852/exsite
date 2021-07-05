// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() { // 'onYouTubeIframeAPIReady(){}' 외부에서 가져온 자바스크립트 youtube API가 자체적으로 이 함수의 이름을 찾는 것이기 때문에 이름을 바꾸면 안된다.  
  // <div id="player"></div>
  new YT.Player('player', { // 'player'라는 메소드안에 첫번째 인수인 'player' HTML에 id값을 말하는데, id선택자인 #기호를 붙여선 안된다. 
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true,   // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생으로 설정을 하였다면 반복 재생할 유튜브의 영상 ID 목록을 적어준다.
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}