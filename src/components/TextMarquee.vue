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
      width: 200vw;
      font-style: italic;
      font-weight: 700;
      font-size: 52px;
      line-height: 110%;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px rgba(#373737, .1);
      background-clip: text;
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 1200px) {
        font-size: 42px;
      }

      @media (max-width: 640px) {
        font-size: 28px;
      }

      &-text {
        transform: rotate(-30deg);

        @media (max-width: 1200px) and (orientation: landscape) { 
          transform: rotate(-36.61deg);
        }

        @media (max-width: 768px) and (orientation: portrait) { 
          transform: rotate(-53.2deg);
        }

        @media (max-width: 640px) and (orientation: portrait) {
          transform: rotate(-57deg);
        }

        .mirror {
          transform: scale(-1, -1);
        }
      }
    }
  }
</style>