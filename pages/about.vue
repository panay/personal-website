<template>
  <div class="container">
    <section class="about-content">
      <h1>
        Hi, I&rsquo;m an&nbsp;experienced front-end developer based
        in&nbsp;Izhevsk, Russia.
      </h1>
      <ul class="facts">
        <li class="facts__item">
          <h2 class="facts__item--large-text">27</h2>
          <div>years old</div>
        </li>
        <li class="facts__item">
          <h2>7 years of experience</h2>
          <div>in web development</div>
        </li>
        <li class="facts__item">
          <h2>B1-B2</h2>
          <div>English level</div>
        </li>
        <li class="facts__item">
          <h2>Self-motivated</h2>
          <div>person</div>
        </li>
        <li class="facts__item">
          <h2>Love</h2>
          <div>to work and research</div>
        </li>
      </ul>
      <h3>Interested in working together? Let’s have a talk.</h3>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About me — Sergey Panay'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';
@import '~assets/styles/functions';
@import '~assets/styles/mq';

.about-content {
  .facts {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 -10px 20px;

    &__item {
      flex: 1 0 240px;
      width: 240px;
      max-width: 240px;
      margin: 10px;
      background-color: $c-primary;
      box-shadow: 0 0 6px darken($c-bg, 15%);
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &--large-text {
        font-size: rem(48);
      }

      > div {
        color: $c-bg;
      }
    }
  }

  @include mq($until: 540px) {
    .facts {
      display: block;
      margin: 0 0 20px;

      &__item {
        max-width: 300px;
        width: 100%;
        margin: 10px 0;
      }
    }
  }
}
</style>
