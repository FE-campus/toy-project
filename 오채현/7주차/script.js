const slider = function () {
    // 전체 슬라이드 선택
    const slides = document.querySelectorAll('.section__slide');
    // 슬라이드 이동 버튼
    const btnLeft = document.querySelector('.slide--arrowPrev');
    const btnRight = document.querySelector('.slide--arrowNext');
    // 현재 슬라이드 표시
    const slideNum = document.querySelector('.slide--num');
    // 전체 슬라이드 표시
    const slideAll = document.querySelector('.slide--all');

    // 현재 슬라이드 인덱스 초기화
    let curSlide = 0;
    // 최대 슬라이드 = 전체 슬라이드 갯수
    const maxSlide = slides.length;

    // 전체 슬라이드 수 표시 대입
    slideAll.innerText = "0" + maxSlide

    // 슬라이드 이동 :  슬라이드 인덱스 값 받음
    const goToSlide = function (slide) {
        // 각 슬라이드 forEach 위치 이동 적용
        // s : 슬라이드, i: 해당 슬라이드 인덱스
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
    }

    // 다음 슬라이드로 이동
    const nextSlide = function () {
        // 현재 슬라이드가 마지막 슬라이드면 인덱스 0으로 초기화
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            // 마지막인 아닌 경우 슬라이드 인덱스 값 증가
            curSlide++;
        }
        // 해당하는 슬라이드 인덱스 값으로 이동
        goToSlide(curSlide);

        // 슬라이드 메뉴에 현재 슬라이드 번호 갱신
        let slideIdx = curSlide + 1;
        slideNum.innerText = "0" + slideIdx;
    };

    // 이전 슬라이드로 이동
    const prevSlide = function () {
        // 현재 슬라이드가 첫번째 슬라이드면 인덱스 0으로 초기화
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            // 첫 번째가 아닐 경우 슬라이드 인덱스 감소
            curSlide--;
        }

        // 해당하는 슬라이드 인덱스 값으로 이동
        goToSlide(curSlide);

        // 슬라이드 메뉴에 현재 슬라이드 번호 갱신
        let slideIdx = curSlide + 1;
        slideNum.innerText = "0" + slideIdx;

    };
    //  처음 시작 슬라이드 인덱스는 0으로 고정
    const init = function () {
        goToSlide(0);
    };

    // 슬라이드 0부터 실행
    init();

    // 슬라이드 L, R 버튼 클릭 시 다음 또는 이전 으로 슬라이드 이동하는 이벤트
    btnLeft.addEventListener('click', prevSlide);
    btnRight.addEventListener('click', nextSlide);

    // 5초마다 다음 슬라이드로 자동  전환하는 인터벌 설정
    setInterval(nextSlide, 5000);
};

// 위의 함수 일괄 실행
slider();