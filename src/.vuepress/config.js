const { description } = require('../../package')
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  title: 'BoowindCSS',
  description: description,
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
  theme: defaultTheme({
    repo: 'https://github.com/nawazishali/BoowindCSS',
    editLink: false,
    docsDir: 'docs/intro',
    logo: '/boowindcss.svg',
    // searchPlaceholder: 'Search Docs...',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        link: '/docs/intro',
      }
    ],
    sidebarDepth: 1,
    sidebar: {
      '/docs/': [
        {
          text: 'Guide',
          collapsible: true,
          children: [
            'intro',
            'get-started',
          ]
        },
        {
          text: 'Components',
          collapsible: false,
          children: [
            'alerts',
            'badge',
            'breadcrumb',
            'buttons',
            'button-group',
            'card',
            'dropdowns',
            'list-group',
            'navs',
            'navbar',
            'pagination',
          ]
        }
      ],
    }
  }),
  plugins: [
    // ['vuepress-plugin-code-copy', true],
    shikiPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search Docs...',
        },
      }
    }),
  ]
}
