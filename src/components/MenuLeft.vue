<template>
  <div class="menu-left">
    <ul >
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuLeft",
  props: {
    menuData: Array,
  },
  data() {
    return {
      
    };
  }
};
</script>

<style lang="scss">
.menu-left {
  display: none;
}
</style>