var tl = gsap.timeline();

tl.from("#nav h2,#nav h3",{   // to : means en values pr animation end hoga
    y: -50,                   // from : means en values se animation start hoga
    duration: 1,
    delay: 0.5,
    Opacity: 0,
    stagger: 0.2
})

tl.from("#center #left h1",{
    x: -100,
    duration: 1,
    delay: 0.5,
    Opacity: 0,
    stagger: 0.2
})

tl.from("#center #left button",{
    opacity:0,
    duration:0.6,
    delay: 0.5
})

// tl.from("#left",{
//     width:0,
//     duration:1
//   },"anim")
  
//   tl.to("#right",{
//     width:"45%",
//     duration:1
//   },"anim")