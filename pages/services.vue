<template>
  <section class="container">
    <h1>
      I offer front-end development for your projects and ready to join your
      team.
    </h1>
    <div class="skillboxes">
      <div class="skillbox">
        <h2>Current experience</h2>
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
            <p>Study and use for small projects</p>
          </div>
        </div>
      </div>
      <div class="skillbox">
        <h2>Past experience</h2>
        <div class="skillbox-list">
          <div class="skillbox-list__item">
            <h3>.NET, C#, Razor</h3>
            <p>Worked within .NET ecosystem</p>
          </div>
          <div class="skillbox-list__item">
            <h3>Backbone / MarionetteJS / CoffeeScript</h3>
            <p>Made a few projects with this stack</p>
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
      title: 'Services and benefits — Sergey Panay'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';

.skillboxes {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;

  .skillbox {
    flex: 1 0 50%;
    max-width: 50%;
    width: 100%;
    padding: 20px;
    margin: 10px;
    border: 1px solid darken($c-bg, 15%);
  }
}
</style>
