<template>
  <client-only>
    <codemirror
      ref="codemirror"
      class="codemirror"
      v-model="code"
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
import { Prop } from "nuxt-property-decorator";

@Component
export default class CodeMirror extends Vue {
  @Prop({ type: Object, required: true })
  options!: Record<string, any>;

  // cmOption = {
  //   tabSize: 2,
  //   styleActiveLine: false,
  //   lineNumbers: true,
  //   styleSelectedText: false,
  //   line: true,
  //   foldGutter: true,
  //   gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  //   highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
  //   mode: "application/json", // "text/javascript",
  //   // hint.js options
  //   hintOptions: {
  //     // 当匹配只有一项的时候是否自动补全
  //     completeSingle: false,
  //   },
  //   //快捷键 可提供三种模式 sublime、emacs、vim
  //   keyMap: "sublime",
  //   matchBrackets: true,
  //   showCursorWhenSelecting: true,
  //   theme: "monokai",
  //   // extraKeys: { Ctrl: "autocomplete" },
  // };

  code = "";

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
        JSON.stringify(JSON.parse(this.code), null, 2)
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
