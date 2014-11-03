
$(document).ready(function() {

  $('ul > li > .head').click(function () {
    if (!$(this).closest('li').hasClass('active')) {
        $('li.active').removeClass('active').find("> .content").slideUp();
        $(this).closest('li').addClass('active').find("> .content").slideDown();
    }
  });

  $("ul > li.active > .content").css("display","block");

  $(window).scroll(function () {
    var originalPosition = 0;
    if ($(".menu").hasClass('fixed')) {
      originalPosition = $(".menu").data("position");
    } else {
      originalPosition = $(".menu").offset().top;
    }
    if ($('body').scrollTop() > originalPosition) {
      $(".menu").data("position", originalPosition);
      $(".menu").addClass("fixed");
    } else {
      $(".menu").removeClass("fixed");
    }
  });
});
