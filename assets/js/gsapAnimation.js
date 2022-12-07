// 문장을 음절 또는 단어로 나눠주기
// 클래스에 split를 넣어주고, 음절로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".split").forEach(text => {
    let splitText = text.innerText;
    let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");

    splitWrap = "<span aria-hidden='true' class='' >" + splitWrap + "</span>";
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", splitText);
});

// 클래스에 splitWord를 넣어주고, 단어로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".splitWord").forEach(text => {
    let splitWordText = text.innerText;
    let splitWordWrap = splitWordText.split(' ').join("</span><span aria-hidden='true'>");
    
    splitWordWrap = "<span aria-hidden='true' class='' >" + splitWordWrap + "</span>";
    text.innerHTML = splitWordWrap;
    text.setAttribute("aria-label", splitWordText);
});


// 
gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll (lenis 효과)
const lenis = new Lenis({           // gsap 스크롤 기본 셋팅
    duration: 1.2,
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    // direction: 'vertical', // vertical, horizontal
    // gestureDirection: 'vertical', // vertical, horizontal, both
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
})


// main 애니메이션
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

setTimeout(() => {
    let mainTl = gsap.timeline();

    // mainTl.to(".main-bg", {duration: 5, ease: "power2.inOut", opacity: 1})
    // mainTl.to(".sec1__subject span", { duration: 2, x: 0, opacity: 1, stagger: 0.3, ease: "power2.inOut"})
    mainTl.to(".sec1 .ideas h3 span", {duration: 0.3, x: 0, y:0, opacity:1, stagger: 0.01, ease: Power1.easeOut})
            // .to("leftFlow1", {duration: 2, })
            // .to("leftFlow2", {duration: 2, })
            // .to("wordDrop1", {duration: 2, })
            // .to("wordDrop2", {duration: 2, })
            // .to("wordDrop3", {duration: 2, }, "+=2")
}, 2000);

// gsap.to("#section1 h3", {
//     xPercent: -30,
//     ease: "none",
//     scrollTrigger: {
//         scrub: 1,
//     }
// })



// (1) mainSubject 애니메이션

// (2) mainDesc1 애니메이션

// (3) main__title 애니메이션

// (4) main-bg  애니메이션

// (5) mainDesc2 애니메이션
