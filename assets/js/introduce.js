// introduce section 마우스 오버시 내용 띄우기 (반복문으로 바꾸기!!)

const Select1 = document.querySelector(".select01");
const Select2 = document.querySelector(".select02");
const Select3 = document.querySelector(".select03");
const Select4 = document.querySelector(".select04");
const Select5 = document.querySelector(".select05");
const Select6 = document.querySelector(".select06");
const Select7 = document.querySelector(".select07");
const Intro1 = document.querySelector(".person01");
const Intro2 = document.querySelector(".person02");
const Intro3 = document.querySelector(".person03");
const Intro4 = document.querySelector(".person04");
const Intro5 = document.querySelector(".person05");
const Intro6 = document.querySelector(".person06");
const Intro7 = document.querySelector(".person07");

Select1.addEventListener("mouseenter", () => {
    Select1.style.cursor = "cell";
    Select1.style.color = "#8c89b0";
    Intro1.style.display = "block";
});
Select1.addEventListener("mouseleave", () => {
    Select1.style.color = "#ffffff";
    Intro1.style.display = "none";
});

Select2.addEventListener("mouseenter", () => {
    Select2.style.cursor = "cell";
    Select2.style.color = "#8c89b0";
    Intro2.style.display = "block";
});
Select2.addEventListener("mouseleave", () => {
    Select2.style.color = "#ffffff";
    Intro2.style.display = "none";
});

Select3.addEventListener("mouseenter", () => {
    Select3.style.cursor = "cell";
    Select3.style.color = "#8c89b0";
    Intro3.style.display = "block";
});
Select3.addEventListener("mouseleave", () => {
    Select3.style.color = "#ffffff";
    Intro3.style.display = "none";
});

Select4.addEventListener("mouseenter", () => {
    Select4.style.cursor = "cell";
    Select4.style.color = "#8c89b0";
    Intro4.style.display = "block";
});
Select4.addEventListener("mouseleave", () => {
    Select4.style.color = "#ffffff";
    Intro4.style.display = "none";
});

Select5.addEventListener("mouseenter", () => {
    Select5.style.cursor = "cell";
    Select5.style.color = "#8c89b0";
    Intro5.style.display = "block";
});
Select5.addEventListener("mouseleave", () => {
    Select5.style.color = "#ffffff";
    Intro5.style.display = "none";
});

Select6.addEventListener("mouseenter", () => {
    Select6.style.cursor = "cell";
    Select6.style.color = "#8c89b0";
    Intro6.style.display = "block";
});
Select6.addEventListener("mouseleave", () => {
    Select6.style.color = "#ffffff";
    Intro6.style.display = "none";
});

Select7.addEventListener("mouseenter", () => {
    Select7.style.cursor = "cell";
    Select7.style.color = "#8c89b0";
    Intro7.style.display = "block";
});
Select7.addEventListener("mouseleave", () => {
    Select7.style.color = "#ffffff";
    Intro7.style.display = "none";
});