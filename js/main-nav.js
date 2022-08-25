$(document).ready(function() {

    const btnToggle = $('.main-nav__toggle');
    const mainNavList = $('.main-nav__list');
    const pageHeader = $('.page-header');

    btnToggle.click(function() {

        btnToggle.toggleClass('main-nav__toggle--open');
        mainNavList.toggleClass('main-nav__list--open');
        pageHeader.toggleClass('page-header--open');
    })

    const linkCurrent = $('.main-nav__link');

    linkCurrent.click(function() {

        linkCurrent.removeClass('main-nav__link--current');
        $(this).addClass('main-nav__link--current');
    })
})