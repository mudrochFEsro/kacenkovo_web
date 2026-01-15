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
// ===========================================
// PEVNÉ VEĽKOSTI (bez vw)
// Desktop hodnoty, tablet = -35%
// ===========================================

// Desktop
$header-height: 140px;
$header-height-scrolled: 90px;
$logo-height: 100px;
$logo-height-scrolled: 60px;
$btn-size: 50px;
$btn-size-scrolled: 40px;
$btn-icon: 26px;
$btn-icon-scrolled: 20px;

// Tablet (-35%)
$header-height-tablet: 90px;
$header-height-scrolled-tablet: 58px;
$logo-height-tablet: 65px;
$logo-height-scrolled-tablet: 40px;
$btn-size-tablet: 34px;
$btn-size-scrolled-tablet: 28px;
$btn-icon-tablet: 18px;
$btn-icon-scrolled-tablet: 14px;

.page-header {
  position: sticky;
  top: 0;
  z-index: 50;
  overflow: hidden;
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-white;
  transition: height 0.25s ease-out;

  @include tablet {
    height: $header-height-tablet;
  }

  // Scrolled stav
  &--scrolled {
    height: $header-height-scrolled;

    @include tablet {
      height: $header-height-scrolled-tablet;
    }

    .page-header__back-btn {
      width: $btn-size-scrolled;
      height: $btn-size-scrolled;

      @include tablet {
        width: $btn-size-scrolled-tablet;
        height: $btn-size-scrolled-tablet;
      }

      svg {
        width: $btn-icon-scrolled;
        height: $btn-icon-scrolled;

        @include tablet {
          width: $btn-icon-scrolled-tablet;
          height: $btn-icon-scrolled-tablet;
        }
      }
    }

    .page-header__logo {
      height: $logo-height-scrolled;

      @include tablet {
        height: $logo-height-scrolled-tablet;
      }
    }

    .page-header__title {
      font-size: 1.4rem;

      @include tablet {
        font-size: 1.1rem;
      }
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

  // Back button
  &__back-btn {
    position: absolute;
    left: $spacing-sm;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 50%;
    width: $btn-size;
    height: $btn-size;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    transition: width 0.25s ease-out, height 0.25s ease-out, background 0.15s ease;
    z-index: 2;

    @include tablet {
      width: $btn-size-tablet;
      height: $btn-size-tablet;
    }

    svg {
      width: $btn-icon;
      height: $btn-icon;
      transition: width 0.25s ease-out, height 0.25s ease-out;

      @include tablet {
        width: $btn-icon-tablet;
        height: $btn-icon-tablet;
      }
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

  // Title
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    z-index: 1;
    transition: font-size 0.25s ease-out;

    @include tablet {
      font-size: 1.3rem;
    }
  }

  // Logo - pevná výška, vždy sa zmestí do headera
  &__logo {
    height: $logo-height;
    width: auto;
    max-width: 90%;
    object-fit: contain;
    transition: height 0.25s ease-out;
    z-index: 1;

    @include tablet {
      height: $logo-height-tablet;
    }
  }
}
</style>
