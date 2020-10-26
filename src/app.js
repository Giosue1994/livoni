// import Scrollbar from 'smooth-scrollbar';
//
// let options = {
//   damping: 0.05,
// }
//
// let wrapScrollbar = document.querySelector('#wrapper');
//
// Scrollbar.init(wrapScrollbar, options);


let sedia = $('#sedia');
let poltrona = $('#poltrona');
let treSedie = $('#tre-sedie');
let spalliere = $('#spalliere');

const tl = gsap.timeline();
tl.to(spalliere, {yPercent: -200})
.to(poltrona, {yPercent: -200})
.to(treSedie, {yPercent: -200})
.to(sedia, {yPercent: -200});

ScrollTrigger.create({
  animation: tl,
  trigger: '#img-wrapper',
  // markers: true,
  start: '-200px top',
  end: () => '+=' + document.querySelector('#wrapper').offsetHeight,
  scrub: true,
  pin: '#jumbo',
});

$(document).ready(function() {

  $(window).scroll( function() {
    // VARIABILI
    let logo = $('#logo img');
    let sedia = $('#sedia');
    let poltrona = $('#poltrona');
    let treSedie = $('#tre-sedie');
    let spalliere = $('#spalliere');

    // allo scroll della pagina,
    // se i pixel sono minore di 200 nascondo il logo
    // altrimenti torna come prima
    if ($(this).scrollTop() > 900) {
      logo.css({
        opacity: '0',
      });
    } else {
      logo.css({
        opacity: '1',
      });
    }


  });
});
