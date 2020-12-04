<template>
  <div class="home">
    <router-link class="elipse-container" to="/home">
      <div class="elipse1"></div>
      <div class="elipse2"></div>
    </router-link>
    <path-display v-bind:path="path"></path-display>
    <div class="header">
      <router-link to="/home">
        <img src="../assets/images/undraw.svg" alt />
      </router-link>
      <h1>Seamless route transition experiment</h1>
    </div>
    <div class="box-container" :class="pageClass">
      <router-link class="box route1" tag="div" to="/route1">
        <div class="top-container">
          <h2>Resume</h2>
          <img src="../assets/images/components.svg" alt />
        </div>

        <p>
          A front-end developer links together the world of design and
          technology, packaging up the utility of the back end in an inviting
          way for users to interact with. They take website design files and
          convert them into HTML, JavaScript (JS) and/or CSS code - the core
          elements of front-end development. This includes design/layout,
          content, buttons, images, navigation, and internal links.
        </p>

        <transition name="fade">
          <router-view name="view1" tag="div"></router-view>
        </transition>
      </router-link>
      <router-link class="box route2" tag="div" to="/route2">
        <div class="top-container">
          <h2>Blog</h2>
          <img src="../assets/images/typewriter.svg" alt />
        </div>

        <p>
          The WordPress REST API provides an interface for applications to
          interact with your WordPress site by sending and receiving data as
          JSON (JavaScript Object Notation) objects.
        </p>
        <transition name="fade">
          <router-view name="view2"></router-view>
        </transition>
      </router-link>
      <!-- <div class="box javascript">
        <h2>Javascript</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error quasi repellat officiis aut iste rerum accusantium eius ad laboriosam!</p>
      </div>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { gsap } from "gsap";
import PathDisplay from "@/components/PathDisplay";

export default {
  name: "Home",
  components: {
    PathDisplay
  },
  data() {
    return {
      animOn: true
    };
  },
  computed: {
    pageClass() {
      return this.$route.name;
    },
    path() {
      return this.$router.currentRoute.path;
    }
  },
  watch: {
    $route(to) {
      if (to.name == "route1") {
        //
      } else if (to.name == "route1") {
        // window.console.log("nope");
      } else if (to.name == "home") {
        //
      }
    }
  },
  methods: {},
  mounted() {
    // Defines animation when componant is selected
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}

.home {
  position: relative;
}
//header

.header {
  height: 340px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 210px;
    position: relative;
    right: 10px;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  h1 {
    font-family: "open sans";
    font-size: 50px;
    color: #313131;
    margin: 0;
    span {
      font-size: 70px;
    }
  }
}

// Menu

.elipse-container {
  cursor: pointer;
  position: fixed;
  z-index: 9999;

  &:hover {
    .elipse1 {
      width: 170.74px;
    }
    .elipse2 {
      width: 170.74px;
    }
  }
}
.elipse1 {
  transition: 0.3s ease;
  z-index: 2;
  position: absolute;
  width: 150.74px;
  height: 179.04px;
  left: -83.92px;
  top: -117px;
  background: #2e81bf;
  transform: rotate(2.59deg);
  border-radius: 50%;
}
.elipse2 {
  transition: 0.6s ease-out;
  z-index: 1;
  position: absolute;
  width: 140.33px;
  height: 261.97px;
  left: -72.96px;
  top: -77px;
  border-radius: 50%;
  background: #5692bf;
  transform: rotate(46.5deg);
}

// General / home

.home {
  min-height: 2000px;
  overflow-x: hidden;
}

// Containers
.box-container.home {
  .box {
    &:hover {
      box-shadow: inset 0 0 0 2px black;
    }
  }
}

.box {
  transform-origin: center;
  align-self: self-start;
  width: 50%;
  box-sizing: border-box;
  padding: 23px 42px;
  border: 1px solid black;
  cursor: pointer;
  font-family: "open sans";
  &.router-link-exact-active {
    cursor: auto;
  }
  .top-container {
    display: flex;
    align-items: center;
    h2 {
      margin: 0 40px 0 0;
    }
    img {
      width: 140px;
    }
  }
  
  p {
    
    margin-top: 0px;
    font-size: 14px;

  }
  & > p {
    max-width: 500px;
    margin-top: 15px;
  }

  &-container {
    transition-delay: 1s;
    transition: 1s;
    position: relative;
    padding: 0 20px 0;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 70px;
  }

  // box route1
  &.route1 {
    position: absolute;
    width: 47%;
    left: 20px;
    top: 0;
    .top-container {
      img {
        margin-bottom: 21px;
      }
    }
  }
  &.route2 {
    position: absolute;
    width: 47%;
    right: 20px;
    top: 0;
    .top-container {
      img {
        width: 156px;
        position: relative;
        bottom: 10px;
      }
    }
  }
}

// Route changing

.box-container.route1 {
  .box.route2 {
    &:hover {
      box-shadow: none;
    }
  }
  .box.route1 {
    cursor: auto;
    &:hover {
      box-shadow: none;
    }
  }
}
.box-container.route2 {
  .box.route2 {
    &:hover {
      box-shadow: none;
    }
  }
  .box.route1 {
    &:hover {
      box-shadow: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .box {
    .top-container {
      flex-direction: column;
      align-items: start;
      h2 {
        margin-top: 40px;
      }
    }
  }
}
</style>
