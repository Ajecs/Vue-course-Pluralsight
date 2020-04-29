<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <!-- Forma alternativa con binding -->
              <!-- Exact permite la ruta exacta para evitar problemas en el active link -->
              <img class="logo" src="./assets/build-a-bot-logo.png" alt /> Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>Build</router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>Cart</router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view />
        <!-- por defecto tiene el nombre 'default' -->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    cart() {
      return this.$store.state.robots.cart
      // robots como la propiedad del modulo asignada
    }
  },
};
</script>

<style lang="css">
/* Global style */
*,
::after,
::before {
  box-sizing: border-box;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
/*
 * Los estilos con scoped solo alcanzan al componente y no al index donde se renderizan
 * Se caracterizan por un 'data-bind' que se agrega al elemento html
 * Afecta a componente hijos del componente padre 
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 95vw;
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
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 1em auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 3em;
  background-color: #aaa;
  width: 15vw;
  min-height: 300px;
}
main {
  padding: 2em;
  background-color: white;
  width: 80vw;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  background-color: mediumseagreen;

}
/* 
   code .content >>> .robot-name { 
     Con el uso del selecto >>> (selector deep) se puede heredar a un subelemento del componente hijo
    que no sea el elemento root. También afectará a otros componentes 
    también puede usarse '/deep/' 
     border: 1px solid blue; 
    } */
</style>
