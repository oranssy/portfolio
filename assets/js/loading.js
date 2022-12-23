// $(window).load(function() {    
//      $('#loading').hide();  
// });

// $('#loading').imagesLoaded( function() {
//     // images have loaded
// });

// // options
// $('#loading').imagesLoaded( {
// // options...
// },
// function() {
//   // images have loaded
// }
// );


$(document).ready(function() {
    let inputs = $(".loading-container").find($(".spelling") );

    for(let i=0; i<inputs.length; i++)
    { 
        let index = i + 1;
        let time = ( (inputs.length) - i ) * 30;      // 100 숫자를 높이면 랜덤으로 나오는 효과가 나옴

        $( ".loading-container .spelling:nth-child(" + index + ")" ).css( "-animation", "load 3s " + time + "ms infinite ease-in-out" );        // 따옴표 "" 안의 띄어쓰기 주의할 것! (실행이 안 될 수 있음)
    }
})


function loading(){
    let imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,	// 포폴에 사용된 전체 이미지 갯수
        imgLoaded = 0,		    // 포폴에 로딩된 이미지 갯수
        imgCurrent = 0,	        // 진행률%
        progressTimer = setInterval(updateLoading, 2000 / 60);      // 로딩되는 동안 updateLoading 함수 실행
        
    // 로딩된 이미지 갯수를 세어줌
    imgLoad.on("progress", function(){
        imgLoaded++;
    });
    
    function updateLoading(){
        let target = (imgLoaded/imgTotal) * 100;
        imgCurrent += (target - imgCurrent) * 0.1;
        
        if(imgCurrent >= 100){      // 로딩이 끝나고 계속 돌아가는 updateLoading 함수 중지
            clearInterval(progressTimer);
            document.querySelector(".loading").style.display = "none";
            document.querySelector("body").classList.remove("fixed");
            
            // 메인 애니메이션
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
        }
        
        if(imgCurrent > 99){    // 조금 모자라도 100으로 채움
            imgCurrent = 100;
        } 
    }
}
loading();



