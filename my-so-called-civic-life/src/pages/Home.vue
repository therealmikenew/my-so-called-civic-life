<template>
    <div >
        <h1>User Panel</h1>
        <div class="container">
            <UserProfile/>
            <CivicLeaders/>
        </div>  
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import CivicLeaders from '../components/CivicLeaders.vue'
export default {
    name: 'Home',
    components: {
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


