// 네비게이션 바 리스트 클릭 시 색상 변경

var nav__list = document.getElementsByClassName("nav__list");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "nav__list--active") {
    event.target.classList.remove("nav__list--active");
  } else {
    for (var i = 0; i < nav__list.length; i++) {
      nav__list[i].classList.remove("nav__list--active");
    }

    event.target.classList.add("nav__list--active");
  }
}

function init() {
  for (var i = 0; i < nav__list.length; i++) {
    nav__list[i].addEventListener("click", handleClick);
  }
}

init();