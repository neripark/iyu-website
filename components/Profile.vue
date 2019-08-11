<template lang="pug">
section.profile
  heading(
    text="Profile"
    color="blue"
    :isAbsolute="true"
  )
  .wrap-photo
    img.profile-photo(
      src="~assets/images/profile.jpg"
      alt="profile photo"
    )
  profile-description
</template>

<script>
import Heading from '~/components/Heading.vue'
import ProfileDescription from '~/components/ProfileDescription.vue'

export default {
  components: {
    Heading,
    ProfileDescription
  }
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
}
.wrap-photo {
  overflow: hidden;
  @include mq(fhd) {
    display: flex;
    justify-content: center;
  }
}
.profile-photo {
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
    margin-top: -160px;
    top: 40px;
  }
  @include mq() {
    min-width: unset;
    width: 150%;
    top: 40px;
    margin-top: -135px;
  }
  @include mq(ssm) {
    min-width: 450px;
    top: 35px;
    margin-top: -24%;
  }
  @include mq(fhd) {
    height: 100%;
    margin-top: -380px;
  }
}
</style>
