import Vue from 'vue'
import Vuex from 'vuex'
import { mutationTree, actionTree } from 'typed-vuex'
import { getAccessorType } from 'nuxt-typed-vuex'

import * as submodule from './submodule'

export const state = () => ({
  locales: ['zhHans', 'en'],
  locale: 'zhHans',
  historys: [],
})

type RootState = ReturnType<typeof state>

export const getters = {
  locale: (state: RootState) => state.locale,
  locales: (state: RootState) => state.locales,
  historys: (state: RootState) => state.historys,
}

export const mutations = mutationTree(state, {
  /**
   * set language
   * @param {*} state state context
   * @param {*} locale data
   */
  setLang(state: any, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },

  /**
   * add a new history record
   * @param {*} state state context
   * @param {*} data history record
   */
  addHistory(state: any, data: any) {
    state.historys.push(data)
  },

  /**
   * delete all history record
   * @param {*} state state context
   * @param {*} data history record
   */
  clearAllHistory(state) {
    state.historys = []
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    clearAllHistory({ commit }) {
      commit('clearAllHistory')
    },
  }
)

export const store = getAccessorType(
  new Vuex.Store({
    state,
    mutations,
    actions,
    modules: { submodule },
  })
)

Vue.prototype.$store = store
