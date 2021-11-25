<template>
  <a-layout>
    <a-layout-header>
      <div class="left">
        <img class="logo" src="../assets/images/logo.png" alt="" srcset="" />
      </div>
      <div class="right"></div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <div class="route">
          <div><a-icon type="api" style="font-size: 18px" /></div>
          <div>REST</div>
        </div>
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="scss">
.ant-layout {
  height: 100vh;
  .ant-layout-header {
    height: 61px;
    background: #fff;
    border-bottom: 0.5px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    line-height: none !important;
    img {
      height: 55px;
    }
  }
  .ant-layout-sider {
    max-width: 77px !important;
    min-width: 77px !important;
    background: #fff;
    border-right: 0.5px solid #e0e0e0;
    .route {
      height: 76px;
      width: 76px;
      background-color: #eeeeee;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #000;
    }
  }
  .ant-layout-content {
    background: #fff;
  }
  .ant-layout-footer {
    padding: 0 !important;
    max-height: 30px !important;
    min-height: 30px !important;
    background: #fff;
    border-top: 0.5px solid #e0e0e0;
  }
}
</style>
