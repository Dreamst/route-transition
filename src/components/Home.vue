<template>
  <div class="home">
    <router-link class="elipse-container" to="/">
      <div class="elipse1"></div>
      <div class="elipse2"></div>
    </router-link>
    <div class="header"></div>
    <div class="box-container" :class="pageClass">
      <router-link class="box composants" tag="div" to="/composants">
        <div class="top-container">
          <h2>Composants</h2>
          <img src="../assets/images/components.svg" alt />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, suscipit necessitatibus eveniet dolorum iure nihil libero pariatur distinctio incidunt perferendis! Veritatis aliquid quisquam similique repudiandae dignissimos quos rerum ad dolore vel. Accusantium consequatur natus sunt est consectetur magni. Maiores odio quod vero libero dolore autem unde nostrum corporis aliquid tempora quas porro, sint deleniti distinctio, dolor harum cumque, est quia animi eum! Ipsum, explicabo reprehenderit. Natus magni aliquid repellat ab!</p>

        <transition name="fade">
          <router-view name="view1" tag="div"></router-view>
        </transition>
      </router-link>
      <router-link class="box typo" tag="div" to="typographie">
        <div class="top-container">
          <h2>Typographie</h2>
          <img src="../assets/images/typewriter.svg" alt />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error quasi repellat officiis aut iste rerum accusantium eius ad laboriosam!</p>
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
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    pageClass() {
      return this.$route.name;
    }
  },
  watch: {
    $route(to) {
      if (to.name == "composants") {
        //
      } else if (to.name == "typographie") {
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
//header

.header {
  height: 300px;
  // background: #efefef;
}

// Menu

.elipse-container {
  cursor: pointer;
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
  background: #4dc879;
  transform: rotate(2.59deg);
  border-radius: 50%;
}
.elipse2 {
  transition: 0.3s ease-out;
  z-index: 1;
  position: absolute;
  width: 140.33px;
  height: 261.97px;
  left: -72.96px;
  top: -77px;
  border-radius: 50%;
  background: #45b46d;
  transform: rotate(46.5deg);
}

// General / home

.home {
  min-height: 2000px;
  overflow-x: hidden;
}

// Containers

.box {
  align-self: self-start;
  width: 50%;
  margin-top: 170px;
  box-sizing: border-box;
  padding: 40px;
  border: 1px solid white;
  cursor: pointer;
  font-family: "open sans";

  &:nth-child(odd) {
    margin-right: 20px;
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
  & > p {
    max-width: 500px;
  }
  p {
    margin-top: 40px;
    font-size: 14px;
    &:first_of-type {
    }
  }
  &:hover {
    box-shadow: inset 0 0 0 2px black;
  }
  &-container {
    transition-delay: 1s;
    transition: 1s;
    position: relative;
    padding: 200px 20px 0;
    max-width: 1400px;
    margin: auto;
  }

  // box composants
  &.composants {
    position: absolute;
    width: 47%;
    left: 20px;
    top: 0;
  }
  &.typo {
    position: absolute;
    width: 47%;
    right: 20px;
    top: 0;
    .top-container {
      img {
        width: 170px;
      }
    }
  }
}

// Route changing

.box-container.composants {
  .box.typo {
    &:hover {
      box-shadow: none;
    }
  }
  .box.composants {
    &:hover {
      box-shadow: none;
    }
  }
}
.box-container.typographie {
  .box.typo {
    &:hover {
      box-shadow: none;
    }
  }
  .box.composants {
    &:hover {
      box-shadow: none;
    }
  }
}


@media screen and (max-width: 768px) {
}
</style>
