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
            <button class="send">{{ $t('app.home.send') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="item item--active">{{ $t('app.home.parameter') }}</div>
      <div class="item">{{ $t('app.home.header') }}</div>
    </div>
    <div class="parameters">
      <div class="title">{{ $t('app.home.parameter') }}</div>
      <div class="panel">
        <div class="add">
          {{ $t('app.home.add') }}
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
  components: {},
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

  .parameters {
    margin-top: 20px;
    .panel {
      background-color: $theme-color-05;
      border-radius: 10px;
      display: flex;
      align-items: center;
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
