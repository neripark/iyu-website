<template>
  <div>
    <p v-if="liveCnt" class="lead">
      チケットのお取置きは
      <a
        v-scroll-to="scrollTo(anchorList.contact)"
        class="text-link"
        :href="`#${anchorList.profile.id}`"
      >
        こちらのフォーム</a
      >
      から。<br />
      <a class="text-link" href="https://twitter.com/iyu_band" target="_blank">
        Twitter
      </a>
      でも承っております。
    </p>
    <p v-if="!liveCnt" class="lead">
      現在予定しているライブはありません。
      <br />発表をお待ち下さい！<br />
      <a class="text-link" href="https://twitter.com/iyu_band" target="_blank">
        Twitter </a
      >もぜひチェックしてくださいね。
    </p>
  </div>
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
