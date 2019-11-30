<template lang="pug">
.information-summary
  .wrap
    section.info-unit
      h3.head Live Schedule
      p.lead(
        v-for="live in liveDetails"
      )
        | {{live.date}}
        br
        | {{live.place}}
</template>

<script>
import { typeOfLiveDetail } from '~/plugins/contentful.js';

export default {
  props: {
    liveDetails: {
      type: Array[typeOfLiveDetail],
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin selection-color() {
  &::selection {
    background: $main-blue;
  }
}
.information-summary {
  position: absolute;
  width: 100%;
  max-width: 1500px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: $white;
  @include mq(tb) {
    width: 70%; // iyu-logoに合わせる
    position: static;
    transform: unset;
    max-width: 650px;
  }
  @include mq() {
    width: 100%;
    padding-bottom: 100px;
    text-align: center;
  }
}
.wrap {
  width: 300px;
  padding: 30px;
  @include mq(tb) {
    width: 100%;
    padding: 0 30px;
  }
}
.info-unit {
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.head {
  font-size: 24px;
  @include selection-color();
  @include mq() {
    font-size: 16px;
  }
}
.lead {
  margin-top: 10px;
  font-size: 16px;
  @include selection-color();
  @include mq() {
    font-size: 14px;
    margin-top: 5px;
  }
}
// todo: コンポーネントに切り出し
.text-link {
  color: $white;
  text-decoration: underline;
  margin: 0 0.2em;
  @include selection-color();
  &:hover {
    text-decoration: none;
  }
}
</style>
