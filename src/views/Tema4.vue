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

    div.tema3-fondo10.py-4.mb-5
              .row.justify-content-center
                .col-lg-8.ps-5
                  p.mb-4 <b>Motores <i>render</i></b>
                  p.mb-5 A continuación, se presentan varios videos que explican cómo generar estos efectos, así mismo se invita a consultar el documento enlazado en donde encontrará información al respecto:
                  div.ps-4.pe-5
                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Nubes
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Lluvia

                    .row.justify-content-center.mb-4
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Fuego y humo
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Explosion

                    .row.justify-content-center.mb-0
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/curso/tema3/img03.svg")
                            .anexo__texto
                              p <b>Video.</b>  Neblina
                      .col-lg-6.d-flex
                        .tema3-link.d-flex(style="width:100%")
                          a.anexo.mb-4.mb-lg-0(style="width:100%" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                            .anexo__icono
                              img(src="@/assets/template/icono-doc.svg")
                            .anexo__texto
                              p niebla

    h4.mb-4 Archivos de anexos

    .row.justify-content-center.mb-0
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table    
            thead
              tr
                th ANEXO GUIÓN
                th RECURSO
                th ARCHIVO
            tbody
              tr
                td.text-center ANEXO 1 
                td.text-center <i>Eleven - Rig</i> <i>Blender</i>
                td.text-center.d-flex.justify-content-center
                  a(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")                           
                    img(style="width: 36px" src="@/assets/template/icono-pdf.svg")

              tr
                td.text-center ANEXO 2
                td.text-center Addon - <i>Blender</i>
                td.text-center.d-flex.justify-content-center
                  a(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")                           
                    img(style="width: 36px" src="@/assets/template/icono-pdf.svg")

              tr
                td.text-center ANEXO 3 
                td.text-center Script_ui.py
                td.text-center.d-flex.justify-content-center
                  a(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")                           
                    img(style="width: 36px" src="@/assets/template/icono-pdf.svg")

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
