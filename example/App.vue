<template>
  <div id="app">
    <umo-editor
      @change="handleChange"
      :initial-content="content"
      :toolbar="[['bold', 'italic'], ['link', 'image']]"
      :options="editorOptions" />
  </div>
</template>

<script>
import UmoEditor from '../src'

export default {
  data() {
    return {
      content: {"ops":[{"insert":"hello "},{"attributes":{"bold":true},"insert":"world"},{"insert":"\n"}]},
      editorOptions: {
      }
    }
  },

  methods: {
    handleChange({ content, text }) {
      this.content = content
    }
  },

  components: {
    UmoEditor
  }
}
</script>

<style src="quill/dist/quill.core.css"></style>
<style src="quill/dist/quill.snow.css"></style>

