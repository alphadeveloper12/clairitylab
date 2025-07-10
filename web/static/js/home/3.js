;(function ($) {

    "use strict";

    var pxl_scroll_top;
    var pxl_window_height;
    var pxl_window_width;
    var pxl_scroll_status = '';
    var pxl_last_scroll_top = 0;
    $(window).on('load', function () {
        //$(".pxl-loader").fadeOut("slow");
        //$(".pxl-loader").addClass("is-loaded");
        aizan_loader();
        $('.pxl-element-slider').css('opacity', '1');
        $('.pxl-element-slider').css('transition-delay', '300ms');
        $('.pxl-gallery-scroll').parents('body').addClass('body-overflow').addClass('body-visible-sm');
        pxl_window_width = $(window).width();
        pxl_window_height = $(window).height();
        aizan_header_sticky();
        aizan_header_mobile();
        aizan_scroll_to_top();
        aizan_footer_fixed();
        aizan_shop_view_layout();
        aizan_shop_quantity();
        aizan_percentage_donate_form();
        aizan_submenu_responsive();
        aizan_hide_comment();
        aizan_bgr_parallax();
        aizan_webgl_effects();
        aizan_page_popup();

    });

    $(window).on('scroll', function () {
        pxl_scroll_top = $(window).scrollTop();
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        if (pxl_scroll_top < pxl_last_scroll_top) {
            pxl_scroll_status = 'up';
        } else {
            pxl_scroll_status = 'down';
        }
        pxl_last_scroll_top = pxl_scroll_top;
        aizan_header_sticky();
        aizan_scroll_to_top();
        aizan_footer_fixed();

    });

    $(window).on('resize', function () {
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        aizan_submenu_responsive();
        aizan_header_mobile();
    });

    $(document).ready(function () {
        aizan_button_parallax();
        aizan_firefly();
        $('.pxl-logo-nav').parents('#pxl-header-elementor').addClass('pxl-header-rmboxshadow');

        /* Start Menu Mobile */
        $('.pxl-header-menu li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>');
        $('.pxl-menu-toggle').on('click', function () {
            if( $(this).hasClass('active')){
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
            }else{
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                $(this).toggleClass('active');
                $(this).parent().find('> .sub-menu').toggleClass('active');
                $(this).parent().find('> .sub-menu').slideToggle();
            }
        });


        $("#pxl-nav-mobile").on('click', function () {
            $(this).toggleClass('active');
            $('body').toggleClass('body-overflow');
            $('.pxl-header-menu').toggleClass('active');
        });

        $(".pxl-menu-close, .pxl-header-menu-backdrop, #pxl-header-mobile .pxl-menu-primary a.is-one-page").on('click', function () {
            $(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active');
            $('#pxl-nav-mobile').removeClass('active');
            $('body').toggleClass('body-overflow');
        });
        /* End Menu Mobile */

        /* Elementor Header */
        $('.pxl-type-header-clip > .elementor-container').append('<div class="pxl-header-shape"><span></span></div>');
        $('.pxl-text--highlight').append('<svg width="205" height="13" viewBox="0 0 205 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.791034 5.63393C46.7176 -0.227732 112.534 -0.402129 204.435 10.8117" stroke="#F3D465" stroke-width="3"/></svg>');

        /* Scroll To Top */
        $('.pxl-scroll-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        /* Animate Time Delay */
        $('.pxl-grid-masonry').each(function () {
            var eltime = 40;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl-grid-item > .wow').each(function (index, obj) {
                $(this).css('animation-delay', eltime + 'ms');
                if (_elt === index) {
                    eltime = 40;
                    _elt = _elt + elt_inner;
                } else {
                    eltime = eltime + 40;
                }
            });
        });

        $('.pxl-item--text').each(function () {
            var pxl_time = 0;
            var pxl_item_inner = $(this).children().length;
            var _elt = pxl_item_inner - 1;
            $(this).find('> .pxl-text--slide > .wow').each(function (index, obj) {
                $(this).css('transition-delay', pxl_time + 'ms');
                if (_elt === index) {
                    pxl_time = 0;
                    _elt = _elt + pxl_item_inner;
                } else {
                    pxl_time = pxl_time + 80;
                }
            });
        });
        /* Arrow Custom */
        $('.pxl-swiper-arrow-custom').parents('.pxl-swiper-sliders').addClass('pxl--hide-arrow');
        $('.pxl-navigation-carousel').parents('.elementor-section').addClass('pxl--hide-arrow');
        setTimeout(function() {
            $('.pxl-swiper-arrow-custom.pxl-swiper-arrow-next').on('click', function () {
                $(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-next').trigger('click');
            });
            $('.pxl-swiper-arrow-custom.pxl-swiper-arrow-prev').on('click', function () {
                $(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-prev').trigger('click');
            });
        }, 300);



        setTimeout(function() {
            $('.pxl-navigation-carousel .pxl-navigation-arrow-prev').on('click', function () {
                $(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-prev').trigger('click');
            });
            $('.pxl-navigation-carousel .pxl-navigation-arrow-next').on('click', function () {
                $(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-next').trigger('click');
            });
        }, 300);
        /* Lightbox Popup */
        $('.btn-video, .pxl-video-popup, .pxl--link-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.images-light-box').each(function () {
            $(this).magnificPopup({
                delegate: 'a.light-box',
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-fade',
            });
        });

        /* Comment Reply */
        //$('.comment-reply a').append( '<i class="caseicon-angle-arrow-right"></i>' );

        /* Parallax */
        if($('#pxl-page-title-default').hasClass('pxl--parallax')) {
            $(this).stellar();
        }

        /* Animate Time */
        $('.btn-nina').each(function () {
            var eltime = 0.045;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
                $(this).css('transition-delay', eltime + 's');
                eltime = eltime + 0.045;
            });
        });


        /* Hidden Panel */
        $(".pxl-hidden-panel-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-hidden-panel-popup').addClass('active');
        });
        $("#pxl-hidden-panel-popup .pxl-item--overlay, #pxl-hidden-panel-popup .pxl-item--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-hidden-panel-popup').removeClass('active');
        });

        /* Cart Sidebar Popup */
        $(".pxl-cart-sidebar-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-cart-sidebar').addClass('active');
        });
        $("#pxl-cart-sidebar .pxl-item--overlay, #pxl-cart-sidebar .pxl-item--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-cart-sidebar').removeClass('active');
        });

        /* Popup */
        $(".pxl-popup-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-popup-elementor').addClass('active');
            $('#pxl-popup-elementor').removeClass('deactivation');
        });
        $("#pxl-popup-elementor .pxl-item--overlay, #pxl-popup-elementor .pxl-item--close, .pxl-menu-primary a.is-one-page").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-popup-elementor').removeClass('active');
            $('#pxl-popup-elementor').addClass('deactivation');
        });

        /* Hover Active Item */
        $('.pxl--widget-hover').each(function () {
            $(this).hover(function () {
                $(this).parents('.elementor-row').find('.pxl--widget-hover').removeClass('pxl--item-active');
                $(this).parents('.elementor-container').find('.pxl--widget-hover').removeClass('pxl--item-active');
                $(this).addClass('pxl--item-active');
            });
        });

        /* Hover Button */
        $('.btn-plus-text').hover(function () {
            $(this).find('span').toggle(300);
        });

        /* Nav Logo */
        $(".pxl-nav-button").on('click', function () {
            $('.pxl-nav-button').toggleClass('active');
            $('.pxl-nav-button').parent().find('.pxl-nav-wrap').toggle(400);
        });

        /* Button Mask */
        $('.pxl-btn-effect4').append('<span class="pxl-btn-mask"></span>');

        /* Start Icon Bounce */
        var boxEls = $('.el-bounce, .pxl-image-effect1');
        $.each(boxEls, function(boxIndex, boxEl) {
            loopToggleClass(boxEl, 'bounce-active');
        });

        function loopToggleClass(el, toggleClass) {
            el = $(el);
            let counter = 0;
            if (el.hasClass(toggleClass)) {
                waitFor(function () {
                    counter++;
                    return counter == 2;
                }, function () {
                    counter = 0;
                    el.removeClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Deactivate', 1000);
            } else {
                waitFor(function () {
                    counter++;
                    return counter == 3;
                }, function () {
                    counter = 0;
                    el.addClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Activate', 1000);
            }
        }

        function waitFor(condition, callback, message, time) {
            if (message == null || message == '' || typeof message == 'undefined') {
                message = 'Timeout';
            }
            if (time == null || time == '' || typeof time == 'undefined') {
                time = 100;
            }
            var cond = condition();
            if (cond) {
                callback();
            } else {
                setTimeout(function() {
                    waitFor(condition, callback, message, time);
                }, time);
            }
        }
        /* End Icon Bounce */

        /* Image Effect */
        if($('.pxl-image-tilt').length){
            $('.pxl-image-tilt').parents('.elementor-top-section').addClass('pxl-image-tilt-active');
            $('.pxl-image-tilt').each(function () {
                var pxl_maxtilt = $(this).data('maxtilt'),
                pxl_speedtilt = $(this).data('speedtilt'),
                pxl_perspectivetilt = $(this).data('perspectivetilt');
                VanillaTilt.init(this, {
                    max: pxl_maxtilt,
                    speed: pxl_speedtilt,
                    perspective: pxl_perspectivetilt
                });
            });
        }

        /* Select Theme Style */
        $('.wpcf7-select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;

            $this.addClass('pxl-select-hidden');
            $this.wrap('<div class="pxl-select"></div>');
            $this.after('<div class="pxl-select-higthlight"></div>');

            var $styledSelect = $this.next('div.pxl-select-higthlight');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'pxl-select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.pxl-select-higthlight.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide');
                });
                $(this).toggleClass('active');
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
            });

            $(document).click(function() {
                $styledSelect.removeClass('active');
            });

        });

        /* Nice Select */
        $('.woocommerce-ordering .orderby, #pxl-sidebar-area select, .variations_form.cart .variations select').each(function () {
            $(this).niceSelect();
        });

        /* Item Hover - Description */
        $( ".pxl-content-effect .pxl-item--inner" ).hover(
          function() {
            $( this ).find('.pxl-item--effect').slideToggle(400);
        }, function() {
            $( this ).find('.pxl-item--effect').slideToggle(400);
        }
        );

        /* Search Popup */
        var $search_wrap_init = $("#pxl-search-popup");
        var search_field = $('#pxl-search-popup .search-field');
        var $body = $('body');

        $(".pxl-search-popup-button").on('click', function(e) {
            if (!$search_wrap_init.hasClass('active')) {
                $search_wrap_init.addClass('active');
                setTimeout(function() { search_field.get(0).focus(); }, 500);
            } else if (search_field.val() === '') {
                $search_wrap_init.removeClass('active');
                search_field.get(0).focus();
            }
            e.preventDefault();
            return false;
        });

        $(".pxl-subscribe-popup .pxl-item--overlay, .pxl-subscribe-popup .pxl-item--close").on('click', function (e) {
            $(this).parents('.pxl-subscribe-popup').removeClass('pxl-active');
            e.preventDefault();
            return false;
        });

        $("#pxl-search-popup .pxl-item--overlay, #pxl-search-popup .pxl-item--close").on('click', function (e) {
            $body.addClass('pxl-search-out-anim');
            setTimeout(function () {
                $body.removeClass('pxl-search-out-anim');
            }, 800);
            setTimeout(function () {
                $search_wrap_init.removeClass('active');
            }, 800);
            e.preventDefault();
            return false;
        });


        /* Typewriter */
        if($('.pxl-title--typewriter').length) {
            function typewriterOut(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 );
                    elements.eq(0).removeClass('is-active');
                    typewriterOut(elements.slice(1), callback);
                }
                else {
                    callback();
                }
            }

            function typewriterIn(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 ).slideDown(3000, function(){
                        elements.eq(0).removeClass('is-active');
                        typewriterIn(elements.slice(1), callback);
                    });
                }
                else {
                    callback();
                }
            }

            function typewriterInfinite(){
                typewriterOut($('.pxl-title--typewriter .pxl-item--text'), function(){
                    typewriterIn($('.pxl-title--typewriter .pxl-item--text'), function(){
                        typewriterInfinite();
                    });
                });
            }
            $(function(){
                typewriterInfinite();
            });
        }
        /* End Typewriter */

        /* Section Particles */
        setTimeout(function() {
            $(".pxl-row-particles").each(function() {
                particlesJS($(this).attr('id'), {
                  "particles": {
                    "number": {
                        "value": $(this).data('number'),
                    },
                    "color": {
                        "value": $(this).data('color')
                    },
                    "shape": {
                        "type": "circle",
                    },
                    "size": {
                        "value": $(this).data('size'),
                        "random": $(this).data('size-random'),
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": $(this).data('move-direction'),
                        "random": true,
                        "out_mode": "out",
                    }
                },
                "retina_detect": true
            });
            });
        }, 400);

        /* Get checked input - Mailchimpp */
        $('.mc4wp-form input:checkbox').change(function(){
            if($(this).is(":checked")) {
                $('.mc4wp-form').addClass("pxl-input-checked");
            } else {
                $('.mc4wp-form').removeClass("pxl-input-checked");
            }
        });

        /* Alert */
        $(".pxl-alert .pxl-alert--close").on('click', function () {
            $(this).parent().fadeOut();
        });

        /* Widget remove arrow */
        $('.widget .pxl-count').parent().addClass('pxl-rm-arrow');

        /* Scroll to content */
        $('.pxl-link-to-section .btn').on('click', function(e) {
            var id_scroll = $(this).attr('href');
            var offsetScroll = $('.pxl-header-elementor-sticky').outerHeight();
            e.preventDefault();
            $("html, body").animate({ scrollTop: $(id_scroll).offset().top - offsetScroll }, 600);
        });

        /* Header Remove Index */
        $('.pxl-header--rmindex').parents('#pxl-header-elementor').addClass('pxl-header--rmindex-action');

    });

jQuery(document).ajaxComplete(function(event, xhr, settings){
    aizan_shop_quantity();
});

jQuery( document ).on( 'updated_wc_div', function() {
    aizan_shop_quantity();
} );
 //Shop View Grid/List
 function aizan_shop_view_layout(){

    $(document).on('click','.pxl-view-layout .view-icon a', function(e){
        e.preventDefault();
        if(!$(this).parent('li').hasClass('active')){
            $('.pxl-view-layout .view-icon').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parents('.pxl-content-area').find('ul.products').removeAttr('class').addClass($(this).attr('data-cls'));
        }
    });
}
setTimeout(function(){
    $('.pxl-close, .pxl-close .pxl-icon-close').click(function (e) {
        e.preventDefault();
        $(this).parents('.pxl-widget-cart-wrap').removeClass('open');
        $(this).parents('.pxl-modal').addClass('remove').removeClass('open');
        $(this).parents('#page').find('.site-overlay').removeClass('open');
        $(this).parents('body').removeClass('ov-hidden');
    });
}, 300);

/* Header Sticky */
function aizan_header_sticky() {
    if($('#pxl-header-elementor').hasClass('is-sticky')) {
        if (pxl_scroll_top > 100) {
            $('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed');
            $('#pxl-header-mobile').addClass('pxl-header-mobile-fixed');
        } else {
            $('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed');
            $('#pxl-header-mobile').removeClass('pxl-header-mobile-fixed');
        }

        if (pxl_scroll_status == 'up' && pxl_scroll_top > 100) {
            $('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed');
        } else {
            $('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed');
        }
    }

    $('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky');
}
function aizan_percentage_donate_form() {
    var progress_bar = $('.give-progress-bar');
    for (let i = 0; i < progress_bar.length; i++) {
        var valuenow = progress_bar[i].getAttribute("aria-valuenow");
        $(progress_bar[i]).find('> span').attr('aria-valuenow', Math.round(valuenow));
    }
}
function aizan_bgr_parallax() {
    setTimeout(function(){
        jarallax(document.querySelectorAll('.pxl-section-bg-parallax'), {
            speed: 0.4,
        });
    }, 300);
}
/* Custom WebGL Effects */
function aizan_webgl_effects() {
    class WebglHover {
        constructor(set) {
            this.canvas = set.canvas
            this.webGLCurtain = new Curtains({
                container: this.canvas,
                watchScroll: false,
                pixelRatio: Math.min(1.5, window.devicePixelRatio)
            })
            this.planeElement = set.planeElement
            this.mouse = {
                x: 0,
                y: 0
            }
            this.params = {
                vertexShader: document.getElementById("pxl-imb1-vs").textContent,
                fragmentShader: document.getElementById("pxl-imb1-fs").textContent,
                widthSegments: 40,
                heightSegments: 40,
                uniforms: {
                    time: {
                        name: "uTime",
                        type: "1f",
                        value: 0
                    },
                    mousepos: {
                        name: "uMouse",
                        type: "2f",
                        value: [0, 0]
                    },
                    resolution: {
                        name: "uReso",
                        type: "2f",
                        value: [innerWidth, innerHeight]
                    },
                    progress: {
                        name: "uProgress",
                        type: "1f",
                        value: 0
                    }
                }
            }
            this.initPlane()
        }

        initPlane() {
            this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

            if (this.plane) {
                this.plane.onReady(() => {
                    this.update()
                    this.initEvent()
                })
            }
        }

        update() {
            this.plane.onRender(() => {
                this.plane.uniforms.time.value += 0.01

                this.plane.uniforms.resolution.value = [innerWidth, innerHeight]
            })
        }

        initEvent() {
            this.planeElement.addEventListener("mouseenter", () => {
                gsap.to(this.plane.uniforms.progress, .8, {
                    value: 1
                })
            })

            this.planeElement.addEventListener("mouseout", () => {
                gsap.to(this.plane.uniforms.progress, .8, {
                    value: 0
                })
            })
        }
    }
    $('.pxl-image-box1').each(function() {
        const $this = $(this);
        const item_image_height = $this.find('.image-front').height();
        $this.find('.canvas canvas').css('height', item_image_height + 'px');

        const initialized = $this.data('initialized');
        if (!initialized) {
            $this.data('initialized', true);
            const canvas = $this.find('.item--canvas')[0];
            const planeElement = $this.find('.item--image')[0];
            new WebglHover({
                canvas: canvas,
                planeElement: planeElement
            });
        }
    });

}
function aizan_firefly() {
    if ($('#canvas').length) {
       let c = init("canvas"),
        w = (c.canvas.width = window.innerWidth),
        h = (c.canvas.height = window.innerHeight);

    class firefly{
        constructor(){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.s = Math.random()*2;
            this.ang = Math.random()*2*Math.PI;
            this.v = this.s*this.s/4;
        }
        move(){
            this.x += this.v*Math.cos(this.ang);
            this.y += this.v*Math.sin(this.ang);
            this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
        }
        show(){
            c.beginPath();
            c.arc(this.x,this.y,this.s,0,2*Math.PI);
            c.fillStyle="#fddba3";
            c.fill();
        }
    }

    let f = [];

    function draw() {
        if (f.length < 100) {
            for (let j = 0; j < 10; j++) {
                f.push(new firefly());
            }
        }
        for (let i = 0; i < f.length; i++) {
            f[i].move();
            f[i].show();
            if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
                f.splice(i, 1);
            }
        }
    }

     let mouse = {};
    let last_mouse = {};

    canvas.addEventListener(
        "mousemove",
        function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        },
        false
        );
    function init(elemid) {
        let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
        c.fillStyle = "rgba(30,30,30,1)";
        c.fillRect(0, 0, w, h);
        return c;
    }

    window.requestAnimFrame = (function() {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
              window.setTimeout(callback);
          }
          );
    });

    function loop() {
        window.requestAnimFrame(loop);
        c.clearRect(0, 0, w, h);
        draw();
    }

    window.addEventListener("resize", function() {
        (w = canvas.width = window.innerWidth),
        (h = canvas.height = window.innerHeight);
        loop();
    });
    loop();
    setInterval(loop, 1000 / 60);
    }

}

/* Header Mobile */
function aizan_header_mobile() {
    var h_header_mobile = $('#pxl-header-elementor').outerHeight();
    if(pxl_window_width < 1199) {
        $('#pxl-header-elementor').css('min-height', h_header_mobile + 'px');
    }
}
$('.bg-effect-loop').addClass('bg-loop');

$(function() {
    "use strict";
    var x = 0;
    setInterval(function() {
     x -= 1;
     $('.bg-loop').css('background-position', x + 'px 0');
 }, 50);
});
////

window.addEventListener("DOMContentLoaded", (event) => { // Split text into spans
    let typeSplit = new SplitType("[text-split]", { types: "words, chars",});
    tagName: "span"
    $(".words-slide-up").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), { opacity:0, yPercent: 100, duration: 0.5, ease: "back.out (2)", stagger: { amount: 0.5 } });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.restart()
        });
    });
});
/////
$('.widget.widget_search input').attr('required', true);
$('.searchform-wrap input').attr('required', true);
$('.btn-text-nina').each(function () {
    var eltime = 0.045;
    var elt_inner = $(this).children().length;
    var _elt = elt_inner - 1;
    $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
        $(this).css('transition-delay', eltime + 's');
        eltime = eltime + 0.045;
    });
});

$('.btn-text-nanuk').each(function () {
    var eltime = 0.05;
    var elt_inner = $(this).children().length;
    var _elt = elt_inner - 1;
    $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
        $(this).css('animation-delay', eltime + 's');
        eltime = eltime + 0.05;
    });
});

$('.btn-text-smoke').each(function () {
    var eltime = 0.05;
    var elt_inner = $(this).children().length;
    var _elt = elt_inner - 1;
    $(this).find('> .pxl--btn-text > span > span > span').each(function (index, obj) {
        $(this).css('--d', eltime + 's');
        eltime = eltime + 0.05;
    });
});

$('.btn-text-reverse .pxl-text--front, .btn-text-reverse .pxl-text--back').each(function () {
    var eltime = 0.05;
    var elt_inner = $(this).children().length;
    var _elt = elt_inner - 1;
    $(this).find('.pxl-text--inner > span').each(function (index, obj) {
        $(this).css('transition-delay', eltime + 's');
        eltime = eltime + 0.05;
    });
});
/* Button Parallax */
function aizan_button_parallax() {
    $('.btn-text-parallax, .pxl-blog-style2, .pxl-hover-parallax').on('mouseenter', function() {
        $(this).addClass('hovered');
    });

    $('.btn-text-parallax, .pxl-blog-style2, .pxl-hover-parallax').on('mouseleave', function() {
        $(this).removeClass('hovered');
    });

    $('.btn-text-parallax').on('mousemove', function(e) {
        const bounds = this.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height;
        const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
        const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
        $(this).find('.pxl--btn-text').css({
            transform: 'translate3d('+ deltaX * 0.32 +'px, '+ deltaY * 0.32 +'px, 0px)'
        });
    });

    $('.pxl-blog-style2 .pxl-post--featured, .pxl-hover-parallax').on('mousemove', function(e) {
        const bounds = this.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height;
        const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
        const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
        $(this).find('.pxl-item-parallax, .pxl-post--button').css({
            transform: 'translate3d('+ deltaX * 0.32 +'px, '+ deltaY * 0.32 +'px, 0px)'
        });
    });
}
//
$( ".hide-reply" ).append( $( '<span class="sh"><i class="flaticon flaticon-chat"></i> Show Replies</span>' ) );
function aizan_hide_comment() {
    $('.hide-reply').on('click', function () {
        $(this).find('.sh').remove();
        $(this).parents('.parent').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')){
            $(this).append( $( '<span class="sh"><i class="flaticon flaticon-chat"></i> Hide Replies</span>' ) );
        }else {
            $(this).append( $( '<span class="sh"><i class="flaticon flaticon-chat"></i> Show Replies</span>' ) );
        }
    });
}

/* Scroll To Top */
function aizan_scroll_to_top() {
    if (pxl_scroll_top < pxl_window_height) {
        $('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on');
    }
    if (pxl_scroll_top > pxl_window_height) {
        $('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off');
    }
}

/* Footer Fixed */
function aizan_footer_fixed() {
    setTimeout(function(){
        var h_footer = $('.pxl-footer-fixed #pxl-footer-elementor').outerHeight() - 1;
        $('.pxl-footer-fixed #pxl-main').css('margin-bottom', h_footer + 'px');
    }, 600);
}

/* WooComerce Quantity */
function aizan_shop_quantity() {
    "use strict";
    $('#pxl-wapper .quantity').append('<span class="quantity-icon quantity-down pxl-icon--minus"></span><span class="quantity-icon quantity-up pxl-icon--plus"></span>');
    $('.quantity-up').on('click', function () {
        $(this).parents('.quantity').find('input[type="number"]').get(0).stepUp();
        $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
    });
    $('.quantity-down').on('click', function () {
        $(this).parents('.quantity').find('input[type="number"]').get(0).stepDown();
        $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
    });
    $('.quantity-icon').on('click', function () {
        var quantity_number = $(this).parents('.quantity').find('input[type="number"]').val();
        var add_to_cart_button = $(this).parents( ".product, .woocommerce-product-inner" ).find(".add_to_cart_button");
        add_to_cart_button.attr('data-quantity', quantity_number);
        add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + quantity_number);
    });
    $('.woocommerce-cart-form .actions .button').removeAttr('disabled');
}
$(document).on('click','.pxl-button.pxl-atc-popup > .btn',function(e){
        $('.pxl-page-popup').removeClass('active');
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('data-target');
        $(target).toggleClass('active');
        $('body').addClass('body-overflow');
    });
/* Page Popup */
function aizan_page_popup() {
    $('.pxl-menu-primary .pxl-page-popup > a').on("click", function(e){
        e.preventDefault();
        var target = $(this).data("page-target");
        var parent = $(this).parents("body");
        parent.find("#pxl-page-popup .pxl-page-item").removeClass("active");
        $(target).addClass("active");
        $(target).parents('#pxl-page-popup').addClass("active");
    });

    $('#pxl-page-popup .pxl-popup--close').on("click", function(e){
        e.preventDefault();
        $(this).parents('.pxl-page-item').removeClass('active');
        $(this).parents('.pxl-page-popup').removeClass('active');
    });
    $('#pxl-page-popup .pxl-popup-overlay').on("click", function(e) {
        e.preventDefault();
        $(this).parent().removeClass('active');
        $(this).parent().find('.pxl-page-item').removeClass('active');
    });
    $('.pxl-close-popup,.pxl-popup--close').on("click", function(e) {
        $('.pxl-page-popup').removeClass('active');
        $('body').removeClass('body-overflow');
    });
}
/* Custom Loader */
function aizan_loader() {
    if( $('#pxl-loadding').hasClass('style-fashion')) {
        $('.pxl-loader-inner').addClass('hide');
        $('body').removeClass('pxl-ov-hidden');
        $('#pxl-loadding').addClass('hide');
    } else {
        $(".pxl-loader").fadeOut("slow");
    }
}
/* Menu Responsive Dropdown */
function aizan_submenu_responsive() {
    var $aizan_menu = $('.pxl-header-elementor-main');
    $aizan_menu.find('.pxl-menu-primary li').each(function () {
        var $aizan_submenu = $(this).find('> ul.sub-menu');
        if ($aizan_submenu.length == 1) {
            if ( ($aizan_submenu.offset().left + $aizan_submenu.width() + 200 ) > $(window).width()) {
                $aizan_submenu.addClass('pxl-sub-reverse');
            }
        }
    });
}

})(jQuery);