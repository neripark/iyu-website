<template lang="pug">
nav.site-nav(
  v-scroll='scrollHandler'
  :class="{'is-scroll-start': isNavScrollStart, 'is-window-top': isNavWindowTop}"
)
  ul.anchor-list
    li.anchor-item
      a.anchor(:href="`#${anchorList.profile.id}`" v-scroll-to="scrollTo(anchorList.profile)") Profile
    li.anchor-item
      a.anchor(:href="`#${anchorList.music.id}`" v-scroll-to="scrollTo(anchorList.music)") Music
    li.anchor-item
      a.anchor(:href="`#${anchorList.live.id}`" v-scroll-to="scrollTo(anchorList.live)") Live
    li.anchor-item
      a.anchor(:href="`#${anchorList.gallery.id}`" v-scroll-to="scrollTo(anchorList.gallery)") Gallery
    li.anchor-item
      a.anchor(:href="`#${anchorList.contact.id}`" v-scroll-to="scrollTo(anchorList.contact)") Contact
</template>

<script>
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js'

export default {
  data() {
    return {
      isNavScrollStart: false,
      isNavWindowTop: false,
      anchorList: anchorList
    }
  },
  methods: {
    scrollHandler() {
      this.isNavScrollStart = window.pageYOffset > 0
      this.isNavWindowTop =
        window.pageYOffset > window.innerHeight - this.$el.clientHeight
    },
    scrollTo(to) {
      return {
        duration: scrollOptions.duration,
        easing: scrollOptions.easing,
        el: `#${to.id}`,
        offset: to.offset
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: $white;
}
.site-nav {
  position: absolute;
  z-index: 1;
  bottom: 0;
  display: flex;
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
}
.link-to-top {
  font-size: 24px;
}
.anchor-list {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.anchor-item {
  &:not(:first-child) {
    margin-left: 50px;
    padding-left: 50px;
    border-left: 1px solid $white;
  }
}
.anchor {
  font-size: 20px;
  position: relative;
  padding: 0 5px;
  letter-spacing: 0.2em;
  // hoverすると現れる横棒
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 0;
    z-index: 1;
    background: $yellow;
    transition: 0.2s;
  }
  &:hover {
    color: $yellow;
    &::after {
      width: 100%;
    }
  }
}
</style>
