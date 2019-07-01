<template lang="pug">
section.main-visual
  h1.iyu-logo
    img(
      src="~assets/images/iyu-logo-RGB.svg"
      alt="iyu-logo"
    )
  information-summary
  no-ssr
    video.bg-movie(
      v-if="!isSp"
      src="~assets/videos/190517_iyu-webtop-videoHF1980bit.mp4"
      muted
      autoplay
      loop
    )
</template>

<script>
import InformationSummary from '~/components/InformationSummary'
import { isSp } from '~/assets/js/util.js'

export default {
  components: {
    InformationSummary
  },
  data() {
    return {
      isSp: false
    }
  },
  mounted() {
    this.isSp = isSp()
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
  @include mq() {
    &:after {
      content: '';
      display: block;
      position: fixed;
      z-index: -1;
      height: 100vh;
      width: 100vw;
      background: url(~assets/images/bg-main-visual-sp.png) no-repeat;
      background-size: cover;
    }
  }
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
  top: -50px;
  left: 0;
  z-index: -1;
  display: none;
  @include mq() {
    display: block;
  }
}
</style>
