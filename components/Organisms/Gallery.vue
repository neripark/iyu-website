<template>
  <section class="gallery">
    <heading text="Gallery" color="blue" />
    <client-only>
      <!-- eslint-disable vue/html-quotes -->
      <carousel
        :center-mode="true"
        :loop="true"
        :per-page="1"
        :navigation-enabled="true"
        :navigate-to="[2, false]"
        pagination-color="#ccc"
        pagination-active-color="#36afca"
        navigation-prev-label='&lt;image class="arrow" src="/images/gallery-button-L.png" alt="left" /&gt;'
        navigation-next-label='&lt;image class="arrow" src="/images/gallery-button-R.png" alt="left" /&gt;'
      >
        <!-- eslint-enable vue/html-quotes -->
        <slide v-for="image in images" :key="image.src">
          <p class="pic">
            <img v-lazy="image" class="image" :alt="image.alt" />
          </p>
        </slide>
      </carousel>
    </client-only>
  </section>
</template>

<script>
import Heading from '~/components/Atoms/Heading.vue';
import carouselImages from '~/assets/js/vue-carousel-images.js';

export default {
  components: {
    Heading
  },
  data() {
    return {
      images: carouselImages
    };
  }
};
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: $side-padding-pc;
  @include mq() {
    padding: $side-padding-sp;
  }
}
.image[lazy='loading'] {
  width: 100px;
  height: auto;
}
.image[lazy='loaded'] {
  width: 100%;
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
