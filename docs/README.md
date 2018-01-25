
# umo

## Introduction

UMO is a rich text editor which is built on the top of Vue and Quill.js.

## Install

```bash
yarn add quill umo
```

## Usage

```vue
<template>
  <umo 
    :inital-content="content" 
    :options="editorOptions" 
    @change="handleChange"
  />
</template>

<script>
import Umo from 'umo'

export default {
  data() {
    return {
      content: {},
      editorOptions: {}
    }
  },

  methods: {
    handleChange({ content, text }) {
      // content: Representing the Delta object
      // text: Editor content in plain text
    }
  },

  components: {
    Umo
  }
}
</script>

<!-- The minimal styles you will need -->
<style src="quill/dist/quill.core.css"></style>
<!-- By default we use the snow theme -->
<style src="quill/dist/quill.snow.css"></style>
```

## API

### Props

#### initialContent

Type: [`Delta`](https://quilljs.com/docs/delta/)

Set contents of the editor once the editor is created.

#### options

Type: `Object`

The [options](https://quilljs.com/docs/configuration/#options) for creating quill instance.

#### toolbar

A shorthand for setting `options.toolbar`.

### Events

All quill editor events will be emitted on the component instance:

- `text-change`
- `selection-change`
- `editor-change`
- ours
  - `change`
  - `focus`
  - `blur`

The `change` event is similar to native `text-change` but with different arguments:

```js
// @param {Delta} content - quill.getContents()
// @param {string} text - quill.getText()
function onChange({ content, text }) {
  // Handle event
}
```

The `focus` `blur` events will be emitted when editor gets or loses focus:

```js
// @param {Quill} quill - Quill instance
function onFocus(quill) {
  // Handle event
}
```

### Quill instance

Use a `ref` to get quill instance:

```js
<umo ref="editor" />
```

The `this.$refs.editor.quill` will be the quill instance we use in the component.


## Author

**umo** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://github.com/egoist/umo/blob/master/LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/umo/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
