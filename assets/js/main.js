// main

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

// (1) mainSubject 애니메이션

// (2) 


// (1) webGL 무지개 빛방울 서서히 나타내기
gsap.fromTo(".main-bg", {autoAlpha: 0}, {autoAlpha: 1, delay: 0.2, duration: 30});


// (2) mainSubject 교차하듯 만나게 나타내기

let letter1 = document.querySelector(".mainSubject span:nth-child(1)");
let letter2 = document.querySelector(".mainSubject span:nth-child(2)");
let letter3 = document.querySelector(".mainSubject span:nth-child(3)");
let letter4 = document.querySelector(".mainSubject span:nth-child(4)");
let letter5 = document.querySelector(".mainSubject span:nth-child(5)");

// TweenLite.from(letter1, 5.5, {y:"-300px", x: "-300", opacity:"0"});
// TweenLite.from(letter2, 5.5, {y:"900px", x:"300", opacity:"0"});
// TweenLite.from(letter3, 5.5, {y:"-300px", x: "-300", opacity:"0"});
// TweenLite.from(letter4, 5.5, {y:"600px", x:"300", opacity:"0"});
// TweenLite.from(letter5, 5.5, {y:"-300px", x: "-300", opacity:"0"});

TweenLite.from(letter1, 6, {delay: 2, y:"-300px", x: "-500", opacity:"0"});
TweenLite.from(letter2, 6, {delay: 2, y:"900px", x:"400", opacity:"0"});
TweenLite.from(letter3, 6, {delay: 2, y:"-500px", x: "-200", opacity:"0"});
TweenLite.from(letter4, 6, {delay: 2, y:"600px", x:"300", opacity:"0"});
TweenLite.from(letter5, 6, {delay: 2, y:"-300px", x: "-100", opacity:"0"});


// (3) mainDesc1 나타나기

const gtl = gsap.timeline({repeat: -1, repeatDelay: 1});

// leftFlow1 왼쪽 글자부터 나타나기
gsap.fromTo('.leftFlow1 span', {
    x: 220,
    opacity: 0,
},
{
    delay: 0, // 3 : 2초 후에 진행됨
    duration: 1.5,    // 0.5초 동안
    x: 0,
    opacity: 1,
    ease: 'power3.easeOut',
    stagger: {
        from: 'start', // 왼쪽부터 진행
        amount: 1, // 0.7초 간격으로
    },
})

// leftFlow2 오른쪽 글자부터 나타나기
gsap.fromTo('.leftFlow2 span', {
    x: 250,
    opacity: 0,
},
{
    delay: 3.2,
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: 'power3.easeOut',
    stagger: {
        from: 'start',
        amount: 1,
    },
})


// (4) 부제목 나타내기

const WD1 = document.querySelectorAll('.wordDrop1');
const WD2 = document.querySelectorAll('.wordDrop2');
const WD3 = document.querySelectorAll('.wordDrop3');

TweenMax.staggerFrom(WD1[0].children, 1, {delay: 5, y: -50, opacity: 0}, .18);
TweenMax.staggerFrom(WD2[0].children, 1, {delay: 5.4, y: -50, opacity: 0}, .18);
TweenMax.staggerFrom(WD3[0].children, 1, {delay: 5.9, y: -50, opacity: 0}, .18);

// console.clear();
// let el = document.querySelector('mainDesc2');
// let s = new SplitText(
//   el, 
//   {
//     type:"lines, words", 
//     linesClass:"ts-line"
//   }
// );

// let tl = new TimelineMax({ 
//   delay: 0.5,
//   repeatDelay: 0.5,
//   repeat: -1
// });
// tl.addLabel('enter');
// tl.staggerFromTo(
//     s.words, 
//     0.6, 
//     {
//       yPercent: 100,
//     },
//     {
//       yPercent: 0,
//       ease: 'Circ.easeOut'
//     },
//     0.2,
//     'enter'
//   );

// tl.staggerFromTo(
//     s.words, 
//     0.6, 
//     {
//       opacity: 0,
//     },
//     {
//       opacity: 1,
//       ease: 'Power1.easeOut'
//     },
//     0.2,
//   'enter'
//   );


// tl.fromTo('.note', 1, { opacity: 0 },{ opacity: 0.6, ease: 'Linear.easeNone' });
// tl.addPause();

// tl.addLabel('exit');

// tl.to('.note', 0.5, { opacity: 0, ease: 'Linear.easeNone' });

// tl.staggerTo(
//     s.words, 
//     0.4, 
//     {
//       yPercent: -200,
//       ease: 'Circ.easeIn'
//     }, 
//     0.1,
//     'exit'
//   );

// tl.staggerTo(
//     s.words, 
//     0.4, 
//     {
//       opacity: 0,
//       ease: 'Power1.easeIn'
//     }, 
//     0.1,
//     'exit'
//   );

// el.addEventListener('click',function(){
//   console.log('click!');
//   tl.play(); // tl.reversed() ? tl.play() : tl.reverse()
// });