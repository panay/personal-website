<template>
  <div class="mobile-menu-wrapper">
    <div
      class="mobile-menu-button"
      :class="{ active: opened }"
      @click="toggleSideMenu"
    >
      <div class="hamburger-box">
        <div class="hamburger-box__inner"></div>
      </div>
    </div>
    <nav class="mobile-sidebar" :class="{ opened: opened }">
      <nuxt-link
        to="/about"
        title="Information about me"
        @click.native="hideSideMenu"
      >
        <span>Who am I?</span>
      </nuxt-link>
      <nuxt-link
        to="/services"
        title="Services and skills"
        @click.native="hideSideMenu"
      >
        <span>What can I do?</span>
      </nuxt-link>
      <nuxt-link to="/projects" title="My works" @click.native="hideSideMenu">
        <span>What did I?</span>
      </nuxt-link>
      <nuxt-link
        to="/blog"
        title="Notes about my work"
        @click.native="hideSideMenu"
      >
        <span>Tech blog</span>
      </nuxt-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'MobMenu',
  data() {
    return {
      opened: false
    }
  },
  methods: {
    toggleSideMenu() {
      this.opened = !this.opened
    },
    hideSideMenu() {
      if (this.opened) {
        this.opened = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/vars';
@import '~assets/styles/mq';

.mobile-menu-wrapper {
  display: none;
  @include mq($until: tablet) {
    display: block;
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // background-color: rgba($c-bg, 0.95);

    .mobile-menu-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 100;
      background-color: $c-primary;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 3px 5px -1px rgba(#000, 0.2), 0 6px 10px 0 rgba(#000, 0.14),
        0 1px 18px 0 rgba(#000, 0.12);
      transition: background-color 0.25s ease-in-out;
      will-change: opacity;
      &:hover {
        background-color: lighten($c-primary, 7%);
      }
      &:active {
        background-color: darken($c-primary, 3%);
      }

      .hamburger-box {
        position: relative;
        display: inline-block;
        width: 32px;
        height: 24px;

        &__inner,
        &__inner:after,
        &__inner:before {
          position: absolute;
          width: 100%;
          height: 4px;
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: $c-bg;
        }

        &__inner {
          top: 16px;
          left: 12px;

          &:after,
          &:before {
            display: block;
            content: '';
          }

          &:before {
            top: 10px;
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform, opacity;
          }

          &:after {
            top: 20px;
          }
        }
      }

      &.active {
        .hamburger-box__inner {
          transform: translate3d(0, 10px, 0) rotate(45deg);
          &:before {
            transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
            opacity: 0;
          }
          &:after {
            transform: translate3d(0, -20px, 0) rotate(-90deg);
          }
        }
      }
    }

    .mobile-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 320px;
      z-index: 99;
      background-color: $c-bg;
      box-shadow: 0 0 8px rgba(#000, 0.3);
      transform: translate(200%, 0);
      transition: transform 0.25s ease-in-out;
      will-change: transform;
      &.opened {
        transform: translate(0, 0);
      }

      > a {
        display: block;
        padding: 16px 10px;
        border-bottom: 1px solid darken($c-bg, 7%);
        text-decoration: none;
        color: $c-link;
        transition: color 0.25s ease-in-out,
          border-bottom-color 0.25s ease-in-out;
        will-change: opacity;
        &:hover {
          color: $c-primary;
          border-bottom-color: $c-primary;
        }
      }
    }
  }
}
</style>
