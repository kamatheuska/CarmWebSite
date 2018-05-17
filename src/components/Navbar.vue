<template>
  <header class="Navbar grid">
    <div class="Navbar__logo">
      <img src="../assets/logo.png" alt="Carmen Carrazquez">
    </div>
    <div class="Navbar__menu">
      <ul>
        <li v-for="(item, index) in navigation"
            @click="showCollection(item)"
            :key="`item#${index}`">{{ item }}</li>
      </ul>
    </div>
    <div class="Navbar__contact">
      <p>TEL. +34 606 264 417</p>
      <p>estudio@carmencarrazquez.com</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      currentCollection: 'TELEVISIÓN',
      navigation: [
        'TELEVISIÓN',
        'RETRATO EJECUTIVO',
        'REPORTAJE & EVENTOS',
        'EDITORIAL',
        'RETRATO',
        'PROYECTOS',
        'VOCACIONES ROTAS',
        'SOBRE MI | ABOUT ME'
      ]
    }
  },
  methods: {
    showCollection (name) {
      console.log('showCollection: ', this.currentCollection)
      this.currentCollection = name
    }
  }
}
</script>

<style scoped>
.Navbar {
  font-weight: 900;
  background-color: #00B1BD;
  padding: 2rem;
  line-height: 28px;
  color: #E3E3E3;
}
.Navbar__logo {}
.Navbar__contact {}
.Navbar__menu li {
  border-bottom: dotted 1px white;
  margin-bottom: 0.3rem;
}
</style>
