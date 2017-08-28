require('bootstrap');
require('../less/signup.less');

var common = require('./common');

$('.signup-option > div:last-child').on('click', function () {
    location.href = './login.html';
});

$('#under-age').on('click', function () {
    alert('14세 미만은 서비스를 이용할 수 없습니다.');
});


$('#king').on('click', function () {
    checkAll();
});

function checkAll() {
    var king = document.getElementById('king');
    var ch = document.getElementsByName('ch');

    for (var i = 0; i < ch.length; i++) {
        ch[i].checked = king.checked;
    }

}