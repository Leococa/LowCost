<template>
    <div id="app">
        <NavBar />
        <h1>Connection Page</h1>
        <hr style="width:20%; margin:auto; height:5%;">
      <router-view/>
      <br/>
    <section class="login">
      <form>
        <div class="innerFrame">
          <div class="field">
            <label for="username">Email</label>
            <input type="text" name="username" id="username" v-model="username">
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="password">
          </div>
          <button @click="login" type="button">Submit</button>
        </div>
      </form>
    </section>

    <div class="separator"></div>

    <section class="test">
      <table>
        <tr>
          <td>Is logged in?</td>
          <td>{{ isLoggedIn }}</td>
        </tr>
        <tr>
          <td>Token UUID</td>
          <td>{{ token }}</td>
        </tr>
      </table>
      <button @click="check">Update</button>
    </section>
  
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      NavBar
    },
    props: {
    msg: String
    },
    data() {
      return {
        username: "",
        password: "",
        isLoggedIn: false,
        token: ""
      }
    },
    methods: {
      login: function () {
        var component = this
        let options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: component.username,
            password: component.password
          })
        }
        fetch('/api/login', options)
          .then((response) => { 
            return response.json() 
          })
          .then((data) => { 
            component.isLoggedIn = true
            component.token = data.token
          })
          .catch((error) => { 
            console.log(error)
            component.isLoggedIn = false
          })
      },
      check: function() {
        var component = this
        let options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: component.token
          })
        }
        fetch('/api/login/check', options)
          .then((response) => { 
            return response.json() 
          })
          .then((data) => { 
            component.isLoggedIn = data.isLoggedIn
          })
      }
  }
}
  </script>
  
  
<style scoped lang="scss">
.login {
  form {
    width: 50%;
    margin: auto;
    text-align: left;

    .innerFrame {
      width: 185px;
      margin: auto;

      label {
        display: block;
      }

      input {
        margin-bottom: 20px;
      }
    }


  }
}

.separator {
  width: 100px;
  margin: 30px auto;
  background-color: #aaa;
  border: 2px solid #aaa;
}

.test {
  width: 185px;
  margin: auto;
  text-align: left;

  table {
    margin-bottom: 20px;
    border-collapse: collapse;

    tr {

      td {
        padding: 5px;
        border: 1px solid black;
      }
    }
  }
}
</style>
