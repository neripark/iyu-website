<template>  
  <section class="profile">
    <heading class="heading" text="Profile" color="blue"></heading>
    <div class="wrap-photo" v-lazy-container="{selector: 'img'}"><img class="profile-photo" :data-src="require('~/assets/images/profile.jpg')" data-loading="/images/loading-spin.gif" alt="profile photo"></div>
    <profile-description></profile-description>
  </section>
</template>

<script>
import Heading from '~/components/Atoms/Heading.vue';
import ProfileDescription from '~/components/Molecules/ProfileDescription.vue';

export default {
  components: {
    Heading,
    ProfileDescription
  }
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
}
.heading {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.wrap-photo {
  width: 100%;
  min-height: 300px; // loading中の高さを確保
  overflow: hidden;
  position: relative;
  @include mq(fhd) {
    display: flex;
    justify-content: center;
  }
}
.profile-photo[lazy='loading'] {
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.profile-photo[lazy='loaded'] {
  width: 100%;
  min-width: 1300px;
  margin-top: -240px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  pointer-events: none; // ドラッグ禁止
  @include mq(tb) {
    min-width: 900px;
    top: 40px;
    margin-top: -160px;
  }
  @include mq() {
    min-width: unset;
    width: 150%;
    top: 40px;
    margin-top: -135px;
  }
  @include mq(ssm) {
    top: 35px;
    margin-top: -24%;
  }
  @include mq(fhd) {
    height: 100%;
    margin-top: -380px;
  }
}
</style>
