<template>
    <div>
        <div v-if='profile && !update'>
            <h1>User Profile</h1>
            <h3>{{profile.first_name}} {{profile.last_name}}</h3>
            <h3>{{profile.street_address}}</h3>
            <h3>{{profile.city}} {{profile.state}}</h3>
            <h3>{{profile.zip_code}}</h3>
            <button @click='toggleUpdate'>Update profile</button>
            <button>Delete profile</button>
        </div>
        <div v-else-if='!profile && !update'>
            <CreateForm :first_name="first_name" :last_name="last_name" :profile_URL="profile_URL" :street_address="street_address" :city="city" :state="state" :zip_code=parseInt.zip_code @handleFormChange="handleFormChange" @handleSubmit="handleSubmit" />
        </div>
        <div v-else>
            <UpdateForm :first_name="profile.first_name" :last_name="profile.last_name" :profile_URL="profile.profile_URL" :street_address="profile.street_address" :city="profile.city" :state="profile.state" :zip_code="profile.zip_code" @handleFormChange="handleFormChange" @handleUpdate="handleUpdate"/>
            
            <button @click='toggleUpdate'>Update profile</button>

        </div>

    </div>
</template>

<script>
import axios from 'axios'
import CreateForm from './CreateForm.vue'
import UpdateForm from './UpdateForm.vue'
export default {
    name: 'UserProfile',
    components: {
        CreateForm, UpdateForm
    },
    data: ()=> ({
        profile: [],
        update: false,
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

        toggleUpdate(){
            this.update = !this.update
        },

        handleUpdate (){
            this.updateUser()
        },

        async updateUser (){
            await axios.put(`http://127.0.0.1:8000/user/${this.profile.id}`, { 
                first_name: this.profile.first_name,
                last_name: this.profile.last_name,
                profile_URL: this.profile.profile_URL,
                street_address: this.profile.street_address,
                city: this.profile.city,
                state: this.profile.state,
                zip_code: this.profile.zip_code})

        },

        async getProfile(){
            const res = await axios.get('http://127.0.0.1:8000/user/') 
            this.profile = res.data[0]
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

