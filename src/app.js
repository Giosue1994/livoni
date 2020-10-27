// import Scrollbar from 'smooth-scrollbar';
//
// let options = {
//   damping: 0.05,
// }
//
// Scrollbar.init(wrapScrollbar, options);
gsap.registerPlugin(ScrollTrigger);

let wrapScrollbar = document.querySelector('#wrapper');
let sedia = $('#sedia');
let poltrona = $('#poltrona');
let treSedie = $('#tre-sedie');
let spalliere = $('#spalliere');

const locoScroll = new LocomotiveScroll({
    el: wrapScrollbar,
    smooth: true,
});


locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(wrapScrollbar, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: wrapScrollbar.style.transform ? "transform" : "fixed"
});

let tl = gsap.timeline();
tl.to(spalliere, {y: -820})
  .to(poltrona, {y: -820})
  .to(treSedie, {y: -820})
  .to(sedia, {y: -820});
tl.from(".title", {scale: 1, autoAlpha: 0})

ScrollTrigger.create({
  animation: tl,
  trigger: '#img-wrapper',
  // markers: true,
  start: 'top top',
  end: '+=100%',
  // end: () => '+=' + wrapScrollbar.offsetHeight,
  scroller: wrapScrollbar,
  scrub: true,
  pin: '#jumbo',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();

$(document).ready(function() {

  $('#wrapper').css({
    'overflow-y': 'hidden'
  });

  // $(window).scroll( function() {
  //   // VARIABILI
  //   let logo = $('#logo img');
  //   let sedia = $('#sedia');
  //   let poltrona = $('#poltrona');
  //   let treSedie = $('#tre-sedie');
  //   let spalliere = $('#spalliere');

    // // allo scroll della pagina,
    // // se i pixel sono minore di 200 nascondo il logo
    // // altrimenti torna come prima
    // if ($(this).scrollTop() > 900) {
    //   logo.css({
    //     opacity: '0',
    //   });
    // } else {
    //   logo.css({
    //     opacity: '1',
    //   });
    // }
  // });
});
