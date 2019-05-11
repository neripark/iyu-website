<template lang="pug">
nav.site-floating-nav(
  v-scroll='scrollHandler'
  :class="{'is-scroll-start': isNavScrollStart, 'is-window-top': isNavWindowTop}"
)
  common-navigation
</template>

<script>
import CommonNavigation from '~/components/CommonNavigation.vue'

export default {
  components: {
    CommonNavigation
  },
  data() {
    return {
      isNavScrollStart: false,
      isNavWindowTop: false
    }
  },
  methods: {
    scrollHandler() {
      this.isNavScrollStart = window.pageYOffset > 0
      this.isNavWindowTop =
        window.pageYOffset > window.innerHeight - this.$el.clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.site-floating-nav {
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  background: $transparent-gray;
  transition: 1s;
  &.is-scroll-start {
    background-color: $main-blue;
  }
  &.is-window-top {
    position: fixed;
    top: 0;
    bottom: unset;
    box-shadow: 0px -30px 40px 0px rgba(0, 0, 0, 0.4);
  }
  @include mq(tb) {
    display: none;
  }
}
</style>
