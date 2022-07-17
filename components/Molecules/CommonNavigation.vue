<template>
  <ul class="anchor-list">
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.profile)"
        class="anchor"
        :href="`#${anchorList.profile.id}`"
      >
        <span class="string">Profile</span>
      </a>
    </li>
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.music)"
        class="anchor"
        :href="`#${anchorList.music.id}`"
      >
        <span class="string">Music</span>
      </a>
    </li>
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.live)"
        class="anchor"
        :href="`#${anchorList.live.id}`"
      >
        <span class="string">Live</span>
      </a>
    </li>
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.goods)"
        class="anchor"
        :href="`#${anchorList.goods.id}`"
      >
        <span class="string">Goods</span>
      </a>
    </li>
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.gallery)"
        class="anchor"
        :href="`#${anchorList.gallery.id}`"
      >
        <span class="string">Gallery</span>
      </a>
    </li>
    <li class="anchor-item">
      <a
        v-scroll-to="scrollTo(anchorList.contact)"
        class="anchor"
        :href="`#${anchorList.contact.id}`"
      >
        <span class="string">Contact</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import { isSp } from '~/assets/js/util.js';
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js';

export default {
  data() {
    return {
      anchorList
    };
  },
  computed: {
    ...mapState('ham-menu', ['isOpen'])
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
* {
  color: $white;
}
.anchor-list {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @include mq(tb) {
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    top: 0;
    left: 0;
    background: $main-blue; // 仮
    z-index: 0;
  }
}
.anchor-item {
  text-align: center;
  width: 20%;
  @include mq(tb) {
    width: 100%;
    text-align: center;
  }
  &:not(:first-child) {
    border-left: 1px solid $white;
    @include mq(tb) {
      border: none;
    }
  }
}
.anchor {
  display: block;
  font-size: 20px;
  position: relative;
  letter-spacing: 0.2em;
  user-select: none;
  cursor: pointer;
  .string {
    display: inline-block;
    position: relative;
    padding: 0 3px 0 7px;
    // hoverすると現れる横棒
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -3px;
      left: 0;
      z-index: 1;
      background: $yellow;
      transition: 0.2s;
    }
  }
  &:hover {
    .string {
      color: $yellow;
      &::after {
        width: 100%;
      }
    }
  }
  @include mq(tb) {
    display: block;
    text-align: center;
    padding: 10px 0;
    &::after {
      display: none;
    }
  }
}
</style>
