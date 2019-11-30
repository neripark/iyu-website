// SSRで動作しないためグローバルに宣言
// https://github.com/SSENSE/vue-carousel/issues/31#issuecomment-319644403
import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
Vue.component('carousel', Carousel);
Vue.component('slide', Slide);
