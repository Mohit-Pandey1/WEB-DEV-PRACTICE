// to used for animating object from it's initial position to final position
// gsap.to("#box",{
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     backgroundColor: "blue"
// })



// from used for animating object from it's final position to initial position
// gsap.from("#box",{
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     backgroundColor: "blue"
// })

// var t = gsap.timeline()

// t.to("#box1",{
//     x: 1200,
//     rotate: 360,
//     scale:0.5,
//     duration:2,
//     delay:1
// })
// t.to("#box2",{
//     x: 1200,
//     rotate: 360,
//     scale:0.5,
//     duration:2,
// })
// t.to("#box3",{
//     x: 1200,
//     rotate: 360,
//     scale:0.5,
//     duration:2,
// })


gsap.from("#page1", "#circle", {
    scale: 0,
    delay:1,
    duration:2,
    rotate:360
})