<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const isMobile = ref(false)

// Drag handling
const footerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragStartY = ref(0)
const startOffset = ref(0)
const currentOffset = ref(0)
const hasDragged = ref(false)

const TOGGLE_HEIGHT = 44 // Zväčšené o 10%

// Spoločná logika pre drag
const startDrag = (clientY: number) => {
  if (!footerRef.value) return

  isDragging.value = true
  hasDragged.value = false
  dragStartY.value = clientY

  // Vypočítaj aktuálny offset
  const footerHeight = footerRef.value.offsetHeight
  startOffset.value = isOpen.value ? 0 : footerHeight - TOGGLE_HEIGHT
  currentOffset.value = startOffset.value

  // Vypni transition počas dragu
  footerRef.value.style.transition = 'none'
}

const moveDrag = (clientY: number) => {
  if (!isDragging.value || !footerRef.value) return

  const delta = clientY - dragStartY.value

  // Ak sa pohol viac ako 5px, považuj to za drag
  if (Math.abs(delta) > 5) {
    hasDragged.value = true
  }

  // Vypočítaj nový offset (clamp medzi 0 a max)
  const footerHeight = footerRef.value.offsetHeight
  const maxOffset = footerHeight - TOGGLE_HEIGHT
  const newOffset = Math.max(0, Math.min(maxOffset, startOffset.value + delta))

  currentOffset.value = newOffset
  footerRef.value.style.transform = `translateY(${newOffset}px)`
}

const endDrag = () => {
  if (!isDragging.value || !footerRef.value) return

  const footerHeight = footerRef.value.offsetHeight
  const maxOffset = footerHeight - TOGGLE_HEIGHT
  const threshold = maxOffset / 2

  // Rozhodnutie: ak offset < polovica = otvor, inak zatvor
  if (hasDragged.value) {
    isOpen.value = currentOffset.value < threshold
  }

  // Zapni transition a resetuj transform (CSS prevezme kontrolu)
  footerRef.value.style.transition = ''
  footerRef.value.style.transform = ''

  isDragging.value = false
}

// Touch handlers
const onDragStart = (e: TouchEvent) => {
  startDrag(e.touches[0].clientY)
}

const onDragMove = (e: TouchEvent) => {
  // Prevent page scroll/pull-to-refresh keď je footer otvorený alebo sa ťahá
  e.preventDefault()
  moveDrag(e.touches[0].clientY)
}

const onDragEnd = () => {
  endDrag()
}

// Mouse handlers (desktop)
const onMouseDown = (e: MouseEvent) => {
  startDrag(e.clientY)
  // Pridaj document listeners pre mouse
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (e: MouseEvent) => {
  e.preventDefault()
  moveDrag(e.clientY)
}

const onMouseUp = () => {
  endDrag()
  // Odstráň document listeners
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

// Toggle footer (pre click na button)
const toggleFooter = () => {
  if (!hasDragged.value) {
    isOpen.value = !isOpen.value
  }
  hasDragged.value = false
}

// Resize check
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 1024
}

// Blokuj scroll stránky keď je footer otvorený (len na mobile)
watch(isOpen, (open) => {
  if (open && isMobile.value) {
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
  } else {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  // Cleanup mouse listeners
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  // Cleanup - obnov scroll
  document.body.style.overflow = ''
  document.body.style.touchAction = ''
})

// Zatvor footer pri zmene route
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
        'main-footer--open': isOpen,
        'main-footer--mobile': isMobile
      }"
      @touchstart.passive="onDragStart"
      @touchmove.prevent="onDragMove"
      @touchend.passive="onDragEnd"
      @mousedown="onMouseDown"
    >
      <!-- Toggle bar -->
      <button
        class="footer-toggle"
        @click="toggleFooter"
        :aria-expanded="isOpen"
        aria-label="Zobraziť/skryť footer"
      >
        <span class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">&#9650;</span>
        <span class="footer-toggle__text">{{ isOpen ? 'Menej info' : 'Viac info' }}</span>
        <span class="footer-toggle__arrow" :class="{ 'footer-toggle__arrow--up': isOpen }">&#9650;</span>
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
  pointer-events: none;
  // Pre iOS Safari - použijeme safe area
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

.main-footer {
  pointer-events: auto;
  background: $bg-dark;
  color: $text-white;
  display: flex;
  flex-direction: column;
  // Zatvorený stav - ukazuje len toggle bar (44px)
  transform: translateY(calc(100% - 44px));
  transition: transform 0.3s ease-out;
  // Skryje content ktorý preteká
  overflow: hidden;
  // Drag cursor
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  // Linky a buttony majú pointer
  a, button {
    cursor: pointer;
  }

  // Otvorený stav
  &--open {
    transform: translateY(0);
    overflow: visible;
  }

  // Mobile variant - zaoblené rohy
  &--mobile {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
}

.footer-toggle {
  width: 100%;
  height: 44px;
  background: $bg-dark;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
  user-select: none;
  color: $text-white;

  // Mobile - zaoblené rohy
  .main-footer--mobile & {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:focus-visible {
    outline: 2px solid $text-white;
    outline-offset: -2px;
  }

  &__text {
    font-size: 1.32rem;
    opacity: 0.7;
    font-weight: 400;
    font-family: 'Libre Baskerville', serif;
  }

  &__arrow {
    font-size: 13px;
    opacity: 0.5;
    transition: transform 0.3s ease-out;
  }

  &__arrow--up {
    transform: rotate(180deg);
  }

  &:hover {
    .footer-toggle__arrow,
    .footer-toggle__text {
      opacity: 0.9;
    }
  }
}

.footer-inner {
  // Fixná max výška - nepoužívame vh ktoré sa mení
  max-height: min(50vh, 400px);
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &--mobile {
    // Na mobile použijeme dvh s fallbackom
    max-height: none;
    overflow-y: visible;
  }
}

.footer-content {
  max-width: $wide;
  margin: 0 auto;
  padding: 0 $spacing-sm $spacing-sm $spacing-sm;
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
    transition: opacity 0.15s ease;

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
    transition: opacity 0.15s ease, transform 0.15s ease;

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
    width: fit-content;
    &:hover {
      opacity: 0.7;
    }
  }
}

.footer-bottom {
  max-width: $wide;
  margin: 0 auto;
  // Safe area pre notch/home indicator
  padding: $spacing-xs $spacing-sm;
  padding-bottom: calc($spacing-xs + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;

  @include tablet {
    font-size: 0.65rem;
  }

  .separator {
    margin: 0 0.3rem;
    opacity: 0.6;
  }

  .footer-content--mobile + & {
    margin: unset;
  }
}
</style>
