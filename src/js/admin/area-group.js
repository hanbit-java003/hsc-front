require('bootstrap');
require('../../less/admin/area-group.less');

var common = require('./common');

$.ajax({
    url: '/api/admin/group',
    success: function (result) {
        initAreas(result);
    }
});

function initAreas(area) {
    $('.ha-area-groups tbody').empty();

    var template = require('../../template/admin/ha-area.hbs');

    for (var i = 0; i < area.length; i++) {
        var html = template(area[i]);
        $('.ha-area-groups tbody').append(html);
    }
    addAreasEvent(area);
}

function addAreasEvent(area) {
    addBtnEvent(area);

    $('.ha-area-groups tbody tr').off('dblclick');
    $('.ha-area-groups tbody tr').on('dblclick', function () {
        var row = $(this);
        var index = row.index();
        var template = require('../../template/admin/ha-area-edit.hbs');
        var html = template(area[index]);

        row.replaceWith(html);

        addBtnEvent(area);
    });
}

function addBtnEvent(area) {
    $('.ha-area-groups .ha-btn-row').off('click');
    $('.ha-area-groups .ha-btn-row').on('click', function () {
        var row = $(this).parents('tr');
        var rowIndex = row.index();
        var info = area[rowIndex];

        if ($(this).hasClass('ha-apply-row')) {
            info.id = row.find('.ha-area-id').val().trim();
            info.name = row.find('.ha-area-name').val().trim();
            info.mainTitle = row.find('.ha-area-main-title').val().trim();
            info.subTitle = row.find('.ha-area-sub-title').val().trim();
        }
        else if ($(this).hasClass('ha-cancel-row')) {

        }

        var template = require('../../template/admin/ha-area.hbs');
        var html = template(area[rowIndex]);
        row.replaceWith(html);

        addAreasEvent();
    });
}