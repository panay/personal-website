<template>
  <div class="container">
    <section class="content">
      <h1>/<span>uses</span>&nbsp;&mdash;&nbsp;my daily use tech</h1>
      <h2>Hardware</h2>
      <ul>
        <li>
          <a
            href="https://www.apple.com/shop/buy-mac/macbook-pro"
            target="_blank"
            rel="nofollow noopener"
            title="MacBook Pro"
            >MacBook Pro</a
          >
          13-inch, 2017 2,3GHz i5 8GB 128GB SSD
        </li>
      </ul>
      <h2>Development</h2>
      <ul>
        <li>
          <a
            href="https://www.jetbrains.com/webstorm/"
            target="_blank"
            rel="nofollow noopener"
            title="Webstorm IDE"
            >Webstorm IDE</a
          >
          with
          <a
            href="https://plugins.jetbrains.com/plugin/10321-nord"
            target="_blank"
            rel="nofollow noopener"
            title="Nord theme for Webstorm IDE"
            >Nord theme</a
          >
          and
          <a
            href="https://www.jetbrains.com/lp/mono/"
            target="_blank"
            rel="nofollow noopener"
            title="JetBrains Mono font for Webstorm IDE"
            >JetBrains Mono</a
          >
          font for my daily work
        </li>
        <li>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="nofollow noopener"
            title="Visual Studio Code"
            >VS Code</a
          >
          for develop pet-projects, study new things
        </li>
        <li>Terminal on Mac</li>
        <li>
          <a
            href="https://zeplin.io/"
            target="_blank"
            rel="nofollow noopener"
            title="Zeplin"
            >Zeplin</a
          >
          for work with designs and communicate with designers, PMs, other
          teammates for discussing new features
        </li>
        <li>Github, Gitlab you know <span>:)</span></li>
        <li>
          <a
            href="https://www.portainer.io/"
            target="_blank"
            rel="nofollow noopener"
            title="Portainer"
            >Portainer</a
          >
          for management and deployment docker images
        </li>
        <li>
          <a
            href="https://www.browserstack.com/"
            target="_blank"
            rel="nofollow noopener"
            title="Browserstack"
            >Browserstack.com</a
          >
          for testing my work in several browsers
        </li>
      </ul>
      <h2>Productivity</h2>
      <ul>
        <li>
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="nofollow noopener"
            title="Notion.so"
            >Notion.so</a
          >
          for writing some useful notes, daily plan, yearly plan, plan for doing
          my projects, and so on. There are many useful templates there.
        </li>
        <li>
          <a
            href="https://toggl.com/"
            target="_blank"
            rel="nofollow noopener"
            title="Toggl.com"
            >Toggl.com</a
          >
          for checking my work time if it is needed
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Uses – my daily use tech — Sergey Panay'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/functions';
@import '~assets/styles/vars';
@import '~assets/styles/mq';

.content {
  padding-bottom: 80px;

  h1 {
    font-size: rem(100);
  }

  span {
    color: $c-primary;
  }

  ul {
    > li {
      margin-bottom: 10px;
    }
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
