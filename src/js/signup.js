require('bootstrap');
require('../less/signup.less');

var common = require('./common');

$('.signup-option > div:last-child').on('click', function () {
   location.href = './login.html';
});
