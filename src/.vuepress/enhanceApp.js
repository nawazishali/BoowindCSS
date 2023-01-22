/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// import CodeEditor from 'simple-code-editor';
import hljsPlugin from './plugins/hljs-plugin';
import formatHtml from './plugins/formatHtml-plugin';

window.onload = (event) => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    document.addEventListener("click", function (e) {
      var insideDropdown = dropdown.contains(e.target);
      if (!insideDropdown) {
        dropdown.removeAttribute("open");
      }
    });
  })
}

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
