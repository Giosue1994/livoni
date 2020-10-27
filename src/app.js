$(document).ready(function() {
  var stickyTop = $('#fixed-target').offset().top;
  console.log('StickyTop: ' + stickyTop);

  $(window).scroll(function() {
    alert('ciao')

    var windowTop = $(window).scrollTop();
    console.log('windowTop: ' + windowTop);

  });
});

// viene importato Scroll trigger
gsap.registerPlugin(ScrollTrigger);

// variabili
let wrapScrollbar = document.querySelector('#wrapper');
let sedia = $('#sedia');
let poltrona = $('#poltrona');
let treSedie = $('#tre-sedie');
let spalliere = $('#spalliere');

// creazione della smooth scrollbar
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

// creo l'animazione portando le immagini in alto per nasconderle
let tl = gsap.timeline();
tl.to(spalliere, {y: -820})
  .to(poltrona, {y: -820})
  .to(treSedie, {y: -820})
  .to(sedia, {y: -820})
  .from(".title", {scale: 1, autoAlpha: 0});

tl.to("#logo", {y: -200});

// allo scroll esegue l'animazione
ScrollTrigger.create({
  animation: tl,
  trigger: '#img-wrapper',
  // markers: true,
  start: 'top top',
  // end: '+=100%',
  end: () => '+=' + wrapScrollbar.offsetHeight,
  scroller: wrapScrollbar,
  scrub: true,
  pin: '#jumbo',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();
