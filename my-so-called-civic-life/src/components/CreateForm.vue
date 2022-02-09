<template>
    <div>
        <div class='form-container'>
            <form class='form' v-on:submit.prevent='handleSubmit'>
                <input  @input="handleCreateFormChange($event)" type="text" placeholder="First name"
                :value="first_name"
                name="first_name"/>
                <input   @input="handleCreateFormChange($event)" type="text" placeholder="Last name"
                :value="last_name"
                name="last_name"/>
                <input  @input="handleCreateFormChange($event)" type="text" placeholder="Photo URL"
                :value="profile_URL"
                name="profile_URL"/>
                <input  @input="handleCreateFormChange($event)" type="text" placeholder="Street address"
                :value="street_address"
                name="street_address"/>
                <input   @input="handleCreateFormChange($event)" type="text" placeholder="City"
                :value="city"
                name="city"/>
                <input  @input="handleCreateFormChange($event)" type="text" placeholder="State"
                :value="state"
                name="state"/>
                <input  @input="handleCreateFormChange($event)" type="number" placeholder="Zip code"
                :value="zip_code"
                name="zip_code"/>
                <button>Create Profile</button>     
            </form>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'CreateForm',
    props: {
        first_name: String,
        last_name: String,
        profile_URL: String,
        street_address: String,
        city: String,
        state: String,
        zip_code: Number,
        
    },
    methods: {
        handleCreateFormChange(e){
            this.$emit('handleCreateFormChange', e.target.name, e.target.value)
        },
        handleSubmit(e) {
            e.preventDefault()
            this.$emit('handleSubmit')
        }
    }

}
</script>


<style scoped>

.form {
    display: grid;
    grid-template-columns: 1fr;
    margin: 10px;
    padding: 10px;
    
}

</style>