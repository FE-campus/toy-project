
// header 부분 tab 클릭 시 style 이벤트
try {

  let clickedIndex;
  const tabMenu = document.querySelectorAll('.tabmenu > a');

  for (let i=0; i < tabMenu.length; i++) {

    tabMenu[i].addEventListener('click', function() {
      tabMenu[i].classList.add('checked');

      clickedIndex = i;

      tabMenu.forEach(function(menu, index) {
        if (index != clickedIndex) {
          menu.classList.remove('checked');
        }
      });

    });
  } 
} catch { }


// Q & A dropdown toggle 구현
// 제주도 질문 부분 잘안눌림 - 추후 해결 할 것
try {

  const questionBox = document.querySelectorAll('.q-box');
  
  questionBox.forEach(el => {
    el.addEventListener('click', (e) => {
      const targetBox = e.target.parentNode.lastElementChild;
      const answerBox = e.target.parentNode.nextElementSibling;
      if (targetBox.innerText === "arrow_drop_down") {
        targetBox.innerText = "arrow_drop_up";
      } else {
        targetBox.innerText = "arrow_drop_down";
      }
      console.log(answerBox)
      answerBox.classList.toggle('toggle');
    })
  });

} catch { }



// 스크롤 할때 title 나타나게끔 하기
try {
  const sectionTwoTitle = document.querySelector('.section__bg-img2--title-area');
  scrollTwoTitleY = sectionTwoTitle.getBoundingClientRect().top;
  const sectionFiveTitle = document.querySelector('.section__bg-img5--title-area');
  scrollFiveTitleY = sectionFiveTitle.getBoundingClientRect().top;
  
  console.log(scrollTwoTitleY);
  console.log(scrollFiveTitleY);
  window.addEventListener('scroll', () => {
    if (window.scrollY <= scrollTwoTitleY) {
      sectionTwoTitle.style.transition = "1s ease";
      sectionTwoTitle.style.opacity = "1";
    }
    if ( window.scrollY + 1000 > scrollFiveTitleY) { 
      sectionFiveTitle.style.transition = "0.5s ease";
      sectionFiveTitle.style.opacity = "1";
    } // 조금 억지스럽게 맞춘건 있지만 성공,,
  });
 } catch {}



// top 버튼 부드럽게 스크롤해서 올라가게 만들기
try {
  const topBtn = document.querySelector('.top-btn > img');
    window.addEventListener('scroll', () => {
      topBtn.style.display = "block";
      topBtn.addEventListener('click', (e) => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
      })
    });
} catch { }


