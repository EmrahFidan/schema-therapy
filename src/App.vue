<template>
  <div>
    <nav>
      <div class="links">
        <router-link to="/">HomePage</router-link>
        <router-link to="/about">Test</router-link>
        <router-link to="/test">Schemas</router-link>
      </div>

      <div class="dark-light">
        <label class="switch">
          <input type="checkbox" id="darkmode-toggle" @change="switchTheme" />
          <span class="slider"></span>
        </label>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>

  <div class="contact">
    contact
  </div>
</template>

<style>
@import "../css/main.css";
</style>

<script>
export default {
  mounted() {
    // Check user preference in local storage and set dark mode accordingly
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.getElementById("darkmode-toggle").checked = true;
      this.switchTheme();
    }
  },
  methods: {
    switchTheme() {
      const toggleSwitch = document.getElementById("darkmode-toggle");
      if (toggleSwitch.checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
  },
};
</script>
