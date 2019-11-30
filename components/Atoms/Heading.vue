<template lang="pug">
h2.heading(
  :class="color"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  color: $main-blue;
  letter-spacing: 1em;
  text-indent: 1em;
  font-size: 48px;
  text-align: center;
  padding: $side-padding-pc;
  font-family: 'Heebo';
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
