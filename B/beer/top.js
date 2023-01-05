const topBtn = document.querySelector('.btn__top');

// 일정 높이 이상 스크롤시 top 버튼 나타나게
window.addEventListener('scroll', function () {
  if (this.scrollY > 500) {
    topBtn.classList.add('on');
  } else {
    topBtn.classList.remove('on');
  }
});

// 부드럽게 맨 위로 스크롤링
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
