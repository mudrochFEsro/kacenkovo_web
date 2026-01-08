<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const config = useRuntimeConfig()

useHead({
  link: [
    { rel: 'preload', href: '/poster.webp', as: 'image', type: 'image/webp', fetchpriority: 'high' },
    { rel: 'preload', href: '/detska_moda_logo.svg', as: 'image', type: 'image/svg+xml' },
    { rel: 'preload', href: '/damska_moda_logo.svg', as: 'image', type: 'image/svg+xml' },
    { rel: 'preload', href: '/doplnky_logo.svg', as: 'image', type: 'image/svg+xml' }
  ]
})

const route = useRoute()
const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)
const shouldLoadVideo = ref(false)

const showVideo = computed(() => route.path === '/')

const isMobile = ref(false)

const videoUrl = computed(() => {
  return isMobile.value ? config.public.videoUrlMobile : config.public.videoUrl4k
})

const resumeVideo = () => {
  if (videoRef.value && showVideo.value && document.visibilityState === 'visible') {
    videoRef.value.play().catch(() => {})
  }
}

// Fix pre iOS viewport height
const setVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  // Nastaviť --vh premennú pre iOS
  setVh()

  if (showVideo.value) {
    shouldLoadVideo.value = true
  }

  document.addEventListener('visibilitychange', resumeVideo)
  window.addEventListener('focus', resumeVideo)
  window.addEventListener('pageshow', resumeVideo)

  // iOS fallback - spustiť video pri prvej interakcii
  document.addEventListener('touchstart', tryPlayOnInteraction, { passive: true })
  document.addEventListener('click', tryPlayOnInteraction)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', resumeVideo)
  window.removeEventListener('focus', resumeVideo)
  window.removeEventListener('pageshow', resumeVideo)
  document.removeEventListener('touchstart', tryPlayOnInteraction)
  document.removeEventListener('click', tryPlayOnInteraction)
})

watch(showVideo, (isHomepage) => {
  if (isHomepage && !shouldLoadVideo.value) {
    shouldLoadVideo.value = true
  }
})

const onVideoCanPlay = () => {
  isVideoLoaded.value = true
  // iOS Safari potrebuje explicitné spustenie po načítaní
  if (videoRef.value) {
    videoRef.value.play().catch(() => {})
  }
}

// Pokus o spustenie videa po loadeddata (pre iOS)
const onVideoLoadedData = () => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {})
  }
}

// iOS niekedy potrebuje user interaction pre spustenie videa
const tryPlayOnInteraction = () => {
  if (videoRef.value && videoRef.value.paused) {
    videoRef.value.play().catch(() => {})
  }
  // Odstrániť listener po prvom pokuse
  document.removeEventListener('touchstart', tryPlayOnInteraction)
  document.removeEventListener('click', tryPlayOnInteraction)
}
</script>

<template>
  <section
    class="global-video-bg"
    :class="{
      'global-video-bg--visible': showVideo,
      'global-video-bg--loaded': isVideoLoaded
    }"
  >
    <video
      v-if="shouldLoadVideo"
      ref="videoRef"
      class="global-video-bg__video"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      disablePictureInPicture
      :disableRemotePlayback="true"
      preload="auto"
      poster="/poster.webp"
      aria-hidden="true"
      tabindex="-1"
      @canplay="onVideoCanPlay"
      @loadeddata="onVideoLoadedData"
    >
      <source :src="videoUrl" type="video/mp4">
    </video>
  </section>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.global-video-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #000 url('/poster.webp') no-repeat center / cover;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;

  &--visible {
    opacity: 1;
    visibility: visible;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    // Skryť natívne video controls a play button (iOS Safari)
    &::-webkit-media-controls {
      display: none !important;
    }
    &::-webkit-media-controls-panel {
      display: none !important;
    }
    &::-webkit-media-controls-play-button {
      display: none !important;
    }
    &::-webkit-media-controls-start-playback-button {
      display: none !important;
      -webkit-appearance: none;
    }
    &::-webkit-media-controls-overlay-play-button {
      display: none !important;
    }
  }

  &--loaded &__video {
    opacity: 1;
  }
}
</style>
