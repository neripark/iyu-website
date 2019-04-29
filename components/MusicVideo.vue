<template lang="pug">
.music-video
  heading.heading-adj(
    text="Music"
    color="blue"
  )
  iframe#ytplayer.setasu(
    type="text/html"
    :width="this.width"
    :height="this.height"
    src="https://www.youtube.com/embed/yvqwnUYhksw"
    frameborder="0"
  )
</template>

<script>
import Heading from '~/components/Heading.vue'
const width = 1000

export default {
  components: {
    Heading
  },
  data() {
    return {
      width: width,
      height: (width * 9) / 16
    }
  }
}
</script>

<style lang="scss" scoped>
.music-video {
  width: 100%;
  padding-bottom: 100px;
  background-image: url(~assets/images/bg-movie.png);
  background-size: cover;
}
.heading-adj {
  padding: 50px 30px;
}
.setasu {
  display: block;
  margin: 0 auto;
}
</style>
