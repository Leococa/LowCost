<template>
  <!-- <h1>Test</h1> -->
  <div class="budget-div">Total : ${{ budgetNumber }}</div>
  <!-- <div class="test">Result : $</div> -->
</template>

<script>
  import TotalExpenses from "@/components/TotalExpenses.vue"


  export default {
    props: {
      budgetNumber: Number
    }
  }
</script>

<style>
.budget-div{
    border: 2px solid rgb(56, 55, 55);
    width : 7%;
    margin-left: 53.8%;
    display: flex;
    padding-left: 0.2%;
    position: center;
}
</style>