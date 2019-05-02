<template lang="pug">
//- todo: 画像の余白調整
.profile
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
    | 都市の雑踏、積み重ねの日々、
    br.break-sp
    | 暮らしの中に等身大で身近な音楽。
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
.member-list {
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translateX(-47%); // 写真に合わせて微調整
  display: flex;
  justify-content: center;
  align-items: center;
  @include mq(tb) {
    top: 440px;
    transform: translateX(-49%);
  }
  @include mq() {
    top: 470px;
    color: $white;
  }
  @include mq(ssm) {
    top: 370px;
  }
  @include mq(fhd) {
    top: 70%;
  }
  .member {
    text-align: center;
    width: 120px;
    font-size: 16px;
    @include mq(tb) {
      width: 105px;
    }
    @include mq() {
      width: 90px;
    }
    @include mq(ssm) {
      width: 70px;
    }
    @include mq(fhd) {
      width: 140px;
    }
  }
  .part {
    font-size: 12px;
  }
}
.description {
  position: absolute;
  width: 100%;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 $side-padding-pc;
  text-align: center;
  color: $white;
  letter-spacing: 0.1em;
  line-height: 2;
  @include mq(tb) {
    bottom: 28px;
  }
  @include mq() {
    position: static;
    transform: unset;
    background: $main-blue;
    font-size: 14px;
    padding: $side-padding-sp;
  }
}
.break-sp {
  display: none;
  @include mq() {
    display: inline;
  }
}
</style>
