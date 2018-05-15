<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Oswald', Arial, sans-serif;
}
ul, menu, dir {
  margin: 0;
  padding: 0;
}
html * {
  box-sizing: border-box;
}
#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
}
input {
  font-family: monospace;
  padding-left: 0.5rem;
}
h1, h2, h3, h4, h5, h6 {
  -webkit-margin-before: 0.1em;
  -webkit-margin-after: 0.1em;
}
button {
  position: relative;
  background: none;
  cursor: pointer;
  font-family: 'Oswald', Arial, sans-serif;
}

/*=========================*\
  #VUE TRANSITIONS
\*=========================*/

.fade-enter-active{
  transition: opacity 1s;
  transition-delay: .4s;
}
.fade-leave-active {  transition: opacity 0.3s }
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
  transition-delay: 0.4s;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(5rem);
  opacity: 0;
}
</style>
