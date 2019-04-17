<template>
  <div>
    <nuxt />
    <MobMenu />
  </div>
</template>

<script>
import MobMenu from '../components/MobMenu/MobMenu'

export default {
  mode: 'out-in',
  components: { MobMenu }
}
</script>

<style lang="scss" scoped>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
</style>
