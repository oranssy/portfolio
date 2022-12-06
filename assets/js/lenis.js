// Smooth Scroll (lenis 효과)
const lenis = new Lenis({
    duration: 2,
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    // direction: 'vertical', // vertical, horizontal
    // gestureDirection: 'vertical', // vertical, horizontal, both
})
//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)