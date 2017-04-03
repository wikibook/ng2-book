# 『쉽고 빠르게 배우는 Angular 2 프로그래밍』

Angular 세계로 오신 여러분 모두를 환영합니다. 

이 곳은 쉽고 빠르게 배우는 Angular 2 프로그래밍 책의 소스코드 저장소 입니다. 감사합니다.

## 1. 소스코드의 개발환경

- Node.js 버전: 6.7.0
- npm 버전: 3.10.6
- 타입스크립트 버전: 2.0.2
- Angular-CLI: 1.0.0-beta.14

## 2. 각 장의 소스코드가 들어 있는 디렉터리 위치

- 3장 타입스크립트 /ts
- 4장 컴포넌트 /component/src
- 5장 서비스 /services/src
- 6장 모듈 /module/src
- 7장 라우터 /router/src
- 8장 의존성 주입 /di/src
- 9장 템플릿 /template/src
- 10장 지시자 /directives/src
- 11장 파이프 /pipes/src
- 12장 폼 /forms/src
- 13장 애니메이션 /animation/src
- 14장 보안 /security/src
- 15장 HTTP /http/src
- 16장 생명주기 /lifecycle/src
- 17장 테스트 /test Angular

## 3. Angular 소스코드를 빠르게 실행 하는 방법

- 위 개발환경이 갖춰 줬다면 본 저장소의 /angular-cli/node_modules.zip를 /angular-cli/node_modules 디렉터리에 압축을 풀고 ng serve 명령어로 angular-cli 프로젝트를 실행시킵니다.
- 2번의 각 장의 소스코드가 들어 있는 디렉터리 위치를 참고해 "/각 장의 주제/src"의 폴더를 /angular-cli에 복사합니다.
- 브라우저로 http://localhost:4200/ 에 접속한 뒤 실행 결과를 확인합니다.

## 4. 3장 타입스크립트 소스코드를 실행하는 방법
- 타입스크립트를 실행해 결과를 확인하는 방법은 tsc 명령어를 이용해 타입스크립트 파일 *.ts을 컴파일하고 node 명령어를 이용해 *.js 파일의 실행 결과를 확인하는 것 입니다.
- 52p 예제 3.1을 콘솔 창에서 테스트 하는 경우
	- /ts/src/types/let 디렉터리 위치로 이동해 콘솔 창(터미널 창)을 엽니다.
	- tsc hoisting.ts 명령어를 입력합니다. 그러면 컴파일 된 hoisting.js 파일이 동일 디렉터리에 생성됩니다.
	- node hoisting.js 명령어를 이용해 컴파일 된 hoisting.js 파일을 실행합니다.
- 비주얼 스튜디오 코드로 타입스크립트를 빌드할 때 필요한 설정할 파일은 두가지가 있습니다.
	- 첫번째 파일은 [https://github.com/wikibook/ng2-book/blob/master/ts/tsconfig.json](https://github.com/wikibook/ng2-book/blob/master/ts/tsconfig.json)파일입니다.이 파일은 타입스크립트 컴파일러 설정 옵션에 대한 파일입니다.
	- 두번째 파일은 [tasks.json](https://github.com/wikibook/ng2-book/blob/master/ts/.vscode/tasks.json) 파일입니다. 이는 ctrl + shift + b로 빌드를 수행할 때 실행할 태스크러너에 대한 설정입니다.
- 52p 예제 3.1를 컴파일하고 결과 확인 (TSC + NODE 명령어 이용)
	- 44p를 참고해 [tasks.json](https://github.com/wikibook/ng2-book/blob/master/ts/.vscode/tasks.json)파일을 설정합니다.
	- 그리고 /ts/src/types/let/hoisting.ts 파일을 열고 ctrl + shift + b 를 실행하면 watch 상태가 됩니다. 변경시 마다 컴파일이 일어나고 컴파일된 결과가 생성됩니다.
	- 컴파일된 결과 파일 이름은 hoisiting.ts 파일을 컴파일 했다면 *.js 형태가 되어 hoisiting.js 파일이 생성됩니다.
	- ctrl + shift + c 를 눌러 콘솔 창을 엽니다. 그리고 나서 다음과 같은 명령어를 입력해 결과를 확인합니다.
	- node hoisting.js
- 52p 예제 3.1를 컴파일하고 결과 확인 (ts-node 모듈 이용)
	- 비주얼 스튜디오 코드에서 ctrl + shift + b를 누르고 곧 바로 실행 결과를 확인하려면 [ts-node](https://github.com/TypeStrong/ts-node) 모듈을 이용하면 됩니다.
	- ts-node 설치는 다음과 같은 명령어로 할 수 있습니다.
		- npm install -g ts-node
	- 설치가 완료 됐다면, 비주얼 스튜디오 코드에서 ts-node를 연결해 줍니다. ts-node 모듈을 비주얼 스튜디오 코드와 연결해 줄 때는 제가 미리 작성해둔 [tasks-tsnode.json](https://github.com/wikibook/ng2-book/blob/master/ts/.vscode/tasks-tsnode.json) 파일이 있습니다. 이 파일을 [tasks.json](https://github.com/wikibook/ng2-book/blob/master/ts/.vscode/tasks.json) 파일로 덮어쓰기로 복사합니다.
	- 위와 같은 설정을 모두 마쳤다면 비주얼스튜디오 코드에서 ctrl + shift + b를 입력해 타입스크립트 실행 결과를 곧 바로 확인할 수 있습니다.

## 5. 커뮤니티 소개

- [Angular Korea User Group](https://www.facebook.com/groups/angularkorea/?ref=bookmarks)
	- 이 그룹은 Angular 한국 개발자 그룹으로 Angular 2의 정보를 공유하고, Angular 확산의 목표가 있습니다.

## 6. 기타

- 오탈자 : 책의 오탈자는 [http://wikibook.co.kr/angular-2](http://wikibook.co.kr/angular-2/) 페이지에 접속 후 오탈자 탭에서 확인할 수 있습니다. 
	- 책에 오탈자/오류가 있다면 [홈페이지](http://wikibook.co.kr/angular-2/)에서 오탈자 등록을 부탁드립니다.

## 7. 내용 문의 ##
책에 대해 궁금한 점이나 질문은 책에 기재된 이메일이나 아래 블로그 방명록에 남겨주시면 답변드리겠습니다.

- [블로그 문의](http://happygrammer.tistory.com/guestbook)