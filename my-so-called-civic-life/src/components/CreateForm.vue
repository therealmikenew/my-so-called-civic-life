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
                <select @change="handleCreateFormChange($event)" name="state" id="state">
                    <option value="none">Select state</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="AS">AS</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="DC">DC</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="GU">GU</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="CM">CM</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="PR">PR</option>
                    <option value="RI">RI</option>
                    <option value="SC">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="TT">TT</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="VI">VI</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>  
                </select>
                <input  @input="handleCreateFormChange($event)" type="number" placeholder="Zip code"
                :value="zip_code"
                name="zip_code"/>
                <vs-button>Create Profile</vs-button>     
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