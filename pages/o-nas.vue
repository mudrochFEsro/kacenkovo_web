<script setup lang="ts">
useSeoMeta({
  title: 'O nás - Kacenkovo',
  description: 'Spoznajte príbeh obchodu Kacenkovo. Ponúkame kvalitné dámske a detské oblečenie v Bratislave od roku 2015.'
})
</script>

<template>
  <div>
    <PageHeader
      title="O nás"
      subtitle="Spoznajte náš príbeh"
      variant="purple"
    />

    <section class="content">
      <div class="about-text">
        <p>Naša spoločnosť je na trhu od r. 2015, začali sme s detským moderným oblečením pre všetky deti a kojencov. Postupom času sme rozširili sortiment o dámske módne oblečenie a doplnky pre deti.</p>

        <p>Začínali sme v malých priestoroch nákupného centra NC Hron na 1. poschodí nákupnej pasaže. Od r. 2023 sme sa presťahovali do väčších priestorov toho istého nákupného centra, aby sme boli bližšie k ľuďom s väčšou ponukou a službami.</p>

        <p>Väčšie priestory nám umožnili ponúknuť viac tovaru, ako je bižutéria, kabelky, ľadvinky a kožené peňaženky pre dámy a pánov.</p>

        <p>Módny obchod Kačenkovo ponúka široký výber moderného a atraktívneho detského a dámskeho oblečenia a doplnkov pre celú rodinu.</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include content-container;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: $spacing-md;
    color: $text-dark;
  }

}
</style>
