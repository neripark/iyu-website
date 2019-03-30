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
      this.isNavWindowTop = this.$el.getBoundingClientRect().top <= 0
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: #fff;
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
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  &.is-fixed {
    background-color: #36afca;
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
    border-left: 1px solid #fff;
  }
}
.anchor {
  font-size: 20px;
  position: relative;
  padding: 0 10px;
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
    background: #fff256;
    transition: 0.2s;
  }
  &:hover {
    color: #fff256;
    &::after {
      width: 100%;
    }
  }
}
</style>
