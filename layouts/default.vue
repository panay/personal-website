<template>
  <div>
    <Header :inner-page="true" />
    <nuxt />
    <MobMenu />
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import MobMenu from '../components/MobMenu/MobMenu'

export default {
  components: { Header, MobMenu }
}
</script>

<style lang="scss" scoped></style>
