require('bootstrap');
require('../../less/admin/area-group.less')

var common = require('./common');


$.ajax({
    url: 'http://localhost:84/api/main/france',
    success: function(result) {
        initAreas(result);
    }
});

function initAreas(area) {
    var template = require('../../template/admin/ha-area.hbs');
    var html = template(area);

    $('.ha-area-groups > tbody').html(html);
}