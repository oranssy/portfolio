// Website section 가로 모드

gsap.registerPlugin(ScrollTrigger);        // 스크롤할 때 움직이도록 gsap 플러그인 설정

const sections = gsap.utils.toArray(".horizon");        // 섹션 모두를 선택

gsap.to(sections, {
    // xPercent : x좌표의 위치를 %로 표현 ( - 는 오른쪽방향으로 넘기기 위함 / 100은 %이기 때문에 곱해줌 / length에 -1을 해주는 이유는 처음에 뜨는 화면을 포함하지 않기 위함 / -1을 없애면 다음 섹션만큼 빈 공간이 생김)
    xPercent: -100 * (sections.length -1),
    // ease: true,      // 스크롤할 때 질척거림
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalWrap",     // 스크롤 대상
        pin: true,                      // 고정
        scrub: 1,                       // 스크롤 값에 따라 움직임  scrub: true 또는 숫자
        // snap: 1 / (sections.length -1),      // 조금만 스크롤해도 각 섹션 별로 넘길 수 있음 (화면이 전환되면서 딱 붙는 효과)
        end: "+=4000",                  // 스크롤하는 속도: 값이 클수록 느림 // end: () => `+=${document.querySelector(".square2").offsetHeight}`,
        // markers: true,               // 보조 기준선 표시
    }
})