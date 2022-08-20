<template>
  <div class="home">

    <MainTitle title="FULL-CYCLE EVENT AGENCY"/>

    <TextMarquee msg="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle.vue'
import TextMarquee from '@/components/TextMarquee.vue'

export default {
  name: 'HomeView',
  components: {
    MainTitle,
    TextMarquee,
  }
}
</script>