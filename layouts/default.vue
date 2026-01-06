<template>
  <div class="app-layout">
    <a href="#main-content" class="skip-link">Preskočiť na hlavný obsah</a>

<!--    <header class="main-header">-->
<!--      <nav class="nav-container">-->
<!--        <NuxtLink to="/" class="logo">Kacenkovo</NuxtLink>-->
<!--        <div class="nav-links">-->
<!--          <NuxtLink to="/">Domov</NuxtLink>-->
<!--          <NuxtLink to="/damska-moda">Dámska móda</NuxtLink>-->
<!--          <NuxtLink to="/detska-moda">Detská móda</NuxtLink>-->
<!--        </div>-->
<!--      </nav>-->
<!--    </header>-->

    <main id="main-content" tabindex="-1">
      <slot />
    </main>

<!--    <footer class="main-footer">-->
<!--      <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené.</p>-->
<!--    </footer>-->
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
