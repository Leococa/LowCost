<template>
  <div id="app">
    <NavBar />
      <h1>About Page</h1>
    <router-view/>
    <hr style="width:20%; margin:auto">
    <h3 class="presentation">
        We are 2 students from Concordia University who were challenge to create a website for a study project. 
        The project's name "LowCost" is a website created with the purpose of helping student to keep an eye on their expenses 
        and manage their budget.
        <br/>
        Let us present ourselves :
    </h3>
    <div class="global">
      <div class="cardPres">
        <img src="@/assets/avatar2.png" alt="Avatar" style="width:30%">
          <div class="container">
            <h4><b>Hugo Trinh</b></h4> 
            <p>Engineer Student</p>
            <p>21 years old</p>

          </div> 
      </div>
      <div class="cardPres">
        <img src="@/assets/avatar3.png" alt="Avatar" style="width:30%">
        <div class="container">
          <h4><b>Léo Cocatrix</b></h4> 
          <p>Engineer Student</p>
          <p>20 years old</p>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
.cardPres {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 45%;
  height: 60%;
  margin-right:10%;
  background-color:rgb(199, 212, 224);
  padding-top:2%;
  
}

.global{
  display: flex;
  margin-left: 10%;
}



.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.presentation{
  margin-top:1.5%;
  margin-left:2%;
  margin-right:2%;
  text-align: center;
}
</style>
