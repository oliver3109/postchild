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
            <div
              v-tooltip.bottom="'GitHub'"
              class="app__contanier__right__header__tool__item"
            >
              <a
                href="https://github.com/OLIVERgZzy/postchild"
                target="_blank"
                aria-label="GitHub"
                rel="noopener"
                style="width: 100%; text-align: center;"
              >
                <svg
                  data-v-9ec0375c=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="material-icons"
                >
                  <path
                    data-v-9ec0375c=""
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
            <div
              v-tooltip.bottom="$t('app.navigation.chooseLanguage')"
              class="app__contanier__right__header__tool__item"
            >
              <DropDownMenu
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
          <div>v0.0.3</div>
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
        height: 77px;
        &__title {
          font-size: 32px;
          font-weight: 900;
          color: $theme-color-01;
          margin-left: 20px;
        }
        &__tool {
          margin-right: 20px;
          display: flex;
          align-items: center;
          &__item {
            width: 60px;
            cursor: pointer;
            display: flex;
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

@media only screen and (max-width: 768px) {
  .app {
    &__contanier {
      &__left {
        display: none;
      }
    }
  }
}
</style>
