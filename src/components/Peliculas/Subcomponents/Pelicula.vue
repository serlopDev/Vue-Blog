<template src='./Pelicula.html'></template>

<script>

export default {

  name: "Pelicula",
  props: ['pelicula'],
  methods: {
    marcarFavorita(pelicula){
      this.$emit('favorita', pelicula);
    }
  }
};
</script>
