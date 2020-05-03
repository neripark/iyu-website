<template lang="pug">
section.music-video
  heading(
    text="Music"
    color="blue"
  )
  client-only
    carousel(
      :center-mode="true"
      :loop="true"
      :per-page="1"
      :navigation-enabled="true"
      pagination-color="#ccc"
      pagination-active-color="#36afca"
      navigationPrevLabel="<image class=\"arrow\" src=\"/images/gallery-button-L.png\" alt=\"left\" />"
      navigationNextLabel="<image class=\"arrow\" src=\"/images/gallery-button-R.png\" alt=\"left\" />"
    )
      slide(
        v-for="video in videos"
        :key="video.id"
      )
        .wrap-video
          .inner
            iframe.yt-embed(
              type="text/html"
              :src="`https://www.youtube.com/embed/${video.id}`"
              frameborder="0"
              allowfullscreen
            )
</template>

<script>
import Heading from '~/components/Atoms/Heading.vue';
import carouselVideos from '~/assets/js/vue-carousel-videos.js';

export default {
  components: {
    Heading
  },
  data() {
    return {
      videos: carouselVideos
    };
  }
};
</script>

<style lang="scss" scoped>
.music-video {
  width: 100%;
  padding: 0 0 100px;
  background-image: url(~assets/images/bg-movie.jpg);
  background-position: right -32px top 0px;
  background-size: cover;
  overflow: hidden; // カルーセルが飛び出ないよう対策
  @include mq(tb) {
    background-position: right -500px top 0px;
  }
  @include mq() {
    padding: 0 0 50px;
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
.wrap-video {
  margin: 10px auto 0;
  width: 100%;
  max-width: 1000px;
  padding: $side-padding-pc;
  @include mq() {
    padding: $side-padding-sp;
  }
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
iframe.yt-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
