<template>
  <button class="burger" 
        @click="toggleMenu"
        :class="{ active: active }">
    <span></span>
    <span></span>
  </button>
</template>

<script>

export default {
  name: "BurgerMenu",
  props: ['onToggleMenu'],

  components: {},

  data() {
    return {
      active: false
    }
  },

  mounted () {},

  created () {},

  updated () {},

  methods: {
    toggleMenu() {
      this.active = !this.active

      this.onToggleMenu({active: this.active})
    }
  },

  watch: {},

  computed: {}
}
</script>

<style lang="scss" scoped>
  .burger {
    flex-wrap: wrap;
    flex-direction: column;
    width: 22px;
    height: 10px;
    cursor: pointer;
    overflow: hidden;
    justify-content: space-around;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    position: fixed;
    right: 16px;
    top: 28px;
    z-index: 6;
    display: none;

    @media (max-width: 640px) {
      display: flex;
    }
      
    &.active {
      span {
        background-color: #fff;

        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
    }
    
    span {
      width: 100%;
      height: 1px;
      background-color: #000;
      transition: all 0.25s;
    }
  }
</style>