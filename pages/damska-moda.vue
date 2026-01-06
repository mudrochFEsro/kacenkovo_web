<script setup lang="ts">
useSeoMeta({
  title: 'Dámska móda - Kacenkovo',
  ogTitle: 'Dámska móda - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.',
  ogDescription: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia.'
})
</script>

<template>
  <div>
    <section class="page-header" aria-labelledby="page-title">
      <NuxtLink to="/" class="back-link" aria-label="Späť na hlavnú stránku">&larr; Späť na hlavnú stránku</NuxtLink>
      <h1 id="page-title">Dámska móda</h1>
      <p>Elegantné a štýlové oblečenie pre ženy</p>
    </section>

    <section class="content" aria-label="Produkty dámskej módy">
      <ul class="product-grid" role="list" aria-label="Zoznam produktov">
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Elegantné šaty"></div>
          <h3>Elegantné šaty</h3>
          <p class="price">49,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Dámska blúzka"></div>
          <h3>Dámska blúzka</h3>
          <p class="price">29,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Nohavice slim fit"></div>
          <h3>Nohavice slim fit</h3>
          <p class="price">39,99 €</p>
        </li>
        <li class="product-card">
          <div class="product-image" role="img" aria-label="Obrázok produktu Kabát zimný"></div>
          <h3>Kabát zimný</h3>
          <p class="price">89,99 €</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  padding: $spacing-lg $spacing-md;
  @include gradient-pink;
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
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.price {
  padding: 0 $spacing-sm $spacing-sm;
  margin: 0;
  color: $accent-pink;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
