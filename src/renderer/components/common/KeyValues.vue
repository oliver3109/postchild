<template>
  <div class="key-value-list">
    <div class="row" v-for="(item, index) in list" :key="index">
      <a-input-group compact>
        <a-input :placeholder="`${keyTitle}${index + 1}`" v-model="item.key" />
        <a-input :placeholder="`值${index + 1}`" v-model="item.value" />
        <a-button icon="file-add" style="width: 80px" />
        <a-button icon="delete" style="width: 80px" @click="onRemove(index)" />
      </a-input-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "nuxt-property-decorator";

@Component
export default class KeyValues extends Vue {
  @Prop()
  list: Array<any>;

  @Prop({ default: "参数" })
  keyTitle: Array<any>;

  /**
   * 删除事件
   */
  onRemove(index) {
    this.$emit("remove", { index });
  }
}
</script>

<style lang="scss" scoped>
.ant-input-group {
  display: flex !important;
}
.key-value-list {
  display: flex;
  flex-direction: column;
  .row {
    margin-bottom: 6px;
  }
}
</style>
