<template>
    <vs-navbar v-model='active' class="navbar">
        <template class='title' #left>
            <p>My So-Called Civic Life</p> 
        </template>

        <template #right>  
                <router-link to='/' name='Home'>Home</router-link>
                <router-link to='/about' name='About'>About</router-link>
                <router-link  to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
               <router-link to='/my-actions' name='MyActions'>My Actions</router-link>
               <router-link to='/search' name='Search'>Search</router-link>
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
  background-color: #3da5f4;
  color:antiquewhite;
}

</style>