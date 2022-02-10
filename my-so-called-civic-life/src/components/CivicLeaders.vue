<template>
<div>
     <h1>Civic Leaders</h1>
    <h2>My Federal Representative</h2>
    <h3>{{fedRepOfficials.name}}</h3>
    <h4>{{fedRepOfficials.party}}</h4>
    <div v-for='url in fedRepUrls' :key='url.id'>
        <li>{{url}}</li>
    </div>

    <h2>My Federal Senators</h2>
    <div v-for='fedSen in fedSenOfficials' :key='fedSen.id'>
        <h3>{{fedSen.name}}</h3>
        <h4>{{fedSen.party}}</h4>
        <div v-for='url in fedSen.urls' :key='url.id'>
            <li>{{url}}</li>
        </div>
    </div>

    <h2>My City Council Member(s)</h2>
    <div v-for="city in cityRep" :key='city.id'>
        <h3>{{city.name}}</h3>
        <h4>{{city.party}}</h4>
    </div>
</div>
   
</template>

<script>
import axios from 'axios'
const GOOGLE_API_KEY = process.env.VUE_APP_GOOGLE_KEY

export default {
    name: 'CivicLeaders',
    data: ()=> ({
        street_address: '',
        city: '',
        fedRepOfficials: [],
        fedRepUrls: [],
        fedSenOfficials: [],
        fedSenUrls: [], 
        cityRep: []
    }),
    mounted() {
        this.getAddressCity() 
        

    },
    methods: {
         async getAddressCity(){
            const res = await axios.get('http://127.0.0.1:8000/user/') 
            this.street_address = res.data[0].street_address
            this.city = res.data[0].city
            this.getFedRep()
            this.getFedSens()
            this.getCityRep()
        },
        async getFedRep(){
            const res = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${this.street_address}` + ' ' + `${this.city}&includeOffices=true&levels=country&roles=legislatorLowerBody&key=${GOOGLE_API_KEY}`)
            this.fedRepOfficials = res.data.officials[0]
           
            this.fedRepUrls = res.data.officials[0].urls
        },
        async getFedSens(){
            const res = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${this.street_address}` + ' ' + `${this.city}&includeOffices=true&levels=country&roles=legislatorUpperBody&key=${GOOGLE_API_KEY}`)
            this.fedSenOfficials = res.data.officials          
        },
        async getCityRep(){
            const res = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${this.street_address}` + ' ' + `${this.city}&includeOffices=true&levels=locality&roles=legislatorLowerBody&key=${GOOGLE_API_KEY}`)
            this.cityRep = res.data.officials
            console.log(this.cityRep)
        }

    }

}
</script>
