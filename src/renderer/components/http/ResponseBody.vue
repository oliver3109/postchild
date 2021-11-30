<template>
  <div class="request-body">
    <div class="tools-bar">
      <div class="left">响应体</div>
      <div class="right">
        <a-button icon="download"></a-button>
        <a-button icon="copy"></a-button>
      </div>
    </div>
    <CodeMirror
      ref="CodeMirror"
      :options="{
        ...cmOption,
        mode,
      }"
      :content="content"
    ></CodeMirror>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop, Watch } from "nuxt-property-decorator";

import CodeMirror from "~/components/common/CodeMirror.vue";

@Component({
  components: {
    CodeMirror,
  },
})
export default class ResponseBody extends Vue {
  @Prop({ default: "application/json" })
  mode!: string;

  @Prop({ type: [Object, String] })
  content!: string;

  cmOption = {
    tabSize: 2,
    styleActiveLine: false,
    lineNumbers: true,
    styleSelectedText: false,
    line: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
    // mode: "application/json", // "text/javascript",
    // hint.js options
    hintOptions: {
      // 当匹配只有一项的时候是否自动补全
      completeSingle: false,
    },
    //快捷键 可提供三种模式 sublime、emacs、vim
    keyMap: "sublime",
    matchBrackets: true,
    showCursorWhenSelecting: true,
    theme: "monokai",
    // extraKeys: { Ctrl: "autocomplete" },
    readOnly: true, // 只读
  };

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

  mounted() {
    setTimeout(() => {
      this.cmOption.styleActiveLine = true;
    }, 1800);
  }
}
</script>

<style lang="scss" scoped>
.request-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  .tools-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
  }
  .codemirror {
    width: 100%;
    height: 300px;
    margin: 0;
    overflow: auto;
  }
}
</style>
