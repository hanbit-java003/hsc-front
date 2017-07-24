require('bootstrap');
require('../less/main.less');

var common = require('./common');

var country = require('./model/country');

$.ajax({
   url: '/api/main/france',
   success: function (result) {
       initContents(result);
   }
});

$.ajax({
    url: '/api/users/',
    success: function (result) {
        initUserInfo(result);
    }
});

function initContents(contents) {
    $('.main-contents-wrapper').empty();

    var template = require('../template/main/contents.hbs');

    for (var i = 0; i < 3; i++) {
        var html = template(contents);

        $('.main-contents-wrapper').append(html);
    }
}

function initUserInfo(users) {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i = 0; i < 5; i++) {
        var html = template(users[i]);

        $('.bottom-user').append(html);
    }

    $('.user-info').on('click', function () {
        var userId = $(this).attr('user-name');
        location.href = './with.html?id=' + userId;
    });
}

function initCountry(country) {
    $('.main-mid-country').empty();

    var template = require('../template/main/country.hbs');

    for (var i = 0; i < country.length; i++) {
        var html = template(country[i]);

        $('.main-mid-country').append(html);
    }
}

initCountry(country);

$('.bottom-prev').on('click', function () {
    console.log('나눌렀니?');
    //$('.bottom-user').css("transform","translate3d(-130px, 0px, 0px)");
});

$('.bottom-next').on('click', function () {
    console.log('나눌렀니?');
});

$('.country > li').on('click', function () {
    //location.href = './search.html?q=' + '스페인';
    location.href = './search.html' ;
});
