<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  variant: 'pink' | 'blue' | 'purple'
}>()
</script>

<template>
  <section class="page-header" :class="`page-header--${variant}`" aria-labelledby="page-title">
    <NuxtLink to="/" class="back-link" aria-label="Späť na hlavnú stránku">&larr; Späť na hlavnú stránku</NuxtLink>
    <h1 id="page-title">{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<style lang="scss" scoped>
.page-header {
  @include page-header;

  &--pink {
    background: $accent-pink;
  }

  &--blue {
    background: $accent-blue;
  }

  &--purple {
    background: $accent-purple;
  }
}

.back-link {
  @include back-link;
}
</style>
