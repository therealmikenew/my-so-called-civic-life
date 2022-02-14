<template>
  <div id="app">
    <Nav/>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: #03045e;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover{
  background-color: #90e0ef;
  color: black;

}


</style>