<template>
<div v-if="surahIsready">
 <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div class="container">
    <router-link to="/" class="navbar-brand">
      <svg stroke="currentColor" 
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z">
        </path>
      </svg>
      {{detailsSurah.name.transliteration.id}}
    </router-link>
  </div>
</nav>
 <!-- Navbar end -->

<div class="container">
  <div class="row">
 <!-- Content title -->
    <div class="col-md-12 mt-5">
      <div class="heading text-center">
        <h1 class="headtitle">[{{detailsSurah.name.transliteration.id}}] {{detailsSurah.name.long}}</h1>
        <p class="subtitle">{{detailsSurah.name.translation.id}} | {{detailsSurah.name.translation.en}}</p>
      </div>
    </div>
  <!-- Content title end-->

    <div class="col-md-12 mt-5" v-for="(ayah,index) in detailsSurah.verses" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="numberAyah text-center">
                  {{index+1}}
                </div>
                <div class="action ml-auto col-sm-4 col-sm-offset-4 audio">
                    <audio controls>
                    <source :src="ayah.audio.primary" type="audio/mpeg">
                    Your browser does not support the audio element.
                    </audio>
                </div>
              </div>
            </div>
          </div>

          <div class="d-block text-right mt-2 content-ayah">
            <p>{{ayah.text.arab}}</p>
            <p>{{ayah.text.transliteration.en}}</p>
            <hr>
            <p>{{ayah.translation.id}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</div>

<!-- loader image -->
<div class="row justify-content-md-center mb-5" v-else>
    <div class="col-md-4 justify-content-center d-flex">
      <img src="../assets/loader.svg" class="img-fluid rounded" alt="Responsive image">
    </div>
</div>
</template>

<script>
import SurahService from '@/Service/SurahService.js'
export default {
    name:'detailsSurah',
    props:{
        number:{
            
        }
    },
    data(){
      return {
        detailsSurah:null,
        surahIsready:false,
      }
    },
    created(){
      SurahService.getId(this.number)
      .then(result=>{
        console.log(result)
        this.detailsSurah=result.data.data;
        this.surahIsready=true;
      })
    }

}
</script>


<style scoped>
 .container p{
    color: #b6b6c6;
  }
  .container h1{
    color: #672cbc;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  .numberAyah{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
    font-weight: bold;
    line-height: 30px;
    background-color: #672cbc;;
  }

  .action svg{
    color: #672cbc;
    margin-left: 20px;
    cursor:pointer;
    width: 30px;
    height: 30px;
  }

  .content-ayah p{
    color: #000;
    font-family: 'Montserrat', sans-serif;

  }


  .audio{
    width: 80%;
  }

  audio{
    width: 100%;
    max-width: 600px;
    color: #672cbc;
  }

</style>