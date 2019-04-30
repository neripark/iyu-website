<template lang="pug">
.floating-info
  .wrap
    section.info-unit
      h3.head News
      p.lead
        | りんご音楽祭出演をかけたオーディション "RINGOOOO A GO-GO" に出場します！
        br
        | http://ringofes.info/ringooo-a-go-go-schedule/
    section.info-unit
      h3.head Next Live
      p.lead
        | 2019/6/8 (Sat.)
        br
        | イベント名@Shimokitazawa Some Live-House
</template>

<style lang="scss" scoped>
.floating-info {
  position: absolute;
  width: 100%;
  max-width: 1500px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: $white;
}
.wrap {
  width: 300px;
  padding: 30px;
}
.info-unit {
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.head {
  font-size: 24px;
}
.lead {
  margin-top: 10px;
  font-size: 16px;
}
</style>
