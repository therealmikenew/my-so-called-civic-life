<template>
    <nav class="navbar">
        <router-link to='/' name='Home'>Home</router-link>
        <router-link to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
        <router-link to='/my-actions' name='MyActions'>My Actions</router-link>
        <router-link to='/search' name='Search'>Search</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>


<style scoped>



.navbar{
    background: rgb(149, 244, 149);
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 30px;
    width: 100%;
}

</style>