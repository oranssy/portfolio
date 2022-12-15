// 새로고침하면 맨 위로 스크롤
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

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
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});
// section 애니메이션 효과
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// section1
setTimeout ( () => {
    let mainTl = gsap.timeline();

    mainTl.to(".ideas h3 span",  { duration: 0.7, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
    mainTl.to(".ideas-desc span", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.01, ease: Power1.easeOut })
    mainTl.to(".ideas", { duration: 1.6, x: "86%", ease: Power4.easeInOut }, "+=1.2")
    mainTl.to(".sec1-bg iframe", { duration: 1, opacity: 1, scale: 1 })
    mainTl.to(".sec1-desc span", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.012, ease: Power1.easeOut })
    mainTl.to("#header", { duration: 0.3, y: "0%", opacity: 1, ease: Power1.easeOut })
    mainTl.to("#parallax__info", { duration: 0.2, y: "0%", opacity: 1, ease: Power1.easeOut })

}, 2000 );

// main 모바일
// ScrollTrigger.saveStyles(".ideas");

// ScrollTrigger.matchMedia({

// 	"(min-width: 1220px)": function() {
        
//     }, 
// 	"(max-width: 768px)": function() {
        
//     }, 
//     "(max-width: 480px)": function() {
        
//     }, 
// 	"all": function() {

//     } 
// });


// section2
gsap.to(".sec2 .personal .myPhoto", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 48%",
        end: "top 10%",
        scrub: 1,
    },
    opacity: 1, ease: Power1.easeIn
});

gsap.to(".personal h3", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 30%",
        scrub: 1,
    },
    xPercent: -30, ease: "none"
});

gsap.to(".personal h3 .bead1", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 10%",
        scrub: 1,
    },
    rotation: 160, ease: "elastic"
});

gsap.to(".sec2 .person__item-innertext span", {
    scrollTrigger: {
        trigger: ".person__item",
        start: "top 75%",
        end: "top 20%",
        scrub: 1,
    },
    y: "0%", duration: 5, stagger: 0.02, ease: "SlowMo.easeOut"
});

// section2 단어에 마우스 오버 시 내용 띄우기
const personItems = document.querySelectorAll(".person__item");

personItems.forEach( (item) => {
    const imageWrap = item.querySelector(".person__item-image_wrap");

    const onMouseEnter = () => {
        gsap.set(imageWrap, {
            scale: 0.8,
            xPercent: -100,
            yPercent: 50,
            rotation: -15,
        });
        gsap.to(imageWrap, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
    };

    const onMouseLeave = () => {
        gsap.to(imageWrap, {
            opacity: 0,
            scale: 0.8,
            xPercent: -100,
            yPercent: -50,
            rotation: -15,
        });
    };

    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);
});

// section3 (가로 모드)
gsap.to("#section3", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 90%",
        end: "top 65%",
        scrub: 1,
    },
    opacity: 1, duration: 20, delay: 5, ease: Power1.easeIn
});

gsap.to(".website", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 65%",
        end: "top 40%",
        scrub: 1,
    },
    x: "0%", opacity: 1, duration: 10, stagger: 2.5, ease: "none"
});

const Horizons = gsap.utils.toArray(".horizon");        // 가로로 스크롤할 페이지 모두를 선택

gsap.to( Horizons, {
    // xPercent : x좌표의 위치를 %로 표현 ( - 는 오른쪽방향으로 넘기기 위함 / 100은 %이기 때문에 곱해줌 / length에 -1을 해주는 이유는 처음에 뜨는 화면을 포함하지 않기 위함 / -1을 없애면 다음 페이지만큼 빈 공간이 생김)
    xPercent: -100 * (Horizons.length -1),
    // ease: true,      // 스크롤할 때 질척거림
    ease: "none",

    scrollTrigger: {
        trigger: "#section3",     // 스크롤 대상
        start: "top 0%",
        // end에서 박스의 height 값을 변경 -> 가로모드에 사용함     // offsetHeight : padding, border 값을 포함한 컨텐츠의 높이를 가져옴 (margin 불포함)
        end: () => `+=${document.querySelector(".websites__view8").offsetWidth}`,
        pin: true,                          // 고정
        scrub: 1,                           // 스크롤 값에 따라 움직임  scrub: true 또는 숫자
        snap: 1 / (Horizons.length -1),     // 조금만 스크롤해도 각 섹션 별로 넘길 수 있음 (화면이 전환되면서 딱 붙는 효과)
        end: "+=12000",                     // 스크롤하는 속도: 값이 클수록 느림 // end: () => `+=${document.querySelector(".square2").offsetHeight}`,
        markers: true,                      // 보조 기준선 표시
    }
});

gsap.to(".sec3 .website h3", {
    scrollTrigger: {
        trigger: ".website",
        start: "top 55%",
        scrub: 1,
    },
    xPercent: -80, duration: 30, stagger: 1, ease: "none"
});

gsap.to(".sec3 .website-contL p", {
    scrollTrigger: {
        trigger: ".website",
        start: "top 4%",
        end: "top 3%",
        scrub: 1,
    },
    opacity: 1, duration: 0.3, stagger: 0.5, ease: Power1.easeOut
});

gsap.to(".sec3 .website-contR ul li span", {
    scrollTrigger: {
        trigger: ".website",
        start: "top 40%",
        end: "top 3%",
        scrub: 1,
    },
    x: "0%", opacity: 1, duration: 10, stagger: 1, ease: Power1.easeOut
});

// websites__view
gsap.to(".websites__view1 .web-num", {
    scrollTrigger: {
        trigger: ".websites__view1",
        start: "top 95%",
        end: "top 85%",
        scrub: 1,
        // markers: true,
    },
    y: "0%", opacity: 1, duration: 0.5, stagger: 0.05, ease: Power1.easeOut
});

// setTimeout ( () => {
//     let veiwTl = gsap.timeline();

//     veiwTl.to(".websites__view .web-num",  { y: "0%", opacity: 1, duration: 1, stagger: 1, ease: Power1.easeOut })
//     veiwTl.to(".websites__view .web-img", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.01, ease: Power1.easeOut })
//     veiwTl.to(".web-info h3 em", { duration: 1.6, x: "86%", ease: Power4.easeInOut }, "+=1.2")
//     veiwTl.to(".web-info h3 span", { duration: 1, opacity: 1, scale: 1 })
//     veiwTl.to(".sec1-desc span", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.012, ease: Power1.easeOut })
//     veiwTl.to("#header", { duration: 0.3, y: "0%", opacity: 1, ease: Power1.easeOut })
//     veiwTl.to("#parallax__info", { duration: 0.2, y: "0%", opacity: 1, ease: Power1.easeOut })

// }, 3000 );



// section4
gsap.to(".sec4 h3", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 40%",
        end: "top 10%",
        scrub: 1,
    },
    opacity: 1, xPercent: 8, duration: 10, stagger: 2, ease: "none"
});

gsap.to(".study-desc", {
    scrollTrigger: {
        trigger: ".study",
        start: "top 65%",
        end: "top 45%",
        scrub: 1,
    },
    opacity: 1, duration: 10, stagger: 2, ease: Power1.easeOut
});

gsap.to(".study__list li", {
    scrollTrigger: {
        trigger: ".study__list ul",
        start: "top 85%",
        end: "top 5%",
        scrub: 1,
        // markers: true,
    },
    scaleX: 1, scaleY: 1, duration: 100, stagger: 10, ease: Power1.easeInOut
});

gsap.to(".study__list li span em", {
    scrollTrigger: {
        trigger: ".study__list ul",
        start: "top 35%",
        end: "top 2%",
        scrub: 1,
    },
    x: "0%", duration: 100, stagger: 2, ease: "SlowMo.easeOut"
});

gsap.to(".study__list li span", {
    scrollTrigger: {
        trigger: ".study__list li",
        start: "top 36%",
        end: "top 0%",
        scrub: 1,
    },
    opacity: 1, y: "0%", duration: 200, delay: 5, stagger: 20, ease: "SlowMo.easeOut"
});


// section5
gsap.to(".sec5 h3", {
    scrollTrigger: {
        trigger: "#section5",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
    },
    xPercent: 20, duration: 10, stagger: 2, ease: "none"
});

gsap.to(".sec5 h4", {
    scrollTrigger: {
        trigger: "#section5",
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
    },
    xPercent: -40, duration: 30, stagger: 2, ease: "none"
});

gsap.to(".sec5-bg iframe", {
    scrollTrigger: {
        trigger: ".sec5 h3",
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
    },
    opacity: 1, duration: 1, stagger: 0.5, ease: Power1.easeIn
});

gsap.to(".values-desc", {
    scrollTrigger: {
        trigger: ".values",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
    },
    opacity: 1, duration: 10, stagger: 2, ease: Power1.easeOut
});


// footer
gsap.to("#footer h2", {
    scrollTrigger: {
        trigger: "#footer",
        start: "top 65%",
        end: "bottom 100%",
        scrub: 1,
    },
    xPercent: 42, duration: 10, stagger: 2, ease: "none"
});

gsap.to("#footer h3", {
    scrollTrigger: {
        trigger: "#footer",
        start: "top 55%",
        end: "bottom 100%",
        scrub: 1,
    },
    xPercent: -50, duration: 30, stagger: 2, ease: "none"
});

gsap.to(".end-desc div span", {
    scrollTrigger: {
        trigger: ".flow__cont",
        start: "top 65%",
        end: "top 40%",
        scrub: 1,
    },
    y: "0%", duration: 3, stagger: 0.07, ease: "SlowMo.easeOut"
});

gsap.to(".end-info div", {
    scrollTrigger: {
        trigger: ".end-desc",
        start: "top 65%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
    },
    y: "0%", duration: 3, stagger: 0.07, ease: "SlowMo.easeOut"
});