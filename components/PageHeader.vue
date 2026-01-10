<script setup lang="ts">
defineProps<{
  title?: string
  logo?: string
  variant: 'pink' | 'blue' | 'purple' | 'darkred' | 'black' | 'white'
}>()

const isScrolled = ref(false)
const router = useRouter()

let ticking = false
let expandTimeout: ReturnType<typeof setTimeout> | null = null

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY

      // Okamžite zmenši pri scrolle dole
      if (currentScrollY > 50) {
        if (expandTimeout) {
          clearTimeout(expandTimeout)
          expandTimeout = null
        }
        isScrolled.value = true
      }
      // Pri scrolle hore - čakaj 100ms pred rozbalením (debounce)
      else if (currentScrollY <= 20 && isScrolled.value) {
        if (!expandTimeout) {
          expandTimeout = setTimeout(() => {
            isScrolled.value = false
            expandTimeout = null
          }, 100)
        }
      }
      // Ak sa scroll vrátil späť dole, zruš čakajúce rozbalenie
      else if (currentScrollY > 20 && expandTimeout) {
        clearTimeout(expandTimeout)
        expandTimeout = null
      }

      ticking = false
    })
    ticking = true
  }
}

const goBack = () => {
  router.push('/')
}

onMounted(() => {
  isScrolled.value = window.scrollY > 50
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (expandTimeout) {
    clearTimeout(expandTimeout)
  }
})
</script>

<template>
  <header
    class="page-header"
    :class="[
      `page-header--${variant}`,
      { 'page-header--scrolled': isScrolled }
    ]"
  >
    <!-- Back button - vždy v DOM, len sa zobrazí/skryje -->
    <button
      class="page-header__back-btn"
      @click="goBack"
      aria-label="Späť na hlavnú stránku"
      :tabindex="isScrolled ? 0 : -1"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Compact title - vždy v DOM -->
    <span class="page-header__title-compact">{{ title }}</span>

    <!-- Full content - vždy v DOM, len sa zobrazí/skryje -->
    <div class="page-header__content">
      <NuxtLink to="/" class="back-link" :tabindex="isScrolled ? -1 : 0">
        &larr; Späť na hlavnú stránku
      </NuxtLink>
      <img v-if="logo" :src="logo" alt="" class="page-header__logo" />
      <h1 v-if="title">{{ title }}</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  position: sticky;
  top: 0;
  z-index: 50;
  overflow: hidden;
  will-change: transform;

  // Normálny stav - fixná výška pre plynulú animáciu
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $text-white;
  transition: height 0.2s ease-out;

  // Scrolled stav
  &--scrolled {
    height: 44px;

    .page-header__back-btn {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
      pointer-events: auto;
    }

    .page-header__title-compact {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }

    .page-header__content {
      opacity: 0;
      pointer-events: none;
    }
  }

  // Variant colors
  &--pink { background: $accent-pink; }
  &--darkred { background: $accent-darkred; }
  &--black { background: $accent-black; }
  &--blue { background: $accent-blue; }
  &--purple { background: $accent-purple; }

  &--white {
    background: $accent-white;
    color: $text-dark;

    .back-link,
    .page-header__back-btn {
      color: $text-dark;
    }

    .page-header__back-btn {
      background: rgba(0, 0, 0, 0.08);

      &:hover {
        background: rgba(0, 0, 0, 0.12);
      }
    }
  }

  // Back button
  &__back-btn {
    position: absolute;
    left: $spacing-sm;
    top: 50%;
    transform: translateX(-20px) translateY(-50%);
    opacity: 0;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    transition: opacity 0.15s ease, transform 0.15s ease, background 0.2s ease;
    z-index: 2;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    &:active {
      transform: translateX(0) translateY(-50%) scale(0.95);
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }

  // Compact title
  &__title-compact {
    position: absolute;
    left: 64px;
    top: 50%;
    transform: translateX(-10px) translateY(-50%);
    opacity: 0;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 80px);
    transition: opacity 0.15s ease, transform 0.15s ease;
    z-index: 1;
  }

  // Full content - vždy absolute pre plynulú animáciu
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: $spacing-xs $spacing-md;
    transition: opacity 0.2s ease-out;
    z-index: 1;

    h1 {
      font-size: 1.8rem;
      margin: 0;

      @include tablet {
        font-size: 1.4rem;
      }
    }
  }

  &__logo {
    max-height: 80px;
    width: auto;
    margin: 0 auto $spacing-xs;
  }
}

.back-link {
  @include back-link;
  font-size: 0.9rem;
}
</style>
