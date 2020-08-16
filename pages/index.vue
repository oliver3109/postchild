<template>
  <div class="home">
    <div class="home__left">
      <!-- base info of http request -->
      <div class="request">
        <div class="title">{{ $t('app.home.request') }}</div>
        <div class="panel">
          <div class="row1">
            <div class="method">
              <div class="label">{{ $t('app.home.method') }}</div>
              <div class="flex">
                <select v-model="method">
                  <option value="GET">GET</option>
                  <option value="HEAD">HEAD</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                  <!-- <option value="CONNECT">CONNECT</option> -->
                  <option value="OPTIONS">OPTIONS</option>
                  <option value="PATCH">PATCH</option>
                  <!-- <option value="TRACE">TRACE</option> -->
                </select>
              </div>
            </div>
            <div class="url">
              <div class="label">{{ $t('app.home.url') }}</div>
              <div class="flex">
                <input v-model="url" type="text" />
                <button class="send" @click="onClickSend">
                  {{ isFetching ? 'Fetching...' : $t('app.home.send')
                  }}<i v-if="!isFetching" class="material-icons">send</i>
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="
              method === 'POST' ||
              method === 'PUT' ||
              method === 'DELETE' ||
              method === 'PATCH'
            "
            class="row2"
          >
            <div class="content-type-title">
              {{ $t('app.home.contentType') }}
            </div>
            <div class="content-type-input">
              <input v-model="contentType" type="text" list="contentTypeList" />
              <datalist id="contentTypeList">
                <option value="application/json" />
                <option value="application/vnd.api+json" />
                <option value="application/hal+json" />
                <option value="application/xml" />
                <option value="application/x-www-form-urlencoded" />
                <option value="text/html" />
              </datalist>
            </div>
          </div>
          <div
            v-if="
              method === 'POST' ||
              method === 'PUT' ||
              method === 'DELETE' ||
              method === 'PATCH'
            "
            class="row3"
          >
            <div class="raw-request-body-title">
              {{ $t('app.home.rawRequestBody') }}
            </div>
            <div class="raw-request-body-code-editer">
              <code-editor v-model="rawRequestBody" type="js" />
            </div>
          </div>
        </div>
      </div>

      <!-- switch tab of http request data -->
      <div class="request-data-tabs">
        <div
          v-for="item in requestDataTabs"
          :key="item.title"
          :class="{ item: true, 'item--active': item.active }"
          @click="onClickRequestDataTab(item.title)"
        >
          {{ $t('app.home.' + item.title) }}
        </div>
      </div>

      <!-- http parameter config -->
      <div v-show="requestDataTab === 'parameter'" class="parameters">
        <div class="title">{{ $t('app.home.parameter') }}</div>
        <div class="panel">
          <div v-if="parameters.length > 0" class="parameters__list">
            <div class="parameters__list__header">
              <div class="parameters__list__header__title">
                {{ $t('app.home.parameterList') }}
              </div>
              <i
                v-tooltip.bottom="$t('app.home.clear')"
                class="material-icons"
                @click="onClickDeleteAllParameter"
              >
                clear_all
              </i>
            </div>
            <div
              v-for="(item, index) in parameters"
              :key="index"
              class="parameters__list__item"
            >
              <input
                v-model="parameters[index].key"
                class="key"
                :placeholder="'parameter ' + (index + 1)"
              />
              <input
                v-model="parameters[index].value"
                class="value"
                :placeholder="'value ' + (index + 1)"
              />
              <select v-model="parameters[index].type" class="type">
                <option value="query">Query</option>
                <!-- <option value="path">Path</option> -->
              </select>
              <i
                v-tooltip.bottom="$t('app.home.delete')"
                class="material-icons"
                @click="onClickDeleteParameter(index)"
              >
                delete
              </i>
            </div>
          </div>
          <div class="add" @click="onClickAddParameter">
            <i class="material-icons">add</i> {{ $t('app.home.add') }}
          </div>
        </div>
      </div>

      <!-- http header config -->
      <div v-show="requestDataTab === 'header'" class="header">
        <div class="title">{{ $t('app.home.header') }}</div>
        <div class="panel">
          <div v-if="headers.length > 0" class="parameters__list">
            <div class="parameters__list__header">
              <div class="parameters__list__header__title">
                {{ $t('app.home.headerList') }}
              </div>
              <i
                v-tooltip.bottom="$t('app.home.clear')"
                class="material-icons"
                @click="onClickDeleteAllHeader"
              >
                clear_all
              </i>
            </div>
            <div
              v-for="(item, index) in headers"
              :key="index"
              class="parameters__list__item"
            >
              <input
                v-model="headers[index].key"
                class="key"
                :placeholder="'header ' + (index + 1)"
              />
              <input
                v-model="headers[index].value"
                class="value"
                :placeholder="'value ' + (index + 1)"
              />
              <i
                v-tooltip.bottom="$t('app.home.delete')"
                class="material-icons"
                @click="onClickDeleteHeader(index)"
              >
                delete
              </i>
            </div>
          </div>
          <div class="add" @click="onClickAddHeader">
            <i class="material-icons">add</i> {{ $t('app.home.add') }}
          </div>
        </div>
      </div>

      <!-- http reponse result -->
      <div class="reponse">
        <div class="title">{{ $t('app.home.response') }}</div>
        <div class="panel">
          <div class="status">{{ $t('app.home.statusCode') }}</div>
          <div
            v-if="!isFetching"
            class="status-value"
            :class="{
              'status-value--ok': statusCode && statusCode == 200,
              'status-value--fail': statusCode && statusCode !== 200,
            }"
          >
            {{ statusCode || '(' + $t('app.home.waiting') + ')' }}
          </div>
          <div v-if="isFetching" class="status-value">
            Fetching ...
          </div>
          <div v-if="response" class="tabs">
            <div
              v-for="item in responseUiTabs"
              :key="item.title"
              :class="{ item: true, 'item--active': item.active }"
              @click="onClickResponseUiTab(item.title)"
            >
              {{ $t('app.home.' + item.title) }}
            </div>
          </div>
          <div v-show="response" class="result">
            <div class="result__header">
              <div class="result__header__title">
                {{ $t('app.home.response') }}
              </div>
              <div class="result__header__tool">
                <i
                  v-tooltip.top="$t('app.home.copyResponse')"
                  v-clipboard="{
                    v: response,
                    duration: 1000,
                    ok: () => {
                      this.$toast.success(`copied to clipboard`, {
                        duration: 3000,
                        icon: 'done',
                        theme: 'bubble',
                      })
                    },
                  }"
                  class="material-icons"
                >
                  content_copy
                </i>
              </div>
            </div>
            <div class="result__view">
              <code-editor ref="ace" v-model="response" readonly />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__right">
      <!-- switch tab of http request data -->
      <div class="request-data-tabs">
        <div
          v-for="item in toolTabs"
          :key="item.title"
          :class="{ item: true, 'item--active': item.active }"
          @click="onClickToolTab(item.title)"
        >
          {{ $t('app.home.' + item.title) }}
        </div>
      </div>

      <div v-if="toolTab === 'history'" class="history">
        <div class="title">{{ $t('app.home.history') }}</div>
        <div class="panel">
          <span v-if="historyList.length == 0" class="no-data">
            <i class="material-icons">schedule</i>{{ $t('app.home.noHistory') }}
          </span>
          <div v-else class="list">
            <div v-for="(item, index) in historyList" :key="index" class="item">
              <div
                class="row1 status"
                :class="{
                  'status--ok': item.status === 200,
                  'status--fail': item.status !== 200,
                }"
              >
                <div class="method">{{ item.method }}</div>
                <div>
                  {{ item.status }}
                </div>
              </div>
              <div class="row2">
                <div class="url">{{ item.url }}</div>
              </div>
            </div>
            <div class="menu">
              <div class="clear-all" @click="$store.commit('clearAllHistory')">
                <i class="material-icons">clear_all</i>
                <span>{{ $t('app.home.clearAll') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { httpRequest } from '../helpers/axios'

export default {
  data() {
    return {
      method: 'GET',
      url: '',
      contentType: 'application/json',
      rawRequestBody: '',
      requestDataTab: 'parameter',
      requestDataTabs: [
        { title: 'parameter', active: true },
        { title: 'header', active: false },
      ],
      parameters: [],
      headers: [],
      responseUiTab: 'json',
      responseUiTabs: [
        { title: 'json', active: true },
        // { title: 'headers', active: false },
      ],
      isFetching: false,
      statusCode: null,
      response: '',
      toolTab: 'history',
      toolTabs: [{ title: 'history', active: true }],
    }
  },
  computed: {
    historyList(v) {
      return this.$store.state.historys
    },
  },
  methods: {
    // switch request data type, parameter or header
    onClickRequestDataTab(title) {
      this.requestDataTab = title
      this.requestDataTabs.map((item, index) => {
        if (item.title === title) {
          this.$set(this.requestDataTabs[index], 'active', true)
        } else {
          this.$set(this.requestDataTabs[index], 'active', false)
        }
      })
    },
    // add a new parameter
    onClickAddParameter() {
      this.parameters.push({
        key: undefined,
        value: undefined,
        type: 'query',
      })
    },
    // delete a parameter
    onClickDeleteParameter(index) {
      this.$toast.error(`Deleted Done`, {
        duration: 3000,
        icon: 'delete',
        theme: 'bubble',
      })
      this.parameters.splice(index, 1)
    },
    // delete all parmeters
    onClickDeleteAllParameter() {
      this.$toast.success(`Cleared`, {
        duration: 3000,
        icon: 'clear_all',
        theme: 'bubble',
      })
      this.parameters = []
    },
    // add a new header
    onClickAddHeader() {
      this.headers.push({
        key: undefined,
        value: undefined,
      })
    },
    // delete a header
    onClickDeleteHeader(index) {
      this.$toast.error(`Deleted Done`, {
        duration: 3000,
        icon: 'delete',
        theme: 'bubble',
      })
      this.headers.splice(index, 1)
    },
    // delete all headers
    onClickDeleteAllHeader() {
      this.$toast.success(`Cleared`, {
        duration: 3000,
        icon: 'clear_all',
        theme: 'bubble',
      })
      this.headers = []
    },
    // switch a response ui display type
    onClickResponseUiTab(title) {
      this.responseUiTab = title
      this.responseUiTabs.map((item, index) => {
        if (item.title === title) {
          this.$set(this.responseUiTabs[index], 'active', true)
        } else {
          this.$set(this.responseUiTabs[index], 'active', false)
        }
      })
    },
    // switch a tool ui display type
    onClickToolTab(title) {
      this.toolTab = title
      this.toolTabs.map((item, index) => {
        if (item.title === title) {
          this.$set(this.toolTabs[index], 'active', true)
        } else {
          this.$set(this.toolTabs[index], 'active', false)
        }
      })
    },
    // send http request and display the response result
    onClickSend() {
      const startTime = new Date().getTime()
      this.$nuxt.$loading.start()
      this.isFetching = true
      const method = this.method
      const url = this.url
      const parameters = this.parameters
      const headers = this.headers
      const contentType = this.contentType
      const rawRequestBody = this.rawRequestBody
        ? JSON.parse(this.rawRequestBody)
        : {}
      httpRequest(method, url, parameters, headers, contentType, rawRequestBody)
        .then((res) => {
          if (res) {
            const contentType = res.headers['content-type']
            const isApplicationJson = contentType.includes('application/json')
            this.statusCode = res.status
            this.response = isApplicationJson
              ? JSON.stringify(res.data, null, 2)
              : res.data
            this.$refs.ace.setMode(isApplicationJson ? 'js' : 'html')
            const endTime = new Date().getTime()
            this.$nuxt.$loading.finish()
            this.isFetching = false
            if (res.status === 200) {
              this.$toast.success(`Successfully in ${endTime - startTime}ms`, {
                duration: 3000,
                icon: 'done',
                theme: 'bubble',
              })
            }
            this.$store.commit('addHistory', {
              method,
              url,
              status: res.status,
            })
          }
        })
        .catch((error) => {
          this.$nuxt.$loading.finish()
          this.$toast.error(`${error} (F12 for Detail)`, {
            duration: 3000,
            icon: 'done',
            theme: 'bubble',
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 20px;
  display: flex;
  &__left {
    flex-grow: 2;
    .request {
      font-size: 16px;
      position: relative;
      .title {
        margin-left: 13px;
        color: #2c40d8;
        font-size: 14px;
        font-weight: 900;
      }
      .panel {
        background-color: $theme-color-05;
        border-radius: 10px;
        padding: 25px 13px;
        .row1 {
          display: flex;
          align-items: center;
          .label {
            color: $theme-color-06;
            margin-bottom: 6px;
          }
          .method {
            flex-grow: 2;
            select {
              flex: 1;
            }
          }
          .url {
            margin-left: 10px;
            flex-grow: 14;
            input {
              flex: 1;
            }
            .send {
              margin-left: 10px;
              width: 100px;
              background-color: $theme-color-01;
              height: 35px;
              line-height: 35px;
              border-radius: 7px;
              font-weight: 900;
              i {
                margin-left: 4px;
                font-size: 20px;
              }
            }
          }
        }
        .row2 {
          margin-top: 10px;
          .content-type-title {
            color: #ededed;
            margin-bottom: 6px;
          }
          .content-type-input {
            display: flex;
            align-items: center;
            input {
              flex: 1;
            }
          }
        }
        .row3 {
          margin-top: 10px;
          .raw-request-body-title {
            color: #ededed;
            margin-bottom: 6px;
          }
        }
      }
    }

    .request-data-tabs {
      margin-top: 20px;
      margin-right: 20px;
      line-height: 35px;
      height: 35px;
      font-size: 16px;
      display: flex;
      justify-content: left;
      align-items: center;
      color: $theme-color-02;
      border-radius: 10px;
      .item {
        margin-right: 5px;
        padding: 3px 10px;
        border-radius: 10px;
        cursor: pointer;
        &--active {
          background-color: rgba($color: $theme-color-05, $alpha: 1);
        }
      }
    }

    .parameters,
    .header {
      margin-top: 20px;
      .panel {
        background-color: $theme-color-05;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 25px 13px;
      }
      .title {
        margin-left: 13px;
        color: #a42cd8;
        font-size: 14px;
        font-weight: 900;
      }
      .add {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
        &:hover {
          color: $theme-color-01;
        }
      }
      &__list {
        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          i {
            margin-right: 5px;
            font-size: 32px;
            cursor: pointer;
            &:hover {
              color: $theme-color-01;
            }
          }
        }
        &__item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          &:last-of-type {
            margin-bottom: 25px;
          }
          .key {
            flex-grow: 6;
          }
          .value {
            flex-grow: 6;
            margin-left: 10px;
          }
          .type {
            flex-grow: 3;
            margin-left: 10px;
          }
          i {
            margin-left: 15px;
            margin-right: 5px;
            font-size: 30px;
            cursor: pointer;
            &:hover {
              color: $theme-color-01;
            }
          }
        }
      }
    }

    .reponse {
      margin-top: 20px;
      .title {
        margin-left: 13px;
        color: #742cd8;
        font-size: 14px;
        font-weight: bolder;
      }
      .status {
        font-size: 15px;
        color: #dcdcdc;
        &-value {
          margin-top: 5px;
          padding: 10px;
          border-radius: 10px;
          background-color: rgba($color: #000, $alpha: 0.2);
          color: $theme-color-06;
          &--ok {
            color: #62ff00;
          }
          &--fail {
            color: #960000;
          }
        }
      }
      .panel {
        background-color: $theme-color-05;
        border-radius: 10px;
        padding: 25px 13px;
        .tabs {
          margin-top: 20px;
          margin-right: 20px;
          line-height: 35px;
          height: 35px;
          font-size: 16px;
          display: flex;
          justify-content: left;
          align-items: center;
          color: $theme-color-02;
          border-radius: 10px;
          .item {
            margin-right: 5px;
            padding: 3px 10px;
            border-radius: 10px;
            cursor: pointer;
            &--active {
              background-color: rgba($color: #000, $alpha: 0.2);
            }
          }
        }
        .result {
          margin: 15px 0;
          &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__title {
              font-size: 15px;
              color: #dcdcdc;
            }
            i {
              cursor: pointer;
              &:hover {
                color: $theme-color-01;
              }
            }
          }
        }
      }
    }
  }
  &__right {
    flex-grow: 1;
    margin-left: 15px;
    .request-data-tabs {
      margin-right: 20px;
      line-height: 35px;
      height: 35px;
      font-size: 16px;
      display: flex;
      justify-content: left;
      align-items: center;
      color: $theme-color-02;
      border-radius: 10px;
      .item {
        margin-right: 5px;
        padding: 3px 10px;
        border-radius: 10px;
        cursor: pointer;
        &--active {
          background-color: rgba($color: $theme-color-05, $alpha: 1);
        }
      }
    }
    .history {
      margin-top: 20px;
      font-size: 16px;
      position: relative;
      .title {
        margin-left: 13px;
        color: $theme-color-06;
        font-size: 14px;
        font-weight: 900;
      }
      .panel {
        background-color: $theme-color-05;
        border-radius: 10px;
        padding: 25px 13px;
        .no-data {
          display: flex;
          align-items: center;
          color: #cdcdcd;
          i {
            margin-right: 5px;
          }
        }
        .list {
          .item {
            margin-top: 10px;
            border-bottom: 0.5px solid;
            border-color: rgba($color: $theme-color-02, $alpha: 0.5);
            color: $theme-color-06;
            &:first-of-type {
              margin-top: 0px;
            }
            .row1,
            .row2 {
              background-color: #000;
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              height: 35px;
              border-radius: 7px;
              padding: 0 5px;
            }
            .row1 {
              justify-content: space-between;
              &.status {
                &--ok {
                  color: #62ff00;
                }
                &--fail {
                  color: #960000;
                }
              }
            }
          }
          .menu {
            margin-top: 15px;
            .clear-all {
              display: flex;
              align-items: center;
              cursor: pointer;
              &:hover {
                color: $theme-color-01;
              }
              span {
                font-size: 16px;
                margin-left: 5px;
                font-weight: 900;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .home {
    flex-wrap: wrap;
    &__left {
      .request {
        .panel {
          .row1 {
            flex-wrap: wrap;
            .method {
              flex-shrink: 1;
              width: 100%;
            }
            .url {
              margin-top: 10px;
              margin-left: 0;
            }
          }
        }
      }
    }
    &__right {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .home {
    &__left {
      .request {
        .panel {
          .row1 {
            flex-wrap: wrap;
            .method {
              flex-shrink: 1;
              width: 100%;
            }
            .url {
              margin-top: 10px;
              margin-left: 0;
              .flex {
                flex-wrap: wrap;
                .send {
                  margin-left: 0;
                  margin-top: 15px;
                  flex-shrink: 1;
                  width: 100%;
                }
              }
            }
          }
        }
      }
      .parameters {
        &__list {
          &__item {
            flex-wrap: wrap;
            .value {
              margin-left: 0;
              margin-top: 10px;
              flex-shrink: 1;
              width: 100%;
            }
            i {
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>
