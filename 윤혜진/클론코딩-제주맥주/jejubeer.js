// nav 내 링크 클릭 시, 스타일 변화
const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function (event) {
    event.preventDefault()

    navLinks.forEach(function (navLink) {
      navLink.classList.remove('nav__link--active')
    })

    event.currentTarget.classList.add('nav__link--active')
  })
})





// 다음 슬라이드로 넘겨주는 함수
const turnSlide = function (section) {
  const slider = document.querySelector(`.${section}`)
  const items = slider.querySelectorAll(`.slider__item`)
  const visibleItem = slider.querySelector('.slider__item--visible')
  const indicators = slider.querySelectorAll('.slider__indicator')

  let visibleItemIdx = Number(visibleItem.dataset.idx)
  let nextIdx = (visibleItemIdx + 1) % 4

  // visible item의 이미지 감추기
  items[visibleItemIdx].classList.remove('slider__item--visible')

  // visible item의 버튼 비활성화
  indicators[visibleItemIdx].classList.remove('slider__indicator--active')

  // visible item 다음 요소의 이미지 보여주기
  items[nextIdx].classList.add('slider__item--visible')

  // visible item 다음 요소의 버튼 활성화
  indicators[nextIdx].classList.add('slider__indicator--active')
}





// 다음 슬라이드로 밀어주는 함수
const moveSlide = function (section, direction) {
  const carousel = document.querySelector(`.${section} .carousel`)
  const carouselInner = carousel.querySelector('.carousel__inner')
  const carouselItems = carouselInner.querySelectorAll('.carousel__item')
  const sign = {
    'rtl': -1,  // right to left
    'ltr': 1    // left to right
  }

  if (direction == 'rtl') {
    // carousel__inner를 rtl 방향으로 carousel__inner의 (-15(기존) + -20)% 만큼 이동
    carouselInner.style.transform = `translateX(${sign[direction] * 35}%)`

    // 젤 앞에 있는 item 떼서 가장 뒤로 붙이기
    carouselInner.removeChild(carouselItems[0])
    carouselInner.appendChild(carouselItems[0])
  } else {
    // 젤 뒤에 있는 item 떼서 가장 앞으로 붙이기
    carouselInner.removeChild(carouselItems[4])
    carouselInner.prepend(carouselItems[4])

    // carousel__inner를 ltr 방향으로 carousel__inner의 20% 만큼 이동
    carouselInner.style.transform = `translateX(${sign[direction] * 20}%)`
  }
}





// accordion
const accordion = function (items) {
  items.forEach(function (item) {
    const head = item.querySelector('.accordion__head')
    head.addEventListener('click', function (event) {
      // 클릭한 head의 item에 active 추가
      item.classList.toggle('accordion__item--active')

      //  클릭한 head의 icon을 변경('▲' ⇆ '▼')
      const icon = event.currentTarget.querySelector('.accordion__head--icon')
      icon.innerText = icon.innerText == '▼' ? '▲' : '▼'
    })
  })
}





// 페이지 로딩 후
document.addEventListener('DOMContentLoaded', function () {
  // s1의 무한 슬라이드(slider)
  setInterval(turnSlide, 3000, 's1');

  // s3의 무한 슬라이드(carousel) ==> 전체 수정 필요!!
  setInterval(moveSlide, 3000, 's3', 'rtl')
  // control 클릭 시 이동
  const controlBtns = document.querySelectorAll('.carousel__control')
  controlBtns.forEach(function (controlBtn, idx) {
    controlBtn.addEventListener('click', function () {
      if (idx == 0) {  // 이전 버튼 클릭 시
        moveSlide('s3', 'ltr')
      } else {   // 다음 버튼 클릭 시
        moveSlide('s3', 'rtl')
      }
    })
  })

  // s5의 무한 슬라이드(slider)
  setInterval(turnSlide, 3000, 's5');

  // accordion 클릭 이벤트 걸기
  const accordionItems = document.querySelectorAll('.accordion__item')
  accordion(accordionItems)
})

// console.log(carousel.offsetWidth)