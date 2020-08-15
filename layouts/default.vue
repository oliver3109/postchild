<template>
  <div class="app">
    <div class="app__contanier">
      <div class="app__contanier__left">
        <div
          v-tooltip.right="$t('app.navigation.home')"
          class="app__contanier__left__item"
        >
          {{ $t('app.navigation.home') }}
        </div>
        <!-- <div class="app__contanier__left__item">
          {{ $t('app.navigation.reaitime') }}
        </div> -->
      </div>
      <div class="app__contanier__right">
        <div class="app__contanier__right__header">
          <div class="app__contanier__right__header__title">Postchild</div>
          <div class="app__contanier__right__header__tool">
            <div class="app__contanier__right__header__tool__item">
              <DropDownMenu
                v-tooltip.bottom="$t('app.navigation.chooseLanguage')"
                :options="[
                  { value: 'zhHans', label: '简体中文' },
                  { value: 'en', label: 'English' },
                ]"
                @click="onClickLanguage"
              >
                <i class="material-icons">translate</i>
              </DropDownMenu>
            </div>
          </div>
        </div>
        <div class="app__contanier__right__content">
          <nuxt />
        </div>
        <footer class="app__contanier__right__footer">
          <div>v0.0.2</div>
          <div style="margin-left: 30px;">Powered by Oliver</div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLanguage(item) {
      this.$setLang(item.value)
      this.$store.commit('setLang', item.value)
    },
  },
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
* {
  &::selection {
    color: #000000;
    background-color: $theme-color-04;
  }
}
.app {
  background-color: rgba($theme-color-05, 0.8);
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  &__contanier {
    display: flex;
    &__left {
      min-height: 100vh;
      min-width: 80px;
      background-color: $theme-color-05;
      text-align: center;
      padding: 10px 0px;
      &__item {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        background-color: $theme-color-02;
        margin: 0 auto 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 14px;
      }
    }
    &__right {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 67px;
        &__title {
          font-size: 32px;
          font-weight: 900;
          color: $theme-color-01;
          margin-left: 20px;
        }
        &__tool {
          margin-right: 20px;
          &__item {
            height: 67px;
            line-height: 67px;
            display: flex;
            align-items: center;
          }
          i {
            font-size: 26px;
          }
        }
      }
      &__content {
        padding: 20px;
        height: 100%;
      }
      &__footer {
        display: flex;
        align-items: center;
        line-height: 70px;
        margin-left: 50px;
        color: $theme-color-03;
      }
    }
  }
}

.flex {
  display: flex;
  align-items: center;
}

input {
  line-height: 31px !important;
  height: 31px !important;
}

select,
input {
  line-height: 35px;
  height: 35px;
  outline: none;
  border: 2px solid $theme-color-10;
  background-color: $theme-color-10;
  border-radius: 7px;
  padding: 0px 10px;
  font-size: 16px;
  color: #ffffff;
  &:hover,
  &:focus {
    border: 2px solid $theme-color-01;
  }
  &::selection {
    color: #000000;
    background-color: $theme-color-04;
  }
}

button {
  border: 2px solid $theme-color-01;
  outline: none;
  border-radius: 7px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid #fff;
  }
}
</style>
