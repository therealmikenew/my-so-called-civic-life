<template>
    <vs-navbar v-model='active' class="navbar">

        <template class='title' #left><p>My So-Called Civic Life</p> </template>

        <template #right>  

            <vs-navbar-item :active="active === 'Home'" id="Home">
                <router-link to='/' name='Home'>Home</router-link>
            </vs-navbar-item>

            <vs-navbar-item :active="active === 'My Legislation'" id="My Legislation">
                <router-link  to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
            </vs-navbar-item>

            <vs-navbar-item :active="active === 'My Actions'" id="My Actions">
               <router-link to='/my-actions' name='MyActions'>My Actions</router-link>
            </vs-navbar-item>
            <vs-navbar-item :active="active === 'Search'" id="Search">
               <router-link to='/search' name='Search'>Search</router-link>
            </vs-navbar-item>



            
       
        
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
  
 
}

.title {
    background-color:antiquewhite;
}





</style>