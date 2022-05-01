<template>  
  <main class="container">
    <header>
      <site-floating-nav></site-floating-nav>
      <site-ham-menu></site-ham-menu>
    </header>
    <main-visual :id="anchorList.mainVisual.id" :liveDetails="liveDetails"></main-visual>
    <profile :id="anchorList.profile.id"></profile>
    <music-video :id="anchorList.music.id"></music-video>
    <Live :id="anchorList.live.id" :liveDetails="liveDetails"></Live>
    <Gallery :id="anchorList.gallery.id"></Gallery>
    <Contact :id="anchorList.contact.id" :liveDetails="liveDetails"></Contact>
    <site-footer></site-footer>
  </main>
</template>

<script>
import { anchorList } from '~/assets/js/v-scroll-settings.js';
import MainVisual from '~/components/Organisms/MainVisual.vue';
import SiteFloatingNav from '~/components/Molecules/SiteFloatingNav';
import SiteHamMenu from '~/components/Molecules/SiteHamMenu';
import Profile from '~/components/Organisms/Profile';
import MusicVideo from '~/components/Organisms/MusicVideo';
import Live from '~/components/Organisms/Live';
import Gallery from '~/components/Organisms/Gallery';
import Contact from '~/components/Organisms/Contact';
import SiteFooter from '~/components/Organisms/SiteFooter';
import { getEntries } from '~/plugins/contentful.js';

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
    };
  },
  // asyncDataはページコンポーネントで扱う必要がある
  // https://ja.nuxtjs.org/faq/async-data-components/
  asyncData({ $dayjs }) {
    return getEntries().then(entry => {
      return {
        liveDetails: entry.items
          .map(e => {
            return e.fields;
          })
          .sort((a, b) => (a.date > b.date ? 1 : -1))
          // ライブが終わっても１週間は表示しておく
          .filter(e => {
            return $dayjs()
              .subtract(7, 'day')
              .isBefore(e.date);
          })
      };
    });
  }
};
</script>
