const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

const toggleDisc = document.querySelector(".toggle-disc");

document.querySelector(".toggle-btn").addEventListener("click", () => {

  if (backgroundColor === "rgb(0, 0, 0)") {
    document.documentElement.style.setProperty("--black", "#fff");
    document.documentElement.style.setProperty("--BG-Color", "#020202");
  } else {
    document.documentElement.style.removeProperty("--black");
    document.documentElement.style.removeProperty("--BG-Color");
  }
});






// gsap.from(".hl h4",{
//     y:10,
//     ease:Expo,
//     duration: 1,
//     stagger:0.2,
//     opacity:0,
// })

gsap.from(".page1 img",{
  y:30,
  ease:Expo,
  duration: 1,
  stagger:0.2,
  opacity:0,
})

Shery.textAnimate([".pg1p1 h1",".pg1p2 span"], {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
  });

// Shery.imageEffect(".pg1-left-img img",{
//    style:2,
//    debug:true,
// })
Shery.imageEffect(".pg1-left-img img", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });