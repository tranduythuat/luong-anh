gsap.registerPlugin(ScrollTrigger);

function gsapFlipIn(selector) {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.to(el, {
        rotateY: 0,
        scale: 1,
        filter: "brightness(1)",
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }
// Timeline mở phong bì + hiện nội dung
document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    // 1) Bì thư xuất hiện với hiệu ứng flip-in
    tl.add(gsapFlipIn(".animate-flip"))

    .addLabel("textStart", "+=0.8")

    // 2) Sau đó nội dung xuất hiện lần lượt
    tl.from(".top-text", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, 'textStart')
    .from(".husband-name", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.3")
    .from(".wife-name", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    },"-=0.6")
    .from(".date", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    },"-=0.5")
    .from(".subtext", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    },"-=0.6")
});


