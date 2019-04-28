<template lang="pug">
ul.live-cards
  live-card(
    v-for="live in liveDetails"
    :detail="live"
  )
</template>

<script>
import LiveCard from '~/components/LiveCard.vue'
import liveArray from '~/assets/js/LiveDetails.js'

export default {
  data() {
    return {
      liveDetails: liveArray
    }
  },
  components: {
    LiveCard
  }
}
</script>

<style lang="scss" scoped>
.live-cards {
  max-width: 1000px;
  margin: 30px auto 0;
  padding: 30px;
}
</style>
