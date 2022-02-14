<template>
    <div>
        <div>
        <h1>{{senName}}</h1>
        <div v-for='bill in senBills' :key='bill.id'>
            <h2>{{bill.short_title}}</h2>
            <h3>Date introduced: {{bill.introduced_date}}</h3>
            <button @click="goToLegisDetail(bill.bill_id)">View Detail</button>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
const PROPUBLICA_API_KEY = process.env.VUE_APP_PROPUBLICA_KEY



export default {
    name: 'FederalSenatorDetail',
    data: ()=> ({
        senInfo: [],
        senName: '',
        senId: '',
        senBills: []
    }),
    mounted(){
        this.getSenDetails()
        this.senName = this.$route.params.federal_senator_id
    },
    methods: {
        async getSenDetails(){
            const res = await axios.get(`https://api.propublica.org/congress/v1/117/senate/members.json`, {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                    }
            })
            this.senInfo = res.data.results[0].members
            let last_name = this.$route.params.federal_senator_id.split(' ')
            let member = this.senInfo.filter((entry) => entry.last_name === last_name[1])
            this.senId = member[0].id
            const resp = await axios.get(`https://api.propublica.org/congress/v1/members/${this.senId}/bills/introduced.json`, {
                headers: {
                    'X-API-Key': `${PROPUBLICA_API_KEY}`
                    }
                }   
            )
             this.senBills = resp.data.results[0].bills
        },
        goToLegisDetail(bill_id){
            let newBillId = bill_id.split("-")[0]
            this.$router.push(`/legislation-detail/${newBillId}`)
        }
        
    }
    
}
</script>
