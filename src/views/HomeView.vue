<template>
  <div class="home">
    <HomePage msg="Hola User !!! " />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
};
</script>

<style>
@import "../../css/main.css";
</style>
