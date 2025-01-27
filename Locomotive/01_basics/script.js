const scroll = new LocomotiveScroll({
    el: document.querySelector("#wraper"),
     // we have to use a wraper div the name can   be differ but it is nessessory to wrap the html code in a sigle div to use the locomotive 
    smooth: true,
    lerp: 0.2 // range of lerp is 0 to 1, 0 is smoothest and towords 1 it becomes rought
});

// locomotive is JavaScript library that help to make scrolling smoother but it restrict some gsap effects like scrolltrigger and other 