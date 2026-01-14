<script setup lang="ts">
useSeoMeta({
  title: 'Dámska móda - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.'
})

const images = [
  '/damske/DK4A4152.webp',
  '/damske/DK4A4159.webp',
  '/damske/DK4A4183.webp',
  '/damske/DK4A4184.webp',
  '/damske/DK4A4186.webp',
  '/damske/DK4A4192.webp',
  '/damske/DK4A4195.webp',
  '/damske/DK4A4203.webp',
  '/damske/DK4A4212.webp',
  '/damske/DK4A4220.webp',
  '/damske/DK4A4222.webp',
  '/damske/DK4A4232.webp',
  '/damske/DK4A4234.webp',
  '/damske/DK4A4252.webp',
  '/damske/DK4A4262.webp',
  '/damske/DK4A4278.webp'
]
</script>

<template>
  <div>
    <PageHeader
        title="Dámska móda"
        logo="/damska_moda_logo.svg"
        variant="black"
    />

    <section class="content" aria-label="Produkty dámskej módy">
      <IntroText>
        Objavte dámsku módu, ktorá zvýrazní vašu osobnosť a podčiarkne váš <strong>jedinečný štýl</strong>. Naša kolekcia je navrhnutá
        pre ženy, ktoré hľadajú <strong>eleganciu</strong>, <strong>komfort</strong> a <strong>aktuálne módne trendy</strong> v dokonalej
        rovnováhe.
        <br/> <br/>
        <strong>Nadčasové strihy</strong>, <strong>kvalitné materiály</strong> a <strong>precízne spracovanie</strong> vytvárajú kúsky vhodné na
        každodenné nosenie aj výnimočné príležitosti. Či už preferujete jemnú eleganciu, mestský štýl alebo modernú klasiku, u nás si
        vyberiete.
        <br/> <br/>
        Dámska móda, v ktorej sa budete cítiť <strong>sebavedomo a štýlovo</strong>. Pretože <strong>skutočný štýl začína pocitom istoty</strong>.
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
