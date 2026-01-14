<script setup lang="ts">
useSeoMeta({
  title: 'Detská móda - Kacenkovo',
  description: 'Kvalitné a pohodlné detské oblečenie pre všetky vekové kategórie. Tričká, mikiny, nohavice.'
})

const images = [
  '/detske/DK4A4147.webp',
  '/detske/DK4A4148.webp',
  '/detske/DK4A4149.webp',
  '/detske/DK4A4150.webp',
  '/detske/DK4A4173.webp',
  '/detske/DK4A4175.webp',
  '/detske/DK4A4200.webp',
  '/detske/DK4A4214.webp',
  '/detske/DK4A4225.webp',
  '/detske/DK4A4226.webp',
  '/detske/DK4A4252.webp',
  '/detske/DK4A4257.webp',
  '/detske/DK4A4260.webp',
  '/detske/DK4A4279.webp'
]
</script>

<template>
  <div>
    <PageHeader
        title="Detská móda"
        logo="/detska_moda_logo.svg"
        variant="white"
    />

    <section class="content"  aria-label="Produkty detskej módy">
      <IntroText>
        Objavte detskú módu, ktorá spája <strong>pohodlie</strong>, <strong>kvalitu</strong> a <strong>hravý štýl</strong>. V našej ponuke nájdete oblečenie navrhnuté s
        dôrazom na potreby detí aj očakávania rodičov.
        <br/><br/>
        <strong>Moderné a pohodlné kúsky</strong> pre každodenné nosenie aj výnimočné príležitosti, vyrobené z <strong>príjemných materiálov</strong>, ktoré
        umožňujú voľný pohyb. <strong>Veselé farby</strong>, <strong>originálne vzory</strong> a <strong>praktické strihy</strong> robia z každého outfitu radosť pre deti aj
        rodičov.
        <br/><br/>
        Vyberte si detskú módu, v ktorej sa deti cítia dobre a vyzerajú skvelo. Pretože <strong>spokojné dieťa</strong> je najlepšou
        vizitkou štýlu.
      </IntroText>
      <ImageGallery :images="images" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include content-container;
}
</style>
