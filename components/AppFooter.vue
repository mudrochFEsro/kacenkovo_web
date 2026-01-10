<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const footerMaxHeight = ref('600px')

const toggleFooter = () => {
  isOpen.value = !isOpen.value
}

// Zavri footer pri zmene route
watch(() => route.path, () => {
  isOpen.value = false
})

const TOGGLE_HEIGHT = 28

const updateMaxHeight = () => {
  // Dynamická výška podľa viewportu - prispôsobí sa pri resize
  const vh = window.innerHeight
  if (window.innerWidth <= 768) {
    // Na mobile/tablet: celá obrazovka mínus toggle button
    footerMaxHeight.value = `${vh - TOGGLE_HEIGHT}px`
  } else {
    // Na desktope max 50% viewportu, minimálne 300px
    footerMaxHeight.value = `${Math.max(300, vh * 0.5)}px`
  }
}

onMounted(() => {
  updateMaxHeight()
  window.addEventListener('resize', updateMaxHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMaxHeight)
})
</script>

<template>
  <div class="footer-wrapper" :class="{ 'footer-wrapper--open': isOpen }">
    <!-- Toggle bar - always visible -->
    <button
      class="footer-toggle"
      @click="toggleFooter"
      :aria-expanded="isOpen"
      aria-label="Zobraziť/skryť footer"
    >
      <span class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">
        &#9650;
      </span>
    </button>

    <!-- Footer content - slides up -->
    <footer class="main-footer">
      <div class="footer-inner" :style="{ '--footer-max-height': footerMaxHeight }">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Kontakt</h3>
            <address>
              <a href="https://share.google/FNTrvu6s87OejToxv" target="_blank" rel="noopener">Dudvážska 5106/5</a>
              <p>821 07 Bratislava</p>
              <p>Tel. č.: <a href="tel:+421918519094">+421 918 519 094</a></p>
              <p>E-mail: <a href="mailto:kacenkovo.nchron@gmail.com">kacenkovo.nchron@gmail.com</a></p>
            </address>
          </div>
          <div class="footer-section">
            <h3>Otváracie hodiny</h3>
            <p>Po-Pi: 09:00 - 19:00 hod.</p>
            <p>So: 09:00 - 17:00 hod.</p>
            <p>Ne: zatvorené</p>
          </div>
          <div class="footer-section">
            <h3>Informácie</h3>
            <nav class="footer-nav" aria-label="Footer navigácia">
              <NuxtLink to="/o-nas">O nás</NuxtLink>
              <NuxtLink to="/sluzby">Služby</NuxtLink>
              <NuxtLink to="/mapa">Kde nás nájdete</NuxtLink>
              <a href="/ochrana-osobnych-udajov.pdf" target="_blank" rel="noopener">Ochrana osobných údajov</a>
            </nav>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-top: auto;
}

.footer-toggle {
  width: 100%;
  height: 28px;
  background: $bg-dark;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid $text-white;
    outline-offset: -2px;
  }

  &__arrow {
    color: $text-white;
    font-size: 10px;
    opacity: 0.5;
    transition: transform 0.35s ease, opacity 0.2s ease;
    transform: rotate(0deg);
  }

  &__arrow--up {
    transform: rotate(180deg);
  }

  &:hover &__arrow {
    opacity: 0.8;
  }
}

.main-footer {
  background: $bg-dark;
  color: $text-white;
  overflow: hidden;
}

.footer-inner {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .footer-wrapper--open & {
    max-height: var(--footer-max-height, 600px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.footer-content {
  max-width: $wide;
  margin: 0 auto;
  padding: 0 $spacing-sm $spacing-sm $spacing-sm;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-sm;

  @include tablet {
    padding: $spacing-sm ;
    gap: $spacing-sm;
  }
}

.footer-section {
  h3 {
    font-size: 1.1rem;
    margin-bottom: $spacing-xs;
    color: $text-white;
  }

  address {
    font-style: normal;
  }

  p {
    margin: 2px 0;
    opacity: 0.9;
    font-size: 1rem;
  }

  a {
    color: $text-white;
    text-decoration: none;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.7;
    }

    &:focus-visible {
      outline: 2px solid $text-white;
      outline-offset: 2px;
    }
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;

  a {
    opacity: 0.9;
    font-size: 1rem;

    &:hover {
      opacity: 0.7;
    }
  }
}

.footer-bottom {
  max-width: $wide;
  margin: 0 auto;
  padding: $spacing-xs $spacing-sm calc($spacing-xs + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;
}
</style>
