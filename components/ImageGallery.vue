<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'

defineProps<{
  images: string[]
}>()

const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}
</script>

<template>
  <section class="gallery">
    <ul class="gallery-grid" role="list" aria-label="Galéria obrázkov">
      <li
        v-for="(image, index) in images"
        :key="image"
        class="gallery-card"
        @click="showImg(index)"
        @keydown.enter="showImg(index)"
        tabindex="0"
        role="button"
        :aria-label="`Otvoriť obrázok ${index + 1}`"
      >
        <div class="gallery-image">
          <NuxtImg
            :src="image"
            :alt="`Obrázok ${index + 1}`"
            loading="lazy"
            width="400"
            height="300"
            fit="cover"
          />
        </div>
      </li>
    </ul>

    <ClientOnly>
      <VueEasyLightbox
        :visible="visibleRef"
        :imgs="images"
        :index="indexRef"
        :min-zoom="1"
        :zoom-disabled="false"
        :rotate-disabled="true"
        @hide="onHide"
        loop
        move-disabled
      />
    </ClientOnly>
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
  @include hover-lift;

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
.vel-modal {
  padding: 0 !important;
  margin: 0 !important;
}

.vel-img-wrapper {
  background: rgba(0, 0, 0, 1) !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  .vel-img {
    max-width: 100% !important;
    max-height: 100% !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
  }
}

.vel-toolbar {
  display: none !important;
}

.vel-btns-wrapper {
  .btn__prev,
  .btn__next {
    background: rgba(255, 255, 255, 0.15) !important;
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 10 !important;

    @media (max-width: 768px) {
      width: 40px !important;
      height: 40px !important;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.25) !important;
    }
  }

  .btn__prev {
    left: 10px !important;
  }

  .btn__next {
    right: 10px !important;
  }

  .btn__close {
    right: 16px !important;
    top: 34px !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border-radius: 50% !important;
    width: 44px !important;
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 10 !important;

    @media (max-width: 768px) {
      top: calc(env(safe-area-inset-top, 16px) + 36px) !important;
      right: 16px !important;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.25) !important;
    }
  }
}
</style>
