<template>
  <div class="pathDisplay">
    <p>Current path is: {{ currentRouteName }}</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "PathDisplay",
  props: ["path"],
  data() {
    return {
      tl: gsap.timeline({ paused: true })
      
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    }
  },
  watch:{
    $route (to, from){
        this.show = false;
    }
},
  mounted() {
    this.tl.fromTo(".pathDisplay",{ scale: 0, opacity: 0 }, {scale: 1, opacity: 1, duration: .5, ease: "power2.in"})
  }
};
</script>

<style lang="scss" scoped>
.pathDisplay {
  position: absolute;
  top: 30px;
  right: 5%;
  background: #2875ae;
  padding: 0px 15px;
  border-radius: 7px;
  font-family: "open sans";
  font-size: 13px;
  text-align: center;
  width: 160px;
  p {
    color: white;
  }
}
</style>