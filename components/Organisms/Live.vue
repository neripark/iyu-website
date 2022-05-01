<template>  
  <section class="live">
    <heading text="Live" color="yellow"></heading>
    <live-info-description :liveCount="liveDetails.length"></live-info-description>
    <live-cards v-if="liveDetails.length" :liveDetails="liveDetails"></live-cards>
  </section>
</template>

<script>
import Heading from '~/components/Atoms/Heading.vue';
import LiveCards from '~/components/Molecules/LiveCards.vue';
import LiveInfoDescription from '~/components/Molecules/LiveInfoDescription.vue';
import { typeOfLiveDetail } from '~/plugins/contentful.js';

export default {
  components: {
    Heading,
    LiveCards,
    LiveInfoDescription
  },
  props: {
    liveDetails: {
      type: Array[typeOfLiveDetail],
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.live {
  background: $main-blue;
  padding-bottom: 50px;
  padding: 0 $side-padding-pc 60px;
  @include mq() {
    padding: 0 $side-padding-sp 40px;
  }
}
</style>
