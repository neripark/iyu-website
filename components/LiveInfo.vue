<template lang="pug">
.live-info
  heading.heading-adj(
    text="Live"
    color="yellow"
  )
  p.lead
    | 近日予定しているライブスケジュールです。
    br
    | チケットのお取置きはこちらのメールフォームかtwitterまでお願い致します。
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
.live-info {
  background: $main-blue;
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
