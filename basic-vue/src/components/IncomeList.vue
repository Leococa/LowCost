<template>
  <div class="income-list">
    <IncomeItem v-for="data in sortedIncome"
      :key ="data.id"
      :income="data"
      @remove="removeItem"/>
  </div>
</template>

<script>
  import IncomeItem from '@/components/IncomeItem.vue';

  export default {
    props: {
      sortedIncome: Array
    },
    setup() {
      return{}
    },
    components: {
      IncomeItem
    },
    methods: {
      removeItem(id) {
        this.$emit('remove', id);
      }
    }
  }
</script>

<style>
  .income-list{
    padding: 2%;
  }
</style>