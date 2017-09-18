require('bootstrap');
require('../less/setting.less');

var common = require('./common');

common.ajax({
    url: '/api/member/get',
    succcess: function (result) {
        if (!result.signedIn) {
            alert('로그인이 필요한 페이지입니다.');
            location.href = '/';
        }

        getMemberDetail();
    }
});

function getMemberDetail() {
    common.ajax({
        url: '/api/member/detail',
        success: function (result) {
            init(result);
        }
    });
}

function init(member) {
    console.log(member);

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
}

