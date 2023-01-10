const carouselOneCnt = document.querySelectorAll('.carousel1-item') // 1번 캐러셀 아이템 개수를 위한 변수 생성
const carouselFirst = document.querySelector('.carousel1-nav') // 첫번째 캐러셀 접근지정자


// 캐러셀 개수만큼 버튼 생성
for (let i = 0; i < 3; i++) {
  const btn1 = document.createElement('div')

  if (i === 0) { // 첫번째 캐러셀 버튼 활성화(초기화)
    btn1.setAttribute("class", "carousel1-btn active")
    carouselFirst.appendChild(btn1);
  } else {
    btn1.setAttribute("class", "carousel1-btn")
    carouselFirst.appendChild(btn1);
  }
}

// 캐러셀1 버튼이 눌렸을 때
const allButton = document.querySelectorAll('.carousel1-btn') // 캐러셀1 모든 버튼

for (let i = 0; i < allButton.length; i++) {
  allButton[i].addEventListener('click', function () {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove('active');
    }

    console.log(123)
    allButton[i].classList.add('active');
  })
}