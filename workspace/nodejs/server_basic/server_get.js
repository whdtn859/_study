// Node.js 클라이언트 요청 처리 방법(GET)
// 본 내용은 https://javafa.gitbooks.io/nodejs_server_basic/content/ 의 내용을 토대로 작성 되었습니다.

// GET 요청 처리란?
// 주소값을 이용해 요청을 하는 방식입니다.
// 서버로 값을 전달하기 위해서 서버측 주소 끝에 ?(물음표)를 붙이고 키1=값1&키2=값2 의 형태로 요청합니다.

var http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

// node.js에는 console 과 같은 내장객체와 더불어 미리 정의되어 있는 내장 module이 있음
// url = 클라이언트가 요청한 주소값을 javascript 객체로 변환해서 사용할 수 있게 하는 모듈
// querystring = 주소로 전달된 Query String 을 변환해서 javascript 객체로 사용할 수 있게 해주는 모듈



var server = http.createServer(function(request, response){

	 // 3. 콘솔화면에 로그 시작 부분을 출력
	 console.log('--- log start ---');
	 // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
	 // url 모듈의 parse( ) 함수를 사용해서 request 객체에 있는 url 값을 parsedUrl 변수에 담은후에 로그로 출력
	 // http를 통해 생성되는 request 객체 살펴보기 > https://javafa.gitbooks.io/nodejs_server_basic/content/appendix2_http_request_object.html
	 var parsedUrl = url.parse(request.url);
	 console.log(parsedUrl); // parsedUrl 객체에 담겨 있는 내용이 출력
	 // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
	 var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
	 console.log(parsedQuery);
	 // 6. 콘솔화면에 로그 종료 부분을 출력
	 console.log('--- log end ---');

	//response.writeHead(200, {'Content-Type':'text/html'});
	// 한글이 깨져서 utf-8 속성 추가
	response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	response.end('var1의 값은 '+parsedQuery.var1);
});

server.listen(3030, function(){
	console.log('Server is running...')
});

// cmd 창에서 코드 실행
// http://localhost:3030/?var1=newData&var2=153&var3=testdata2022 브라우저에서 확인
// cmd 창에서 로그 확인.
// 소스코드가 수정되면 서버를 재실행 해야지만 코드가 반영됩니다.

// 로그 설명
// --- log start ---
// 1. 이부분이 var parsedUrl = url.parse(주소) 함수로 주소값을 객체화 한 부분입니다.
//    객체화 되기 때문에 parsedUrl.search 형태로 객체 내부의 변수값을 사용할 수 있습니다.
//    아래에서는 객체 내부의 query 라는 변수값을 가져와서 다시 객체화 합니다.
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?var1=newData&var2=153&var3=testdata2017',
//   query: 'var1=newData&var2=153&var3=testdata2017',
//   pathname: '/',
//   path: '/?var1=newData&var2=153&var3=testdata2017',
//   href: '/?var1=newData&var2=153&var3=testdata2017'
// }

// 2. 이 부분이 var parsedQuery = querystring.parse(parsedUrl.query,'&','=')
//    역시 위의 parsedUrl 객체에서 query 라는 변수값을 다시 querystring 으로 parsing 하여 객체화하였습니다.
//    해당 객체는 parsedQuery.var1 형태로 객체내부의 값을 사용할 수 있게 됩니다.
// { var1: 'newData', var2: '153', var3: 'testdata2017' }
// --- log end ---


