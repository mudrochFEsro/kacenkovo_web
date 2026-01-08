<script setup lang="ts">
defineProps<{
  name: string
  price: string
  variant: 'pink' | 'blue' | 'purple'
}>()
</script>

<template>
  <li class="product-card">
    <div class="product-image" :class="`product-image--${variant}`" role="img" :aria-label="`Obrázok produktu ${name}`"></div>
    <h3>{{ name }}</h3>
    <p class="price" :class="`price--${variant}`">{{ price }}</p>
  </li>
</template>

<style lang="scss" scoped>
.product-card {
  @include product-card;
}

.product-image {
  @include product-image;

  &--pink {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  }

  &--blue {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  &--purple {
    background: linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%);
  }
}

.price {
  @include price;

  &--pink {
    color: $accent-pink;
  }

  &--blue {
    color: $accent-blue;
  }

  &--purple {
    color: $accent-purple;
  }
}
</style>
