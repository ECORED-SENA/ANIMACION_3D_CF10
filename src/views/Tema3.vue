<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Motores de <i>render</i>

    div.tema3-fondo1
      .row.justify-content-center.mb-5
        .col-lg-6.pt-4.px-4
          figure.mb-0
            img(src='@/assets/curso/tema3/img01.svg')      
        .col-lg-6.d-flex.align-items-center
          div
            p.mb-4 El <i>render</i> realiza la conversión de una imagen 3D en una imagen plana 2D, es la interpretación de lo que se ve en el escenario en una imagen, para compararlo de alguna manera sería el revelado, la representación o retrato de un escenario mediante varios procesos en los que entran a participar, las texturas, luces coordinadas etc., para simular escenarios creíbles. Esto se lleva a cabo mediante rebotes de luz sobre los objetos. Por ende, la apariencia de las imágenes está directamente relacionada con las luces, cámara y materiales.
            p.mb-0 En <i>Blender</i> existen tres motores, los cuales tienen características que se verán a continuación.
      .tema2-LineaTiempoD
        LineaTiempoD.color-primario.mx-3
          .row.justify-content-center(numero="a" titulo="<i>Eevee</i>")          
            .col-lg-12
              p.mb-4 Renderizado basado en físicas, una de sus características destacadas es que hace el proceso en tiempo real. Está enfocado en la velocidad e interactividad, se puede utilizar tanto en el <i>viewport </i>como en la salida final de imágenes, sus materiales están creados de la misma manera que los nodos de <i>cycles</i>, lo cual lo hace de fácil uso y vista previa para <i>cycles</i>. La gran diferencia de <i>eevee </i>con <i>cycles</i>, es que no utiliza <i>raytracing</i>, sino rasterización, lo cual se mide mediante algoritmos, indicando. Aproximadamente, cómo interactúa la luz con los objetos.
              p.mb-5 A continuación, se relacionan algunos videos en donde se podrá encontrar más información respecto a los motores de <i>render</i>.
              .row.justify-content-center.mb-5
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=kdPnDqw1auA" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  <i>Sampling ambient occlusion</i>
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=kfXzucDFPyg" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  <i>bloom</i>
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=YszU9bIHw0s" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  <i>Depth of field</i>
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=17GZtegkyDE" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  <i>Subsurface scatter</i>
              
              p.mb-4 Igualmente, se ha dispuesto de un documento, en donde podrá consultar el paso a paso correspondiente:      
              .row.justify-content-end.mb-4
                .col-lg-3
                  a.anexo.mb-4(:href="obtenerLink('/downloads/Motores de render.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-doc.svg")
                    .anexo__texto
                      p <b>Motores de <i>render</i></b>
              p.mb-4 Se puedes consultar los siguientes videos, en donde hallarás más información al respecto, en los siguientes enlaces:

              .row.justify-content-center.mb-5
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=tfCwiep1tqk&ab_channel=BlenderRookie" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  Youtube fuente canal <i>Blender</i> <i>Rookie</i>
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=awowN6uZ-X8&ab_channel=BlenderSecrets" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  Youtube fuente canal <i>blender secrets</i>
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=t0jdE3dhrdo&ab_channel=Cinematix" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  Youtube fuente canal Cinematix
                .col-lg-3.d-flex
                  .tema2-link.d-flex(style="width:100%")
                    a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=osVFjcNS69k&ab_channel=Blendtuts-ES" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Video.</b>  Youtube fuente: Blendtuts-ES
              div.tema3-fondo10.py-4
                .row.justify-content-center
                  .col-lg-8.ps-5
                    p.mb-4 <b>Motores <i>render</i></b>
                    p.mb-5 Los motores <i>render</i> son de ayuda para profundizar con una escena, por lo que se invita a consultar el video complementario que permitirá saber algo más a este respecto
                    div.ps-4.pe-5
                      .row.justify-content-center.mb-4
                        .col-lg-6.d-flex
                          .tema3-link.d-flex(style="width:100%")
                            a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=tfCwiep1tqk&ab_channel=BlenderRookie" target="_blank")
                              .anexo__icono
                                img(src="@/assets/curso/tema3/img03.svg")
                              .anexo__texto
                                p <b>Video.</b>  Youtube fuente canal <i>Blender</i> <i>Rookie</i>
                        .col-lg-6.d-flex
                          .tema3-link.d-flex(style="width:100%")
                            a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=awowN6uZ-X8&ab_channel=BlenderSecrets" target="_blank")
                              .anexo__icono
                                img(src="@/assets/curso/tema3/img03.svg")
                              .anexo__texto
                                p <b>Video.</b>  Youtube fuente canal <i>blender secrets</i>

                      .row.justify-content-center.mb-0
                        .col-lg-6.d-flex
                          .tema3-link.d-flex(style="width:100%")
                            a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=t0jdE3dhrdo&ab_channel=Cinematix" target="_blank")
                              .anexo__icono
                                img(src="@/assets/curso/tema3/img03.svg")
                              .anexo__texto
                                p <b>Video.</b>  Youtube fuente canal Cinematix
                        .col-lg-6.d-flex
                          .tema3-link.d-flex(style="width:100%")
                            a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=osVFjcNS69k&ab_channel=Blendtuts-ES" target="_blank")
                              .anexo__icono
                                img(src="@/assets/curso/tema3/img03.svg")
                              .anexo__texto
                                p <b>Video.</b>  Youtube fuente: Blendtuts-ES

          .row.justify-content-center(numero="b" titulo="<i>Cycles</i>")   
            .col-lg-12
              p.mb-5 Este sistema de <i>render</i> utiliza el trazado de rayos, basándose en físicas y su comportamiento para generar la imagen, se pueden pasar de <i>eevee </i>a <i>cycles</i>, puesto que son compatibles en ciertos parámetros. 
              div.tema3-fondo20.py-4
                .row.justify-content-center
                  .col-lg-8.ps-5
                    p.mb-4 <b><i>Cycles</i></b>
                    p.mb-5 Las características de <i>cycles</i> pueden ser consultadas en mayor detalle en el siguiente video:
                    div.ps-4.pe-5
                      .row.justify-content-center.mb-4
                        .col-lg-6.d-flex
                          .tema3-link.d-flex(style="width:100%")
                            a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://www.youtube.com/watch?v=bnqW7Ga6H2U&ab_channel=Blendtuts-ES" target="_blank")
                              .anexo__icono
                                img(src="@/assets/curso/tema3/img03.svg")
                              .anexo__texto
                                p <b>Video.</b>  fuente: Blendtuts-ES                      
          .row.justify-content-center(numero="b" titulo="<i>Workbench</i>")     
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
