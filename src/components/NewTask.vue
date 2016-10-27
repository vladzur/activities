<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      Nueva tarea
    </div>
    <div class="panel-body">
      <div class="form-group">
        <textarea v-model="description" class="form-control"></textarea>
      </div>
    </div>
    <div class="panel-footer">
      <button type="button" class="btn btn-default" @click="save()">Add</button>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      description: ''
    }
  },
  methods: {
    ...mapActions(['newTask']),
    save () {
      this.newTask(this.description)
      this.description = ''
    }
  }
}
</script>

<style lang="css">
</style>
