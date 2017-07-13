require('bootstrap');
require('../less/main.less');

var common = require('./common');

var country = require('./model/country');
var contents = require('./model/contents');
var users = require('./model/userInfo');

function initCountry(country) {
    $('.main-mid-country').empty();

    var template = require('../template/main/country.hbs');

    for (var i=0; i<country.length; i++) {
        var html = template(country[i]);

        $('.main-mid-country').append(html);
    }
}

function initContents(contents) {
    $('.main-section-review').empty();

    var template = require('../template/main/contents.hbs');

    for (var i=0; i<contents.length; i++) {
        var html = template(contents[i]);

        $('.main-section-review').append(html);
    }
}

function initUserInfo(users) {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i=0; i<users.length; i++) {
        var html = template(users[i]);

        $('.bottom-user').append(html);


        $('.user-info').on('click', function () {
            var userId = $(this).attr('user-name');
            location.href = './with.html?id=' + userId;
        });
    }
}

initCountry(country);
initContents(contents);
initUserInfo(users);
