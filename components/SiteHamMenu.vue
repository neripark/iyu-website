<template lang="pug">
nav.site-ham-menu
  common-navigation
</template>

<script>
import CommonNavigation from '~/components/CommonNavigation.vue'

export default {
  components: {
    CommonNavigation
  }
}
</script>

<style lang="scss" scoped>
.site-ham-menu {
  display: none;
  // position: fixed;
  z-index: 1;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.4);
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
  @include mq() {
    display: flex;
  }
}
</style>
