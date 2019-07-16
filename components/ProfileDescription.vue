<template lang="pug">
.profile-description
  p.l-to-r [ L to R ]
  ul.member-list
    li.member
      p.name NAGATA
      p.part (Ba)
    li.member
      p.name KOUDAI
      p.part (Key)
    li.member
      p.name ZUN
      p.part (Vo)
    li.member
      p.name KOU
      p.part (Dr)
    li.member
      p.name NERI
      p.part (Gt)
  p.description
    | 2017年3月、iyu結成。
    br
    | 都市の雑踏、積み重ねの日々、
    br.break-sp
    | 暮らしの中に等身大で身近な音楽。
    br
    | 東京都世田谷区、渋谷区、新宿区を中心に活動中。
</template>

<style lang="scss" scoped>
* {
  line-height: 2;
}
.profile-description {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 30px $side-padding-pc;
}
.member-list {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  max-width: 40%;
  margin: 0 auto;
}
.l-to-r {
  color: $white;
  text-align: center;
  font-size: 14px;
}
.member {
  // padding: 0 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    position: relative;
    &::before {
      content: '/';
      display: block;
      padding: 0 1em;
    }
  }
}
.name {
  font-size: 14px;
  line-height: 2;
}
.part {
  font-size: 14px;
  margin-left: 0.3em;
  line-height: 2;
}
.description {
  text-align: center;
  color: $white;
  letter-spacing: 0.1em;
  line-height: 2;
  position: relative;
  &::before {
    // 区切りハイフン
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    margin: 23px auto;
    background: $white;
  }
  &::selection {
    background-color: $yellow-rgba;
    color: $black-rgba;
  }
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
