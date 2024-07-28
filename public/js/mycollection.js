(function () {
    const tab = $('.tab li');
    //console.log(tab)

    tab.on('click', function () {
        let idx = $(this).index();
        //console.log(idx)
        let tab_con = $(this).parents('.tab_group').children('.tab_content').eq(idx);

        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        tab_con.addClass('on');
        tab_con.siblings('.tab_content').removeClass('on');
    })
})
$(function () {
    const $aside = $('.sideMenu'),
      $btn = $('.btnMenu');

    $btn.on('click', function () {
      $aside.toggleClass('on') //css에서 선언유무와 상관없이 on 클래스 없으면 붙여주고, 있으면 버리는 역할

      if ($aside.hasClass('on')) {
        $(".contents").addClass('on');
        $aside.stop().animate({
          right: 0
        }, 300);
        $btn.find('img').attr({
          src: 'image/btnclose.png',
          alt: '메뉴닫기'
        })
      } else {
        $(".contents").removeClass('on');
        $aside.stop().animate({
          right: '-27%'
        }, 300);
        $btn.find('img').attr({
          src: 'image/menu.png',
          alt: '메뉴열기'
        })
      }
    })

    $('.btnClose').on('click', function () {
      $(".contents").removeClass('on');
      $aside.stop().animate({
        right: '-27%'
      }, 300);
      $btn.find('img').attr({
        src: 'image/menu.png',
        alt: '메뉴열기'
      })
      $aside.removeClass('on')
    })

  });