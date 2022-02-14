<template>
    <div>
        <h1>{{billDetails.short_title}}</h1>
        <h2>{{billDetails.title}}</h2>
        <p>Summary: {{billDetails.summary}}</p>
        <h3>Sponsor: {{billDetails.sponsor}}</h3>
        <h3>Date introduced: {{billDetails.introduced_date}}</h3>
        <h3>Latest major action: {{billDetails.latest_major_action}}</h3>
        <h3>Latest major action date: {{billDetails.latest_major_action_date}}</h3>
        <a v-bind:href='billDetails.govtrack_url' target="_blank">{{billDetails.govtrack_url}}</a>
        <button @click="createLegislation()">{{buttonText}}</button>
    </div>
</template>

<script>
import axios from 'axios'
const PROPUBLICA_API_KEY = process.env.VUE_APP_PROPUBLICA_KEY
import {BASE_URL} from '../globals'


export default {
    name: "LegislationDetail",
    data: ()=> ({
        billDetails: [],
        billId: '',
        profileId: null,
        billIds: [],
        buttonText: 'Add to My Legislation'
    }),
    mounted() {
        this.billId = this.$route.params.bill_id
        this.getBillDetails()
        this.getProfileId()  
        this.getMyLegislation()
    },
    methods: {
        async getMyLegislation(){
            const res = await axios.get(`${BASE_URL}/legislation/`)
            this.billIds = res.data
        },
        async getProfileId(){
            const res = await axios.get(`${BASE_URL}/user/`) 
            this.profileId = res.data[0].id
        },
        async getBillDetails(){
            const res = await axios.get(`https://api.propublica.org/congress/v1/117/bills/${this.billId}.json` , {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                    }
                })
                this.billDetails = res.data.results[0]
        },
         createLegislation(){
            this.addLegislation() 
        },
         async addLegislation(){
            await axios.post(`${BASE_URL}/legislation/`, {
                title: this.billDetails.short_title,
                bill_number: this.billId,
                summary: this.billDetails.summary,
                url: this.billDetails.govtrack_url,
                sponsor: this.billDetails.sponsor,
                cosponsor: this.billDetails.cosponsor,
                date_introduced: this.billDetails.introduced_date,
                user_id: this.profileId
                }
            )
            this.$router.push('/my-legislation')
        },
    }
    
}
</script>
