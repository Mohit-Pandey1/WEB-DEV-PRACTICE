var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1, .line h2", {
  opactiy: 0,
  onStart: function () {
    var h5 = document.querySelector("#line1-part1 h5");
    var grow = 0;

    setInterval(function () {
      if (grow < 100) {
        h5.innerHTML = grow++;
      } else {
        h5.innerHTML = grow;
      }
    }, 33);
  },
});

tl.to("#loader", {
  opactiy: 0,
  duration: 0.2,
  delay: 4,
});

tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opactiy: 0
})

tl.to("#loader", {
    display: none
})