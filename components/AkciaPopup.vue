<script setup lang="ts">
const props = defineProps<{
  autoShow?: boolean
}>()

// Zdieľaný stav pre manuálne otvorenie z iných komponentov
const showAkciaPopup = useState('showAkciaPopup', () => false)

const isVisible = ref(false)
let autoCloseTimer: ReturnType<typeof setTimeout> | null = null

const closePopup = () => {
  isVisible.value = false
  showAkciaPopup.value = false
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = null
  }
}

// Watch pre manuálne otvorenie cez useState
watch(showAkciaPopup, (newVal) => {
  if (newVal) {
    isVisible.value = true
  }
})

onMounted(() => {
  // Ak autoShow nie je true, nerob nič
  if (!props.autoShow) return

  // Len raz za session
  const wasShown = sessionStorage.getItem('akciaPopupShown')

  if (!wasShown) {
    isVisible.value = true
    sessionStorage.setItem('akciaPopupShown', 'true')

    // Automaticky zavrieť po 10 sekundách
    autoCloseTimer = setTimeout(() => {
      isVisible.value = false
    }, 10000)
  }
})

onUnmounted(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="isVisible" class="akcia-popup" @click.self="closePopup">
        <div class="akcia-popup__content">
          <button
            class="akcia-popup__close"
            @click="closePopup"
            aria-label="Zavrieť popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src="/akcie/akcia_baner.webp"
            alt="Aktuálna akcia"
            class="akcia-popup__image"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.akcia-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  padding: $spacing-sm;

  &__content {
    position: relative;
    max-width: 90vw;
    max-height: 85vh;
    border-radius: $radius-md;
    overflow: hidden;
    box-shadow: $shadow-lg;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, transform 0.2s ease;
    z-index: 1;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: scale(1.1);
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
    }
  }

  &__image {
    display: block;
    max-width: 100%;
    max-height: 85vh;
    width: auto;
    height: auto;
    object-fit: contain;
  }
}

// Transition animácie
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;

  .akcia-popup__content {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;

  .akcia-popup__content {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
