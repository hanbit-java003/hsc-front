require('bootstrap');
require('../less/with.less');

var common = require('./common');
var main = require('./main')

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);

var userName = params.get('id');

try {
    var model = require('./model/users/' + userName);
}
catch (e) {
    var model = require('./model/users/user01');
}

function getUsers(model) {
    $('.with-user-info').empty();

    var template = require('../template/user-page.hbs');
    var html;

    for (var i=0; i<model.contents.length; i++) {
        html = template(model);
    }
    $('.with-user-info').append(html);
}

getUsers(model);