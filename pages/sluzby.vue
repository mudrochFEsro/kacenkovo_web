<script setup lang="ts">
useSeoMeta({
  title: 'Služby - Kacenkovo',
  description: 'Ponúkame služby DPD Pickup - príjem a výdaj balíkov. Navštívte nás v Bratislave.'
})
</script>

<template>
  <div>
    <PageHeader
      title="Služby"
      subtitle="Čo vám ponúkame"
      variant="purple"
    />

    <section class="content">
      <div class="services-text">
        <h2>DPD Pickup Point</h2>
        <p>Sme zmluvným partnerom kuriérskej spoločnosti DPD pre príjem a výdaj balíkov pre zákazníkov, ktorí si chcú u nás vyzdvihnúť alebo poslať balík do prepravy.</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include content-container;
}

.services-text {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    margin-bottom: $spacing-sm;
    color: $accent-purple;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: $text-dark;
  }
}
</style>
