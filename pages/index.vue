<template lang="pug">
main.container
  header
    site-floating-nav
    site-ham-menu
  main-visual( :id="anchorList.mainVisual.id" )
  profile( :id="anchorList.profile.id" )
  music-video( :id="anchorList.music.id" )
  Live(
    :id="anchorList.live.id"
    :liveDetails="liveDetails"
  )
  Gallery( :id="anchorList.gallery.id" )
  Contact( :id="anchorList.contact.id" )
  site-footer
</template>

<script>
import { anchorList } from '~/assets/js/v-scroll-settings.js'
import MainVisual from '~/components/Organisms/MainVisual.vue'
import SiteFloatingNav from '~/components/Molecules/SiteFloatingNav'
import SiteHamMenu from '~/components/Molecules/SiteHamMenu'
import Profile from '~/components/Organisms/Profile'
import MusicVideo from '~/components/Organisms/MusicVideo'
import Live from '~/components/Organisms/Live'
import Gallery from '~/components/Organisms/Gallery'
import Contact from '~/components/Organisms/Contact'
import SiteFooter from '~/components/Organisms/SiteFooter'
import { getEntries } from '~/plugins/contentful.js'

export default {
  components: {
    MainVisual,
    SiteFloatingNav,
    SiteHamMenu,
    Profile,
    MusicVideo,
    Live,
    Gallery,
    Contact,
    SiteFooter
  },
  data() {
    return {
      anchorList
    }
  },
  // asyncDataはページコンポーネントで扱う必要がある
  // https://ja.nuxtjs.org/faq/async-data-components/
  asyncData() {
    return getEntries().then(entry => {
      return {
        liveDetails: entry.items
          .map(e => e.fields)
          .sort((a, b) => (a.date > b.date ? 1 : -1))
      }
    })
  }
}
</script>
