<script setup lang="ts">
useSeoMeta({
  title: 'Doplnky - Kacenkovo',
  description: 'Štýlové doplnky pre každú príležitosť. Kabelky, šály, šperky a viac.'
})

const images = [
  '/doplnky/DK4A4131.JPG',
  '/doplnky/DK4A4133.JPG',
  '/doplnky/DK4A4134.JPG',
  '/doplnky/DK4A4135.JPG',
  '/doplnky/DK4A4144.JPG',
  '/doplnky/DK4A4156.JPG',
  '/doplnky/DK4A4156_1.JPG',
  '/doplnky/DK4A4159.JPG',
  '/doplnky/DK4A4166.JPG',
  '/doplnky/DK4A4168.JPG',
  '/doplnky/DK4A4170.JPG',
  '/doplnky/DK4A4182.JPG',
  '/doplnky/DK4A4186.JPG',
  '/doplnky/DK4A4202.JPG',
  '/doplnky/DK4A4224.JPG',
  '/doplnky/DK4A4225.JPG',
  '/doplnky/DK4A4251.JPG',
  '/doplnky/DK4A4259.JPG',
  '/doplnky/DK4A4262.JPG',
  '/doplnky/DK4A4267.JPG',
  '/doplnky/DK4A4345.JPG',
  '/doplnky/DK4A4346.JPG',
  '/doplnky/DK4A4352.JPG',
  '/doplnky/DK4A4355.JPG'
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
      <ImageGallery :images="images" variant="purple" />
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
