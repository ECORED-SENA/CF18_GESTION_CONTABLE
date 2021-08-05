export default {
  global: {
    componenteFormativo: 'Técnicas de análisis e indicadores financieros',
    descripcionCurso:
      'Es importante realizar el análisis de los estados financieros, mediante la aplicación de técnicas como el análisis vertical y horizontal, indicadores financieros y de gestión; aunado a ello, el cálculo de punto de equilibrio, el EBITDA y el Valor Económico Agregado (EVA), además, de otros elementos que contribuyen a la generación e implementación de estrategias con valor agregado para la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner.png'),
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
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de análisis financiero',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Metodología de cálculo de las técnicas de análisis horizontal y vertical',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores financieros y de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores de gestión',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores financieros',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Otras técnicas de análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Valor Económico Agregado (EVA)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Punto de equilibrio',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Generación de informes',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
        'Bonsón, E., Cortijo, V. y Flores, F. (2009). Análisis de estados financieros. Fundamentos teóricos y casos prácticos. Pearson Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4717',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública -CTCP- (2020, 24 de noviembre). Norma Internacional de Contabilidad 1. Presentación de estados financieros.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/1_NIC.pdf',
    },
    {
      referencia:
        'Coral, D., L., Gudiño, E. (2014). Contabilidad universitaria. (7a. ed.) McGraw-Hill Interamericana. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=105',
    },
    {
      referencia: 'Gerencie.com (s.f.). Capital de trabajo. ',
      link: 'https://www.gerencie.com/capital-de-trabajo.html',
    },
    {
      referencia:
        'Martínez, H. (s.f.). Indicadores financieros y su interpretación. ',
      link:
        'https://pdf4pro.com/view/iv-indicadores-financieros-y-su-6a73b.html',
    },
    {
      referencia: 'Mejía, A. (s.f.). Indicadores de gestión.',
      link: 'https://orion2020.org/archivo/sistema_mec/10_indicadores1.htm',
    },
    {
      referencia:
        'Roncancio, G. (2019).  Indicadores de gestión (KPI’s): tipos y ejemplos. Pensemos.',
      link:
        'https://gestion.pensemos.com/indicadores-de-gestion-tipos-y-ejemplos',
    },
    {
      referencia:
        'Sinisterra V., Polanco L. y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. McGraw Hill. ',
      link:
        'http://fullseguridad.net/wp-content/uploads/2016/10/Contabilidad-6ta-Edici%C3%B3n-Gonzalo-Sinisterra.pdf',
    },
    {
      referencia:
        'Super Contable Sage. (s.f.). Glosario de términos contables.',
      link:
        'https://www.supercontable.com/informacion/Contabilidad/Definicion_de_Coste_Amortizado.html',
    },
    {
      referencia: 'Varón, G., L. (2015). Presentación de estados financieros.',
      link:
        'https://www.cccucuta.org.co/media/Adjuntos_de_Noticias/presentacionestadosfinancierosctcp.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis horizontal',
      significado:
        'Técnica de análisis que permite determinar la tendencia de cada una de las cuentas o grupo de cuentas de los estados financieros básicos en dos o más períodos contables, esta tendencia se puede expresar en pesos o en porcentaje.',
    },
    {
      termino: 'Análisis vertical',
      significado:
        'Herramienta de análisis financiero que determina la participación de una cuenta en relación con un grupo o subgrupo de cuentas de los estados financieros.		',
    },
    {
      termino: 'Apalancamiento financiero',
      significado:
        'Grado de endeudamiento de la organización, mide el nivel de utilización que hace la empresa de las diferentes fuentes de financiación externas.		',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'Se refiere a las diferentes cuentas que conforman los rubros que se clasifican como activo corriente.',
    },
    {
      termino: 'Capital de trabajo neto',
      significado:
        'Se define como la diferencia entre los activos y los pasivos corrientes, muestra la disponibilidad de la organización para cumplir con sus compromisos periódicos.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'Índice financiero que muestra el derecho que tienen los acreedores sobre los activos de la empresa, se conoce también como razón de apalancamiento.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Disponibilidad de activos corrientes de una empresa para responder por sus compromisos a corto plazo.',
    },
    {
      termino: 'Razones financieras',
      significado:
        'Índices usados en el análisis financiero que permiten relacionar cuentas de un estado financiero con otras cuentas del mismo estado o de otro diferente.',
    },
    {
      termino: 'Rentabilidad',
      significado: 'Capacidad para generar utilidades con recursos propios.',
    },
    {
      termino: 'Rotación',
      significado:
        'Índices que miden la eficiencia de la administración de los recursos de una empresa por sus ejecutivos, se conoce también como razón de actividad.',
    },
  ],
  complementario: [
    {
      texto:
        'Bonsón, E, Cortijo, V., Flores, F. (2009). Análisis de estados financieros. Pearson Educación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4717',
    },
    {
      texto:
        'Ortiz, A., H. (2011). Análisis financiero aplicado y principios de administración financiera (14a ed.). Universidad Externado de Colombia.',
      tipo: 'Libro',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/a/39931/analisis-financiero-aplicado-y-principios-de-administracion-financiera--14a-ed.-',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
