import axios from 'axios'

const apiClient=axios.create({
    baseURL:'https://api.quran.sutanlab.id/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getSurah(){
        return apiClient.get('/surah')
    },
    getId(id){
        return apiClient.get(`/surah/${id}`)
    }
}