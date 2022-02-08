<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Iluminación 3D


    Separador 


    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Iluminación global
    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Stopmotion
    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Tipos de nodos para iluminar
    Separador 

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  High Dinamic Range Image (HDRI) o imagen de alto rango dinámico 
    Separador 

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5  Iluminación en interiores y exteriores 
    Separador 

    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6  Fotografía de producto
    Separador 

</template>

<script>
export default {
  name: 'Tema2',
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
