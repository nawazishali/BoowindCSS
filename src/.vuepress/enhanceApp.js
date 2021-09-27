/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

//  import hljs from 'highlight.js/lib/common';
//  import hljsVuePlugin from "@highlightjs/vue-plugin";
import CodeEditor from 'simple-code-editor';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('code-editor', CodeEditor)
}
