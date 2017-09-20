require('bootstrap');
require('../less/main.less');

var common = require('./common');
var country = require('./model/country');

common.ajax({
    url: '/api/member/members',
    success: function (result) {
        initUsers(result);
    }
});

function initUsers(members) {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i = 0; i < members.length; i++) {
        var html = template(members[i]);
        $('.bottom-user').append(html);
    }
}

function initCountry(country) {
    $('.main-mid-country').empty();

    var template = require('../template/main/country.hbs');

    for (var i = 0; i < country.length; i++) {
        var html = template(country[i]);

        $('.main-mid-country').append(html);
    }
}

function initContents() {
    $('.main-contents-wrapper').empty();

    var template = require('../template/main/contents.hbs');

    var areas = ['jeju', 'hungary', 'saipan'];

    for (var i = 0; i < areas.length; i++) {
        var sectionRow = 'section-row-' + areas[i];
        $('.main-contents-wrapper').append('<div class="' + sectionRow + '"></div>');

        common.ajax({
            url: '/api/country/' + areas[i],
            success: function (result) {
                var html = template(result);
                $('.section-row-' + result.id).html(html);
            }
        });
    }
}

initCountry(country);
initContents();

$('.country > li').on('click', function () {
    var text = $(this).text();

    location.href = './search.html?' + text;
});