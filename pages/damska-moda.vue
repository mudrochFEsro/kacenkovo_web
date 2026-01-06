<script setup lang="ts">
useSeoMeta({
  title: 'Dámska móda - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.'
})

const products = [
  { name: 'Elegantné šaty', price: '49,99 €' },
  { name: 'Dámska blúzka', price: '29,99 €' },
  { name: 'Nohavice slim fit', price: '39,99 €' },
  { name: 'Kabát zimný', price: '89,99 €' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Dámska móda"
      subtitle="Elegantné a štýlové oblečenie pre ženy"
      variant="pink"
    />

    <section class="content" aria-label="Produkty dámskej módy">
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
</style>
