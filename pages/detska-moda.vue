<script setup lang="ts">
useSeoMeta({
  title: 'Detská móda - Kacenkovo',
  ogTitle: 'Detská móda - Kacenkovo',
  description: 'Kvalitné a pohodlné detské oblečenie pre všetky vekové kategórie. Tričká, mikiny, nohavice.',
  ogDescription: 'Kvalitné a pohodlné detské oblečenie pre všetky vekové kategórie.'
})
</script>

<template>
  <div>
    <section class="page-header" aria-labelledby="page-title">
      <NuxtLink to="/" class="back-link" aria-label="Späť na hlavnú stránku">&larr; Späť na hlavnú stránku</NuxtLink>
      <h1 id="page-title">Detská móda</h1>
      <p>Pohodlné a kvalitné oblečenie pre deti</p>
    </section>

    <section class="content" aria-label="Produkty detskej módy">
      <ul class="product-grid" role="list" aria-label="Zoznam produktov">
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Detské tričko"></div>
          <h3>Detské tričko</h3>
          <p class="price">14,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Mikina s kapucňou"></div>
          <h3>Mikina s kapucňou</h3>
          <p class="price">24,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Tepláky detské"></div>
          <h3>Tepláky detské</h3>
          <p class="price">19,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Zimná bunda"></div>
          <h3>Zimná bunda</h3>
          <p class="price">49,99 €</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  padding: $spacing-lg $spacing-md;
  @include gradient-blue;
  color: $text-white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: $spacing-xs;
  }
}

.back-link {
  color: $text-white;
  text-decoration: none;
  display: inline-block;
  margin-bottom: $spacing-sm;
  opacity: 0.9;
  border-radius: 4px;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    opacity: 1;
    outline: 3px solid #fff;
    outline-offset: 4px;
  }
}

.content {
  max-width: $wide;
  margin: 0 auto;
  padding: $spacing-lg $spacing-md;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-md;
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-card {
  @include card;
  overflow: hidden;
  @include hover-lift;

  h3 {
    padding: $spacing-sm $spacing-sm $spacing-xs;
    margin: 0;
  }
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.price {
  padding: 0 $spacing-sm $spacing-sm;
  margin: 0;
  color: $accent-blue;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
