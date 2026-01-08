<script setup lang="ts">
</script>
<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Kontakt</h3>
        <address>
          <a href="https://share.google/FNTrvu6s87OejToxv" target="_blank" rel="noopener">Dudvážska 5106/5</a>
          <p>821 07 Bratislava</p>
          <p>Tel. č.: <a href="tel:+421918519094">+421 918 519 094</a></p>
          <p>E-mail: <a href="mailto:kacenkovo.nchron@gmail.com">kacenkovo.nchron@gmail.com</a></p>
        </address>
      </div>
      <div class="footer-section">
        <h3>Otváracie hodiny</h3>
        <p>Po-Pi: 09:00 - 19:00 hod.</p>
        <p>So: 09:00 - 17:00 hod.</p>
        <p>Ne: zatvorené</p>
      </div>
      <div class="footer-section">
        <h3>Informácie</h3>
        <nav class="footer-nav" aria-label="Footer navigácia">
          <NuxtLink to="/o-nas">O nás</NuxtLink>
          <NuxtLink to="/sluzby">Služby</NuxtLink>
          <NuxtLink to="/mapa">Kde nás nájdete</NuxtLink>
          <a href="/ochrana-osobnych-udajov.pdf" target="_blank" rel="noopener">Ochrana osobných údajov</a>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Kacenkovo. Všetky práva vyhradené.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  background: $bg-dark;
  color: $text-white;
  padding: $spacing-lg $spacing-md $spacing-md;
  padding-bottom: calc($spacing-md + env(safe-area-inset-bottom, 0px));
  margin-top: auto;

  @include mobile {
    min-height: 100lvh;
    padding-top: calc($spacing-lg + env(safe-area-inset-top, 0px));
  }
}

.footer-content {
  max-width: $wide;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-md;
}

.footer-section {
  h3 {
    font-size: 1.2rem;
    margin-bottom: $spacing-sm;
    color: $text-white;
  }

  address {
    font-style: normal;
  }

  p {
    margin: $spacing-xs 0;
    opacity: 0.9;
  }

  a {
    color: $text-white;
    text-decoration: none;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.7;
    }

    &:focus-visible {
      outline: 2px solid $text-white;
      outline-offset: 2px;
    }
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  a {
    opacity: 0.9;

    &:hover {
      opacity: 0.7;
    }
  }
}

.footer-bottom {
  max-width: $wide;
  margin: 0 auto;
  padding-top: $spacing-md;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;
}
</style>
