<template>
  <div class="container">
    <navbar></navbar>
  <div class="row justify-content-md-center">
    <div class="col-md-4 mb-5 justify-content-center d-flex">
      <img src="../assets/Books1.svg" class="img-fluid rounded" alt="Responsive image">
    </div>
  </div>
    <surah></surah>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import surah from '@/components/Surah.vue'
export default {
  name:'home',
  components:{
    navbar:navbar,
    surah:surah
  }

  

}
</script>
