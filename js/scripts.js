// put mobile nav in a var
var $mobNav = $('#mobile-nav');
// mobile nav toggle
$('#mobile-nav__button').on('click', function(e) {
  e.preventDefault();
  // if its open
  if ($mobNav.hasClass('active')) {
    // close it
    $mobNav.removeClass('active');
  } else {
    // else open it
    $mobNav.addClass('active');
  }
});

// close mobile nav on link click
$('#mobile-nav ul li a').on('click', function(e) {
  e.preventDefault();
  // close it
  $mobNav.removeClass('active');
});

// anchor scroll
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    // get href starting at hash
    var target = this.hash;
    // wrap it in a jquery object
    var $target = $(target);
    // animate scroll
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    // make it super fast
    }, 400, 'swing');
});
