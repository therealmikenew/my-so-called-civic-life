<template>
    <div>
        <h1 id='title'>Action Form</h1>

        <div>
        <form id="container" v-on:submit.prevent='handleSubmit'>
            <vs-input v-model="description" type="text" placeholder="Title of action item" />
            <vs-input  type="text" placeholder="Notes" v-model="notes"   />
            <vs-button>Enter Action Item</vs-button>
        </form></div>
        
    </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
export default {
    name: 'CreateActionForm',
    data: ()=> ({
        date: '',
        description: '',
        notes: '',
        profileId: null
    }),
    mounted(){
        this.getProfile()
    },
    methods: {
         async getProfile(){
            const res = await axios.get(`${BASE_URL}/user/`) 
            this.profileId = res.data[0].id
        },

        handleSubmit() {
            let currentDate = new Date()
            let dd = String(currentDate.getDate()).padStart(2, '0')
            let mm = String(currentDate.getMonth() + 1).padStart(2, '0')
            let year = currentDate.getFullYear()
            this.date = `${mm}-${dd}-${year}`
            this.createAction()
        },
        async createAction() {
            await axios.post(`${BASE_URL}/action/`, {
                date: this.date,
                description: this.description,
                notes: this.notes,
                completed: false,
                user_id: this.profileId
            })
            this.$router.push(`/my-actions`)
        }

    }
        
}
</script>

<style scoped>
@media screen and (max-width: 480px){
  #title{
    padding-top: 50px;
    padding-bottom: 10px;
  }

  #container {
    display: grid;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
    margin-bottom: 10px;

  }

 
  
  

}
</style>