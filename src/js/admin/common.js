require('bootstrap');

$('.ha-logo').on('click', function() {
    location.href = './';
});

$('.ha-menu').on('click', function () {
    var subMenu = $(this).parent('.ha-menu-group').find('.ha-sub-menu');

    subMenu.slideToggle();
});

$('.ha-sub-menu > li').on('click', function() {
    var link = $(this).attr('link');

    if (!link) {
        return;
    }

    location.href = link + '.html';
});

$('.ha-area-add').on('click', function() {
    alert("나눌렀니?");
});