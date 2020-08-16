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
        chooseLanguage: 'Choose Language',
      },
      home: {
        request: 'Request',
        method: 'Method',
        url: 'URL',
        contentType: 'Content Type',
        rawRequestBody: 'Raw Request Body',
        send: 'Send',
        parameter: 'Parameter',
        parameterList: 'Parameter List',
        add: 'Add new',
        header: 'Header',
        headerList: 'Header List',
        response: 'Response',
        statusCode: 'Status',
        waiting: 'waiting to send request',
        json: 'JSON',
        headers: 'Headers',
        clear: 'Clear',
        delete: 'Delete',
        copyResponse: 'Copy Response',
        history: 'History',
        noHistory: 'History is empty',
        clearAll: 'Clear All',
      },
    },
  },
  zhHans: {
    app: {
      navigation: {
        home: '首页',
        reaitime: '长链接',
        chooseLanguage: '选择语言',
      },
      home: {
        request: '请求',
        method: '方法',
        url: '地址',
        contentType: '内容类型',
        rawRequestBody: 'raw请求主体',
        send: '发送',
        parameter: '参数',
        parameterList: '参数列表',
        add: '新增',
        header: '请求头',
        headerList: '请求头列表',
        response: '响应',
        statusCode: '状态码',
        waiting: '正在等待发送请求',
        json: 'JSON',
        headers: 'Headers',
        clear: '清空',
        delete: '删除',
        copyResponse: '复制结果',
        history: '历史记录',
        noHistory: '暂无记录',
        clearAll: '清空所有',
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
