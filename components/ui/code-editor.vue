<template>
  <div class="code-editor-container">
    <pre ref="ace" class="code-editor"></pre>
  </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/snippets/javascript'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/snippets/css'
import 'ace-builds/src-noconflict/snippets/scss'
import 'ace-builds/src-noconflict/snippets/json'
import 'ace-builds/src-noconflict/snippets/java'
import 'ace-builds/src-noconflict/snippets/text'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/mode-javascript'

export default {
  name: 'CodeEditor',
  props: {
    value: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    mode: { type: String, default: 'js' },
  },
  data() {
    return {
      aceEditor: null,
      themePath: 'ace/theme/twilight',
      modePath: 'ace/mode/javascript',
    }
  },
  watch: {
    value(v) {
      this.aceEditor.getSession().setValue(v)
    },
    mode(v) {
      this.setMode(v)
    },
  },
  mounted() {
    this.aceEditor = ace.edit(this.$refs.ace, {
      maxLines: 20,
      minLines: 10,
      fontSize: 16,
      readOnly: this.$props.readonly,
      value: this.$props.value,
      theme: this.themePath,
      mode: this.modePath,
      wrap: false,
      tabSize: 2,
      showPrintMargin: false,
    })
    this.aceEditor.setOptions({
      enableAutoIndent: false,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true,
    })
    this.aceEditor.getSession().on('change', this.change)
  },
  methods: {
    change() {
      this.$emit('input', this.aceEditor.getSession().getValue())
    },
    setMode(type) {
      let mode = ''
      if (type === 'js') {
        mode = 'ace/mode/javascript'
      }
      if (type === 'html') {
        mode = 'ace/mode/html'
      }
      this.aceEditor.getSession().setMode(mode)
    },
  },
}
</script>

<style lang="scss" scoped>
.code-editor-container {
  .code-editor {
    border-radius: 7px;
    margin: 7px 0;
  }
}
</style>
