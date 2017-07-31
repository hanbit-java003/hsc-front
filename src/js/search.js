require('bootstrap');
require('../less/search.less');

var common = require('./common');

$.ajax({
    url: '/api/main/france',
    success: function(result) {
        initSeachContents(result.submenu);
        console.log(result.submenu);
    }
});

function initSeachContents(contents) {
    $('.search-contents-tap').empty();

    var template = require('../template/search/search-contents.hbs');

    var url = location.href;
    var url2 = url.slice(url.indexOf('?') + 1);

    for (var i=0; i<contents.length; i++) {
        var html = template(contents[i]);
        $('.search-contents-tap').append(html);
    }

    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle();

    $('.search-input').val(decodeURI(url2));
}
