<script setup lang="ts">
import { DrawerRoot, DrawerTrigger, DrawerPortal, DrawerContent, DrawerTitle } from 'vaul-vue'

const route = useRoute()
const isOpen = ref(false)
const isMobile = ref(false)

// Touch handling pre swipe-up otvorenie
const touchStartY = ref(0)
const isDragging = ref(false)

const onTouchStart = (e: TouchEvent) => {
  touchStartY.value = e.touches[0].clientY
  isDragging.value = false
}

const onTouchMove = (e: TouchEvent) => {
  const deltaY = touchStartY.value - e.touches[0].clientY
  // Ak swipe hore viac ako 30px, otvor drawer
  if (deltaY > 30 && !isOpen.value) {
    isDragging.value = true
    isOpen.value = true
  }
}

const onTouchEnd = () => {
  isDragging.value = false
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
        <!-- Toggle button vždy viditeľný a sticky - swipe up alebo klik -->
        <DrawerTrigger as-child>
          <button
            class="footer-toggle footer-toggle--mobile"
            :aria-expanded="isOpen"
            aria-label="Zobraziť/skryť footer"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
          >
            <span class="footer-toggle__handle"></span>
          </button>
        </DrawerTrigger>

        <DrawerPortal>
          <DrawerContent
            class="drawer-content"
            aria-describedby="footer-description"
          >
            <DrawerTitle class="sr-only">Footer menu</DrawerTitle>
            <!-- Handle - viditeľný indikátor -->
            <div class="drawer-handle-area">
              <span class="drawer-handle"></span>
            </div>
            <!-- Obsah - bez scrollu, celá plocha draggable -->
            <div class="footer-content">
              <div class="footer-section">
                <h3>Kontakt</h3>
                <address>
                  <a href="https://share.google/FNTrvu6s87OejToxv" target="_blank" rel="noopener">Dudvážska 5106/5</a>
                  <p>821 07 Bratislava</p>
                  <p>Tel. č.: <a href="tel:+421918519094">+421 918 519 094</a></p>
                  <p>E-mail: <a href="mailto:kacenkovo.nchron@gmail.com">kacenkovo.nchron@gmail.com</a></p>
                  <div class="social-links">
                    <a href="https://www.facebook.com/share/1AQ923RVUF/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/kacenkovo_?igsh=YmV6MXI2c3R2Y2tt" target="_blank" rel="noopener" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
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
              <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené. <span class="separator">|</span> <Trademark /></p>
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
                <div class="social-links">
                  <a href="https://www.facebook.com/share/1AQ923RVUF/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/kacenkovo_?igsh=YmV6MXI2c3R2Y2tt" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
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
            <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené. <span class="separator">|</span> <Trademark /></p>
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
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  z-index: 200;
  // Povoliť vaul-vue natívny drag z celej plochy
  touch-action: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

// Viditeľná handle area na vrchu
.drawer-handle-area {
  display: flex;
  justify-content: center;
  padding: 12px 0;
  flex-shrink: 0;
}

.drawer-handle {
  width: 48px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
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

  // Mobile modifier - väčšia výška, zaoblené rohy, handle namiesto šípky
  &--mobile {
    height: 36px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:focus-visible {
    outline: 2px solid $text-white;
    outline-offset: -2px;
  }

  // Handle štýl pre mobile
  &__handle {
    width: 48px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }

  // Arrow štýl pre desktop
  &__arrow {
    color: $text-white;
    font-size: 10px;
    opacity: 0.5;
    transition: transform 0.55s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.2s ease;
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
  transition: max-height 0.55s cubic-bezier(0.33, 1, 0.68, 1);

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

  @include tablet {
    margin: unset;
  }

  // V drawer kontexte - stĺpcový layout
  .drawer-content & {
    display: flex;
    flex-direction: column;
    padding: $spacing-sm;
    padding-top: 0;
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

.social-links {
  display: flex;
  gap: $spacing-sm;
  margin-top: $spacing-xs;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-white;
    opacity: 0.9;
    transition: opacity $transition-fast, transform $transition-fast;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  svg {
    width: 28px;
    height: 28px;
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

  .separator {
    margin: 0 0.3rem;
    opacity: 0.6;
  }

  @include tablet {
    margin: unset;
  }

  .drawer-content & {
    max-width: none;
    margin: 0;
    padding: $spacing-xs $spacing-sm calc($spacing-xs + env(safe-area-inset-bottom, 0px));
  }
}

</style>
