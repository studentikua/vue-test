<template>
  <div class="title" @mousemove="parallax">
    <h1 class="title__move">{{ title }}</h1>

    <div class="title__bg">
      <ShowReal/>
    </div>
  </div>
</template>

<script>
import ShowReal from '@/components/ShowReal.vue'
export default {
  name: 'MainTitle',
  components: {
    ShowReal
  },
  props: {
    title: String
  },
  methods: {
    parallax(e) {
      document.querySelectorAll(".title__move").forEach((layer) => {
        const speed = .5;
        const x = (window.innerWidth - e.pageX * speed) / 50;
        const y = (window.innerHeight - e.pageY * speed) / 50;

        layer.style.transform = `translateX(-${x}px) translateY(-${y}px)`;
      });
    }
  },
}
</script>


<style lang="scss" scoped>
.title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &__move {
    transition: transform .1s;
  }

  h1 {
    font-weight: 700;
    font-size: 82px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: #373737;
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1200px) {
      font-size: 58px;
      max-width: 724px;
    }

    @media (max-width: 768px) {
      max-width: 568px;
    }

    @media (max-width: 640px) {
      font-size: 34px;
      max-width: 333px;
    }
  }

  &__bg {
    width: 578px;
    height: 578px;
    position: absolute;

    @media (max-width: 1200px) {
      width: 482px;
      height: 482px;
    }

    @media (max-width: 640px) {
      width: 294px;
      height: 294px;
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate3d(0, 0, 0);
      background-color: #FFCB46;
      border-radius: 50%;
      filter: blur(76px);

      @media (max-width: 640px) {
        filter: blur(46.3568px);
      }
    }
  }
}
</style>
