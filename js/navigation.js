$(document).ready(function() {
  $(".menu-trigger").click(function() {
    $(".navigation").slideToggle(400, function() {
      $(this).toggleClass("nav-expanded").css('display', '');
    });
  });
});