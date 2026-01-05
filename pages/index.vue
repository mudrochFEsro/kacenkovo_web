<script setup lang="ts">
useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  ogTitle: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!',
  ogDescription: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})

useHead({
  htmlAttrs: { class: 'no-scroll' },
  bodyAttrs: { class: 'no-scroll' }
})
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__links">
        <NuxtLink to="/damska-moda" class="hero__link">
          Dámska móda
        </NuxtLink>
        <NuxtLink to="/detska-moda" class="hero__link">
          Detská móda
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  &__links {
    display: flex;
    gap: $spacing-lg;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $spacing-md $spacing-lg;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: $radius-md;
    color: $text-white;
    text-decoration: none;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
}
</style>
