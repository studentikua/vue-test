<template>
  <div class="showreal"></div>
</template>

<script>
export default {
  name: 'ShowReal'
}
</script>

<style scoped lang="scss">
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

  @media (max-width: 640px) {
    margin-top: -70px;
  }

  &:hover {
    animation-play-state: running;
  }

  &::before {
    content: '';
    background: url(@/assets/img/showreel-text.svg) 50% 50% no-repeat;
    background-size: contain;
    width: 118px;
    height: 118px;
    position: relative;
    display: block;

    @media (max-width: 1200px) {
      width: 112px;
      height: 112px;
    }

    @media (max-width: 640px) {
      width: 77px;
      height: 77px;
    }
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
