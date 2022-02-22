<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Conceptos básicos de iluminación

    div.tema1-fondo1      
    
      div(style="position:relative")
        div(style="position:absolute; top:0px; width:100%; height:100%")
          .row.tema1-row1.py-4
            .col-lg-1          
            .col-lg-5
              p.mb-0(style="color: transparent") Uno de los aspectos más importantes en la creación de imágenes y su integración en escenarios es la definición de los elementos que iluminan la escena. Por esta razón, es necesario definir los objetos que añaden iluminación a los objetos que constituyen la escena, los tipos de luces y sus características básicas. Estos serán vistos durante este contenido como un preámbulo a la definición y manipulación de los elementos que se usan como luces.
          .row.py-4
            .col-lg-1          
            .col-lg-5
              p.mb-0(style="color: transparent") Los puntos de iluminación, sin duda, hacen parte del realismo que le integramos a la atmósfera o al ambiente que se está  creando y, a su vez, son elementos más delicados de utilizar al influir enormemente en el tiempo necesario para renderizar una escena. Cada uno de los objetos utilizados dispone de parámetros y propiedades específicas que pueden ser, o no, comunes a los tipos de iluminación, tal como se verá en este contenido.

        .row(style="position:relative; z-index:10000")
          .col-lg-6   
            .row.py-4
              .col-lg-2          
              .col-lg-10
                p.mb-0 Uno de los aspectos más importantes en la creación de imágenes y su integración en escenarios es la definición de los elementos que iluminan la escena. Por esta razón, es necesario definir los objetos que añaden iluminación a los objetos que constituyen la escena, los tipos de luces y sus características básicas. Estos serán vistos durante este contenido como un preámbulo a la definición y manipulación de los elementos que se usan como luces.        
            .row.py-4
              .col-lg-2         
              .col-lg-10
                p.mb-0 Los puntos de iluminación, sin duda, hacen parte del realismo que le integramos a la atmósfera o al ambiente que se está  creando y, a su vez, son elementos más delicados de utilizar al influir enormemente en el tiempo necesario para renderizar una escena. Cada uno de los objetos utilizados dispone de parámetros y propiedades específicas que pueden ser, o no, comunes a los tipos de iluminación, tal como se verá en este contenido.
          .col-lg-6.d-flex.align-items-center.justify-content-center  
            .row.justify-content-center
              .col-lg-12.col-md-6
                figure.mb-0
                  img(src='@/assets/curso/tema1/img01.svg') 
          

      Separador 


      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1  Teoría de la luz 

      p.mb-5 ¿Cómo se afecta la percepción de los objetos según la clase de luz que los ilumina? Estos van a mostrar ciertas características gracias al tipo de iluminación que se utiliza.  Es posible distinguir ciertos aspectos de los elementos, tales como su color, textura, volumen, forma, ubicación en el espacio, entre otros, los cuales pueden variar debido al uso de un tipo de iluminación en particular. Gracias a las luces y sombras, es posible percibir la forma tridimensional de un objeto, por eso es preciso mencionar que hay que tener en cuenta qué tipo de iluminación está afectando nuestra escena; para ello, a continuación, se mencionan los tipos de luces que se implementan:
      
      .row.mb-5
        .col-lg-6.d-flex                       
          //F7EEE3
          div.p-5(style="background: rgba(228, 199, 161, .3)")
            .row.px-2.mb-4
              .col-2(style="border: 2px solid #D44F4A")
            p.mb-0 <b>Luz natural:</b> la luz natural es la que emite el sol y se proyecta sobre los cuerpos, pero varía según la hora del día. Por ello, es posible notar el momento del día según la posición del sol. Asimismo, las sombras variarán y será posible ver que, según se mueva el sol, las sombras serán más largas o más cortas sobre el piso, las sombras de los objetos serán marcadas de forma dura y densa. Esto puede variar solo cuando se encuentra un cielo nublado, el cual sirve de filtro, lo que hará que la luz sea menos densa y las sombras sean más tenues, menos marcadas. La hora del día también influirá en cómo se ve cualquier objeto, si se ve más frío o más cálido.
        .col-lg-6.d-flex  
          //D2EBE7
          div.p-5(style="background: rgba(107, 188, 177, .3)")
            .row.px-2.mb-4
              .col-2(style="border: 2px solid #6BBCB1")
            p.mb-0 <b>Luz artificial:</b> la luz artificial sería toda aquella producida por linternas, lámparas, bombillos, fogatas, velas, antorchas, entre otras. Puede propagarse de forma recta o radial, puede tener diferentes posiciones y orientaciones, así como también variedad de colores, intensidades y texturas 
    
      TabsC.color-secundario
        .py-3.py-md-4(titulo="Aspectos importantes de la luz")
          SlyderE(indicadores="derecha")
            .row
              .col-lg-6.ps-5
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz directa:</b> es la luz que se emite desde una fuente propia, por ejemplo, el sol, bombillos, antorchas.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz reflejada:</b> es la luz que se recibe de un cuerpo u objeto que la refleja, pero no es propia de él; un ejemplo de ello serían las luces que llegan a los objetos luego de rebotar en superficies metálicas.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Dirección de la luz:</b> es la posición del foco de luz con respecto al elemento que vamos a iluminar.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz frontal:</b> situada frente al objeto.
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 33</b> Ejemplo de luz frontal en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img03.png') 
              .col-lg-1

            .row
              .col-lg-7.ps-5
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz lateral:</b> situada a alguno de los lados del objeto.                  
              .col-lg-4
                .row.justify-content-center  
                  .col-lg-10
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 34</b> Ejemplo de luz lateral en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img05.png') 
              .col-lg-1

            .row
              .col-lg-6.ps-5
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz cenital:</b> situada arriba del objeto.
                  
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 35</b> Ejemplo de luz cenital en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img06.png') 
              .col-lg-1

            .row
              .col-lg-6.ps-5
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Contraluz:</b> esta luz se sitúa detrás del objeto.
                  
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 36</b> Ejemplo de contraluz en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img06.png') 
              .col-lg-1

        .py-3.py-md-4(titulo="Intensidad de la luz ")
          SlyderE(indicadores="derecha")
            .row
              .col-lg-6.ps-5
                p.ms-4.mb-4 Las propiedades de la luz cuando golpean al objeto se pueden clasificar de dos maneras principales, que son:
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz dura:</b> se genera por una fuente con foco intenso, esta va a generar sombras más marcadas y más oscuras.
                
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 37</b> Ejemplo de luz dura en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img08.png') 
              .col-lg-1
            
            .row
              .col-lg-6.ps-5                
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz suave:</b> se genera cuando la fuente de luz se extiende y se dispersa, como sería el caso de los rayos del sol filtrados por nubes, o una bombilla con un pedazo de tela, o una lámpara, lo cual hace que la luz se difumine y produzca sombras transparentes no tan <b>perceptibles</b> como con la luz dura.
                
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 38</b> Ejemplo de luz suave en <i>software</i> <i>Blender</i>
                figure.mb-0
                  img(src='@/assets/curso/tema1/img08.png') 
              .col-lg-1

        .py-3.py-md-4(titulo="Aspectos importantes de las sombras")
          .row
              .col-lg-6.ps-5
                p.ms-4.mb-4 Las sombras cumplen un papel fundamental en cualquier composición, pues ayudan a generar volumen a los objetos. Se pueden clasificar de tres maneras:
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Sombras propias:</b> son las sombras que se encuentran en los objetos, en las partes del mismo donde la luz no alcanza a llegar.
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Sombras proyectadas:</b> son las sombras que un objeto proyecta sobre la superficie donde se encuentra estacionado.
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Sombra reflejada:</b> son las sombras que el objeto genera en otro objeto cercano a este.


              .col-lg-5
                .row.justify-content-center  
                  .col-lg-11
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 39</b> Ejemplo de luces y sombras afectando a un grupo de objetos
                figure.mb-0
                  img(src='@/assets/curso/tema1/img10.png') 
              .col-lg-1

        .py-3.py-md-4(titulo="Triángulo básico de iluminación")

          .row
              .col-lg-6.ps-5
                p.ms-4.mb-4 Es el <i>set</i> adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.

              .col-lg-5
                .row.justify-content-center  
                  .col-lg-6
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 40</b> Triangulo de iluminación
                figure.mb-0
                  img(src='@/assets/curso/tema1/img11.png') 
                  figcaption Nota. Tomada de www.chamanexperience.com
              .col-lg-1

    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Teoría del color 

    p.mb-4 La psicología del color se dedica al estudio de los efectos que produce el color sobre la percepción y la conducta del ser humano, se relaciona de manera directa con las emociones, con el aprendizaje, el contexto en el cual se vive y ha crecido y hasta con la cultura. En la siguiente tabla se verán los principales colores y sus efectos y reacciones positivas y negativas en las emociones y estados de ánimo.

    div.BorTit2.mb-3         
      p.mb-0 <b>Tabla 1</b> Simbolismo psicológico de los colores a través de emociones que se transmiten
    
    .tabla-b.color-acento-contenido.mb-5        
        table  
          tr(style="background-color: #D44F4A")
            td 
              h4.text-center.texto-blanco.mb-0 Color
            td(colspan=2) 
              h4.text-center.texto-blanco.mb-0 Emociones positivas
            td(colspan=2) 
              h4.text-center.texto-blanco.mb-0 Emociones negativas
          tr
            td.td-borde
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: black")
                .col-lg-8
                  h4.text-center.mb-0 Negro              
            td.td-borde.text-center(colspan=2) Sofisticación, seguridad, poder, sustancia, elegancia, autoridad.
            td.text-center(colspan=2) Opresión, amenaza, frialdad, pesadez, luto, maldad.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #9B9B9B")
                .col-lg-8
                  h4.text-center.mb-0 Gris
            td.td-borde.text-center(colspan=2) Atemporalidad, fuerza, fiabilidad, neutralidad, balance, inteligencia.
            td.text-center(colspan=2) Desconfianza, depresión, adormecimiento, mansedumbre, falta de energía.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #C4C4C4")
                .col-lg-8
                  h4.text-center.mb-0 Blanco 
            td.td-borde.text-center(colspan=2) Pureza, sofisticación, claridad, frescura, simplicidad, limpieza.
            td.text-center(colspan=2) Esterilidad, frialdad, elitismo, hostilidad, aislamiento, vacío.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #DE3737")
                .col-lg-8
                  h4.text-center.mb-0 Rojo
            td.td-borde.text-center(colspan=2) Aventura, poder, pasión, acción, fuerza, intrepidez, amor.
            td.text-center(colspan=2) Ira, desafío, peligro, advertencia, agresión, dolor.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #EC942F")
                .col-lg-8
                  h4.text-center.mb-0 Naranja
            td.td-borde.text-center(colspan=2) Valor, confidencialidad, calidez, optimismo, entusiasmo, energía.
            td.text-center(colspan=2) Privación, frustración, inmadurez,  frivolidad, letargo, ignorancia.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #F2CB0A")
                .col-lg-8
                  h4.text-center.mb-0 Amarillo
            td.td-borde.text-center(colspan=2) Optimismo, felicidad, extroversión, curiosidad, creatividad, calidez.
            td.text-center(colspan=2) Irracionalidad, temor, precaución,  cobardía, ansiedad, frustración.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #6CDF20")
                .col-lg-8
                  h4.text-center.mb-0 Verde
            td.td-borde.text-center(colspan=2) Naturaleza, prosperidad, esperanza, suerte, armonía, frescura, salud.
            td.text-center(colspan=2) Aburrimiento, estancación, envidia, insipidez, enfermedad, enervación.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #14C9CF")
                .col-lg-8
                  h4.text-center.mb-0 Turquesa
            td.td-borde.text-center(colspan=2) Comunicación, verdad, claridad, calma, salud, poder, inspiración.
            td.text-center(colspan=2) Jactancia, misterio, desconfianza,  reticencia, indiferencia.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #0B5FF1")
                .col-lg-8
                  h4.text-center.mb-0 Azul
            td.td-borde.text-center(colspan=2) Simpatía, armonía, amistad, lógica, seguridad, serenidad, confianza.
            td.text-center(colspan=2) Frialdad, indiferencia, antipatía, desánimo, inapetencia, descuido.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #AF16E5")
                .col-lg-8
                  h4.text-center.mb-0 Violeta
            td.td-borde.text-center(colspan=2) Sabiduría, riqueza, imaginación, misterio, creatividad, lujo, fantasía.
            td.text-center(colspan=2) Introversión, decadencia, mal humor, supresión, inferioridad, extravagancia.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #E90DCC")
                .col-lg-8
                  h4.text-center.mb-0 Magenta
            td.td-borde.text-center(colspan=2) Transformación, creatividad, pasión, imaginación, balance, innovación.
            td.text-center(colspan=2) Indignación, inconformidad, efimeridad, impulsividad, ligereza.
          tr
            td.td-borde 
              .row.justify-content-center
                .col-lg-2
                  div.circulo.border(style="background: #6D1111")
                .col-lg-8
                  h4.text-center.mb-0 Café
            td.td-borde.text-center(colspan=2) Seriedad, calidez, responsabilidad, terrosidad, soporte, autenticidad.
            td.text-center(colspan=2) Falta de humor y sofisticación, suciedad, tristeza, conservadurismo.

    h2.mb-4 Temperatura del color

    SlyderC.mb-5(:datos="datosSlyder")
    p.mb-5 Comparando las imágenes anteriores se puede percibir que cada una de ellas evoca emociones diferentes. ¿Por qué sucede esto?, la respuesta está en el uso de los colores. En la imagen de la izquierda se destacan los colores azules, violetas y algunos tintes de verde que dan la sensación de que se trata de un mundo nocturno o frío; en contraste con la imagen de la derecha en la que se destacan los colores amarillos, amarillos verdosos, naranjas, terrosos y ocres que brindan la ilusión de un mundo más cálido.
    
    .row.justify-content-center.mb-5
      .col-lg-10        
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img55.png')})`}"
            )
            .bloque-texto-g__texto.px-4.py-5
              br
              p.my-5 Esto significa que brindan una percepción subjetiva de la sensación de temperatura y con base a esta se puede determinar si se trata de colores cálidos o fríos, los cuales influyen en las emociones y afectan el estado de ánimo.        
              br
              br

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-5           
              img(src='@/assets/curso/tema1/img15.svg', alt='Texto que describa la imagen')
          
        h1.text-center(style="color: #12263F") Colores cálidos o activos
        p.text-center(style="color: #12263F") Son aquellos asociados a efectos visuales de calor como la luz solar, el fuego, los atardeceres, la arena, la playa, etc., evocando fuertes sentimientos que promueven el movimiento. Funcionan bien en espacios grandes, haciéndolos sentir seguros, acogedores y más cercanos.
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-5            
              img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')
          
        h1.text-center Colores fríos o pasivos
        p.text-center  Se relacionan con efectos visuales asociados al frío como la luz de luna, el agua, el amanecer, la nieve, naturaleza verde, etc., transmitiendo una sensación de frescura y calma. Funcionan bien en espacios pequeños, aumentando la percepción de su tamaño, haciéndolos sentir más grandes, abiertos y lejanos.

    p.mb-5 Realizando una mezcla adecuada de colores cálidos y fríos se logra un equilibrio con un mayor contraste y mejor definición, que mejora la estética del videojuego, haciéndolo más agradable para el espectador.

    .row.justify-content-center.mb-5      
      .col-12
        .tema1-infografia
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img54.svg')                 

            .tarjeta.p-3(x="15%" y="4%" numero="")
              div.BorTitImg(style="border-left-color: #D6BE6F") 
                h4.m-0 Dorado
              div.BorTitImg.BorTitImg2 
                p.mb-0 Opulencia

            .tarjeta.p-3(x="15%" y="11%" numero="")
              div.BorTitImg(style="border-left-color: #4D2311") 
                h4.m-0 Marrón
              div.BorTitImg.BorTitImg2 
                p.mb-0 Profundidad o experiencia

            .tarjeta.p-3(x="15%" y="18%" numero="")
              div.BorTitImg(style="border-left-color: #F4E703") 
                h4.m-0 Amarillo
              div.BorTitImg.BorTitImg2 
                p.mb-0 Actitud positiva y alegría

            .tarjeta.p-3(x="15%" y="24%" numero="")
              div.BorTitImg(style="border-left-color: #E42622") 
                h4.m-0 Rojo
              div.BorTitImg.BorTitImg2 
                p.mb-0 Pasión o excitación

            .tarjeta.p-3(x="15%" y="31%" numero="")
              div.BorTitImg(style="border-left-color: #EB007F") 
                h4.m-0 Rosa
              div.BorTitImg.BorTitImg2 
                p.mb-0 Feminidad

            .tarjeta.p-3(x="15%" y="38%" numero="")
              div.BorTitImg(style="border-left-color: #C5C5C5") 
                h4.m-0 Plata
              div.BorTitImg.BorTitImg2 
                p.mb-0 Intelectualidad

            .tarjeta.p-3(x="15%" y="45%" numero="")
              div.BorTitImg(style="border-left-color: #029BDD") 
                h4.m-0 Azul
              div.BorTitImg.BorTitImg2 
                p.mb-0 Tristeza o depresión
            
            .tarjeta.p-3(x="15%" y="51.3%" numero="")
              div.BorTitImg(style="border-left-color: #5DAE89") 
                h4.m-0 Verde
              div.BorTitImg.BorTitImg2 
                p.mb-0 Renovación o vida.

            .tarjeta.p-3(x="15%" y="58.5%" numero="")
              div.BorTitImg(style="border-left-color: #7D2283") 
                h4.m-0 Violeta
              div.BorTitImg.BorTitImg2 
                p.mb-0 Espiritualidad

            .tarjeta.p-3(x="15%" y="65%" numero="")
              div.BorTitImg(style="border-left-color: #747476") 
                h4.m-0 Gris
              div.BorTitImg.BorTitImg2 
                p.mb-0 Neutralidad y serenidad

            .tarjeta.p-3(x="15%" y="72%" numero="")
              div.BorTitImg(style="border-left-color: #E4E4E6") 
                h4.m-0 Blanco
              div.BorTitImg.BorTitImg2 
                p.mb-0 Pureza

            .tarjeta.p-3(x="15%" y="79%" numero="")
              div.BorTitImg(style="border-left-color: #000000") 
                h4.m-0 Negro
              div.BorTitImg.BorTitImg2 
                p.mb-0 Elegancia          

    p.mb-5 Adicionalmente, puede conocer sobre la teoría del color y cómo se requiere de una referencia para mezclar los colores y conseguir un efecto en concreto: 

    h2.mb-4 Teoría del color

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-secundario
          .row.justify-content-center(numero="1" titulo="Modelos de color")
            .col-lg-4
              figure.mb-5
                img(src='@/assets/curso/tema1/img19.png') 
              p.mb-4 <b>Modelo RGB</b>
              p.mb-0 Modelo aditivo que se basa en los colores luz. El ojo humano cuenta con 3 tipos de conos o células foto receptoras que determinan los 3 colores primarios: rojo, verde y azul (RGB por siglas en inglés). De la combinación de estos 3 se obtiene el color blanco y la ausencia de los mismos dará como resultado el negro. Este modelo de color es usado para toda clase de dispositivos como pantallas, celulares, etc.
            .col-lg-4
              figure.mb-5
                img(src='@/assets/curso/tema1/img20.png') 
              p.mb-4 <b>Modelo CMYK</b>
              p.mb-0 Modelo sustractivo basado en los colores pigmento o físicos. Los colores primarios en este modelo son: amarillo, cían y magenta (CMYK por sus siglas en inglés). Al contrario del modelo RGB, la combinación de los 3 primarios genera el color negro (key o <i>black</i>). Este modelo es usado en pintura, tintes e impresión.
            .col-lg-4
              figure.mb-5
                img(src='@/assets/curso/tema1/img21.png') 
              p.mb-4 <b>Modelo HSV</b>
              p.mb-0 Se basa en las propiedades del color (tono , saturación y luminosidad), las cuales se explican en mayor detalle en la siguiente lección.
          .row(numero="2" titulo="Propiedades del color")
            .col-lg-6
              figure.mb-5
                img(src='@/assets/curso/tema1/img22.png') 
            .col-lg-6
              p.mb-1 <b>a. Tono (<i>Hue</i>)</b>
              p.mb-4 Es el color en concreto y ayuda a diferenciarlos. Por ejemplo, al ver un objeto se dice que tiene un tono azul o anaranjado.

              p.mb-1 <b>b. Saturación (Saturation)</b>
              p.mb-4 Intensidad o pureza del color. En otras palabras, la cantidad de gris que se le ha agregado a un tono; así entre más saturado es un color, más vibrante es, mientras que, entre menos saturado, dará mayor descanso al ojo.

              p.mb-1 <b>c. Luminosidad o valor (<i>Value</i>)</b>
              p.mb-0 Describe el valor de claridad u oscuridad, en otras palabras, cantidad relativa de blanco o negro en un tono. Si agregamos el blanco a un color, obtendremos valores más claros del tono, llamados tintes. Por otro lado, si el que agregamos es el negro, tendremos valores más oscuros del tono, conocidos como matices. Por ejemplo, decimos que el rosa es un tinte del color rojo primario y el borgoña o rojo oscuro es un matiz (Whelan, 1994).
          .row(numero="3" titulo="Círculo cromático")
            .col-lg-6
              figure.mb-5
                img(src='@/assets/curso/tema1/img23.png') 
            .col-lg-6.d-flex.align-items-center
              p.mb-0 Se divide en doce segmentos, incluyendo los tonos primarios, secundarios y terciarios. Los tres colores primarios: rojo, amarillo y azul, forman un triángulo equilátero dentro del círculo. Si se mezclan en igual medida dos colores primarios, se obtiene un color secundario; y si se mezcla un primario con un secundario se tiene un terciario.

          .row(numero="4" titulo="Armonía del color")
            .col-lg-12
              p.mb-5 Se debe saber que algunos colores se ven mejor juntos que otros, pero esto puede generar confusión si se trata de recordar cada uno. Por tanto, a continuación, se verán los 6 esquemas más efectivos de la armonía de color:
              SlyderA.mb-5
                .row.justify-content-center
                  .col-lg-10
                    .row.justify-content-center
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img24.png') 
                        p.mb-4 <b>Mocromático</b>
                        p.mb-0 Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img25.png') 
                        p.mb-4 <b>Análogo</b>
                        p.mb-0 Se usan colores adyacentes uno del otro. Es un esquema presente en la naturaleza, por ende, crean una sensación de calma, paz y comodidad.

                .row.justify-content-center
                  .col-lg-10
                    .row.justify-content-center
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img26.png') 
                        p.mb-4 <b>Complementario</b>
                        p.mb-0 Es el esquema más popular, donde se usan colores de lados opuestos del círculo. Naturalmente siempre van bien juntos; sin embargo, como en el esquema de triada, se debe elegir un color predominante y usar el tono complementario para crear contraste o puntos de interés.
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img27.png') 
                        p.mb-4 <b>Triada</b>
                        p.mb-0 Quizás es una de las más difíciles de usar correctamente. Son tres colores que son equidistantes. El reto está en el equilibrio de cada uno de los tonos, dado que al usarse en la misma medida generará caos. Suele usarse para escenas con estilo cartoon, orientado al público infantil.

                .row.justify-content-center
                  .col-lg-10
                    .row.justify-content-center
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img28.png') 
                        p.mb-4 <b>Complementario dividido</b>
                        p.mb-0 Similar al complementario, pero este esquema usa tres colores. Se debe seleccionar el tono complementario y dividirlo, es decir, tomar los dos colores adyacentes. Es útil para extender las posibilidades de la paleta de color, cuando dos tonos no son suficientes.
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img29.png') 
                        p.mb-4 <b>Complementario doble</b>
                        p.mb-0 Justo como el esquema complementario pero doble. Dos pares de colores complementarios (sin importar su posición dentro del círculo). Se debe ser muy cuidadoso con este esquema, pues sin el equilibrio adecuado creará caos. Lo mejor es usar un par en primer plano y el otro en el fondo.              
                
          
              .tema2-link
                .row.mb-5.justify-content-center
                  .col-lg-7
                    a.anexo.mb-4.mb-lg-0(href="https://color.adobe.com/es/create/color-wheel" target="_blank")
                      .anexo__icono
                        img(src="@/assets/curso/tema2/img09.svg")
                      .anexo__texto
                        p <b>Adobe Color.</b> Para crear paletas de color y jugar con diferentes esquemas puede consultar la herramienta creada por Adobe llamada Adobe Color, anteriormente conocida como Kuler desde internet.
          .row(numero="5" titulo="Psicología del color")
            .col-lg-12
              p.mb-5 Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
              SlyderA.mb-5
                .row.justify-content-center
                  .col-lg-10
                    .row.mb-4
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img30.svg') 
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img56.svg') 
                    .row.mb-4
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img32.svg') 
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img33.svg') 

                .row.justify-content-center
                  .col-lg-10
                    .row.mb-4
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img34.svg') 
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img35.svg') 
                    .row.mb-4
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img57.svg') 
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img58.svg') 

                .row.justify-content-center
                  .col-lg-10  
                    .row.mb-0
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img38.svg') 
                      .col-lg-6
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img59.svg') 
      
    p.mb-4 En cuanto al ambiente frio y cálido, se trabaja al modificar algunos parámetros de las luces y el background, esto permite crear una tonalidad ambientada hacia los tonos fríos o cálidos, de acuerdo con lo que se tenga planteado para cada una de las escenas. En el siguiente video, se podrá observar con más detalle este proceso:
    figure
      .video
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/eI5jwo-ZLPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Triángulo de iluminación
    
    .row.justify-content-center.mb-5
      .col-lg-7.d-flex.align-items-center  
        .row.justify-content-center.tema1-row2
          .col-lg-9.my-5
            p.mb-0 El triángulo de iluminación es el <i>set</i> adecuado para iluminar una escena y conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja y la contraluz se sitúa por detrás, para darle profundidad a la escena; como puede verse en la siguiente figura:      
      .col-lg-5
        .row.justify-content-center  
          .col-lg-7
            div.BorTit.mb-3         
              p.mb-0 <b>Figura 40</b> Triangulo de iluminación
        figure.mb-0
          img(src='@/assets/curso/tema1/img40.png') 
          figcaption Nota. Tomada de www.chamanexperience.com

    p.mb-4 Se profundizará en este concepto aplicándolo en <i>Blender</i>, sobre un personaje y un escenario. Por ello, a continuación, le se invita a consultar el documento enlazado en donde se podrá ampliar más información al respecto, además, en el video que se encuentra a continuación brinda más información sobre este proceso:
    figure.mb-4
      .video            
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/Ug4XECwsp_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-end
      .col-lg-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/triangulo de iluminacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Triángulo de iluminación</b>
    Separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Reloj de Iluminación 

    .row.justify-content-center.mb-5 
      .col-lg-10.p-4(style="background-color: #F8F1E7")
        p.mb-5 El reloj de iluminación es un método que se utiliza para ubicar la iluminación en un objeto, ubicando la luz según el esquema de una rueda de reloj, teniendo el rostro perpendicular a la cámara. Con el objeto en el centro de la esfera mirando de frente marcando las 6. A continuación, se verán en detalle cuál es la posición y el funcionamiento de este sistema (figura 2). 
        .row.justify-content-center  
          .col-lg-6
            .row.justify-content-center  
              .col-lg-8
                div.BorTit2.mb-3         
                  p.mb-0 <b>Figura 2</b>  Reloj de iluminación
            figure.mb-0
              img(src='@/assets/curso/tema1/img41.png')
              figcaption Nota. Tomada de educa.ugr.es
    
    p.mb-4 Se invita a consultar el video que contiene el paso a paso del proceso: 

    figure.mb-4
      .video        
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/giNK4WRErqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    .row.justify-content-end
      .col-lg-9
        p.mb-0 De igual manera, el documento que se ha dispuesto para ampliar la información al respecto del reloj de iluminación:
      .col-lg-3
        a.anexo.mb-0(:href="obtenerLink('/downloads/Reloj de Iluminación.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Reloj de Iluminación</b>

    Separador 

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Propiedades de la luz      

    div.tema1-row3.pt-5.mb-5
      .row.justify-content-center
        .col-lg-10
          figure.mb-4.px-5
              img(src='@/assets/curso/tema1/img42.png')
          p.mb-4 Para dar inicio a este tema vale la pena resolver antes la pregunta: ¿qué es la luz? Se puede definir la luz como un fenómeno electromagnético que se propaga en forma de ondas que pueden ser percibidas por la visión, utilizando como herramienta los ojos; el reflejo de estas ondas ilumina las superficies en el entorno permitiendo ver los objetos y distinguir los colores alrededor.
          p.mb-0 Entre las propiedades más importantes de la luz, están:

    TabsA.color-acento-contenido.tema1-tab1.mb-5      
      .tarjeta.color-primario.p-5(titulo="Reflexión")
        h4.mb-4 Reflexión
        p.mb-4 Es un fenómeno ocasionado cuando un rayo de luz choca y rebota contra una superficie, de manera similar a como rebota una pelota contra el piso. En este fenómeno se presenta el rayo original (incidente), el rayo que se desvía en otra dirección (reflejado) y una línea imaginaria perpendicular a la superficie, llamada normal, como se observa en la siguiente figura:
        .row.justify-content-center.mb-4  
          .col-lg-6
            .row.justify-content-center  
              .col-lg-8
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 3</b> La reflexión de la luz
            figure.mb-0
              img(src='@/assets/curso/tema1/img43.png')
              figcaption Nota. Tomada de www.todamateria.com
        
        p.mb-5 El rayo incidente y la normal forman un ángulo de incidencia, mientras que entre la normal y el rayo reflejado se forma un ángulo de reflexión. Entonces, la dirección e intensidad en que se refleja la luz dependen tanto de la forma y el material de la superficie reflectante, como de la dirección del rayo incidente.
        .tema1-cajon2.mb-4
          .cajon.color-secundario.p-4.mb-0
            .row.justify-content-center  
              .col-lg-1.p-0(style="width: 24px")
                img(src='@/assets/curso/tema1/img44.svg')
              .col-lg-11
                p.mb-0 <b>Reflexión difusa y especular.</b> Si la superficie es rugosa, los rayos de luz rebotan en todas estas pequeñas irregularidades presentes en dicha superficie, formando distintos ángulos de incidencia, ocasionando que los rayos de luz se reflejan en distintas direcciones; a esto se le conoce como reflexión difusa. En cambio, si la superficie es lisa o pulida, la mayor parte de la luz rebota de manera uniforme sobre esta, ocasionando que los rayos se reflejan ordenadamente en haces de luz que conservan una dirección y forma definida; a lo cual se le conoce como reflexión especular.

        .row.justify-content-center.mb-4  
          .col-lg-11
            .row.justify-content-center  
              .col-lg-4
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 4</b> Reflexión especular y difusa
            figure.mb-0
              img(src='@/assets/curso/tema1/img45.png')
              figcaption Nota. Tomada de educa.ugr.es
        p.mb-5 Es gracias al fenómeno de reflexión de la luz que se visibiliza el entorno, ya que, al ser iluminado por una fuente lumínica natural –como el sol-, o artificial –como una lámpara–, los rayos se reflejan sobre las superficies de los diferentes elementos presentes permitiendo conocer detalles como su tamaño, color y forma. Algunos ejemplos de la reflexión de la luz son:

        SlyderA
          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-lg-7
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img46.png')
                .col-lg-5
                  h3.tema1-borde-titulo Imagen especular 
                  p.mb-0 Es la formación de imágenes en espejos, en donde los rayos de luz rebotan sobre la superficie lisa de un espejo, formando una imagen por efecto de la reflexión de la luz.

          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-lg-7
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img47.png')
                .col-lg-5
                  h3.tema1-borde-titulo Reflexión interna total 
                  p.mb-0 Es un tipo de reflexión especial que se observa en las gemas, en donde los rayos de luz se reflejan y rebotan contra las superficies internas del cristal, produciendo destellos.

          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-lg-7
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img48.png')
                .col-lg-5
                  h3.tema1-borde-titulo Halo solar 
                  p.mb-0 Es un círculo difuso que rodea el sol, producido por la reflexión de la luz en la superficie de las gotas de agua que flotan en la atmósfera.

          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-lg-6
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img49.png')
                .col-lg-6
                  h3.tema1-borde-titulo Tipo de materiales reflectivos 
                  p.mb-0 Entre los materiales u objetos que reflejan una mayor cantidad de luz, se pueden encontrar los cuerpos reflejantes, que son aquellos que no dejan pasar los rayos de luz, sino que la desvían en otra dirección; por ejemplo, los espejos (cuerpos reflejantes por excelencia), el vidrio, los metales pulidos como el acero, la plata, el oro y el aluminio y algunos plásticos transparentes como el tereftalato de polietileno (Mylar) y el metacrilato espejo.

      .tarjeta.tarjeta.color-primario.p-5(titulo="Refracción")
        h4.mb-4 Refracción
        p.mb-4 Es un fenómeno óptico que se presenta cuando los rayos de luz pasan de un medio a otro con diferente densidad, ocasionando un cambio de dirección y velocidad de propagación. En este fenómeno participa el rayo incidente que forma un ángulo de incidencia con la normal, mientras que entre la normal y el rayo refractado se forma un ángulo de refracción (figura 5).
        .row.justify-content-center.mb-4  
          .col-lg-7
            .row.justify-content-center  
              .col-lg-7
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 5</b> Refracción de la luz
            figure.mb-0
              img(src='@/assets/curso/tema1/img50.png')
              figcaption Nota. Tomada de www.todamateria.com

        p.mb-4 La dirección y la velocidad de propagación de la luz dependen de la densidad o consistencia de ambas sustancias, la longitud de onda y del ángulo de incidencia; por ejemplo, si un rayo de luz pasa del aire (medio menos denso) e ingresa a través de un vidrio (medio más denso) su velocidad disminuye, y viceversa, si pasa de un medio más denso a uno menos denso, su velocidad aumenta. 
        p.mb-5 Este fenómeno ayuda a entender por qué un objeto recto se ve torcido o doblado cuando se introduce en un vaso con agua; o el efecto de doble imagen que se produce al observar, por ejemplo, un acuario desde cierto ángulo (figura 6).

        .row.justify-content-center.mb-4  
          .col-lg-12
            .row.justify-content-center  
              .col-lg-5
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 6</b> Ejemplos de la refracción de la luz
            figure.mb-0
              img(src='@/assets/curso/tema1/img51.png')
              figcaption Nota. Tomada de www.diferenciador.com

        p.mb-4 El fenómeno de refracción es especialmente útil para entender el funcionamiento de algunos instrumentos ópticos como lupas, lentes de microscopios o telescopios, los cuales cambian la trayectoria de la luz, la concentran y dan la sensación de aumentar el tamaño de las cosas.
        p.mb-5 Los fenómenos de reflexión y refracción pueden ocurrir simultáneamente cuando un haz de luz incide sobre la superficie de un cuerpo transparente, como, por ejemplo, el agua sobre la cual una parte de los rayos de luz se reflejan, mientras que otra parte se refracta. Esto mismo sucede cuando la luz atraviesa la córnea del ojo (la cual es transparente) para llegar hasta la retina (figura 7).

        .row.justify-content-center.mb-4  
          .col-lg-12
            .row.justify-content-center  
              .col-lg-4
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 7</b>  Refracción de la luz
            figure.mb-0
              img(src='@/assets/curso/tema1/img52.png')
              figcaption Nota. Tomada de www.todamateria.com

      .tarjeta.tarjeta.color-primario.p-5(titulo="Parámetros de reflexión y refracción en animación 3D")
        h4.mb-4 Parámetros de reflexión y refracción en animación 3D
        p.mb-4 La mayoría de los programas utilizados para la animación 3D manejan valores de reflexión y refracción para la creación de materiales y texturas. El nivel de reflexión se manipula con un rango de entre 0 y 1, si un material tiene un valor de reflexión de 0 este será mate, en cambio si tiene un valor de 1 refleja todos los objetos que se encuentren en su entorno. Otro valor que se debe tener en cuenta es el <i>glossiness</i>, que usa el mismo rango que el valor anterior, cuando su valor es 1 entonces la superficie tendrá un reflejo totalmente nítido; sin embargo, en 0 los reflejos se dispersaron y se verá borroso:
        .row.justify-content-center.mb-0  
          .col-lg-12
            .row.justify-content-center  
              .col-lg-5
                div.BorTit.mb-3         
                  p.mb-0 <b>Figura 8</b> Valores de reflexión y refracción
            figure.mb-0
              img(src='@/assets/curso/tema1/img53.png')
              figcaption Nota. Tomada de polygoncity.blogspot.com
    Separador 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Escenas del videojuego <i>Ori and The Blind Forest</i> (2015)',
        imagen: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Escenas del videojuego <i>Ori and The Blind Forest</i> (2015)',
        imagen: require('@/assets/curso/tema1/img13.png'),
      },
    ],
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
