//Слайд эффект для картинки гор
$(document).ready(function() {
  var mountains = $('#mountains');
  var topMountains = $(mountains).position().top;

  $(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    if (windowScroll > topMountains) {
      $(mountains).addClass('hide-mountains');
      $(mountains).slideUp(700);
    } else {
      $(mountains).removeClass('hide-mountains');
      $(mountains).slideDown(700)
    };
  });
});
