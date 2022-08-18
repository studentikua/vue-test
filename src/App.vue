<template>
  <MainLogo/>
  <NavMenu/>
  <router-view/>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainLogo from '@/components/MainLogo.vue'

export default {
  components: {
    NavMenu,
    MainLogo
}
}
</script>

<style lang="scss">
@import "./assets/fonts/stylesheet.css";

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Grtsk Giga', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #373737;
  overflow: hidden;
  position: relative;
  height: 100%;
  background-color: #e5e5e5;
}
</style>
