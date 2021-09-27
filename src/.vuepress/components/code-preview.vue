<template>
  <div>
    <div
      class="p-4 my-2 bg-white border border-gray-300 border-solid rounded-md"
      ref="slot"
    >
      <slot></slot>
    </div>
    <pre>
		<code class="language-html" v-text="templateText"></code>
	</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateText: "",
    };
  },
  mounted() {
    // console.log(this.$refs.slot.textContent)
    // console.log(this.$refs.slot.innerHTML);
    // console.log(this.$slots.default);
    this.templateText = prettier.format(this.$refs.slot.innerHTML, {
      parser: "html",
      plugins: prettierPlugins,
    });
  },
  updated() {
    hljs.highlightAll();
    highlightJsBadge({
      copyIconClass: "far fa-copy",
      checkIconClass: "fas fa-check text-green-800",
    });
  },
};
</script>

<style>
pre {
  line-height: 0 !important;
}
code {
  font-size: 15px !important;
}
.code-badge-language {
  display: none;
}
</style>