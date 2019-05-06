<template lang="pug">
section.main-visual
  h1.iyu-logo
    img(
      src="~assets/images/iyu-logo-RGB.svg"
      alt="iyu-logo"
    )
  information-summary
  video.mainVisual(
    src="~assets/videos/190430_iyu-webtop-video-20sec3000bit24F.mp4"
    muted
    autoplay
    loop
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
.mainVisual {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}
</style>
