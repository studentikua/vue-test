<template>
  <nav class="nav">
    <router-link class="nav__item" to="/who"><span>Who?</span></router-link>
    <router-link class="nav__item" to="/where"><span>Where?</span></router-link>
    <router-link class="nav__item" to="/what"><span>What?</span></router-link>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  props: {},

  components: {},

  data() {
    return {

    }
  },

  mounted () {},

  created () {},

  updated () {},

  methods: {},

  watch: {},

  computed: {}
}
</script>

<style lang="scss" scoped>
  .nav {
    &__item {
      position: absolute;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      text-decoration: none;
      
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      width: 20px;
      height: 20px;

      &.router-link-exact-active {
        cursor: default;
        
        span {
          color: #ffcb46;
        }
      }

      &:not(.router-link-exact-active):hover {
        span {
          color: #fff;

          &::after {
            width: 100%;
          }
        }
      }
      
      span {
        color: #373737;
        white-space: nowrap;
        position: relative;
        transition: color .3s ease-in;

        &::after {
          content: '';
          width: 0;
          height: 1px;
          left: 0;
          background-color: #fff;
          position: absolute;
          display: block;
          transition: width .3s ease-in;
        }
      }

      &:nth-child(1) {
        bottom: 19px;
        left: 50%;
        transform: translateX(-20px);
      }

      &:nth-child(2) {
        top: 50%;
        left: 19px;
        transform: rotate(-90deg) translateX(-20px);
      }

      &:nth-child(3) {
        top: 50%;
        right: 19px;
        transform: rotate(90deg) translateX(-20px);
      }
    }
  }
</style>