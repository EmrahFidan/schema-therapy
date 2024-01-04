<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* route transitions */
.route-enter-from{
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active{
  transition: all 0.5s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active{
  transition: all 0.5s ease-in;
}


</style>
