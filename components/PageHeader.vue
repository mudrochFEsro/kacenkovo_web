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
    <!-- Back button - vždy viditeľný -->
    <button
      class="page-header__back-btn"
      @click="goBack"
      aria-label="Späť na hlavnú stránku"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Logo - skryje sa pri scrolle -->
    <img v-if="logo" :src="logo" alt="" class="page-header__logo" />

    <!-- Title - presunie sa k šípke pri scrolle -->
    <h1 v-if="title" class="page-header__title">{{ title }}</h1>
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
    height: 60px;

    .page-header__back-btn {
      width: 32px;
      height: 32px;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    .page-header__logo {
      opacity: 0;
      pointer-events: none;
    }

    .page-header__title {
      left: 60px;
      transform: translateY(-50%);
      font-size: 1rem;
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

    .page-header__back-btn {
      color: $text-dark;
      background: rgba(0, 0, 0, 0.08);

      &:hover {
        background: rgba(0, 0, 0, 0.12);
      }
    }
  }

  // Back button - vždy viditeľný, zmenší sa pri scrolle
  &__back-btn {
    position: absolute;
    left: $spacing-sm;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    transition: width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease;
    z-index: 2;

    svg {
      width: 26px;
      height: 26px;
      transition: width 0.2s ease-out, height 0.2s ease-out;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }

  // Title - animuje sa zo stredu doľava
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 140px);
    transition: left 0.2s ease-out, transform 0.2s ease-out, font-size 0.2s ease-out;
    z-index: 1;

    @include tablet {
      font-size: 1.4rem;
    }
  }

  // Logo - fade out pri scrolle
  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 30px));
    max-height: 60px;
    width: auto;
    transition: opacity 0.2s ease-out;
    z-index: 1;
  }
}
</style>
