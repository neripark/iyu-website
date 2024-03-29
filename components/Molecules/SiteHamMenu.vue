<template>
  <nav
    v-scroll="scrollHandler"
    class="site-ham-menu"
    :class="{ 'is-scroll-top': isScrollTop }"
  >
    <p class="wrap-img">
      <a
        v-scroll-to="scrollTo(anchorList.mainVisual)"
        class="anchor"
        :href="`#${anchorList.profile.id}`"
      >
        <img
          class="logo"
          src="~assets/images/iyu-logo-White.svg"
          alt="iyu-logo"
        />
      </a>
    </p>
    <button
      class="burger-button"
      :class="{ 'is-open-menu': isOpen }"
      :aria-label="isOpen ? `メニューを閉じる` : `メニューを開く`"
      @click.prevent="toggleMenu()"
    >
      <span class="line" /><span class="line" /><span class="line" />
    </button>
    <transition>
      <common-navigation v-show="isOpen" />
    </transition>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js';
import CommonNavigation from '~/components/Molecules/CommonNavigation.vue';

export default {
  components: {
    CommonNavigation
  },
  data() {
    return {
      anchorList,
      isScrollTop: true
    };
  },
  computed: {
    // memo: stateを参照だけしたい場合、このようにcomputed の中に書くとすぐに参照できる
    ...mapState('ham-menu', ['isOpen'])
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('ham-menu/toggle');
    },
    scrollHandler() {
      this.isScrollTop = window.pageYOffset < 500; // 適当
    },
    scrollTo(to) {
      // memo: ここはトップへ戻るスクロールのみ
      return {
        duration: scrollOptions.duration,
        easing: scrollOptions.easing,
        el: `#${to.id}`,
        offset: to.offset
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.site-ham-menu {
  display: none;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  padding: 10px $side-padding-sp;
  width: 100%;
  justify-content: space-between;
  transition: 0.2s;
  background: $main-blue;
  box-shadow: 0px -30px 40px 0px rgba(0, 0, 0, 0.4);
  &.is-scroll-top {
    background: transparent;
    box-shadow: none;
  }
  @include mq(tb) {
    display: flex;
  }
}
.wrap-img {
  transition: 0.2s;
  .is-scroll-top & {
    color: #789;
    opacity: 0;
  }
}
.logo {
  width: 70px;
}
.burger-button {
  $size: 50px;
  width: $size;
  height: $size;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  z-index: 2;
  display: block;
  transition: 0.2s;
  background-color: transparent;
  border: none;
  outline: none;
}
.line {
  display: block;
  width: 50%;
  height: 3px;
  background: $white;
  z-index: 2;
  transition: 0.2s;
  position: absolute;
  left: 50%;
  &:nth-child(1) {
    top: 25%;
    transform: translate(-50%, 0);
    .is-open-menu & {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  &:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
    .is-open-menu & {
      opacity: 0;
    }
  }
  &:nth-child(3) {
    bottom: 25%;
    transform: translate(-50%, 0);
    .is-open-menu & {
      bottom: 50%;
      transform: translate(-50%, 50%) rotate(45deg);
    }
  }
}
// transition
.v-enter,
.v-leave-to {
  transition: 0.2s;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  transition: 0.2s;
  opacity: 1;
}
</style>
