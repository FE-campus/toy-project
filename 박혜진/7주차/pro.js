// 메인 캐러셀 광고 1

// 버튼을 누르면 이동
$(function () {

    $('.carosel-control-right').click(function() {
        let items = $('.main__ad__carousel').find('.main__ad__item');
        let f = items.first();
        items.animate({ left: -f.width() + "px" }, 'slow', function () {
            items.css('left', '0px');
            f.insertAfter(items.last());
        });
    });
  
    $('.carosel-control-left').click(function() {
        let items = $('.main__ad__carousel').find('.main__ad__item');
        let l = items.last();
        l.insertBefore(items.first());
        items.css('left', -l.width() + 'px');
        items.animate({ left: "0px" }, 'slow');
    });
  
  });