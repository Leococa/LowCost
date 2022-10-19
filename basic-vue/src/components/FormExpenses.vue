<template>
  <form @submit.prevent="formHandler">
    <table class="budget-tracker">
      <thead class="up">
          <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount (CAD$)</th>
              <th></th>
          </tr>
      </thead>
      <tr>
        <td>
          <input type="date" class="input input-date" placeholder="Date..." v-model="formData.date"/>
        </td>
        <td>
          <input type="text" class="input input-description" placeholder="Description..." v-model="formData.desc"/>
        </td>
        <td>
          <select class="input input-type" v-model="formData.type">
            <option v-for="item in typeExpenses" :key="item.id">{{item.types}}</option>
          </select>
        </td>
        <td>
          <input type="number" class="input input-amount" placeholder="Value..." v-model="formData.value"/>
        </td>
        <td>
          <input type="submit" class="new-entry" value="New Entry" />
        </td>
      </tr>
    </table>
  </form>
  
  
</template>

<script>
export default {
  data() {
    return {
      typeExpenses: [],
      formData: {
        date: null,
        desc : null,
        type: null,
        value: null
      }
    }
  },
  // props:{  
  //   state:Object
  // },
  methods:{
    formHandler () {
      this.$emit("add-income", {
        date: this.formData.date,
        desc: this.formData.desc,
        type: this.formData.type,
        value: this.formData.value
      });

      this.formData.date = null;
      this.formData.desc = null;
      this.formData.type = null;
      this.formData.value = null;
    }
  },
  beforeMount() {
    var thisComponent = this
    fetch('/api/typeExpenses').then(function (response) {
      return response.json()
    }).then(function (data) {
      thisComponent.typeExpenses = data
    })
  }
}
</script>

<style>
.new-entry {
  background-color: #4CAF50; /* Green */
  border: none;
  color: rgb(41, 44, 63);
  padding: 12px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #a3bfdb;
  border: 2px solid #555555;
}

.new-entry:hover {
  background-color: #555555;
  color: white;
}

</style>