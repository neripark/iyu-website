<template lang="pug">
h2.heading(:class="color") {{ text }}
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
}
</script>

<style lang="scss" scoped>
.heading {
  color: $main-blue;
  letter-spacing: 1em;
  text-indent: 1em;
  font-size: 48px;
  text-align: center;
  &.yellow {
    color: $yellow;
  }
  &.blue {
    color: $main-blue;
  }
}
</style>
