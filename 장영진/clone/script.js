const carouselOneCnt = document.querySelectorAll('.carousel1-item') // 1번 캐러셀 아이템 개수를 위한 변수 생성
const carouselFirst = document.querySelector('.carousel1-nav') // 첫번째 캐러셀 접근지정자

for (let i = 0; i < carouselOneCnt.length; i++) {
  const log = document.createElement('div')
  log.setAttribute("class", `carousel1-nav carousel1-${i}`)
  carouselFirst.appendChild(log);
}