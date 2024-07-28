const swiper = new Swiper(".recommand_pic", {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // If we need pagination
   /* pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },  */

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  
});
var swiper1 = new Swiper(".thema_list", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


$(".remove").click(function () {
  // Hide the content inside the reset section
  $(".recommand_pic ").empty();
}); 

 $(document).on("click","#likeOption", function(){
     $(this).toggleClass('on');
  });
  $(document).on("click","#cartOption", function(){
     $(this).toggleClass('on');  
  });

  document.addEventListener('DOMContentLoaded', function () {
    const swiperSlides = document.querySelectorAll('.thema_list .swiper-slide');
    const swiperWrappers = document.querySelectorAll('.thema_box .swiper-wrapper');

    swiperSlides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            // 모든 swiper wrapper 숨기기
            swiperWrappers.forEach(wrapper => {
                wrapper.style.display = 'none';
            });

            // 해당하는 swiper wrapper 보이기
            swiperWrappers[index].style.display = 'block';
        });
    });
});
  document.addEventListener('DOMContentLoaded', function () {
    const swiperSlides = document.querySelectorAll('.thema_list .thema2');
    const swiperWrappers = document.querySelectorAll('.thema_box .swiper-wrapper');

    swiperSlides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            // 모든 swiper wrapper 숨기기
            swiperWrappers.forEach(wrapper => {
                wrapper.style.display = 'none';
            });

            // 해당하는 swiper wrapper 보이기
            swiperWrappers[index].style.display = 'block';
        });
    });
}); 
