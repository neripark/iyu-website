<template lang="pug">
main.container
  main-visual
  floating-info
  site-nav
  profile( :id="anchorList.profile.id" )
  music-video( :id="anchorList.music.id" )
  LiveInfo( :id="anchorList.live.id" )
  Gallery( :id="anchorList.gallery.id" )
  Contact( :id="anchorList.contact.id" )
</template>

<script>
import { anchorList } from '~/assets/js/v-scroll-settings.js'
import MainVisual from '~/components/MainVisual.vue'
import FloatingInfo from '~/components/FloatingInfo'
import SiteNav from '~/components/SiteNav'
import Profile from '~/components/Profile'
import MusicVideo from '~/components/MusicVideo'
import LiveInfo from '~/components/LiveInfo'
import Gallery from '~/components/Gallery'
import Contact from '~/components/Contact'

export default {
  components: {
    MainVisual,
    FloatingInfo,
    SiteNav,
    Profile,
    MusicVideo,
    LiveInfo,
    Gallery,
    Contact
  },
  data() {
    return {
      anchorList: anchorList
    }
  }
}
</script>
