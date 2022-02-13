<template>
    <div>
        <h1>{{repName}}</h1>
        <div v-for='bill in repBills' :key='bill.id'>
            <h2>{{bill.short_title}}</h2>
            <h3>Date introduced: {{bill.introduced_date}}</h3>
            <button @click="goToLegisDetail(bill.bill_id)">View Detail</button>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
//import {BASE_URL} from '../globals'
const PROPUBLICA_API_KEY = process.env.VUE_APP_PROPUBLICA_KEY
export default {
    name: "CivicLeaderDetail",
    data: ()=> ({
        repInfo: [],
        repName: '',
        repId: '',
        repBills: []
    }),
    mounted(){
        this.getRepDetails()
        this.repName = this.$route.params.civic_leader_id

    },
    methods: {

       

        async getRepDetails(){
            const res = await axios.get(`https://api.propublica.org/congress/v1/117/house/members.json`, {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                    }
                }
            )
            this.repInfo = res.data.results[0].members
            let last_name = this.$route.params.civic_leader_id.split(' ')
            let member = this.repInfo.filter((entry) =>  entry.last_name === last_name[1])
            this.repId = member[0].id
            const resp = await axios.get(`https://api.propublica.org/congress/v1/members/${this.repId}/bills/introduced.json`, {
            headers: {
                'X-API-Key': `${PROPUBLICA_API_KEY}`
            }})
            this.repBills = resp.data.results[0].bills
        },
       
        goToLegisDetail(bill_id){
            let newBillId = bill_id.split("-")[0]
            this.$router.push(`/legislation-detail/${newBillId}`)
        }

        
    }
    
}
</script>
