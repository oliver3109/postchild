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
import 'ace-builds/src-noconflict/mode-html'

export default {
  name: 'CodeEditor',
  props: {
    value: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    mode: { type: String, default: 'javascript' },
  },
  data() {
    return {
      aceEditor: null,
      themePath: 'ace/theme/twilight',
      modePath: 'ace/mode/javascript',
      cacheValue: '',
    }
  },
  watch: {
    value(v) {
      if (this.cacheValue !== v) {
        this.aceEditor.getSession().setValue(v)
        this.cacheValue = v
      }
    },
    mode(v) {
      this.setMode(v)
    },
  },
  mounted() {
    this.cacheValue = this.$props.value
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
    this.aceEditor.getSession().on('change', () => {
      const content = this.aceEditor.getSession().getValue()
      this.cacheValue = content
      this.$emit('input', content)
    })
  },
  methods: {
    setMode(type) {
      const mode = `ace/mode/${type}`
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
