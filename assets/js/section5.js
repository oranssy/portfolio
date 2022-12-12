// // values section 반원 그리기
// <canvas id="cnvs" width="1920" height="1080" style="background-color: #ffffff;"></canvas>        // (html)
// 반원 출력
let chi = document.getElementById("cnvs");
let chet = chi.getContext("2d");

chet.beginPath();
// chet.fillStyle = "";     // 반원호에 채울 색깔
chet.strokeStyle = "#9796B9";
chet.lineWidth = 20;
chet.arc(960, 0, 900, 0, Math.PI, false);
// chet.fill();     // 반원호에 색깔 채우기
chet.stroke();