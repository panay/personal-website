<template>
  <div class="container">
    <section class="about-content">
      <h1>
        Hi, I&rsquo;m an&nbsp;experienced front-end developer based
        in&nbsp;Izhevsk, Russia.
      </h1>
      <ul class="facts">
        <li class="facts__item">
          <h3>27</h3>
          <div>years old</div>
        </li>
        <li class="facts__item">
          <h3>7 years of experience</h3>
          <div>in web development</div>
        </li>
        <li class="facts__item">
          <h3>B1-B2</h3>
          <div>English level</div>
        </li>
        <li class="facts__item">
          <h3>Self-motivated</h3>
          <div>person</div>
        </li>
        <li class="facts__item">
          <h3>Love</h3>
          <div>to work and research</div>
        </li>
      </ul>
      <h3>
        Interested in working together?
        <a
          href="javascript:;"
          class="action-link"
          @click.prevent="openContactsModal"
          >Let’s have a talk.</a
        >
      </h3>
    </section>
    <ContactsFormModal :opened="opened" @close="opened = false" />
  </div>
</template>

<script>
import ContactsFormModal from '../components/ContactsFormModal/ContactsFormModal'

export default {
  head() {
    return {
      title: 'About me — Sergey Panay'
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
  max-width: 65%;
  width: 100%;
  .facts {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 30px -10px 20px;

    &__item {
      flex: 1 0 200px;
      width: 200px;
      height: 160px;
      margin: 10px;
      background-color: $c-bg;
      border: 1px solid darken($c-bg, 15%);
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .action-link {
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

  @include mq($until: 540px) {
    max-width: 100%;
    .facts {
      display: block;
      margin: 0 0 20px;

      &__item {
        width: 100%;
        margin: 10px 0;
      }
    }
  }
}
</style>
