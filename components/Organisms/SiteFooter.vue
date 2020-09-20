<template lang="pug">
footer.site-footer
  ul.contact-list
    li.contact-item
      TwitterLink
    li.contact-item
      YoutubeLink
    li.contact-item
      InstagramLink
  .wrap-copyright
    p.copyright-text ©iyumusic.tokyo All Rights Reserved.
</template>

<script>
import TwitterLink from '~/components/Atoms/TwitterLink.vue';
import YoutubeLink from '~/components/Atoms/YoutubeLink.vue';
import InstagramLink from '~/components/Atoms/InstagramLink.vue';

export default {
  components: {
    TwitterLink,
    YoutubeLink,
    InstagramLink
  }
};
</script>

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
.contact-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap-copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
}
</style>
