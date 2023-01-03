<template>
  <div class="mt-2 border border-gray-300 border-solid rounded-md">
    <div class="p-4 bg-pattern" ref="slot">
      <slot></slot>
    </div>
    <pre v-if="showCode">
		  <code class="language-html" v-text="templateText"></code>
	  </pre>
    <button
      type="button"
      @click="() => (this.showCode = !this.showCode)"
      class="block w-full py-2 text-lg font-normal leading-5 text-center text-blue-700 align-middle border-t cursor-pointer hover:text-blue-700 active:text-blue-700 focus:outline-none"
    >
      <i class="fas fa-lg fa-code"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateText: "",
      showCode: false,
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
  margin: 0 !important;
  border-radius: 0 !important;
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

.bg-pattern {
  /* background: radial-gradient(circle, #4685e3 10%, transparent 11%); */
  /* background-size: 1em 1em; */
  /* background: radial-gradient(hsla(215 28% 17%/.2) .5px,hsla(0 0% 95%/1) .5px); */
  background: radial-gradient(hsla(215 28% 17%/.2) 0.5px,hsl(0deg 0% 98%) 0.5px);
  background-size: 5px 5px;
  background-color: #ffffff;
  opacity: 1;
}
</style>