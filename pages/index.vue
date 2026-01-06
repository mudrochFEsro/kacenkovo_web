<script setup lang="ts">

useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  ogTitle: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!',
  ogDescription: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})

useHead({
  htmlAttrs: { class: 'no-scroll' },
})
</script>

<template>
  <section class="hero" aria-label="Výber kategórie oblečenia">
    <div class="hero__content">
      <nav class="hero__links" aria-label="Kategórie oblečenia">
        <NuxtLink to="/damska-moda" class="hero__dark-link" aria-label="Prejsť do sekcie dámskej módy">
          <img class="hero__logo" src="/damska_moda_logo.svg" alt="Dámska móda - logo" loading="eager" />
        </NuxtLink>
        <NuxtLink to="/detska-moda" class="hero__light-link" aria-label="Prejsť do sekcie detskej módy">
          <img class="hero__logo" src="/detska_moda_logo.svg" alt="Detská móda - logo" loading="eager" />
        </NuxtLink>
      </nav>
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
  padding: $spacing-sm;
  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  &__links {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__light-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $spacing-sm;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-radius: $radius-md;
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, outline 0.15s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(255, 255, 255, 0.7);
      transform: translateY(-12px);
    }

    &:focus-visible {
      outline: 4px solid rgba(255, 255, 255, 0.7);
      outline-offset: 4px;
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(255, 255, 255, 0.7);
    }
  }

  &__dark-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $spacing-sm;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-radius: $radius-md;
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, outline 0.15s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-12px);
    }

    &:focus-visible {
      outline: 4px solid rgba(255, 255, 255, 0.4);
      outline-offset: 4px;
      background: rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.4);
    }
  }

  &__logo {
    width: 400px;
    height: auto;
  }
}
</style>
