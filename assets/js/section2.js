// 마우스 오버 시 내용 띄우기

const { gsap } = window;

gsap.timeline()
    // .set(".person__item", { autoAlpha: 1 })       // .person
    // .from(".person__item-innertext", {
    //     delay: 1,
    //     duration: 2.5,     // 0.85
    //     xPercent: 25,
    //     yPercent: 125,
    //     stagger: 0.095,
    //     skewY: gsap.utils.wrap([-8, 8]),
    //     ease: "expo.out",
    // })
    // .set(".person__item", { pointerEvents: "all" });       // .person

    // gsap.defaults({
    //     duration: 0.55,
    //     ease: "expo.out",
    // });

    const personItems = document.querySelectorAll(".person__item");

    personItems.forEach( (item) => {
        const imageWrap = item.querySelector(".person__item-image_wrap");
        const imageWrapBounds = imageWrap.getBoundingClientRect();

        let itemBounds = item.getBoundingClientRect();

        const onMouseEnter = () => {
            gsap.set(imageWrap, {
                scale: 0.8,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                // xPercent: 25,
                // yPercent: 50,
                // rotation: -15,
            });
            gsap.to(imageWrap, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
        };

        const onMouseLeave = () => {
            gsap.to(imageWrap, {
                opacity: 0,
                yPercent: -50,
                xPercent: 25,
                scale: 0.8,
                rotation: -15,
            });
        };

        const onMouseMove = ({ x, y }) => {
            let yOffset = itemBounds.top / imageWrapBounds.height;
            yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

            gsap.to(imageWrap, {
                duration: 1.25,
                // x: Math.abs(x - itemBounds.left) - imageWrapBounds.width / 1.55,
                // y: Math.abs(y - itemBounds.top) - imageWrapBounds.height / 2 - yOffset,
            });
        };


            item.addEventListener("mouseenter", onMouseEnter);
            item.addEventListener("mouseleave", onMouseLeave);
            item.addEventListener("mousemove", onMouseMove);

        //     window.addEventListener("resize", () => {
        //         itemBounds = item.getBoundingClientRect();
        // });
    });

