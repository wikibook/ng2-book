# Angular CLI에 대한 메모

책에서 사용한 angular-cli 프로젝트는 angular-cli version 1.0.0-beta.14를 사용하고 있습니다. angular-cli의 의존 모듈이 많기 때문에 네트워크 속도에 따라 오랜 시간이 걸릴 수 있습니다. 따라서 이러한 불편한 점을 감안해 의존모듈은 별도로 압축해서 올려놓습니다.

	/angular-cli/node_modules.zip 

의존모듈이 받기가 어렵거나, 시간이 오래걸리거나 오류가 있다면 위 파일을 /angular-cli/node_modules 디렉터리에 압축을 풀어서 이용할 수 있습니다. node_modules는 angular-cli 프로젝트 생성시 자동으로 설치되는 의존 모듈 파일이 담긴 디렉터리입니다. 책에서 사용한 angular-cli와 버전이 다르다면 의존모듈 구성이 달러 프로젝트 예제가 실행되지 않을 수 도 있습니다.

# Angular-CLI 실행 #

주제별로 /src 폴더를 통채로 /angular-cli 폴더로 복사하고 나서 ng serve 명령어를 이용해 angular-cli를 실행하면 됩니다.

	ng serve

위 명령어를 입력하고 나서 브라우저로 `http://localhost:4200/` 주소로 이동하면 실행 결과가 나타납니다.