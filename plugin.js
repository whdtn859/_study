$(function(){
	// Swiper
	var swiper = new Swiper('.mySwiper', {
		effect: 'fade', // 슬라이드 효과
		slidesPerView: '1', // 보여지는 슬라이드 갯수
		centeredSlides: true, // 중앙정렬 슬라이드
		loop: true, //무한
		loopAdditionalSlides: 1,// 루프 생성 후 복제될 슬라이드 추가 수
		observer: true, //스타일이 변경 될 때마다 초기화 ex) hide & show
		observeParents: true, // 상위 요소 포함
		//페이징
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		//버튼
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		//자동재생
		autoplay: {
			delay: 5000,
			disableOnInteraction: false, //스와이프 후 자동재생 비활성화 기능 (false = 비활성화 되지 않음)
			stopOnLast: false, //마지막에서 자동재생이 멈춤(loop일 경우 영향 X)
		},
		// 슬라이드가 변경 될 때마다 실행
		on: {
			slideChange: function () {

			}
		}
	});

});