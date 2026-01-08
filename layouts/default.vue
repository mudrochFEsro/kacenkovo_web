<template>
  <div class="app-layout">
    <main id="main-content" tabindex="-1">
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
}
</style>
