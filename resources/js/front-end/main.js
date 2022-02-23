!(function($) {
    "use strict";
    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu:first').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><div></div><div></div><div></div><span>メニュー</span></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            // $(this).parent().find('ul').toggle();
            $(this).next().toggle();
            // $(this).parent().toggleClass('active');
            $(this).parents('li.drop-down').toggleClass('active');
        });

        $(document).click(function(e) {
            // var container = $(".mobile-nav, .mobile-nav-toggle");
            // if (!container.is(e.target) && container.has(e.target).length === 0) {
            //     if ($('body').hasClass('mobile-nav-active')) {
            //         $('body').removeClass('mobile-nav-active');
            //         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            //         $('.mobile-nav-overly').fadeOut();
            //     }
            // }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }
    $('.sidebar-toggle').click(function() {
        $('.sidebar').show();
    });
    $('.sidebar-close').click(function() {
        $('.sidebar').hide();
    });

    if ($('.regions').length > 0) {
        $('.regions a').click(function() {
            $('.regions a').each(function(index, element) {
                $(element).removeClass('active');
            });
            $(this).find('input[name="region"]').prop("checked", true);
            $(this).addClass('active');
        });
    }
})(jQuery);