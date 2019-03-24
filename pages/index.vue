<template lang="pug">
main.container
  MainVisual
  SiteNav
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

export default {
  components: {
    MainVisual,
    SiteNav
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
