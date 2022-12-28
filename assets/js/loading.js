// 로딩 화면
// 흐름을 파악하고 원리를 이해하며 구조짜고 css, js 구성하기!
// 1. body 고정하기 (스크롤 없애기)  ->  2. 검은 화면 보여주기  ->  3. 로딩 글자 보여주기   
// ->  4. 로딩이 끝나면 검은 화면 없애기  ->  5. 로딩 글자 없애기  ->  6. body 고정 풀어주기  
// ->  7. 메인 애니메이션 실행하기

// 3. 로딩 글자 보여주기 JS  (HTML jQuery + JS)
$(document).ready(function() {
    let inputs = $(".loading-container").find($(".spelling") );

    for(let i=0; i<inputs.length; i++)
    { 
        let index = i + 1;      // i 가 0부터 시작하므로 + 1 을 해줌
        let time = ( (inputs.length) - i ) * 200;      // 100 숫자를 높이면 랜덤으로 나오는 효과가 나타남

        $( ".loading-container .spelling:nth-child(" + index + ")" ).css( "-animation", "load 3s " + time + "ms infinite ease-in-out" );
        // "load 3s " -> 따옴표 "" 안의 띄어쓰기 주의할 것! (실행이 안 될 수 있음)
    }
})

// 로딩하기 (이미지 갯수)
function loading(){
    let imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,	// 사용된 전체 이미지 갯수
        imgLoaded = 0,		                // 로딩된 이미지 갯수
        imgCurrent = 0,	                    // 로딩 진행률 %
        progressTimer = setInterval(updateLoading, 2000 / 60);  // 로딩되는 동안 updateLoading 함수 실행
        
    // imgLoaded  로딩된 이미지 갯수 세기
    imgLoad.on("progress", function(){
        imgLoaded++;
    });
    
    // updateLoading 함수
    function updateLoading(){
        let target = (imgLoaded/imgTotal) * 100;        // 전제 이미지 갯수에 대한 로딩된 이미지 갯수 %
        imgCurrent += (target - imgCurrent) * 0.1;      // 로딩 진행률 % 에 로딩된 이미지 갯수 % 더하기
        
        // 로딩 진행률이 100% 가 되면
        if(imgCurrent >= 100){
            clearInterval(progressTimer);       // 로딩이 끝나고도 updateLoading 함수는 계속 돌아감 -> 중지시켜줘야 함
            document.querySelector(".loading").style.display = "none";      // 5. 로딩 글자 없애기
            document.querySelector("body").classList.remove("fixed");       // 6. body 고정 풀어주기
            
            // 7. 메인 애니메이션 실행하기 (GSAP)
            setTimeout ( () => {
                let mainTl = gsap.timeline();
            
                mainTl.to(".ideas h3 span",  { duration: 0.7, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut })
                mainTl.to(".ideas-desc span", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.01, ease: Power1.easeOut })
                mainTl.to(".ideas", { duration: 1.6, x: "86%", ease: Power4.easeInOut }, "+=1.2")
                mainTl.to(".sec1-bg iframe", { duration: 1, opacity: 1, scale: 1 })
                mainTl.to(".sec1-desc span", { duration: 0.3, x: 0, y: 0, opacity: 1, stagger: 0.012, ease: Power1.easeOut })
                mainTl.to("#header", { duration: 0.3, y: "0%", opacity: 1, ease: Power1.easeOut })
                mainTl.to("#parallax__info", { duration: 0.2, y: "0%", opacity: 1, ease: Power1.easeOut })
            
            }, 2000 );  // 2초 동안
        }
        
        // 조금 모자라도 100으로 채움 (99.1 ~ 99.99 -> 100)
        if(imgCurrent > 99){
            imgCurrent = 100;
        } 
    }
}
loading();



