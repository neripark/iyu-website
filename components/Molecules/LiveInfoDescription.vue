<template lang="pug">
div
  p.lead(v-if="liveCnt")
    | チケットのお取置きは
    a.text-link(
      :href="`#${anchorList.profile.id}`"
      v-scroll-to="scrollTo(anchorList.contact)"
    ) こちらのフォーム
    | から。
    br
    a.text-link(
      href="https://twitter.com/iyu_band"
      target="_blank"
    ) Twitter
    | でも承っております。
  p.lead(v-if="!liveCnt")
    | 現在予定しているライブはありません。
    br
    | 発表をお待ち下さい！
    br
    a.text-link(
      href="https://twitter.com/iyu_band"
      target="_blank"
    ) Twitter
    | もぜひチェックしてくださいね。
</template>

<script>
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js';
import { isSp } from '~/assets/js/util.js';

export default {
  props: {
    liveCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      anchorList,
      scrollOptions,
      liveCnt: this.liveCount
    };
  },
  methods: {
    scrollTo(to) {
      return {
        duration: scrollOptions.duration,
        easing: scrollOptions.easing,
        el: `#${to.id}`,
        offset: isSp ? to.offsetSp : to.offset,
        onStart: () => {
          // このコンポーネントから操作したいのでarrow function
          this.$store.dispatch('ham-menu/close');
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin selection-color() {
  &::selection {
    background: $yellow-rgba;
    color: $main-blue;
  }
}
.lead {
  color: $white;
  text-align: center;
  line-height: 2;
  @include selection-color();
  @include mq() {
    line-height: 1.5;
  }
}
// todo: componentに切り出す
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
