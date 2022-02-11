<template>

<div><h1>{{action.description}}</h1>
<h2>Date {{action.date}}</h2>
<p>{{action.notes}}</p>
<button @click='handleDelete'>Delete Action</button></div>

    
    
</template>

<script>
import axios from 'axios'
import BASEURL from '../globals'
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
             const res = await axios.get(`${BASEURL}/action/${this.actionId}`)
             this.action = res.data
        },
        async deleteAction(){
            await axios.delete(`${BASEURL}/action/${this.actionId}`)

        }
       

    }
}
</script>
