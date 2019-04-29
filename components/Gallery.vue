<template lang="pug">
.live-info
  heading.heading-adj(
    text="Gallery"
    color="blue"
  )
  carousel
    slide
      p.test hoge
    slide
      p.test fuga
    slide
      p.test piyo
</template>

<script>
import Heading from '~/components/Heading.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Heading,
    Carousel,
    Slide
  }
}
</script>


<style lang="scss" scoped>
.live-info {
  background: $white;
  padding-bottom: 50px;
}
.heading-adj {
  padding: 30px 0;
}
</style>
