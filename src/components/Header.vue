<template>
  <div class="header mt-3">
    <h1>Al-Quran Digital</h1>
    <p class="text-secondary">
      Read and Learn AlQuran Everyday with Alquran Digital
    </p>
    <img class="img-fluid" src="../assets/img/Books1.svg" alt="book" />
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");
.header {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

.header > h1 {
  color: #6f42c1;
  font-weight: 800;
}
.header > img {
  width: 300px;
  height: 300px;
}
</style>
