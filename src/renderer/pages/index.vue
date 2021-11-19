<template>
  <!-- REST API -->
  <div class="rest-api">
    <!-- 请求头 -->
    <div class="request-line">
      <!-- 请求方法 + 请求地址 -->
      <a-input-group class="left" compact>
        <a-select v-model="request.method">
          <a-select-option value="GET">GET</a-select-option>
          <a-select-option value="POST">POST</a-select-option>
          <a-select-option value="PUT">PUT</a-select-option>
          <a-select-option value="PATCH">PATCH</a-select-option>
          <a-select-option value="DELETE">DELETE</a-select-option>
          <a-select-option value="HEAD">HEAD</a-select-option>
          <a-select-option value="CONNECT">CONNECT</a-select-option>
        </a-select>
        <a-input v-model="request.url" />
      </a-input-group>
      <!-- 提交按钮 -->
      <a-button class="submit" type="primary" :loading="loading">
        发送
      </a-button>
    </div>
    <!-- 请求体 -->
    <div class="request-body">
      <a-tabs default-active-key="1" @change="onRequestBodyTabChange">
        <a-tab-pane key="1" tab="参数" force-render>
          <RequestParams></RequestParams>
        </a-tab-pane>
        <a-tab-pane key="2" tab="请求体" force-render>
          <div class="content-type">
            <div class="top-bar">
              <div class="title">内容类型</div>
              <div class="right">
                <a-dropdown :trigger="['click']">
                  <div style="cursor: pointer">
                    {{ request.contentType }} <a-icon type="down" />
                  </div>
                  <a-menu slot="overlay" @click="onContentTypeChange">
                    <a-menu-item key="无"> 无 </a-menu-item>
                    <a-menu-item key="application/json">
                      application/json
                    </a-menu-item>
                    <a-menu-item key="application/ld+json">
                      application/ld+json
                    </a-menu-item>
                    <a-menu-item key="application/hal+json">
                      application/hal+json
                    </a-menu-item>
                    <a-menu-item key="application/vnd.api+json">
                      application/vnd.api+json
                    </a-menu-item>
                    <a-menu-item key="application/xml">
                      application/xml
                    </a-menu-item>
                    <a-menu-item key="application/x-www-form-urlencoded">
                      application/x-www-form-urlencoded
                    </a-menu-item>
                    <a-menu-item key="multipart/form-data">
                      multipart/form-data
                    </a-menu-item>
                    <a-menu-item key="text/html">text/html</a-menu-item>
                    <a-menu-item key="text/plain">text/plain</a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>

            <RequestBody :mode="request.contentType"></RequestBody>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="请求头" force-render>
          <RequestHeaders></RequestHeaders>
        </a-tab-pane>
        <a-tab-pane key="4" tab="授权" force-render>
          <div class="content-type">
            <div class="top-bar">
              <div class="title">授权类型</div>
              <div class="right">
                <a-dropdown :trigger="['click']">
                  <div style="cursor: pointer">
                    {{ request.contentType }} <a-icon type="down" />
                  </div>
                  <a-menu slot="overlay" @click="onContentTypeChange">
                    <a-menu-item key="无">无</a-menu-item>
                    <a-menu-item key="Basic Auth">Basic Auth</a-menu-item>
                    <a-menu-item key="Authorization Token"
                      >Authorization Token</a-menu-item
                    >
                    <a-menu-item key="OAuth 2.0">OAuth 2.0</a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>

            <!-- TODO: 在此插入授权组建 -->
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <!-- 请求响应 -->
    <div class="request-response">
      <div class="status-line">
        <div class="item">
          <span class="label">状态:</span>
          <span class="value">200</span>
        </div>
        <div class="item">
          <span class="label">时间:</span>
          <span class="value">323ms</span>
        </div>
        <div class="item">
          <span class="label">大小:</span>
          <span class="value">980 B</span>
        </div>
      </div>

      <a-tabs default-active-key="1" @change="onRequestResponseTabChange">
        <a-tab-pane key="1" tab="JSON">
          <ResponseBody></ResponseBody>
        </a-tab-pane>
        <a-tab-pane key="2" tab="响应头"> </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

import RequestBody from "~/components/http/RequestBody.vue";
import ResponseBody from "~/components/http/ResponseBody.vue";

import RequestParams from "~/components/http/RequestParams.vue";
import RequestHeaders from "~/components/http/RequestHeaders.vue";

@Component({
  components: { RequestBody, ResponseBody, RequestParams, RequestHeaders },
})
export default class RestApi extends Vue {
  // 加载
  loading = false;

  // 请求
  request = {
    method: "GET",
    url: "https://echo.hoppscotch.io",
    contentType: "无",
    queryParams: [{ key: "", value: "" }],
  };

  // 删除所有查询参数事件
  onClearAllQueryParams() {
    const { queryParams } = this.request;
    queryParams.splice(1, queryParams.length);
    this.$set(this.request, "queryParams", queryParams);
  }

  // 删除查询参数事件
  onRemoveQueryParams(index) {
    const { queryParams } = this.request;
    queryParams.splice(index, 1);
    this.$set(this.request, "queryParams", queryParams);
  }

  // 新增查询参数
  onAddQueryParam() {
    const { queryParams } = this.request;
    queryParams.push({ key: "", value: "" });
    this.$set(this.request, "queryParams", queryParams);
  }

  // 请求体-内容类型切换事件
  onContentTypeChange(event) {
    this.$set(this.request, "contentType", event.key);
  }

  onInput(event) {
    console.log(event);
  }

  onRequestBodyTabChange(event) {
    console.log(event);
  }

  onRequestResponseTabChange(event) {
    console.log(event);
  }
}
</script>

<style lang="scss" scoped>
.ant-input-group {
  display: flex !important;
}

.rest-api {
  padding: 15px 13px;
  // 请求行
  .request-line {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .left {
      display: flex !important;
      margin-right: 10px;

      .ant-select {
        width: 120px;
      }
      .ant-input {
        flex: 1;
      }
    }
    .submit {
    }
  }

  // 请求体
  .request-body {
    .query-param {
      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .left {
          .title {
            color: #7d7d7d;
          }
        }
        .right {
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        .row {
          margin-bottom: 6px;
        }
      }
    }
    .content-type {
      .top-bar {
        height: 32px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title {
          color: #7d7d7d;
          margin-right: 20px;
        }
        .right {
        }
      }
    }
  }

  // 请求响应
  .request-response {
    margin-top: 20px;
    .status-line {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item {
        margin-right: 18px;
        .label {
        }
        .value {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
