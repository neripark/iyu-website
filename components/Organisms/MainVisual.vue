<template>  
  <section class="main-visual">
    <h1 class="iyu-logo"><img src="~assets/images/iyu-logo-RGB.svg" alt="iyu-logo"></h1>
    <information-summary :liveDetails="liveDetails"></information-summary>
    <client-only>
      <video class="bg-movie" v-if="!isSp" src="~assets/videos/200109_iyu-webtop-video.mp4" muted autoplay loop></video>
    </client-only>
  </section>
</template>

<script>
import InformationSummary from '~/components/Molecules/InformationSummary';
import { isSp } from '~/assets/js/util.js';
import { typeOfLiveDetail } from '~/plugins/contentful.js';

export default {
  components: {
    InformationSummary
  },
  props: {
    liveDetails: {
      type: Array[typeOfLiveDetail],
      default: []
    }
  },
  data() {
    return {
      isSp: false
    };
  },
  mounted() {
    this.isSp = isSp();
  }
};
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
