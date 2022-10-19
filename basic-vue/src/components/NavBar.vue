<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">About</router-link></div>
        <div class="menu-item"><router-link to="/connection">Connect</router-link></div> 
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>
<style>
    nav {
  width: 100vw;
  height: 5vw;
  background-color: #141442;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #141442;
  border-bottom-color: #51a0e0;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}


</style>