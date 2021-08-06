<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Otras técnicas de análisis financiero

    separador
    #t_3_1.titulo-segundo
      .h2 3.1Valor Económico Agregado (EVA)
    







    
    separador
    #t_3_2.titulo-segundo
      .h2 3.2 Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)
    









    separador
    #t_3_3|.titulo-segundo
      .h2 3.3  Punto de equilibrio
    





    separador
    #t_3_3.titulo-segundo
      .h2 3.3 Generación de informes




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
