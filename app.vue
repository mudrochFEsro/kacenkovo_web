<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

useHead({
  link: [
    { rel: 'preload', href: '/poster.webp', as: 'image', type: 'image/webp', fetchpriority: 'high' },
    { rel: 'preload', href: '/detska_moda_logo.svg', as: 'image', type: 'image/svg+xml' },
    { rel: 'preload', href: '/damska_moda_logo.svg', as: 'image', type: 'image/svg+xml' }
  ]
})

const route = useRoute()
const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)
const shouldLoadVideo = ref(false)

const showVideo = computed(() => route.path === '/')

const isMobile = ref(false)

const videoUrl = computed(() => {
  if (isMobile.value) {
    return 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_1080p.mp4'
  }
  return 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_4k.mp4'
})

const resumeVideo = () => {
  if (videoRef.value && showVideo.value && document.visibilityState === 'visible') {
    videoRef.value.play().catch(() => {})
  }
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  if (showVideo.value) {
    shouldLoadVideo.value = true
  }

  document.addEventListener('visibilitychange', resumeVideo)
  window.addEventListener('focus', resumeVideo)
  window.addEventListener('pageshow', resumeVideo)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', resumeVideo)
  window.removeEventListener('focus', resumeVideo)
  window.removeEventListener('pageshow', resumeVideo)
})

watch(showVideo, (isHomepage) => {
  if (isHomepage && !shouldLoadVideo.value) {
    shouldLoadVideo.value = true
  }
})

const onVideoCanPlay = () => {
  isVideoLoaded.value = true
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
      preload="metadata"
      poster="/poster.webp"
      aria-hidden="true"
      tabindex="-1"
      @canplay="onVideoCanPlay"
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
  width: 100%;
  height: 100vh;
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
  }

  &--loaded &__video {
    opacity: 1;
  }
}
</style>
