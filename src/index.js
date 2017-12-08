import Quill from 'quill'
import assign from 'nano-assign'

const UMO = {
  name: 'umo-editor',

  props: {
    options: {
      type: Object,
      default: {}
    },
    initialContent: Object,
    initialText: String,
    toolbar: [String, Array, Object]
  },

  mounted() {
    const modules = this.options.modules || {}
    modules.toolbar = modules.toolbar || this.toolbar
    const options = assign(
      {
        theme: 'snow'
      },
      this.options,
      {
        modules
      }
    )
    this.quill = new Quill(this.$el, options)

    this.quill.on('text-change', this.handleTextChange)
    this.quill.on('selection-change', this.handleSelectionChange)

    this.listenEditorEvent('text-change')
    this.listenEditorEvent('selection-change')
    this.listenEditorEvent('editor-change')

    if (this.initialContent) {
      this.quill.setContents(this.initialContent)
    } else if (this.initialText) {
      this.quill.setText(this.initialText)
    }
  },

  beforeDestroy() {
    this.quill = null
  },

  methods: {
    handleTextChange() {
      const content = this.quill.getContents()
      const text = this.quill.getText()
      this.$emit('change', {
        content,
        text
      })
    },

    handleSelectionChange(range, oldRange) {
      if (range === null && oldRange !== null) {
        this.$emit('blur', this.quill)
      } else if (range !== null && oldRange === null) {
        this.$emit('focus', this.quill)
      }
    },

    listenEditorEvent(type) {
      this.quill.on(type, (...args) => {
        this.$emit(type, ...args)
      })
    },

    getQuill() {
      return this.quill
    }
  },

  render(h) {
    return h('div')
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UMO.name, UMO)
}

export default UMO
