<script setup lang="ts">
useSeoMeta({
  title: 'O nás - Kacenkovo',
  description: 'Spoznajte príbeh obchodu Kacenkovo. Ponúkame kvalitné dámske a detské oblečenie v Bratislave od roku 2015.'
})

const images = [
  '/o-nas/DK4A4104.webp',
  '/o-nas/DK4A4107.webp',
  '/o-nas/DK4A4112.webp',
  '/o-nas/DK4A4114.webp',
  '/o-nas/DK4A4119.webp',
  '/o-nas/DK4A4137.webp',
  '/o-nas/DK4A4141.webp',
  '/o-nas/DK4A4153.webp',
  '/o-nas/DK4A4235.webp',
  '/o-nas/DK4A4238.webp'
]
</script>

<template>
  <div>
    <PageHeader
      title="O nás"
      variant="darkred"
    />

    <section class="content">
      <IntroText>
        Naša spoločnosť pôsobí na trhu už <strong>od roku 2015</strong>. Začínali sme s predajom <strong>moderného detského oblečenia pre deti a dojčatá</strong>, pričom dôraz sme kládli na kvalitu, pohodlie a aktuálne módne trendy.
        <br/><br/>
        Postupom času sme reagovali na potreby našich zákazníkov a <strong>rozšírili sortiment o dámske módne oblečenie</strong> a <strong>štýlové doplnky pre deti, dámy aj pánov</strong>, čím sme vytvorili komplexnejšiu ponuku pre celú rodinu.
        <br/><br/>
        Naše začiatky boli spojené s <strong>menšími priestormi v nákupnom centre NC Hron</strong>, na 1. poschodí nákupnej pasáže. <strong>Od roku 2023</strong> sme sa presťahovali do <strong>väčších a modernejších priestorov v tom istom nákupnom centre</strong>, aby sme boli bližšie k ľuďom a mohli ponúknuť širší sortiment aj viac služieb.
        <br/><br/>
        Väčšie priestory nám umožnili výrazne rozšíriť ponuku o <strong>bižutériu, kabelky, ľadvinky</strong> a <strong>kožené peňaženky pre dámy aj pánov</strong>.
        <br/><br/>
        <strong>Módny obchod Kačenkovo</strong> dnes ponúka <strong>široký výber moderného a atraktívneho detského a dámskeho oblečenia</strong> spolu s <strong>módnymi doplnkami</strong>, ktoré dopĺňajú štýl celej rodiny.
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
