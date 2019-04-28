<template lang="pug">
h2.heading {{ text }}
</template>

<script>
export default {
  props: ['text', 'color']
}
</script>

<style lang="scss" scoped>
.heading {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: $main-blue;
  letter-spacing: 1em;
  text-indent: 1em;
  font-size: 48px;
  text-align: center;
}
</style>
