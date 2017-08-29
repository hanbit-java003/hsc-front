require('bootstrap');
require('../less/signup.less');

var common = require('./common');

$('.signup-option > div:last-child').on('click', function () {
    location.href = './login.html';
});

$('#under-age').on('click', function () {
    alert('14세 미만은 서비스를 이용할 수 없습니다.');
    $('#under-age').prop('checked', false);
    return;
});


$('#king').on('click', function () {
    if ($('#king').prop('checked')) {
        $("input[name=ch]").prop('checked', true);
    }
    else {
        $("input[name=ch]").prop('checked', false);
    }
});

function signUp() {
    var id = $('#signup-id').val().trim();
    var email = $('#signup-email').val().trim();
    var pwd = $('#signup-pwd').val().trim();
    var pwdConfirm = $('#singup-pwd-confirm').val().trim();
    var agreeOverAge = $('#over-age').prop('checked');
    var agreeAge = $('#sign-up-age').prop('checked');
    var agreePersonal = $('#sign-up-personal').prop('checked');
    var agreeLocation = $('#sign-up-location').prop('checked');

    if (!agreeOverAge) {
        alert('14세 이상만 가입 가능합니다.');
        $('#over-age').focus();
        return;
    }
    else if (!id) {
        alert('아이디를 입력하세요.');
        $('#signup-id').focus();
        return;
    }
    else if (!email) {
        alert('이메일을 입력하세요.');
        $('#signup-email').focus();
        return;
    }
    else if (!pwd) {
        alert('비밀번호를 입력하세요.');
        $('#signup-pwd').focus();
        return;
    }
    else if (pwd !== pwdConfirm) {
        alert('비밀번호를 확인하세요.');
        $('#singup-pwd-confirm').focus();
        return;
    }
    else if (!agreeAge || !agreePersonal || !agreeLocation) {
        alert('이용약관에 동의하세요.');
        $('#sign-up-age').focus();
        return;
    }

    $.ajax({
        url: '/api/member/signup',
        method: 'POST',
        data: {
            id: id,
            email: email,
            pwd: pwd
        },
        success: function (result) {
            alert('가입 되었습니다.');
            location.href = './login.html';
        },
        error: function (jqXHR) {
            alert(jqXHR.responseJSON.message);
        }
    });
}

$('.signup-btn').on('click', function () {
    signUp();
});