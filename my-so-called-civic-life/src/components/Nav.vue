<template>
    <nav class="navbar">
        <div class='title'>My So-Called Civic Life</div>
        <div class='routes'>
            <router-link to='/' name='Home'>Home</router-link>
        <router-link  to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
        <router-link to='/my-actions' name='MyActions'>My Actions</router-link>
        <router-link to='/search' name='Search'>Search</router-link>
        </div>
        
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>


<style scoped>

.navbar{
  
  width: 100%;
  background-color: #b23a48;
  height: 50px;
 
  
}

.title{
    display: flex;
    justify-content: flex-start;
    color: aliceblue;
}
 .routes {
     display: flex;
     justify-content: flex-end;
     text-decoration: none;
 }




</style>