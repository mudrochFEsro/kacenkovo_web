<script setup lang="ts">
// Homepage: pomalší fade-in pre buttony
definePageMeta({
  pageTransition: {
    name: 'home',
    mode: 'out-in'
  }
})

useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})
</script>

<template>
  <section class="hero" aria-label="Výber kategórie oblečenia">
    <div class="hero__content">
      <nav class="hero__links" aria-label="Kategórie oblečenia">
        <NuxtLink to="/damska-moda" class="hero__link" aria-label="Prejsť do sekcie dámskej módy">
          Dámska móda
        </NuxtLink>
        <NuxtLink to="/detska-moda" class="hero__link" aria-label="Prejsť do sekcie detskej módy">
          Detská móda
        </NuxtLink>
        <NuxtLink to="/doplnky" class="hero__link" aria-label="Prejsť do sekcie doplnky">
          Doplnky
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc($spacing-sm + env(safe-area-inset-top, 0px)) $spacing-sm calc($spacing-sm + env(safe-area-inset-bottom, 0px));

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
  }

  &__link {
    font-size: 24px;
    font-weight: 900;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    background: $accent-darkred;
    border-radius: $radius-md;
    transition: background 0.25s ease, transform 0.25s ease, outline 0.15s ease;
    will-change: transform;

    @include tablet {
      padding: $spacing-xs;
    }

    &:hover {
      transform: translateY(-6px);
    }

    &:focus-visible {
      outline: 4px solid rgba(255, 255, 255, 0.8);
      outline-offset: 4px;
    }
  }
}
</style>
