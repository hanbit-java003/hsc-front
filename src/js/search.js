require('bootstrap');
require('../less/search.less');

var common = require('./common');

$.ajax({
    url: '/api/member/members',
    success: function (result) {
        //initSearchContents(result);
    }
});

$.ajax({
    url: '/api/member/members',
    success: function (result) {
        //initSearchUsers(result);
    }
});

function searchInit() {
    // 검색 버튼
    $('.search-toggle').on('click', function () {
        $('.header-search-icon').toggle();
        $('.header-search-bar').toggle('100');
    });

    $('.search-input').on('keyup', function (event) {
        if (event.keyCode === 13) {
            var text = $('.search-input').val();
            alert(text + ' 를 검색하시려구??')
            //location.href = './search.html?' + text;
        }
    });
}

$('.search-tab-btns > div').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }

    var tabBtn = $(this).parent('.search-tab-btns');
    var tabContents = $(this).parents('.search-tabs').find('.search-tab');

    tabBtn.find('div').removeClass('active');
    tabContents.find('li').removeClass('active');

    var tabId = $(this).attr('tab-id');

    tabBtn.find('div[tab-id=' + tabId + ']').addClass('active');
    tabContents.find('li[tab-id=' + tabId + ']').addClass('active');
});

function initSearchContents(contents) {
    $('.search-contents-tab').empty();

    var template = require('../template/search/search-contents.hbs');

    var url = location.href;
    var url2 = url.slice(url.indexOf('?') + 1);

    for (var i = 0; i < contents.length; i++) {
        var html = template(contents[i]);
        $('.search-contents-tab').append(html);
    }

    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle();

    $('.search-input').val(decodeURI(url2));
}

function initSearchUsers(users) {
    $('.search-users-tab').empty();

    var template = require('../template/search/search-users.hbs');

    for (var i = 0; i < users.length; i++) {
        var html = template(users[i]);
        $('.search-users-tab').append(html);
    }
}

module.exports = {
    searchInit: searchInit
};
