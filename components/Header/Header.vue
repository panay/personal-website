<template>
  <header>
    <nav>
      <a href="about" title="Information about me">
        <span>Who am I?</span>
      </a>
      <a href="projects" title="My works">
        <span>What did I?</span>
      </a>
      <a href="services" title="Services and benefits">
        <span>What can I do?</span>
      </a>
      <a href="blog" title="Notes about my work">
        <span>Tech blog</span>
      </a>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/vars';
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

      &:hover {
        border-bottom: 1px solid $c-primary;
        &:after {
          height: 20px;
        }
      }
    }
  }
}
</style>
