<template lang="pug">
nav.site-ham-menu(
  v-scroll='scrollHandler'
  :class="{'is-scroll-top': isScrollTop}"
)
  p.wrap-img
    //- todo: vuexできたらページトップにいるときもふわっと出すようにする
    a.anchor(
      :href="`#${anchorList.profile.id}`"
      v-scroll-to="scrollTo(anchorList.mainVisual)"
    )
      img.logo(
        src="~assets/images/iyu-logo-White.svg"
        alt="iyu-logo"
      )
  a.burger-button(
    href=""
    :class="{'isOpenMenu': isOpen}"
    @click.prevent="toggleMenu()"
  )
    span.line
    span.line
    span.line
  transition
    common-navigation(
      v-show="isOpen"
    )
</template>

<script>
import { mapState } from 'vuex'
import { anchorList, scrollOptions } from '~/assets/js/v-scroll-settings.js'
import CommonNavigation from '~/components/CommonNavigation.vue'

export default {
  components: {
    CommonNavigation
  },
  data() {
    return {
      anchorList: anchorList,
      isScrollTop: true
    }
  },
  computed: {
    // memo: stateを参照だけしたい場合、このようにcomputed の中に書くとすぐに参照できる
    ...mapState('ham-menu', ['isOpen'])
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('ham-menu/toggle')
    },
    scrollHandler() {
      this.isScrollTop = window.pageYOffset < 300 // 適当
    },
    scrollTo(to) {
      // memo: ここはトップへ戻るスクロールのみ
      return {
        duration: scrollOptions.duration,
        easing: scrollOptions.easing,
        el: `#${to.id}`,
        offset: to.offset
      }
    }
  }
}
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
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.line {
  display: block;
  width: 80%;
  height: 3px;
  background: $white;
  z-index: 2;
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
