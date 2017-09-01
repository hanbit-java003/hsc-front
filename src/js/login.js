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
    var email = $('#signin-email').val().trim();
    var pwd = $('#signin-pwd').val().trim();
    var id = $('#signin-id').val().trim();

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

    $.ajax({
        url: '/api/member/signin',
        method: 'POST',
        data: {
            email: email,
            pwd: pwd,
            id: id
        },
        success: function (result) {
            alert(result.id + " 님 반갑습니다.");
            var userId = result.id;
            $('.header-btn-member').css('display', 'inline-block');
            // 페이지 이동해도 버튼 살아있게 하려면 각 페이지마다 물어봐야함..
            location.href = './with.html?no=' + userId;
        },
        error: function (jqXHR) {
            alert(jqXHR.responseJSON.message);
        }
    })
}