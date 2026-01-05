<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

useSeoMeta({
  title: 'Kacenkovo - Obchod s oblečením',
  ogTitle: 'Kacenkovo - Obchod s oblečením',
  description: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!',
  ogDescription: 'Kvalitné dámske a detské oblečenie za skvelé ceny. Navštívte náš obchod!'
})

const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)

definePageMeta({
  pageTransition: {
    name: 'home',
    mode: 'out-in'
  }
})

onMounted(async () => {
  await nextTick()

  if (!videoRef.value) return

  const video = videoRef.value

  // Ak je video už načítané (cached), rovno zobraz
  if (video.readyState >= 3) {
    isVideoLoaded.value = true
    video.play().catch(() => {})
    return
  }

  video.addEventListener('loadeddata', () => {
    isVideoLoaded.value = true
  }, { once: true })

  // Reštartuj video pri navigácii späť
  video.load()
  video.play().catch(() => {})
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
      poster="https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/poster.png"
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

  &__video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: -2;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    image-rendering: high-quality;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }


  &__content {
    text-align: center;
    color: $text-white;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease-out 0.3s, transform 0.3s ease-out 0.3s;

    h1 {
      font-size: clamp(2.5rem, 8vw, 5rem);
      font-weight: 700;
      margin-bottom: $spacing-sm;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    p {
      font-size: clamp(1rem, 3vw, 1.5rem);
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }
  }

  &--loaded &__video,
  &--loaded &__overlay {
    opacity: 1;
  }

  &--loaded &__content {
    opacity: 1;
    transform: translateY(0);
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
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: $radius-md;
    color: $text-white;
    text-decoration: none;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    transition: all 0.3s ease;

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
