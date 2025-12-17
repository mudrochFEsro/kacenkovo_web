<script setup lang="ts">
useSeoMeta({
  title: 'Dámska sekcia - Kacenkovo',
  ogTitle: 'Dámska sekcia - Kacenkovo',
  description: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia. Šaty, blúzky, nohavice a viac.',
  ogDescription: 'Objavte našu kolekciu elegantného a štýlového dámskeho oblečenia.'
})
</script>

<template>
  <div>
    <section class="page-header">
      <NuxtLink to="/" class="back-link">&larr; Späť na hlavnú stránku</NuxtLink>
      <h1>Dámska sekcia</h1>
      <p>Elegantné a štýlové oblečenie pre ženy</p>
    </section>

    <section class="content">
      <div class="product-grid">
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Elegantné šaty</h3>
          <p class="price">49,99 €</p>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Dámska blúzka</h3>
          <p class="price">29,99 €</p>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Nohavice slim fit</h3>
          <p class="price">39,99 €</p>
        </div>
        <div class="product-card">
          <div class="product-image"></div>
          <h3>Kabát zimný</h3>
          <p class="price">89,99 €</p>
        </div>
      </div>
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

  &:hover {
    opacity: 1;
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
