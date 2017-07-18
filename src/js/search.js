require('bootstrap');
require('../less/search.less');

var common = require('./common');

var contents = require('./model/search-page');

function initSeachContents(contents) {
    $('.search-contents-tap').empty();

    var template = require('../template/search/search-contents.hbs');

    for (var i=0; i< contents.length; i++) {
        var html = template(contents[i]);

        $('.search-contents-tap').append(html);
    }
}

initSeachContents(contents);
