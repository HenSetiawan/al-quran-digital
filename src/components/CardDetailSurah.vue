<template>
  <div class="card mt-5 mb-5">
    <div class="card-body">
      <div class="card">
        <div class="card-body d-flex">
          <div class="number-surah">{{ verses.number.inSurah }}</div>
          <div class="audio ms-auto">
            <audio controls>
              <source :src="verses.audio.primary" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <div class="text-right p-2 text-end">
        <p>{{ verses.text.arab }}</p>
        <p>{{ verses.text.transliteration.en }}</p>
        <hr />
        <p>{{ verses.translation.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["verses"],
  setup() {},
};
</script>

<style scoped>
.card {
  font-family: "Montserrat", sans-serif;
}
.number-surah {
  text-align: center;
  background-color: #672cbc;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  line-height: 35px;
  font-weight: 800;
}
</style>
