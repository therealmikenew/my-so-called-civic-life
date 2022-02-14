<template>
<div>
    <h1>Civic Leaders</h1>
    <h2 >My Federal Representative</h2>
    <h3 @click='selectRep(fedRepOfficials.name)'>{{fedRepOfficials.name}}</h3>


    <div v-if='fedRepOfficials.photoUrl'>
        <img :src="fedRepOfficials.photoUrl">
    </div>

    
    <h4>{{fedRepOfficials.party}}</h4>
        <div v-for='url in fedRepUrls' :key='url.id'>
               <a v-bind:href='url' target="_blank">{{url}}</a>
        </div>

    <h2>My Federal Senators</h2>
    <div v-for='fedSen in fedSenOfficials' :key='fedSen.id'>
        <h3 @click="selectSen(fedSen.name)">{{fedSen.name}}</h3>
            <img :src="fedSen.photoUrl" alt="no photo">

        <h4>{{fedSen.party}}</h4>
        <div v-for='url in fedSen.urls' :key='url.id'>
            
            <a v-bind:href='url' target="_blank">{{url}}</a>
        </div>
    </div>

    <h2>My State Senator</h2>
    <h3>{{stateSen.name}}</h3>


      <div v-if='stateSen.photoUrl'>
         <img :src="stateSen.photoUrl" >
    </div>
   
    <h4>{{stateSen.party}}</h4>
        <div v-for='url in stateSen.urls' :key='url.id'>
             <a v-bind:href='url' target="_blank">{{url}}</a>
        </div>

    <h2>My State Representative</h2>
    <h3>{{stateRep.name}}</h3>

     <div v-if='stateRep.photoUrl'>
         <img :src="stateRep.photoUrl" alt='photo' >
    </div>

    
   
    <h4>{{stateRep.party}}</h4>
        <div v-for='url in stateRep.urls' :key='url.id'>
               <a v-bind:href='url' target="_blank">{{url}}</a>
        </div>


    <h2>My City Council Member(s)</h2>
    <div v-for="city in cityRep" :key='city.id'>
        <h3>{{city.name}}</h3>
        <h4>{{city.party}}</h4>
        <div v-for='url in city.urls' :key='url.id'>
             <a v-bind:href='url' target="_blank">{{url}}</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
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
        stateSen: [],
        stateRep: [],
        cityRep: [],
        
    }),
    mounted() {
        this.getAddressCity() 
    },
    methods: {
         async getAddressCity(){
            const res = await axios.get(`${BASE_URL}/user/`) 
            this.street_address = res.data[0].street_address
            this.city = res.data[0].city
            this.getFedRep()
            this.getFedSens()
            this.getStateSen()
            this.getStateRep()
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
        },

        async getStateSen(){
            const res = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${this.street_address}` + ' ' + `${this.city}includeOffices=true&levels=administrativearea1&roles=legislatorUpperBody&key=${GOOGLE_API_KEY}`)
            this.stateSen = res.data.officials[0]
            
        },
        async getStateRep(){
            const res = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${this.street_address}` + ' ' + `${this.city}includeOffices=true&levels=administrativearea1&roles=legislatorLowerBody&key=${GOOGLE_API_KEY}`)
            this.stateRep = res.data.officials[0]
        },
        selectRep(civic_leader_name){
            this.$router.push(`/civic-leader/${civic_leader_name}`)
        },
        selectSen(federal_senator_id){
            this.$router.push(`/federal-senator/${federal_senator_id}`)
        }
    }
}
</script>


<style >
img {
    width: 200px;
}

</style>