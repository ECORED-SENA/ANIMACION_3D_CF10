<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción
    
    div.introduccion-fondo1.pt-5.mb-5
      .row.justify-content-center
        .col-lg-10
          p.mb-4 La iluminación es uno de los aspectos más importantes a la hora de generar imágenes creíbles que representen y transmitan sensaciones y emociones; por eso, en este componente se profundizará en los conceptos que abarcan la psicología del color que está dada por la luz, así como la incidencia de los rayos de luz en las superficies, cómo afecta la luz en espacios cerrados y en espacios libres, también se explicará cuál es el esquema de reloj de iluminación y el triángulo de iluminación teniendo en cuenta los diferentes tipos de luces y, finalmente, se verán las simulaciones de partícula y las maneras en que <i>Blender</i>, mediante motores de <i>render</i>, genera la interpretación de los elementos en el escenario.
          figure.mb-0
            img(src='@/assets/curso/introduccion/img01.svg') 

    .row.justify-content-center
      .col-lg-10
        h2.text-center(style="color: #3D887B") Todos estos conocimientos, permitirán alcanzar logros y éxitos en la vida profesional.
        h2.mb-0.text-center(style="color: #D44F4A") ¡Ánimo y bienvenido!
    Separador

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
