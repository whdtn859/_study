// Node.js 서버 구축하는 방법
// 본 내용은 https://javafa.gitbooks.io/nodejs_server_basic/content/ 의 내용을 토대로 작성 되었습니다.

// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.)
var http = require('http');
// 웹서버를 실행하기 위해서 http 모듈을 require로 불러옵니다. require는 다른언어의 import 와 유사한 기능입니다.
// http 모듈에 정의된 모든 기능이 변수 'http'로 생성됨. (변수명은 꼭 'http'로 하지 않아도 가능)


// 2. http 모듈로 서버를 생성한다.
// 아래와 같이 작성하면 서버를 생성한 후, 사용자로 부터 http 요청이 들어오면 function 블럭내부의 코드를 실행해서 응답한다.
var server = http.createServer(function(request, response){
	// response 객체를 사용해 사용자 측으로 반환값을 넘겨줌.

	// 숫자값은 웹서버 들어오는 어떤 요청에 대해 정상적으로 값을 리턴할 때 사용하는 http 상태코드.
	// 오류가 없이 서버에서 처리가 정상적으로 완료되면 200 코드를 담아서 응답헤더를 설정.
	// 상태 코드 더 보기 > https://javafa.gitbooks.io/nodejs_server_basic/content/appendix1_http_status.html
	// 두번째 값은 서버측에서 보내주는 컨텐츠의 타입이 텍스트이고, html 형태라는 것을 정의.
	// { } 블럭형태로 값이 전달되는 경우는 해당 블럭에 복수개의 값이 담길 수 있다는 의미입니다.
	// 두번째 값은 Content-Type 이라는 키값 이외에도 Authorization, Cookie 등의 다양한 값들을 지정할 수 있음.
	response.writeHead(200, {'Content-Type':'text/html'});

	// end( ) 라는 함수에 'Hello node.js!!'라는 실제 컨텐츠를 담아서 브라우저 측에 전달
	// 브라우저는 해당 컨텐츠를 받은 후 html 형태로 화면에 출력
	response.end('Hello node.js!!');
});
// response = 서버로 웹브라우저나 또는 앱으로 부터 어떤 요청이 있을 때 요청한 사용자 측으로 값을 반환해 줄 때 사용하는 객체입니다.
// request = 사용자가 요청한 내용이 담겨있는 객체 입니다.

// listen 함수로 3030 포트를 가진 서버를 실행한다. 서버가 실행되는 것을 콘솔창에서 확인하기 위해 로그를 출력한다.
server.listen(3030, function(){
	console.log('Server is running...')
});

// cmd 창에서 해당 코드를 실행하여 로그가 출력되면 정상적으로 작동되는 것 입니다.
// 현재 폴더 기준 실행 방법(d:\study\nodejs\server_basic)
// d: > cd \study\nodejs\server_basic > node server
// 로그 출력 시 브라우저에서 확인 가능합니다. ex) http://localhost:3030/
// cmd 창을 띄운 상태에서만 브라우저에서 확인 가능합니다.
// cmd 창에서 드라이브 이동 입력어 = 드라이브명: - ex) d:
// cmd 창에서 폴더 이동 입력어 = cd \폴더명 - ex) cd \study
// cmd 창에서 서버 실행 입력어 node 파일명 ex) node server, node server_get
// cmd 창에서 서버 종료 입력어 Ctrl + c

