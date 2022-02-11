<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Motores de render

    div.tema3-fondo1
      .row.justify-content-center.mb-5
        .col-lg-6.pt-4.px-4
          figure.mb-0
            img(src='@/assets/curso/tema3/img01.svg')      
        .col-lg-6.d-flex.align-items-center
          div
            p.mb-4 El render realiza la conversión de una imagen 3D en una imagen plana 2D, es la interpretación de lo que se ve en el escenario en una imagen, para compararlo de alguna manera sería el revelado, la representación o retrato de un escenario mediante varios procesos en los que entran a participar, las texturas, luces coordinadas etc., para simular escenarios creíbles. Esto se lleva a cabo mediante rebotes de luz sobre los objetos. Por ende, la apariencia de las imágenes está directamente relacionada con las luces, cámara y materiales.
            p.mb-0 En Blender existen tres motores, los cuales tienen características que se verán a continuación.

      LineaTiempoD.color-primario
        .row.justify-content-center(numero="a" titulo="Eevee")          
          .col-lg-12
            p.mb-4 Renderizado basado en físicas, una de sus características destacadas es que hace el proceso en tiempo real. Está enfocado en la velocidad e interactividad, se puede utilizar tanto en el viewport como en la salida final de imágenes, sus materiales están creados de la misma manera que los nodos de cycles, lo cual lo hace de fácil uso y vista previa para cycles. La gran diferencia de eevee con cycles, es que no utiliza raytracing, sino rasterización, lo cual se mide mediante algoritmos, indicando. Aproximadamente, cómo interactúa la luz con los objetos.
            p.mb-5 A continuación, se relacionan algunos videos en donde se podrá encontrar más información respecto a los motores de render.
            .row.justify-content-center.mb-5
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Sampling ambient occlusion
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  bloom
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  depth of field
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Subsurface scatter
            
            p.mb-4 Igualmente, se ha dispuesto de un documento, en donde podrá consultar el paso a paso correspondiente:      
            .row.justify-content-end.mb-4
              .col-lg-3
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-doc.svg")
                  .anexo__texto
                    p <b>Motores de render</b>
            p.mb-4 Se puedes consultar los siguientes videos, en donde hallarás más información al respecto, en los siguientes enlaces:

            .row.justify-content-center.mb-5
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Youtube fuente canal Blender Rookie
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Youtube fuente canal blender secrets
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Youtube fuente canal Cinematix
              .col-lg-3.d-flex
                .tema2-link.d-flex(style="width:100%")
                  a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/tema2/img09.svg")
                    .anexo__texto
                      p <b>Video.</b>  Youtube fuente: Blendtuts-ES
            div.tema3-fondo10.py-4
              .row.justify-content-center
                .col-lg-8.ps-5
                  p.mb-4 <b>Motores render</b>
                  p.mb-5 Los motores render son de ayuda para profundizar con una escena, por lo que se invita a consultar el video complementario que permitirá saber algo más a este respecto
                  div.ps-4.pe-5
                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Youtube fuente canal Blender Rookie
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Youtube fuente canal blender secrets

                    .row.justify-content-center.mb-0
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Youtube fuente canal Cinematix
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Youtube fuente: Blendtuts-ES

        .row.justify-content-center(numero="b" titulo="Cycles")   
          .col-lg-12
            p.mb-5 Este sistema de render utiliza el trazado de rayos, basándose en físicas y su comportamiento para generar la imagen, se pueden pasar de eevee a cycles, puesto que son compatibles en ciertos parámetros. 
            div.tema3-fondo20.py-4
              .row.justify-content-center
                .col-lg-8.ps-5
                  p.mb-4 <b>Cycles</b>
                  p.mb-5 Las características de cycles pueden ser consultadas en mayor detalle en el siguiente video:
                  div.ps-4.pe-5
                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  fuente: Blendtuts-ES                      
        .row.justify-content-center(numero="b" titulo="Workbench")     
          .col-lg-12
            p.mb-0 Se creó con la función de ser utilizado para vistas previas, modelado y composición
             
    separador

</template>

<script>
export default {
  name: 'Tema3',
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
