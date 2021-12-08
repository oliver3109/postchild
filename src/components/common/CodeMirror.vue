<template>
  <client-only>
    <codemirror
      ref="codemirror"
      class="codemirror"
      :options="options"
      @cursorActivity="onCmCursorActivity"
      @ready="onCmReady"
      @focus="onCmFocus"
      @blur="onCmBlur"
    />
  </client-only>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop, Watch } from "nuxt-property-decorator";

@Component
export default class CodeMirror extends Vue {
  @Prop({ type: Object, required: true })
  options!: Record<string, any>;

  @Prop({ type: [Object, String] })
  content!: any;

  @Watch("content")
  onContentChange(v) {
    if (v) {
      this.prettify();
    }
  }

  onCmCursorActivity() {
    this.$emit("change", this.getCodemirror().getValue());
  }
  onCmReady(codemirror) {
    console.debug("onCmReady", codemirror);
  }
  onCmFocus(codemirror) {
    console.debug("onCmFocus", codemirror);
  }
  onCmBlur(codemirror) {
    console.debug("onCmBlur", codemirror);
  }

  getCodemirror(): any {
    return (this.$refs.codemirror as any).codemirror;
  }

  /**
   * 美化
   */
  prettify() {
    this.$nextTick(() => {
      let value = this.content;
      if (typeof value === "string") {
        try {
          value = JSON.parse(value);
          const str = JSON.stringify(value, null, 4);
          this.getCodemirror().setValue(str);
        } catch {
          this.getCodemirror().setValue(value);
        }
      }
      if (typeof value === "object") {
        const str = JSON.stringify(value, null, 4);
        this.getCodemirror().setValue(str);
      }
    });
  }

  /**
   * 清空文本
   */
  clear() {
    this.getCodemirror().setValue("");
  }
}
</script>

<style lang="scss" scoped>
.codemirror {
  width: 100%;
  height: 300px;
  margin: 0;
  overflow: auto;
}
</style>
