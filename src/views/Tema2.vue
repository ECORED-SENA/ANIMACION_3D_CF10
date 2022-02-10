<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Iluminación 3D

    div.tema2-fondo1.mb-5
      .row.justify-content-center
        .col-10.pt-5
          figure.mb-5
            img(src='@/assets/curso/tema2/img01.svg') 

          p.mb-0 La creación de objetos en 3D es una disciplina compleja que no solamente consiste en diseñar un objeto o un escenario tridimensional. Además, hay que intentar que queden lo más realistas posible. Para esto no basta con dejar el aspecto tridimensional lo más preciso al diseñarlo y renderizarlo, además de cuidar otros aspectos como la luz, y su incidencia en un objeto o en un escenario. En este aparte del curso se verán los tipos y usos de la iluminación y cuándo y cómo aplicarlas a tus productos. 


    Separador 


    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Iluminación global

    .row.justify-content-center.mb-5
      .col-lg-7.d-flex.align-items-center  
        .row.justify-content-center.tema1-row2
          .col-lg-11.my-5
            p.mb-4 Se trata de una técnica que, a través de algoritmos, calcula y modela tanto la iluminación proveniente de una fuente de luz que golpea directamente las superficies de los objetos (iluminación directa); como la forma en que la luz rebota desde una superficie hacia otras (iluminación indirecta), simulando todos los efectos generados por la reflexión de la luz sobre los objetos presentes, logrando que una escena se vea mucho más natural y fotorrealista. Ahora, se verán algunos ejemplos:
            p.mb-0 Un ejemplo clásico es el color bleeding, que se produce cuando la luz choca contra una superficie y transfiere su color hacia otras superficies cercanas (figura 9).
      .col-lg-5
        .row.justify-content-center  
          .col-lg-7
            div.BorTit.mb-3         
              p.mb-0 <b>Figura 9</b> Rebote de luz
        figure.mb-0
          img(src='@/assets/curso/tema2/img02.png') 
          figcaption Nota. Tomada de gurneyjourney.blogspot.com

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.px-4.py-5
          p.mb-4 O cuando los rayos del sol golpean la entrada de una cueva y rebotan hacia dentro ocasionando que su interior se ilumine también (figura 10).
          .row.justify-content-center  
            .col-lg-7
              .row.justify-content-center  
                .col-lg-5
                  div.BorTit.mb-3         
                    p.mb-0 <b>Figura 10</b> Cueva de hielo
              figure.mb-0
                img(src='@/assets/curso/tema2/img03.png') 
                figcaption Nota. Tomada de es.123rf.com
    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Stopmotion

    div.tema2-fondo2.mb-5
      .row.justify-content-center
        .col-10.pt-5
          figure.mb-5
            img(src='@/assets/curso/tema2/img04.svg') 

          p.mb-0 Blender define cinco tipos básicos de fuentes de luz, que comparten una serie de parámetros comunes estas son: sun, point, spot, área y background. Además, cada tipo de fuente de luz tiene un comportamiento definido y varios parámetros propios. La representación final de la superficie vendrá definida dependiendo del tipo de material y su comportamiento con la luz, por lo que los parámetros del material deberán definirse conjuntamente con los de las fuentes de luz.

    LineaTiempoD.color-primario
      .row.justify-content-center(numero="a" titulo="SUN")
        .col-lg-12
          p.mb-4 Este tipo de luz brinda una iluminación constante en una ubicación lejana, utilizada principalmente para entornos abiertos. La dirección de la luz se puede girar, lo que permite simular la posición de la luz solar.<br>Se invita a observar el siguiente video para mayor información: 
          figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center(numero="b" titulo="POINT")
        .col-lg-12
          p.mb-4 Aquí la luz es omnidireccional, irradia la misma cantidad de luz en 360 grados disminuyendo su intensidad entre más lejos se encuentre de los objetos. Es decir, que los objetos empiezan a oscurecer.<br>Se invita a observar el siguiente video para mayor información: 
          figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center(numero="c" titulo="SPOT")
        .col-lg-12
          p.mb-4 Esta luz se destaca por el tipo de forma de cono que tiene, ya que solo dentro de él se emite la luz. se puede ajustar el radio, para adquirir sombras más suaves.<br>Se invita a observar el siguiente video para más información al respecto: 
          figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center(numero="d" titulo="ÁREA")
        .col-lg-12
          p.mb-4 Este tipo de luz simula la que emite un televisor, este tipo de luz produce sombras con bordes suaves, a diferencia del otro tipo de luces artificiales, que tiene sombras duras. Su forma principal es la de una cuadrícula, la cual se puede cambiar, por otro tipo de forma.<br>Se invita a observar el siguiente video para mayor información: 
          figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center(numero="e" titulo="BACKGROUN")
        .col-lg-12
          p.mb-4 Este tipo de luz de ambiente que ya viene predefinido en Blender, el cual puede cambiar su color, valores y la fuerza de la luz, este es de tipo infinito, no tiene una posición de la luz, sino que ambienta todo el escenario por igual<br>Se invita a observar el siguiente video para mayor información: 
          figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Tipos de nodos para iluminar

    div.tema2-fondo3.mb-5
      .row.justify-content-center
        .col-10.pt-5
          figure.mb-5
            img(src='@/assets/curso/tema2/img05.svg') 

          p.mb-0 Una de las incorporaciones más potentes de Blender, en sus últimas versiones, corresponde al sistema de nodos de composición. Es de recordar que por medio de los nodos se pueden aplicar diferentes ajustes a los elementos de la escena (que se generan por capas de render), así hay un control preciso sobre el resultado final, además de hacer optimizaciones sobre diferentes capas. Entre estos nodos para iluminar se tienen los siguientes:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Sky Texture")
        .col-lg-11
          p.mb-5 Es un tipo de textura que simula una iluminación solar y ambiental en la que se pueden modificar varios parámetros, como posición del sol respecto al horizonte, rotación en el mundo, entre otros valiosos ajustes.
          .row.justify-content-center
            .col-lg-7
              figure.mb-0
                img(src='@/assets/curso/tema2/img06.png') 

      .row.justify-content-center(titulo="Volume Scatter")
        .col-lg-11
          p.mb-5 Permite que la luz pase a través del volumen. El uso típico sería añadir niebla a una escena. También se puede utilizar con el nodo de absorción de volumen para crear humo.
          .row.justify-content-center
            .col-lg-7
              figure.mb-0
                img(src='@/assets/curso/tema2/img07.png') 

      .row.justify-content-center(titulo="Emission Shader  ")
        .col-lg-11
          p.mb-5 Este ayuda a generar en los objetos una iluminación propia, la cual tiene la característica de ser suave y potente.
          .row.justify-content-center
            .col-lg-7
              figure.mb-0
                img(src='@/assets/curso/tema2/img08.png') 

    p.mb-5 Con el fin de centrar un poco más en aspectos relacionados con los tipos de nodos para iluminar, se  invita a revisar los siguientes videos que son de interés sobre el tema que se está tratando.
    
    .row.justify-content-center
      .col-lg-3
        .tema2-link
          a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema2/img09.svg")
            .anexo__texto
              p <b>Video.</b> Sky Texture
      .col-lg-3
        .tema2-link
          a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema2/img09.svg")
            .anexo__texto
              p <b>Video.</b> Volume Scatter
      .col-lg-3
        .tema2-link
          a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema2/img09.svg")
            .anexo__texto
              p <b>Video.</b> Emisión
    Separador 

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  High Dinamic Range Image (HDRI) o imagen de alto rango dinámico 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La mayoría de las fotos digitales, imágenes y renderizados contienen 24 bits por pixel, almacenando una gama de colores RGB, esto significa que pueden admitir hasta 16.777.216 colores diferentes, y se guardan en formatos bitmap como BMP, TGA, PNG y JPEG; por otra parte, generalmente los dispositivos que se usan para ver este tipo de imágenes como celulares, tablets, impresoras y computadores muestran una pequeña parte de la luz y colores (hasta 16 millones), en comparación con la cantidad real que se puede percibir. Por esta razón, tanto las imágenes tipo bitmap como los dispositivos usados para decodificarlas son considerados formatos de bajo rango dinámico o SDR (Standard Dynamic Range en inglés).

    div(style="position:relative")
        div(style="position:absolute; top:0px; width:100%; height:100%")
          .row.tema2-row1.py-4
            .col-lg-6            
            .col-lg-6
              p.mb-0(style="color: transparent") Posteriormente, aparecieron las imágenes en HDR (High Dinamic Range Image), que es un formato de rango dinámico mucho más alto en colores y valores; basado en la teoría tricromática del ojo humano y los valores de luminancia de cada píxel, de manera que no solo almacena el color, sino también la intensidad y el brillo de la luz real en ese punto del mapa (pixel); lo que amplía enormemente la escala de luces y colores, haciendo que las imágenes se vean de mejor calidad y mucho más realistas en comparación con una imagen en formato tradicional. 
          .row.py-4
            .col-lg-6            
            .col-lg-6
              p.mb-0(style="color: transparent") Es por estas características, que este tipo de imágenes se usan para la simulación de entornos reales en softwares de animación 3D, en donde el valor de cada pixel es directamente proporcional a la luminancia de un objeto real, gracias a que el motor de renderizado es capaz de calcular y simular absolutamente toda la iluminación en una escena, detallando y diferenciando las distintas iluminaciones presentes, obteniendo como resultado imágenes ultra realistas. 

    .row.mb-5(style="position:relative; z-index:10000")
      .col-lg-6.d-flex.align-items-center.justify-content-center  
        .row.justify-content-center
          .col-lg-12.col-md-6
            figure.mb-0
              img(src='@/assets/curso/tema2/img11.svg') 
      .col-lg-6   
        .row.py-4
          //.col-lg-2          
          .col-lg-12
            p.mb-0 Posteriormente, aparecieron las imágenes en HDR (High Dinamic Range Image), que es un formato de rango dinámico mucho más alto en colores y valores; basado en la teoría tricromática del ojo humano y los valores de luminancia de cada píxel, de manera que no solo almacena el color, sino también la intensidad y el brillo de la luz real en ese punto del mapa (pixel); lo que amplía enormemente la escala de luces y colores, haciendo que las imágenes se vean de mejor calidad y mucho más realistas en comparación con una imagen en formato tradicional. 
        .row.py-4
          //.col-lg-2         
          .col-lg-12
            p.mb-0 Es por estas características, que este tipo de imágenes se usan para la simulación de entornos reales en softwares de animación 3D, en donde el valor de cada pixel es directamente proporcional a la luminancia de un objeto real, gracias a que el motor de renderizado es capaz de calcular y simular absolutamente toda la iluminación en una escena, detallando y diferenciando las distintas iluminaciones presentes, obteniendo como resultado imágenes ultra realistas. 
      
    p.mb-4 Las imágenes HDR se pueden obtener de dos formas, a partir de un algoritmo de iluminación global en un renderizado por computadora; o de una mezcla de múltiples fotografías con diferentes parámetros de exposición, para obtener diferentes imágenes con todo el rango posible de luz, para después unir todas las tomas en un único fichero.
    p.mb-4 En el siguiente video se ofrece más información sobre la iluminación e imagen de alto rango dinámico:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5  Iluminación en interiores y exteriores 
    
    div.tema2-fondo1.mb-5
      .row.justify-content-center
        .col-10.pt-5
          figure.mb-5
            img(src='@/assets/curso/tema2/img01.svg') 

          p.mb-0 La iluminación en exteriores hace referencia a aquellas escenas ubicadas en espacios abiertos, en donde, generalmente, se usa una iluminación directa que depende de la luz natural proveniente del sol si se trata de un escenario diurno; o si por el contrario, se trata de un escenario nocturno, entonces la luz puede provenir tanto de fuentes naturales como la luna, la cual tiene la capacidad de proporcionar un tipo de iluminación mucho más tenue; o de fuentes artificiales como por ejemplo el alumbrado público, reflectores, etc. 

    .row.justify-content-center.tema2-fondo3.mb-5.py-4
      .col-lg-7.px-5
        .row.justify-content-center  
          .col-lg-8
            div.BorTit2.mb-3         
              p.mb-0 <b>Figura 11</b> Escena en exterior de la película “El viaje de Chihiro”
        figure.mb-0
          img(src='@/assets/curso/tema2/img12.png') 
          figcaption Nota. Tomada de skeletonroad (tumblr.com)
      .col-lg-5.d-flex.align-items-center
        div
          p.mb-4 Por otra parte, la luz en interiores se refiere a la iluminación de escenas en espacios cerrados como habitaciones, búnkeres, cuevas, etc., que pueden estar iluminadas tanto por luces naturales como por ejemplo cuando los rayos del sol entran por una ventana, iluminando de manera indirecta toda la habitación; o por luces artificiales como lámparas, bombillos, linternas, fogatas, entre otros. 
          p.mb-0 En ambos casos es importante tener en cuenta algunas características de la luz como su intensidad, reflexión, dirección y ángulo, las cuales varían dependiendo del momento del día y de las condiciones atmosféricas o climáticas, así mismo se deben considerar los efectos que tendrán sobre la gama de colores en escena. 
          
    p.mb-5 Para esto, es necesario manipular algunos parámetros que permitan controlar la cantidad exacta de la luz, conocer de dónde proviene el foco de luz natural para determinar la dirección de las sombras y definir la interpretación de una gama de color más fríos o más cálidos, de acuerdo a un momento concreto en la escena y a la orientación de la luz. También es importante examinar si es preciso utilizar iluminaciones suplementarias que realcen las sombras y contrastes de los objetos puestos en escena.
    
    .row.justify-content-center.mb-5
      .col-lg-8.px-5
        .row.justify-content-center  
          .col-lg-5
            div.BorTit2.mb-3         
              p.mb-0 <b>Figura 12</b> Ejemplo de iluminación en interiores
        figure.mb-0
          img(src='@/assets/curso/tema2/img13.png') 
          figcaption Nota. Tomada de Lazada_阿里云游戏城_Styleframe|三维|其他三维|FireringZ - 原创作品 - 站酷 (ZCOOL)
    
    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.px-4.py-4
          p.mb-4 En el video que encuentra a continuación, se podrá consultar más información sobre la iluminación en espacios internos:
          .row.justify-content-center  
            .col-lg-10              
              figure.mb-0
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    Separador 

    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6  Fotografía de producto
    
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 La fotografía de producto es una técnica utilizada principalmente para el marketing online de todo tipo de productos, desde autos, muebles, ropa, maquillaje, hasta comida y bebidas. Los parámetros de calidad para este tipo de fotos son bastante altos, ya que lo que se pretende es presentar y dejar una buena impresión del producto en el público, destacando sus atributos o características principales a través de la imagen resultante, de manera que entregue la mayor cantidad de información a los posibles compradores, persuadiéndolos para que lo compren.
        p.mb-0 En este tipo de fotos, la iluminación es el factor más importante ya que define qué tan llamativa resultará la imagen; aquí, la iluminación natural es la ideal, pero debido a que no se puede controlar, se hace necesario utilizar una iluminación artificial fuerte y difusa proveniente de lámparas, flashes, difusores y reflectores que se acomodan de diferentes posiciones y ángulos, regulando su intensidad, con el objetivo de lograr imágenes con la mayor calidad y realismo posible.
      .col-lg-4
        figure.mb-0
          img(src='@/assets/curso/tema2/img14.svg') 

    .row.justify-content-center.mb-0
      .col-lg-6.px-5
        .row.justify-content-center  
          .col-lg-8
            div.BorTit2.mb-3         
              p.mb-0 <b>Figura 13</b> Fotografía de productos de maquillaje en 3D
        figure.mb-0
          img(src='@/assets/curso/tema2/img15.png') 
          figcaption Nota. Tomada de stock.adobe.com

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
