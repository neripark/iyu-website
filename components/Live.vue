<template lang="pug">
.live
  heading(
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
.live {
  background: $main-blue;
  padding-bottom: 50px;
  padding: 0 $side-padding-pc 60px;
  @include mq() {
    padding: 0 $side-padding-sp 40px;
  }
}
.lead {
  color: $white;
  text-align: center;
  line-height: 2;
}
</style>
