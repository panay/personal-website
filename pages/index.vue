<template>
  <div class="mainpage">
    <Header />
    <section class="mainpage__headings">
      <h1>Sergey Panay</h1>
      <h2>
        front-end development, team&nbsp;leadership,
        work&nbsp;in&nbsp;a&nbsp;team.
      </h2>
      <socials />
    </section>
  </div>
</template>

<script>
import Socials from '../components/Socials/Socials'
import Header from '../components/Header/Header'

export default {
  layout: 'mainpage',
  components: { Socials, Header }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';
@import '~assets/styles/functions';
@import '~assets/styles/mq';

.mainpage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__headings {
    padding: 0 20px;
    h1 {
      font-size: rem(110);
      margin-bottom: 20px;
    }
    h2 {
      margin-left: auto;
      margin-right: auto;
      max-width: 95%;
      width: 100%;
      font-size: rem(48);
    }
  }

  @include mq($until: tablet) {
    &__headings {
      padding: 10px;
      h1 {
        font-size: rem(80);
      }
      h2 {
        max-width: 100%;
        font-size: rem(28);
      }
    }
  }
}
</style>
