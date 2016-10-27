<template lang="html">
  <div class="panel panel-info">
    <div class="panel-body" @click="edit()">
      <span v-if="!modify" >{{task.description}}</span>
    </div>
    <div class="form-group" v-if="modify">
      <textarea class="form-control" v-model="task.description"></textarea>
      <button type="button" class="btn btn-primary" @click="save()">Save</button>
    </div>
    <div class="panel-footer">
      <button type="button" class="btn btn-default" @click="change()">{{ nextColumn }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      modify: false
    }
  },
  props: ['task'],
  computed: {
    nextColumn () {
      if (this.task.column === 'To Do') {
        return 'Doing'
      }
      if (this.task.column === 'Doing') {
        return 'Done'
      }
      if (this.task.column === 'Done') {
        return 'End'
      }
    }
  },
  methods: {
    ...mapActions(['updateTask']),
    edit () {
      this.modify = !this.modify
    },
    save () {
      this.modify = false
      this.updateTask(this.task)
    },
    change () {
      this.task.column = this.nextColumn
      this.updateTask(this.task)
    }
  }
}
</script>

<style lang="css">
</style>
