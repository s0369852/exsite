# 버전관리(VCS)
<br/><br/>

## git(깃)
  - 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)<br/>
  - $git --version (git 설치 여부 확인)<br/>
  - MAC에서 Homebrew를 사용할 수 있는 경우 > $ brew install git<br/>
  - homebrew나 xcode를 사용하지 않은 경우 Binary installer에서 최신버전의 숫자를 클릭해 다운받는다.<br/>
  - package파일을 받는데 열리지 않을경우, 우클릭을 누르고 다음으로 열기버튼으로 설치<br/>
<br/><br/>

## 스타벅스 예제 버전관리 시작 - 개행문자 설정 (처음 한번 만 사용)
  - git config --global core.autocrlf input (mac은 input, window는 true)
<br/><br/>

## 사용자 정보(커밋 - 버전 생성을 위한 정보 등록)
  - git config --global user.name 'github아이디'<br/>
  - git config --global user.email 'github이메일주소'<br/>
<br/><br/>

## 구성 확인
  - git config --global --list (등록한 정보확인 > list)
<br/><br/>

## 현재 프로젝트에서 변경사항 추적(버전관리)을 시작.
  - git init 
<br/><br/>

## 현재 프로젝트의 버전관리 상태 확인
  - git status<br/>
  - .DS_store > MAC OS에서 사용되는 파일<br/>
  - nothing to commuit, working tree clean = 가장 최신의 버전으로 유지가 되고 있는 상태
<br/><br/>

## 버전관리 등록(모든 파일의 변경사항을 추적하도록 지정)
  - git add . 
<br/><br/>

## 버전을 생성 (메시지(-m)와 함께 버전을 생성)
  - git commit -m 'Start project' 
<br/><br/>

## commit된 버전 확인
  - git log 
<br/><br/>

## 저장소(repositories) > github
  - git remote add origin 원격저장소의 주소 <br/>
    (remote > 원격 > github의 원격 저장소를 추가 하려고 함) 
<br/><br/>


## git이라는 명령을 통해서 원격의 저장소에 프로젝트를 업로드(push) 하겠다 (처음 한 번)
  - git push origin master <br/>
    (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 'master'라는 브렌치(brench)에다가 업로드를 하겠다.)<br/>
  - git push origin 브렌치명 </br>
    (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 넣고자 하는 브렌치이름을 적어 업로드 하면 된다.) 
<br/><br/>

## 수시로 업로드
  - git push 
<br/><br/>

## 브렌치(Branch)
  - git branch : 현재 브렌치의 이름이 뜬다. -> master<br/>
  - git branch -a : remotes/origin/master 원격저장소에 origin이라는 별칭을 가지고 있는 master브렌치가 있다 -a를 붙여 쓰게되면 원격저장소에 있는 브렌치를 알 수 있다. <br/>
  - git branch 새로만들브렌치 : 새로만들브렌치가 이름으로 생성된다. (ex-> git branch signin : signin이라는 브렌치가 새로 만들어 짐.)<br/>
  - git checkout signin : Switched to branch 'signin' -> 브렌치가 master에서 signin으로 바뀐 것을 확인 할 수 있다.<br/> 
  signin이라는 브렌치에서 새롭게 signin이라는 폴더와 그 안에 index파일을 만들어서 새로운 버전으로 커밋하고 다시 checkout master로 master브렌치로 변경을 하면 새롭게 만들었던 signin이라는 폴더는 보여지지 않는다.<br/> 
  signin이라는 브렌치에서 작업한 내용은 다른 브렌치에게 영향을 끼치지 않는다.<br/>
  - 새롭게 만든 브렌치에서 작업을 하고 나중에 master브렌치와 병합(merge)을 해줄 수 있다.<br/>
  이렇게 되면 새롭게 만든 브렌치에서의 작업은 master브렌치에 직접적으로 영향을 주지 않게 된다. 
<br/><br/>

## netlify의 브렌치
  - netlify에서 배포(deploy)되는 브렌치는 "master" 브렌치 하나이다.<br/>
  - 'master' 브렌치 이외의 브렌치에서 작업된 내용은 배포(deploy)시에 적용되지 않는다.<br/>
  - 다른 브렌치들을 "master"로 합병시켜줘야 한다.
<br/><br/>

## 브렌치 병합 방법
  - github으로 들어가서 해당 저장소의 'Pull requests' 탭으로 이동하여 'New pull request' 버튼을 누른다.<br/>
  - 'Compare changes'라는 페이지로 이동하였으면, base: master <- compare: master 확인한다.<br/>
  - base는 합쳐질 브렌치, compare은 새로운 내용을 담고 있는 브렌치<br/>
  - base와 compare의 설정을 했다면 Able to merge. 라는 메세지가 나온다. <br/>
  - Create pull request<br/>
  - 요청을 하고 나면 "Pull request" 탭에 1개가 표시된다. 현재 오픈되어져 있는 병합 요청이 1개 생성되었다.<br/>
  - Merge pull request 버튼을 누른다.<br/>
  - Confirm merge 를 눌러 요청을 끝마친다.<br/>
  - Open이 Merged로 상태변경이 된다.<br/>
  - master에서 병합한 브렌치의 내용을 가지고 와서 병합을 했고, 기존의 master 브렌치에서 병합 된 새로운 버전이 만들어진 것이다. 
<br/><br/>

## 프로젝트 복제(git clone)
  - 새로운 환경에서 저장소를 어떻게 불러와서 사용할까? <br/>
  - github 로그인 후 우측 상단의 계정 표시 클릭 후 'Your repositories'로 이동 <br/>
  - Code라는 초록 버튼을 누르면 저장소의 주소 카피 <br/>
  - VS에서 터미널을 켜준 뒤 'cd'를 입력하여 바꾸고자하는 디렉토리 명을 적어준다. <br/>
      ex). cd .\Desktop\ (바탕화면으로 이동)<br/>
      ex). cd .. (지금 있는 폴더에서 밖으로 한번 나가게 된다.)<br/>
      (mac은 ls , window는 dir -> 현재 디렉토리 안에 들어있는 폴더가 나타난다. ) <br/>
      (cd (=Change Directory) 입력 )<br/>

  - git clone 복사한주소<br/>
    (복사한 주소의 해당하는 저장소 자체를 복제해서 현재 경로에 새롭게 생성한다.)<br/>

  - VS Code에서 해당하는 폴더 열기 <br/>
  1. 모든 명령 표시 창 (Cmd + Shift + P)를 열어준다. <br/>
  2. code 입력 <br/>
  (Shell Command: Install 'code' command in PATH -> 쉘 명령: PATH에 'code' 명령 설치 -> 해당내용이 나올 경우 설치 후 재부팅)<br/>
  3. 터미널을 열고 cd .\Desktop\ 후에 다시 cd .\starbucks\ <br/>
    (cd는 경로를 찾아가고자 할때 사용 위를 해석하자면 바탕화면의 starbucks라는 폴더로 경로를 찾아가겠다.)<br/>
  4. 해당 경로에서 <bold>code .</bold>을 입력하면 새로운 VS Code로 열린다. <br/>
    (하지만 기존의 열려있던 VS Code 창도 열려있는 상태)<br/>
  4-1. 다시 해당 경로에서 <bold>code . -r</bold>을 입력하면 현재 VS Code 창에서 해당하는 프로젝트가 열리게 된다.  
  <br/><br/>

## 버전 되돌리기
  - git log : 버전을 확인할 수 있는데, (HEAD -> master) 여기서 HEAD가 있는 곳이 최신 버전을 나타낸다. <br/>
  - git reset --hard : reset을 통해서 되돌릴 것인데 hard라는 플래그를 통해서 완벽하게 되돌리겠다. <br/>
  - git reset --hard HEAD~1 : HEAD의 가장 최신의 버전에서 1버전을 되돌리겠다. <br/>
  - git reset --hard ORIG_HEAD : 되돌린 버전이 다시 원상복구가 된다. <br/>
  - git reset --hard HEAD~2 : HEAD의 가장 최신의 버전에서 2버전을 되돌리겠다. <br/>
  - reset은 실제 사용중에서는 굉장히 신중을 가해서 사용해야 한다.
  <br/><br/>

  ### push
    - git add . <br/>
    - git commit -m '버전' <br/>
    - git remote add origin 원격저장소주소<br/>
    - git push origin 브렌치<br/>
    - git checkout 브렌치변경<br/>
    - git push origin 변경한브렌치
  <br/><br/>


## 다른 환경에서 브렌치 복사, 저장, 생성
  - 브렌치별로 해당 브렌치만 로컬 환경으로 복사하기 <br/>
  - git branch -r <br/>
    1. origin/HEAD -> origin/master : 원격저장소의 현재 브렌치를 의미하고, 일반적으로 master가 기본 브렌치. <br/>
    2. origin/master : <br/>
    3. origin/다른브렌치 : <br/>
    *** 여기서 중요한 것은 로컬저장소의 있는 브렌치 이름과 원격저장소에 있는 브렌치 이름이 똑같아서 충돌나는 것을 방지하기 위해서 origin을 붙여준다. 이 때 origin은 우리가 원격저장소 주소의 별칭을 origin이라고 설정 해둔 것이다. (통상적으로 origin이라고 쓰고, 다른 단어를 사용할 경우 다른 개발자들이 혼란을 겪을 수도 있다.)<br/>
    4. git checkout -t origin/다른브렌치 <br/>
    (여기서 주의 할 점은 -t) <br/><br/>
  - 만약, 가져온 브렌치가 내가 가져오고자 한 브렌치가 아닐 경우 <br/>
    1. git checkout master : master브렌치로 이동해준다. (지워야할 브렌치 이외의 브렌치로 이동)<br/>
    2. git branch -d 삭제할브렌치명 <br/><br/>
  - 생성과 동시에 해당 브렌치로 이동 <br/>
    1. git checkout -b 생성할브렌치
  <br/><br/>

## 충돌(Conflict), 병합(Merge)
  - ! [rejected] <br/>
  - 원격 저장소로 현재 내용을 push하는 것을 거절당했다. 버전의 내용이 현재 로컬환경과 저장소의 내용이 일치하지 않기 때문. <br/>
  - 첫번째 방법. git reset --hard HEAD~1 <br/> 
    로컬에서 만든 버전을 reset을 통해서 1단계 뒤로 되돌린다. <br/>
  - 두번째 방법. git pull origin master <br/>
    push -> 원격저장소에서 로컬로 버전을 가져온다. (push는 로컬에서 원격저장소로 버전을 밀어낸다.) <br/>
  - 버전이 다른 것을 pull로 가져왔을 경우에 CONFLICT(충돌)이 난 것을 보여준다. <br/>