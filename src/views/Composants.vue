<template>
  <div class="composants-content">
    <menu-left :menuData = "this.treeData">

    </menu-left>
    <ul class="menu-right">
      <li class="active">
      <router-link to="/composants/introduction">
      introduction
      </router-link>
      </li>
      <li class="active">
      <router-link to="/composants/formulaire">
      Formulaire
      </router-link>
      </li>
      <ul>
        <li class="active">Input</li>
        <li>Radio button</li>
        <li>Popover</li>
        <li>Select</li>
        <li>DropDown</li>
      </ul>
      <li class="active">Général</li>
      <ul>
        <li>Boutons</li>
        <li>Etapes</li>
        <li>component</li>
        <li>component</li>
        <li>component</li>
        <li>component</li>
      </ul>
    </ul>
    <router-view>

    </router-view>
    
  </div>
</template>

<script>
import { gsap } from "gsap";
import MenuLeft from '@/components/MenuLeft';
export default {
  name: "Composants",
  components: { MenuLeft },
  data() {
    return {
      anim_content: gsap.timeline({ paused: true }),
      anim_composants: gsap.timeline({ paused: true }),

      treeData: [
          {
            name: "Formulaire",
            children: [
              {name: "Input"},
              {name: "Radio button"},
              {name: "Popover"},
              {name: "Select"},
              {name: "Dropdown"}
            ]
          },
          {
            name: "Général",
            children: [
              {name: "Boutons"},
              {name: "Etapes"},
              {name: "Composants"},
              {name: "Composants"},
              {name: "Composants"},
            ]
          },
        ]
    };
  },
  mounted() {
    this.anim_composants
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
    this.anim_composants.play();

    // Defines animation for content reveal and plays it
    this.anim_content
      .fromTo(
        ".composants-content",
        { height: "0", display: "flex" },
        { height: "auto", y: 50, duration: 1, delay: 1.2 }
      )
      .to(".composants-content", { opacity: 1, y: 0, duration: 0.5 })
      .to(".composants-content .menu-right", { opacity: 1, y: -195, duration: 0 })
      .from(".composants-content .menu-right li", { opacity: 0, x: 20, duration: 0.2, ease: "power1.in", delay: .2 })
      .to(".box.composants", {border: "1px solid white", duration: .5, ease: "power1.out", delay: 0.8})
      ;
    this.anim_content.play();
  },
  beforeDestroy() {
    this.anim_composants.reverse(0);
  }
};
</script>
<style lang="scss">
.composants-content {
  display: none;
  opacity: 0;
  ul {
    list-style-type: none;
  }
}
.menu-right {
  opacity: 0;
      padding: 0 65px 0 15px;
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