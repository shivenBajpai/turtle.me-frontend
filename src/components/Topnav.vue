<template>
  <div class="pc">
    <div id="nav">
      <div class="title">
        <router-link class="title" to="/">turtle.me</router-link>
      </div>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/newsletter">Sign up for our Newsletter!</router-link>
      <div>
        <img :src="imgSrc" @click="toggle" id="DLToggle" style="height:2em;margin-right:2.5vw" alt="Dark Mode">
      </div>
    </div>
  </div>
  <div class="mobile">

  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {

  setup() {

    // Dark Mode - Light Mode Toggle code
    const darkMode = ref(false)
    const imgSrc = ref('./Dark-Mode-Icon.svg')
    const root = document.querySelector(":root");

    const toggle = () => {
      console.log('toggled darkmode')
      darkMode.value = !darkMode.value

      if (darkMode.value) {
        imgSrc.value = "./Light-Mode-Icon.svg"
        root.style.setProperty('--white','#1E1E1E')
        root.style.setProperty('--black','#F9F7F7')
        root.style.setProperty('--accent-light','#112D4E')
        root.style.setProperty('--accent-dark','#3F72AF')
        root.style.setProperty('--altblack','#DBE2EF')
      }
      else {
        imgSrc.value = "./Dark-Mode-Icon.svg"
        root.style.setProperty('--white','#F9F7F7')
        root.style.setProperty('--black','#1E1E1E')
        root.style.setProperty('--accent-light','#3F72AF')
        root.style.setProperty('--accent-dark','#112D4E')
        root.style.setProperty('--altblack','#1E1E1E')
      }
    }

  return {darkMode, toggle, imgSrc}
  }
}
</script>

<style scoped>

.title {
  font-size: 2rem;
  flex-grow: 4;
  flex-shrink: 1;
  text-align: left;
  font-weight: bold;
  color: var(--accent-white);
  margin: 0;
  text-decoration: none;
}

@media only screen and (max-width: 800px) {
  .pc {
    display:none
  }

  body{
    padding-top:10vh
  }

  .mobile {
    display:inherit;
  }
}

.mobile {
  display:none;
}

.pc #nav {
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  background-color: var(--accent-light);
  padding: 2vh
}

#nav a:not(.title) {
  padding:12px 2.5vw;
  margin: 0 1vw;
  border-radius: 1.5vh;
  line-height: 2.5vh;
  font-weight: bold;
  color: #F9F7F7;
  text-decoration: none;
  transition: 0.3s;
}

#nav a:hover:not(.title), #nav a.router-link-exact-active:hover:not(.title) {
  background-color: #F9F7F7;
  color: var(--accent-light);
}

#nav a.router-link-exact-active:not(.title) {
  color: var(--accent-light);
  background: var(--accent-white);
}
</style>