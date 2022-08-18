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
