<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

const route = useRoute()
const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)
const shouldLoadVideo = ref(false)

// Video je viditeľné len na homepage
const showVideo = computed(() => route.path === '/')

// Detekcia mobile zariadenia pre menšie video
const isMobile = ref(false)

// Video URL - Full HD pre mobile (1080p), 4K pre desktop
const videoUrl = computed(() => {
  if (isMobile.value) {
    return 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_1080p.mp4'
  }
  return 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_4k.mp4'
})

onMounted(() => {
  // Detekcia mobile na základe šírky obrazovky
  isMobile.value = window.innerWidth < 768

  // Lazy load - načítaj video len ak sme na homepage
  if (showVideo.value) {
    shouldLoadVideo.value = true
  }
})

// Lazy loading - načítaj video keď sa naviguje na homepage
watch(showVideo, (isHomepage) => {
  if (isHomepage && !shouldLoadVideo.value) {
    shouldLoadVideo.value = true
  }
})

// Handler pre načítanie videa
const onVideoCanPlay = () => {
  isVideoLoaded.value = true
}
</script>

<template>
  <!-- Globálne video pozadie - lazy loaded -->
  <div
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
      poster="/poster.png"
      @canplay="onVideoCanPlay"
    >
      <source :src="videoUrl" type="video/mp4">
    </video>
  </div>

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
  background: #000 url('/poster.png') no-repeat center / cover;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;

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
