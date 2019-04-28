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
  ul.member-list
    li.member
      p.part Drums
      p.name KOU
    li.member
      p.part Keyboard
      p.name KOUDAI
    li.member
      p.part Vocal
      p.name ZUN
    li.member
      p.part Guitar
      p.name NERI
  p.description
    | 2017年3月、[iyu]結成。
    br
    | 都市の雑踏、積み重ねの日々、暮らしの中に等身大で身近な音楽。
    br
    | 東京都世田谷区、渋谷区、新宿区を中心に活動中。
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
.member-list {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-47%); // 写真に合わせて微調整
  display: flex;
  justify-content: center;
  align-items: center;
  .member {
    text-align: center;
    width: 120px;
    font-size: 16px;
  }
  .part {
    font-size: 12px;
  }
}
.description {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: $white;
  letter-spacing: 0.1em;
  line-height: 2;
}
</style>
