$(document).ready(onClickCreator());

function onClickCreator() {
    $('.tabs-container .tabs li').attr('onClick', 'tabActivator(this)');
    $('.tabs-container .popup-placeholder').attr('onClick', 'popupActivator(this)');
    $('.tabs-container .popup').attr('onClick', 'popupDeActivator(this)');
    $('.accordion-container .accordion-item .item-title').attr('onClick', 'accordionActivator(this)');
    $('.main-menu li').attr('onClick', 'moveToSection(this)');
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
    $('body').css('disabled');
}

function mainMenuToggle() {

    if ($('#main-menu').attr('data-toggle') == 'hidden') {
        $('#main-menu').css('visibility', 'visible');
        $('#main-menu').attr('data-toggle', 'visible');
    } else {
        $('#main-menu').css('visibility', 'hidden');
        $('#main-menu').attr('data-toggle', 'hidden');
    }
}

function accordionActivator(caller) {
    $(caller).parent().siblings('.active').removeClass('active');
    $(caller).parent().addClass('active');
}

function moveToSection() {
    $('#main-menu').css('visibility', 'hidden');
    $('#main-menu').attr('data-toggle', 'hidden');
    $('body').animate('scrollTop', $(caller).href.offsetTop);
}

function modalShow() {
    $('.modal-form').addClass('active');
    $('.body-disable').css('display', 'block');
}

function modalHide() {
    $('.modal-form').removeClass('active');
    $('.body-disable').css('display', 'none');
}