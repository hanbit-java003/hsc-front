require('bootstrap');
require('../less/with.less');

var common = require('./common');
var main = require('./main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var user = params.get('no');

$.ajax({
    url: 'api/user/' + user,
    success: function (result) {
        getUsers(result);
    }
});

function getUsers(model) {
    $('.with-user-info').empty();

    model.diary = model.submenu.length;
    model.country = model.userSub.length;

    var template = require('../template/user-page.hbs');
    var html = template(model);

    $('.with-user-info').append(html);
}
