<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Simulación y Fx

    div.tema2-fondo1.mb-5.pt-5
      brbr      
      .row.justify-content-center
        .col-10.pt-5
          p.mb-5 Los <i>visual effects</i>, o FX, son aquellos efectos que se agregan en la producción sin ayuda de la posproducción, en el caso de animación 3D, son los efectos que se crean directamente en la escena y que suelen crearse mediante sistemas emisores de partículas.
          .row.justify-content-center  
            .col-lg-3
              div.BorTit2.mb-3         
                p.mb-0 <b>Figura 14</b>  Efecto visual
          figure.mb-5
            img(src='@/assets/curso/tema4/img01.png') 

          p.mb-0 Los sistemas de partículas en <i>Blender</i> sirven para generar efectos visuales destinados a simular efectos como fuego, lluvia, humo etc., y combinarse entre ellos para llevar a cabo un proyecto audiovisual mediante la configuración de los parámetros necesarios para que se adapten a la escena con casos prácticos, como la creación de fuentes de fuego, generación de nubes y lluvia, entre otros. 

    div.tema3-fondo10.py-4
              .row.justify-content-center
                .col-lg-8.ps-5                  
                  p.mb-5 A continuación, se presentan varios videos que explican cómo generar estos efectos, así mismo se invita a consultar el documento enlazado en donde encontrará información al respecto:
                  div.ps-4.pe-5
                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" :href="obtenerLink('/downloads/niebla.pdf')" target="_blank")
                            .anexo__icono
                              img(src="@/assets/template/icono-pdf.svg")
                            .anexo__texto
                              p <b>Niebla</b>
                        
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=46CEvGZubds" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p.mb-1 <b>Video. Nubes.</b> Generar nubes volumétricas procedurales.                       

                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=T8BQoGwFsoQ" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video. Lluvia.</b> Generar efectos de lluvia con emisor de partículas.                         

                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=UO7uE5-4m4Y" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video. Fuego y humo.</b> Generar el efecto fuego y humo.                       

                    .row.justify-content-center.mb-0
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=sM0mQmKl-zY" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video. Explosión.</b> Generar el efecto explosión a un objeto.                         

                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=GsobhZ_rxx8" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video. Neblina.</b> Generar el efecto niebla en un escenario.
    separador

</template>

<script>
export default {
  name: 'Tema4',
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
