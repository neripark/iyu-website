<template lang="pug">
.live
  heading(
    text="Live"
    color="yellow"
  )
  p.lead
    | チケットのお取置きは
    a.contact(:href="`#${anchorList.profile.id}`" v-scroll-to="scrollTo(anchorList.contact)") こちらのフォーム
    | から。
    br
    a.twitter(
      href="https://twitter.com/iyu_band"
      target="_blank"
    ) Twitter
    | でも承っております。
  live-cards
</template>

<script>
import Heading from '~/components/Heading.vue'
import LiveCards from '~/components/LiveCards.vue'
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js'

export default {
  components: {
    Heading,
    LiveCards
  },
  data() {
    return {
      anchorList: anchorList
    }
  },
  methods: {
    scrollTo(to) {
      return {
        duration: scrollOptions.duration,
        easing: scrollOptions.easing,
        el: `#${to.id}`,
        offset: to.offset
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: $white;
}
.live {
  background: $main-blue;
  padding-bottom: 50px;
  padding: 0 $side-padding-pc 60px;
  @include mq() {
    padding: 0 $side-padding-sp 40px;
  }
}
.lead {
  text-align: center;
  line-height: 2;
  @include mq() {
    line-height: 1.5;
  }
}
.contact,
.twitter {
  text-decoration: underline;
}
</style>
