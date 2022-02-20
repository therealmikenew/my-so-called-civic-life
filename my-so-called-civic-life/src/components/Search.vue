<template>
    <div id='container'>
        <h2 class='title'>Most recent federal legislation items from civic leaders in your state</h2>
        <vs-button @click="showButton">{{this.button_text}}</vs-button>
        <div v-if="this.button_text==='hide'">
            <div v-for="legis in filteredLegislation" :key=legis.id>
            <h3 class='legis' @click="goToLegisDetail(legis.bill_id)">{{legis.short_title}}</h3>
        </div>
    </div>
        <h2 class='title'>20 most recent federal legislation items</h2>
        <vs-button @click="showButton20">{{this.button_20_text}}</vs-button>
        <div v-if="this.button_20_text==='hide'">
            <div v-for="legis in legislation" :key=legis.id>
                <h3 class='legis' @click="goToLegisDetail(legis.bill_id)">{{legis.short_title}}</h3>
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



<style scoped>

 .title{
    padding-top: 50px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  #container {
    display: grid;
    align-items: center;
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 50px;

  }

  .legis {
      padding-bottom: 40px;
  }

@media screen and (max-width: 380px){
 

  #container {
    display: grid;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;

  }

  .legis {
      padding-bottom: 20px;
  }

 
  
  

}

</style>
