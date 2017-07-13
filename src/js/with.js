require('bootstrap');
require('../less/with.less');

var common = require('./common');

var users = require('./model/users/user01');
var diarys = require('./model/users/diary');

function getUsers(users) {
    $('.with-user-profile').empty();

    var template = require('../template/user-profile.hbs');
    var html = template(users);

    $('.with-user-profile').append(html);
}

function getDiarys(diarys) {
    $('.with-user-contents').empty();

    var template = require('../template/user-contents.hbs');

    for (var i=0; i<diarys.length; i++) {
        var html = template(diarys[i]);

        $('.with-user-contents').append(html);
    }

}

getUsers(users);
getDiarys(diarys);