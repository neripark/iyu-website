<template>
  <li class="live-card">
    <div class="date">
      <p class="ymd">
        {{ $dayjs(detail.date).format('YYYY/M/D (ddd)') }}
      </p>
    </div>
    <div class="detail">
      <p class="title">
        {{ detail.title }}
      </p>
      <p class="place">@{{ detail.place }}</p>
      <p class="time">
        open {{ detail.timeOpen ? detail.timeOpen : '未定' }} / start
        {{ detail.timeStart ? detail.timeStart : '未定' }}
      </p>
      <p v-if="detail.timeIyu" class="iyu-time">
        ※iyuの出演は{{ detail.timeIyu }}頃の予定です。
      </p>
      <p class="ticket">
        {{ detail.ticket }}
      </p>
      <p class="with">
        w) {{ detail.with ? detail.with.join(' / ') : '未定' }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: null
    }
  },
  methods: {
    ticketString(price) {
      return price ? `¥${price}` : '未定';
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin selection-color() {
  &::selection {
    background: $yellow-rgba;
  }
}
.live-card {
  display: flex;
  justify-content: center;
  &:not(:first-child) {
    margin-top: $side-padding-pc;
  }
  @include mq() {
    display: block;
    &:not(:first-child) {
      margin-top: $side-padding-sp;
    }
  }
}
.date {
  width: 37%;
  color: $main-blue;
  background-color: $yellow;
  font-size: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  @include mq(tb) {
    font-size: 24px;
    width: 30%;
  }
  @include mq() {
    font-size: 20px;
    width: 100%;
    padding: 15px;
  }
}
.ymd {
  &::selection {
    background: $white-rgba;
  }
}
.detail {
  width: 63%;
  color: $main-blue;
  background-color: $white;
  padding: 30px 60px;
  font-size: 18px;
  @include mq(tb) {
    padding: 30px;
    width: 70%;
  }
  @include mq() {
    padding: 20px 30px;
    width: 100%;
  }
  .title {
    font-size: 24px;
    line-height: 1.3;
    @include selection-color();
    @include mq() {
      font-size: 16px;
    }
  }
  .place {
    margin-top: 10px;
    @include selection-color();
    @include mq() {
      font-size: 16px;
    }
  }
  .time {
    margin-top: 10px;
    font-size: 16px;
    @include selection-color();
    @include mq() {
      font-size: 14px;
    }
  }
  .iyu-time {
    font-size: 16px;
    @include selection-color();
    @include mq() {
      font-size: 12px;
    }
  }
  .ticket {
    font-size: 16px;
    @include selection-color();
    @include mq() {
      font-size: 14px;
    }
  }
  .with {
    margin-top: 10px;
    font-size: 16px;
    @include selection-color();
    @include mq() {
      font-size: 14px;
    }
  }
}
</style>
