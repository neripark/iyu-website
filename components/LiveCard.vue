<template lang="pug">
li.live-card
  .date
    p.ymd {{ detail.date }}
  .detail
    p.title {{ detail.title }}
    p.place @{{ detail.place }}
    p.time open {{ detail.time.open }} / start {{ detail.time.start }}
    p.ticket adv ¥{{ detail.ticket.adv }} / door ¥{{ detail.ticket.door }}
    p.with w) {{ detail.with.join(' / ') }}
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
$date-width: 360px;
.live-card {
  display: flex;
  justify-content: center;
  &:not(:first-child) {
    margin-top: 30px;
  }
}
.date {
  width: $date-width;
  color: $main-blue;
  background-color: $yellow;
  font-size: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.detail {
  width: calc(100% - #{$date-width});
  color: $main-blue;
  background-color: $white;
  padding: 30px 60px;
  font-size: 18px;
  .title {
    font-size: 24px;
    line-height: 1.3;
  }
  .place {
    margin-top: 10px;
  }
  .time {
    margin-top: 10px;
    font-size: 16px;
  }
  .ticket {
    font-size: 16px;
  }
  .with {
    margin-top: 10px;
  }
}
</style>
