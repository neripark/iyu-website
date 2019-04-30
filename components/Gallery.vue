<template lang="pug">
.gallery
  heading.heading-adj(
    text="Gallery"
    color="blue"
  )
  no-ssr
    carousel.carousel-adj(
      :center-mode="true"
      :loop="true"
      :per-page="1"
      :navigation-enabled="true"
      pagination-active-color="#36afca"
    )
      //- todo: v-forで書き直す
      slide
        p.pic
          img(
            src="~/assets/images/gallery_01.jpg"
            alt="setagaya suside last scene."
          )
      slide
        p.pic
          img(
            src="~/assets/images/gallery_02.jpg"
            alt="Vocal ZUN."
          )
      slide
        p.pic
          img(
            src="~/assets/images/gallery_03.jpg"
            alt="Key KOUDAI."
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
  padding-bottom: 50px;
  overflow: hidden; // カルーセルが飛び出ないよう対策
}
.heading-adj {
  padding: 30px;
}
.pic {
  max-width: 700px;
  padding: 10px;
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
}
</style>
