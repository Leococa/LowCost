<template>
  <div id="app">
    <NavBar />

    <br/>
    <h1>Home Page</h1>
    <hr style="width:20%; margin:auto; height:5%;">

    <router-view/>
    <br/>
    <h3 class="presentation">
        You can put here your expenses info here by giving its date, description, type and how many CAD.
    </h3>
    <FormExpenses @add-income="addIncome"/>
    <IncomeList :sorted-income="sortedIncomeWrapper" @remove="removeItem"/>
    <TotalExpenses :totalIncome="this.totalIncome"/>
   </div>           
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FormExpenses from '@/components/FormExpenses.vue';
import IncomeList from '@/components/IncomeList.vue';
import TotalExpenses from '@/components/TotalExpenses.vue'

import { v4 as uuidv4 } from 'uuid';


export default {
  
  name: 'App',
  data() {
    return{
      income: []
    }
  },
  methods: {
    addIncome (data){
      let d = data.date.split("-");
      let newD = new Date(d[0], d[1], d[2]);

      this.income.push({
        id: uuidv4(),
        date: newD.getTime(),
        desc: data.desc,
        type: data.type,
        value: parseInt(data.value)
      });

      this.income[this.income.length - 1].fancyDate = this.formatedDate(this.income[this.income.length - 1].date)
    },
    sortedIncome() {
      return (this.income).sort((a, b) =>{
        return b.date - a.date;
      });
    },
    formatedDate(d) {
      let date = new Date(d);

      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },
    removeItem(id) {
      this.income.splice(this.income.indexOf(
        this.income.find(function (item) {return item.id == id})),
      1);
    }
  },
  computed: {
    sortedIncomeWrapper() {
      return this.sortedIncome();
    },
    totalIncome() {
      let temp = 0;

      if (this.income.length > 0) {
        for (let i = 0; i < this.income.length; i++) {
          temp += this.income[i].value;
        }

        return temp;
      } else {
        return 0;
      }
    }
  },
  components: {
    IncomeList,
    FormExpenses,
    NavBar,
    TotalExpenses
  }
}
</script>

<style>
    .budget-tracker {
    border-collapse: collapse;
    width: 50%;
    margin-top:3%;
    margin-left: 5%;
    border: 2px solid rgb(56, 55, 55);
  
}

.up{
  background-color: #4b789ca4;
}

.budget-tracker * {
    font-family: sans-serif;
    
}

.budget-tracker th {
    text-align: left;
    padding: 10px 20px;
    border-bottom: 2px solid rgb(56, 55, 55);
}

.budget-tracker td {
    padding: 5px;
}

.input,
.delete-entry {
    height: 30px;
    font-size: 13px;
    padding: 0 10px;
    margin: 0;
    box-sizing: border-box;
}

.input {
    border: 1px solid #dddddd;
    border-radius: 5px;
    outline: none;
}

.input:focus {
    border-color: #bbbbbb;
}

.delete-entry {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    background: none;
    color: red;
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
}

.delete-entry:hover {
    background: rgba(255, 0, 0, 0.1);
}

</style>