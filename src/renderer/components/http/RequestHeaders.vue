<template>
  <div class="request-params">
    <div class="tools-bar">
      <div class="title">请求头列表</div>
      <div class="right">
        <a-button icon="delete" @click="onClearAll"></a-button>
        <a-button icon="form"></a-button>
        <a-button icon="plus" @click="onAdd"></a-button>
      </div>
    </div>

    <KeyValues
      :list="list"
      :keyTitle="'请求头'"
      @remove="onRemoveHeaders"
    ></KeyValues>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import KeyValues from "../common/KeyValues.vue";
import { Watch } from "vue-property-decorator";

@Component({
  components: { KeyValues },
})
export default class RequestHeaders extends Vue {
  list = [{ key: "", value: "" }];

  @Watch("list", { deep: true })
  onListChange(v) {
    this.$emit("input", v);
  }

  onClearAll() {
    const list = this.list;
    list.splice(1, list.length);
    this.list = list;
  }

  onRemoveHeaders({ index }) {
    const list = this.list;
    list.splice(index, 1);
    this.list = list;
  }

  onAdd() {
    this.list.push({ key: "", value: "" });
  }
}
</script>

<style lang="scss" scoped>
.request-params {
  .tools-bar {
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
}
</style>
