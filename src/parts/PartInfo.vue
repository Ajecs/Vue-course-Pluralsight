<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import parts from "../data/parts";
export default {
  name: "PartInfo",
  computed: {
    part() {
      const { partType, id } = this.$route.params
      // partType es el parametro que tiene que coincidir con el ingresado en router/index.js
      return parts[partType].find(part => part.id === +id)
    }
  }
};
</script>