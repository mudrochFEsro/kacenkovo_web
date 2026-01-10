<script setup lang="ts">
defineProps<{
  title?: string
  logo?: string
  variant: 'pink' | 'blue' | 'purple' | 'darkred' | 'black'
}>()
</script>

<template>
  <section class="page-header" :class="`page-header--${variant}`" :aria-labelledby="title ? 'page-title' : undefined">
    <NuxtLink to="/" class="back-link" aria-label="Späť na hlavnú stránku">&larr; Späť na hlavnú stránku</NuxtLink>
    <img v-if="logo" :src="logo" alt="" class="page-header__logo" />
    <h1 v-if="title" id="page-title">{{ title }}</h1>
  </section>
</template>

<style lang="scss" scoped>
.page-header {
  @include page-header;

  &--pink {
    background: $accent-pink;
  }

  &--darkred {
    background: $accent-darkred;
  }

  &--black {
    background: $accent-black;
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

.page-header__logo {
  max-height: 80px;
  width: auto;
  margin: 0 auto;
}
</style>
