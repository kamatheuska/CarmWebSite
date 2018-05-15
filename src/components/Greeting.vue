<template>
  <div class="Greeting">
    <div class="Greeting__container">
      <div class="Greeting__logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="Greeting__action"
          @click="goToHome()">
        <h1>ENTER</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goToHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.Greeting {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
  background-color: #000;
}
.Greeting__container h1 { font-weight: 100 }
.Greeting__container {
  display: flex;
  text-align: center;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  color: #00B1BD;
}
.Greeting__action:hover {
  color: #E3E3E3;
  background-color: #00B1BD;
}
.Greeting__action {
  background-color: #E3E3E3;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  cursor: pointer;
}
.Greeting__logo img {}
.Greeting__logo {
  background-color: #00B1BD;
  padding: 1.2rem;
  display: flex;
  align-items: center;
}
@media only screen
  and (max-device-width: 520px)
  and (orientation: portrait) {
    .Greeting           { font-size: 14px }
    .Greeting__logo img { max-height: 80% }
  }

@media only screen
  and (min-device-width: 540px)
  and (max-device-width: 820px)
  and (orientation: landscape) {
  }
</style>
