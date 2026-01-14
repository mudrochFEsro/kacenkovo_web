<template>
  <span class="trademark">
    Created by
    <a href="https://mudrochfe.net" target="_blank" rel="noopener">Mudroch.FE s.r.o.</a>
  </span>
</template>

<style scoped lang="scss">
.trademark {
  a {
    color: inherit;
    text-decoration: none;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.7;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }
}
</style>
