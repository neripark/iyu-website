<template lang="pug">
section.music-video
  heading(
    text="Music"
    color="blue"
  )
  .wrap-mv
    .inner
      iframe.setasu(
        type="text/html"
        src="https://www.youtube.com/embed/5Ji3VKWpWwg"
        frameborder="0"
        allowfullscreen
      )
  .wrap-mv
    .inner
      iframe.setasu(
        type="text/html"
        src="https://www.youtube.com/embed/h4QUsVf9f0c"
        frameborder="0"
        allowfullscreen
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
  padding: 0 $side-padding-pc 100px;
  background-image: url(~assets/images/bg-movie.jpg);
  background-position: right -150px top 0px;
  background-size: cover;
  @include mq(tb) {
    background-position: right -500px top 0px;
  }
  @include mq() {
    padding: 0 $side-padding-sp 50px;
    background-size: unset;
  }
  @include mq(ssm) {
    background-position: right -550px top 0px;
  }
  @include mq(fhd) {
    background-position: unset;
  }
}
// iframeをレスポンシブにするための２重ラップ
.wrap-mv {
  margin: 10px auto 0;
  width: 100%;
  max-width: 1000px; // padding-bottomの%指定が広がり続けてしまうためmax-width
  &:not(:first-of-type) {
    margin-top: 45px;
    @include mq(fhd) {
      margin-top: 30px;
    }
  }
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
}
</style>
