<template>
  <div class="container">
    <Header />
    <ListSurah />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ListSurah from "../components/ListSurah.vue";
export default {
  name: "Home",
  components: { Header, ListSurah },
};
</script>
