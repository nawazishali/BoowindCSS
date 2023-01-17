<template>
  <div class="mt-6">
    <nav class="box-border flex flex-wrap text-center list-none">
      <button
        type="button"
        @click="handleTabClick(1)"
        class="inline-block px-3 py-2 text-base font-normal leading-6 no-underline align-middle border-t border-l border-r cursor-pointer rounded-t-md focus:outline-none"
        :class="[showPreview ? 'border-gray-400' : 'border-transparent text-gray-600']">
        Preview <i class="far fa-eye"></i>
      </button>
      <button
        type="button"
        @click="handleTabClick(2)"
        class="inline-block px-3 py-2 text-base font-normal leading-6 no-underline align-middle cursor-pointer rounded-t-md focus:outline-none"
        :class="[showHtml ? 'text-white bg-editor-color' : 'text-gray-600']">
        HTML <i class="fab fa-html5"></i>
      </button>
      <button
        type="button"
        @click="handleTabClick(3)"
        class="inline-block px-3 py-2 text-base font-normal leading-6 no-underline align-middle cursor-pointer rounded-t-md focus:outline-none"
        :class="[showJsx ? 'text-white bg-editor-color' : 'text-gray-600']">
        JSX <i class="fab fa-react"></i>
      </button>
    </nav>
    <div v-show="showPreview" ref="slot" class="p-4 border border-transparent border-gray-300 border-solid rounded-md rounded-tl-none bg-pattern">
      <slot></slot>
    </div>
    <pre v-show="showHtml" class="pt-6 overflow-hidden border-transparent border-gray-300 border-solid rounded-md">
		  <code class="language-html" ref="htmlTemplate" v-text="htmlTemplate"></code>
	  </pre>
    <pre v-show="showJsx" class="pt-6 overflow-hidden border-transparent border-gray-300 border-solid rounded-md">
		  <code class="language-html" ref="jsxTemplate" v-text="jsxTemplate"></code>
	  </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlTemplate: '',
      jsxTemplate: '',
      selectedTab: 1,
    }
  },
  mounted() {
    // console.log(this.$refs.slot.textContent)
    // console.log(this.$refs.slot.innerHTML)
    // console.log(this.$refs.slot.innerText)
    // console.log(this.$slots.default)
    this.htmlTemplate = this.$formatHtml(this.$refs.slot.innerHTML)
    this.jsxTemplate = this.$formatHtml(
      this.$refs.slot.innerHTML
      .replace(/class=/g, 'className=')
      .replace(/for=/g, 'htmlFor=')
    )
  },
  methods: {
    handleTabClick(tabNumber) {
      this.selectedTab = tabNumber
    },
  },
  computed: {
    showPreview() {
      return this.selectedTab === 1
    },
    showHtml() {
      return this.selectedTab === 2
    },
    showJsx() {
      return this.selectedTab === 3
    },
  },
  updated() {
    this.$hljs.highlightElement(this.$refs.htmlTemplate)
    this.$hljs.highlightElement(this.$refs.jsxTemplate)
  },
}
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
  background: radial-gradient(hsla(215 28% 17%/0.2) 0.5px, hsl(0deg 0% 98%) 0.5px);
  background-size: 5px 5px;
  background-color: #ffffff;
  opacity: 1;
}
</style>
