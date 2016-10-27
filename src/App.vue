<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <new-task></new-task>
      </div>
      <div class="col-md-10">
        <column v-for="column in columns" :name="column.name"></column>
      </div>
    </div>
  </div>
</template>

<script>
import Column from './components/Column'
import NewTask from './components/NewTask'
export default {
  data () {
    return {
      columns: [
          {name: 'To Do'},
          {name: 'Doing'},
          {name: 'Done'}
      ]
    }
  },
  components: { Column, NewTask }
}
</script>

<style lang="css">
body {
  margin-top: 20px
}
</style>
