<template>
  <LocalesInfo/>
  <MainLogo/>
  <BurgerMenu :onToggleMenu='onToggleMenu'/>
  <NavMenu :menuStatus="menuStatus"/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainLogo from '@/components/MainLogo.vue'
import LocalesInfo from '@/components/LocalesInfo.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
  data () {
    return {
      menuStatus: ''
    }
  },
  components: {
    NavMenu,
    MainLogo,
    LocalesInfo,
    BurgerMenu
  },
  methods: {
    onToggleMenu (data) {
      this.menuStatus = data.active
    }
  },
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.85s ease;
}
.slide-enter-from {
  left: -100%;
}
.slide-enter-to {
  left: 0%;
}
.slide-leave-from {
  transform: scale(1);
}
.slide-leave-to {
  transform: scale(0.8);
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
