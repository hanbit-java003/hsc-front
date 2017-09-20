var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var id = params.get('id');

var common = require('./common');

function userInfo(model) {
    model.diaryCount = model.diary.length;
    model.countryCount = model.diary.length;

    var memberLayerTemplate = require('../template/member-menu.hbs');
    memberLayer = memberLayerTemplate(model);

    $('body').append(memberLayer);

    openLayer();

    // 마이페이지 버튼
    $('.layer-btn').on('click', function () {
        location.href = './setting.html?id=' + id;
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

    $('.signout-btn').on('click', function () {
        signOut();
    });
}

function signOut () {
    $.ajax({
        url: '/api/member/signout',
        success: function (result) {
            alert('로그아웃 되었습니다.');
            closeLayer();
            //$('.header-btn-member').css('display', 'none');
            location.href = '/';
        }
    });
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

function initTab() {
    $.ajax({
        url: '/api/member/' + id,
        success: function (result) {
            userInfo(result);
        }
    });
}

module.exports = {
    initTab: initTab
};