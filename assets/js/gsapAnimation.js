// 문장을 음절 또는 단어로 나눠주기 (1), (2)
// (1) 클래스에 split를 넣어주고, 음절로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".split").forEach(text => {
    let splitText = text.innerText;
    let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");

    splitWrap = "<span aria-hidden='true' class='' >" + splitWrap + "</span>";
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", splitText);
});

// (2) 클래스에 splitWord를 넣어주고, 단어로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".splitWord").forEach(text => {
    let splitWordText = text.innerText;
    let splitWordWrap = splitWordText.split(' ').join("</span><span aria-hidden='true'>");
    
    splitWordWrap = "<span aria-hidden='true' class='' >" + splitWordWrap + "</span>";
    text.innerHTML = splitWordWrap;
    text.setAttribute("aria-label", splitWordText);
});


// 스크롤 값에 따라 페이지가 움직이도록 gsap 플러그인 설정      // scrollTrigger: css 및 javascript를 활용하여 스크롤 동작 및 기타 다양한 svg 애니메이션을 제작할 수 있게 도와주는 플러그인
gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll (lenis 효과)
const lenis = new Lenis({           // gsap 스크롤 기본 셋팅
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    // direction: 'vertical', // vertical, horizontal
    // gestureDirection: 'vertical', // vertical, horizontal, both
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
})


// section 애니메이션 효과
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// section1
setTimeout ( () => {
    let mainTl = gsap.timeline();
   
    mainTl.to(".ideas h3 span",  { duration: 0.5, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
    mainTl.to(".ideas-desc span", { duration: 0.2, x: 0, y: 0, opacity: 1, stagger: 0.04, ease: Power1.easeOut })
    mainTl.to(".ideas", { duration: 1.2, x: "92%", ease: Power3.easeInOut }, "+=0.4")
    mainTl.to(".sec1-bg iframe", { duration: 1, opacity: 1, scale: 1 })
    mainTl.to(".sec1-desc span", { duration: 0.4, x: 0, y: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
    mainTl.to("#header", { duration: 0.2, top: 0, opacity: 1, ease: Power1.easeOut })

}, 3000 );



// section2


gsap.to(".personality__tit h3", { xPercent: -70, ease: "none", scrollTrigger: { scrub: 1 } })

setTimeout ( () => {
    let sec2Tl = gsap.timeline();

    sec2Tl.to(".myPhoto", { duration: 0.4, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
});



// gsap.to (".personality__tit h3", {
//     xPercent: -50,
//     ease: "none",
//     scrollTrigger: {
//         scrub: 1,
//     }
// })
// gsap.to(".tit2, .tit5", {
//     x: 400,
//     scrollTrigger: {
//         scrub: 1,
//     }
// })

