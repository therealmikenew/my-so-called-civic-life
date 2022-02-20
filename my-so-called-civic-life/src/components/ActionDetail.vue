<template>
    <div id='container'>
        <h1 id='title'>{{action.description}}</h1>
        <h2>Date entered: {{action.date}}</h2>
        <p>{{action.notes}}</p>
        <vs-button @click='handleDelete'>Delete Action</vs-button></div>  
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
export default {
    name: 'ActionDetail',
    data: ()=> ({
        action: [],
        actionId: null
    }),
    mounted(){
        this.actionId = parseInt(this.$route.params.action_id)
        this.getAction()
    },
    methods: {
        handleDelete(){
            this.deleteAction()
            this.$router.push(`/my-actions`)
        },

        async getAction(){
             const res = await axios.get(`${BASE_URL}/action/${this.actionId}`)
             this.action = res.data
        },
        async deleteAction(){
            await axios.delete(`${BASE_URL}/action/${this.actionId}`)
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
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
  }
  

}


</style>

