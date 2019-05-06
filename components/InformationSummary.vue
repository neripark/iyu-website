<template lang="pug">
.information-summary
  .wrap
    section.info-unit
      h3.head News
      p.lead
        | りんご音楽祭出演をかけたオーディション
        a.text-link(href="http://ringofes.info/ringooo-a-go-go-schedule/") RINGOOOO A GO-GO
        | に出場します！
    section.info-unit
      h3.head Next Live
      p.lead
        | 2019/6/8 (Sat.)
        br
        | RINGOOOO A GO-GO@東高円寺U.F.O. CLUB
</template>

<style lang="scss" scoped>
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
  @include mq() {
    font-size: 16px;
  }
}
.lead {
  margin-top: 10px;
  font-size: 16px;
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
  &:hover {
    text-decoration: none;
  }
}
</style>
