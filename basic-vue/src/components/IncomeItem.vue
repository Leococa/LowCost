<template>
  <div class="income-item">
    <div class="removeItem" @click="removeItem">X</div>
    <div class="date">{{income.fancyDate}}</div>
    <div class="desc">{{income.desc}}</div>
    <div class="type">{{income.type}}</div>
    <div class="price">${{income.value}}</div>
  </div>
</template>

<script>
  export default {
    name: 'IncomeItem',
    props : {
      income : Object
    },
    data() {
      return {}
    },
    methods: {
      removeItem () {
        this.$emit('remove', this.income.id);
      }
    }
  }
</script>

<style>
  .income-item {
    position: relative;
    display: flex;
    padding: 10px 10px 10px 0px;
    background-color: #FFF;
    border-collapse: collapse;
    margin-left: 5%;
    margin-top:-0.2%;
    width: 50%;
    border: 2px solid rgb(56, 55, 55);
  }

  .removeItem {
    color: #EF2D2D;
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    margin: 0 15px;
    cursor: pointer;
  }
  .desc {
    color: #666;
    flex: 1 1 100%;
    font-size: 15px;
  }
  .type {
    color: #666;
    flex: 1 1 100%;
    font-size: 15px;
  }
  .price {
    color: #666;
    min-width: 100px;
    font-size: 15px;
  }
  .date {
    color: #666;
    text-align: right;
    font-size: 15px;
  }

</style>