<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const route = useRoute()
const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)

// Video je viditeľné len na homepage
const showVideo = computed(() => route.path === '/')

onMounted(() => {
  const video = videoRef.value
  if (!video) return

  video.addEventListener('canplay', () => {
    isVideoLoaded.value = true
  }, { once: true })
})
</script>

<template>
  <!-- Globálne video pozadie - hrá stále -->
  <div
    class="global-video-bg"
    :class="{
      'global-video-bg--visible': showVideo,
      'global-video-bg--loaded': isVideoLoaded
    }"
  >
    <video
      ref="videoRef"
      class="global-video-bg__video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/poster.png"
    >
      <source src="https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_4k.mp4" type="video/mp4">
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
