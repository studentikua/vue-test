<template>
  <div class="marquee">
    <div class="marquee__inner">
      <div class="marquee__inner-text">
        <marquee-text :repeat="10" class="mirror">
          {{ msg }}
        </marquee-text>

        <marquee-text :repeat="10">
          {{ msg }}
        </marquee-text>
      </div>
    </div>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  name: "TextMarquee",
  props: {
    msg: String
  },

  components: {
    MarqueeText
  },

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
  .marquee {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__inner {
      position: fixed;
      width: 150vw;
      font-style: italic;
      font-weight: 700;
      font-size: 52px;
      line-height: 110%;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px rgba(#373737, .1);
      background-clip: text;
      left: 50%;
      transform: translateX(-50%);

      &-text {
        transform: rotate(-30deg);

        .mirror {
          transform: scale(-1, -1);
        }
      }
    }
  }
</style>