<template lang="pug">
main.container
  main-visual
  floating-info
  site-nav
  profile
  music-video
  div.wrap
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
    p.text dummy text.
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import SiteNav from '~/components/SiteNav'
import Profile from '~/components/Profile'
import MusicVideo from '~/components/MusicVideo'
import FloatingInfo from '~/components/FloatingInfo'

export default {
  components: {
    MainVisual,
    FloatingInfo,
    SiteNav,
    Profile,
    MusicVideo
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background: $white;
}
.text {
  height: 500px;
}
</style>
