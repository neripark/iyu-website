<template lang="pug">
main.container
  main-visual
  site-nav
  profile( :id="anchorList.profile.id" )
  music-video( :id="anchorList.music.id" )
  Live( :id="anchorList.live.id" )
  Gallery( :id="anchorList.gallery.id" )
  Contact( :id="anchorList.contact.id" )
  site-footer
</template>

<script>
import { anchorList } from '~/assets/js/v-scroll-settings.js'
import MainVisual from '~/components/MainVisual.vue'
import SiteNav from '~/components/SiteNav'
import Profile from '~/components/Profile'
import MusicVideo from '~/components/MusicVideo'
import Live from '~/components/Live'
import Gallery from '~/components/Gallery'
import Contact from '~/components/Contact'
import SiteFooter from '~/components/SiteFooter'

export default {
  components: {
    MainVisual,
    SiteNav,
    Profile,
    MusicVideo,
    Live,
    Gallery,
    Contact,
    SiteFooter
  },
  data() {
    return {
      anchorList: anchorList
    }
  }
}
</script>
