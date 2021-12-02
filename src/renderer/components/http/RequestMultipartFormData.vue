<template>
  <div class="request-params">
    <div class="tools-bar">
      <div class="title">请求体</div>
      <div class="right">
        <a-button icon="delete" @click="onClearAll"></a-button>
        <a-button icon="plus" @click="onAdd"></a-button>
      </div>
    </div>

    <KeyValues
      v-if="list.length > 0"
      :list="list"
      :keyTitle="'参数'"
      @remove="onRemoveFormData"
    ></KeyValues>
    <a-empty v-else description="该请求没有任何请求体">
      <a-button icon="plus" @click="onAdd">新增</a-button>
    </a-empty>
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
export default class RequestMultipartFormData extends Vue {
  list = [{ key: "", value: "" }];

  @Watch("list", { deep: true })
  onListChange(v) {
    this.$emit("input", v);
  }

  onClearAll() {
    this.list = [];
  }

  onRemoveFormData({ index }) {
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
  }
}
</style>
