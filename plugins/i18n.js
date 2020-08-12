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
        add: 'Add new',
        header: 'Header',
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
        add: '新增',
        header: '请求头',
        response: '响应',
        statusCode: '状态码',
        waiting: '正在等待发送请求',
      },
    },
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.prototype.$t = (key, ...params) => i18n.t(key, params)
