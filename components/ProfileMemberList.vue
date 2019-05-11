<template lang="pug">
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
</template>

<style lang="scss" scoped>
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
    &::selection {
      background-color: $yellow-rgba;
    }
  }
  .name {
    &::selection {
      background-color: $yellow-rgba;
    }
  }
}
</style>
