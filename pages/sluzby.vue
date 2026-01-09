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
        variant="darkred"
    />

    <section class="content">
      <div class="services-text">
        <h2>DPD Pickup Point</h2>
        <p style="text-align: center">
          Sme <strong>zmluvným partnerom kuriérskej spoločnosti DPD</strong>, vďaka čomu poskytujeme zákazníkom <strong>komfortné a spoľahlivé služby</strong> pri príjme aj výdaji balíkov. U nás si môžete jednoducho <strong>vyzdvihnúť zásielky objednané prostredníctvom DPD</strong>, ako aj <strong>odoslať balík do prepravy</strong> rýchlo a bez zbytočných komplikácií.
          <br/><br/>
          Táto služba je určená pre zákazníkov, ktorí uprednostňujú <strong>osobný kontakt, flexibilitu a istotu profesionálneho spracovania zásielok</strong>. Radi vám pomôžeme s <strong>odovzdaním balíka</strong>, jeho <strong>prijatím do systému DPD</strong> a poskytneme <strong>základné informácie k preprave</strong>.
          <br/><br/>
          Využite <strong>pohodlné riešenie pre zasielanie a vyzdvihovanie balíkov na jednom mieste</strong> – <strong>spoľahlivo, rýchlo a s podporou overenej kuriérskej spoločnosti DPD</strong>.
        </p>

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
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: $spacing-sm;
    color: $accent-darkred;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: $text-dark;
  }
}
</style>
