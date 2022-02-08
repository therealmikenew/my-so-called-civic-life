<template>

<div >
     <h1>HOME</h1>

     <div class="container">
         <UserProfile/>
        <CivicLeaders/>
     </div>
    
</div>



   


</template>

<script>
import UserProfile from './UserProfile.vue'
import CivicLeaders from './CivicLeaders.vue'

export default {
    name: 'Home',
    components: {
        UserProfile,
        CivicLeaders
    }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: space-evenly;
}


</style>


