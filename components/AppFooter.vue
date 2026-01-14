<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const isMobile = ref(false)

// Drag handling - funguje pre mobile aj desktop
const footerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const hasDragged = ref(false)
const dragStartY = ref(0)
const dragOffset = ref(0)
const footerHeight = ref(0)

// Výška toggle baru - 36px pre mobile, 30px pre desktop
const toggleHeight = computed(() => isMobile.value ? 36 : 30)

const onDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  hasDragged.value = false
  dragStartY.value = 'touches' in e ? e.touches[0].clientY : e.clientY

  if (footerRef.value) {
    footerHeight.value = footerRef.value.offsetHeight
  }

  dragOffset.value = isOpen.value ? 0 : footerHeight.value - toggleHeight.value

  // Nastav počiatočnú pozíciu aby footer neskočil pri začiatku ťahania
  if (footerRef.value) {
    footerRef.value.style.transform = `translateY(${dragOffset.value}px)`
    footerRef.value.style.transition = 'none'
  }

  document.addEventListener('mousemove', onDragMove)
  document.addEventListener('mouseup', onDragEnd)
  document.addEventListener('touchmove', onDragMove, { passive: false })
  document.addEventListener('touchend', onDragEnd)
}

const onDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  // Prevent scroll on mobile while dragging
  if ('touches' in e) {
    e.preventDefault()
  }

  const currentY = 'touches' in e ? e.touches[0].clientY : e.clientY
  const deltaY = currentY - dragStartY.value

  if (Math.abs(deltaY) > 5) {
    hasDragged.value = true
  }

  let newOffset = (isOpen.value ? 0 : footerHeight.value - toggleHeight.value) + deltaY
  newOffset = Math.max(0, Math.min(footerHeight.value - toggleHeight.value, newOffset))
  dragOffset.value = newOffset

  if (footerRef.value) {
    footerRef.value.style.transform = `translateY(${newOffset}px)`
    footerRef.value.style.transition = 'none'
  }
}

const onDragEnd = () => {
  if (!isDragging.value) return

  document.removeEventListener('mousemove', onDragMove)
  document.removeEventListener('mouseup', onDragEnd)
  document.removeEventListener('touchmove', onDragMove)
  document.removeEventListener('touchend', onDragEnd)

  if (hasDragged.value) {
    const threshold = (footerHeight.value - toggleHeight.value) / 2
    isOpen.value = dragOffset.value < threshold
  }

  if (footerRef.value) {
    footerRef.value.style.transform = ''
    footerRef.value.style.transition = ''
  }

  isDragging.value = false
}

const onToggleClick = () => {
  if (!hasDragged.value) {
    isOpen.value = !isOpen.value
  }
  hasDragged.value = false
}

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 1024
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => window.removeEventListener('resize', checkMobile))
})

watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="footer-wrapper">
    <footer
      ref="footerRef"
      class="main-footer"
      :class="{
        'main-footer--open': isOpen && !isDragging,
        'main-footer--dragging': isDragging,
        'main-footer--mobile': isMobile
      }"
      @mousedown="isMobile && onDragStart($event)"
      @touchstart.passive="isMobile && onDragStart($event)"
    >
        <!-- Toggle bar -->
        <button
          class="footer-toggle"
          :class="{ 'footer-toggle--mobile': isMobile }"
          @mousedown="onDragStart"
          @touchstart.passive="onDragStart"
          @click="onToggleClick"
          :aria-expanded="isOpen"
          aria-label="Zobraziť/skryť footer"
        >
          <ClientOnly>
            <!-- Mobile: handle bar -->
            <span v-if="isMobile" class="footer-toggle__handle"></span>
            <!-- Desktop: arrow -->
            <span v-else class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">
              &#9650;
            </span>
            <template #fallback>
              <span class="footer-toggle__arrow">&#9650;</span>
            </template>
          </ClientOnly>
        </button>

        <!-- Footer content -->
        <div class="footer-inner" :class="{ 'footer-inner--mobile': isMobile }">
          <div class="footer-content" :class="{ 'footer-content--mobile': isMobile }">
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
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none; // Prepúšťa kliknutia na obsah pod footrom
}

.main-footer {
  pointer-events: auto; // Footer samotný reaguje na kliknutia
  background: $bg-dark;
  color: $text-white;
  display: flex;
  flex-direction: column;
  transform: translateY(calc(100% - 30px));
  transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);

  // Otvorený stav
  &--open {
    transform: translateY(0) !important;
  }

  // Počas dragovania
  &--dragging {
    transition: none !important;
  }

  // Mobile variant - zatvorený
  &--mobile {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    transform: translateY(calc(100% - 36px));
  }
}

.footer-toggle {
  width: 100%;
  height: 30px;
  background: $bg-dark;
  border: none;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &--mobile {
    height: 36px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:focus-visible {
    outline: 2px solid $text-white;
    outline-offset: -2px;
  }

  &__handle {
    width: 48px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }

  &__arrow {
    color: $text-white;
    font-size: 10px;
    opacity: 0.5;
    transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.2s ease;
    transform: rotate(0deg);
  }

  &__arrow--up {
    transform: rotate(180deg);
  }

  &:hover &__arrow {
    opacity: 0.8;
  }
}

.footer-inner {
  max-height: 50vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &--mobile {
    max-height: none;
    overflow-y: visible;
  }
}

.footer-content {
  max-width: $wide;
  margin: 0 auto;
  padding: $spacing-sm;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-sm;

  &--mobile {
    display: flex;
    flex-direction: column;
    margin: unset;
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

  .footer-content--mobile + & {
    margin: unset;
  }
}
</style>
