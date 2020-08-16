export const state = () => ({
  locales: ['zhHans', 'en'],
  locale: 'zhHans',
  historys: [],
})

export const mutations = {
  /**
   * set language
   * @param {*} state state context
   * @param {*} locale data
   */
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  /**
   * add a new history record
   * @param {*} state state context
   * @param {*} data history record
   */
  addHistory(state, data) {
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
}
