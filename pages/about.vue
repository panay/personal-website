<template>
  <div class="container">
    <section class="about-content">
      <h1>
        Howdy!<br />
        I&rsquo;m an&nbsp;experienced <span>front-end developer</span> based
        in&nbsp;Izhevsk, <span>Russia</span>.
      </h1>
      <h2>
        I&nbsp;have been doing web-development since <span>2008</span>&nbsp;and,
        for over <span>7&nbsp;years</span>&nbsp;I&nbsp;work as&nbsp;a&nbsp;<span
          >professional front-end developer</span
        >.
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About me, my services and skills — Sergey Panay'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/functions';
@import '~assets/styles/vars';
@import '~assets/styles/mq';

.about-content {
  padding-bottom: 80px;

  h1 {
    font-size: rem(100);
  }

  span {
    color: $c-primary;
  }

  @include mq($until: tablet) {
    h1 {
      font-size: rem(42);
    }
    h2 {
      font-size: rem(24);
    }
  }
}
</style>
