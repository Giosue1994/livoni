$(document).ready(function() {

  $(window).scroll( function() {
    // allo scroll della pagina,
    // se i px sono minore di 200 nascondo il logo
    // altrimenti torna come prima
    if ($(this).scrollTop() > 200) {
      $('#logo img').css({
        opacity: '0',
        transition: 'all 0.5s ease',
      });
    } else {
      $('#logo img').css({
        opacity: '1',
        transition: 'all 0.5s ease',
      });
    }

    if ($(this).scrollTop() > 60) {
      // EFFETTI IMMAGINI JUMBO
      // allo scroll le immagine del jumbo cambiano posizione e si rimpiccioliscono
      $('#sedia').css({
        left: '20%',
        top: '100px',
        width: '300px',
        transition: 'all 0.5s ease',
      });
      $('#poltrona').css({
        left: '40%',
        top: '100px',
        width: '300px',
        transition: 'all 0.5s ease',
      });
      $('#tre-sedie').css({
        left: '60%',
        top: '100px',
        width: '300px',
        transition: 'all 0.5s ease',
      });
      $('#spalliere').css({
        left: '80%',
        top: '100px',
        width: '300px',
        transition: 'all 0.5s ease',
      });

    } else {
      // EFFETTI IMMAGINI JUMBO
      $('#sedia').css({
        left: '50%',
        top: '-50px',
        width: '360px',
      });
      $('#poltrona').css({
        left: '53%',
        top: '-3px',
        width: '360px',
      });
      $('#tre-sedie').css({
        left: '44%',
        top: '25px',
        width: '360px',
      });
      $('#spalliere').css({
        left: '57%',
        top: '-40px',
        width: '360px',
      });
    }

  });

});
