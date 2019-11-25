<template lang="pug">
ul.live-cards
  live-card(
    v-for="live in liveDetails"
    :key="live.date"
    :detail="live"
  )
</template>

<script>
import LiveCard from '~/components/Molecules/LiveCard.vue'
import { typeOfLiveDetail } from '~/plugins/contentful.js'

export default {
  components: {
    LiveCard
  },
  props: {
    liveDetails: {
      type: Array[typeOfLiveDetail],
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.live-cards {
  max-width: 1000px;
  margin: 15px auto 0;
  padding-bottom: $side-padding-pc;
  @include mq() {
    padding-bottom: $side-padding-sp;
    margin: 40px auto 0;
  }
}
</style>
