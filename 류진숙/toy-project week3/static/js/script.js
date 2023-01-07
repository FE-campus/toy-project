
// Q & A dropdown toggle 구현
try {

  const questionBox = document.querySelectorAll('.q-box');
  
  questionBox.forEach(el => {
    el.addEventListener('click', (e) => {
      const targetBox = e.target.parentNode.lastElementChild;
      console.log(targetBox);
      const answerBox = e.target.parentNode.nextElementSibling;
      if (targetBox.innerText === "arrow_drop_down") {
        targetBox.innerText = "arrow_drop_up";
      } else {
        targetBox.innerText = "arrow_drop_down";
      }
      answerBox.classList.toggle('toggle');
  
    })
  });

} catch { }

// 스크롤 할때 title 나타나게끔 하기
// try {
//   const sectionTwoTitle = document.querySelector('.section__bg-img2--title-area');
//   const sectionFiveTitle = document.querySelector('.section__bg-img5--title-area');
//   window.addEventListener('scroll', () => {
//     sectionTwoTitle.style.transition = "0.5s ease";
//     sectionTwoTitle.style.opacity = "1";
//     sectionFiveTitle.style.transition = "0.5s ease";
//     sectionFiveTitle.style.opacity = "1";
//   });
// } catch {}

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


