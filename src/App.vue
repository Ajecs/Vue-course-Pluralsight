<template>
  <div id="app">
    <main>
      <HomePage/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 2em;
  background-color:white;
  width: 75vw;
  min-height: 300px;
  
}
</style>
