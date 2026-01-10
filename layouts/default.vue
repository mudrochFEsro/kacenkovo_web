<script setup lang="ts">
const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="app-layout">
    <main id="main-content" tabindex="-1" :class="{ 'main--with-bg': !isHomepage }">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  justify-content: center;
  display: flex;
  padding-bottom: 28px; // Priestor pre footer toggle na mobile

  > * {
    width: 100%;
  }

  &.main--with-bg {
    background: $bg-light;
  }
}
</style>
