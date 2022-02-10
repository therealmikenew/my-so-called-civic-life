<template>

<div><h1>{{action.description}}</h1>
<h2>Date: {{action.date}}</h2>
<p>{{action.notes}}</p>
<button @click='handleDelete'>Delete Action</button></div>

    
    
</template>

<script>
import axios from 'axios'
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
             const res = await axios.get(`http://localhost:8000/action/${this.actionId}`)
             this.action = res.data
        },
        async deleteAction(){
            await axios.delete(`http://127.0.0.1:8000/action/${this.actionId}`)

        }
       

    }
}
</script>
