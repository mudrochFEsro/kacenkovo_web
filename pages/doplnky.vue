<script setup lang="ts">
useSeoMeta({
  title: 'Doplnky - Kacenkovo',
  description: 'Štýlové doplnky pre každú príležitosť. Kabelky, šály, šperky a viac.'
})

const images = [
  '/doplnky/DK4A4131.webp',
  '/doplnky/DK4A4133.webp',
  '/doplnky/DK4A4134.webp',
  '/doplnky/DK4A4135.webp',
  '/doplnky/DK4A4144.webp',
  '/doplnky/DK4A4156.webp',
  '/doplnky/DK4A4156_1.webp',
  '/doplnky/DK4A4159.webp',
  '/doplnky/DK4A4166.webp',
  '/doplnky/DK4A4168.webp',
  '/doplnky/DK4A4170.webp',
  '/doplnky/DK4A4182.webp',
  '/doplnky/DK4A4186.webp',
  '/doplnky/DK4A4202.webp',
  '/doplnky/DK4A4224.webp',
  '/doplnky/DK4A4225.webp',
  '/doplnky/DK4A4251.webp',
  '/doplnky/DK4A4259.webp',
  '/doplnky/DK4A4262.webp',
  '/doplnky/DK4A4267.webp',
  '/doplnky/DK4A4345.webp',
  '/doplnky/DK4A4346.webp',
  '/doplnky/DK4A4352.webp',
  '/doplnky/DK4A4355.webp'
]
</script>

<template>
  <div>
    <PageHeader
      title="Doplnky"
      logo="/doplnky_logo.svg"
      variant="white"
    />

    <section class="content" aria-label="Produkty doplnkov">
      <p style="text-align: center">Objavte svet štýlových detailov, ktoré dotvárajú každý outfit. Naša kolekcia módnych doplnkov prináša eleganciu, kvalitu a nadčasový dizajn pre každú príležitosť.
        <br/><br/>
        <strong>Kabelky</strong> , ktoré zaujmú na prvý pohľad – praktické, moderné a navrhnuté tak, aby podčiarkli váš osobný štýl.
        <br/><strong>Peňaženky</strong>, v ktorých sa spája funkčnosť s vkusným prevedením – ideálne na každý deň.
        <br/>
        <strong>Bižutéria</strong>, ktorá dodá šmrnc a originalitu, či už preferujete jemnú eleganciu alebo výrazné akcenty.
        <br/><br/>
        Doprajte si módne doplnky, ktoré hovoria za vás. Štýl začína detailmi.
        <br/><br/>
      </p>
      <ImageGallery :images="images" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include content-container;
}

.product-grid {
  @include product-grid;
}
</style>
