<template>
  <Nav />
  <div class="container mt-2">
    <div class="row" v-if="!isLoading">
      <div class="col-lg-12 name mt-2 mb-2">
        <h1>[{{ surah.name.transliteration.id }}] {{ surah.name.long }}</h1>
        <p class="text-secondary">
          {{ surah.name.translation.id }} | {{ surah.name.translation.en }}
        </p>
      </div>
      <div class="col-lg-12" v-for="verses in surah.verses" :key="verses">
        <CardDetailSurah :verses="verses" />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-lg-12 loader">
        <img src="../assets/img/loader.svg" alt="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import CardDetailSurah from "../components/CardDetailSurah.vue";
import Nav from "../components/Nav.vue";
import { ref, onMounted } from "vue";
import surahService from "../services/SurahService";
export default {
  components: { Nav, CardDetailSurah },
  props: ["surahNumber"],
  setup(props) {
    const surah = ref([]);
    const isLoading = ref(true);

    onMounted(async () => {
      const responseApi = await surahService.getSurahByNumber(
        props.surahNumber
      );
      surah.value = responseApi.data;
      isLoading.value = false;
    });
    return { surah, isLoading };
  },
};
</script>

<style scoped>
.name {
  font-family: "Montserrat", sans-serif;
  color: #672cbc;
  text-align: center;
}
.loader {
  text-align: center;
  margin: auto;
}
</style>
