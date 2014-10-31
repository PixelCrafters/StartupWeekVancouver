
$(document).ready(function() {

  $('ul > li > .head').click(function () {
    if (!$(this).closest('li').hasClass('active')) {
        $('li.active').removeClass('active').find("> .content").slideUp();
        $(this).closest('li').addClass('active').find("> .content").slideDown();
    }
  });

  $("ul > li.active > .content").css("display","block");
});
