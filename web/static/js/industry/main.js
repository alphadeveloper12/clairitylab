/*! elementor - v3.30.0 - 09-07-2025 */
(() => {
    "use strict";
    var e, r, _, t, n, a = {}, i = {};

    function __webpack_require__(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var _ = i[e] = {exports: {}};
        return a[e].call(_.exports, _, _.exports, __webpack_require__), _.exports
    }

    __webpack_require__.m = a, e = [], __webpack_require__.O = (r, _, t, n) => {
        if (!_) {
            var a = 1 / 0;
            for (b = 0; b < e.length; b++) {
                for (var [_, t, n] = e[b], i = !0, o = 0; o < _.length; o++) (!1 & n || a >= n) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[o]))) ? _.splice(o--, 1) : (i = !1, n < a && (a = n));
                if (i) {
                    e.splice(b--, 1);
                    var c = t();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
        n = n || 0;
        for (var b = e.length; b > 0 && e[b - 1][2] > n; b--) e[b] = e[b - 1];
        e[b] = [_, t, n]
    }, _ = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, __webpack_require__.t = function (e, t) {
        if (1 & t && (e = this(e)), 8 & t) return e;
        if ("object" == typeof e && e) {
            if (4 & t && e.__esModule) return e;
            if (16 & t && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        __webpack_require__.r(n);
        var a = {};
        r = r || [null, _({}), _([]), _(_)];
        for (var i = 2 & t && e; "object" == typeof i && !~r.indexOf(i); i = _(i)) Object.getOwnPropertyNames(i).forEach((r => a[r] = () => e[r]));
        return a.default = () => e, __webpack_require__.d(n, a), n
    }, __webpack_require__.d = (e, r) => {
        for (var _ in r) __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
            enumerable: !0,
            get: r[_]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r), r)), [])), __webpack_require__.u = e => 216 === e ? "lightbox.64a93c50cbfc18fcc89b.bundle.min.js" : 30 === e ? "text-path.b4771a659cee68861d30.bundle.min.js" : 131 === e ? "accordion.36aa4c8c4eba17bc8e03.bundle.min.js" : 707 === e ? "alert.42cc1d522ef5c60bf874.bundle.min.js" : 457 === e ? "counter.12335f45aaa79d244f24.bundle.min.js" : 234 === e ? "progress.3200f67fe8fb78924bea.bundle.min.js" : 575 === e ? "tabs.537e7a0f178447960143.bundle.min.js" : 775 === e ? "toggle.a6177e2e3c2bc8864bef.bundle.min.js" : 180 === e ? "video.6ebfa2c3f5493cb2eaaf.bundle.min.js" : 177 === e ? "image-carousel.6167d20b95b33386757b.bundle.min.js" : 212 === e ? "text-editor.c084ef86600b6f11690d.bundle.min.js" : 211 === e ? "wp-audio.c9624cb6e5dc9de86abd.bundle.min.js" : 215 === e ? "nested-tabs.1fde581754604147f6d7.bundle.min.js" : 915 === e ? "nested-accordion.c546968f7aebebc356f2.bundle.min.js" : 1 === e ? "contact-buttons.7c9983ed0d4964b951c2.bundle.min.js" : 336 === e ? "floating-bars.c1e9838906b386709cd4.bundle.min.js" : 557 === e ? "shared-frontend-handlers.30dc2f9c080845a413a6.bundle.min.js" : 396 === e ? "shared-editor-handlers.a182e3f9ce3b8b1e4b74.bundle.min.js" : 768 === e ? "container-editor-handlers.7e9a94a0cd0958b8c9ad.bundle.min.js" : 77 === e ? "section-frontend-handlers.d85ab872da118940910d.bundle.min.js" : 220 === e ? "section-editor-handlers.e92172888b8bf1cc1517.bundle.min.js" : 304 === e ? "nested-title-keyboard-handler.fc9d01c2cd0ef46d20fd.bundle.min.js" : void 0, __webpack_require__.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, n = "elementorFrontend:", __webpack_require__.l = (e, r, _, a) => {
        if (t[e]) t[e].push(r); else {
            var i, o;
            if (void 0 !== _) for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var u = c[b];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + _) {
                    i = u;
                    break
                }
            }
            i || (o = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, __webpack_require__.nc && i.setAttribute("nonce", __webpack_require__.nc), i.setAttribute("data-webpack", n + _), i.src = e), t[e] = [r];
            var onScriptComplete = (r, _) => {
                i.onerror = i.onload = null, clearTimeout(d);
                var n = t[e];
                if (delete t[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(_))), r) return r(_)
            }, d = setTimeout(onScriptComplete.bind(null, void 0, {type: "timeout", target: i}), 12e4);
            i.onerror = onScriptComplete.bind(null, i.onerror), i.onload = onScriptComplete.bind(null, i.onload), o && document.head.appendChild(i)
        }
    }, __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, (() => {
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var _ = r.getElementsByTagName("script");
            if (_.length) for (var t = _.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = _[t--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
    })(), (() => {
        var e = {76: 0};
        __webpack_require__.f.j = (r, _) => {
            var t = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== t) if (t) _.push(t[2]); else if (76 != r) {
                var n = new Promise(((_, n) => t = e[r] = [_, n]));
                _.push(t[2] = n);
                var a = __webpack_require__.p + __webpack_require__.u(r), i = new Error;
                __webpack_require__.l(a, (_ => {
                    if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                        var n = _ && ("load" === _.type ? "missing" : _.type), a = _ && _.target && _.target.src;
                        i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")", i.name = "ChunkLoadError", i.type = n, i.request = a, t[1](i)
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, __webpack_require__.O.j = r => 0 === e[r];
        var webpackJsonpCallback = (r, _) => {
            var t, n, [a, i, o] = _, c = 0;
            if (a.some((r => 0 !== e[r]))) {
                for (t in i) __webpack_require__.o(i, t) && (__webpack_require__.m[t] = i[t]);
                if (o) var b = o(__webpack_require__)
            }
            for (r && r(_); c < a.length; c++) n = a[c], __webpack_require__.o(e, n) && e[n] && e[n][0](), e[n] = 0;
            return __webpack_require__.O(b)
        }, r = self.webpackChunkelementorFrontend = self.webpackChunkelementorFrontend || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)), r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    })()
})();
(function ($) {

    var pxl_swiper_handler = function ($scope, $) {

        var breakpoints = elementorFrontend.config.breakpoints,
            carousel = $scope.find(".pxl-swiper-container");
        if (carousel.length == 0) {
            return false;
        }

        /* Arrow Custom */
        $('.pxl-swiper-arrow-custom').parents('.pxl-swiper-sliders').addClass('pxl--hide-arrow');
        $('.pxl-navigation-carousel').parents('.elementor-section').addClass('pxl--hide-arrow');
        setTimeout(function () {
            $('.pxl-swiper-arrow-custom.pxl-swiper-arrow-next').on('click', function () {
                $(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-next').trigger('click');
            });
            $('.pxl-swiper-arrow-custom.pxl-swiper-arrow-prev').on('click', function () {
                $(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-prev').trigger('click');
            });
        }, 300);

        setTimeout(function () {
            $('.pxl-navigation-carousel .pxl-navigation-arrow-prev').on('click', function () {
                $(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-prev').trigger('click');
            });
            $('.pxl-navigation-carousel .pxl-navigation-arrow-next').on('click', function () {
                $(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-next').trigger('click');
            });
        }, 300);

        /* Main Slider */

        // custom fraction
        // if( settings['pagination_type'] === 'bullets' && settings['pagination_number'] === 'true' ){
        //     carousel_settings['on'] = {
        //         slideChange: function(){
        //             var currentSlide = this.realIndex + 1;
        //             document.querySelector('.pxl-swiper-current-slide').innerHTML = currentSlide;
        //         },
        //         paginationRender: function(){
        //             var totalSlides = document.getElementsByClassName('pxl-swiper-pagination-bullet').length;
        //             document.querySelector('.pxl-swiper-total-slides').innerHTML = totalSlides;
        //         }
        //     };
        // }
        // center


        carousel.each(function (index, element) {
            var carousel = $(this);
            var data = carousel.data(),
                settings = data.settings,
                carousel_settings = {
                    direction: settings['slide_direction'],
                    effect: settings['slide_mode'],
                    wrapperClass: 'pxl-swiper-wrapper',
                    slideClass: 'pxl-swiper-slide',
                    slidesPerView: settings['slides_to_show'],
                    slidesPerGroup: settings['slides_to_scroll'],
                    slidesPerColumn: settings['slide_percolumn'],
                    spaceBetween: 0,
                    navigation: {
                        nextEl: $scope.find(".pxl-swiper-arrow-next"),
                        prevEl: $scope.find(".pxl-swiper-arrow-prev"),
                    },
                    pagination: {
                        el: $scope.find(".pxl-swiper-dots"),
                        clickable: true,
                        modifierClass: 'pxl-swiper-pagination-',
                        bulletClass: 'pxl-swiper-pagination-bullet',
                        renderCustom: function (swiper, element, current, total) {
                            return current + ' of ' + total;
                        },
                        type: settings['pagination_type'],
                    },
                    speed: settings['speed'],
                    watchSlidesProgress: true,
                    watchSlidesVisibility: true,
                    breakpoints: {
                        0: {
                            slidesPerView: settings['slides_to_show_xs'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        },
                        576: {
                            slidesPerView: settings['slides_to_show_sm'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        },
                        768: {
                            slidesPerView: settings['slides_to_show_md'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        },
                        1025: {
                            slidesPerView: settings['slides_to_show_lg'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        },
                        1200: {
                            slidesPerView: settings['slides_to_show'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        },
                        1600: {
                            slidesPerView: settings['slides_to_show_xxl'],
                            slidesPerGroup: settings['slides_to_scroll'],
                        }
                    },
                    on: {
                        progress: function (swiper) {
                            var el_id = $scope.find('.pxl-slider-progressbar');
                            var el_width = 1;
                            var el_autoplayTime = settings['delay'] / 100;
                            var el_id_slider = setInterval(f_frame, el_autoplayTime);

                            function f_frame() {
                                if (el_width >= 100) {
                                    clearInterval(el_id_slider);
                                } else {
                                    el_width++;
                                    el_id.css('width', el_width + '%');
                                }
                            }
                        },

                        slideChangeTransitionStart: function (swiper) {
                            var activeIndex = this.activeIndex;
                            var current = this.slides.eq(activeIndex);

                            $scope.find('.pxl-element-slider .pxl-swiper-slide .wow').each(function () {
                                $(this).removeClass('animated').addClass('pxl-invisible');
                            });
                            current.find('.pxl-element-slider .wow').each(function () {
                                $(this).removeClass('pxl-invisible').addClass('animated');
                            });

                        },

                        slideChange: function (swiper) {

                            var activeIndex = this.activeIndex;
                            var current = this.slides.eq(activeIndex);

                            $scope.find('.pxl-element-slider .pxl-swiper-slide .wow').each(function () {
                                $(this).removeClass('animated').addClass('pxl-invisible');
                            });
                            current.find('.pxl-element-slider .wow').each(function () {
                                $(this).removeClass('pxl-invisible').addClass('animated');
                            });

                        },

                        sliderMove: function (swiper) {

                            var activeIndex = this.activeIndex;
                            var current = this.slides.eq(activeIndex);

                            $scope.find('.pxl-element-slider .pxl-swiper-slide .wow').each(function () {
                                $(this).removeClass('animated').addClass('pxl-invisible');
                            });
                            current.find('.pxl-element-slider .wow').each(function () {
                                $(this).removeClass('pxl-invisible').addClass('animated');
                            });

                        },

                    }
                };
            if (settings['center'] === 'true') {
                carousel_settings['centeredSlides'] = true;
            }
            // effect
            if (settings['slide_mode'] === 'fade') {
                carousel_settings['fadeEffect'] = {
                    crossFade: true
                };
            }
            // effect
            if (settings['mousewheel'] === 'true') {
                carousel_settings['mousewheel'] = true;
                carousel_settings['keyboard'] = {
                    enabled: true
                };
            }
            // loop
            if (settings['loop'] === 'true') {
                carousel_settings['loop'] = true;
            }
            // auto play
            if (settings['autoplay'] === 'true') {
                carousel_settings['autoplay'] = {
                    delay: settings['delay'],
                    disableOnInteraction: settings['pause_on_interaction']
                };
            } else {
                carousel_settings['autoplay'] = false;
            }


            var carousel_thumb = $scope.find(".pxl-swiper-thumbs");
            var center = $scope.find(".pxl-swiper-thumbs").data("center");
            var loop = $scope.find(".pxl-swiper-thumbs").data("loop");
            var thumbxs = $scope.find(".pxl-swiper-thumbs").data("thumbxs");
            var thumbsm = $scope.find(".pxl-swiper-thumbs").data("thumbsm");
            var thumbmd = $scope.find(".pxl-swiper-thumbs").data("thumbmd");
            var thumblg = $scope.find(".pxl-swiper-thumbs").data("thumblg");

            if (carousel_thumb.length > 0) {
                var galleryThumbs = new Swiper(carousel_thumb, {
                    spaceBetween: 0,
                    slidesPerView: 5,
                    freeMode: true,
                    watchSlidesProgress: true,
                    centeredSlides: true,
                    loop: true,
                    breakpoints: {
                        0: {
                            slidesPerView: typeof thumbxs !== 'undefined' ? thumbxs : 1,
                        },
                        576: {
                            slidesPerView: typeof thumbsm !== 'undefined' ? thumbsm : 2,
                        },
                        768: {
                            slidesPerView: typeof thumbmd !== 'undefined' ? thumbmd : 3,
                        },
                        1025: {
                            slidesPerView: typeof thumblg !== 'undefined' ? thumblg : 6,
                        },
                    }
                });
                carousel_settings['thumbs'] = {swiper: galleryThumbs};
            }

            var swiper = new Swiper(carousel, carousel_settings);

            if (settings['autoplay'] === 'true' && settings['pause_on_hover'] === 'true') {
                $(this).on({
                    mouseenter: function mouseenter() {
                        this.swiper.autoplay.stop();
                    },
                    mouseleave: function mouseleave() {
                        this.swiper.autoplay.start();
                    }
                });
            }

            $scope.find(".swiper-filter-wrap .filter-item").on("click", function () {
                var target = $(this).attr('data-filter-target');
                var parent = $(this).closest('.pxl-swiper-sliders');
                $(this).siblings().removeClass("active");
                $(this).addClass("active");

                if (target == "all") {
                    parent.find("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide-filter");
                    swiper.destroy();
                    swiper = new Swiper(carousel, carousel_settings);
                } else {

                    parent.find(".swiper-slide-filter").not("[data-filter^='" + target + "'], [data-filter*=' " + target + "']").addClass("non-swiper-slide").removeClass("swiper-slide-filter");
                    parent.find("[data-filter^='" + target + "'], [data-filter*=' " + target + "']").removeClass("non-swiper-slide").addClass("swiper-slide-filter");
                    swiper.destroy();
                    swiper = new Swiper(carousel, carousel_settings);
                }
            });

            $('.swiper-filter-wrap').parents('.pxl-swiper-sliders').addClass('swiper-filter-active');

        });
        var pxl_widget_image_box_handler = function ($scope, $) {
            if (window.elementorFrontend.isEditMode()) {
                $scope.find('.image-front').css("opacity", 1);
            }
        };
    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        // Swipers
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_post_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_history_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_client_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_slider.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_testimonial_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_image_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_team_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_gallery_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_partner_carousel.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_image_box.default', pxl_swiper_handler);
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_text_carousel.default', pxl_swiper_handler);
    });
})(jQuery);