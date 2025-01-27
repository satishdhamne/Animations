gsap.to("#page2 #slider .cards",{
    transform: "translateX(-1000%)",
    duration: 3,
   
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 30%",
        scrub:1,
        pin: "#slider"
    }
})

