<template>
  <div class="home">
    <router-link class="elipse-container" to="/">
      <div class="elipse1"></div>
      <div class="elipse2"></div>
    </router-link>

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
        <h2>Typographie</h2>
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
import { gsap } from "gsap";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // pageClass: "home"
    };
  },
  computed: {
    pageClass() {
      return this.$route.name;
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   switch(to.name) {
  //     case 'composants':
  //       this.pageClass = 'composants';
  //       break;
  //     case 'typographie':
  //       this.pageClass ='typographie';
  //       break;
  //   }
  //   next();
  // },
  watch: {
    $route(to) {
      if (to.name == "composants") {
        let tl = gsap.timeline();
        tl.to(".typo", { duration:1, x: 3000, ease: "power2.out", display: "none"})
          .to(".composants", { duration: 0.6, width: "100%", ease: "power2.out"}, "+=0.5")
        
      } else {
        window.console.log("nope");
      }
    }
  },
  methods: {
    test() {
      gsap.to(".typo", { duration: 1, x: 100 });
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
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

// Containers

.box {
  
  width: 50%;
  margin-top: 170px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
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
      width: 170px;
    }
  }
  &>p {
    max-width: 260px;
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
    overflow-x: hidden;
    transition-delay: 1s;
    transition: 1s;
    display: flex;
    padding: 20px;

    // Gestion des états

    // Typographie selectionné

    // Composants selectionné
  }

  // Etat au repos


}

// Animations / Transitions

.fade-enter-active {
  animation: fade-in 1s ease-out;
  animation-delay: 3s;

  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}
@keyframes fade-in {
  0% {
    transform: translateY(70px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
}
</style>
