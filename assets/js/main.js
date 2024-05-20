/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  ////////////////////////////////////////////////////
  // 06. Sticky Header Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("header__transparent");
    } else {
      $("#header-sticky").addClass("header__transparent");
    }
  });

  ////////////////////////////////////////////////////
  // 07. Data CSS Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      centerPadding: "15px",
      dots: false,
      fade: false,
      sliderPerView: 4,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev d-none"><i class="fa-sharp fa-light fa-circle-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-light fa-circle-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            sliderPerView: 3,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            sliderPerView: 2,
            slidesToShow: 2,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            sliderPerView: 2,
            slidesToShow: 2,
            dots: false,
            arrows: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  $(".active-class").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".donar-class").slick({
    dots: false,
    infinite: true,
    speed: 200,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    draggable: true,
    centerPadding: "111px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".footer-class").slick({
    dots: false,
    infinite: true,
    speed: 200,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoPlaySpeed: 1000,
    draggable: true,
    centerPadding: "111px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });

  ////////////////////////////////////////////////////
  // 08. slider__active Slider Js
  if (jQuery(".slider__active").length > 0) {
    let sliderActive1 = ".slider__active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 4,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: "fade",

      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".main-slider-paginations",
        // dynamicBullets: true,
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  var sliderr = new Swiper(".active-class", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".testimonial-pagination-6",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          "<button>" +
          (index + 1) +
          "</button>" +
          "</span>"
        );
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 13. Masonary Js
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });

    // filter items on button click
    $(".masonary-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  ////////////////////////////////////////////////////
  // 14. Wow Js
  new WOW().init();

  ////////////////////////////////////////////////////
  // 21. Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  ////////////////////////////////////////////////////
  // 22. Parallax Js
  if ($(".scene").length > 0) {
    $(".scene").parallax({
      scalarX: 10.0,
      scalarY: 15.0,
    });
  }

  ////////////////////////////////////////////////////
  // 23. InHover Active Js
  $(".hover__active").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".hover__active")
      .removeClass("active");
  });
})(jQuery);
