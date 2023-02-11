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
    ['link', {rel:'stylesheet', href:'https://unpkg.com/highlightjs-copy@1.0.3/dist/highlightjs-copy.min.css'}],
    ['link', {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'}],
    ['script',{async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-V5HR7GG5Q0'}],
    ['script',{},[
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-V5HR7GG5Q0');`
      ]
    ],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/nawazishali/BoowindCSS',
    editLinks: false,
    docsDir: 'docs/intro',
    editLinkText: '',
    lastUpdated: false,
    logo: '/boowindcss.svg',
    searchPlaceholder: 'Search Docs...',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        link: '/docs/intro',
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Guide',
          collapsable: true,
          children: [
            'intro',
            'get-started',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'alerts',
            'badge',
            'breadcrumb',
            'buttons',
            'button-group',
            'card',
            'dropdowns',
            'forms',
            'list-group',
            'navs',
            'navbar',
            'pagination',
            'progress',
            'spinners',
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
    ['vuepress-plugin-code-copy', true],
  ]
}
