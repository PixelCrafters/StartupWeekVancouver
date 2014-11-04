
var ACCORDION_MODE = true;

function detectMobileQuery(mediaQueryList) {
  if (mediaQueryList.matches) {
    ACCORDION_MODE = false;
  } else if (!ACCORDION_MODE) {
    $('li.active').removeClass('active').find(".content").slideUp();
    ACCORDION_MODE = true;
  }
}

$(document).ready(function() {

  if (window.matchMedia) {
      var mobileQuery = window.matchMedia("(max-width: 40rem)");
      if (mobileQuery.matches) {
        ACCORDION_MODE = false;
      }
      mobileQuery.addListener(detectMobileQuery);
  }

  $('ul > li .head').click(function () {

    if (ACCORDION_MODE) {
      if (!$(this).closest('li').hasClass('active')) {
          $('li.active').removeClass('active').find(".content").slideUp();
          $(this).closest('li').addClass('active').find(".content").slideDown();
      }
    } else {
      if ($(this).closest('li').hasClass('active')) {
          $(this).closest('li').removeClass('active').find(".content").slideUp();
      } else {
        $(this).closest('li').addClass('active').find(".content").slideDown();
      }
    }


  });

  $("ul > li.active .content").css("display","block");

  $(window).scroll(function () {
    var originalPosition = 0;
    if ($(".menu").hasClass('fixed')) {
      originalPosition = $(".menu").data("position");
    } else {
      originalPosition = $(".menu").offset().top;
    }
    if ($(document).scrollTop() > originalPosition) {
      $(".menu").data("position", originalPosition);
      $(".menu").addClass("fixed");
    } else {
      $(".menu").removeClass("fixed");
    }
  });

  $(".menu a.scroll").click(function (e) {
    $('html, body').animate({
      scrollTop: $( $(this).attr("href") ).offset().top
    });
    e.preventDefault();
  })
});
