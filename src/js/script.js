var app = {
  setWindowHeight() {
    document.documentElement.style.setProperty(
      "--window-inner-height",
      $(window).innerHeight() + "px"
    );
  },

  swiperFn() {
    var jobSlider = new Swiper(".job-slider", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 20,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".job-slider-next",
        prevEl: ".job-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.job-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1.3,
        },
        375: {
          slidesPerView: 1.4,
        },
        440: {
          slidesPerView: 1.4,
        },
        525: {
          slidesPerView: 1.8,
        },
        650: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1700: {
          slidesPerView: 4,
        },
      },
    });
    var companyItemSlider = new Swiper(".company-item-slider", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 0,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".company-item-slider-next",
        prevEl: ".company-item-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.company-item-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1.3,
        },
        375: {
          slidesPerView: 1.4,
        },
        440: {
          slidesPerView: 1.4,
        },
        525: {
          slidesPerView: 1.8,
        },
        650: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        992: {
          slidesPerView: 5.1,
        },
        1200: {
          slidesPerView: 5.1,
        },
        1700: {
          slidesPerView: 5.1,
        },
      },
    });
    var advantageItemSlider = new Swiper(".advantage-item-slider", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 15,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".advantage-item-slider-next",
        prevEl: ".advantage-item-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.advantage-item-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 1,
        },
        525: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 5,
        },
        1700: {
          slidesPerView: 5,
        },
      },
    });
    var historyItemSlider = new Swiper(".history-item-slider", {
      loop: true,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 40,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".history-item-slider-next",
        prevEl: ".history-item-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.history-item-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 1,
        },
        525: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3.14,
          spaceBetween: 30,
        },
        1700: {
          spaceBetween: 35,
          slidesPerView: 3.13,
        },
      },
    });
    var historyItemSlider = new Swiper(".similar-blogs", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 15,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: "",
        prevEl: "",
      },
      pagination: {
        el: "",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 1,
        },
        525: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1700: {
          slidesPerView: 3,
        },
      },
    });

    var otherSlider = new Swiper(".other-slider", {
      loop: false,
      speed: 700,
      slideVisibleClass: "is-visible",
      watchSlidesVisibility: true,
      observer: true,
      spaceBetween: 42,
      observeParents: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".other-slider-next",
        prevEl: ".other-slider-prev",
      },
      pagination: {
        el: ".nav-pagination.swiper-pagination.other-slider-nav",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1.3,
        },
        375: {
          slidesPerView: 1.4,
        },
        440: {
          slidesPerView: 1.4,
        },
        525: {
          slidesPerView: 1.8,
        },
        650: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        992: {
          slidesPerView: 2.1,
        },
        1200: {
          slidesPerView: 2.1,
        },
        1700: {
          slidesPerView: 2.1,
        },
      },
    });

    $(function () {
      window.setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 300);
    });
    $(window).focus(function () {
      {
        window.dispatchEvent(new Event("resize"));
      }
    });
  },



  mobileMenuOpenFn() {
    $("body").on("click", ".js-open-menu", function () {
      if ($(".header").hasClass("active")) {
        $(".header").removeClass("active");
        $(".js-open-menu").removeClass("active");
        $("html, body").removeClass("scroll-disabled");
      } else {
        $(".header").addClass("active");
        $(".js-open-menu").addClass("active");
        $("html, body").addClass("scroll-disabled");
      }
    });
  },

  mobileMenuItemOpen() {
    if (window.innerWidth <= 991) {
      $("body").on("click", ".header-menu-item__title", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $("html, body").removeClass("scroll-disabled");
        } else {
          $(this).addClass("active");
          $("html, body").addClass("scroll-disabled");
        }
      });

      $("body").on("click", ".js-close-submenu", function () {
        $(".header-menu-item__title").removeClass("active");
      });
    }
  },
  submenuItemOpen() {
    if (window.innerWidth <= 991) {
      $(".submenu-item").click(function () {
        if ($(this).hasClass("active")) {
          // Eğer tıklanan item zaten aktifse, active sınıfını kaldır
          $(this).removeClass("active");
        } else {
          // Diğer tüm submenu item'lardan active sınıfını kaldır
          $(".submenu-item").removeClass("active");
          // Tıklanan submenu item'a active sınıfını ekle
          $(this).addClass("active");
        }
      });

      $(".footer-menu-item .footer-menu__title").click(function () {
        if ($(this).hasClass("active")) {
          // Eğer tıklanan item zaten aktifse, active sınıfını kaldır
          $(this).removeClass("active");
        } else {
          // Diğer tüm submenu item'lardan active sınıfını kaldır
          $(".footer-menu__title").removeClass("active");
          // Tıklanan submenu item'a active sınıfını ekle
          $(this).addClass("active");
        }
      });
    }
  },
  
  validateForm() {
    $(".validateForm").each(function () {
      $(this).validate({
        rules: {
          mail: "required email",
          namesurname: {
            required: true,
          },
          name: {
            required: true,
          },

          surname: {
            required: true,
          },
          phone: {
            required: true,
          },
          phoneCode: {
            required: true,
          },
          library: {
            required: true,
          },
          checkbox: {
            required: true,
          },
          ccardskt: {
            required: true,
          },
          detailCheckbox: {
            required: true,
          },
          ckullaniciadi: {
            required: true,
          },
          accessCode: {
            required: true,
          },
          oldpassword: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },
          password: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },
          retry_password: {
            required: true,
            minlength: 8,
            maxlength: 14,
            equalTo: "#password",
          },
          cpasswordnew: {
            required: true,
            minlength: 8,
            maxlength: 14,
          },

          cnewpasswordagain: {
            required: true,
            minlength: 8,
            maxlength: 14,
            equalTo: "#cnewpassword",
          },
          verification: {
            required: true,
            maxlength: 1,
          },
          sozlesme: {
            required: true,
          },
          subject: {
            required: true,
          },
          message: {
            required: true,
          },
          rating: {
            required: true,
          },
          comment: {
            required: true,
          },
        },
        messages: {
          mail: {
            required: "Bu alan zorunludur!",
            email: "Lütfen geçerli bir e-posta adresi giriniz!",
          },
          namesurname: {
            required: "Bu alan zorunludur!",
          },
          name: {
            required: "Bu alan zorunludur!",
          },
          surname: {
            required: "Bu alan zorunludur!",
          },
          phone: {
            required: "Bu alan zorunludur!",
          },
          phoneCode: {
            required: "Bu alan zorunludur!",
          },
          checkbox: {
            required: "Bu alan zorunludur!",
          },
          detailCheckbox: {
            required: "Bu alan zorunludur!",
          },
          library: {
            required: "Bu alan zorunludur!",
          },
          accessCode: {
            required: "Bu alan zorunludur!",
          },

          subject: {
            required: "Bu alan zorunludur!",
          },
          message: {
            required: "Bu alan zorunludur!",
          },
          kitapadi: {
            required: "Bu alan zorunludur!",
          },
          rating: {
            required: "Bu alan zorunludur!",
          },
          comment: {
            required: "Bu alan zorunludur!",
          },
          user: {
            required: "Bir kullanıcı seçiniz!",
          },

          oldpassword: {
            required: "Bu alan zorunludur!",
            minlength: jQuery.validator.format(
              "En az {0} karakter girmelisiniz!"
            ),
            maxlength: jQuery.validator.format(
              "En fazla {0} karakter girebilirsiniz!"
            ),
          },
          password: {
            required: "Bu alan zorunludur!",
            minlength: jQuery.validator.format(
              "En az {0} karakter girmelisiniz!"
            ),
            maxlength: jQuery.validator.format(
              "En fazla {0} karakter girebilirsiniz!"
            ),
          },
          retry_password: {
            required: "Bu alan zorunludur!",
            minlength: jQuery.validator.format(
              "En az {0} karakter girmelisiniz!"
            ),
            maxlength: jQuery.validator.format(
              "En fazla {0} karakter girebilirsiniz!"
            ),
          },
          cpasswordagain: {
            required: "Bu alan zorunludur!",
            minlength: jQuery.validator.format(
              "En az {0} karakter girmelisiniz!"
            ),
            maxlength: jQuery.validator.format(
              "En fazla {0} karakter girebilirsiniz!"
            ),
            equalTo: "Şifreler Eşleşmiyor",
          },
          cnewpasswordagain: {
            required: "Bu alan zorunludur!",
            minlength: jQuery.validator.format(
              "En az {0} karakter girmelisiniz!"
            ),
            maxlength: jQuery.validator.format(
              "En fazla {0} karakter girebilirsiniz!"
            ),
            equalTo: "Şifreler Eşleşmiyor",
          },
          sozlesme: {
            required: "Bu alan zorunludur!",
          },
          verification: {
            required: "Bu alan zorunludur!",
          },
        },
        // submitHandler: function () {
        // 	$successMsg.show();
        // },
        highlight: function (element) {
          $(element).parent().addClass("input-error");
        },
        unhighlight: function (element) {
          $(element).parent().removeClass("input-error");
        },
      });
    });
  },

  langsMenuOpen() {
    $(".langs").click(function () {
      $(".langs-menu").toggleClass("active");
    });
  },

  overlayClickControlFn() {
    $(".overlay").on("click", function (e) {
      $(".main_menu").removeClass("active");
      $("html, body").removeClass("scroll-disabled");
      $(".overlay").removeClass("active");
      $(".notifications").removeClass("active");
    });
  },
  modalFn: function () {
    $(".js-open-modal").on("click", function (e) {
      e.preventDefault();
      $(".overlay").addClass("active");
      $("body,html").addClass("scroll-disabled");
      var id = $(this).data("modal-id");
      $('.js-modal[data-modal-id="' + id + '"]').addClass("active");
      if (scroll) {
        //scroll.stop();
      }
    });
    $(".js-close-modal").on("click", function () {
      $(".overlay,.js-modal").removeClass("active");
      $("body,html").removeClass("scroll-disabled");
      if (scroll) {
        //scroll.start();
      }
    });
    $(".js-close-this-modal").on("click", function () {
      var id = $(this).data("modal-id");
      console.log(id);
      $('.js-modal[data-modal-id="' + id + '"]').removeClass("active");
      $('.js-modal[data-modal-id="' + 'demo-form-success' + '"]').addClass("active");
      if (scroll) {
        //scroll.start();
      }
    });
    $("body").on("click", ".overlay", function () {
      $(".overlay,.js-modal").removeClass("active");
      if (scroll) {
        //scroll.start();
      }
    });
  },

  bodyClickControlFn() {
    $("body").on("click", function (e) {
      if (
        e.target.closest(".langs-menu") === null &&
        e.target.closest(".langs-menu-content") === null
      ) {
        $(".langs-menu").removeClass("active");
      }
      if (
        e.target.closest(".dropdown_bar-item") === null &&
        e.target.closest(".dropdown_bar-item-box") === null
      ) {
        $(".dropdown_bar-item").removeClass("active");
      }
      if (
        e.target.closest(".feature") === null &&
        e.target.closest(".feature-content") === null
      ) {
        $(".feature-button").removeClass("active");
      }
    });
  },
  fixedTab: function () {
    var tab = $(".tab .tab-link-wrapper");
    if (tab.length > 0) {
      var scrollPos = $(window).scrollTop();
      var wrapper = $(".wrapper");
      if (wrapper.length > 0) {
        var firstSection = wrapper.find(".section").first();
        var lastSection = wrapper.find(".section").last();

        if (firstSection.length > 0 && lastSection.length > 0) {
          var firstSectionPos = firstSection.offset().top;
          var lastSectionPos = lastSection.offset().top + 300;
          var positionTopValue = parseInt(
            window
              .getComputedStyle(document.documentElement)
              .getPropertyValue("--tab-position")
              .trim()
          );
          var activeTabItem = $(".js-scroll-item.active");

          if (activeTabItem.length > 0) {
            var parent = activeTabItem.parent(".animated-tabs");
            var activeWidth = activeTabItem.outerWidth();
            var activePos = activeTabItem.position();

            $(".js-scroll-item").each(function () {
              var targetSection = $("#" + $(this).data("target"));
              if (targetSection.length > 0) {
                var sectionPos = targetSection.offset().top - 100;
                if (scrollPos > sectionPos - 100) {
                  $(".js-scroll-item").removeClass("active");
                  $(this).addClass("active");
                }
              }
            });

            if (parent.length > 0) {
              parent.children(".animated-tabs-line").css({
                left: activePos.left + parent.scrollLeft(),
                width: activeWidth,
              });

              if ($(window).width() < 992) {
                parent.stop(true).animate(
                  {
                    scrollLeft: activePos.left + parent.scrollLeft() - 50,
                  },
                  200
                );
              }
            }

            if (!isNaN(positionTopValue) && scrollPos > positionTopValue) {
              tab.addClass("fixed").removeClass("hidden");
              if (scrollPos > lastSection.offset().top + 300) {
                tab.addClass("hidden");
              }
            } else {
              tab.removeClass("fixed hidden");
            }
          }
        }
      }
    } else {
      //console.log("Tab yok");
    }
  },

  scrollItem() {
    $("body").on("click", ".js-scroll-item", function (e) {
      e.preventDefault();
      let id = "";
      let scrollPos = "";
      /*var deneme = $(this).outerHeight() / 2;
      console.log(deneme + "asdasd");*/

      if ($(this).hasClass("animated-tabs-item")) {
        $(".js-scroll-item").removeClass("active");
        $(this).addClass("active");
      }
      if ($(this).data("target")) {
        id = $(this).data("target");
        scrollPos = $("#" + id).offset().top - 60;
      } else {
        id = $(this).attr("href");
        scrollPos = $(id).offset().top;
      }
      $("html, body").animate(
        {
          scrollTop: scrollPos,
        },
        200
      );
    });
    $("body").on("click", ".js-scroll-link-item", function (e) {
      e.preventDefault();
      let id = $(this).attr("href");
      let scrollPos = $(id).offset().top;
      $("html, body").animate(
        {
          scrollTop: scrollPos,
        },
        200
      );
    });
  },

  dropdown() {
    $(".dropdown_bar-item").on("click", function () {
      if ($(window).width() > 992) {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(".overlay").removeClass("active");
        } else {
          $(".dropdown_bar-item").removeClass("active");
          $(this).addClass("active");
        }
      }
    });

    $(".dropdown_bar-item-box__item").on("click", function () {
      var parent = $(this).closest(".dropdown_bar-item-box-wrapper");
      console.log(parent);
      var text = $(this).text();
      var value = $(this).data("val");
      parent.find(".dropdown_bar-item-box__item").removeClass("active");
      $(this).addClass("active");
      parent.parent().addClass("selected");
      parent.parent().find(".dropdown_bar-item__title").text(text);
      parent.parent().find("select").val(value).change();
    });
    if ($(window).width() < 1025) {
      $("body").on("change", ".dropdown_bar-item select", function () {
        var parent = $(this).parent(".dropdown_bar-item");
        var text = $(this).children("option").val();
        parent.addClass("selected");
        parent.find(".dropdown_bar-item__title").text(text);
      });
    }
  },

  accordionFn() {
    $("body").on("click", ".js-accordion-trigger", function () {
      $(this).toggleClass("active");
      const accordionGroup = $(this).closest(".accordion-wrapper");
      const item = $(this).closest(".accordion-item");
      let multipleShow = false;
      if (accordionGroup.data("multiple-show") == true) {
        multipleShow = false;
      } else {
        $(".js-accordion-trigger").not(this).removeClass("active");
      }
      let content = item.find(".accordion-calc");
      let contentHeight = content.outerHeight(true);
      if (item.hasClass("active")) {
        item.find(".accordion-content").css("height", 0 + "px");
        item.removeClass("active");
      } else {
        $(".accordion-content").css("height", 0 + "px");
        $(".accordion-item").removeClass("active");

        if (!multipleShow) {
          accordionGroup.children(".accordion-item").removeClass("active");
          accordionGroup
            .children(".accordion-item")
            .find(".accordion-content")
            .css("height", 0 + "px");
        }
        item.addClass("active");
        item.find(".accordion-content").css("height", contentHeight);
      }
    });
    $(".accordion-item.opened .js-accordion-trigger").trigger("click");
  },
  recalcAccordionHeights() {
    /*let itemContent = $('.accordion-item.active').find('.accordion-calc');
            itemContent.parent('.accordion-content').css('height', itemContent.outerHeight(true));
            console.log(itemContent.outerHeight(true));*/
    var itemContent;
    $.each($(".accordion-item.active"), function (i, val) {
      itemContent = $(this).find(".accordion-calc");
      itemContent
        .parent(".accordion-content")
        .css("height", itemContent.outerHeight(true));
    });
  },
  faqAccordion() {
    $(document).ready(function () {
      $(".faq-item-header").click(function () {
        var $content = $(this).next(".faq-item-content");
        var $faqItem = $(this).parent(".faq-item");

        if ($content.is(":visible")) {
          $content.slideUp(300);
          $faqItem.removeClass("active");
        } else {
          $(".faq-item-content").slideUp(300);
          $(".faq-item").removeClass("active");

          $content.slideDown(300);
          $faqItem.addClass("active");
        }
      });
    });
  },

  addButton() {
    $(".js-add-button").on("click", function () {
      var challengeCard = $(this).closest(".challenge-card");
      var button = challengeCard.find(".js-add-button .btn__text");
      challengeCard.toggleClass("added");
      if (challengeCard.hasClass("added")) {
        button.text("Katıldın");
      } else {
        button.text("Hemen Katıl");
      }
    });
  },
  showText() {
    $(document).ready(function () {
      $(".js-show-text").on("click", function () {
        var textWrapper = $(this).siblings(".challenge-card-text");
        textWrapper.toggleClass("active");
      });
    });
  },

  tabFn() {
    $(document).ready(function () {
      $(".filtered-item").addClass("hide");
      $(".js-filter-all").trigger("click");
      $(".js-tab-item:first-child").trigger("click");
    });

    $("body").on("click", ".js-tab-item", function (e) {
      $(".js-tab-item").removeClass("active");
      var dataFilter = $(this).data("filter");
      var dataTab = $(this).data("tab");
      var hasAccordion = $(".tab-content." + dataFilter).find(
        ".accordion-wrapper"
      );

      if (dataFilter) {
        if ($(this).hasClass("js-filter-all")) {
          $(".filtered-item").removeClass("hide");
          $(this).addClass("active");
        } else {
          $(".filtered-item").addClass("hide");
          $(".filtered-item").removeClass("active");
          $('.js-tab-item[data-filter="' + dataFilter + '"]').addClass(
            "active"
          );
          $(".filtered-item." + dataFilter).removeClass("hide");
        }
      } else {
        $('.js-tab-item[data-tab="' + dataTab + '"]').addClass("active");
        $(".filter-tab-item").delay(250).addClass("filtering");
        window.setTimeout(function () {
          $(".tab-content").removeClass("filtering");
          $(".tab-content").addClass("filtered");
          $(".tab-content." + dataTab).removeClass("filtered");
          if (hasAccordion) {
            if (
              !hasAccordion.find(".accordion-item").first().hasClass("active")
            ) {
              hasAccordion
                .find(".js-accordion-trigger")
                .first()
                .trigger("click");
            }
          }
        }, 250);
      }

      e.preventDefault();
      return false;
    });
  },

  animatedTabs() {
    if ($(".animated-tabs").length > 0) {
      $(".animated-tabs").each(function () {
        var activeWidth = $(this)
          .children(".animated-tabs-item.active")
          .outerWidth();
        var activePos = $(this)
          .children(".animated-tabs-item.active")
          .position();
        //console.log(activePos);
        $(this).children(".animated-tabs-line").css({
          left: activePos.left,
          width: activeWidth,
        });
      });
    }
    $(".animated-tabs-item").click(function (e) {
      e.preventDefault();
      var parent = $(this).parent(".animated-tabs");
      var activeWidth = $(this).outerWidth();
      var activePos = $(this).position();
      parent.children(".animated-tabs-line").css({
        left: activePos.left + parent.scrollLeft(),
        width: activeWidth,
      });
    });
  },

  mainMenuOpen() {
    $("body").on("click", ".js-open-main-menu", function () {
      if ($(".main_menu").hasClass("active")) {
        $(".main_menu").removeClass("active");
        $(".js-open-menu").removeClass("active");
        $("html, body").removeClass("scroll-disabled");
        $(".overlay").removeClass("active");
      } else {
        $(".main_menu").addClass("active");
        $(".js-open-menu").addClass("active");
        $("html, body").addClass("scroll-disabled");
        $(".overlay").addClass("active");
      }
    });
  },

  init: function () {
    app.setWindowHeight();
    app.swiperFn();
    app.mobileMenuOpenFn();
    app.validateForm();
    app.langsMenuOpen();
    app.bodyClickControlFn();
    app.dropdown();
    app.recalcAccordionHeights();
    app.accordionFn();
    app.faqAccordion();
    app.addButton();
    app.showText();
    app.mainMenuOpen();
    app.overlayClickControlFn();
    app.tabFn();
    app.fixedTab();
    app.animatedTabs();
    app.scrollItem();
    app.modalFn();
    app.mobileMenuItemOpen();
    app.submenuItemOpen();
  },
};

$(function () {
  app.init();
});

$(window).on("resize", function () {
  // app.recalcAccordionHeights();
  app.animatedTabs();
  // scroll.update();
  app.setWindowHeight();
});
$(window).on("scroll", function () {
  app.fixedTab();
});
