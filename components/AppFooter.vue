<script setup lang="ts">
import { DrawerRoot, DrawerTrigger, DrawerPortal, DrawerContent, DrawerHandle, DrawerTitle } from 'vaul-vue'

const route = useRoute()
const isOpen = ref(false)
const isMobile = ref(false)

// Touch handling pre swipe up
const touchStartY = ref(0)
const touchStartTime = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartY.value = e.touches[0].clientY
  touchStartTime.value = Date.now()
}

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndY = e.changedTouches[0].clientY
  const deltaY = touchStartY.value - touchEndY
  const deltaTime = Date.now() - touchStartTime.value

  // Swipe up detection: minimálne 15px hore a do 400ms
  if (deltaY > 15 && deltaTime < 400 && !isOpen.value) {
    e.preventDefault()
    e.stopPropagation()
    isOpen.value = true
  }
}

// Swipe down na zatvorenie drawera - z celej plochy
const handleDrawerTouchEnd = (e: TouchEvent) => {
  const touchEndY = e.changedTouches[0].clientY
  const deltaY = touchEndY - touchStartY.value
  const deltaTime = Date.now() - touchStartTime.value

  // Swipe down detection: minimálne 50px dole a do 300ms
  if (deltaY > 50 && deltaTime < 300 && isOpen.value) {
    isOpen.value = false
  }
}

// Detekuj mobile/tablet len na klientovi
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => window.removeEventListener('resize', checkMobile))
})

// Zavri drawer pri zmene route
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <ClientOnly>
    <!-- Mobile/Tablet: Vaul Drawer -->
    <div v-if="isMobile" class="footer-mobile">
      <DrawerRoot v-model:open="isOpen" direction="bottom">
        <!-- Toggle button vždy viditeľný a sticky - celá plocha klikateľná + swipe up -->
        <DrawerTrigger as-child>
          <button
            class="footer-toggle footer-toggle--mobile"
            :aria-expanded="isOpen"
            aria-label="Zobraziť/skryť footer"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <span class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">
              &#9650;
            </span>
          </button>
        </DrawerTrigger>

        <DrawerPortal>
          <DrawerContent
            class="drawer-content"
            aria-describedby="footer-description"
            @touchstart="handleTouchStart"
            @touchend="handleDrawerTouchEnd"
          >
            <DrawerTitle class="sr-only">Footer menu</DrawerTitle>
            <DrawerHandle class="drawer-handle" />
            <div class="drawer-inner">
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
                  <h3 id="footer-description">Informácie</h3>
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
          </DrawerContent>
        </DrawerPortal>
      </DrawerRoot>
    </div>

    <!-- Desktop: Sticky footer -->
    <div v-else class="footer-wrapper" :class="{ 'footer-wrapper--open': isOpen }">
      <button
        class="footer-toggle"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Zobraziť/skryť footer"
      >
        <span class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">
          &#9650;
        </span>
      </button>

      <footer class="main-footer">
        <div class="footer-inner">
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

    <!-- Fallback pre SSR -->
    <template #fallback>
      <div class="footer-wrapper">
        <button class="footer-toggle" aria-label="Zobraziť/skryť footer">
          <span class="footer-toggle__arrow">&#9650;</span>
        </button>
      </div>
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped>
// Accessibility - skrytý title
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

// Footer wrapper - vždy sticky pre desktop
.footer-wrapper {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-top: auto;
}

// Mobile footer toggle - vždy fixed na spodku
.footer-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

// Mobile Drawer styles
.drawer-content {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $bg-dark;
  color: $text-white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  z-index: 200;
  touch-action: pan-x;
}

.drawer-handle {
  width: 48px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  margin: 12px auto;
  flex-shrink: 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.drawer-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $spacing-sm;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-height: calc(600px - 100px);
}

.footer-toggle {
  width: 100%;
  height: 30px;
  background: $bg-dark;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 201;

  // Mobile modifier pre touch handling
  &--mobile {
    touch-action: pan-x; // Povoľ horizontálny scroll, zachyť vertikálny pre swipe
  }

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
    max-height: 50vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.footer-content {
  max-width: $wide;
  margin: 0 auto;
  padding: $spacing-sm;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-sm;
  @include tablet{
    margin: unset;
  }

  .drawer-inner & {
    display: flex;
    flex-direction: column;
    padding: 0;
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

  @include tablet{
    margin: unset;
  }
  // Tablet/mobile - jednoduchší padding
  .drawer-inner & {

    max-width: none;
    padding: $spacing-sm 0 0;
  }
}
</style>
