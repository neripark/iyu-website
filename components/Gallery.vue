<template lang="pug">
.gallery
  heading(
    text="Gallery"
    color="blue"
  )
  no-ssr
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
      //- todo: v-forで書き直す
      //- slide
      //-   p.pic
      //-     img(
      //-       src="~/assets/images/gallery-zun.jpg"
      //-       alt="gallery zun"
      //-     )
      slide
        p.pic
          img(
            src="~/assets/images/gallery-setasu-last.jpg"
            alt="setagaya suside last scene"
          )
      slide
        p.pic
          img(
            src="~/assets/images/gallery-sky.jpg"
            alt="gallery sky"
          )
      slide
        p.pic
          img(
            src="~/assets/images/gallery-car-beam.jpg"
            alt="gallery car beam"
          )
      slide
        p.pic
          img(
            src="~/assets/images/gallery-car-light.jpg"
            alt="gallery car light"
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
.gallery {
  background: $white;
  padding-bottom: 80px;
  overflow: hidden; // カルーセルが飛び出ないよう対策
  @include mq() {
    padding-bottom: 50px;
  }
}
.pic {
  max-width: 700px;
  padding: $side-padding-pc;
  @include mq() {
    padding: $side-padding-sp;
  }
  img {
    width: 100%;
  }
}
</style>

<style lang="scss">
// 横をはみ出させるためコンポーネントのスタイルを上書き
.VueCarousel {
  margin: 0 auto;
  max-width: 700px;
  .VueCarousel-wrapper {
    overflow: visible;
  }
  .VueCarousel-dot-container {
    margin-top: 0 !important;
  }
  .VueCarousel-dot {
    margin-top: 0 !important;
  }
  // 矢印ボタン
  img.arrow {
    width: 30px;
  }
  // 左右ボタン
  .VueCarousel-navigation-button {
    @include mq(carousel) {
      display: none;
    }
    &:focus {
      outline: none !important;
    }
  }
  .VueCarousel-navigation-prev {
    left: 20px !important;
  }
  .VueCarousel-navigation-next {
    right: 20px !important;
  }
}
</style>
