import * as types from './mutation-types'

export const newTask = ({ commit }, description) => {
  commit(types.NEW_TASK, {description})
}

export const updateTask = ({ commit }, task) => {
  commit(types.UPDATE_TASK, {task})
}
