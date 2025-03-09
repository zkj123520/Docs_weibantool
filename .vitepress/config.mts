import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.svg' }]
  ],
  title: "SecBot 使用文档",

  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '用户协议(EULA)', link: '/privacy/user-agreement' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '这是什么', link: '/introduction/what-is-this' },
          { text: '为什么开发', link: '/introduction/why-develop' }
        ]
      },

      {
        text: '指南',
        items: [
          { text: '如何获取', link: '/guide/how-to-get' },
          { text: '如何使用', link: '/guide/how-to-use' },
          { text: '如何捐赠(Donate)', link: '/guide/how-to-donate' },
          { text: '用户隐私与安全性', link: '/guide/privacy-security' }
        ]
      },

      {
        text: '用户隐私与安全',
        items: [
          { text: 'SecBot最终用户协议(EULA)', link: '/privacy/user-agreement' },
          { text: '隐私政策(Privacy Policy)', link: '/privacy/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zkj123520' }  
    ]
  }
})
