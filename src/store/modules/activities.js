import * as types from '../mutation-types'

// initial state
const state = {
  tasks: []
}

// mutations
const mutations = {
  [types.NEW_TASK] (state, { description }) {
    let task = {
      description: description,
      column: 'To Do'
    }
    state.tasks.push(task)
  },
  [types.UPDATE_TASK] (state, { task }) {
    let index = state.tasks.indexOf(task)
    state.tasks[index] = task
  }
}

export default {
  state,
  mutations
}
