require('bootstrap');
require('../less/login.less');

var common = require('./common');

$('.find-pwd-btn').on('click', function () {
    location.href = './password.html';
});

$('.sign-up-btn').on('click', function () {
    location.href = './signup.html';
});

$('.signin-btn').on('click', function () {
    signIn();
});

function signIn() {
    var id = $('#signin-id').val().trim();
    var email = $('#signin-email').val().trim();
    var pwd = $('#signin-pwd').val().trim();

    if (!email) {
        alert('이메일을 입력하세요.');
        $('#signin-email').focus();
        return;
    }
    else if (!pwd) {
        alert('비밀번호를 입력하세요.');
        $('#signin-pwd').focus();
        return;
    }

    common.ajax({
        url: '/api/member/signin',
        method: 'POST',
        data: {
            id: id,
            email: email,
            pwd: pwd
        },
        success: function (result) {
            alert(result.id + " 님 반갑습니다.");

            //$('.header-btn-member').css('display', 'inline-block');

            location.href = './user.html?id=' + result.id;
        }
    });
}