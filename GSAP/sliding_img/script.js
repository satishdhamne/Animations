// gsap.to("#page2 #slider .cards",{
//     transform: "translateX(-1000%)",
//     duration: 5,
   
//     scrollTrigger:{
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start: "top 30%",
//         end: "top 10%",
//         scrub:9,
//     }
// })
gsap.to("#page2 #slider img",{
    transform: "translateX(-1000%)",
    duration: 5,
   
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 30%",
        scrub:1,
        pin: "#slider"
    }
})