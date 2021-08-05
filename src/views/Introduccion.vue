<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    


    .row.justify-content-center
      .col-lg-9.align-self-center
        p.mb-4 El presente componente resalta la importancia de realizar el análisis de los estados financieros, haciendo uso de la aplicación de técnicas como el análisis vertical y horizontal, indicadores financieros y de gestión, posibilitando la generación e implementación de estrategias con valor agregado para las organizaciones en contextos reales.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[strong Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y su elaboración la realizó la autora del presente componente.
      .col-lg-3
        figure.mb-5
          img.mx-auto(src="@/assets/curso/intro.svg", alt="imagen ambiental" style='width:240px;')



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
