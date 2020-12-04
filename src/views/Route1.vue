<template>
  <div class="route1-content" style="cursor: normal">
    <ul class="menu-right">
      <li class="active">
      <router-link to="/route1/introduction">
      Expérience
      </router-link>
      </li>
      <li class="active">
      <router-link to="/route1/formulaire">
      Techs
      </router-link>
      </li>
      <ul>
        <li class="active">Title1</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
      <li class="active">Frameworks/librairies</li>
      <ul>
        <li>VueJS</li>
        <li>Gsap</li>
        <li>Axios</li>
        <li>Jquery</li>
      </ul>
    </ul>
    <router-view>

    </router-view>
    
  </div>
</template>

<script>
import { gsap } from "gsap";
import * as anims from "@/animations/anims-principales";
export default {
  name: "Route1",
  data() {
    return {
      // Initialisation timelines
      anim_content: gsap.timeline({ paused: true }),
      anim_route1: gsap.timeline({ paused: true }),
    };
  },
  mounted() {
    this.anim_route1
      .fromTo(
        ".box.route1",
        { width: "47%" },
        { border: "1px solid black", duration: 0.2 }
      )
      .to(".box.route2", {  duration: .4, scale: 0.5, opacity: 0.6, ease: "power2.out" }, "<")
      .to(".box.route2", {  duration: .5,  opacity: 0, x: 500, ease: "power4.in" }, "<+.1")
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
        ".box.route1",
        {
          duration: 0.5,
          width: "calc(100% - 40px)",
          ease: "power2.in"
        },
        "<+.5"
      )
      .to(".box.route1", {
        position: "relative",
        marginTop: 0,
        left: 0,
        duration: 0,
        top: 0
      })
      .to(".home", { minHeight: "auto", duration: 0 }, "<")
      .to(".box.route1", { width: "100%", duration: 0 }, "<")
      .to(".box.route1 > p", {
        marginLeft: "180px",
        duration: 0.6,
        ease: "power2.out"
      }, "<-.2")
      .to(
        ".box.route1 .top-container h2",
        {
          y: -6,
          duration: 0.4
        },
        "<"
      )
      .to(".box.route1", {border: "1px solid black", width: "100%", duration: 0 }, "<")
      ;
    this.anim_route1.play();

    // Defines animation for content reveal and plays it
    this.anim_content
      .fromTo(
        ".route1-content",
        { height: "0", display: "flex" },
        { height: "auto", y: 50, duration: 1, delay: 1.2 }
      )
      .to(".route1-content", { opacity: 1, y: 0, duration: 0.5 })
      .to(".route1-content .menu-right", { opacity: 1, y: -195, duration: 0 })
      .from(".route1-content .menu-right li", { opacity: 0, x: 20, duration: 0.2, ease: "power1.in", delay: .2 })
      .to(".box.route1", {border: "1px solid white", duration: .5, ease: "power1.out", delay: 0.8})
      ;
      this.anim_content.play();
  },
  beforeDestroy() {
    this.anim_content.reverse();
    this.anim_route1.reverse();
  }
};
</script>
<style lang="scss">

.route1-content {
  cursor: auto;
  display: none;
  opacity: 0;
  ul {
    list-style-type: none;
  }
}
.menu-right {
  opacity: 0;
      padding: 0 65px 0 0px;
  & > li, & > li > a {
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 15px;
    color: #212121;
    .router-link-exact-active{
      color: #3ba460;
    }
  }
  ul {
    padding-left: 20px;
    width: 80px;
    li {
      font-size: 13px;
      margin-bottom: 7px;
      color: #212121;

    }
  }
}
</style>