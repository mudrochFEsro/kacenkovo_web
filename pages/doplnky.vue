<script setup lang="ts">
useSeoMeta({
  title: 'Doplnky - Kacenkovo',
  description: 'Štýlové doplnky pre každú príležitosť. Kabelky, šály, šperky a viac.'
})

const products = [
  { name: 'Elegantná kabelka', price: '39,99 €' },
  { name: 'Hodvábny šál', price: '19,99 €' },
  { name: 'Náušnice set', price: '14,99 €' },
  { name: 'Kožený opasok', price: '24,99 €' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Doplnky"
      subtitle="Štýlové doplnky pre každú príležitosť"
      variant="purple"
    />

    <section class="content" aria-label="Produkty doplnkov">
      <ul class="product-grid" role="list" aria-label="Zoznam produktov">
        <ProductCard
          v-for="product in products"
          :key="product.name"
          :name="product.name"
          :price="product.price"
          variant="purple"
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
