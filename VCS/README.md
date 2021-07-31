* 버전관리(VCS) <br/>

* git(깃)
- 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)
- $git --version (git 설치 여부 확인)
- MAC에서 Homebrew를 사용할 수 있는 경우 > $ brew install git 
- homebrew나 xcode를 사용하지 않은 경우 Binary installer에서 최신버전의 숫자를 클릭해 다운받는다.
- package파일을 받는데 열리지 않을경우, 우클릭을 누르고 다음으로 열기버튼으로 설치 <br/>

* 스타벅스 예제 버전관리 시작 - 개행문자 설정 (처음 한번 만 사용)
- git config --global core.autocrlf input 
  (mac은 input, window는 true)<br/>

* 사용자 정보(커밋 - 버전 생성을 위한 정보 등록)
- git config --global user.name 'github아이디'
- git config --global user.email 'github이메일주소'

* 구성 확인
- git config --global --list 
  (등록한 정보확인 > list)<br/>

* 현재 프로젝트에서 변경사항 추적(버전관리)을 시작.
- git init <br/>

* 현재 프로젝트의 버전관리 상태 확인
- git status
- .DS_store > MAC OS에서 사용되는 파일
- nothing to commuit, working tree clean = 가장 최신의 버전으로 유지가 되고 있는 상태 <br/>

* 버전관리 등록(모든 파일의 변경사항을 추적하도록 지정)
- git add . <br/>

* 버전을 생성 (메시지(-m)와 함께 버전을 생성)
- git commit -m 'Start project' <br/>

* commit된 버전 확인
- git log <br/>

* 저장소(repositories) > github
- git remote add origin 원격저장소의 주소
  (remote > 원격 > github의 원격 저장소를 추가 하려고 함) <br/>

* git이라는 명령을 통해서 원격의 저장소에 프로젝트를 업로드(push) 하겠다 (처음 한 번)
- git push origin master
  (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 'master'라는 브렌치(brench)에다가 업로드를 하겠다.)
- git push origin 브렌치명
  (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 넣고자 하는 브렌치이름을 적어 업로드 하면 된다.) <br/>

* 수시로 업로드
- git push <br/>

* 브렌치(Branch)
- git branch : 현재 브렌치의 이름이 뜬다. -> master
- git branch -a : remotes/origin/master 원격저장소에 origin이라는 별칭을 가지고 있는 master브렌치가 있다 -a를 붙여 쓰게되면 원격저장소에 있는 브렌치를 알 수 있다.
- git branch 새로만들브렌치 : 새로만들브렌치가 이름으로 생성된다. (ex-> git branch signin : signin이라는 브렌치가 새로 만들어 짐.)
- git checkout signin : Switched to branch 'signin' -> 브렌치가 master에서 signin으로 바뀐 것을 확인 할 수 있다. signin이라는 브렌치에서 새롭게 signin이라는 폴더와 그 안에 index파일을 만들어서 새로운 버전으로 커밋하고 다시 checkout master로 master브렌치로 변경을 하면 새롭게 만들었던 signin이라는 폴더는 보여지지 않는다. signin이라는 브렌치에서 작업한 내용은 다른 브렌치에게 영향을 끼치지 않는다.
- 새롭게 만든 브렌치에서 작업을 하고 나중에 master브렌치와 병합(merge)을 해줄 수 있다. 이렇게 되면 새롭게 만든 브렌치에서의 작업은 master브렌치에 직접적으로 영향을 주지 않게 된다. <br/>

* netlify의 브렌치
- netlify에서 배포(deploy)되는 브렌치는 "master" 브렌치 하나이다.
- 'master' 브렌치 이외의 브렌치에서 작업된 내용은 배포(deploy)시에 적용되지 않는다. 
- 다른 브렌치들을 "master"로 합병시켜줘야 한다. <br/>

* 브렌치 병합 방법
- github으로 들어가서 해당 저장소의 'Pull requests' 탭으로 이동하여 'New pull request' 버튼을 누른다.
- 'Compare changes'라는 페이지로 이동하였으면, base: master <- compare: master 확인한다.
- base는 합쳐질 브렌치, compare은 새로운 내용을 담고 있는 브렌치
- base와 compare의 설정을 했다면 Able to merge. 라는 메세지가 나온다. 
- Create pull request
- 요청을 하고 나면 "Pull request" 탭에 1개가 표시된다. 현재 오픈되어져 있는 병합 요청이 1개 생성되었다.
- Merge pull request 버튼을 누른다.
- Confirm merge 를 눌러 요청을 끝마친다.
- Open이 Merged로 상태변경이 된다.
- master에서 병합한 브렌치의 내용을 가지고 와서 병합을 했고, 기존의 master 브렌치에서 병합 된 새로운 버전이 만들어진 것이다. 