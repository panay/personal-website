import Vue from 'vue'
import VueSVGIcon from 'vue-svgicon'

if (process.client) {
  require('vue-svgicon/dist/polyfill')
}

Vue.use(VueSVGIcon)
