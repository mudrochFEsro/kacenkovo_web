<script setup lang="ts">
useSeoMeta({
  title: 'Služby - Kačenkovo',
  description: 'Ponúkame služby DPD Pickup - príjem a výdaj balíkov. Navštívte nás v Bratislave.'
})
</script>

<template>
  <div>
    <PageHeader
        title="Služby"
        variant="darkred"
    />

    <section class="content">
      <h2 class="section-title">DPD Pickup Point</h2>
      <IntroText>
        Sme <strong>zmluvným partnerom kuriérskej spoločnosti DPD</strong>, vďaka čomu poskytujeme zákazníkom <strong>komfortné a&nbsp;spoľahlivé služby</strong> pri príjme aj výdaji balíkov. U&nbsp;nás si môžete jednoducho <strong>vyzdvihnúť zásielky objednané prostredníctvom DPD</strong>, ako aj <strong>odoslať balík do prepravy</strong> rýchlo a&nbsp;bez zbytočných komplikácií.
        <br/><br/>
        Táto služba je určená pre zákazníkov, ktorí uprednostňujú <strong>osobný kontakt, flexibilitu a&nbsp;istotu profesionálneho spracovania zásielok</strong>. Radi vám pomôžeme s&nbsp;<strong>odovzdaním balíka</strong>, jeho <strong>prijatím do systému DPD</strong> a&nbsp;poskytneme <strong>základné informácie k&nbsp;preprave</strong>.
        <br/><br/>
        Využite <strong>pohodlné riešenie pre zasielanie a&nbsp;vyzdvihovanie balíkov na jednom mieste</strong> – <strong>spoľahlivo, rýchlo a&nbsp;s&nbsp;podporou overenej kuriérskej spoločnosti DPD</strong>.
      </IntroText>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  @include content-container;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: $spacing-sm;
  color: $accent-darkred;
  text-align: center;
}
</style>
