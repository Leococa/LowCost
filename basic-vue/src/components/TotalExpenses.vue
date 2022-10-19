<template>
    
    <div class="total-income">Total : ${{ totalIncome }}</div>

</template>

<script>
export default {
props: {
totalIncome: Number
}
}
</script>

<style>
.total-income{
    border: 2px solid rgb(56, 55, 55);
    width : 7%;
    margin-left: 53.8%;
    display: flex;
    padding-left: 0.2%;
    position: center;
}
</style>