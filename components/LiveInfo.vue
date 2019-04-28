<template lang="pug">
.live-info
  heading.heading-adj(
    text="Live"
    color="yellow"
  )
  p.lead
    | チケットのお取置きはこちらのメールフォームかtwitterまでお願い致します。
  live-cards
</template>

<script>
import Heading from '~/components/Heading.vue'
import LiveCards from '~/components/LiveCards.vue'

export default {
  components: {
    Heading,
    LiveCards
  }
}
</script>


<style lang="scss" scoped>
.live-info {
  background: $main-blue;
  padding-bottom: 50px;
}
.heading-adj {
  padding: 30px 0;
}
.lead {
  color: $white;
  text-align: center;
  line-height: 2;
}
</style>
