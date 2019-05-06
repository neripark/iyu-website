<template lang="pug">
section.main-visual
  h1.iyu-logo
    img(
      src="~assets/images/iyu-logo-RGB.svg"
      alt="iyu-logo"
    )
  information-summary
  video.bg-movie(
    src="~assets/videos/190430_iyu-webtop-video-20sec3000bit24F.mp4"
    muted
    autoplay
    loop
  )
  img.bg-photo(
    src="~assets/images/bg-main-visual-sp.png"
    alt="background"
  )
    //- TODO: posterの設定
</template>

<script>
import InformationSummary from '~/components/InformationSummary'

export default {
  components: {
    InformationSummary
  }
}
</script>

<style lang="scss" scoped>
.main-visual {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @include mq(tb) {
    flex-direction: column;
  }
}
.iyu-logo {
  width: 495px;
  text-align: center;
  @include mq(tb) {
    width: 70%;
  }
  @include mq() {
    width: 100%;
    padding: 30px 5%;
  }
}
.bg-movie {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  @include mq() {
    display: none;
  }
}
.bg-photo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: none;
  @include mq() {
    display: block;
  }
}
</style>
