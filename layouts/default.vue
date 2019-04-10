<template>
  <div>
    <Header :inner-page="true" />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header/Header'

export default {
  components: { Header }
}
</script>

<style lang="scss" scoped></style>
