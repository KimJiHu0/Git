### Git 영역
1. Working Directory ( 개인 코드 작성 영역 )
2. Stating ( git add를 통한 수정된 코드를 올리는 영역 )
3. Repository ( git commit을 통한 최종 수정본을 올리는 영역 )

<hr/>

### Git 초기 설정

##### git init
  - Repository 생성합니다.
    
##### git clone Repository의 URL
  - Git에 있는 파일을 복제하여 가져옵니다.
    
##### echo "Git Readme" > README.md
  - README.md파일에 문구를 입력하여 Working Directory 영역에 생성합니다.
    
##### cat README.md
  - 파일을 확인합니다.
    
##### git remote add origin Git_Url
  - Remote Repository(원격저장소)와 현재 디렉토리를 연결합니다.

<hr/>

### Git 기본 명령어

##### git add [fileName]
  - Working Directory 영역에 지정한 파일 하나를 올립니다.
    
##### git add -A
  - 수정한 모든 파일들을 올립니다.
    
##### git status
  - Git의 상황을 확인합니다.
  - Working Directory 영역에 올린 파일을 확인할 수 있으며, 수정된 파일 내역들을 확인할 수 있습니다.

##### git commit -m "commit message"
  - 별도의 텍스트 편집기를 사용하지 않고 터미널에서 메세지를 입력합니다.
    
##### git commit
  - 텍스트 편집기를 열어서 메세지를 입력합니다. 메세지 입력 후 리눅스 명령어를 사용하여 저장 및 나가기를 할 수 있습니다.
  - :!qa 나가기
  - :!wq 저장하고 나가기
    
##### git push origin 브랜치명
  - origin이라는 원격 저장소의 브랜치명에 Push합니다.

##### git pull
  - Remote Repository에 PUSH한 파일들을 나의 Local Repository에 땡겨옵니다.

<hr/>

### Git Commit & Push 후
각각의 브랜치에서 작업 후 Commit & Push를 했다면 해당 브랜치의 내용들을 Master 브랜치에 올려야합니다.
하지만 각 브랜치의 작업자(개발자)들이 직접 올리지 않습니다. 관리자에세 **Pull & Request**를 보냅니다.
관리자가 해당 코드들을 확인하여 Master 브랜치와 작업자(개발자)의 브랜치를 Merge 시킵니다.

관리자가 Merge할 때 A개발자와 B개발자가 같은 파일을 수정했을 때에는 선택지가 있습니다.
1. 관리자가 A,B의 브랜치를 Merge하면서 에러가 발생하는 부분을 직접 잡는다.
2. A개발자의 브랜치를 우선 Merge한 후에 B개발자에게 Pull을 받은 후 다시 Pull & Request 올리라고 한다.

<hr/>

##### git diff
  - 변경내역 확인

##### git reset
  - Add한 내용 취소하기
    
##### git reset --hard
  - Local 작업 내역까지 모두 취소하기

##### git branch
  - 현재 브랜치 확인하기
    
##### git branch newbranch
  - newbranch라는 이름의 브랜치를 생성
    
##### git branch -d newbranch
  - newbranch라는 브랜치 삭제

##### git branch -m 이전브랜치명 변경브랜치명
  - 이는 branch가 main에 있을 때 가능한 명령어로, git checkout main 혹은 git checkout origin 에서 가능

##### git branch -m 변경브랜치명
  - 해당 명령어는 변경할 브랜치로 직접 들어와서 실행하는 명령어로 git checkout 브랜치명 으로 진입 후 사용 가능
    
##### git checkout newbranch
  - 기존 브랜치에서 newbranch라는 브랜치로 이동
