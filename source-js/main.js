$(document).ready(onClickCreator());

function onClickCreator() {
    $('.tabs-container .tabs li').attr('onClick', 'tabActivator(this)');
    $('.tabs-container .popup-placeholder').attr('onClick', 'popupActivator(this)');
    $('.tabs-container .popup').attr('onClick', 'popupDeActivator(this)');
}

function tabActivator(caller) {
    var parent = $(caller).parent().parent();
    var active = parent.attr('data-active');
    var currentActive = $(caller).attr('data-index');

    $(caller).siblings('li.active').removeClass('active');
    $(parent).attr('data-active', currentActive);
    $(caller).addClass('active');
    $(parent).children('ul.content').children('li.active').removeClass('active');
    $(parent).children('ul.content').children('li').eq(currentActive).addClass('active');
}

function popupActivator(caller) {
    $(caller).parent().addClass('active');
    $('.body-disable').css('display', 'block');
}

function popupDeActivator(caller) {
    $(caller).parent().parent().removeClass('active');
    $('.body-disable').css('display', 'none');
}