<script setup lang="ts">
useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  ogTitle: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!',
  ogDescription: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})
</script>

<template>
  <div>
    <section class="hero">
      <h1>Vitajte v Kacenkovo</h1>
      <p>Váš obľúbený obchod s kvalitným oblečením</p>
    </section>

    <section class="categories">
      <NuxtLink to="/damska-sekcia" class="category-card">
        <h2>Dámska sekcia</h2>
        <p>Elegantné a štýlové oblečenie pre ženy</p>
      </NuxtLink>

      <NuxtLink to="/detska-sekcia" class="category-card">
        <h2>Detská sekcia</h2>
        <p>Pohodlné a kvalitné oblečenie pre deti</p>
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  text-align: center;
  padding: $spacing-xl $spacing-md;
  @include gradient-primary;
  color: $text-white;

  h1 {
    font-size: 3rem;
    margin-bottom: $spacing-sm;
  }
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-md;
  padding: $spacing-lg $spacing-md;
  max-width: $wide;
  margin: 0 auto;
}

.category-card {
  display: block;
  padding: $spacing-md;
  background: $bg-light;
  border-radius: $radius-md;
  text-decoration: none;
  color: inherit;
  @include hover-lift;

  h2 {
    color: $primary;
    margin-bottom: $spacing-xs;
  }
}
</style>
