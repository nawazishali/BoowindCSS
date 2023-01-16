import prettier from 'prettier/standalone'
// import parserBabel from 'prettier/esm/parser-babel.mjs'
import parserHtml from 'prettier/esm/parser-html.mjs'

export default {
  install(Vue) {
    let formatHtml = (
      html,
      config = {
        parser: 'html',
        plugins: [parserHtml],
        printWidth: 150,
        bracketSameLine: true,
      }
    ) => {
      return prettier.format(html, config)
    }
    Object.defineProperty(Vue.prototype, '$formatHtml', { value: formatHtml })
  },
}
