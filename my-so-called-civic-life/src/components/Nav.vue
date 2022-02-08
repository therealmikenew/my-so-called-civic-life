<template>
    <nav>
        <router-link to='/' name='Home'>Home</router-link>
        <router-link to='/my-legislation' name='MyLegislation'>My Legislation</router-link>
        <router-link to='/my-actions' name='MyActions'>My Actions</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>
