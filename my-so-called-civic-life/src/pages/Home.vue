<template>
    <div >
        <Nav/>
        
        <h1>User Panel</h1>
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

.container {
    display: flex;
    justify-content: space-evenly;
}
</style>


