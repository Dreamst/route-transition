<template>
  <div class="route2-content">
    <blog></blog>
  </div>
</template>
<script>
import { gsap } from "gsap";
import Blog from '@/components/route2/Blog';
export default {
  name: "Route2",
  components: {Blog},
  data() {
    return {
      anim_content: gsap.timeline({ paused: true }),
      anim_route2: gsap.timeline({ paused: true })
    };
  },
  mounted() {
  this.anim_route2
      .fromTo(".box.route2", {width: "47%"}, {border: "1px solid black", duration: .2})
      .to(".box.route1", {  duration: .4, scale: 0.5, opacity: 0.6, ease: "power2.out" }, "<")
      .to(".box.route1", {  duration: .5,  opacity: 0, x: -500, ease: "power4.in" }, "<+.1")

      .to(".header img", { opacity: 1, width: 100, duration: 0.6, ease: "power1.in", marginTop: 38, marginBottom: 10 })
      .to(".header h1", {fontSize: 20,duration: 0.3,y: -10, ease: "power1.in" }, "<+.2")
      .to(".header", { height: 130, duration: 0.4, delay: 0.2,  })
      .to(".box.route2", {
        duration: .7,
        width: "calc(100% - 40px)",
        ease: "power2.out"
      }, "<+.6");
      this.anim_route2.play();
     // Defines animation for content reveal and plays it
      this.anim_content
      .fromTo(".route2-content", {height: "0", display: 'block'},{ height: "auto", y: 50, duration: 1, delay: 1.2 })
      .to(".route2-content", {opacity: 1, y: 0, duration: .5})
      .to(".box.route2", {border: "1px solid white", duration: .5, ease: "power1.out", delay: 0.8})
      
      this.anim_content.play();
  },
  beforeDestroy() {
    this.anim_route2.reverse();
    this.anim_content.reverse();
  }
};
</script>
<style lang="scss">
.route2-content {
  cursor: auto;
  display: none;
  opacity: 0;
}
    
</style>