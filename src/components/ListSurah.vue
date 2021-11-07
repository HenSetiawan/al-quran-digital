<template>
  <div class="row" v-if="!isLoading">
    <div class="col-lg-4 mt-3 mb-3" v-for="surah in listSurah" :key="surah.id">
      <router-link
        :to="{ name: 'Surah', params: { surahNumber: surah.number } }"
      >
        <CardSurah :surah="surah" />
      </router-link>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-lg-12 loader">
      <img src="../assets/img/loader.svg" alt="loading" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import CardSurah from "../components/CardSurah.vue";
import SurahService from "../services/SurahService";
export default {
  name: "ListSurah",
  components: { CardSurah },
  setup() {
    const listSurah = ref([]);
    const isLoading = ref(true);

    onMounted(async () => {
      const response = await SurahService.getAllSurah();
      listSurah.value = response.data;
      isLoading.value = false;
    });

    return { listSurah, isLoading };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.loader {
  text-align: center;
  margin: auto;
}
</style>
