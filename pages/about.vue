<template>
  <div class="container">
    <section class="about-content">
      <h1>
        Hi, I&rsquo;m an&nbsp;experienced front-end developer based
        in&nbsp;Izhevsk, Russia.
      </h1>
      <section class="history">
        <h2 class="history__title">
          Let's go to walk through by my professional history:
        </h2>
        <div class="history-item">
          <h3 class="history-item__title">2008&nbsp;&ndash;&nbsp;2012</h3>
          <div class="history-item__content">
            <ul>
              <li>Study in college</li>
              <li>PHP</li>
              <li>ZendFramework</li>
              <li>HTML 4, xHTML</li>
              <li>CSS 2</li>
              <li>Support websites under IE6-7</li>
              <li>Liquid layouts</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2012</h3>
          <div class="history-item__content">
            <ul>
              <li>.NET MVC</li>
              <li>C#</li>
              <li>Razor</li>
              <li>HTML 5 (Video, Audio, DnD, File)</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2013</h3>
          <div class="history-item__content">
            <ul>
              <li>Backbone</li>
              <li>MarionetteJS</li>
              <li>CoffeeScript</li>
              <li>RequireJS</li>
              <li>LESS</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2014&nbsp;&ndash;&nbsp;2015</h3>
          <div class="history-item__content">
            <ul>
              <li>Flexbox</li>
              <li>SASS</li>
              <li>Gulp, Grunt</li>
              <li>SVG</li>
              <li>CSS Animations</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive design</li>
              <li>Git, Gitflow</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2016</h3>
          <div class="history-item__content">
            <ul>
              <li>REST API</li>
              <li>AngularJS</li>
              <li>Angular 2</li>
              <li>TypeScript</li>
              <li>ImmutableJS</li>
              <li>Gulp, Webpack</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2017</h3>
          <div class="history-item__content">
            <ul>
              <li>Angular 4+</li>
              <li>TypeScript</li>
              <li>Modern JavaScript (ES6-7)</li>
              <li>RxJS</li>
              <li>State management (Redux)</li>
              <li>Webpack</li>
              <li>JIRA, Agile, Gitlab</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">2018&nbsp;&ndash;&nbsp;2019</h3>
          <div class="history-item__content">
            <ul>
              <li>Angular 6+</li>
              <li>VueJS, NuxtJS</li>
              <li>TypeScript</li>
              <li>ES6-7</li>
              <li>Docker</li>
              <li>Webpack</li>
              <li>NodeJS</li>
            </ul>
          </div>
        </div>
        <div class="history-item">
          <h3 class="history-item__title">You may be next</h3>
          <div class="history-item__content">
            <p>Let's make something amazing together!</p>
          </div>
        </div>
      </section>
    </section>
    <ContactsFormModal :opened="opened" @close="opened = false" />
    <section class="offer">
      <h3 class="offer__content">
        Interested in working together?
        <a
          href="javascript:;"
          class="offer__link"
          @click.prevent="openContactsModal"
          >Let’s have a talk.</a
        >
      </h3>
    </section>
  </div>
</template>

<script>
import ContactsFormModal from '../components/ContactsFormModal/ContactsFormModal'

export default {
  head() {
    return {
      title: 'About me, my services and skills — Sergey Panay'
    }
  },
  components: { ContactsFormModal },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    openContactsModal() {
      this.opened = true
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/styles/vars';
@import '~assets/styles/functions';
@import '~assets/styles/mq';

.about-content {
  padding-bottom: 80px;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  > li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      background-color: $c-bg;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-top: -5px;
      z-index: 1;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      border: 5px double $c-primary;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-top: -5px;
      z-index: 2;
    }
  }
}

.history {
  &__title {
    margin-bottom: 40px;
  }

  .history-item {
    position: relative;
    max-width: 50%;
    width: 100%;
    position: relative;
    padding-bottom: 10px;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 0;
      background-color: $c-primary;
      animation-name: lineY;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }

    &:nth-child(2) {
      &:after {
        animation-delay: 0.9s;
      }
    }
    &:nth-child(3) {
      &:after {
        animation-delay: 2.9s;
      }
      .history-item__title:before {
        animation-delay: 1.9s;
      }
    }
    &:nth-child(4) {
      &:after {
        animation-delay: 4.9s;
      }
      .history-item__title:before {
        animation-delay: 3.9s;
      }
    }
    &:nth-child(5) {
      &:after {
        animation-delay: 6.9s;
      }
      .history-item__title:before {
        animation-delay: 5.9s;
      }
    }
    &:nth-child(6) {
      &:after {
        animation-delay: 8.9s;
      }
      .history-item__title:before {
        animation-delay: 7.9s;
      }
    }
    &:nth-child(7) {
      &:after {
        animation-delay: 10.9s;
      }
      .history-item__title:before {
        animation-delay: 9.9s;
      }
    }
    &:nth-child(8) {
      &:after {
        animation-delay: 12.9s;
      }
      .history-item__title:before {
        animation-delay: 11.9s;
      }
    }
    &:nth-child(9) {
      &:after {
        animation-delay: 14.9s;
      }
      .history-item__title:before {
        animation-delay: 13.9s;
      }
    }

    &__title {
      padding: 20px 20px 0 20px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: 0;
        background-color: $c-primary;
        animation-name: lineX;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    }

    &__content {
      padding: 0 20px 20px 20px;
      color: lighten($c-default, 15%);
      line-height: 1.5;
    }

    &:nth-child(odd) {
      transform: scale(-1, 1);
      .history-item__title {
        transform: scale(-1, 1);
        &:before {
          left: inherit;
          right: 0;
        }
      }
      .history-item__content {
        transform: scale(-1, 1);
      }
    }
  }
}

.offer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $c-bg;
  box-shadow: 0 0 8px rgba(#000, 0.2);
  padding: 15px 30px 16px;
  z-index: 100;
  &__content {
    margin-bottom: 0;
  }

  &__link {
    color: $c-default;
    display: inline-block;
    vertical-align: baseline;
    padding: 8px 5px;
    margin-top: 3px;
    background-color: $c-primary;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
    will-change: opacity;
    &:hover,
    &:active {
      background-color: transparent;
      color: $c-primary;
    }
  }

  @include mq($until: tablet) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@keyframes lineX {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes lineY {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>
