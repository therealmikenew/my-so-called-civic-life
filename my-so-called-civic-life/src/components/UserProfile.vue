<template>
    <div>
        <div v-if='profile && !update'>
            <vs-card>
                <template #title>
                    <h3>{{profile.first_name}} {{profile.last_name}}</h3>
                </template>
                <template #img>
                    <img :src="profile.profile_URL">
                </template>
                <template #text>
                    <p>{{profile.street_address}}</p>
                    <p>{{profile.city}} {{profile.state}}</p>
                    <p>{{profile.zip_code}}</p>
                    <div class='btn'>
                        <vs-button @click='toggleUpdate'>Update profile</vs-button>
                        <vs-button @click="handleDelete">Delete profile</vs-button>
                    </div>
                </template>
            </vs-card>
        </div>
        <div v-else-if='!profile && !update'>
            <CreateForm :first_name="first_name" :last_name="last_name" :profile_URL="profile_URL" :street_address="street_address" :city="city" :state="state" :zip_code=parseInt.zip_code @handleCreateFormChange="handleCreateFormChange" @handleSubmit="handleSubmit" />
        </div>
        <div v-else>
            <UpdateForm :first_name="profile.first_name" :last_name="profile.last_name" :profile_URL="profile.profile_URL" :street_address="profile.street_address" :city="profile.city" :state="profile.state" :zip_code='profile.zip_code' @handleFormChange="handleFormChange" @handleUpdate="handleUpdate"/>    
            <vs-button @click='toggleUpdate'>Back to Profile</vs-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CreateForm from './CreateForm.vue'
import UpdateForm from './UpdateForm.vue'

import {BASE_URL} from '../globals'
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
            await axios.put(`${BASE_URL}/user/${this.profile.id}`, { 
                first_name: this.profile.first_name,
                last_name: this.profile.last_name,
                profile_URL: this.profile.profile_URL,
                street_address: this.profile.street_address,
                city: this.profile.city,
                state: this.profile.state,
                zip_code: this.profile.zip_code})
                this.toggleUpdate()
                window.location.reload()
        },
        async getProfile(){
            const res = await axios.get(`${BASE_URL}/user/`) 
            this.profile = res.data[0]
        },
        handleFormChange(name, value) {
            this.profile[name] = value    
        }, 
        handleCreateFormChange(name, value) {
            this[name] = value
        }, 
        handleSubmit() {
            this.createUser()
        },
        handleDelete(){
            this.deleteUser()
            window.location.reload()  
        },
        async createUser() {
            await axios.post(`${BASE_URL}/user/`, {
                first_name: this.first_name,
                last_name: this.last_name,
                profile_URL: this.profile_URL,
                street_address: this.street_address,
                city: this.city,
                state: this.state,
                zip_code: this.zip_code
            })
            window.location.reload()
        },
        async deleteUser() {
            await axios.delete(`${BASE_URL}/user/${this.profile.id}`)
        }
    }
}
</script>

<style scoped>
.btn{
    display: grid;
    align-items: center;
}
</style>
