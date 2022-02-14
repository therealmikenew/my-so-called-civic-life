<template>
<div>
    <h2>Most recent federal (Congress and Senate) in your state</h2>
    <button @click="showButton">{{this.button_text}}</button>

    <div v-if="this.button_text==='hide'">
         <div v-for="legis in filteredLegislation" :key=legis.id>
        <h3 @click="goToLegisDetail(legis.bill_id)">{{legis.short_title}}</h3>
    </div>
    </div>

    <h2>20 most recent federal (Congress and Senate)</h2>
    <button @click="showButton20">{{this.button_20_text}}</button>

    <div v-if="this.button_20_text==='hide'">
         <div v-for="legis in legislation" :key=legis.id>
        <h3 @click="goToLegisDetail(legis.bill_id)">{{legis.short_title}}</h3>
    </div>
    </div>
</div>
    
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
const PROPUBLICA_API_KEY = process.env.VUE_APP_PROPUBLICA_KEY

export default {
    name: 'Search',
    data: ()=> ({
        legislation: [],
        filteredLegislation: [],
        button_20_text: "show",
        button_text: "show",
        profileState: null

    }),
    mounted(){
        this.getLegislation()
        this.getProfile()
    },
    methods: {

        async getProfile(){
            const res = await axios.get(`${BASE_URL}/user/`) 
            this.profileState = res.data[0].state            
        },

        async getLegislation(){
            const res = await axios.get(`https://api.propublica.org/congress/v1/bills/search.json`, {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                }
            })
            this.legislation = res.data.results[0].bills
            this.filteredLegislation = this.legislation.filter((state) => state.sponsor_state === this.profileState )

        },

        showButton20(){
            this.button_20_text === 'show' ? this.button_20_text = 'hide' : this.button_20_text = 'show'
        },
        showButton(){
            this.button_text === 'show' ? this.button_text = 'hide' : this.button_text = 'show'
        },
        goToLegisDetail(bill_id){
            let newBillId = bill_id.split("-")[0]
            this.$router.push(`/legislation-detail/${newBillId}`)
        }


    }
    
}
</script>
