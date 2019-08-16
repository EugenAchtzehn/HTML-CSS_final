$(document).ready(function () {
    $('.dropdownLi').click(function () {
        if ($(this).children().hasClass('active') === true) {
            $(this).children().removeClass('active')
        } else {
            $('.dropdownLi').children().removeClass('active');
            $(this).children().addClass('active');
        }
        // 首先判斷被點的子選單是否開啟，如果開啟則關閉 > 使用者重複點了這個選單
        // 如果沒有開啟，則關閉全部的子選單，並開啟被點擊的子選單 > 使用者第一次點，或跨選單點
    });


    $('.backBtn a').on('click', function () {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});

// < +++ customize the lightbox plugin +++ >
lightbox.option({
    'resizeDuration': 200,
    'showImageNumberLabel': false
})

/// < +++ customize the swiper plugin +++ >
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // let the banners change per 5 seconds
    autoplay: {
        delay: 5000,
    },

})