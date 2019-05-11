<template lang="pug">
h2.heading(
  :class="[ color, {'is-absolute' : isAbsolute} ]"
) {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'blue'
    },
    isAbsolute: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  color: $main-blue;
  letter-spacing: 1em;
  text-indent: 1em;
  font-size: 48px;
  text-align: center;
  padding: $side-padding-pc;
  &.yellow {
    color: $yellow;
    &::selection {
      background: $white-rgba;
    }
  }
  &.blue {
    color: $main-blue;
    &::selection {
      background: $yellow-rgba;
    }
  }
  &.is-absolute {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  @include mq(tb) {
    letter-spacing: 0.7em;
    text-indent: 0.7em;
  }
  @include mq() {
    line-height: 1;
    font-size: 40px;
    letter-spacing: 0.2em;
    text-indent: 0.2em;
  }
}
</style>
