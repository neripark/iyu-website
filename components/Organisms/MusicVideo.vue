<template>
  <section class="music-video">
    <heading text="Music" color="blue" />
    <div v-for="video in videos" :key="video.id" class="wrap-video">
      <div class="inner">
        <iframe
          class="yt-embed"
          type="text/html"
          :src="`https://www.youtube.com/embed/${video.id}`"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  </section>
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
  padding: 0 $side-padding-pc 100px;
  background-image: url(~assets/images/bg-movie.jpg);
  background-position: right -150px top 0px;
  background-size: cover;
  @include mq(tb) {
    background-position: right -500px top 0px;
  }
  @include mq() {
    padding: 0 $side-padding-sp 50px;
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
iframe.yt-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
