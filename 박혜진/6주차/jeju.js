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


// 메인1 이미지 캐러셀
document.querySelector('.btn__1').addEventListener('click', function() {
  document.querySelector('.main__slider1').style.transform = 'translate(0vw)';
});

document.querySelector('.btn__2').addEventListener('click', function() {
  document.querySelector('.main__slider1').style.transform = 'translate(-39.3vw)';
});

document.querySelector('.btn__3').addEventListener('click', function() {
  document.querySelector('.main__slider1').style.transform = 'translate(-78.6vw)';
});

document.querySelector('.btn__4').addEventListener('click', function() {
  document.querySelector('.main__slider1').style.transform = 'translate(-117.9vw)';
});


// 메인3 캐러셀
$(function () {

  $('.carosel-control-right').click(function() {
      var items = $('.carosel').find('.carosel-item');
      var f = items.first();
      items.animate({ left: -f.width() + "px" }, 'slow', function () {
          items.css('left', '0px');
          f.insertAfter(items.last());
      });
  });

  $('.carosel-control-left').click(function() {
      var items = $('#carosel1').find('.carosel-item');
      var l = items.last();
      l.insertBefore(items.first());
      items.css('left', -l.width() + 'px');
      items.animate({ left: "0px" }, 'slow');
  });

});

// Q&A
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
            question.classList.toggle('show-text');
    });
});