<template>
  <LocalesInfo/>
  <MainLogo/>
  <NavMenu/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainLogo from '@/components/MainLogo.vue'
import LocalesInfo from './components/LocalesInfo.vue';

export default {
  components: {
    NavMenu,
    MainLogo,
    LocalesInfo
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
  background-color: #BEBEBE;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
