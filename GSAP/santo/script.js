gsap.to(".scroll",{
    transform: 'translateX(-300%)',
    duration:50,
    scrollTrigger: {
                trigger:".page2",
                scroller:"body",
                markers:true,
                start:"top 0%",
                scrub: 2
            }
})