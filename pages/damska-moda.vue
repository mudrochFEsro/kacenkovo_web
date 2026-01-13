<script setup lang="ts">
useSeoMeta({
  title: 'Dámska móda - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.'
})

const images = [
  '/damske/DK4A4152.JPG',
  '/damske/DK4A4159.JPG',
  '/damske/DK4A4183.JPG',
  '/damske/DK4A4184.JPG',
  '/damske/DK4A4186.JPG',
  '/damske/DK4A4192.JPG',
  '/damske/DK4A4195.JPG',
  '/damske/DK4A4203.JPG',
  '/damske/DK4A4212.JPG',
  '/damske/DK4A4220.JPG',
  '/damske/DK4A4222.JPG',
  '/damske/DK4A4232.JPG',
  '/damske/DK4A4234.JPG',
  '/damske/DK4A4252.JPG',
  '/damske/DK4A4262.JPG',
  '/damske/DK4A4278.JPG'
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
      <p style="text-align: center">
        Objavte dámsku módu, ktorá zvýrazní vašu osobnosť a podčiarkne váš jedinečný štýl. Naša kolekcia je navrhnutá
        pre ženy, ktoré hľadajú <strong>eleganciu</strong>, <strong>komfort</strong> a aktuálne módne trendy v dokonalej
        rovnováhe.
        <br/> <br/>
        Nadčasové strihy, kvalitné materiály a <strong>precízne spracovanie</strong> vytvárajú kúsky vhodné na
        každodenné nosenie aj
        výnimočné príležitosti. Či už preferujete jemnú eleganciu, mestský štýl alebo modernú klasiku, u nás si
        vyberiete.
        <br/> <br/>
        Dámska móda, v ktorej sa budete cítiť <strong>sebavedomo a štýlovo</strong>. Pretože skutočný štýl začína pocitom istoty.
        <br/> <br/>
      </p>
      <ImageGallery :images="images" variant="pink" />
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
p{
  max-width: 800px;
  margin: auto;
  font-size: 1.1rem
}
</style>
