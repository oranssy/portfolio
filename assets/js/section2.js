// section2 : personality 마우스 오버시 내용 띄우기

// const Select1 = document.querySelector(".select01");

// Select1.addEventListener("mouseenter", () => {
//     Select1.style.cursor = "cell";
//     Select1.style.color = "#8c89b0";
//     Intro1.style.display = "block";
// });
// Select1.addEventListener("mouseleave", () => {
//     Select1.style.color = "#ffffff";
//     Intro1.style.display = "none";
// });

const { gsap } = window;

gsap.timeline()
    .set(".person", { autoAlpha: 1 })
    .from(".person__item-innerTitle", {
        delay: 1,
        duration: 0.85,
        xPercent: 25,
        yPercent: 125,
        stagger: 0.095,
        skewY: gsap.utils.wrap([-8, 8]),
        ease: "expo.out",
    })
    .set(".person", { pointerEvents: "all" });

    gsap.defaults({
        duration: 0.55,
        ease: "expo.out",
    });

    const menuItems = document.querySelectorAll(".person__item");

    menuItems.forEach( (item) => {
        const imageWrapper = item.querySelector(".person__item-image_wrap");
        const imageWrapperBounds = imageWrapper.getBoundingClientRect();

        let itemBounds = item.getBoundingClientRect();

        const onMouseEnter = () => {
            gsap.set(imageWrapper, {
                scale: 0.8,
                xPercent: 25,
                yPercent: 50,
                rotation: -15,
            });
            gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
        };

        const onMouseLeave = () => {
            gsap.to(imageWrapper, {
                opacity: 0,
                yPercent: -50,
                xPercent: 25,
                scale: 0.8,
                rotation: -15,
            });
        };

        const onMouseMove = ({ x, y }) => {
            let yOffset = itemBounds.top / imageWrapperBounds.height;
            yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

            gsap.to(imageWrapper, {
                duration: 1.25,
                x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
                y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
            });
        };


            item.addEventListener("mouseenter", onMouseEnter);
            item.addEventListener("mouseleave", onMouseLeave);
            item.addEventListener("mousemove", onMouseMove);

            window.addEventListener("resize", () => {
                itemBounds = item.getBoundingClientRect();
        });
    });

