var firstH1 = document.querySelector("#firstH1").textContent;

var splitedTxt = firstH1.split("");

var clutter = "";
splitedTxt.forEach(function(elem){
    clutter += `<span>${elem}</span>`;
})

document.querySelector("#firstH1").innerHTML = clutter;

gsap.from("#firstH1 span",{
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2,
    y:150
})
