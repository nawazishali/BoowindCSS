<template>
  <div class="mt-6">
    <nav class="box-border flex flex-wrap text-center list-none">
      <button
        type="button"
        @click="() => (this.showCode = false)"
        class="inline-block px-3 py-2 text-base font-normal leading-6 no-underline align-middle border-t border-l border-r cursor-pointer rounded-t-md focus:outline-none"
        :class="[!showCode ? 'border-gray-400' : 'border-transparent text-gray-600']"
      >
        Preview <i class="fa fa-eye" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        @click="() => (this.showCode = true)"
        class="inline-block px-3 py-2 text-base font-normal leading-6 no-underline align-middle cursor-pointer rounded-t-md focus:outline-none"
        :class="[showCode ? 'text-white bg-editor-color' : 'text-gray-600']"
      >
        HTML <i class="fa fa-code" aria-hidden="true"></i>
      </button>
    </nav>
    <div
      v-if="!showCode"
      class="p-4 border border-transparent border-gray-300 border-solid rounded-md rounded-tl-none bg-pattern"
      ref="slot"
    >
      <slot></slot>
    </div>
    <pre
      v-if="showCode"
      class="pt-6 overflow-hidden border-transparent border-gray-300 border-solid rounded-md"
    >
		  <code class="language-xml" ref="code" v-text="templateText"></code>
	  </pre>
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
    // console.log(this.$refs.slot.innerHTML)
    // console.log(this.$refs.slot.innerText)
    // console.log(this.$slots.default)
    this.templateText = prettier.format(this.$refs.slot.innerHTML, {
      parser: "html",
      plugins: prettierPlugins,
      printWidth: 150,
    });
  },
  updated() {
    if (this.showCode) this.$hljs.highlightElement(this.$refs.code);
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
  font-size: 13px !important;
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

.bg-editor-color {
  background-color: #282c34;
}

.bg-pattern {
  /* background: radial-gradient(circle, #4685e3 10%, transparent 11%); */
  /* background-size: 1em 1em; */
  /* background: radial-gradient(hsla(215 28% 17%/.2) .5px,hsla(0 0% 95%/1) .5px); */
  background: radial-gradient(
    hsla(215 28% 17%/0.2) 0.5px,
    hsl(0deg 0% 98%) 0.5px
  );
  background-size: 5px 5px;
  background-color: #ffffff;
  opacity: 1;
}
</style>