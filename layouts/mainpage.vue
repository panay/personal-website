<template>
  <div>
    <Header class="mainpage-mob-header" />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header/Header'

export default {
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mq';

@include mq($from: tablet) {
  .mainpage-mob-header {
    display: none;
  }
}
</style>
