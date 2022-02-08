<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Conceptos básicos de iluminación


    Separador 


    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Teoría de la luz 
    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Teoría del color 
    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Triángulo de iluminación
    Separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Reloj de Iluminación 
    Separador 

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Propiedades de la luz
    Separador 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
