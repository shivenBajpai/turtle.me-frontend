<template>
  <div id="app-container">
    <router-view/>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const darkMode = ref()
    return {darkMode}
  },
  methods: {}
}
</script>


<style>

body {
  margin:0 !important;
  background-color: var(--white);
}

:root {
  --accent-white: #DBE2EF;
  --accent-light:#3F72AF;
  --accent-dark: #112D4E;
  --black:#1E1E1E;
  --altblack: #1E1E1E;
  --white:#F9F7F7;
}

#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
