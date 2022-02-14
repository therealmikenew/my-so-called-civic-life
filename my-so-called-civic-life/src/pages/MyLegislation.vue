<template>
    <div>
        <h1>My Tracked Legislation</h1>
            <div v-for='myTracked in myTrackedLegislation' :key='myTracked.id'>
                <h3 @click="goToLegisDetail(myTracked.bill_number)">{{myTracked.title}}</h3>
                <button @click="deleteMyLegislation(myTracked.id)">Delete</button>
            </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'

export default {
    name: 'MyLegislation',
    data: ()=> ({
        myTrackedLegislation: [],
    }),
    mounted(){
        this.getMyLegislation()
    },
    methods: {

        async getMyLegislation(){
            const res = await axios.get(`${BASE_URL}/legislation/`)
            this.myTrackedLegislation = res.data
        },

        async deleteMyLegislation(id){
            await axios.delete(`${BASE_URL}/legislation/${id}`)
            //window.location.reload()
        },
        goToLegisDetail(bill_number){
            this.$router.push(`/legislation-detail/${bill_number}`)
        }
 

    }
}
</script>



