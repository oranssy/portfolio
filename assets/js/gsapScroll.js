// 문장을 음절 또는 단어로 나눠주기 (1), (2)
// (1) 클래스에 split를 넣어주고, 음절로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".split").forEach(text => {
    let splitText = text.innerText;
    let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");

    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    text.innerHTML = splitWrap;
    text.setAttribute("aria-label", splitText);
});

// (2) 클래스에 splitWord를 넣어주고, 단어로 나눠주기 -> 접근성이 좋지 않기 때문에 aria 효과를 적용해줌
document.querySelectorAll(".splitWord").forEach(text => {
    let splitWordText = text.innerText;
    let splitWordWrap = splitWordText.split(' ').join("</span><span aria-hidden='true'>");
    
    splitWordWrap = "<span aria-hidden='true'>" + splitWordWrap + "</span>";
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

// get scroll value
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
    const sec1Desc = document.querySelectorAll(".sec1-desc");
   
    mainTl.to(".ideas h3 span",  { duration: 0.5, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
    mainTl.to(".ideas-desc span", { duration: 0.2, x: 0, y: 0, opacity: 1, stagger: 0.02, ease: Power1.easeOut })
    mainTl.to(".ideas", { duration: 1.2, x: "86%", ease: Power3.easeInOut }, "+=0.4")
    mainTl.to(".sec1-bg iframe", { duration: 1, opacity: 1, scale: 1 })
    mainTl.to(".sec1-desc span", { duration: 0.15, y: 0, opacity: 1, stagger: 0.12, ease: Power1.easeOut })
    mainTl.to("#header", { duration: 0.2, top: 0, opacity: 1, ease: Power4.easeOut })

}, 2000 );


// section2
// gsap.to(".personal h3", { xPercent: -75, ease: "none", scrollTrigger: { scrub: 1 } })

gsap.to(".personal h3", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 40%",
        scrub: 1,
    },
    xPercent: -75, ease: "none"
});

gsap.to(".sec2 .personal .myPhoto", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
    },
    opacity: 1, ease: "none"
});

gsap.to(".sec2 .person__item-innertext span", {
    scrollTrigger: {
        trigger: ".person__item",
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
    },
    y: "0%", duration: 0.95, stagger: 0.01, ease: "SlowMo.easeOut"
});


// section3 (가로 모드)
const Horizons = gsap.utils.toArray(".horizon");        // 가로로 스크롤할 페이지 모두를 선택

gsap.to(Horizons, {
    // xPercent : x좌표의 위치를 %로 표현 ( - 는 오른쪽방향으로 넘기기 위함 / 100은 %이기 때문에 곱해줌 / length에 -1을 해주는 이유는 처음에 뜨는 화면을 포함하지 않기 위함 / -1을 없애면 다음 페이지만큼 빈 공간이 생김)
    xPercent: -100 * (Horizons.length -1),
    // ease: true,      // 스크롤할 때 질척거림
    ease: "none",
    scrollTrigger: {
        trigger: "#section3",     // 스크롤 대상
        pin: true,                      // 고정
        scrub: 1,                       // 스크롤 값에 따라 움직임  scrub: true 또는 숫자
        // snap: 1 / (Horizons.length -1),      // 조금만 스크롤해도 각 섹션 별로 넘길 수 있음 (화면이 전환되면서 딱 붙는 효과)
        end: "+=5000",                  // 스크롤하는 속도: 값이 클수록 느림 // end: () => `+=${document.querySelector(".square2").offsetHeight}`,
        markers: true,               // 보조 기준선 표시
    }
})





