<template lang="pug">
.music-video
  heading.heading-adj(
    text="Music"
    color="blue"
  )
  .wrap-mv
    .inner
      iframe.setasu(
        type="text/html"
        src="https://www.youtube.com/embed/5Ji3VKWpWwg"
        frameborder="0"
      )
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading
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
  padding: 30px;
}
// iframeをレスポンシブにするための２重ラップ
.wrap-mv {
  margin: 10px auto 0;
  width: 100%;
  max-width: 1000px; // padding-bottomの%指定が広がり続けてしまうためmax-width
}
.inner {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
}
iframe.setasu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
}
</style>
