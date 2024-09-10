var t1 = gsap.timeline() 
t1.from("#nav h3", {
    y: -50,
    duration: 1,
    delay: 0.6,
    opacity: 0,
    stagger: 0.3,
})

t1.from("#main h1", {
    x: -500,
    duration: 0.9,
    opacity: 0,
    stagger: 0.4,
})

t1.from("img", {
    x: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.6,
    rotate: 45,
})