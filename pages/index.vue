<template lang="pug">
main.container
  main-visual
  floating-info
  site-nav
  profile
  music-video
  LiveInfo
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import FloatingInfo from '~/components/FloatingInfo'
import SiteNav from '~/components/SiteNav'
import Profile from '~/components/Profile'
import MusicVideo from '~/components/MusicVideo'
import LiveInfo from '~/components/LiveInfo'

export default {
  components: {
    MainVisual,
    FloatingInfo,
    SiteNav,
    Profile,
    MusicVideo,
    LiveInfo
  }
}
</script>
