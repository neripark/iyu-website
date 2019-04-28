<template lang="pug">
.live-info
  heading.heading-adj(
    text="Gallery"
    color="blue"
  )
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading
  }
}
</script>


<style lang="scss" scoped>
.live-info {
  background: $white;
  padding-bottom: 50px;
}
.heading-adj {
  padding: 30px 0;
}
</style>
