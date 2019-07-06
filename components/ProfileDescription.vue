<template lang="pug">
p.description
  | 2017年3月、[iyu]結成。
  br
  | 都市の雑踏、積み重ねの日々、
  br.break-sp
  | 暮らしの中に等身大で身近な音楽。
  br
  | 東京都世田谷区、渋谷区、新宿区を中心に活動中。
</template>

<style lang="scss" scoped>
.description {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px $side-padding-pc;
  text-align: center;
  color: $white;
  letter-spacing: 0.1em;
  line-height: 2;
  background: rgba(0, 0, 0, 0.5);
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
