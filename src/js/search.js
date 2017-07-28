require('bootstrap');
require('../less/search.less');

var common = require('./common');

var contents = require('./model/search-page');

function initSeachContents(contents) {
    $('.search-contents-tap').empty();

    var template = require('../template/search/search-contents.hbs');

    var url = location.href;

    var url2 = url.slice(url.indexOf('?') + 1);

    for (var i=0; i< contents.length; i++) {
        var html = template(contents[i]);

        $('.search-contents-tap').append(html);
    }
    $('.header-search-icon').toggle();
    $('.header-search-bar').toggle();

    $('.search-input').val(decodeURI(url2));

}

initSeachContents(contents);
