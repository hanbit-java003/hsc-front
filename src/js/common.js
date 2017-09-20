var tab = require('./tab');
var search = require('./search');

function ajax(options) {
    if (!options.error) {
        options.error = function (jqXHR) {
            var errorCode = jqXHR.responseJSON.errorCode;

            if (errorCode === 403) {
                location.href = '../login.html';
            }

            alert(jqXHR.responseJSON.message);
        };
    }

    $.ajax(options);
}

$('.header-btn-member').on('click', function () {

    $('body').append('<div class="overlay-layer dark-layer"></div>');
    $('body').css('overflow', 'hidden');

    tab.initTab();

});

// 로고 버튼
$('.header-logo').on('click', function () {
    location.href = './';
});

// 로그인 버튼
$('.header-bt').on('click', function () {
    location.href = '../login.html';
});

// 위로가기 버튼
$('.go-top-btn').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 100);
    return false;
});

// 언어선택 버튼 토글
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

$(window).on('scroll', function () {
    relocateGoTopButton();
});
relocateGoTopButton();

search.searchInit();

module.exports = {
    ajax: ajax
};