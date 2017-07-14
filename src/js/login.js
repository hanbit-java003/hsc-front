require('bootstrap');
require('../less/login.less');

var common = require('./common');

$('.find-pwd-btn').on('click', function () {
    location.href = './password.html';
});

$('.sign-up-btn').on('click', function () {
    location.href = './signup.html';
});