<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps<{
  images: string[]
  variant: 'pink' | 'blue' | 'purple' | 'darkred' | 'black' | 'white'
}>()

const visibleRef = ref(false)
const indexRef = ref(0)

const imgsRef = computed(() => props.images)

const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}
</script>

<template>
  <div class="gallery">
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
        <div class="gallery-image" :class="`gallery-image--${variant}`">
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
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
        loop
        move-disabled
      />
    </ClientOnly>
  </div>
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

  @include mobile {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-card:hover & img {
    transform: scale(1.05);
  }

  &--pink {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  }

  &--blue {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  &--purple {
    background: linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%);
  }

  &--darkred {
    background: linear-gradient(135deg, #8b0000 0%, #dc143c 100%);
  }

  &--black {
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
  }

  &--white {
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  }
}
</style>

<style lang="scss">
// Global lightbox styles
.vel-img-wrapper {
  background: rgba(0, 0, 0, 0.95) !important;
}

.vel-btns-wrapper {
  .btn__prev,
  .btn__next {
    background: rgba(255, 255, 255, 0.1) !important;
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    &:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
  }

  .btn__close {
    right: 16px !important;
    top: 36px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    border-radius: 50% !important;
    width: 44px !important;
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    &:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
  }
}
</style>
