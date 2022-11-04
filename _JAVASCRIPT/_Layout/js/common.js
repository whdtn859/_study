function includeHtml() {
	let el, file, xhttp;
	// html 내에 있는 모든 태그를 object로 반환
	let all = this.document.getElementsByTagName("*");
	// console.log(all);
	for(let i = 0; i < all.length; i++) {
		// html 내에 모든 요소 중에 i 번째에 있는 요소를 변수에 저장
		el = all[i];
		// console.log(el);
		// 요소에 있는 data-include를 변수에 저장
		// data-include="파일 url"
		file = el.dataset.include;
		// file에 저장된 요소가 있으면 true
		if(file){
			// XMLHttpRequest - 서버와 상호작용을 할 때 사용
			// 페이지의 새로고침 없이도 URL에서 데이터를 가져올 수 있음
			// 서버가 없으면 작동 X
			xhttp = new XMLHttpRequest();

			// XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출되는 함수
			xhttp.onreadystatechange = function() {
				/**
				 * readyState
				 *
				 * 클라이언트가 있는 상태를 반환
				 * readyState == 0
				 * - 클라이언트가 생성됨
				 * - open() 메서드가 호출되지 않음
				 * readyState == 1
				 * - open() 메서드가 호출됨
				 * - send() 메서드를 호출할 수 있음
				 * - setRequestHeader()를 사용하여 request header를 설정할 수 있음
				 * readyState == 2
				 * - send() 메서드가 호출됨 response 헤더가 수신됨
				 * readyState == 3
				 * - reponse의 내용을 수신 중
				 * - reponseType이 text 또는 빈 문자열인 경우 responseText 로드
				 * readyState == 4
				 * - 데이터 전송이 완료됨
				 */

				if(this.readyState == 4) {
					// stauts 200 - 서버에 문서가 존재하면 실행
					if(this.status == 200) {
						console.log(this.responseText);
						// data 속성에 있는 파일을 해당 요소에 html로 넣어줌
						el.innerHTML = this.responseText;
					}
					// stauts 404 - 서버에 문서가 존재하지 않으면 실행
					if(this.status == 404) el.innerHTML = "주소가 잘못되었습니다.";
					// 위의 코드가 실행된 후 data-include 속성 삭제
					el.removeAttribute("data-include");
					// includeHtml 함수 반복
					includeHtml();
				}
			}

			// open(method(get, post, put, delete), url, async(비동기식으로 수행할지 여부 - default = true), user(인증 목적으로 사용할 사용자 이름), password(인증 목적으로 사용할 비밀번호))
			xhttp.open("GET", file, true);
			// 서버에 request를 전송
			xhttp.send();
			// return 시키지 않으면 무한반복 하면서 다운됨
			return;
		}
	}
}


window.addEventListener('load', includeHtml);
