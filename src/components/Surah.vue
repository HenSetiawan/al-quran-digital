<template>
  <div class="row">
      <div class="col-md-4 mb-4" v-for="surah in surahs" :key="surah.number">
          <router-link :to="{name:'surah',params:{number:surah.number}}" class="surah-details">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex">
                    <div class="surahNumber">
                        <p>{{surah.number}}.</p>
                    </div>
                    <div class="meta">
                        <p>{{surah.name.transliteration.id}}</p>
                        <small>{{surah.name.translation.id}} | {{surah.name.translation.en}}</small>
                    </div>
                    <div class="surah-arab ml-auto">
                        <p>{{surah.name.short}}</p>
                    </div>
                    </div>
                </div>
            </div>
          </router-link>
      </div>
  </div>
</template>

<script>
import SurahService from '@/Service/SurahService.js'
export default {
    name:'surah',
    data(){
    return {
      surahs:null
    }
  },
    created(){
    SurahService.getSurah()
      .then(result=>{
        this.surahs=result.data.data
      })
      .catch(err=>{
        console.log(err)
      })
  }
}
</script>

<style scoped>
    a{
        color: #000;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
    }
    a:hover {
    text-decoration: none;
    color: #000;
}
    .d-flex .meta{
       margin-left: 5px;
    }
</style>