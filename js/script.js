$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
  });
});


