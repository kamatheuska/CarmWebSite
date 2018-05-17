<template>
  <div class="Gallery">
    <nav-bar></nav-bar>
    <app-slider></app-slider>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Slider from './Slider'

export default {
  name: 'app-gallery',
  data () {
    return {

    }
  },
  components: {
    'nav-bar': Navbar,
    'app-slider': Slider
  }
}
</script>

<style>
.Gallery {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  width: 100%;
}
</style>
