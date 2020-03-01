/*global $, alert, console*/

$(function () {
    'use strict';

    var myHeader = $('.header');
    var mySlider = $('.bxslider');

    // Adjast header and height
    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
    });

    // links Add Active class
    $('.links li').click(function () {

        $(this).parent.addClass('active').siblings().removeClass('active');
    });


    // Trigger The  BX slider
    $('.slider').bxSlider({
        pager: false , auto: true, pause: 3000
    });

    // Adjust Bx slider list item Center
    mySlider.each(function () {
        $(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    // Smooth Scroll

    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 18
        }, 1000);
    });

    // Our auto slider code
    
    // تبع الشافل
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
    });

    // nice Scroll

    $(function() {  
        $("body").niceScroll({
            cursorcolor: "#1abc9c",
        });
    });

});

var mixer = mixitup('#container');
var mixer = mixitup(container, {
    animation: {
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)', duration: 99200

    }
    
});