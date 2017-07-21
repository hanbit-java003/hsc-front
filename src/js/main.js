require('bootstrap');
require('../less/main.less');

var common = require('./common');

var country = require('./model/country');
var users = require('./model/userInfo');

function initCountry(country) {
    $('.main-mid-country').empty();

    var template = require('../template/main/country.hbs');

    for (var i = 0; i < country.length; i++) {
        var html = template(country[i]);

        $('.main-mid-country').append(html);
    }
}

$.ajax({
   url: '/api/main/contents',
   success: function (result) {
       initContents(result);
   }
});

function initContents(contents) {
    $('.main-contents-wrapper').empty();

    var template = require('../template/main/contents.hbs');

    for (var i = 0; i < contents.length; i++) {
        var html = template(contents[i]);

        $('.main-contents-wrapper').append(html);
    }
}

function initUserInfo(users) {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i = 0; i < users.length; i++) {
        var html = template(users[i]);

        $('.bottom-user').append(html);


        $('.user-info').on('click', function () {
            var userId = $(this).attr('user-name');
            location.href = './with.html?id=' + userId;
        });
    }
}

initCountry(country);
//initContents(contents);
initUserInfo(users);

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
})






















