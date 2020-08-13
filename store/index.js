export const state = () => ({
  locales: ['zhHans', 'en'],
  locale: 'zhHans',
})

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
