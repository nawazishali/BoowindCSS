import prettier from 'prettier/standalone'
// import parserBabel from 'prettier/esm/parser-babel.mjs'
import parserHtml from 'prettier/esm/parser-html.mjs'

export default {
  install(app, options) {
    let formatHtml = (
      html,
      config = {
        parser: 'html',
        plugins: [parserHtml],
        printWidth: 150,
        bracketSameLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ) => {
      return prettier.format(html, config)
    }
    app.config.globalProperties.$formatHtml = formatHtml
  },
}
