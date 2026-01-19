<script setup lang="ts">
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

const props = defineProps<{
  images: string[]
}>()

const galleryRef = ref<HTMLElement | null>(null)

// Cache pre rozmery obrázkov
const imageDimensions = ref<Map<string, { width: number; height: number }>>(new Map())
const dimensionsLoaded = ref(false)

// Pred-načítať rozmery jedného obrázka
const loadImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    if (imageDimensions.value.has(src)) {
      resolve(imageDimensions.value.get(src)!)
      return
    }

    const img = new Image()
    img.onload = () => {
      const dims = { width: img.naturalWidth, height: img.naturalHeight }
      imageDimensions.value.set(src, dims)
      resolve(dims)
    }
    img.onerror = () => {
      resolve({ width: 1200, height: 800 })
    }
    img.src = src
  })
}

// Pred-načítať rozmery VŠETKÝCH obrázkov
const preloadAllDimensions = async () => {
  if (dimensionsLoaded.value) return

  await Promise.all(props.images.map(src => loadImageDimensions(src)))
  dimensionsLoaded.value = true
}

const openLightbox = async (index: number) => {
  // Načítať všetky rozmery pred otvorením
  await preloadAllDimensions()

  const dataSource = props.images.map((src) => {
    const dims = imageDimensions.value.get(src) || { width: 1200, height: 800 }
    return {
      src,
      width: dims.width,
      height: dims.height,
    }
  })

  const pswp = new PhotoSwipe({
    dataSource,
    index,
    bgOpacity: 1,
    showHideAnimationType: 'fade',
    pswpModule: PhotoSwipe,
    wheelToZoom: true,
    pinchToClose: false,
    closeOnVerticalDrag: true,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
    spacing: 0.1,
    arrowPrevSVG: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowNextSVG: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>',
  })

  pswp.init()
}

// Intersection Observer pre fade efekt
onMounted(() => {
  if (!galleryRef.value) return

  const cards = galleryRef.value.querySelectorAll('.gallery-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gallery-card--visible')
        } else {
          entry.target.classList.remove('gallery-card--visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '50px 0px'
    }
  )

  cards.forEach((card) => observer.observe(card))

  onUnmounted(() => {
    cards.forEach((card) => observer.unobserve(card))
  })
})
</script>

<template>
  <section ref="galleryRef" class="gallery">
    <ul class="gallery-grid" role="list" aria-label="Galéria obrázkov">
      <li
        v-for="(image, index) in images"
        :key="image"
        class="gallery-card"
        @click="openLightbox(index)"
        @keydown.enter="openLightbox(index)"
        tabindex="0"
        role="button"
        :aria-label="`Otvoriť obrázok ${index + 1}`"
      >
        <div class="gallery-image">
          <NuxtImg
            :src="image"
            :alt="`Obrázok ${index + 1}`"
            loading="lazy"
            preset="gallery"
            sizes="xs:320px sm:400px"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.gallery-grid {
  @include product-grid;
}

.gallery-card {
  @include card;
  overflow: hidden;
  cursor: pointer;

  // Fade efekt pri scrollovaní
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease;

  &--visible {
    opacity: 1;
    transform: translateY(0);

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-lg;
    }
  }

  &:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 2px;
  }
}

.gallery-image {
  height: 250px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);

  @include mobile {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.15s ease;
  }

  .gallery-card:hover & img {
    transform: scale(1.05);
  }
}
</style>

<style lang="scss">
.pswp {
  --pswp-bg: #000;
  --pswp-icon-color: #fff;
  --pswp-icon-color-secondary: rgba(255, 255, 255, 0.6);
  z-index: 99999;
}

.pswp__button--close {
  margin-top: env(safe-area-inset-top, 0);
}

// Šípky - vždy viditeľné aj na mobile
.pswp__button--arrow {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  background: rgba(255, 255, 255, 0.15) !important;
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  align-items: center !important;
  justify-content: center !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  margin-top: 0 !important;

  @media (max-width: 768px) {
    width: 40px !important;
    height: 40px !important;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25) !important;
  }

  // SVG ikona
  svg {
    width: 20px !important;
    height: 20px !important;
    stroke: #fff !important;
    position: static !important;
    margin: 0 !important;

    @media (max-width: 768px) {
      width: 16px !important;
      height: 16px !important;
    }
  }

  // Skryť default ikonu
  .pswp__icn {
    display: none !important;
  }
}

.pswp__button--arrow--prev {
  left: 10px !important;
  right: auto !important;
}

.pswp__button--arrow--next {
  right: 10px !important;
  left: auto !important;
}

// Zaistiť že top bar neskryje šípky
.pswp__top-bar {
  z-index: 10;
}
</style>
