<template>
  <TopNav></TopNav>
  <h1>Welcome! to the official page of the Turtle</h1>
  <img src="../assets/logo.png" alt="">
</template>

<script>
import TopNav from '../components/Topnav.vue'

export default {
  setup() {
    return {}
  },
  components: {
    TopNav
  }
}
</script>

<style>
  h1 {
    font-size: 8vh;
    color:#166855;
  }

  body {
    padding-top: 10vh;
  }
</style>