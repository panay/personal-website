<template>
  <div>
    <Header :inner-page="true" />
    <nuxt />
    <MobMenu />

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
import Header from '../components/Header/Header'
import MobMenu from '../components/MobMenu/MobMenu'
import ContactsFormModal from '../components/ContactsFormModal/ContactsFormModal'

export default {
  components: { Header, MobMenu, ContactsFormModal },
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

<style lang="scss" scoped>
@import '~assets/styles/vars';
@import '~assets/styles/mq';

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
</style>
