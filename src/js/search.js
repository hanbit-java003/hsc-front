require('bootstrap');
require('../less/search.less');

var common = require('./common');

$.ajax({
    url: '/api/main/france',
    success: function(result) {
        initSearchContents(result.submenu);
        console.log(result.submenu);
    }
});

$('.search-tab-btns > div').on('click', function() {
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

    for (var i=0; i<contents.length; i++) {
        var html = template(contents[i]);
        $('.search-contents-tab').append(html);
    }

    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle();

    $('.search-input').val(decodeURI(url2));
}

function initSearchUsers() {
    $('.search-users-tab').empty();

    var template = require('../template/search/search-users.hbs');
    var html = template();

    $('.search-users-tab').append(html);
}

initSearchUsers();
