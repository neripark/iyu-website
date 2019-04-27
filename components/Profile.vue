<template lang="pug">
//- todo: 画像の余白調整
.profile
  heading(
    text="Profile"
    color="green"
  )
  .wrap-photo
    img.profile-photo(
      src="~assets/images/profile.jpg"
      alt="profile photo"
    )
</template>

<script>
import Heading from '~/components/Heading.vue'
export default {
  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
}
.wrap-photo {
  min-height: 630px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.profile-photo {
  width: 100%;
  min-width: 1500px;
  margin: 0 auto;
  margin-top: -280px;
}
// todo: media_queryをmixin化
@media (min-width: 1500px) {
  .profile-photo {
    height: 100%;
    margin-top: -350px;
  }
}
</style>
