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
  profile-member-list
  profile-description
</template>

<script>
import Heading from '~/components/Heading.vue'
import ProfileMemberList from '~/components/ProfileMemberList.vue'
import ProfileDescription from '~/components/ProfileDescription.vue'

export default {
  components: {
    Heading,
    ProfileMemberList,
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
  min-width: 1500px;
  margin-top: -280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  pointer-events: none; // ドラッグ禁止
  @include mq(tb) {
    left: 49%;
    min-width: 1300px;
    margin-top: -230px;
  }
  @include mq() {
    min-width: 1100px;
    margin-top: -180px;
  }
  @include mq(ssm) {
    left: 49%;
    min-width: 840px;
    margin-top: -120px;
  }
  @include mq(fhd) {
    height: 100%;
    margin-top: -350px;
  }
}
</style>
