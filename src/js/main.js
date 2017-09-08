require('bootstrap');
require('../less/main.less');

var common = require('./common');

var country = require('./model/country');

common.ajax({
    url: '/api/users',
    success: function () {
        initUsers();
    }
});

function initUsers() {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i = 0; i < 5; i++) {
        var users = 'users-row-' + (i + 1);
        $('.bottom-user').append('<div class="bottom-user-row ' + users + '"></div>');

        common.ajax({
            url: '/api/user/' + (i + 1),
            success: function (result) {
                var html = template(result);
                $('.users-row-' + result.userNo).html(html);

                $('.user-info').on('click', function () {
                    var userId = $(this).attr('user-name');
                    location.href = './with.html?no=' + userId;
                });
            }
        });
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

    var areas = ['france', 'hungary', 'jeju'];

    for (var i = 0; i < areas.length; i++) {
        var sectionRow = 'section-row-' + areas[i];
        $('.main-contents-wrapper').append('<div class="' + sectionRow + '"></div>');

        common.ajax({
            url: '/api/main/' + areas[i],
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