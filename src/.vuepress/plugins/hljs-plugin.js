import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import CopyButtonPlugin from "./hljs-copy";

export default {
  install(app, options) {
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.addPlugin(new CopyButtonPlugin());
    app.config.globalProperties.$hljs = hljs;
  }
}