<template>
  <div>
    <h1 id='title'>My So-Called Civic Life</h1>

    <div id="container">
      <p>
      My So-Called Civic Life is designed to help users identify their specific
      federal, state, and local public servants, and to see what they are up
      to–what legislation are they working on? Do they represent your interests
      and values, etc?
      </p>
    <h2>In progress</h2>
    <p>Right now, only federal details and information are available. Local and state data forthcoming.</p>
    <br>
    <p>

      Information provided by the
      <a href="https://developers.google.com/civic-information" target="_blank"
        >Google Civic Information API</a
      >, and the
      <a
        href="https://www.propublica.org/datastore/api/propublica-congress-api"
        target="_blank"
        >ProPublica Congress API</a
      >.
    </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>


<style scoped>

#title{
    padding-top: 50px;
    padding-bottom: 10px;
  }

#container {
    display: grid;
    align-items: center;
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 70px;

  }

a{
    color: rgb(78, 78, 203);
  }
  a:hover {
    color: rgb(98, 233, 219);
  }

@media screen and (max-width: 380px){
  
  #container {
    padding-left: 10px;
    padding-right: 10px;
  }
  

}


</style>
