const prevBtn = document.querySelector('.carousel__prev');
const nextBtn = document.querySelector('.carousel__next');
const container = document.querySelector('.carousel__container');

let imgCount = 1;

prevBtn.addEventListener('click', function () {
  container.style.transform = `translateX(-${imgCount - 2}00vw)`;
  imgCount--;
});

nextBtn.addEventListener('click', function () {
  container.style.transform = `translateX(-${imgCount}00vw)`;
  imgCount++;
});
