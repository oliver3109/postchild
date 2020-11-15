<template>
  <div ref="dropDownMenu" class="drop-down-menu" @click.stop="onClick">
    <slot />
    <div v-if="show" id="menus" class="drop-down-menu__options">
      <div
        v-for="item in options"
        :key="item.value"
        class="drop-down-menu__options__item"
        @click="onClickItem(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  props: {
    options: { type: Array, default: () => [] },
  },
  data() {
    return {
      x: 0,
      y: 0,
      show: false,
      rW: 0,
      menusDom: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    onClick() {
      if (this.show) return
      const body = document.body
      const bodyRects = document.body.getClientRects()
      const bodyWidth = bodyRects[0].width

      this.rW = bodyWidth

      const dropDownMenuDom = this.$refs.dropDownMenu
      const dropDownMenuDomRect = dropDownMenuDom.getBoundingClientRect()

      this.show = true
      this.$nextTick(() => {
        const menusDom = this.$el.querySelector('#menus')
        this.menusDom = menusDom
        this.onResize(menusDom)

        // 计算是否距离顶部高度不够
        if (dropDownMenuDomRect.bottom < 300) {
          // 在下方偏移
          this.x = dropDownMenuDomRect.x
          this.y = dropDownMenuDomRect.bottom + 20
          body.appendChild(menusDom)
          menusDom.setAttribute(
            'style',
            `transform:translate3d(${this.x}px, ${this.y}px, 0px);`
          )
        }

        // 计算是否距离底部高度不够
        if (dropDownMenuDomRect.x < 300) {
          // 在上方偏移
          this.x = dropDownMenuDomRect.x
          this.y = dropDownMenuDomRect.y - 20
          body.appendChild(menusDom)
          menusDom.setAttribute(
            'style',
            `transform:translate3d(${this.x}px, ${this.y}px, 0px);`
          )
        }

        // 计算是否距离右边宽度不够
        if (
          menusDom.getClientRects()[0].width + dropDownMenuDomRect.x >
          bodyWidth
        ) {
          // 向左偏移
          this.show = true
          this.x = bodyWidth - menusDom.getClientRects()[0].width - 10
          menusDom.setAttribute(
            'style',
            `transform:translate3d(${this.x}px, ${this.y}px, 0px);`
          )
        }
      })
    },
    onClickItem(item) {
      this.$emit('click', { value: item.value })
    },
    onResize(menusDom) {
      window.onresize = e => {
        const innerWidth = e.currentTarget.innerWidth
        if (this.rW - innerWidth > 0) {
          // 向左偏移
          const { x, y } = this
          menusDom.setAttribute(
            'style',
            `transform:translate3d(${
              x - (this.rW - innerWidth)
            }px, ${y}px, 0px);`
          )
        } else {
          // 向右偏移
          const { x, y } = this
          menusDom.setAttribute(
            'style',
            `transform:translate3d(${
              x + (innerWidth - this.rW)
            }px, ${y}px, 0px);`
          )
        }
      }
    },
    init() {
      document.body.onclick = e => {
        if (this.show) {
          this.show = false
          const menusDom = this.menusDom
          const dropDownMenu = this.$refs.dropDownMenu
          dropDownMenu.appendChild(menusDom)
          e.preventDefault()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.drop-down-menu {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  &__options {
    max-height: 256px;
    overflow: scroll;
    background-color: rgba($color: $theme-color-10, $alpha: 0.9);
    max-width: 200px;
    min-width: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 7px;
    &__item {
      padding: 5px 10px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.612);
      }
    }
  }
}
</style>
