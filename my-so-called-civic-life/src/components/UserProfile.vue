<template>
    <div>
        <h1>User Profile</h1>
        <Form :first_name="first_name" :last_name="last_name" :profile_URL="profile_URL" :street_address="street_address" :city="city" :state="state" :zip_code=parseInt.zip_code @handleFormChange="handleFormChange" @handleSubmit="handleSubmit"/>
    </div>
</template>

<script>
import Form from './Form.vue'
import axios from 'axios'
export default {
    name: 'UserProfile',
    components: {
        Form
    },
    data: ()=> ({
        first_name: '',
        last_name: '',
        profile_URL: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: null

    }),
    methods: {
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
        }
        
        
    }
}
</script>

