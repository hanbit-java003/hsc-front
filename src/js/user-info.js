require('bootstrap');
require('../less/user-info.less');

var common = require('./common');
var main = require('./main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var user = params.get('no');

common.ajax({
    url: 'api/user/' + user,
    success: function (result) {
        getUsers(result);
    }
});

function getUsers(model) {
    $('.ha-user-info').empty();

    model.diary = model.submenu.length;
    model.country = model.userSub.length;

    var template = require('../template/user-page.hbs');
    var html = template(model);

    $('.ha-user-info').append(html);
}