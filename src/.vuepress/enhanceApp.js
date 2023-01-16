/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// import CodeEditor from 'simple-code-editor';
import hljsPlugin from './hljs-plugin';
import formatHtml from './formatHtml-plugin';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  // Vue.component('code-editor', CodeEditor)
  Vue.use(hljsPlugin);
  Vue.use(formatHtml);
}
