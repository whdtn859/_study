// Node.js 클라이언트 요청 처리 방법(POST)
// 본 내용은 https://javafa.gitbooks.io/nodejs_server_basic/content/ 의 내용을 토대로 작성 되었습니다.

// POST 요청 처리란?
// GET 방식과 달리 주소만 요청하고 변수와 값을 주소가 아닌 요청 BODY에 담아서 서버측에 요청
// 서버로 값을 전달하기 위해서 서버측 주소 끝에 ?(물음표)를 붙이고 키1=값1&키2=값2 의 형태로 요청합니다.

var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response){

  // 1. post로 전달된 데이터를 담을 변수를 선언
  var postdata = '';
  // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
  request.on('data', function (data) {
    // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
    postdata = postdata + data;
  });

  // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
  request.on('end', function () {
    // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
    var parsedQuery = querystring.parse(postdata);
    // 6. 객체화된 데이터를 로그로 출력
    console.log(parsedQuery);
    // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
    response.writeHead(200, {'Content-Type':'text/html'});
    //response.end('var1의 값 = ' + result);
  });

});

server.listen(3030, function(){
	console.log('Server is running...')
});


//특정 주소를 서버로 요청시 서버로 전달되는 데이터의 형태

// Request : 실제 자원요청에 대한 정보가 저장되는 부분
// POST /request/specific_datas.call HTTP/1.1

// Request Header : 자원요청에 대한 설정정보, 요청하는 데이터타입, 요청자의 브라우저정보 등이 담긴다.
// Accept: image/gif, image/xxbitmap, image/jpeg, image/pjpeg,
// application/xshockwaveflash, application/vnd.msexcel,
// application/vnd.mspowerpoint, application/msword, */*
// Referer: http://wahh-app.com/books/default.asp
// Accept-Language: en-gb,en-us;q=0.5
// Accept-Encoding: gzip, deflate
// User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)

//Request Data : 실제 전달하고자 하는 데이터가 담긴다
// jfhdahiekljdklhfkha=e%3kljfhailjljfljalkjlkfjldjaf

// GET = 가장 윗줄의 주소부분 끝에 ?(물음표) 를 붙이고 필요한 변수와 값을 전달
// POST = 가장 아래의 Request Data에 해당하는 BODY 부분에 데이터를 담아서 전달합니다.