<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Indicadores financieros y de gestión
    

    p.mb-4 Los indicadores permiten que la gestión de las organizaciones sea efectiva y eficiente, puesto que facilita a los integrantes mejorar su desempeño, permitiéndoles evaluar la gestión y mejorar los niveles de aprendizaje en la organización.


    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Indicadores de gestión
    
    .bloque-texto-a.reverse.color-primario.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p Los indicadores permiten que la gestión de las organizaciones sea efectiva y eficiente, puesto que facilita a los integrantes mejorar su desempeño, permitiéndoles evaluar la gestión y mejorar los niveles de aprendizaje en la organización.
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src="@/assets/curso/tema2/img1.svg", alt="imagen ambiental" style='width:250px;')
              

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Concepto")
        .col-md-12.mb-4.mb-md-0.ms-5
          p.mb-5 Un indicador es una medición cuantitativa o cualitativa, cuyo objetivo es verificar el cumplimiento de objetivos específicos. Los indicadores de gestión miden el cumplimiento de los objetivos estratégicos de la organización, teniendo en cuenta lo señalado en la planeación estratégica. Se enfocan en la medición del desempeño, eficiencia, eficacia, efectividad y productividad de la empresa, buscando la mejora continua de los procesos y procedimientos. Cabe resaltar que los indicadores se diseñan por las diferentes áreas de la organización de acuerdo con las actividades que se desean medir de forma cuantitativa o cualitativa (Roncancio, 2019).
          p.mb-4 #[strong Metodología para definir indicadores]
          p.mb-4 A continuación se describen los pasos a seguir: 
          .row.justify-content-center.mb-5
            .col-lg-7
              ul.lista-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Definir objetivos y estrategias: para crear el indicador es importante saber qué es lo que se va a medir y qué propósito cumple dentro de la organización.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Precisar los Factores Críticos de Éxito (FCE): son las variables internas y externas que contribuyan al logro o no de los objetivos.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Relacionar el indicador para cada factor clave de éxito: su objetivo es monitorear las actividades para cumplir con los objetivos.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Identificar el tipo de escala valorativa: se utiliza para medir resultados (estado, umbral y rango de gestión).
                    ul.mt-2
                      li  
                        i.fas.fa-chevron-right
                        p.mb-0 Estado: valor inicial de un indicador.
                      li  
                        i.fas.fa-chevron-right
                        p.mb-0 Umbral: indicador que se quiere lograr.
                      li  
                        i.fas.fa-chevron-right
                        p.mb-0 Rango de gestión: espacio comprendido entre los valores mínimos y máximos aceptables del indicador.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Debe ser confiable y fácil de medir: la información debe ser correcta, fiable y verídica, utilizando métodos y herramientas disponibles. Se asignan responsables de la recolección, tabulación, análisis y presentación de la información.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Establecer y asignar recursos: de acuerdo con las necesidades y objetivos propuestos.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Medir y ajustar: debe ser preciso, válido y oportuno. Se define de forma clara, que apunte a los objetivos propuestos y sea oportuno para la toma de decisiones.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Estandarizar y formalizar: es la etapa de documentación, divulgación y conocimiento de los indicadores de gestión.
          
          p.mb-5
            b Los indicadores poseen los siguientes elementos:
          .row.justify-content-center.mb-5
            .col-lg-7
              ul.lista-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Nombre: debe ser claro y concreto.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Fórmula: para calcular el indicador.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Escala de medida: la forma como se presenta el resultado, por ejemplo, en porcentajes, unidades, etc.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Definición: expresa el concepto del indicador, lo que mide para el cumplimiento de los objetivos.
          
          p.mb-5
            b Ventajas de los indicadores de gestión:
          .row.justify-content-center.mb-5
            .col-lg-7
              ul.lista-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Incentiva a los colaboradores a trabajar continuamente por el cumplimiento de los objetivos.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Permite la mejora continua.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Fortalece el trabajo en equipo.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Motiva a desarrollar las actividades en términos de eficiencia, eficacia y productividad.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Permite realizar comparativos para el diseño e implementación de estrategias acorde con la planeación estratégica.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Presenta información oportuna para la toma de decisiones.
      
      .row.justify-content-center(titulo="Clasificación")
        .col-md-12.mb-4.mb-md-0.ms-5
          p.mb-5 Para hablar de la clasificación es importante definir que se divide de acuerdo con su naturaleza y según su vigencia, ambas deben ser objeto de revisión.
          p.mb-4
            b De acuerdo con su naturaleza:
          .row.justify-content-center
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img2.svg", alt="Efectividad" style='')
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img3.svg", alt="Eficiencia" style='')
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img4.svg", alt="Eficacia" style='')
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img5.svg", alt="Productividad" style='')
          
          p.mb-4
            b Según la vigencia:
          .row.justify-content-center
            .col-lg-10
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/icon1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul(style='border-right: solid 5px #d9a171;')
                  .p-4
                    h3 Temporales
                    p.mb-0 Generalmente se asocian al logro de objetivos de un proyecto o actividad, tiene fecha de vencimiento una vez finalice dicha tarea.
              
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/icon1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul(style='border-right: solid 5px #d9a171;')
                  .p-4
                    h3 Permanentes
                    p Son indicadores que se diseñan para actividades específicas dentro de la organización, que son constantes y permanecen en el tiempo.
          p.mb-4
            b Según el nivel de generación y utilización:
          p.mb-5 Los siguientes indicadores se encuentran relacionados con la organización y planeación estratégica para el cumplimiento de los objetivos propuestos. Los resultados obtenidos son el insumo para tomar decisiones:
          .row.justify-content-center
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img6.svg", alt="Estratégico" style='')
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img7.svg", alt="Táctico" style='')
            .col-auto.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img8.svg", alt="Operativo" style='')
          
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-0 Cabe resaltar que la empresa de acuerdo con sus necesidades, objetivos de medición y mejora continua diseña e implementa los indicadores; por lo tanto, es importante que tenga en cuenta los objetivos que persigue con el fin de crear indicadores acordes con los resultados esperados y que sean útiles para la toma de decisiones.
          
          p.mb-4 Clasificación de indicadores por áreas:
          .row(style='justify-content: space-around;')
            .col-lg-4.mb-5
              figure
                img.mx-auto(src="@/assets/curso/tema2/img9.svg", alt="Imagen ambiental" style='width:336px')
            .col-lg-6.align-self-center
              p.mb-4 #[strong Indicadores área comercial:]
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Nivel de ventas.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Satisfacción del cliente.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Calificación de proveedores.
              
              p #[strong Indicadores del área de calidad:]
              ul.lista-ul.mb-5
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Cumplimiento del programa de auditorías.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Cumplimiento y seguimiento de acciones correctivas y preventivas.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Capacitaciones.
          
          
          .row.align-self-center(style='justify-content: center;')
            .col-lg-6
              p.mb-4 #[strong Indicadores del área de planificación:]
              ul.lista-ul.mb-5
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Cumplimiento de la producción programada.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Utilización de la capacidad instalada.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Eficiencia operativa.
              
              p #[strong Indicadores del área de producción:]
              ul.lista-ul.mb-2
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Productividad en unidades reales.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Productividad por empleado.
              
            .col-lg-5.mb-4.align-self-center
              figure
                img(src="@/assets/curso/tema2/img10.svg", alt="Imagen ambiental" style='width:356px')
          

          .row(style='justify-content: center;')
            .col-lg-5.mb-4
              figure
                img.mx-auto(src="@/assets/curso/tema2/img11.svg", alt="Imagen ambiental" style='width:342px')
            .col-lg-6.align-self-center
              p.mb-4 #[strong Indicadores del área de mantenimiento::]
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Disponibilidad de maquinaria.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Mantenibilidad de la planta.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Confiabilidad de la maquinaria.
      

      .row.justify-content-center(titulo="Cálculo e interpretación de indicadores de gestión.")
        .col-md-11.mb-4.mb-md-0
          p.mb-5 A continuación, se presentan algunos ejemplos de los indicadores de gestión: 
          .row.mb-4
            .col-lg-4.align-self-center
              figure
                img.mx-auto(src="@/assets/curso/tema2/img12.svg", alt="Imagen ambiental" style='')
            .col-lg-8
              .row.align-items-start.mb-4
                .col-auto 
                  .round--number
                    p 1
                .col
                  .tarjeta.tarjeta--azul.p-4(style='border-radius:0')
                    h4.mb-4 Indicador de gestión de un equipo de ventas.
                    p.mb-4.ms-4 Para su desarrollo se presentan los siguientes supuestos:
                    ul.lista-ul.mb-4
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Se trabajan ocho horas diarias, cinco días a la semana.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Cada vendedor tiene la capacidad para realizar doce visitas diarias, sesenta visitas semanales.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Se tiene establecido que de las doce visitas se obtenga diez ventas. Se esperan cincuenta ventas por vendedor.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Cada visita tiene un costo de $12.000.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Cada artículo vendido tiene un precio de $19.000.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 El grupo está compuesto por cinco vendedores. (Mejía, s.f., p.1) 
              
              .row.align-items-start.mb-2
                .col-auto 
                  .round--number
                    p 2
                .col
                  .tarjeta.tarjeta--azul.p-4(style='border-radius:0')
                    h4.mb-4 Factores críticos de éxito:
                    ul.lista-ul.mb-4
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Eficacia, eficiencia, efectividad, resultado y productividad (expresada en unidades vendidas por hora-vendedor y respecto del monto de las ventas frente a los costos de las visitas).
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Cumplimiento de los clientes (cartera).
            
          .row.mb-4
            .col-lg-8.align-self-center
              .row.align-items-start.mb-2
                .col-auto 
                  .round--number
                    p 3
                .col
                  .tarjeta.tarjeta--azul.p-4(style='border-radius:0')
                    h4.mb-4 Rangos
                    ul.lista-ul.mb-4
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Valor máximo: 120% del umbral.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Valor sobresaliente: 105% del umbral.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Valor satisfactorio: 100% del umbral.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Valor aceptable: 95% del umbral.
                      li 
                        i.fas.fa-chevron-right
                        p.mb-0 Valor mínimo: 90% del umbral.
            .col-lg-4.align-self-center
              figure.mb-4
                img.mx-auto(src="@/assets/curso/tema2/img13.svg", alt="Imagen ambiental" style='')
          
          
          .row.mb-4
            .col-lg-4.align-self-center
              figure.mb-2
                img.mx-auto(src="@/assets/curso/tema2/img14.svg", alt="Imagen ambiental" style='')
            .col-lg-8.align-self-center
              .row.align-items-start.mb-2
                .col-auto 
                  .round--number
                    p 4
                .col
                  .tarjeta.tarjeta--azul.p-4(style='border-radius:0')
                    h4.mb-4 Indicador de eficacia
                    p.mb-4.ms-3 Mide el cumplimiento de cada vendedor y del grupo en general, de acuerdo con la cantidad semanal programada.
                    figure
                      img.mx-auto(src="@/assets/curso/tema2/formula1.svg", alt="Eficacia" style='width:560px;')
          
          .row.mb-4
            .col-lg-8.align-self-center
              .row.align-items-start.mb-2
                .col-auto 
                  .round--number
                    p 5
                .col
                  .tarjeta.tarjeta--azul.p-4(style='border-radius:0')
                    h4.mb-4 Resultado
                    p.mb-4.ms-3 Mide el total de ventas realizadas por cada vendedor y el grupo.
                    figure
                      img.mx-auto(src="@/assets/curso/tema2/formula2.svg", alt="Resultado" style='width:560px;')
              
            .col-lg-4.align-self-center
              figure.mb-2
                img.mx-auto(src="@/assets/curso/tema2/img15.svg", alt="Imagen ambiental" style='width:260px;')


    separador
    #t_2_2.titulo-segundo
      .h2 2.2  Indicadores financieros

    .bloque-texto-a.color-primario.px-4.py-2.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.py-3
          img.mx-auto(src="@/assets/curso/tema2/img16.svg", alt="imagen ambiental" style='width:250px;')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Para aplicar el procedimiento de cálculo de los indicadores financieros es importante tener los estados financieros de dos o más períodos, lo que permitirá analizar y observar las debilidades y fortalezas de la empresa en términos monetarios y porcentuales, con el fin de diseñar e implementar acciones de mejora.


    h4.mb-4 Concepto
    p.mb-4 Los indicadores o razones financieras pertenecen a la metodología de análisis financiero, cuyo objetivo es medir y cuantificar la información para la adecuada toma de decisiones en inversión, rentabilidad, liquidez y endeudamiento.
    h4.mb-4 Clasificación
    .row.mb-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Los estados financieros reflejan la realidad económica y financiera de la empresa; sin embargo, para realizar el análisis detallado, comprensible y útil se requiere comparar dos o más períodos, por ello, la importancia de aplicar los indicadores financieros. Estos permiten verificar la situación financiera de la empresa en un período determinado, así mismo, validar las proyecciones realizadas, comparando lo presupuestado con lo ejecutado, constatando el cumplimiento de los objetivos financieros.
        p.mb-4 Los indicadores que se utilizan con mayor frecuencia son los siguientes:
        ul.lista-ul.ms-5.mb-4
          li 
            i.fas.fa-chevron-right
            p.mb-0 Razones de liquidez.
          li 
            i.fas.fa-chevron-right
            p.mb-0 Razones de actividad.
          li 
            i.fas.fa-chevron-right
            p.mb-0 Razones de endeudamiento o apalancamiento.
          li 
            i.fas.fa-chevron-right
            p.mb-0 Razones de rentabilidad.
          li 
            i.fas.fa-chevron-right
            p.mb-0 Razones de valor de mercado de la empresa.  (Martínez, s.f., p.1)
      .col-lg-4
        figure
          img.mx-auto(src="@/assets/curso/tema2/img17.svg", alt="imagen ambiental" style='width:460px;')

    

    

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

<style lang="sass" scoped></style>
