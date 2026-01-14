<script setup lang="ts">
useSeoMeta({
  title: 'Kde nás nájdete - Kacenkovo',
  description: 'Navštívte nás na adrese Dudvážska 5, 821 07 Bratislava. Pozrite si mapu a nájdite cestu k nám.'
})
</script>

<template>
  <div class="page-wrapper">
    <PageHeader
      title="Kde nás nájdete"
      variant="darkred"
    />

    <section class="map-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.2143142!3d48.1371468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c860488a862d5%3A0xff81eae1999b4e50!2sKa%C4%8Denkovo%20Detsk%C3%A1%20a%20d%C3%A1mska%20m%C3%B3da!5e0!3m2!1ssk!2ssk!4v1704700000000!5m2!1ssk!2ssk"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa - Kacenkovo"
        ></iframe>
      </div>

    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.map-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: $wide;
  width: 100%;
  margin: 0 auto;
  padding: $spacing-md;
}

.map-container {
  flex: 1;
  width: 100%;
  min-height: 300px;
  border-radius: $radius-md;
  overflow: hidden;
  box-shadow: $shadow-md;

  iframe {
    display: block;
  }
}

</style>
