<template>
  <nav class="nav" :class="{ active: menuStatus }">
    <router-link class="nav__item" to="/who"><span>Who?</span></router-link>
    <router-link class="nav__item" to="/where"><span>Where?</span></router-link>
    <router-link class="nav__item" to="/what"><span>What?</span></router-link>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  props: ['menuStatus'],

  components: {},

  data() {
    return {

    }
  },

  mounted () {
    
  },

  created () {},

  updated () {},

  methods: {
    
  },

  watch: {},

  computed: {}
}
</script>

<style lang="scss" scoped>
  .nav {
    @media (max-width: 640px) {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #FFCB46;
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2em;
      transition: all .3s;
      transform: translateX(-100%);

      &.active {
        transform: translateX(0);
      }
    }

    &__item {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      position: absolute;
      width: 20px;
      height: 20px;

      @media (max-width: 1200px) {
        font-size: 14px;
      }

      @media (max-width: 640px) {
        position: relative;
        width: auto;
        height: auto;
        font-size: 18px;
        margin-bottom: 10px;
      }

      &.router-link-exact-active {
        cursor: default;

        span {
          color: #ffcb46;
        }
      }

      @media (hover){
        &:not(.router-link-exact-active):hover {
          span {
            color: #fff;

            &::after {
              width: 100%;
            }
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

      @media (min-width: 641px) {
        &:nth-child(1) {
          bottom: 19px;
          left: 50%;
          transform: translateX(-20px);

          @media (max-width: 1200px) {
            bottom: 11px;
          }
        }

        &:nth-child(2) {
          top: 50%;
          left: 19px;
          transform: rotate(-90deg) translateX(-20px);

          @media (max-width: 1200px) {
            left: 11px;
          }
        }

        &:nth-child(3) {
          top: 50%;
          right: 19px;
          transform: rotate(90deg) translateX(-20px);

          @media (max-width: 1200px) {
            right: 11px;
          }
        }
      }
    }
  }
</style>