<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex">
        <div class="surah">
          <h4 class="text-dark">
            {{ surah.number }}. {{ surah.name.transliteration.id }}
          </h4>
          <p class="text-secondary">
            {{ surah.name.translation.id }} | {{ surah.name.translation.en }}
          </p>
        </div>
        <p class="ms-auto text-secondary">{{ surah.name.short }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["surah"],
};
</script>

<style scoped>
.card {
  font-family: "Montserrat", sans-serif;
}
</style>
