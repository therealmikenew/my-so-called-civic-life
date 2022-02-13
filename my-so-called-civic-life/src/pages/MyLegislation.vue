<template>
    <div>
        <h1>My Tracked Legislation</h1>
            <div v-for='myTracked in myTrackedLegislation' :key='myTracked.id'>
                <h3>{{myTracked.title}}</h3>
                <button @click="deleteMyLegislation(myTracked.id)">Delete</button>
            </div>

    
</div>
    
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
const PROPUBLICA_API_KEY = process.env.VUE_APP_PROPUBLICA_KEY

export default {
    name: 'MyLegislation',
    data: ()=> ({
        legislation: [],
        filteredLegislation: [],
        myTrackedLegislation: [],
        

    }),
    mounted(){
        this.getLegislation()
        this.getMyLegislation()

    },
    methods: {

        async getMyLegislation(){
            const res = await axios.get(`${BASE_URL}/legislation/`)
            this.myTrackedLegislation = res.data
        },

        async deleteMyLegislation(id){
            await axios.delete(`${BASE_URL}/legislation/${id}`)
        },

        async getLegislation(){
            const res = await axios.get(`https://api.propublica.org/congress/v1/bills/search.json`, {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                }
            })
            this.legislation = res.data.results[0].bills
            this.filteredLegislation = this.legislation.filter((state) => state.sponsor_state === 'TX')

        },
        showButton20(){
            this.button_20_text === 'show' ? this.button_20_text = 'hide' : this.button_20_text = 'show'
        },
        showButton(){
            this.button_text === 'show' ? this.button_text = 'hide' : this.button_text = 'show'
        }

    }
}
</script>



