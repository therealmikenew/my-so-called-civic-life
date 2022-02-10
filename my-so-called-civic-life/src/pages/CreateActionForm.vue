<template>


<div>
    <h1>Action Form</h1>
    <form  v-on:submit.prevent='handleSubmit'>
        <input v-model="description"
        type="text" placeholder="Title of action item" />
        <input  type="text" placeholder="Notes" v-model="notes"   />
        <button>Enter Action Item</button>

    </form>
</div>

    
</template>

<script>
import axios from 'axios'

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
// to get user_id
         async getProfile(){
            const res = await axios.get('http://127.0.0.1:8000/user/') 
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
            await axios.post(`http://127.0.0.1:8000/action/`, {
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
