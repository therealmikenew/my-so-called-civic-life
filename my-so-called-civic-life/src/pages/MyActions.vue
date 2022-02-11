<template>
<div>
    <h1>My Actions</h1>
    <button @click="goToActionForm">Create New Action</button>
    <div v-for='action in actions' :key='action.id'>
        <h2 @click="selectAction(action.id)">{{action.description}}</h2>
    </div>
</div>


    
</template>

<script>
import axios from 'axios'
import BASE_URL from '../globals'
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
