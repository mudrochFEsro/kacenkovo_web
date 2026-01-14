<template>
  <p class="intro-text">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.intro-text {
  max-width: 800px;
  margin: 0 auto $spacing-md;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  color: $text-dark;
}
</style>
