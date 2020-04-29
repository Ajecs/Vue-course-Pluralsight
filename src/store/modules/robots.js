import axios from 'axios'


/* 
  El almacenamiento del estado en Vuex (store) consiste en varios elementos:
  - State (el cambio de estado global)
  - Mutations -> cambios sincronos que modifican el estado de forma indirecta y que deben realizarse
  - en cada cambio
  - Getters -> acciones logicas sobre el estado que son almacenadas para su reutilización
  - Actions -> cambios asincronos del estado usualmente a partir APIS 
*/
export default {
  state: {
    // los cambios de estado requieren de un estado por defecto cada vez que se genere alguno.
    cart: [],
    parts: null,
  },
  mutations: {
    // * cambios sincronos en el estado, requieren del parametro state y los datos a modificar
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
    updateParts(state, parts) {
      state.parts = parts
    },
  },
  actions: {
    // * Cambios asincronos en el estado usualmentes implementados a partir de solicitudes HTTP a una API
    getParts({ commit }) {
      // context (parametros del metodo) son items que modifican el estado (citados arriba)
      // son: las propiedades state y getters y los métodos commit y dispatch
      axios
        .get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error)
      // ! Para ejecutar un api sin problemas de CORS Vue utiliza un proxy que se configura
      // ! en vue.config
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot]
      return axios
        .post('api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
    },
  },
  getters: {
    // * Permite almacenar una función lógica aplicada al estado reutilizable
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    },
  },
}