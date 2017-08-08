require('bootstrap');
require('../less/main.less');

var common = require('./common');

var country = require('./model/country');

function initUserInfo() {
    $('.bottom-user').empty();

    var template = require('../template/main/userInfo.hbs');

    for (var i = 0; i < 5; i++) {
        $.ajax({
            url: '/api/user/' + (i + 1),
            success: function (result) {
                var html = template(result);
                $('.bottom-user').append(html);

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

        $.ajax({
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
initUserInfo();

$('.bottom-prev').on('click', function () {
    console.log('나눌렀니?');
    $('.bottom-user').css("transform","translate3d(-130px, 0px, 0px)");
});

$('.bottom-next').on('click', function () {
    console.log('나눌렀니?');
});

$('.country > li').on('click', function () {
    //location.href = './search.html?q=' + '스페인';
    location.href = './search.html' ;
});
