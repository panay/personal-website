<template>
  <div class="mainpage">
    <section class="mainpage__headings">
      <h1>Sergey Panay</h1>
      <h2>front-end developer</h2>
      <socials />
    </section>
  </div>
</template>

<script>
import Socials from '../components/Socials/Socials'

export default {
  layout: 'mainpage',
  components: { Socials }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';
@import '~assets/styles/functions';

.mainpage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  &__headings {
    position: relative;
    z-index: 2;
    h1 {
      font-size: rem(110);
    }
    h2 {
      font-size: rem(48);
    }
  }
}
</style>
