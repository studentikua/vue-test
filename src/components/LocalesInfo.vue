<template>
  <div class="locales">
    <div class="locales__drop">
      <button>RU</button>
      <button>UA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalesInfo",
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
  .locales {
    background: url(@/assets/img/icons/👅@2x.png) 50% 50% no-repeat;
    background-size: 15px 18px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: block;
    position: fixed;
    left: 24px;
    top: 28px;
    border: 1px solid rgba(255,255,255, .12);
    z-index: 5;

    @media (max-width: 1200px) {
      width: 34px;
      height: 34px;
      left: 16px;
      top: 18px;
    }

    &__drop {
      position: absolute;
      left: 100%;
      top: 10px;
      display: flex;
    }

    &:hover {
      button {
        opacity: 1;
      }
    }

    button {
      background: transparent;
      outline: none;
      border: none;
      padding: 0;
      color: #373737;
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
      opacity: 0;
      position: relative;
      transition: color .3s ease-in;

      &:hover {
        color: #fff;
        cursor: pointer;

        &::after {
          width: 100%;
        }
      }

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

      &:nth-child(1) {
        transition: opacity .3s ease-in;
      }

      &:nth-child(2) {
        transition: opacity .3s ease-in .3s;
      }
    }
  }
</style>