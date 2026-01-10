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
