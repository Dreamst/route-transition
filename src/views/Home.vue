<template>
  <div class="home">
    <router-link class="elipse-container" to="/">
      <div class="elipse1"></div>
      <div class="elipse2"></div>
    </router-link>
    <div class="header">
      <router-link to="/">
        <img src="../assets/images/undraw.svg" alt />
      </router-link>
      <h1>
        GUI
        <span>Next</span>
      </h1>
    </div>
    <div class="box-container" :class="pageClass">
      <router-link class="box composants" tag="div" to="/composants/introduction">
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

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, suscipit necessitatibus eveniet dolorum iure nihil libero pariatur distinctio incidunt perferendis! Veritatis aliquid quisquam similique repudiandae dignissimos quos rerum ad dolore vel. Accusantium consequatur natus sunt est consectetur magni. Maiores odio quod vero libero dolore autem unde nostrum corporis aliquid tempora quas porro, sint deleniti distinctio, dolor harum cumque, est quia animi eum! Ipsum, explicabo reprehenderit. Natus magni aliquid repellat ab!</p>
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
  background: #4dc879;
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
  background: #45b46d;
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
  padding: 40px;
  border: 1px solid black;
  cursor: pointer;
  font-family: "open sans";

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
    margin-top: 0px;
    font-size: 14px;
    &:first_of-type {
    }
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

  // box composants
  &.composants {
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
  &.typo {
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

.box-container.composants {
  .box.typo {
    &:hover {
      box-shadow: none;
    }
  }
  .box.composants {
    cursor: auto;
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
