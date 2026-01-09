<script setup lang="ts">
useSeoMeta({
  title: 'Detská móda - Kacenkovo',
  description: 'Kvalitné a pohodlné detské oblečenie pre všetky vekové kategórie. Tričká, mikiny, nohavice.'
})

const products = [
  {name: 'Detské tričko', price: '14,99 €'},
  {name: 'Mikina s kapucňou', price: '24,99 €'},
  {name: 'Tepláky detské', price: '19,99 €'},
  {name: 'Zimná bunda', price: '49,99 €'}
]
</script>

<template>
  <div>
    <PageHeader
        title="Detská móda"
        variant="blue"
    />

    <section class="content"  aria-label="Produkty detskej módy">
      <p style="text-align: center">
      Objavte detskú módu, ktorá spája pohodlie, <strong>kvalitu</strong> a hravý štýl. V našej ponuke nájdete oblečenie navrhnuté s
      dôrazom na potreby detí aj očakávania rodičov.
      <br/><br/>
      <strong>Moderné a pohodlné kúsky</strong> pre každodenné nosenie aj výnimočné príležitosti, vyrobené z príjemných materiálov, ktoré
      umožňujú voľný pohyb. Veselé farby, originálne vzory a praktické strihy robia z každého outfitu radosť pre deti aj
      rodičov.
      <br/><br/>
      Vyberte si detskú módu, v ktorej sa deti cítia dobre a vyzerajú skvelo. Pretože spokojné dieťa je najlepšou
      vizitkou štýlu.
      <br/><br/>
      </p>
      <ul class="product-grid" role="list" aria-label="Zoznam produktov">
        <ProductCard
            v-for="product in products"
            :key="product.name"
            :name="product.name"
            :price="product.price"
            variant="blue"
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
</style>
