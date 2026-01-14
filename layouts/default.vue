<script setup lang="ts">
const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="app-layout" :class="{ 'app-layout--no-scroll': isHomepage }">
    <main id="main-content" tabindex="-1" :class="{ 'main--with-bg': !isHomepage }">
      <slot/>
    </main>

    <AppFooter/>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  min-height: 100svh; // Pre mobile browsery
  display: flex;
  flex-direction: column;

  // Homepage - bez scrollu
  &--no-scroll {
    height: 100svh;
    overflow: hidden;
  }
}

main {
  flex: 1;
  justify-content: center;
  display: flex;

  &.main--with-bg {
    background: $bg-light;
    @include tablet {
      padding-bottom: 36px;
    }
  }

  > * {
    width: 100%;
  }
}
</style>
