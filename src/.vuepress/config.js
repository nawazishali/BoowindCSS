const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BoowindCSS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {src:'https://unpkg.com/prettier@2.2.1/standalone.js'}],
    ['script', {src:'https://unpkg.com/prettier@2.2.1/parser-babel.js'}],
    ['script', {src:'https://unpkg.com/prettier@2.2.1/parser-html.js'}],
    ['script', {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js'}],
    ['link', {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark.min.css'}],
    ['script', {src: 'https://unpkg.com/highlightjs-badge/highlightjs-badge.min.js'}],
    ['link', {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'}],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: 'https://github.com/nawazishali/BoowindCSS'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            '',
            'get-started',
            'alerts',
            'badge',
            'breadcrumb',
            'buttons',
            'button-group',
            'card'
          ]
        }
      ],
    }
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', true]
  ]
}
