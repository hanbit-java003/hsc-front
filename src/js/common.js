$('.search-toggle').on('click', function () {
    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle('100');
});

$('.select-lang').on('click', function () {
    $('.lang-eng').toggle();

    $('.lang-eng').on('click', function (){
        alert('영어는 나중에 만들겠음')
    });
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
            bottom: -55
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

$('.search-input').on('keyup', function(event) {
    if (event.keyCode === 13) {
        var text = $('.search-input').val();

        location.href = './search.html?' + text;
    }
});

$('.header-btn-member').on('click', function () {
    $('body').append('<div class="overlay-layer dark-layer"></div>');
    $('body').css('overflow', 'hidden');

    var memberLayer = require('../template/member-menu.hbs');

    $('body').append(memberLayer);

    $('.ht-member-toggle').on('click', function () {
        $('.ht-sign-in').toggle();
        $('.ht-sign-up').toggle();
    });

    $('.ht-member-layer').animate({
        left: '0px'
    }, {
        duration: 500,
        complete: function () { // 애니메이션 끝나면 얘가 불려짐
            $('.overlay-layer').on('click', function () {
                $('.ht-member-layer').animate({
                    left: '-333px'
                }, {
                    duration: 500,
                    complete: function () {
                        $('.ht-member-layer').remove();
                        $('.overlay-layer').remove();
                        $('body').css('overflow', 'auto');
                    }
                });
            })
        }
    });
});


