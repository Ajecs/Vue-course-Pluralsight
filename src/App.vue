<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt=""> Build a bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <HomePage/> -->
      <RobotBuilder/>
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue'

import RobotBuilder from './build/RobotBuilder.vue'

export default {
  name: 'App',
  components: {
    RobotBuilder,
  }
}
</script>

<style>
*, ::after, ::before {
  box-sizing: border-box;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 85vw;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
  list-style-type: none;
}
.nav-item {
  display: inline block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
main {
  margin: 0 auto;
  padding: 2em;
  background-color:white;
  width: 85vw;
  min-height: 300px;

}
</style>
