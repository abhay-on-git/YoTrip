const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true
});

let toggelBtn = document.getElementById("togle-btn");
let toggelDisc = document.getElementById("toggledisc");
var check = true;
toggelBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-theme");
  if(check){
    toggelDisc.style.alignSelf = "flex-end";
    check = false;
  }else{
    toggelDisc.style.alignSelf = "flex-start";
    check = true;
  }
})

let clickToSeeBtn = document.querySelector(".clicktosee-btn");
let video = document.querySelector(".page5 video");

clickToSeeBtn.addEventListener("mouseenter",()=>{
  video.style.opacity = "1";
  video.style.transition = 'opacity 0.5s ease';
})
clickToSeeBtn.addEventListener("mouseleave",()=>{
  video.style.opacity = "0";
})

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
// Shery.imageEffect("#pg1-left-img img", {
//     style: 6, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//   });