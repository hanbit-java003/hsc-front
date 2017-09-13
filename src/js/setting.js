require('bootstrap');
require('../less/setting.less');

var common = require('./common');

$('#setting-img-select').on('click', function () {
    $('#setting-img-input').click();
});

$('#setting-img-input').on('change', function () {
    if (this.files.length === 0) {
        return;
    }

    var file = this.files[0];
    var fileReader = new FileReader();

    fileReader.addEventListener('load', function (event) {
        var preview = event.target.result;

        $('.setting-img').css('background-image', 'url(' + preview + ')');
    });

    fileReader.readAsDataURL(file);
});