<template>
<div>
    <h1>My Civic Leaders</h1>
    <h2 >My Federal Representative</h2>
        <vs-card @click='selectRep(fedRepOfficials.name)' type="3">
            <template #title>
                <h3 >{{fedRepOfficials.name}}</h3>
            </template>
            <template #img>
                <div v-if='fedRepOfficials.photoUrl'>
                    <img :src="fedRepOfficials.photoUrl">
                </div>
            </template>
            <template #text>
                <h4>{{fedRepOfficials.party}}</h4>
                <div class='urls'>
                    <vs-button><a v-bind:href="fedRepUrls[0]" target="_blank">Rep page</a></vs-button>
                    <vs-button><a v-bind:href="fedRepUrls[1]" target="_blank">Wikipedia</a></vs-button>  
                </div>                    
            </template>
        </vs-card>

    <h2>My Federal Senators</h2>
    <div v-for='fedSen in fedSenOfficials' :key='fedSen.id'>
        <vs-card @click="selectSen(fedSen.name)" type="3">
            <template #title>
                <h3>{{fedSen.name}}</h3>
            </template>
            <template #img>
                <img :src="fedSen.photoUrl" alt="no photo">
            </template>
            <template #text>
                <p>{{fedSen.party}}</p>
                <div class='urls'>
                    <vs-button><a v-bind:href="fedSenUrls[0]" target="_blank">Rep page</a></vs-button>
                    <vs-button><a v-bind:href="fedSenUrls[1]" target="_blank">Wikipedia</a></vs-button>  
                </div>  
            </template>
        </vs-card>
    </div>

    <h2>My State Senator</h2>
        <vs-card type="3">
            <template #title>
                 <h3>{{stateSen.name}}</h3>
            </template>
            <template #img>
                <div v-if='stateSen.photoUrl'>
                    <img :src="stateSen.photoUrl" >
                </div>
            </template>
            <template #text>
                <p>{{stateSen.party}}</p>
                <div v-for='url in stateSen.urls' :key='url.id'>
                    <a v-bind:href='url' target="_blank">{{url}}</a>
                </div>
            </template>
        </vs-card>

    <h2>My State Representative</h2>
        <vs-card type="3">
            <template #title>
                <h3>{{stateRep.name}}</h3>
            </template>
            <template #img>
                <div v-if='stateRep.photoUrl'>
                    <img :src="stateRep.photoUrl" alt='photo' >
                </div>
            </template>
            <template #text>
                <p>{{stateRep.party}}</p>
                <div v-for='url in stateRep.urls' :key='url.id'>
                    <a v-bind:href='url' target="_blank">{{url}}</a>
                </div>
        </template>
        </vs-card>


    <h2>My City Council Member(s)</h2>
        <div v-for="city in cityRep" :key='city.id'>
            <vs-card type="3">
                <template #title>
                    <h3>{{city.name}}</h3>
                </template>
                <template #text>
                    <p>{{city.party}}</p>
                    <div v-for='url in city.urls' :key='url.id'>
                        <a v-bind:href='url' target="_blank">{{url}}</a>
                    </div>
                </template>
            </vs-card>
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
    width: 75px;
}

.urls {
    display: grid;
    align-items: center;
}

a {
    text-decoration: none;
    color: antiquewhite;
}

vs-card {
    padding-bottom: 20px;
}

</style>