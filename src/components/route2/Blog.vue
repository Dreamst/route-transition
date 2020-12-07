<template>
<div class="blog">
   <div class="container">
    
    <div v-for="post in allPosts.posts" :key="post.ID" class="post">
      <div class="title">
        <span class="code">post.title</span>
        <h2>{{ post.title }}</h2>
      </div>
      <span class="code">post.excerpt</span>
      <div class="excerpt" v-html="post.excerpt"></div>
      <p class="author">Author: {{ post.author.name }}</p>
    </div>
  </div>
</div>
 
</template>

<script>
import Blog from "@/components/route2/BlogItem";
import { gsap } from "gsap";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Blog",
  data() {
    return {
    };
  },
  
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: {
    ...mapGetters(["allPosts"])
  },
  created() {
    this.fetchPosts();
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4%;
  margin-top: 40px;
  margin-left: 10px;
}
.post {
  opacity: 0;

  span.code {
    background: #7a90c3;
    padding: 1px 7px 3px;
    font-size: 12px;
    border-radius: 4px;
    margin-right: 7px;
    position: relative;
    color: white;
    width: fit-content;
    top: -12px;
    position: absolute;
    left: -10px;
  }
  .title {
    padding: 10px;
    background: #4463ad;
    border-radius: 5px;

    h2 {
      position: relative;
      font-size: 17px;
      color: white;
      margin: 0;
    }
  }

  & > span.code {
    position: relative;
    top: 8px;
    left: -9px;
    box-shadow: 1px 1px 4px 1px #c5c5c5;
  }
  .excerpt {
    background: #f3f3f3;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    padding: 15px;
    color: #4d555a;
  }
  p.author {
    margin: 0;
    font-size: 12px;
    padding: 6px 12px;
    background: #d4d4d4;
    display: block;
    width: fit-content;
    color: #060606;
    margin-left: 20px;
    border-radius: 2px;
    font-style: italic;
    font-weight: bold;
  }
}
</style>