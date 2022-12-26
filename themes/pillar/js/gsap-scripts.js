// .scroll-blur
// .scroll-opacity
// .slide-left
// .slide-right

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".st_Scroll-layer").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    scrub: false,
    pin: true,
    pinSpacing: false
  });
});

// SCROLL BLUR
gsap.set(".st_Scroll-blur", {
  filter: "blur(50px)",
});
gsap.to(".st_Scroll-blur", {
  scrollTrigger: {
    trigger: ".st_Scroll-blur",
    start:  "top bottom",
    end:    "top 40%",
    scrub: 0.5,
    toggleActions: "restart reverse restart reverse",
    // markers: true
  },
  stagger: 20,
  filter: "blur(0px)"
});

// SCROLL SCALE
gsap.set(".st_Scroll-scale", {
  scale: 1,
});
gsap.to(".st_Scroll-scale", {
  scrollTrigger: {
    trigger: ".st_Scroll-scale",
    start:  "bottom bottom",
    end:    "top 20%",
    scrub: 0.5,
    toggleActions: "restart reverse restart reverse",
    // markers: true
  },
  // stagger: 20,
  scale: 1.5
});

// SCROLL OPACITY
gsap.set(".st_Scroll-opacity", {
  opacity: 0,
  scale: 0.1
});
gsap.to(".st_Scroll-opacity", {
  scrollTrigger: {
    trigger: ".tl-trigger",
    start:  "top 90%",
    end:    "top 30%",
    scrub: 0.5,
    toggleActions: "restart reverse restart reverse",
    // markers: true
  },
  stagger: 2,
  opacity: 1,
  scale: 1
});