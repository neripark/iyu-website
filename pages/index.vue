<template lang="pug">
main.container
  MainVisual
  SiteNav
  Profile
  MusicVideo
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

export default {
  components: {
    MainVisual,
    SiteNav,
    Profile,
    MusicVideo
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background: #fff;
}
.text {
  height: 500px;
}
</style>
