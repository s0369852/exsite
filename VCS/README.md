<h1>버전관리(VCS)</h1> 
<br/><br/>

<h2>1. git(깃)</h2>
<p>- 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)
<p>- $git --version (git 설치 여부 확인)</p>
<p>- MAC에서 Homebrew를 사용할 수 있는 경우 > $ brew install git </p>
<p>- homebrew나 xcode를 사용하지 않은 경우 Binary installer에서 최신버전의 숫자를 클릭해 다운받는다.</p>
<p>- package파일을 받는데 열리지 않을경우, 우클릭을 누르고 다음으로 열기버튼으로 설치 </p>
<br/><br/>

<h2>2. 스타벅스 예제 버전관리 시작 <p>- 개행문자 설정 (처음 한번 만 사용)</h2>
<p>- git config --global core.autocrlf input (mac은 input, window는 true)</p>
<br/><br/>

<h2>3. 사용자 정보(커밋 <p>- 버전 생성을 위한 정보 등록)</h2>
<p>- git config --global user.name 'github아이디'</p>
<p>- git config --global user.email 'github이메일주소'</p>
<br/><br/>

<h2>4. 구성 확인</h2>
<p>- git config --global --list (등록한 정보확인 > list)</p>
<br/><br/>

<h2>5. 현재 프로젝트에서 변경사항 추적(버전관리)을 시작.</h2>
<p>- git init </p>
<br/><br/>

<h2>6. 현재 프로젝트의 버전관리 상태 확인</h2>
<p>- git status </p>
<p>- .DS_store > MAC OS에서 사용되는 파일 </p>
<p>- nothing to commuit, working tree clean = 가장 최신의 버전으로 유지가 되고 있는 상태</p>
<br/><br/>

<h2>7. 버전관리 등록(모든 파일의 변경사항을 추적하도록 지정)</h2>
<p>- git add . </p>
<br/><br/>

<h2>8. 버전을 생성 (메시지(-m)와 함께 버전을 생성)</h2>
<p>- git commit -m 'Start project' </p>
<br/><br/>

<h2>9. commit된 버전 확인</h2>
<p>- git log </p>
<br/><br/>

<h2>10. 저장소(repositories) > github</2>
<p>- git remote add origin 원격저장소의 주소 <br/>
  (remote > 원격 > github의 원격 저장소를 추가 하려고 함) </p>
  <br/><br/>

<h2>11. git이라는 명령을 통해서 원격의 저장소에 프로젝트를 업로드(push) 하겠다 (처음 한 번)</h2>
<p>- git push origin master <br/>
  (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 'master'라는 브렌치(brench)에다가 업로드를 하겠다.)</p>
<p>- git push origin 브렌치명 </br>
  (업로드 되는 저장소의 이름은 위에서 지정한 'origin'이고, 넣고자 하는 브렌치이름을 적어 업로드 하면 된다.) </p>
  <br/><br/>

<h2>12. 수시로 업로드</h2>
<p>- git push </p>
<br/><br/>

<h2>13. 브렌치(Branch)</h2>
<p>- git branch : 현재 브렌치의 이름이 뜬다. -> master</p>
<p>- git branch -a : remotes/origin/master 원격저장소에 origin이라는 별칭을 가지고 있는 master브렌치가 있다 -a를 붙여 쓰게되면 원격저장소에 있는 브렌치를 알 수 있다. </p>
<p>- git branch 새로만들브렌치 : 새로만들브렌치가 이름으로 생성된다. (ex-> git branch signin : signin이라는 브렌치가 새로 만들어 짐.) </p>
<p>- git checkout signin : Switched to branch 'signin' -> 브렌치가 master에서 signin으로 바뀐 것을 확인 할 수 있다.<br/> signin이라는 브렌치에서 새롭게 signin이라는 폴더와 그 안에 index파일을 만들어서 새로운 버전으로 커밋하고 다시 checkout master로 master브렌치로 변경을 하면 새롭게 만들었던 signin이라는 폴더는 보여지지 않는다.<br/> signin이라는 브렌치에서 작업한 내용은 다른 브렌치에게 영향을 끼치지 않는다. </p>
<p>- 새롭게 만든 브렌치에서 작업을 하고 나중에 master브렌치와 병합(merge)을 해줄 수 있다. <br/>이렇게 되면 새롭게 만든 브렌치에서의 작업은 master브렌치에 직접적으로 영향을 주지 않게 된다. </p>
<br/><br/>

<h2>14. netlify의 브렌치</h2>
<p>- netlify에서 배포(deploy)되는 브렌치는 "master" 브렌치 하나이다.</p>
<p>- 'master' 브렌치 이외의 브렌치에서 작업된 내용은 배포(deploy)시에 적용되지 않는다. </p>
<p>- 다른 브렌치들을 "master"로 합병시켜줘야 한다. </p>
<br/><br/>

<h2>15. 브렌치 병합 방법</h2>
<p>- github으로 들어가서 해당 저장소의 'Pull requests' 탭으로 이동하여 'New pull request' 버튼을 누른다.</p>
<p>- 'Compare changes'라는 페이지로 이동하였으면, base: master <<p>- compare: master 확인한다.</p>
<p>- base는 합쳐질 브렌치, compare은 새로운 내용을 담고 있는 브렌치</p>
<p>- base와 compare의 설정을 했다면 Able to merge. 라는 메세지가 나온다. </p>
<p>- Create pull request</p>
<p>- 요청을 하고 나면 "Pull request" 탭에 1개가 표시된다. 현재 오픈되어져 있는 병합 요청이 1개 생성되었다.</p>
<p>- Merge pull request 버튼을 누른다.</p>
<p>- Confirm merge 를 눌러 요청을 끝마친다.</p>
<p>- Open이 Merged로 상태변경이 된다.</p>
<p>- master에서 병합한 브렌치의 내용을 가지고 와서 병합을 했고, 기존의 master 브렌치에서 병합 된 새로운 버전이 만들어진 것이다. </p>