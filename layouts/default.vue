<template>
  <div class="app-layout">
    <a href="#main-content" class="skip-link">Preskočiť na hlavný obsah</a>

    <main id="main-content" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  z-index: 9999;
  text-decoration: none;
  border-radius: 0 0 8px 8px;
  font-weight: 600;

  &:focus {
    top: 0;
    outline: 3px solid #fff;
    outline-offset: 2px;
  }
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
