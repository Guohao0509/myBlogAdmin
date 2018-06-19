<template>
  <div>
    <textarea ref="editor"></textarea>
  </div>
</template>

<script>

export default {
  name: 'Editor',
  props: {
    value: String
  },
  data() {
    return {
      
    }
  },
  watch: {
    value(val) {
      if (this.editor.value() == val) {
        return;
      };
      this.editor.value(val);
    },
  },
  mounted() {
    this.editor = new SimpleMDE({
      element: this.$refs.editor,
      initialValue: this.value,
      renderingConfig: {
        codeSyntaxHighlighting: true
      },
      toolbar: ['bold', 'italic', 'heading', 'quote', '|', 'unordered-list', 'ordered-list', '|', 'link', 'image', '|', 'side-by-side',  'fullscreen', '|', 'guide']
    });
    this.editor.codemirror.on("change", () => {
      this.$emit('input', this.editor.value())
    });
  },
  methods: {
  }
}
</script>

<style>

</style>


