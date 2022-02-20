<template>
    <vs-navbar v-model='active' class="navbar">

        <template #right>
             <router-link class='router-link' to='/' name='Home'>Home</router-link>
            <router-link class='router-link' to='/about' name='About'>About</router-link>
            <router-link  class='router-link' to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
            <router-link class='router-link' to='/my-actions' name='MyActions'>My Actions</router-link>
            <router-link class='router-link' to='/search' name='Search'>Search</router-link>
        </template>
       
    </vs-navbar>
</template>

<script>
export default {
    name: 'Nav'
}
</script>


<style scoped>
.navbar{
    display: flex;
    justify-content: flex-end;
    background-color: #560bad;
    color:antiquewhite;
}

#container {
    display: flex;
    justify-content: flex-end;
}

.router-link{
     display: flex;
    justify-content: flex-end;
    
    text-decoration: none;
    color:antiquewhite;
    padding-left: 7px;
}

</style>