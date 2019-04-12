<template>
  <header :class="{ inner: innerPage }">
    <div v-if="innerPage" class="inner-logo">
      <nuxt-link to="/" title="Return to homepage">Sergey Panay</nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/about" title="Information about me">
        <span>Who am I?</span>
      </nuxt-link>
      <nuxt-link to="/services" title="Services and benefits">
        <span>What can I do?</span>
      </nuxt-link>
      <nuxt-link to="/projects" title="My works">
        <span>What did I?</span>
      </nuxt-link>
      <nuxt-link to="/blog" title="Notes about my work">
        <span>Tech blog</span>
      </nuxt-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    innerPage: Boolean
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/vars';
@import '~assets/styles/mq';

header {
  nav {
    margin: 0 20px 30px;

    > a {
      border-bottom: 1px dotted $c-link;
      margin: 0 10px 5px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        transition: height 0.25s ease-in-out;
        will-change: transform;
        background-color: $c-primary;
        z-index: 0;
      }

      span {
        position: relative;
        color: $c-link;
        z-index: 1;
      }

      &:hover,
      &.nuxt-link-active {
        border-bottom: 1px solid $c-primary;

        &:after {
          height: 20px;
        }
      }
    }
  }

  &.inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      margin-top: 30px;
    }

    .inner-logo {
      font: rem(28) $font-family-heading;
      font-weight: 900;
      margin: 0 30px;

      > a {
        color: $c-default;
        &:hover {
          color: $c-primary;
        }
      }
    }
  }

  @include mq($until: tablet) {
    display: none;

    &.inner {
      .inner-logo {
        margin: 17px 20px 0;
      }
      nav {
        display: none;
      }
    }
  }
}
</style>
