require('bootstrap');
require('../../less/admin/area-group.less');

var common = require('./common');


$.ajax({
    url: '/api/admin/group',
    success: function(result) {
        initAreas(result);
    }
});

function initAreas(area) {
    $('.ha-area-groups tbody').empty();

    var template = require('../../template/admin/ha-area.hbs');

    for (var i=0; i<area.length; i++) {
        var html = template(area);

        $('.ha-area-groups tbody').html(html);
    }
}
