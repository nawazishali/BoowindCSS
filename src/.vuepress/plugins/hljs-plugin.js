import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default {
  install(Vue,) {
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.addPlugin(new CopyButtonPlugin());
    Object.defineProperty(Vue.prototype, '$hljs', { value: hljs });
  }
}