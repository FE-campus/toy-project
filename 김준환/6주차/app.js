// 캐러셀 이미지 html 리스트 가져오기 (기본 display: none 설정, 맨앞에만 display:block 상태)
let carousel_red = document.querySelectorAll(".carousel-img");
let idx_cnt = 0; // idx_cnt는 4초마다 1씩 계속해서 무한히 증가하며 4개 항목이므로 idx_cnt를 4로 나눈 나머지를 인덱스로 접근
// 4초 간격으로 show 할 객체 속성 변화주는 함수 호출
setInterval(carouselRed, 4000);

// show를 가진 항목의 클래스 삭제 및 그 다음 항목 show클래스 추가
function carouselRed() {
  let idx = parseInt(idx_cnt % 4); // 0 1 2 3 0 1 2 3 ... 반복
  let target = carousel_red[idx];
  if (target.classList.value.includes("show")) {
    target.classList.remove("show"); // show 클래스 가지고 있으면 삭제
    idx_cnt++;
    idx = parseInt(idx_cnt % 4);
    target = carousel_red[idx];
    target.classList.add("show"); // 그 다음 항목에 show 클래스 추가
  } else {
    idx_cnt++;
  }
}
