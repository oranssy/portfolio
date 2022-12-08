// footer 날짜 & 시간 구현하기

function printTime() {

    const clock = document.querySelector(".dateTime");
    const now = new Date();

    // // clock.innerText = now;   // 날짜 및 시간 데이터가 나오는지 확인

    let year = now.getFullYear() -2000;  // getFullYear() -> 날짜의 연도에 해당하는 숫자
    let month = now.getMonth() + 1; // 월 (0에서 11 사이의 정수. 0은 1월, 1은 2월... 을 나타냄) 숫자로 표시되므로 월에는 +1 을 해줘야 함.

    if (month < 10) month = "0" + month;
    let date = now.getDate();       // getDate() -> 일 (1 이상 31 이하의 정수)

    if (date < 10) date = "0" + date;
    let hr = now.getHours();        // 시 (0에서 23 사이의 정수)

    if (hr < 10) hr = "0" + hr;     // 일의 자리 숫자 앞에 0 붙이기
    // if (hr > 12) hr = hr - 12;      // '16시' 로 나오지 않고 4시로 나올 수 있도록

    let min = now.getMinutes();     // 분 (0에서 59 사이의 정수)
    if (min < 10) min = "0" + min;

    let sec = now.getSeconds();     // 초 (0에서 59 사이의 정수)
    if (sec < 10) sec = "0" + sec;

    // 날짜 & 시간 출력
    const nowTime = year + " " + month + " " + date + " " + hr + " " + min + " " + sec;
    clock.innerText = nowTime;
    setTimeout("printTime()", 1000); // 1000 = 1초 간격으로
}

// 실행문 : 윈도우가 시작하자마자, 작동하시오. (맨 아래에 있어야 함)
window.onload = function () {
  printTime();
};