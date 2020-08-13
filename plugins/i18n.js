// src/plugins/vuetify.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    app: {
      navigation: {
        home: 'Home',
        reaitime: 'Reaitime',
      },
      home: {
        request: 'Request',
        method: 'Method',
        url: 'URL',
        send: 'Send',
        parameter: 'Parameter',
        parameterList: 'Parameter List',
        add: 'Add new',
        header: 'Header',
        headerList: 'Header List',
        response: 'Response',
        statusCode: 'Status',
        waiting: 'waiting to send request',
      },
    },
  },
  zhHans: {
    app: {
      navigation: {
        home: '首页',
        reaitime: '长链接',
      },
      home: {
        request: '请求',
        method: '方法',
        url: '地址',
        send: '发送',
        parameter: '参数',
        parameterList: '参数列表',
        add: '新增',
        header: '请求头',
        headerList: '请求头列表',
        response: '响应',
        statusCode: '状态码',
        waiting: '正在等待发送请求',
      },
    },
  },
}

let i18n = null

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  i18n = new VueI18n({
    locale: store.state.locale, // set locale
    fallbackLocale: 'zhHans',
    messages, // set locale messages
  })
}

Vue.prototype.$t = (key, ...params) => i18n.t(key, params)
Vue.prototype.$setLang = (lang) => {
  i18n.locale = lang
}
