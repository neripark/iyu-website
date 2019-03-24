<template lang="pug">
nav.site-nav
  p.to-top
    //- a.link-to-top {{ this.domainName }}
    a.link-to-top iyu.music.jp
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
      a.anchor(href="#") Contract
</template>

<script>
export default {
  data() {
    return {
      domainName: location.host
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
  left: 0;
  width: 100vw;
  padding: 20px 30px;
  background-color: #36afca;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-to-top {
  font-size: 24px;
}
.anchor-list {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}
.anchor-item {
  // padding: 5px 0 5px;
  &:not(:first-child) {
    margin-left: 30px;
    padding-left: 30px;
    border-left: 1px solid #fff256;
  }
}
.anchor {
  font-size: 20px;
}
</style>
