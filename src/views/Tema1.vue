<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Conceptos básicos de iluminación

    div.tema1-fondo1

      div.tema1-div1.mb-4     
    
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
            p.mb-0 <b>Luz natural:</b> La luz natural es la que emite el sol y se proyecta sobre los cuerpos, pero varía según la hora del día. Por ello, es posible notar el momento del día según la posición del sol. Asimismo, las sombras variarán y será posible ver que, según se mueva el sol, las sombras serán más largas o más cortas sobre el piso, las sombras de los objetos serán marcadas de forma dura y densa. Esto puede variar solo cuando se encuentra un cielo nublado, el cual sirve de filtro, lo que hará que la luz sea menos densa y las sombras sean más tenues, menos marcadas. La hora del día también influirá en cómo se ve cualquier objeto, si se ve más frío o más cálido.
        .col-lg-6.d-flex  
          //D2EBE7
          div.p-5(style="background: rgba(107, 188, 177, .3)")
            .row.px-2.mb-4
              .col-2(style="border: 2px solid #6BBCB1")
            p.mb-0 <b>Luz artificial:</b> La luz artificial sería toda aquella producida por linternas, lámparas, bombillos, fogatas, velas, antorchas, entre otras. Puede propagarse de forma recta o radial, puede tener diferentes posiciones y orientaciones, así como también variedad de colores, intensidades y texturas 
    
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
                      p.mb-0 <b>Luz directa.</b> Es la luz que se emite desde una fuente propia, por ejemplo, el sol, bombillos, antorchas.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz reflejada.</b> Es la luz que se recibe de un cuerpo u objeto que la refleja, pero no es propia de él; un ejemplo de ello serían las luces que llegan a los objetos luego de rebotar en superficies metálicas.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Dirección de la luz.</b> Es la posición del foco de luz con respecto al elemento que vamos a iluminar.

                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz frontal.</b> Situada frente al objeto.
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 33</b> Ejemplo de luz frontal en software Blender
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
                      p.mb-0 <b>Figura 34</b> Ejemplo de luz lateral en software Blender
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
                      p.mb-0 <b>Luz cenital.</b> Situada arriba del objeto.
                  
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 35</b> Ejemplo de luz cenital en software Blender
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
                      p.mb-0 <b>Contraluz.</b> Esta luz se sitúa detrás del objeto.
                  
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 36</b> Ejemplo de contraluz en software Blender
                figure.mb-0
                  img(src='@/assets/curso/tema1/img06.png') 
              .col-lg-1

        .py-3.py-md-4(titulo="Intensidad de la luz. ")
          SlyderE(indicadores="derecha")
            .row
              .col-lg-6.ps-5
                p.ms-4.mb-4 Las propiedades de la luz cuando golpean al objeto se pueden clasificar de dos maneras principales, que son:
                .cajon.color-secundario.p-5.mb-0.ms-4
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Luz dura.</b> Se genera por una fuente con foco intenso, esta va a generar sombras más marcadas y más oscuras.
                
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 37</b> Ejemplo de luz dura en software Blender
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
                      p.mb-0 <b>Luz suave.</b> Se genera cuando la fuente de luz se extiende y se dispersa, como sería el caso de los rayos del sol filtrados por nubes, o una bombilla con un pedazo de tela, o una lámpara, lo cual hace que la luz se difumine y produzca sombras transparentes no tan <b>perceptibles</b> como con la luz dura.
                
              .col-lg-5
                .row.justify-content-center  
                  .col-lg-8
                    div.BorTit.mb-3         
                      p.mb-0 <b>Figura 38</b> Ejemplo de luz suave en software Blender
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
                      p.mb-0 <b>Sombras propias.</b> Son las sombras que se encuentran en los objetos, en las partes del mismo donde la luz no alcanza a llegar.
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Sombras proyectadas.</b> Son las sombras que un objeto proyecta sobre la superficie donde se encuentra estacionado.
                  .row
                    .col-lg-1.p-0.vineta
                      img.m-0.vineta(src='@/assets/curso/tema1/img04.svg') 
                    .col-lg-11.ps-1
                      p.mb-0 <b>Sombra reflejada.</b> Son las sombras que el objeto genera en otro objeto cercano a este.


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
                p.ms-4.mb-4 Es el set adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.

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
              h4.text-center.mb-0(style="color: black") Negro
            td.td-borde.text-center(colspan=2) Sofisticación, seguridad, poder, sustancia, elegancia, autoridad.
            td.text-center(colspan=2) Opresión, amenaza, frialdad, pesadez, luto, maldad.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #9B9B9B") Gris
            td.td-borde.text-center(colspan=2) Atemporalidad, fuerza, fiabilidad, neutralidad, balance, inteligencia.
            td.text-center(colspan=2) Desconfianza, depresión, adormecimiento, mansedumbre, falta de energía.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #C4C4C4") Blanco 
            td.td-borde.text-center(colspan=2) Pureza, sofisticación, claridad, frescura, simplicidad, limpieza.
            td.text-center(colspan=2) Esterilidad, frialdad, elitismo, hostilidad, aislamiento, vacío.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #DE3737") Rojo
            td.td-borde.text-center(colspan=2) Aventura, poder, pasión, acción, fuerza, intrepidez, amor.
            td.text-center(colspan=2) Ira, desafío, peligro, advertencia, agresión, dolor.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #EC942F") Naranja
            td.td-borde.text-center(colspan=2) Valor, confidencialidad, calidez, optimismo, entusiasmo, energía.
            td.text-center(colspan=2) Privación, frustración, inmadurez,  frivolidad, letargo, ignorancia.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #F2CB0A") Amarillo
            td.td-borde.text-center(colspan=2) Optimismo, felicidad, extroversión, curiosidad, creatividad, calidez.
            td.text-center(colspan=2) Irracionalidad, temor, precaución,  cobardía, ansiedad, frustración.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #6CDF20") Verde
            td.td-borde.text-center(colspan=2) Naturaleza, prosperidad, esperanza, suerte, armonía, frescura, salud.
            td.text-center(colspan=2) Aburrimiento, estancación, envidia, insipidez, enfermedad, enervación.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #14C9CF") Turquesa
            td.td-borde.text-center(colspan=2) Comunicación, verdad, claridad, calma, salud, poder, inspiración.
            td.text-center(colspan=2) Jactancia, misterio, desconfianza,  reticencia, indiferencia.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #0B5FF1") Azul
            td.td-borde.text-center(colspan=2) Simpatía, armonía, amistad, lógica, seguridad, serenidad, confianza.
            td.text-center(colspan=2) Frialdad, indiferencia, antipatía, desánimo, inapetencia, descuido.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #AF16E5") Violeta
            td.td-borde.text-center(colspan=2) Sabiduría, riqueza, imaginación, misterio, creatividad, lujo, fantasía.
            td.text-center(colspan=2) Introversión, decadencia, mal humor, supresión, inferioridad, extravagancia.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #E90DCC") Magenta
            td.td-borde.text-center(colspan=2) Transformación, creatividad, pasión, imaginación, balance, innovación.
            td.text-center(colspan=2) Indignación, inconformidad, efimeridad, impulsividad, ligereza.
          tr
            td.td-borde 
              h4.text-center.mb-0(style="color: #6D1111") Café
            td.td-borde.text-center(colspan=2) Seriedad, calidez, responsabilidad, terrosidad, soporte, autenticidad.
            td.text-center(colspan=2) Falta de humor y sofisticación, suciedad, tristeza, conservadurismo.

    h2.mb-4 Temperatura del color

    SlyderC.mb-5(:datos="datosSlyder")
    p.mb-5 Comparando las imágenes anteriores se puede percibir que cada una de ellas evoca emociones diferentes. ¿Por qué sucede esto?, la respuesta está en el uso de los colores. En la imagen de la izquierda se destacan los colores azules, violetas y algunos tintes de verde que dan la sensación de que se trata de un mundo nocturno o frío; en contraste con la imagen de la derecha en la que se destacan los colores amarillos, amarillos verdosos, naranjas, terrosos y ocres que brindan la ilusión de un mundo más cálido.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img14.png')})`}"
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
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-5           
              img(src='@/assets/curso/tema1/img15.svg', alt='Texto que describa la imagen')
          
        h1.text-center Colores cálidos o activos
        p.text-center Son aquellos asociados a efectos visuales de calor como la luz solar, el fuego, los atardeceres, la arena, la playa, etc., evocando fuertes sentimientos que promueven el movimiento. Funcionan bien en espacios grandes, haciéndolos sentir seguros, acogedores y más cercanos.
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-5            
              img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')
          
        h1.text-center Colores fríos o pasivos
        p.text-center  Se relacionan con efectos visuales asociados al frío como la luz de luna, el agua, el amanecer, la nieve, naturaleza verde, etc., transmitiendo una sensación de frescura y calma. Funcionan bien en espacios pequeños, aumentando la percepción de su tamaño, haciéndolos sentir más grandes, abiertos y lejanos.

    p.mb-5 Realizando una mezcla adecuada de colores cálidos y fríos se logra un equilibrio con un mayor contraste y mejor definición, que mejora la estética del videojuego, haciéndolo más agradable para el espectador.

    .row.justify-content-center.mb-5
      .col-4   
      .col-3
        .tema1-infografia
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img17.svg') 
                figcaption Leyenda de la imagen

            .tarjeta.p-3(x="68%" y="5%" numero="")
              div.BorTitImg(style="border-left-color: #D6BE6F") 
                h4.m-0 Dorado
              div.BorTitImg.BorTitImg2 
                p.mb-0 Opulencia

            .tarjeta.p-3(x="68%" y="11%" numero="")
              div.BorTitImg(style="border-left-color: #4D2311") 
                h4.m-0 Marrón
              div.BorTitImg.BorTitImg2 
                p.mb-0 Profundidad o experiencia

            .tarjeta.p-3(x="68%" y="18%" numero="")
              div.BorTitImg(style="border-left-color: #F4E703") 
                h4.m-0 Amarillo
              div.BorTitImg.BorTitImg2 
                p.mb-0 Actitud positiva y alegría

            .tarjeta.p-3(x="68%" y="24%" numero="")
              div.BorTitImg(style="border-left-color: #E42622") 
                h4.m-0 Rojo
              div.BorTitImg.BorTitImg2 
                p.mb-0 Pasión o excitación

            .tarjeta.p-3(x="68%" y="30%" numero="")
              div.BorTitImg(style="border-left-color: #EB007F") 
                h4.m-0 Rosa
              div.BorTitImg.BorTitImg2 
                p.mb-0 Feminidad

            .tarjeta.p-3(x="68%" y="36%" numero="")
              div.BorTitImg(style="border-left-color: #C5C5C5") 
                h4.m-0 Plata
              div.BorTitImg.BorTitImg2 
                p.mb-0 Intelectualidad

            .tarjeta.p-3(x="68%" y="42%" numero="")
              div.BorTitImg(style="border-left-color: #029BDD") 
                h4.m-0 Azul
              div.BorTitImg.BorTitImg2 
                p.mb-0 Tristeza o depresión
            
            .tarjeta.p-3(x="68%" y="48%" numero="")
              div.BorTitImg(style="border-left-color: #5DAE89") 
                h4.m-0 Verde
              div.BorTitImg.BorTitImg2 
                p.mb-0 Renovación o vida.

            .tarjeta.p-3(x="68%" y="55%" numero="")
              div.BorTitImg(style="border-left-color: #7D2283") 
                h4.m-0 Violeta
              div.BorTitImg.BorTitImg2 
                p.mb-0 Espiritualidad

            .tarjeta.p-3(x="68%" y="61%" numero="")
              div.BorTitImg(style="border-left-color: #747476") 
                h4.m-0 Gris
              div.BorTitImg.BorTitImg2 
                p.mb-0 Neutralidad y serenidad

            .tarjeta.p-3(x="68%" y="67%" numero="")
              div.BorTitImg(style="border-left-color: #E4E4E6") 
                h4.m-0 Blanco
              div.BorTitImg.BorTitImg2 
                p.mb-0 Pureza

            .tarjeta.p-3(x="68%" y="73%" numero="")
              div.BorTitImg(style="border-left-color: #000000") 
                h4.m-0 Negro
              div.BorTitImg.BorTitImg2 
                p.mb-0 Elegancia
      .col-5      

    figure.mb-5
      img(src='@/assets/curso/tema1/img18.png') 

    p.mb-5 Adicionalmente, puede conocer sobre la teoría del color y cómo se requiere de una referencia para mezclar los colores y conseguir un efecto en concreto: 

    h2.mb-4 Teoría del color
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
    datosSlyder: [
      {
        titulo: 'Escenas del videojuego Ori and The Blind Forest (2015)',
        imagen: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Escenas del videojuego Ori and The Blind Forest (2015)',
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
