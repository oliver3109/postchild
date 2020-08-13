<template>
  <div class="home">
    <div class="request">
      <div class="title">{{ $t('app.home.request') }}</div>
      <div class="panel">
        <div class="method">
          <div class="label">{{ $t('app.home.method') }}</div>
          <div class="flex">
            <select>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="HEAD">HEAD</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
              <option value="CONNECT">CONNECT</option>
              <option value="OPTIONS">OPTIONS</option>
            </select>
          </div>
        </div>
        <div class="url">
          <div class="label">{{ $t('app.home.url') }}</div>
          <div class="flex">
            <input />
            <button class="send">
              {{ $t('app.home.send') }}<i class="material-icons">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div
        v-for="item in tabs"
        :key="item.title"
        :class="{ item: true, 'item--active': item.active }"
        @click="onClickTab(item.title)"
      >
        {{ $t('app.home.' + item.title) }}
      </div>
    </div>

    <div v-show="tab === 'parameter'" class="parameters">
      <div class="title">{{ $t('app.home.parameter') }}</div>
      <div class="panel">
        <div v-if="parameters.length > 0" class="parameters__list">
          <div class="parameters__list__header">
            <div class="parameters__list__header__title">
              {{ $t('app.home.parameterList') }}
            </div>
            <i class="material-icons" @click="onClickDeleteAllParameter">
              clear_all
            </i>
          </div>
          <div
            v-for="(item, index) in parameters"
            :key="index"
            class="parameters__list__item"
          >
            <input class="key" :placeholder="'parameter ' + (index + 1)" />
            <input class="value" :placeholder="'value ' + (index + 1)" />
            <select class="type">
              <option value="Query">Query</option>
              <option value="Path">Path</option>
            </select>
            <i class="material-icons" @click="onClickDeleteParameter(index)">
              delete
            </i>
          </div>
        </div>
        <div class="add" @click="onClickAddParameter">
          <i class="material-icons">add</i> {{ $t('app.home.add') }}
        </div>
      </div>
    </div>

    <div v-show="tab === 'header'" class="header">
      <div class="title">{{ $t('app.home.header') }}</div>
      <div class="panel">
        <div v-if="headers.length > 0" class="parameters__list">
          <div class="parameters__list__header">
            <div class="parameters__list__header__title">
              {{ $t('app.home.headerList') }}
            </div>
            <i class="material-icons" @click="onClickDeleteAllHeader">
              clear_all
            </i>
          </div>
          <div
            v-for="(item, index) in headers"
            :key="index"
            class="parameters__list__item"
          >
            <input class="key" :placeholder="'header ' + (index + 1)" />
            <input class="value" :placeholder="'value ' + (index + 1)" />
            <i class="material-icons" @click="onClickDeleteHeader(index)">
              delete
            </i>
          </div>
        </div>
        <div class="add" @click="onClickAddHeader">
          <i class="material-icons">add</i> {{ $t('app.home.add') }}
        </div>
      </div>
    </div>

    <div class="reponse">
      <div class="title">{{ $t('app.home.response') }}</div>
      <div class="panel">
        <div class="status">{{ $t('app.home.statusCode') }}</div>
        <div class="json">({{ $t('app.home.waiting') }})</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'parameter',
      tabs: [
        { title: 'parameter', active: true },
        { title: 'header', active: false },
      ],
      parameters: [],
      headers: [],
    }
  },
  methods: {
    onClickTab(title) {
      this.tab = title
      this.tabs.map((item, index) => {
        if (item.title === title) {
          this.$set(this.tabs[index], 'active', true)
        } else {
          this.$set(this.tabs[index], 'active', false)
        }
      })
    },

    onClickAddParameter() {
      this.parameters.push({
        key: undefined,
        value: undefined,
        type: undefined,
      })
    },
    onClickDeleteParameter(index) {
      this.parameters.splice(index, 1)
    },
    onClickDeleteAllParameter() {
      this.parameters = []
    },

    onClickAddHeader() {
      this.headers.push({
        key: undefined,
        value: undefined,
      })
    },
    onClickDeleteHeader(index) {
      this.headers.splice(index, 1)
    },
    onClickDeleteAllHeader() {
      this.headers = []
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 20px;

  .request {
    font-size: 16px;
    position: relative;
    .panel {
      background-color: $theme-color-05;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 25px 13px;
    }
    .title {
      margin-left: 13px;
      color: #2c40d8;
      font-size: 14px;
      font-weight: 900;
    }
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
          margin-left: 10px;
          flex-grow: 4;
        }
        i {
          margin-left: 15px;
          margin-right: 5px;
          font-size: 32px;
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
    .panel {
      background-color: $theme-color-05;
      border-radius: 10px;
      padding: 25px 13px;
    }
    .title {
      margin-left: 13px;
      color: #742cd8;
      font-size: 14px;
      font-weight: bolder;
    }
    .status {
      font-size: 15px;
      color: #dcdcdc;
    }
    .json {
      margin-top: 5px;
      padding: 10px;
      border-radius: 10px;
      background-color: rgba($color: #000, $alpha: 0.2);
      color: $theme-color-06;
    }
  }
}
</style>
