const questions = document.querySelectorAll('.qna__question');

questions.forEach(function (question, index) {
  question.addEventListener('click', function (e) {
    e.preventDefault();
    // 해당 형제 요소인 answer의 display 값 추가
    question.nextElementSibling.classList.toggle('show');
    // 화살표 아이콘 방향 변경
    question.childNodes[3].innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>';

    // 다른 요소 눌렀을 때 class 삭제
    questions.forEach(function (question, clickIndex) {
      if (index !== clickIndex) {
        question.nextElementSibling.classList.remove('show');
      }
    });
  });
});
