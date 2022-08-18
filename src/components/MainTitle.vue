<template>
  <div class="title">
    <h1>{{ title }}</h1>

    <div class="title__bg">
      <div class="showreal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    title: String
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
  }

  &__bg {
    width: 578px;
    height: 578px;
    position: absolute;

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
    }
  }
}

.showreal {
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 100%;
  margin-top: -130px;
  margin-left: -130px;
  background: radial-gradient(circle at center, #000 0%, #000 6%, rgba(0,0,0,0) 6%, rgba(0,0,0,0) 100%);
  animation: spin 2.5s linear infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }

  &::before {
    content: url(@/assets/img/showreel-text.svg);
    width: 118px;
    height: 118px;
    position: relative;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
