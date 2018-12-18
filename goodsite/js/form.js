//Set focus on first line form "name"
$(document).ready(function() {
  var formName = $('#name');
  var feedbackTop = $('#mountains').offset().top;

  $(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    if (windowScroll > feedbackTop) {
      $(formName).focus();
    };
  });
  //Phone mask plugin jquery.maskedinput.min.js
  jQuery(function($) {
    $('#telephone').mask('+7(999)999-99-99');
  });
});
