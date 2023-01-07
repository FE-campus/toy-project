let carousel_red = document.querySelectorAll(".carousel-img");
let idx_cnt = 0;
setInterval(carouselRed, 4000);
function carouselRed() {
  let idx = parseInt(idx_cnt % 4);
  let target = carousel_red[idx];
  if (target.classList.value.includes("show")) {
    target.classList.remove("show");
    idx_cnt++;
    idx = parseInt(idx_cnt % 4);
    target = carousel_red[idx];
    target.classList.add("show");
  } else {
    idx_cnt++;
  }
}
