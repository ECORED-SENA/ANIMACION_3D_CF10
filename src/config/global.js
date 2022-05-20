export default {
  global: {
    componenteFormativo: 'Iluminación',
    descripcionCurso:
      'La iluminación en la animación 3D, trabaja con unas cuantas herramientas que simulan la luz generada por computador, consiste en crear una escena o secuencia visible y que incorpore las diferentes fuentes de luz. Aquí se verán los parámetros de luz, sus características, el triángulo de iluminación y su influencia en la construcción de los ambientes de escena.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría de la luz',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teoría del color',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Triángulo de iluminación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Reloj de Iluminación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Propiedades de la luz',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Iluminación 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Iluminación global',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de luces',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de nodos para iluminar',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              '<i>High Dinamic Range Image</i> (HDRI) o imagen de alto rango dinámico',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Iluminación en interiores y exteriores',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Fotografía de producto',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Motores de <i>render</i>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Simulación y Fx',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Escuela Superior de Informática - ESI. (s.f.). 3.3. Iluminación práctica de una escena.',
      link:
        'http://www.esi.uclm.es/www/cglez/fundamentos3D/03.03.Iluminacion.html ',
    },
    {
      referencia:
        'MayteVidal fotografía. (2021). Iluminación básica. Reloj de Millerson. ',
      link:
        'http://maytevidalfotografia.blogspot.com/2013/08/iluminacion-basica-reloj-de-millerson.html',
    },
    {
      referencia:
        'Muñoz, D. (2021). Reloj de Millerson. Vivencias fotográficas. [Blog].',
      link:
        'http://vivenciasfotograficas.blogspot.com/2014/02/reloj-de-millerson.html ',
    },
  ],
  glosario: [
    {
      termino: '<i>Addon</i>',
      significado:
        'Programa que se puede instalar en <i>Blender</i> para facilitar el desarrollo de algún proceso complejo en el <i>software</i>.',
    },
    {
      termino: 'Cenital',
      significado: 'Del origen <i>cenit</i>, cuando algo está por encima.',
    },
    {
      termino: 'HDRI',
      significado: 'Imagen de alto rango dinámico.',
    },
    {
      termino: 'Motor de <i>render</i>',
      significado: 'Programa para generar imágenes 2D a partir de objetos 3D.',
    },
    {
      termino: 'Reflexión',
      significado:
        'Cuando un rayo de luz choca y rebota contra una superficie.',
    },
    {
      termino: 'Refracción',
      significado:
        'Cuando los rayos de luz pasan de un medio a otro con diferente densidad, ocasionando un cambio de dirección y velocidad de propagación.',
    },
    {
      termino: 'Renderizar',
      significado:
        'Proceso en el que un elemento que se encuentra en el mundo 3D, sea procesado en una imagen o un video para ser visualizado fuera del <i>software</i>.',
    },
  ],
  complementario: [
    {
      texto:
        'Tutorial de animación 3D: brazos IK FK en personajes / Rigs en Maya, Blender, 3DsMax, C4D.',
      tipo: 'Video',
      link: 'https://youtu.be/oEHBqiq97jA',
    },
    {
      texto:
        'Artnatomya. (2020). Página de consulta y compra de elementos de diseño gráfico y animación.',
      tipo: 'Página web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      texto:
        'Osipa, J. (2010). Stop Staring: Facial Modeling and Animation Done Right.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
    },
    {
      texto: 'Eleven - Rig Blender',
      tipo: 'Archivo ZIP',
      descarga: '/downloads/Orient_custom_shape.zip',
    },
    {
      texto: 'Addon - Blender',
      tipo: 'Archivo Blend',
      descarga: '/downloads/Eleven.blend',
    },
    {
      texto: 'Script_ui.py',
      tipo: 'Archivo PY',
      descarga: '/downloads/script_ui.py',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina MOontañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Luis Fernando Amortegui Garcia',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Giovanni Machado Cerquera',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varon Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
