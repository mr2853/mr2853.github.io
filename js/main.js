
setTimeout(function() {
    
    (function ($) {
        "use strict";
    
        // Dropdown on mouse hover
        $(document).ready(function () {
            function toggleNavbarMethod() {
                if (window.innerWidth > 992) {
                    $('.navbar .dropdown').on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }).on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
                } else {
                    $('.navbar .dropdown').off('mouseover').off('mouseout');
                }
            }
            toggleNavbarMethod();
            window.addEventListener('resize', toggleNavbarMethod);
        });
    
        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 2500,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
        });
    
    })(jQuery);

  }, 2500);
