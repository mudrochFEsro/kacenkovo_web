<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'home',
    mode: 'out-in'
  }
})

useSeoMeta({
  title: 'Kvalitné dámske a detské oblečenie',
  description: 'Navštívte Kačenkovo v Bratislave. Ponúkame kvalitné dámske a detské oblečenie, kabelky, šperky a módne doplnky za skvelé ceny. Dudvážska 5, Bratislava.'
})

// Zdieľaný stav pre popup
const showAkciaPopup = useState('showAkciaPopup', () => false)

const openAkcie = () => {
  showAkciaPopup.value = true
}
</script>

<template>
  <section class="hero" aria-label="Výber kategórie oblečenia">
    <div class="hero__content">
      <h1 class="sr-only">Kačenkovo - Obchod s oblečením v Bratislave</h1>
      <p class="sr-only">
        Vitajte v našom obchode s kvalitným dámskym a detským oblečením.
        Ponúkame široký výber módnych kúskov, kabeliek, šperkov a doplnkov za dostupné ceny.
        Navštívte nás na Dudvážskej 5 v Bratislave.
        Sme rodinný obchod s viac ako 10-ročnou tradíciou. Zameriavame sa na kvalitné a cenovo dostupné oblečenie
        pre ženy a deti. V našej ponuke nájdete šaty, sukne, blúzky, nohavice, bundy, svetre, ale aj módne doplnky
        ako kabelky, peňaženky a bižutériu. Všetko vyberáme s láskou a dôrazom na kvalitu materiálov.
      </p>
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
        <a href="#" class="hero__link" aria-label="Zobraziť aktuálnu akciu" @click.prevent="openAkcie">
          Akcie
        </a>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Screen reader only - skryté vizuálne, ale dostupné pre SEO a screen readers
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

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
    font-family: inherit;
    font-size: 24px;
    font-weight: 900;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    background: $accent-darkred;
    border: none;
    border-radius: $radius-md;
    cursor: pointer;
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
