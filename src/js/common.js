$('.search-toggle').on('click', function () {
    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle();
});

$('.select-lang').on('click', function () {
    $('.lang-eng').toggle();
});

function relocateGoTopButton() {
    var scrollTop = $(window).scrollTop();
    var footerHeight = $('footer').outerHeight();
    var bodyHeight = $('body').height();
    var windowHeight = $(window).height();

    if (scrollTop > 250) {
        $('.go-top-btn').fadeIn(400);
    }
    else {
        $('.go-top-btn').fadeOut(400);
    }

    if (bodyHeight - footerHeight - scrollTop < windowHeight) {
        $('.go-top-btn').css({
            position: 'absolute',
            bottom: 0
        });
    }
    else {
        $('.go-top-btn').css({
            position: 'fixed',
            bottom: 20
        });
    }
}

$('.header-logo').on('click', function () {
    location.href = './';
});

$('.header-bt').on('click', function () {
    location.href = '../login.html';
});

$('.go-top-btn').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 100);
    return false;
});

$(window).on('scroll', function () {
    relocateGoTopButton();
});
relocateGoTopButton();
