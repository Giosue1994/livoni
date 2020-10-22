$(document).ready(function() {

  // allo scroll della pagina, se i px sono maggiore di 30 nascondo il logo
  // altrimenti ricompare
  $(window).scroll( function() {
    if ($(this).scrollTop() > 30) {
      $('#logo img').css({
        'opacity': '0',
        'transition': 'all 0.5s ease',
      });
    } else {
      $('#logo img').css({
        'opacity': '1',
        'transition': 'all 0.5s ease',
      });
    }
  });

});
