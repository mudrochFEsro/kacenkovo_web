<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const route = useRoute()

useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  ogTitle: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!',
  ogDescription: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})

const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)

const startVideo = () => {
  const video = videoRef.value
  if (!video) return

  if (video.readyState >= 3) {
    isVideoLoaded.value = true
    if (video.paused) {
      video.play().catch(() => {})
    }
  } else {
    video.addEventListener('canplay', () => {
      isVideoLoaded.value = true
      video.play().catch(() => {})
    }, { once: true })
  }
}

onMounted(startVideo)

// Keď sa vrátiš na túto stránku
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    setTimeout(startVideo, 50)
  }
})
</script>

<template>
  <section class="hero" :class="{ 'hero--loaded': isVideoLoaded }">
    <video
      ref="videoRef"
      class="hero__video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/poster.png"
    >
      <source src="https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_4k.mp4" type="video/mp4">
    </video>
    <div class="hero__content">
      <div class="hero__links">
        <NuxtLink to="/damska-moda" class="hero__link">
          Dámska móda
        </NuxtLink>
        <NuxtLink to="/detska-moda" class="hero__link">
          Detská móda
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  // Poster ako fallback pozadie - vždy viditeľné
  background: #000 url('/poster.png') no-repeat center / cover;

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.15s ease-out;
  }

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: $text-white;

  }

  &--loaded &__video {
    opacity: 1;
  }

  &__links {
    display: flex;
    gap: $spacing-lg;
    margin-top: $spacing-lg;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $spacing-md $spacing-lg;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: $radius-md;
    color: $text-white;
    text-decoration: none;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    transition: all 0.15s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-md;
  padding: $spacing-lg $spacing-md;
  max-width: $wide;
  margin: 0 auto;
}

.category-card {
  display: block;
  padding: $spacing-md;
  background: $bg-light;
  border-radius: $radius-md;
  text-decoration: none;
  color: inherit;
  @include hover-lift;

  h2 {
    color: $primary;
    margin-bottom: $spacing-xs;
  }
}
</style>
