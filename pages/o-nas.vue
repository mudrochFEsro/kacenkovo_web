<script setup lang="ts">
useSeoMeta({
  title: 'O nás - Kačenkovo',
  description: 'Spoznajte príbeh obchodu Kačenkovo. Ponúkame kvalitné dámske a detské oblečenie v Bratislave od roku 2015.'
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
        Naša spoločnosť pôsobí na trhu už <strong>od roku 2015</strong>. Začínali sme s&nbsp;predajom <strong>moderného detského oblečenia pre deti a&nbsp;dojčatá</strong>, pričom dôraz sme kládli na kvalitu, pohodlie a&nbsp;aktuálne módne trendy.
        <br/><br/>
        Postupom času sme reagovali na potreby našich zákazníkov a&nbsp;<strong>rozšírili sortiment o&nbsp;dámske módne oblečenie</strong> a&nbsp;<strong>štýlové doplnky pre deti, dámy aj pánov</strong>, čím sme vytvorili komplexnejšiu ponuku pre celú rodinu.
        <br/><br/>
        Naše začiatky boli spojené s&nbsp;<strong>menšími priestormi v&nbsp;nákupnom centre NC Hron</strong>, na 1.&nbsp;poschodí nákupnej pasáže. <strong>Od roku 2023</strong> sme sa presťahovali do <strong>väčších a&nbsp;modernejších priestorov v&nbsp;tom istom nákupnom centre</strong>, aby sme boli bližšie k&nbsp;ľuďom a&nbsp;mohli ponúknuť širší sortiment aj viac služieb.
        <br/><br/>
        Väčšie priestory nám umožnili výrazne rozšíriť ponuku o&nbsp;<strong>bižutériu, kabelky, ľadvinky</strong> a&nbsp;<strong>kožené peňaženky pre dámy aj pánov</strong>.
        <br/><br/>
        <strong>Módny obchod Kačenkovo</strong> dnes ponúka <strong>široký výber moderného a&nbsp;atraktívneho detského a&nbsp;dámskeho oblečenia</strong> spolu s&nbsp;<strong>módnymi doplnkami</strong>, ktoré dopĺňajú štýl celej rodiny.
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
