<template>
  <div class="key-value-list">
    <div class="row" v-for="(item, index) in list" :key="index">
      <a-input-group compact>
        <a-input :placeholder="`${keyTitle}${index + 1}`" v-model="item.key" />

        <div class="input-forge" v-if="item.file">
          <a-tag closable @close="onRemoveFile(index)">{{
            item.file.name
          }}</a-tag>
        </div>
        <a-input v-else :placeholder="`值${index + 1}`" v-model="item.value" />
        <a-upload
          v-if="options.allowUpload"
          style="width: 80px"
          :multiple="true"
          :beforeUpload="(file) => onUploadFile(file, index)"
          :showUploadList="false"
        >
          <a-button icon="file-add" />
        </a-upload>
        <a-button
          v-if="options.allowDelete"
          icon="delete"
          style="width: 80px"
          @click="onRemove(index)"
        />
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

  @Prop({
    type: Object,
    default: () => {
      return {
        allowDelete: true, // 支持删除
        allowUpload: false, // 支持上传
      };
    },
  })
  options: Record<string, any>;

  /**
   * 删除事件
   */
  onRemove(index) {
    this.$emit("remove", { index });
  }

  /**
   * 删除文件事件
   */
  onRemoveFile(index) {
    this.$emit("removefile", { index });
  }

  /**
   * 上传文件
   */
  onUploadFile(file, index) {
    this.$emit("uploadfile", { index, file });
    return true;
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
    .input-forge {
      margin-right: -1px !important;
      border-right-width: 1px !important;
      float: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-variant: tabular-nums;
      list-style: none;
      font-feature-settings: "tnum", "tnum";
      position: relative;
      display: inline-block;
      width: 100%;
      height: 32px;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      line-height: 1.5;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      transition: all 0.3s;
    }
  }
}
</style>
