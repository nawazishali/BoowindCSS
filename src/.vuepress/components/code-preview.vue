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
    // console.log(this.$refs.slot.innerText);
    // console.log(this.$slots.default);
    hljs.configure({ ignoreUnescapedHTML: true });
    this.templateText = prettier.format(this.$refs.slot.innerHTML, {
      parser: "html",
      plugins: prettierPlugins,
      printWidth: 150,
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

code::-webkit-scrollbar {
  width: 12px;
  height: 6px;
  background-color: #212529;
}

code::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  background-color: #4a5568;
}

code::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  border-radius: 10px;
  background-color: #212529;
}

.code-badge-language {
  display: none;
}
</style>