<template lang="html">
  <div class="col-md-4">
    <div>{{name}}</div>
    <card v-for="task in filteredTasks" :task="task"></card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card'
export default {
  props: ['name'],
  computed: {
    ...mapGetters(
      {
        tasks: 'allTasks'
      }
    ),
    filteredTasks () {
      let name = this.name
      let filtered = []
      this.tasks.forEach(task => {
        if (task.column === name) {
          filtered.push(task)
        }
      })
      return filtered
    }
  },
  components: { Card }
}
</script>

<style lang="css">
</style>
