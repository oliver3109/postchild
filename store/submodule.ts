import { getterTree, mutationTree, actionTree } from 'typed-vuex'

import { store } from '.'

export const namespaced = true

export const state = () => ({
  firstName: '',
  lastName: '',
})

type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  fullName: (state: RootState) => state.firstName + ' ' + state.lastName,
})

export const mutations = mutationTree(state, {
  setFirstName(state, newValue: string) {
    state.firstName = newValue
  },
  setLastName(state, newValue: string) {
    state.lastName = newValue
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    initialise({ commit }) {
      commit('setFirstName', store.email)
      commit('setLastName', 'Baker')
    },
    setName({ commit }, newName: string) {
      const names = newName.split(' ')
      commit('setFirstName', names[0])
      if (names.length > 1) commit('setLastName', names[1])
    },
  }
)
