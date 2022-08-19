<template>
  <div class="home">

    <MainTitle title="FULL-CYCLE EVENT AGENCY"/>

    <TextMarquee msg="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY"/>

    <div class="transition">
      <div class="transition__bg"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle.vue'
import TextMarquee from '@/components/TextMarquee.vue'

export default {
  name: 'HomeView',
  components: {
    MainTitle,
    TextMarquee,
  }
}
</script>

<style lang="scss" scoped>
  .transition {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    pointer-events: none;

    &__bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #5a82f1;
      transform: translateX(-100%);
    }
  }
</style>
