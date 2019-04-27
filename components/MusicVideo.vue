<template lang="pug">
.music-video
  iframe#ytplayer.setasu(
    type="text/html"
    :width="this.width"
    :height="this.height"
    src="http://www.youtube.com/embed/yvqwnUYhksw"
    frameborder="0"
  )
</template>

<script>
const width = 1000

export default {
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
  padding: 100px;
  background-image: url(~assets/images/bg-movie.png);
  background-size: cover;
}
.setasu {
  display: block;
  margin: 0 auto;
}
</style>
