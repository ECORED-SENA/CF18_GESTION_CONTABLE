<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .h3 Producción Audiovisual
    
    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Infografía Animada
    
    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Video Motion

    
    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Motion + Presentador

    
    separador
    #t_2_4.titulo-segundo
      .h2 2.4 Animación 2D

    
    separador
    #t_2_5.titulo-segundo
      .h2 2.5 Video interactivo

    
    separador
    #t_2_6.titulo-segundo
      .h2 2.6 Infografías

    

    

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
