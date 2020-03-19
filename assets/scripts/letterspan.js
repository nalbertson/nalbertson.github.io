// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    translateY: 0,
    translateZ: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 400 + 40 * i
  })