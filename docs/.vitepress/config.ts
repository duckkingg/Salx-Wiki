export default {
  lang: 'zh-CN',
  title: '[SalX] 水岸兰香2.0',
  description: '123123123',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    siteTitle: '[Salx] 水岸兰香2.0',
    logo: '/images/flower.svg',
    nav: [
      { text: 'WiKi首页', link: '/index' },
      { text: '关于我们', link: '/about' },
      { text: '官网', link: 'https://www.catmc.cn' },
      {
        items: [
          {
            items: [
              { text: '服务器地图', link: 'https://map.catmc.cn:8443' },
            ]
          }
        ]
      },
      
    ],
    sidebar: {
      '/guide/': [
        {
          text: '服务器指北',
          collapsed: false,
          items: [
            { text: '安装手册', link: '/guide/' },
          ]
        },
        {
          text: '合成',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
          ]
        },
        {
          text: '功能',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
          ]
        },
        {
          text: '玩法',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/IMZCC/Salx-Wiki' },
    ],
    footer: {
      message: '<a href="https://www.catmc.cn">[SalX] 水岸兰香2.0</a>',
      copyright: 'Copyright © 2023-present SalX2.0'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}
