<template>
  <div>
    <ListDetailSurah :surahNumber="surahNumber" />
  </div>
</template>

<script>
import ListDetailSurah from "../components/ListDetailSurah.vue";
export default {
  props: ["surahNumber"],
  components: { ListDetailSurah },
  setup() {},
};
</script>
