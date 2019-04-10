<template>
  <div class="socials">
    <a
      href="https://www.linkedin.com/in/s-panay/"
      target="_blank"
      rel="nofollow noopener"
      title="My profile on LinkedIn"
      class="socials__item"
    >
      <svgicon icon="linkedin" width="32" height="32" color="#0077B5"></svgicon>
    </a>
    <a
      href="https://t.me/panayka"
      target="_blank"
      rel="nofollow noopener"
      title="Write me on Telegram"
      class="socials__item"
    >
      <svgicon icon="telegram" width="32" height="32" color="#2CA5E0"></svgicon>
    </a>
    <a
      href="skype:s.panay?call"
      rel="nofollow noopener"
      title="Call me on Skype"
      class="socials__item"
    >
      <svgicon icon="skype" width="32" height="32" color="#00AFF0"></svgicon>
    </a>
  </div>
</template>
<script>
import '~/assets/compiled-icons/linkedin'
import '~/assets/compiled-icons/telegram'
import '~/assets/compiled-icons/skype'

export default {
  name: 'Socials'
}
</script>
<style lang="scss" scoped>
.socials {
  margin: 0 -10px;
  &__item {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
}
</style>
