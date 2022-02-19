<template>
    <vs-navbar v-model='active' class="navbar">
        <template class='title' #left>
            <p>My So-Called Civic Life</p> 
        </template>

        <template #right>  
                <vs-button><router-link class='router-link' to='/' name='Home'>Home</router-link></vs-button>
                <vs-button><router-link class='router-link' to='/about' name='About'>About</router-link></vs-button>
                <vs-button><router-link  class='router-link' to='/my-legislation' name='MyLegislation'>My Legislation</router-link></vs-button>
               <vs-button><router-link class='router-link' to='/my-actions' name='MyActions'>My Actions</router-link></vs-button>
               <vs-button><router-link class='router-link' to='/search' name='Search'>Search</router-link></vs-button>
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
  background-color: #560bad;
  color:antiquewhite;
}

.router-link{
    text-decoration: none;
    color:antiquewhite;
}

</style>