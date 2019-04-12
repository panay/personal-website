<template>
  <div v-if="opened" class="modal-wrapper">
    <div class="modal">
      <h3 class="modal__heading">Choose a convenient way to contact me</h3>
      <Socials class="modal__socials" />
      <span class="modal__close-btn" title="Close the window" @click="onClose">
        <svgicon
          icon="cancel-music"
          width="18"
          height="18"
          :original="true"
        ></svgicon>
      </span>
    </div>
  </div>
</template>

<script>
import '~/assets/compiled-icons/cancel-music'
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

  .modal {
    background: $c-bg;
    max-width: 420px;
    width: 100%;
    padding: 20px;
    position: relative;

    &__heading {
      margin-bottom: 30px;
    }

    &__socials {
      text-align: center;
    }

    &__close-btn {
      position: absolute;
      top: 10%;
      right: 10px;
      cursor: pointer;
      > svg {
        fill: $c-default;
        transition: fill 0.25s ease-in-out;
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
