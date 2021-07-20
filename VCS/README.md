* 버전관리(VCS)

* git(깃)
- 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)
- $git --version (git 설치 여부 확인)
- MAC에서 Homebrew를 사용할 수 있는 경우 > $ brew install git 
- homebrew나 xcode를 사용하지 않은 경우 Binary installer에서 최신버전의 숫자를 클릭해 다운받는다.
- package파일을 받는데 열리지 않을경우, 우클릭을 누르고 다음으로 열기버튼으로 설치

* 스타벅스 예제 버전관리 시작 - 개행문자 설정 (처음 한번 만 사용)
- git config --global core.autocrlf input 
  (mac은 input, window는 true)

* 사용자 정보(커밋 - 버전 생성을 위한 정보 등록)
- git config --global user.name 'github아이디'
- git config --global user.email 'github이메일주소'

* 구성 확인
- git config --global --list 
  (등록한 정보확인 > list)

* 현재 프로젝트에서 변경사항 추적(버전관리)을 시작.
- git init

* 현재 프로젝트의 버전관리 상태 확인
- git status
- .DS_store > MAC OS에서 사용되는 파일

* 버전관리 등록(모든 파일의 변경사항을 추적하도록 지정)
- git add .

* 버전을 생성 (메시지(-m)와 함께 버전을 생성)
- git commit -m 'Start project'

* commit된 버전 확인
- git log

* 저장소(repositories) > github
- git remote add origin 원격저장소의 주소
  (remote > 원격 > github의 원격 저장소를 추가 하려고 함)

* git이라는 명령을 통해서 원격의 저장소에 프로젝트를 업로드(push) 하겠다 (처음 한 번)
- git push origin master
  (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 'master'라는 브렌치(brench)에다가 업로드를 하겠다.)

* 수시로 업로드
- git push
