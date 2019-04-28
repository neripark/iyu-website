<template lang="pug">
nav.site-nav(
  v-scroll='scrollHandler'
  :class="{'is-fixed': isNavWindowTop}"
)
  ul.anchor-list
    li.anchor-item
      a.anchor(href="#") Profile
    li.anchor-item
      a.anchor(href="#") Music
    li.anchor-item
      a.anchor(href="#") Live
    li.anchor-item
      a.anchor(href="#") Gallery
    li.anchor-item
      a.anchor(href="#") Contact
</template>

<script>
export default {
  data() {
    return {
      isNavWindowTop: false
    }
  },
  methods: {
    scrollHandler() {
      this.isNavWindowTop = window.pageYOffset > 50
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: $white;
}
.site-nav {
  position: sticky;
  z-index: 1;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.4);
  transition: 1s;
  &.is-fixed {
    background-color: $main-blue;
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
