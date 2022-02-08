<template>


<div>
     <div v-if='profile'>
        <h1>User Profile</h1>
        <h3>{{profile.first_name}} {{profile.last_name}}</h3>
        <h3>{{profile.street_address}}</h3>
        <h3>{{profile.city}} {{profile.state}}</h3>
        <h3>{{profile.zip_code}}</h3>
    </div>
    <div v-else>
         <Form :first_name="first_name" :last_name="last_name" :profile_URL="profile_URL" :street_address="street_address" :city="city" :state="state" :zip_code=parseInt.zip_code @handleFormChange="handleFormChange" @handleSubmit="handleSubmit"/>

    </div>
</div>




   
</template>

<script>
import axios from 'axios'
import Form from './Form.vue'
export default {
    name: 'UserProfile',
    components: {
        Form
    },
    data: ()=> ({
        profile: [],
        first_name: '',
        last_name: '',
        profile_URL: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: null
    }),
    mounted() {
        this.getProfile()
        

    },
    methods: {
        async getProfile(){
            const res = await axios.get('http://127.0.0.1:8000/user/') 
            this.profile = res.data[0]
            console.log(this.profile)
        },
        handleFormChange(name, value) {
            this[name] = value
        }, 
        handleSubmit() {
            this.createUser()
        },
        async createUser() {
            await axios.post('http://localhost:8000/user/', {
                first_name: this.first_name,
                last_name: this.last_name,
                profile_URL: this.profile_URL,
                street_address: this.street_address,
                city: this.city,
                state: this.state,
                zip_code: this.zip_code
            })
            window.location.reload()
        }
        
        
        


    }
   
}
</script>

