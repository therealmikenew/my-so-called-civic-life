<template>

<div><h1>{{action.description}}</h1>
<h2>Date: {{action.date}}</h2>
<p>{{action.notes}}</p></div>
    
    
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

        async getAction(){
             const res = await axios.get(`http://localhost:8000/action/${this.actionId}`)
             console.log(res.data)
             this.action = res.data
        }
       

    }
}
</script>
