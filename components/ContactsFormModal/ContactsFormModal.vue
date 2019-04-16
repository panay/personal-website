<template>
  <div class="modal-wrapper" :class="{ opened: opened }">
    <div class="modal">
      <h3 class="modal__heading">Choose a convenient way to contact me</h3>
      <Socials class="modal__socials" />
      <span class="modal__close-btn" title="Close the window" @click="onClose">
        <svgicon
          icon="cancel"
          width="18"
          height="18"
          :original="true"
        ></svgicon>
      </span>
    </div>
  </div>
</template>

<script>
import '~/assets/compiled-icons/cancel'
import Socials from '../Socials/Socials'

export default {
  name: 'ContactsFormModal',
  components: { Socials },
  props: {
    opened: Boolean
  },
  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/vars';
@import '~assets/styles/mq';

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(#000, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease-in-out;
  will-change: opacity;
  &.opened {
    opacity: 1;
    visibility: visible;
  }

  .modal {
    background: $c-bg;
    max-width: 420px;
    width: 100%;
    padding: 20px;
    position: relative;
    box-shadow: 0 3px 5px -1px rgba(#000, 0.2), 0 6px 10px 0 rgba(#000, 0.14),
      0 1px 18px 0 rgba(#000, 0.12);

    &__heading {
      margin-bottom: 30px;
    }

    &__socials {
      text-align: center;
    }

    &__close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
      > svg {
        fill: darken($c-bg, 15%);
        transition: color 0.25s ease-in-out;
        will-change: opacity;
      }
      &:hover,
      &:active {
        color: $c-primary;
        > svg {
          fill: $c-primary;
        }
      }
    }
  }
}
</style>
