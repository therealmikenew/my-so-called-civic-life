<template>
    <div >
        <Nav/>
        <h1 id='title'>My So-Called Profile</h1>
        <div class="container">
            <UserProfile/>
            <CivicLeaders/>
        </div>  
         <router-view></router-view>
    </div>

</template>

<script>
import Nav from '../components/Nav.vue'

import UserProfile from '../components/UserProfile.vue'
import CivicLeaders from '../components/CivicLeaders.vue'
export default {
    name: 'Home',
    components: {
        Nav,
        UserProfile,
        CivicLeaders
    }, 
}
</script>

<style scoped>

#title {
    padding-top: 20px;
    padding-bottom: 20px;
}
.container {
    display: flex;
    justify-content: space-evenly;
}

@media screen and (max-width: 380px) {
    .container {
        display: grid;
        align-content: center;
        padding-left: 55px;
    }
        #title {
        padding-top: 50px;
        padding-bottom: 10px;
    }

}

</style>


