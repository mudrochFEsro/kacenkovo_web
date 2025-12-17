<template>
  <div class="app-layout">
    <header class="main-header">
      <nav class="nav-container">
        <NuxtLink to="/" class="logo">Kacenkovo</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/">Domov</NuxtLink>
          <NuxtLink to="/damska-sekcia">Dámska sekcia</NuxtLink>
          <NuxtLink to="/detska-sekcia">Detská sekcia</NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="main-footer">
      <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené.</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-header {
  background: $bg-white;
  box-shadow: $shadow-sm;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: $wide;
  margin: 0 auto;
  padding: $spacing-sm $spacing-md;
  @include flex-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: $primary;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: $spacing-md;

  a {
    color: $text-dark;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover,
    &.router-link-active {
      color: $primary;
    }
  }
}

main {
  flex: 1;
}

.main-footer {
  background: $bg-dark;
  color: $text-white;
  text-align: center;
  padding: $spacing-md;
  margin-top: auto;
}
</style>
