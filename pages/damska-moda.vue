<script setup lang="ts">
useSeoMeta({
  title: 'Dámska móda - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.'
})

const products = [
  {name: 'Elegantné šaty', price: '49,99 €'},
  {name: 'Dámska blúzka', price: '29,99 €'},
  {name: 'Nohavice slim fit', price: '39,99 €'},
  {name: 'Kabát zimný', price: '89,99 €'}
]
</script>

<template>
  <div>
    <PageHeader
        title="Dámska móda"
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
      <ul class="product-grid" role="list" aria-label="Zoznam produktov">
        <ProductCard
            v-for="product in products"
            :key="product.name"
            :name="product.name"
            :price="product.price"
            variant="pink"
        />
      </ul>
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
