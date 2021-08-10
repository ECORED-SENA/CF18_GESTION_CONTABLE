<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Otras técnicas de análisis financiero

    .bloque-texto-a.color-primario.px-4.py-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.py-3
          img.mx-auto(src="@/assets/curso/tema3/img1.svg", alt="imagen ambiental" style='width:300px;')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p El análisis financiero es indispensable en la organización, teniendo en cuenta que permite visualizar la situación económica y financiera de esta; por lo tanto, se revisan las siguientes técnicas con el fin de dar valor agregado a la empresa, medir el desempeño y generar rentabilidad.
    
    
    separador
    #t_3_1.titulo-segundo
      .h2 3.1Valor Económico Agregado (EVA)
    
    .row.justify-content-center.mb-4
      .col-lg-8
        p.mb-4 El Valor Económico Agregado (EVA) es un método de desempeño financiero para calcular el verdadero beneficio económico de una empresa (Coral, D., L. y Gudiño, E., 2014).
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Este método permite conocer la rentabilidad de la empresa, teniendo en cuenta que el resultado que genera ya tiene deducidos los costos y los gastos. Asimismo, permite analizar el incremento de la inversión de los inversionistas o socios.
      .col-lg-4
        figure
          img.mx-auto(src="@/assets/curso/tema3/img2.svg", alt="imagen ambiental" style='width:280px;')

    h4.mb-4 Interpretación del EVA:
    p.mb-5 Es importante tener en cuenta lo siguiente:
    .row.justify-content-center
      .col-auto
        figure.mb-5
          img.mx-auto(src="@/assets/curso/tema3/img3.svg", alt="Interpretación del EVA" style='width:234px;')
      .col-auto
        figure.mb-5
          img.mx-auto(src="@/assets/curso/tema3/img4.svg", alt="Interpretación del EVA" style='width:234px;')
      .col-auto
        figure.mb-5
          img.mx-auto(src="@/assets/curso/tema3/img5.svg", alt="Interpretación del EVA" style='width:234px;')

    h4.mb-4 Cálculo del EVA:
    ol.lista-ol--cuadro.mb-4
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 1
          p.mb-0 #[strong Se debe calcular el capital invertido neto (CIN) o activo neto financiero (ANF).] Una forma clara y sencilla de calcular el capital invertido es:

    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Opción 1 de cálculo
            p.mb-4 CIN o ANF=Activos totales-Pasivos (que no generen intereses)
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema3/icon1.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Opción 2 de cálculo
            p.mb-4 CIN o ANF=Patrimonio total+obligaciones financieras

    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 2
          p.mb-0 #[strong Calcular la utilidad operacional neta antes de gastos financieros y después de impuestos (UODI):] su objetivo es determinar si la utilidad excede o no el valor necesario para atender el costo de los recursos utilizados, tanto de pasivo como de patrimonio.

    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 3
          p.mb-0 #[strong Determinar el costo promedio ponderado de capital (CPPC):]  es la tasa de rendimiento que debe tener la empresa sobre sus inversiones. Para su cálculo se tiene en cuenta los pasivos y la Tasa Interna de Oportunidad (TIO).
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/formula1.svg', alt='formula costo promedio ponderado de capital', style='width: 790px;')
    
    ol.lista-ol--cuadro.mb-4
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 4
          p.mb-0 Calcular el Valor Económico Agregado (EVA). <br>
    p.mb-5(style='margin-start:32px;') La fórmula básica del EVA es la siguiente:
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/formula2.svg', alt='formula Valor Económico Agregado', style='width: 790px;')

    h4.mb-4 Ejemplo de cálculo del EVA:
    p.mb-4 A continuación, se presenta el estado de situación financiera y el estado de resultados integral para calcular el EVA:
    
    .row.justify-content-center
      .col-md-8.mb-4.ms-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center(titulo="Empresa contable SAS")
            .col-auto
              .tabla-b.color-secundario.mb-5
                table(style='background-color: white;')
                  thead.tabla-b__header
                    tr
                      th(colspan='2') Estado de resultados integral 2019
                  tbody
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')
                      td.text-center(style='border-bottom: dashed #5e6178;') 
                        b 2019
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Ingresos operacionales
                      td(style='border-bottom: dashed #5e6178; ')
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Ingresos por actividades ordinarias
                      td.text-end(style='border-bottom: dashed #5e6178;') $300.000.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Costo de ventas
                      td.text-end(style='border-bottom: dashed #5e6178;') $189.600.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad bruta
                      td.text-end(style='border-bottom: dashed #5e6178;') $110.400.000
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Gastos operacionales
                      td(style='border-bottom: dashed #5e6178; ')
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Gastos de administraci&oacute;n
                      td.text-end(style='border-bottom: dashed #5e6178;') $28.800.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Gastos de ventas
                      td.text-end(style='border-bottom: dashed #5e6178;') $12.000.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad operacional
                      td.text-end(style='border-bottom: dashed #5e6178;') $69.600.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Ingresos no operacionales
                      td.text-end(style='border-bottom: dashed #5e6178;') $2.400.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Gastos financieros
                      td.text-end(style='border-bottom: dashed #5e6178;') $1.200.000
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad antes de impuestos
                      th.text-end(style='border-bottom: dashed #5e6178;') $70.800.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Provisi&oacute;n para impuesto de renta
                      td.text-end(style='border-bottom: dashed #5e6178;') $24.072.000
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad l&iacute;quida
                      th.text-end(style='border-bottom: dashed #5e6178;') $46.728.000
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Reservas
                      td.text-end(style='border-bottom: dashed #5e6178;') $4.672.800
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad del ejercicio
                      th.text-end(style='border-bottom: dashed #5e6178;') $42.055.200
          
            .col-auto
              .tabla-b.color-secundario.mb-5
                table(style='background-color: white;')
                  thead.tabla-b__header
                    tr
                      th(colspan='2') Estado de situaci&oacute;n financiera 2019 
                  tbody
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')  
                      th(style='border-bottom: dashed #5e6178;').text-center 2019
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') ACTIVO
                      td.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Activo corriente
                      td.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Disponible
                      td.text-end(style='border-bottom: dashed #5e6178;')  $18.000.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Inversiones
                      td.text-end(style='border-bottom: dashed #5e6178;')  $2.400.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Deudores corto plazo
                      td.text-end(style='border-bottom: dashed #5e6178;')  $36.000.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Inventarios
                      td.text-end(style='border-bottom: dashed #5e6178;')  $86.400.000 
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total activo corriente
                      th.text-end(style='border-bottom: dashed #5e6178;')  $142.800.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Propiedades, planta y equipo
                      td.text-end(style='border-bottom: dashed #5e6178;')  $60.000.000 
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total activo
                      th.text-end(style='border-bottom: dashed #5e6178;')  $202.800.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')  
                      td.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') PASIVO
                      th.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Pasivo corriente
                      th.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Obligaciones financieras
                      td.text-end(style='border-bottom: dashed #5e6178;')  $28.800.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Proveedores
                      td.text-end(style='border-bottom: dashed #5e6178;')  $37.165.200 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Cuentas por pagar
                      td.text-end(style='border-bottom: dashed #5e6178;')  $20.800.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Impuestos, grav&aacute;menes y tasas
                      td.text-end(style='border-bottom: dashed #5e6178;')  $24.831.600 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Pasivo estimado y provisiones
                      td.text-end(style='border-bottom: dashed #5e6178;')  $4.200.000 
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total pasivo
                      th.text-end(style='border-bottom: dashed #5e6178;')  $115.796.800 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')  
                      td.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') PATRIMONIO
                      th.text-end(style='border-bottom: dashed #5e6178;')  
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Capital
                      td.text-end(style='border-bottom: dashed #5e6178;')  $ 20.000.000 
                    tr
                      td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidades acumuladas
                      td.text-end(style='border-bottom: dashed #5e6178;')  $67.003.200 
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total patrimonio
                      th.text-end(style='border-bottom: dashed #5e6178;')  $ 87.003.200 
                    tr
                      th(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total pasivo + patrimonio
                      th.text-end(style='border-bottom: dashed #5e6178;') $202.800.000

    h4.mb-4 Cálculo del EVA - Empresa Contable SAS:
    ol.lista-ol--cuadro.mb-4
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 1
          p.mb-0 Se debe calcular el capital invertido neto (CIN) o activo neto financiero (ANF).
    h4.mb-4 Opción 1 de cálculo:
    p.mb-4.ms-3 Total activos: #[strong $202.800.000]
    h4.mb-4 Pasivos
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-b.color-secundario.mb-5
          table
            tbody
              tr
                th(style='width: 60%; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Proveedores
                td.text-end(style='border-bottom: dashed #5e6178;')
                  b $37.165.200 
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Cuentas por pagar
                td.text-end(style='border-bottom: dashed #5e6178;')  $20.800.000 
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Impuestos, grav&aacute;menes y tasas
                td.text-end(style='border-bottom: dashed #5e6178;')  $24.831.600 
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Pasivo estimado y provisiones
                td.text-end(style='border-bottom: dashed #5e6178;')  $4.200.000 
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total pasivo
                td.text-end(style='border-bottom: dashed #5e6178;')  $86.996.800
        figure.mb-2
          img(src='@/assets/curso/tema3/formula3.svg', alt='cálculo del EVA', style='width:550px;').mx-auto
      .col-lg-4
        figure.mb-2
          img(src='@/assets/curso/tema3/img6.svg', alt='imagen ambiental', style='width:420px;').mx-auto

    h4.mb-5 Opción 2 de cálculo:
    .row.justify-content-center.mb-4
      .col-lg-6
        figure.mb-2
          img(src='@/assets/curso/tema3/img7.svg', alt='imagen ambiental', style='width:490px;').mx-auto
      .col-lg-6
        figure.mb-2
          img(src='@/assets/curso/tema3/formula4.svg', alt='cálculo del EVA opción 2', style='width:550px;').mx-auto

    
    ol.lista-ol--cuadro.mb-4
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 2
          p.mb-0 Calcular la utilidad operacional neta antes de gastos financieros y después de impuestos (UOIDI)
    .row.justify-content-center
      .col-lg-8
        .tabla-b.color-secundario.mb-5
          table
            tbody
              tr
                th(style='width: 60%; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad neta del ejercicio
                td.text-end(style='border-bottom: dashed #5e6178;') $42.055.200
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Más intereses (gastos financieros)
                td.text-end(style='border-bottom: dashed #5e6178;')  $1.200.000 
              tr
                td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Utilidad del ejercicio
                td.text-end(style='border-bottom: dashed #5e6178;')  $43.255.200
    
    
    
    ol.lista-ol--cuadro.mb-4
        li 
          .lista-ol--cuadro__vineta
            span(style='font-weight:bold;') 3
          p.mb-0 Determinar el costo promedio ponderado de capital (CPPC).
    p.mb-5 La empresa contable SAS desea obtener un rendimiento del 30% (TIO); el costo de las obligaciones financieras es del 21% anual.
    .row.justify-content-center
      figure.mb-5
        img(src='@/assets/curso/tema3/formula5.svg', alt='', style='width:790px;').mx-auto
    
    .tabla-b.color-acento-contenido.mb-5
      table
        thead.tabla-b__header
          tr
            th(style='border-right: 0; width:30%;') Recurso
            th(style='border-right: 0') Valor
            th(style='border-right: 0') ANF
            th(style='border-right: 0') TIO
            th(style='border-right: 0') Participaci&oacute;n
            th(style='border-right: 0') Ponderaci&oacute;n
            th(style='border-right: 0') Costo promedio
        tbody
          tr
            td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178; padding-end:10px;') Obligaciones financieras
            td.text-center(style='padding: 0px; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') $ 28.800.000
            td.text-center(style='padding: 0px; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') $ 15.803.200
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 21,00%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 24,87%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178; ') 5,22%
            td.text-center(style='border-bottom: dashed #5e6178;')
          tr
            td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Patrimonio
            td.text-center(style='padding: 0px; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') $ 87.003.200
            td.text-center(style='padding: 0px; border-bottom: dashed #5e6178; border-right: dashed #5e6178;') $ 115.803.200
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 30,00%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 75,13%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 22,54%
            td.text-center(style='border-bottom: dashed #5e6178;')
          tr
            td(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') Total
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')  
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;')  
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 51,00%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 100%
            td.text-center(style='border-bottom: dashed #5e6178; border-right: dashed #5e6178;') 27,76%
            td.text-center(style='border-bottom: dashed #5e6178;') 27,76
    
    p.mb-5 Para hallar el porcentaje de participación se realiza lo siguiente:
    .row.justify-content-center
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/tema3/img8.svg', alt='imagen ambiental', style='width:385px;').mx-auto
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Participación de obligaciones financieras")
            .col-auto.mt-4
              figure.mb-4
                img(src='@/assets/curso/tema3/formula6.svg', alt='Participación de obligaciones financieras', style='width: 600px').mx-auto
          .row.justify-content-center(numero="2" titulo="Participación del patrimonio ")
            .col-auto.mt-4
              figure.mb-4
                img(src='@/assets/curso/tema3/formula7.svg', alt='Participación del patrimonio ', style='width: 500px').mx-auto
            p.mb-4 Para calcular la ponderación se realiza el siguiente procedimiento:
          .row.justify-content-center(numero="3" titulo="Ponderación de obligaciones")
            .col-auto.mt-4
              figure.mb-4
                img(src='@/assets/curso/tema3/formula8.svg', alt='Ponderación de obligaciones', style='width: 500px').mx-auto
          .row.justify-content-center(numero="4" titulo="Ponderación de patrimonio")
            .col-auto.mt-4
              figure.mb-4
                img(src='@/assets/curso/tema3/formula9.svg', alt='Ponderación de patrimonio', style='width: 500px').mx-auto

    p.mb-5 Calcular el Valor Económico Agregado (EVA).
    .row
      .col-lg-7
        figure.mb-5
          img(src='@/assets/curso/tema3/formula10.svg', alt='Calculo Valor Económico Agregad', style='width: 500px').mx-auto
        p.mb-4 El indicador de acuerdo con el caso planteado da positivo; sin embargo, es importante realizar un seguimiento constante con el fin de verificar las variaciones que se puedan generar, además de practicar simultáneamente otras técnicas de análisis financiero. Asimismo, la empresa debe diseñar e implementar estrategias que permitan mantener o fortalecer el EVA, mediante el adecuado manejo de cartera, de inventarios, activos fijos, costos y gastos, etc.
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/tema3/img9.svg', alt='imagen ambiental', style='width: 440px').mx-auto

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-2 Para profundizar en este tema por favor revise el Capítulo VII del texto: 
          a.anexo.mb-4.mb-lg-0.enlace-mover(style='',href="https://www.academia.edu/26760979/Analisis_Financiero_Aplicado_pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto(style='font-size: 14px;')
              p.mb-0 Ortiz, A., H. (2011). Análisis financiero aplicado y principios de administración financiera (14a ed.). Universidad Externado de Colombia.
    
    
    
    separador
    #t_3_2.titulo-segundo
      .h2 3.2 Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)
    

    .bloque-texto-a.color-primario.px-4.py-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.py-3
          img.mx-auto(src="@/assets/curso/tema3/img10.svg", alt="imagen ambiental" style='width:240px;')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p.mb-4 Es un indicador financiero que mide la capacidad de la empresa de generar beneficios económicos en el desarrollo de sus actividades.  Al calcular el indicador se tiene en cuenta determinar la utilidad operacional, sumando las depreciaciones y amortizaciones, sin que sean descontados los intereses e impuestos. Es conocido por sus siglas en inglés earnings before interests, taxes, depreciations and amortizations.
            p.mb-2 Para calcular el EBITDA se tiene en cuenta la siguiente estructura:
      
    .row.justify-content-center.mb-4
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              tbody
                tr(style='border-bottom: dashed #5e6178; border-top: dashed #5e6178;')
                  th(style='width:10%;;border-right: dashed #5e6178;')
                  th(style='border-right: dashed #5e6178;') Utilidad bruta
                  th(style='border-right: 0;').text-center XXXXX
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (-)
                  td(style='border-right: dashed #5e6178;') Gastos de administraci&oacute;n
                  td.text-center XXXXX
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (-)
                  td(style='border-right: dashed #5e6178;') Gastos de ventas
                  td.text-center XXXXX
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (=)
                  td(style='border-right: dashed #5e6178;') Utilidad operativa (EBIT)
                  td.text-center XXXXX
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (+)
                  td(style='border-right: dashed #5e6178;') Depreciaciones y amortizaciones
                  td.text-center XXXXX
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') 
                    b (=)
                  td(style='border-right: dashed #5e6178;') 
                    b EBITDA
                  td.text-center 
                    b XXX

    p.mb-4 #[strong Ejemplo:]
    p.mb-5 La empresa Contable SAS presenta el estado de resultados integral, con el fin de calcular el EBITDA, las depreciaciones y amortizaciones equivalen a $6.000.000.
    .row.justify-content-center.mb-4
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              thead.tabla-b__header
                tr
                  th(colspan='2') Empresa contable SAS <br>  Estado de resultados integral 2019 
              tbody
                tr(style='border-bottom: dashed #5e6178; border-top: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;')  
                  th.text-center(style='border-right: 0;')   2019
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') 
                    b Ingresos operacionales 
                  td  
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Ingresos por actividades ordinarias
                  td.text-center  $300.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Costo de ventas
                  td.text-center  $189.600.000 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Utilidad bruta
                  td.text-center  $110.400.000 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Gastos operacionales
                  td.text-center  
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Gastos de administraci&oacute;n
                  td.text-center  $28.800.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Gastos de ventas 
                  td.text-center  $12.000.000 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Utilidad operacional
                  td.text-center  $69.600.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Ingresos no operacionales
                  td.text-center  $2.400.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Gastos financieros
                  td.text-center  $1.200.000 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Utilidad antes de impuestos
                  td.text-center  $70.800.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Provisi&oacute;n para impuesto de renta
                  td.text-center  $24.072.000 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Utilidad l&iacute;quida
                  td.text-center  $46.728.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Reservas 
                  td.text-center  $4.672.800 
                tr(style='font-weight:bold; border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') Utilidad del ejercicio
                  td.text-center  $42.055.200 


    p.mb-5 Cálculo #[strong EBITDA:]

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              tbody
                tr(style='border-bottom: dashed #5e6178; border-top: dashed #5e6178;')
                  th(style='width:10%;;border-right: dashed #5e6178;')
                  th(style='border-right: dashed #5e6178;') Utilidad bruta
                  th(style='border-right: 0;').text-center $110.400.000
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (-)
                  td(style='border-right: dashed #5e6178;') Gastos de administraci&oacute;n
                  td.text-center   $28.800.000  
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (-)
                  td(style='border-right: dashed #5e6178;') Gastos de ventas
                  td.text-center $12.600.000
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (=)
                  td(style='border-right: dashed #5e6178;') Utilidad operativa (EBIT)
                  td.text-center $69.600.000
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') (+)
                  td(style='border-right: dashed #5e6178;') Depreciaciones y amortizaciones
                  td.text-center $6.000.000
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='border-right: dashed #5e6178;') 
                    b (=)
                  td(style='border-right: dashed #5e6178;') 
                    b EBITDA
                  td.text-center 
                    b  $75.600.000

    p.mb-5 Se puede observar que para calcular el EBITDA se suman las depreciaciones y amortizaciones, adicionalmente, no se tiene en cuenta los gastos financieros (intereses) y las provisiones de impuestos, puesto que su objetivo es medir los beneficios frente a las actividades operacionales; sin embargo, el cálculo de este indicador no mide la liquidez de la empresa, es un indicador que muestra las ganancias sin descontar determinados gastos, lo que permite generar el flujo de caja operativo. Cabe resaltar que este indicador es útil para realizar comparaciones de empresas del mismo sector, con el fin de determinar cuál de estas genera más beneficios económicos.
    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-4 Revise el siguiente enlace para observar el procedimiento de cálculo del presente indicador:
          a.anexo.mb-4.mb-lg-0.enlace-mover(style='',href="https://actualicese.com/el-ebitda-en-las-organizaciones-su-importancia/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto(style='font-size: 14px;')
              p.mb-0 El EBITDA en las organizaciones: su importancia  


    separador
    #t_3_3.titulo-segundo
      .h2 3.3  Punto de equilibrio
    
    .row.justify-content-center.mb-4
      .col-lg-4
        figure.mb-2
          img(src='@/assets/curso/tema3/img11.svg', alt='imagen de ambiente', style='width:365px;').mx-auto
      .col-lg-8.align-self-center
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El punto de equilibrio es la igualdad que existe entre los ingresos y los gastos, en el que no existe utilidad, pero tampoco hay pérdida, en este punto se recupera la inversión realizada. Es una herramienta de análisis que sirve para la toma de decisiones en cuanto a los niveles de producción y cantidad de productos a comercializar, teniendo en cuenta las siguientes variables: costos fijos y variables, precios y volumen de ventas.
        p.mb-4 Para aplicar adecuadamente el punto de equilibrio es importante tener claridad de los siguientes conceptos:

    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema3/icon2.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-lg-8
            h1.mb-5.text-center Costos fijos
            p.text-center.mb-4 son aquellos valores que permanecen constantes sin interesar los niveles de producción o de ventas, por ejemplo, el arriendo.
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema3/icon3.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-lg-9
            h1.mb-5.text-center Costos variables
            p.text-center.mb-4 son aquellos conceptos que varían de acuerdo con los niveles de producción, por ejemplo, materia prima, mano de obra, comisiones a los vendedores.


    p.mb-4 La fórmula del punto de equilibrio es la siguiente:
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/tema3/formula11.svg', alt='formula punto de equilibrio', style='width: 525px;')
      .col-lg-5
        figure.d-flex.justify-content-end
          img(src='@/assets/curso/tema3/img12.svg', alt='imagen ambiental', style='width: 440px;')

    p.mb-4 #[strong Ejemplo:]
    p.mb-5 La empresa Contable SAS contrata a un asesor contable para determinar el punto de equilibrio en unidades y en pesos; por lo tanto, presenta la siguiente información:

    .row.justify-content-center
      .col-lg-4
        ul.lista-ul.mb-5
          li 
            i.fas.fa-chevron-right
            p.mb-0 CF:  $ 40.000.000
          li 
            i.fas.fa-chevron-right
            p.mb-0 PVU: $ 40.000 /unidad
          li 
            i.fas.fa-chevron-right
            p.mb-0 CVU: $ 35.000/unidad
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema3/img13.svg', alt='imagen ambiental', style='width: 320px;')
      .col-auto
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema3/formula12.svg', alt='ejemplo punto de equilibrio', style='width: 350px;')
      .col-auto
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema3/img14.svg', alt='imagen ambiental', style='width: 360px;')

    p.mb-4 La empresa contable SAS debe vender 8.000 unidades para no perder, ni obtener utilidad.
    p.mb-5 Seguidamente, se calcula el punto de equilibrio en pesos con la siguiente fórmula:
    .row.justify-content-center.mb-4
      .col-lg-5
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema3/img15.svg', alt='imagen ambiental', style='width: 460px;')
      .col-lg-5
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema3/formula13.svg', alt='imagen calculo punto de equilibrio en pesos', style='width: 450px;')

    p.mb-4 El punto de equilibrio en pesos es de $320.000.000.
    p.mb-4 Luego, se realiza la comprobación mediante el estado de resultados:


    .row.justify-content-center
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              thead.tabla-b__header
                tr
                  th(colspan='2') Contable SAS <br> Estado de resultados integral <br> A 31 de diciembre de 2020
              tbody
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='width:60%; border-right: dashed #5e6178;') Ingresos operacionales
                  td.text-end  $320.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos variables
                  td.text-end  $280.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Margen de contribuci&oacute;n
                  td.text-end  $40.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos fijos
                  td.text-end  $ 40.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  th(style=' border-right: dashed #5e6178;') Utilidad operacional
                  th.text-end  $0 


    p.mb-4 #[strong Fórmula para obtener una utilidad operacional:]
    p.mb-5 Permite calcular las unidades a vender para generar la utilidad deseada.
    .row.justify-content-start.mb-4
      .col-lg-7
        figure.mb-4
          img(src='@/assets/curso/tema3/formula14.svg', alt='formula utilidad operacional', style='width:640px;').mx-auto
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/tema3/img16.svg', alt='imagen ambiental', style='width:410px;').mx-auto
      

    p.mb-4 #[strong Ejemplo:]
    p.mb-5 A partir de la información del ejemplo anterior se desea obtener una utilidad de 10.000.000 al finalizar el período.
    .row.mb-5(style='justify-content: space-around;')
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema3/img17.svg', alt='imagen ambiental', style='width:480px;').mx-auto
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema3/formula15.svg', alt='cálculo de utilidades', style='width:450px;').mx-auto

    p.mb-4 Para obtener una utilidad de $10.000.000, la empresa debe vender 10.000 unidades.
    p.mb-5 Cálculo del punto de equilibrio en pesos:
    .row.mb-5(style='justify-content: center;')
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema3/formula16.svg', alt='cálculo ejemplo punto equilibrio en pesos', style='width:450px;').mx-auto
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema3/formula25.svg', alt='imagen ambiental', style='width:445px;').mx-auto


    p.mb-4 Para generar una utilidad de $10.000.000, al finalizar el período debe obtener ingresos por ventas de $400.000.000.
    p.mb-5 Luego, se realiza la comprobación mediante el estado de resultados:


    .row.justify-content-center
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              thead.tabla-b__header
                tr
                  th(colspan='2') Contable SAS <br> Estado de resultados integral <br> A 31 de diciembre de 2020
              tbody
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='width:60%; border-right: dashed #5e6178;') Ingresos operacionales
                  td.text-end  $400.000.000  
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos variables
                  td.text-end  $350.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Margen de contribuci&oacute;n
                  td.text-end  $50.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos fijos
                  td.text-end  $ 40.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  th(style=' border-right: dashed #5e6178;') Utilidad operacional
                  th.text-end  $ 10.000.000 
    
    
    p.mb-4 Fórmula para obtener una utilidad neta después de impuestos:
    p.mb-4 Permite calcular las unidades a vender para generar la utilidad deseada.
    .row.justify-content-center.mb-4
      .col-lg-7.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/formula17.svg', alt='formula utilidad operacional', style='width:640px;').mx-auto
      .col-lg-5.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/img18.svg', alt='imagen ambiental', style='width:450px;').mx-auto
    
    p.mb-4 #[strong Ejemplo:]
    p.mb-4 Conforme a la información del ejemplo anterior se desarrolla el ejercicio. La tasa de impuesto es del 34%.
    .row.justify-content-center.mb-4
      .col-lg-5.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/img19.svg', alt='imagen ambiental', style='width:490px;').mx-auto
      .col-lg-6.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/formula18.svg', alt='utilidad neta después de impuestos', style='width:540px;').mx-auto
    
    p.mb-4 Para obtener una utilidad después de impuestos, la empresa debe vender 111.030,30 unidades.
    p.mb-4 Cálculo del punto de equilibrio en pesos:
    .row.justify-content-center.mb-4
      .col-lg-6.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/formula19.svg', alt='utilidad neta después de impuestos', style='width:540px;').mx-auto
      .col-lg-6.align-self-center
        figure.mb-4
          img(src='@/assets/curso/tema3/img20.svg', alt='imagen ambiental', style='width:620px;').mx-auto

    p.mb-5 Luego, se realiza la comprobación mediante el estado de resultados:
    .row.justify-content-center
      .col-lg-8
        .tabla-b.color-secundario.mb-5
            table
              thead.tabla-b__header
                tr
                  th(colspan='2') Contable SAS <br> Estado de resultados integral <br> A 31 de diciembre de 2020
              tbody
                tr(style='border-bottom: dashed #5e6178;')
                  td(style='width:60%; border-right: dashed #5e6178;') Ingresos operacionales
                  td.text-end   $441.212.120  
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos variables
                  td.text-end   $386.060.605
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Margen de contribuci&oacute;n
                  td.text-end  $55.151.515 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Costos fijos
                  td.text-end  $40.000.000 
                tr(style='border-bottom: dashed #5e6178;')
                  th(style=' border-right: dashed #5e6178;') Utilidad operacional
                  th.text-end  $15.151.515 
                tr(style='border-bottom: dashed #5e6178;')
                  td(style=' border-right: dashed #5e6178;') Provisión para impuestos 
                  td.text-end  $5.151.515
                tr(style='border-bottom: dashed #5e6178;')
                  th(style=' border-right: dashed #5e6178;') Utilidad operacional
                  th.text-end  $10.000.000 
    
    p.mb-4 Se puede observar en la comprobación que se genera una utilidad de $10.000.000 después de impuestos.
    
    
    
    separador
    #t_3_4.titulo-segundo
      .h2 3.4 Generación de informes
    
    .row.justify-content-center.mb-4
      .col-lg-8.align-self-center
        p.mb-4 Para la generación de informes financieros es importante tener en cuenta los estándares internacionales y la normatividad vigente, ya que la presentación y revelación de estos debe cumplir los lineamientos que allí se establecen.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Cabe resaltar que el analista financiero debe tener pleno conocimiento de la empresa, del entorno en el cual se desenvuelve, de la planeación estratégica y de los objetivos que persigue a corto, mediano y largo plazo. Asimismo, tendrá el conocimiento para la presentación del compendio de los estados financieros de propósito general que se relacionan en la Norma Internacional de Contabilidad (NIC) 1, los cuales se relacionan a continuación:
      .col-lg-4 
        figure.mb-4
          img(src='@/assets/curso/tema3/img21.svg', alt='imagen ambiental', style='width:310px;').mx-auto

    .row.justify-content-center
      .col-auto.px-1
        figure.mb-4
          img(src='@/assets/curso/tema3/tar1.svg', alt='Estado de situación financiera', style='width:240px;').mx-auto
      .col-auto.px-0
        figure.mb-4
          img(src='@/assets/curso/tema3/tar2.svg', alt='Estado de resultados integral', style='width:240px;').mx-auto
      .col-auto.px-0
        figure.mb-4
          img(src='@/assets/curso/tema3/tar3.svg', alt='Estado de cambio en el patrimonio', style='width:240px;').mx-auto
      .col-auto.px-0
        figure.mb-4
          img(src='@/assets/curso/tema3/tar4.svg', alt='Estado de flujos de efectivo', style='width:240px;').mx-auto
      .col-auto.px-0
        figure.mb-4
          img(src='@/assets/curso/tema3/tar5.svg', alt='Notas a los estados financieros', style='width:240px;').mx-auto
    
    p.mb-5 En el componente formativo denominado “Estados financieros” se encuentra de forma detallada el procedimiento de elaboración de cada uno de estos, en el que se da importancia a la aplicación de la Norma Internacional y a las cualidades fundamentales y de mejora. Los estados financieros se elaboran por lo menos una vez al año, teniendo en cuenta el período contable, estos deben ser claros, comprensibles y fiables, que reflejen la situación económica y financiera de la entidad.
    .row.justify-content-center.mb-4
      .col-lg-4
        figure.mb-2
          img(src='@/assets/curso/tema3/img22.svg', alt='imagen ambiental', style='width:360px;').mx-auto
      .col-lg-8
        p.mb-4 Para complementar los informes financieros es importante aplicar las diferentes técnicas e indicadores de análisis financiero, en las que se obtienen datos cuantitativos y cualitativos que permiten tomar decisiones de inversión, rentabilidad y endeudamiento. Es indispensable que se realice la interpretación de los resultados obtenidos, teniendo en cuenta que los valores por sí solos no son comprensibles para los diferentes usuarios de la información financiera; por lo tanto, se realiza el informe cualitativo, teniendo en cuenta los datos generados en el análisis horizontal y vertical, además, de los indicadores de liquidez, rentabilidad, actividad y endeudamiento.
        .cajon.color-primario.p-4
          p.mb-0 Finalmente, estas técnicas deben ser acompañadas del cálculo del punto de equilibrio, el EBITDA y el EVA, cuyo objetivo es analizar el desempeño de la organización y de esta manera, diseñar e implementar estrategias que conduzcan a la mejora continua de la empresa.

    p.mb-4 Las características que debe reflejar la información financiera son las siguientes:
    .row.justify-content-center.mb-4
      .col-lg-6
        figure.mb-4
          img(src='@/assets/curso/tema3/img23.svg', alt='Caracteristicas de la informacion financiera', style='width:510px;').mx-auto
      .col-lg-6
        figure.mb-4
          img(src='@/assets/curso/tema3/img24.svg', alt='imagen ambiental', style='width:600px;').mx-auto

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-4 Para terminar, revise el marco conceptual de la Norma Internacional de Contabilidad (NIC) 1, a través de siguiente enlace:
          a.anexo.mb-4.mb-lg-0.enlace-mover(style='',href="https://www.gub.uy/ministerio-economia-finanzas/institucional/normativa/norma-internacional-contabilidad-1-nic-1" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto(style='font-size: 14px;')
              p.mb-0 Norma Internacional de Contabilidad Nº 1 (NIC 1)





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

<style lang="sass" scoped></style>
