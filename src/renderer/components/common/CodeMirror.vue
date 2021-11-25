<template>
  <client-only>
    <codemirror
      ref="codemirror"
      class="codemirror"
      :value="content"
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

  @Prop({})
  content!: any;

  @Watch("content")
  onContentChange(v) {
    this.$emit("change", v);
  }

  onCmCursorActivity(codemirror) {
    console.debug("onCmCursorActivity", codemirror);
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
    return (this.$refs.jsonEditor as any).codemirror;
  }

  /**
   * 美化
   */
  prettify() {
    this.$nextTick(() => {
      this.getCodemirror().setValue(
        JSON.stringify(JSON.parse(this.content), null, 2)
      );
    });
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
