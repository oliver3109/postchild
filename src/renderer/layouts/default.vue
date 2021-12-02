<template>
  <a-layout>
    <a-layout-header>
      <div class="left">
        <div class="logo">POSTCHILD</div>
        <a href="https://github.com/OLIVERgZzy/postchild/stargazers"
          ><img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/OLIVERgZzy/postchild?style=social"
        /></a>
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
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>

<style lang="scss">
.ant-layout {
  height: 100vh;
  .ant-layout-header {
    height: 45px;
    background: #fff;
    border-bottom: 0.5px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    line-height: none !important;
    .left {
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .logo {
        font-weight: bolder;
        margin-right: 10px;
        height: 45px;
        line-height: 45px;
        cursor: pointer;
      }
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
      cursor: pointer;
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
