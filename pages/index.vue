<script setup lang="ts">
useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})
</script>

<template>
  <section class="hero" aria-label="Výber kategórie oblečenia">
    <div class="hero__content">
      <nav class="hero__links" aria-label="Kategórie oblečenia">
        <NuxtLink to="/damska-moda" class="hero__light-link" aria-label="Prejsť do sekcie dámskej módy">
          Damska moda
<!--          <img class="hero__logo" src="/damska_moda_logo.svg" alt="Dámska móda - logo" loading="eager"/>-->
        </NuxtLink>
        <NuxtLink to="/detska-moda" class="hero__light-link" aria-label="Prejsť do sekcie detskej módy">
          Detska moda
<!--          <img class="hero__logo" src="/detska_moda_logo.svg" alt="Detská móda - logo" loading="eager"/>-->
        </NuxtLink>
        <NuxtLink to="/doplnky" class="hero__light-link" aria-label="Prejsť do sekcie doplnky">
          Doplnky
<!--          <img class="hero__logo" src="/doplnky_logo.svg" alt="Doplnky - logo" loading="eager"/>-->
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-sm;
  padding-top: calc($spacing-sm + env(safe-area-inset-top, 0px));
  padding-bottom: calc($spacing-sm + env(safe-area-inset-bottom, 0px));

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  &__links {
    display: flex;
    gap: $spacing-sm;
    justify-content: center;
    flex-direction: column;

    @include tablet {
      flex-wrap: nowrap;
      flex-direction: column;

    }
  }

  &__light-link {
    font-size: 24px;
    font-weight: 900;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    background: darkred;
    backdrop-filter: blur(20px);
    //border: 4px solid black;
      border-radius: $radius-md;
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, outline 0.15s ease;
    will-change: transform;
    @include tablet {
      padding: $spacing-xs;
    }

    &:hover {
      //background: rgba(255, 255, 255, 0.8);
      //border-color: rgba(255, 255, 255, 0.8);
      transform: translateY(-6px);
    }

    &:focus-visible {
      outline: 4px solid rgba(255, 255, 255, 0.8);
      outline-offset: 4px;
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(255, 255, 255, 0.8);
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
    will-change: transform;
    @include tablet {
      padding: $spacing-xs;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-6px);
    }

    &:focus-visible {
      outline: 4px solid rgba(255, 255, 255, 0.4);
      outline-offset: 4px;
      background: rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.4);
    }
  }

  &__logo {
    width: 100%;
    max-width: 300px;
    height: 85px;

    @include tablet {
      max-width: 250px;
      height: 70px;

    }
  }
}
</style>
