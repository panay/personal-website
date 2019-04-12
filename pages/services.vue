<template>
  <section class="container">
    <h1>
      Front-end development, team leadership, work in&nbsp;a&nbsp;team.
    </h1>
    <div class="skillboxes">
      <div class="skillbox">
        <h2 class="skillbox__title">Current experience</h2>
        <div class="skillbox-list">
          <div class="skillbox-list__item">
            <h3>HTML5 / Pug</h3>
            <p>Semantic, SEO, New Features, BEM, Microdata (schema.org)</p>
          </div>
          <div class="skillbox-list__item">
            <h3>CSS3 / SCSS / LESS</h3>
            <p>
              Flexbox, Grid, Specificity, Cross-browser, Animations
            </p>
          </div>
          <div class="skillbox-list__item">
            <h3>JavaScript / TypeScript</h3>
            <p>
              ES6+, OOP, Patterns, Data types, Debugging, Modern features,
              Cross-browser
            </p>
          </div>
          <div class="skillbox-list__item">
            <h3>Angular / Vue</h3>
            <p>Have been working with them for 3 years</p>
          </div>
          <div class="skillbox-list__item">
            <h3>Reactive Programming (RxJS)</h3>
            <p>Have been working with it for 2 years</p>
          </div>
          <div class="skillbox-list__item">
            <h3>Webpack / Gulp / Parcel</h3>
            <p>Configure and use it</p>
          </div>
          <div class="skillbox-list__item">
            <h3>Git, Gitlab, Bitbucket, Jira, YouTrack</h3>
            <p>Version control, Agile methodology, Working with team</p>
          </div>
          <div class="skillbox-list__item">
            <h3>NodeJS</h3>
            <p>Study and use it for small projects</p>
          </div>
        </div>
      </div>
      <div class="skillbox">
        <h2 class="skillbox__title">Past experience</h2>
        <div class="skillbox-list">
          <div class="skillbox-list__item">
            <h3>.NET, Razor</h3>
            <p>Worked within .NET ecosystem for about 2 years</p>
          </div>
          <div class="skillbox-list__item">
            <h3>Backbone / MarionetteJS / CoffeeScript</h3>
            <p>Made a few projects with this stack</p>
          </div>
          <div class="skillbox-list__item">
            <h3>jQuery</h3>
            <p>Made plugins from scratch</p>
          </div>
          <div class="skillbox-list__item">
            <h3>PHP, C#, Ruby</h3>
            <p>
              I understand how backend works and I can do tasks a little bit
              better
            </p>
          </div>
          <div class="skillbox-list__item">
            <h3>MySQL, MSSQL, SQL</h3>
            <p>Worked with DBs and ready to repeat</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Services — Sergey Panay'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';
@import '~assets/styles/mq';

.skillboxes {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;

  .skillbox {
    flex: 1 0 510px;
    max-width: 510px;
    width: 100%;
    margin: 10px;
    border-left: 1px solid $c-primary;
    // border: 1px solid darken($c-bg, 15%);

    &__title {
      padding: 20px;
      display: inline-block;
      vertical-align: baseline;
      position: relative;
      margin: -1px 0 0 -1px;
      background-color: $c-primary;
    }

    .skillbox-list {
      padding: 20px;

      &__item {
        position: relative;
        &:before {
          content: '';
          width: 10px;
          height: 10px;
          background-color: $c-primary;
          border-radius: 50%;
          position: absolute;
          left: -26px;
          top: 7.5px;
        }
        h3 {
          margin-bottom: 0;
        }

        p {
          margin-top: 8px;
          line-height: 1.5;
          color: darken($c-bg, 20%);
        }
      }
    }
  }

  @include mq($until: tablet) {
    display: block;
    margin: 0;
    .skillbox {
      margin: 20px 0;
    }
  }
}
</style>
