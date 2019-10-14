<template lang="pug">
footer.site-footer
  .wrap-copyright
    p.copyright-text ©iyumusic.tokyo All Rights Reserved.
</template>

<style lang="scss" scoped>
* {
  color: $white;
}
.site-footer {
  width: 100%;
  padding: 40px $side-padding-pc;
  @include mq() {
    padding: 30px $side-padding-sp;
  }
  background-color: $main-blue;
  border-top: 1px solid $white;
}
.wrap-copyright {
  text-align: center;
  font-size: 12px;
}
</style>
