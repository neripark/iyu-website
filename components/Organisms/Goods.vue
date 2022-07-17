<template>
  <section class="goods">
    <heading text="Goods" color="yellow" />
    <p class="dummy-text">goods コーナー。工事中。</p>
  </section>
</template>

<script>
import Heading from '~/components/Atoms/Heading.vue';

export default {
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
.goods {
  background: $main-blue;
  padding-bottom: 50px;
  padding: 0 $side-padding-pc 60px;
  @include mq() {
    padding: 0 $side-padding-sp 40px;
  }
}
.dummy-text {
  color: white;
  text-align: center;
}
</style>
