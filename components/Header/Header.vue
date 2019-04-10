<template>
  <header :class="{ inner: innerPage }">
    <div v-if="innerPage" class="inner-logo">
      <nuxt-link to="/" title="Return to homepage">Sergey Panay</nuxt-link>
    </div>
    <div class="mobview-icon" @click="toggleSideMenu"></div>
    <nav :class="{ opened: opened }">
      <nuxt-link to="/about" title="Information about me">
        <span>Who am I?</span>
      </nuxt-link>
      <nuxt-link to="/projects" title="My works">
        <span>What did I?</span>
      </nuxt-link>
      <nuxt-link to="/services" title="Services and benefits">
        <span>What can I do?</span>
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
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    toggleSideMenu() {
      this.opened = !this.opened
    }
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
      color: $c-link;
      text-decoration: none;
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
        text-decoration: none;
        transition: color 0.25s ease-in-out;
        will-change: opacity;
        &:hover {
          color: $c-primary;
        }
      }
    }
  }

  .mobview-icon {
    display: none;
  }

  @include mq($until: tablet) {
    .mobview-icon {
      display: block;
      position: relative;
      z-index: 100;
      cursor: pointer;
      text-align: right;
      margin: 14px 20px 0 0;
    }

    nav {
      position: fixed;
      top: 0;
      right: 0;
      transition: transform 0.25s ease-in-out;
      will-change: transform;
      transform: translate(100%, 0);
      width: 300px;
      height: 100%;
      margin: 0;
      padding-top: 30px;
      z-index: 99;
      box-shadow: 0 0 8px #aaa;
      background: $c-bg;
      &.opened {
        transform: translate(0, 0);
      }

      > a {
        display: block;
        padding: 10px;
        margin: 0;
        border-bottom: 1px solid darken($c-bg, 7%);
        &:after {
          content: none;
        }
      }
    }

    &.inner {
      nav {
        margin-top: 0;
      }
      .mobview-icon {
        margin: 0;
        margin-right: 20px;
      }
      .inner-logo {
        margin: 0 20px;
      }
    }
  }
}
</style>
