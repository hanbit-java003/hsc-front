var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var userId = params.get('no');

function ajax(options) {
    if (!options.error) {
        options.error = function (jqXHR) {
            var errorCode = jqXHR.responseJSON.errorCode;

            /*if (errorCode === 403) {
                location.href = '../login.html';
            }*/

            alert(jqXHR.responseJSON.message);
        };
    }

    $.ajax(options);
}

$('.header-logo').on('click', function () {
    location.href = './';
});

$('.search-toggle').on('click', function () {
    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle('100');
});

$('.header-bt').on('click', function () {
    location.href = '../login.html';
});

$('.search-input').on('keyup', function (event) {
    if (event.keyCode === 13) {
        var text = $('.search-input').val();

        location.href = './search.html?' + text;
    }
});

/*$('.header-btn-member').on('click', function () {
    $('body').append('<div class="overlay-layer dark-layer"></div>');
    $('body').css('overflow', 'hidden');

    ajax({
        url: '/api/user/' + userId,
        success: function (result) {
            //userInfo(result);
        }
    });

});*/

function userInfo(model) {
    model.diary = model.submenu.length;
    model.country = model.userSub.length;

    var memberLayerTemplate = require('../template/member-menu.hbs');
    memberLayer = memberLayerTemplate(model);

    $('body').append(memberLayer);

    openLayer();

    $('.layer-btn').on('click', function () {
       location.href = './setting.html?no=' + userId;
    });

    $('.layer-remove').on('click', function () {
        closeLayer();
    });
}

function openLayer() {
    $('.member-layer').animate({
        left: '0px'
    }, {
        duration: 500,
        complete: function () {
            $('.overlay-layer').on('click', function () {
                closeLayer();
            });
        }
    });

    /*$('.signout-btn').on('click', function () {
        ajax({
            url: '/api/member/signout',
            success: function (result) {
                alert('로그아웃 되었습니다.');
                closeLayer();
                //$('.header-btn-member').css('display', 'none');
                location.href = '/';
            }
        });
    });*/
}

function closeLayer() {
    $('.member-layer').animate({
        left: '-303px'
    }, {
        duration: 500,
        complete: function () {
            $('.member-layer').remove();
            $('.overlay-layer').remove();
            $('body').css('overflow', 'auto');
        }
    });
}

$('.select-lang').on('click', function () {
    $('.lang-eng').toggle();

    $('.lang-eng').on('click', function () {
        //
    });
});

$('.go-top-btn').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 100);
    return false;
});

// 위로가기 버튼
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

module.exports = {
    ajax: ajax
};