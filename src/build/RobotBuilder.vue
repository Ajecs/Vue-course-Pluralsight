<template>
  <div class="content">
    <!-- La herencia de estilos en vue puede solo aplicarse en un scoped a un root element
    de un componente hijo-> en este caso la clase content -->
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <!-- :class no excluye a las clases definidas previamente -->
        <!-- Binding un estilo css en linea  mediante un método -> :style="headBorderStyle" -->
        <!-- o utilizando class binding {'sale-border': selectedRobot.head.onSale}" -->
        <div class="robot-name">
          <!-- con v-once renderiza una sola vez   -->
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
          <!-- Con v-if quita y agrega el elemento, mientras que v-show lo oculta o hace aparecer -->
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        // * v-bind shorthand -> :
        <button
          @click="selectPreviousHead()"
          class="prev-selector"
        >&#9668;</button>
        // * v-on shorthand -> @
        <button
          @click="selectNextHead()"
          class="next-selector"
        >&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso" />
        <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm" />
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base" />
        <button @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
          <!-- Nunca usar v-if y v-for en un mismo elemento por cuestiones de performance -->
          <td>{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValindIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValindIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0
    };
  },
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : ''
    },
    headBorderStyle() {
      return { /* Metodo que agrega un estilo en linea */
         border: this.selectedRobot.head.onSale ? 
         '3px solid red' :
         '3px solid #aaa' 
         }
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.bases[this.selectedBaseIndex]
      };
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
      /*
       * Object.assign permite definir a la instancia robot que se le asigna el costo
       * Asegurando que el objeto no se repita */
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValindIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValindIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },

    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValindIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValindIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },

    selectNextTorso() {
      this.selectedTorsoIndex = getNextValindIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = getPreviousValindIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },

    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValindIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValindIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },

    selectNextBase() {
      this.selectedBaseIndex = getNextValindIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    },
    selectPreviousBase() {
      this.selectedBaseIndex = getPreviousValindIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    }
  }
};
</script>

<style scoped lang="scss">
  
/*  
  ! nunca deben haber estilos globales de los componentes de la aplicación
*/
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
    img {  
    width: 165px;
    }
}

.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
</style>