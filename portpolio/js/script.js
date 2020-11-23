function scrollHandler () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop >= $('.about').position().top) {
        $('.navbar .menu-right li button').css('color', '#4A4A4A');

        $('.skill').each(function () {
            let percentage = $(this).find('.percentage').text();
            $(this).find('.inner-bar').animate({width: percentage}, 1200);
        })
    } else {
        $('.navbar .menu-right li button').css('color', 'white');
    }

    $('section').each(function () {
        if ( scrollTop >= $(this).position().top ) {
            $(this).find('.vertical-center').animate({opacity: 1, top: '0px'}, 500);
        }
    })
}

$(window).on('scroll', scrollHandler);

$(document).ready(scrollHandler());

$('.navbar .menu-right li button').on('click', function () {
    let btn_id = $(this).attr('id');

    if (btn_id == 'about-btn') {
        $('html, body').animate({scrollTop: $('.about').position().top}, 500);
    } else if (btn_id == 'contact-btn') {
        $('html, body').animate({scrollTop: $('.contact').position().top}, 500);
    }

})