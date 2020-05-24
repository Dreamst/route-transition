<template>
  <div class="typo-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure debitis optio asperiores error magni eaque neque similique quas autem minus quos illo, accusantium laudantium quisquam, fugiat architecto molestiae voluptatibus aut obcaecati? Vero provident optio molestias expedita aliquam, voluptate ad veniam reiciendis aspernatur, distinctio id asperiores. Incidunt eligendi sint nostrum dicta et consequuntur quibusdam perspiciatis modi animi, quisquam fugiat odit commodi deleniti provident iusto necessitatibus deserunt quas soluta sit dolor ipsum reprehenderit at! Vitae officia error molestias quidem iusto, et repellendus libero hic harum necessitatibus quod, illum ipsum ex excepturi. Necessitatibus possimus nisi totam accusamus adipisci dolor maxime deserunt tempore atque dolorem laboriosam perferendis eligendi quae non natus reiciendis dicta eius cum fugiat autem quis, repellendus hic ad id? Veritatis itaque non, nemo doloribus blanditiis fugit totam cum optio quo delectus dolores quibusdam eum aliquam iure adipisci aspernatur atque alias aperiam deleniti esse rerum, eveniet quis sint. Totam laudantium cupiditate, mollitia quaerat adipisci consequuntur, maxime sit possimus officia temporibus impedit itaque ex quo maiores sunt ipsam voluptatibus magni cum saepe quasi blanditiis non quae odit. Fugit consequuntur dignissimos itaque quos quaerat vel saepe, delectus deserunt iste accusantium fugiat laudantium ipsam laborum odit nihil at incidunt. Non provident quia optio consectetur ab deleniti hic adipisci, totam eius corporis. Voluptates doloribus earum quidem quaerat atque velit! Harum dolorum incidunt cum, molestias possimus culpa repellendus totam velit quam dolorem, saepe dolores voluptas quae est suscipit nesciunt nam ratione. Harum voluptatibus voluptatum porro hic veniam non dicta maiores rem saepe, alias quasi quas necessitatibus vero, illum amet architecto nulla sed reiciendis unde molestias consequuntur delectus officia consectetur? Iure quasi laudantium nesciunt deleniti, animi, repellendus odit doloribus quod atque, illo tempore impedit ad incidunt quidem fuga nobis aperiam rem tenetur illum ullam est eaque similique nihil. Et eveniet a praesentium ipsum id accusantium delectus soluta vitae est adipisci odio, officia eaque illum distinctio. Molestiae assumenda fugit in modi ea deleniti? Atque officia, architecto a obcaecati veniam fuga, itaque laboriosam magni odit doloremque quos aut, assumenda dicta accusamus suscipit iusto asperiores sed error enim earum dolorum omnis cumque! Tempore beatae iure nesciunt suscipit, voluptatum laboriosam exercitationem quaerat, aperiam, mollitia perspiciatis fugiat iusto voluptate similique voluptates. Neque, ipsum ullam odit repellat delectus facere. Corrupti, ipsa. Id odio nulla optio veritatis delectus perspiciatis, ratione voluptate libero natus, in molestias laborum cum? Eius rerum, inventore dolore quae ullam similique exercitationem, aperiam nesciunt quidem dolorum, sint corporis rem. Ipsa, dolor?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure debitis optio asperiores error magni eaque neque similique quas autem minus quos illo, accusantium laudantium quisquam, fugiat architecto molestiae voluptatibus aut obcaecati? Vero provident optio molestias expedita aliquam, voluptate ad veniam reiciendis aspernatur, distinctio id asperiores. Incidunt eligendi sint nostrum dicta et consequuntur quibusdam perspiciatis modi animi, quisquam fugiat odit commodi deleniti provident iusto necessitatibus deserunt quas soluta sit dolor ipsum reprehenderit at! Vitae officia error molestias quidem iusto, et repellendus libero hic harum necessitatibus quod, illum ipsum ex excepturi. Necessitatibus possimus nisi totam accusamus adipisci dolor maxime deserunt tempore atque dolorem laboriosam perferendis eligendi quae non natus reiciendis dicta eius cum fugiat autem quis, repellendus hic ad id? Veritatis itaque non, nemo doloribus blanditiis fugit totam cum optio quo delectus dolores quibusdam eum aliquam iure adipisci aspernatur atque alias aperiam deleniti esse rerum, eveniet quis sint. Totam laudantium cupiditate, mollitia quaerat adipisci consequuntur, maxime sit possimus officia temporibus impedit itaque ex quo maiores sunt ipsam voluptatibus magni cum saepe quasi blanditiis non quae odit. Fugit consequuntur dignissimos itaque quos quaerat vel saepe, delectus deserunt iste accusantium fugiat laudantium ipsam laborum odit nihil at incidunt. Non provident quia optio consectetur ab deleniti hic adipisci, totam eius corporis. Voluptates doloribus earum quidem quaerat atque velit! Harum dolorum incidunt cum, molestias possimus culpa repellendus totam velit quam dolorem, saepe dolores voluptas quae est suscipit nesciunt nam ratione. Harum voluptatibus voluptatum porro hic veniam non dicta maiores rem saepe, alias quasi quas necessitatibus vero, illum amet architecto nulla sed reiciendis unde molestias consequuntur delectus officia consectetur? Iure quasi laudantium nesciunt deleniti, animi, repellendus odit doloribus quod atque, illo tempore impedit ad incidunt quidem fuga nobis aperiam rem tenetur illum ullam est eaque similique nihil. Et eveniet a praesentium ipsum id accusantium delectus soluta vitae est adipisci odio, officia eaque illum distinctio. Molestiae assumenda fugit in modi ea deleniti? Atque officia, architecto a obcaecati veniam fuga, itaque laboriosam magni odit doloremque quos aut, assumenda dicta accusamus suscipit iusto asperiores sed error enim earum dolorum omnis cumque! Tempore beatae iure nesciunt suscipit, voluptatum laboriosam exercitationem quaerat, aperiam, mollitia perspiciatis fugiat iusto voluptate similique voluptates. Neque, ipsum ullam odit repellat delectus facere. Corrupti, ipsa. Id odio nulla optio veritatis delectus perspiciatis, ratione voluptate libero natus, in molestias laborum cum? Eius rerum, inventore dolore quae ullam similique exercitationem, aperiam nesciunt quidem dolorum, sint corporis rem. Ipsa, dolor?</p>
    
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "Typographie",
  components: {},
  data() {
    return {
      anim_content: gsap.timeline({ paused: true }),
      anim_typo: gsap.timeline({ paused: true })
    };
  },
  mounted() {
  this.anim_typo
      .fromTo(".box.typo", {width: "47%"}, {border: "1px solid black", duration: .2})
      .to(".box.composants", {  duration: 0.5, scale: 0.8, opacity: 0, ease: "power2.in" }, "<")
      .to(".header img", { opacity: 1, width: 100, duration: 0.6, ease: "power1.in", marginTop: 38, marginBottom: 10 })
      .to(".header h1", {fontSize: 20,duration: 0.3,y: -10, ease: "power1.in" }, "<+.2")
      .to(".header h1 span", {fontSize: 22,duration: 0.3, ease: "power1.in" }, "<")
      .to(".header", { height: 130, duration: 0.4, delay: 0.2,  })
      .to(".box.typo", {
        duration: .7,
        width: "calc(100% - 40px)",
        ease: "power2.out"
      }, "<+.6")
      this.anim_typo.play();
     // Defines animation for content reveal and plays it
      this.anim_content
      .fromTo(".typo-content", { height: "0", display: 'block'},{ height: "auto", y: 50, duration: 1, delay: 1.2 })
      .to(".typo-content", {opacity: 1, y: 0, duration: .5})
      this.anim_content.play();
  },
  beforeDestroy() {
    this.anim_typo.reverse();
  }
};
</script>
<style lang="scss">
.typo-content {
  display: none;
  opacity: 0;
}
    
</style>