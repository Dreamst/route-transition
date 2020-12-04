import { gsap } from 'gsap';
const anim_content = gsap.timeline({ paused: true });
const anim_route1 = gsap.timeline({ paused: true });

// Sets Route1 content animation
function init_anim_content() {
    anim_content
        .fromTo(
            ".composants-content",
            { height: "0", display: "flex" },
            { height: "auto", y: 50, duration: 1, delay: 1.2 }
        )
        .to(".composants-content", { opacity: 1, y: 0, duration: 0.5 })
        .to(".composants-content .menu-right", { opacity: 1, y: -195, duration: 0 })
        .from(".composants-content .menu-right li", { opacity: 0, x: 20, duration: 0.2, ease: "power1.in", delay: .2 })
        .to(".box.composants", { border: "1px solid white", duration: .5, ease: "power1.out", delay: 0.8 });
        
}

// Sets intro animation for Route1
// action = play, pause, resume
function init_anim_route1() {
    anim_route1
      .fromTo(
        ".box.composants",
        { width: "47%" },
        { border: "1px solid black", duration: 0.2 }
      )
      .to(
        ".typo",
        { duration: 0.5, scale: 0.8, opacity: 0, ease: "power2.in" },
        "<"
      )
      .to(".header img", {
        opacity: 1,
        width: 100,
        duration: 0.6,
        ease: "power1.in",
        marginTop: 38,
        marginBottom: 10
      }, "<+.2")
      .to(
        ".header h1",
        { fontSize: 20, duration: 0.4, y: -10, ease: "power1.in" },
        "<+.2"
      )
      .to(
        ".header h1 span",
        { fontSize: 22, duration: 0.4, ease: "power1.in" },
        "<"
      )
      .to(".header", { height: 130, duration: 0.5, delay: 0.2 }, "<+.2")
      .to(
        ".box.composants",
        {
          duration: 0.5,
          width: "calc(100% - 40px)",
          ease: "power2.in"
        },
        "<+.5"
      )
      .to(".box.composants", {
        position: "relative",
        marginTop: 0,
        left: 0,
        duration: 0,
        top: 0
      })
      .to(".home", { minHeight: "auto", duration: 0 }, "<")
      .to(".box.composants", { width: "100%", duration: 0 }, "<")
      .to(".box.composants > p", {
        marginLeft: "180px",
        duration: 0.6,
        ease: "power2.out"
      }, "<-.2")
      .to(
        ".box.composants .top-container h2",
        {
          y: -6,
          duration: 0.4
        },
        "<"
      )
      .to(".box.composants", {border: "1px solid black", width: "100%", duration: 0 }, "<")
      ;
}


export { anim_content, anim_route1, init_anim_content, init_anim_route1};