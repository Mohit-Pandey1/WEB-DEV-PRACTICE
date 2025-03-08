gsap.from("#page1 #box", {
    scale: 0,
    duration: 1,
    delay:1,
    opacity:0,
    rotate: 360
})

gsap.from("#page1 #box", {
    scale: 0,
    duration: 1,
    opacity:0,
    rotate: 360,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 50%",
        markers: true
    }
})
