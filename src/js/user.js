require('bootstrap');
require('../less/user.less');

var common = require('./common');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var id = params.get('id');

common.ajax({
    url: 'api/member/' + id,
    success: function (result) {
        getUsers(result);
    }
});

function getUsers(model) {
    $('.ha-user-info').empty();

    //model.diary = model.submenu.length;
    //model.country = model.userSub.length;

    var template = require('../template/user-page.hbs');
    var html = template(model);

    $('.ha-user-info').append(html);
}