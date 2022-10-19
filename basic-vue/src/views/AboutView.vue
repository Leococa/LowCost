<template>
  <div id="app">
      <NavBar />
      <h1>About Page</h1>
    <router-view/>
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

</style>
