<template>
    <div>
        <h1 id='title'>My Actions</h1>
        <div id='container'>
            <vs-button @click="goToActionForm">Create New Action</vs-button>
            <div  v-for='action in actions' :key='action.id'>
                <h2 @click="selectAction(action.id)">{{action.description}}</h2>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
export default {
    name: 'MyActions', 
    data: ()=> ({
        actions: []
    }),
    mounted() {
        this.getActions()
    },
    methods: {
        async getActions(){
            const res = await axios.get(`${BASE_URL}/action/`)
            this.actions = res.data 
        },
        selectAction(id){
            this.$router.push(`/my-actions/${id}`)
        },
        goToActionForm(){
            this.$router.push('/action-form')
        }
    }    
}
</script>

<style scoped>

#title{
    padding-top: 50px;
    padding-bottom: 20px;
  }
 #container {
    display: grid;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 70px;
   

  }

@media screen and (max-width: 380px){
  

  #container {
    display: grid;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;

  }

 
  
  

}


</style>
