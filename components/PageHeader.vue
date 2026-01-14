<script setup lang="ts">
defineProps<{
  title?: string
  logo?: string
  variant: 'darkred' | 'black' | 'white'
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

    <!-- Title - presunie sa k šípke pri scrolle (len ak nie je logo) -->
    <h1 v-if="title && !logo" class="page-header__title">{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  position: sticky;
  top: 0;
  z-index: 50;
  overflow: hidden;
  will-change: height;
  height: clamp(100px, 22vw, 180px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $text-white;
  transition: height 0.25s ease-out;

  // Scrolled stav - zmenšená výška
  &--scrolled {
    height: 80px;

    .page-header__back-btn {
      width: 46px;
      height: 46px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .page-header__logo {
      height: 55px;
    }

    .page-header__title {
      font-size: 1.4rem;
    }
  }

  // Variant colors

  &--darkred { background: $accent-darkred; }
  &--black { background: $accent-black; }

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
    transform-origin: left center;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 50%;
    width: clamp(38px, 8vw, 52px);
    height: clamp(38px, 8vw, 52px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    transition: width 0.25s ease-out, height 0.25s ease-out, background 0.2s ease;
    z-index: 2;

    svg {
      width: clamp(22px, 4vw, 26px);
      height: clamp(22px, 4vw, 26px);
      transition: width 0.25s ease-out, height 0.25s ease-out;
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

  // Title - centrovaný, zmenší sa pri scrolle
  &__title {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(calc(50vw - 50%)) translateY(-50%);
    transform-origin: left center;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    z-index: 1;
    transition: font-size 0.25s ease-out;

    @include tablet {
      font-size: 1.4rem;
    }
  }


  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    width: 100%;
    height: clamp(60px, 15vw, 130px);
    transition: height 0.25s ease-out;
    z-index: 1;
  }
}
</style>
