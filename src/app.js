$(document).ready(function() {

  $(window).scroll( function() {
    // allo scroll della pagina,
    // se i px sono maggiore di 30 nascondo il logo
    // altrimenti torna come prima
    if ($(this).scrollTop() > 60) {
      $('#logo img').css({
        opacity: '0',
        transition: 'all 0.5s ease',
      });

      // EFFETTI IMMAGINI JUMBO
      // allo scroll le immagine del jumbo cambiano posizione e si rimpiccioliscono
      $('#sedia').css({
        left: '20%',
        top: '100px',
        width: '15%',
        transition: 'all 0.5s ease',
      });
      $('#poltrona').css({
        left: '40%',
        top: '100px',
        width: '15%',
        transition: 'all 0.5s ease',
      });
      $('#tre-sedie').css({
        left: '60%',
        top: '100px',
        width: '20%',
        transition: 'all 0.5s ease',
      });
      $('#spalliere').css({
        left: '80%',
        top: '100px',
        width: '15%',
        transition: 'all 0.5s ease',
      });

    } else {
      $('#logo img').css({
        opacity: '1',
        transition: 'all 0.5s ease',
      });

      // EFFETTI IMMAGINI JUMBO
      $('#sedia').css({
        left: '50%',
        top: '-50px',
        width: '19%',
        transition: 'all 0.5s ease',
      });
      $('#poltrona').css({
        left: '55%',
        top: '15px',
        width: '19%',
        transition: 'all 0.5s ease',
      });
      $('#tre-sedie').css({
        left: '50%',
        top: '65px',
        width: '28%',
        transition: 'all 0.5s ease',
      });
      $('#spalliere').css({
        left: '57%',
        top: '-40px',
        width: '19%',
        transition: 'all 0.5s ease',
      });
    }

  });

});
