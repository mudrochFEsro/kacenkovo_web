<script setup lang="ts">
useSeoMeta({
  title: 'Detská móda - Kacenkovo',
  description: 'Kvalitné a pohodlné detské oblečenie pre všetky vekové kategórie. Tričká, mikiny, nohavice.'
})

const products = [
  { name: 'Detské tričko', price: '14,99 €' },
  { name: 'Mikina s kapucňou', price: '24,99 €' },
  { name: 'Tepláky detské', price: '19,99 €' },
  { name: 'Zimná bunda', price: '49,99 €' }
]
</script>

<template>
  <div>
    <PageHeader
      title="Detská móda"
      subtitle="Pohodlné a kvalitné oblečenie pre deti"
      variant="blue"
    />

    <section class="content" aria-label="Produkty detskej módy">
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
