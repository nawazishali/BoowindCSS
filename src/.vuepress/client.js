/**
 * Client app enhancement file.
 *
 * https://vuepress.github.io/advanced/cookbook/usage-of-client-config.html
*/

import { defineClientConfig } from '@vuepress/client'
// import CodeEditor from 'simple-code-editor';
import hljsPlugin from './plugins/hljs-plugin'
import formatHtml from './plugins/formatHtml-plugin'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(hljsPlugin)
    app.use(formatHtml)
  },
  setup() {},
  layouts: {},
  rootComponents: [],
})
