import { defineConfig } from 'vitepress'

// 针对 GitHub Pages 仓库 subone-doc 配置 base，本地开发为 /
const base = process.env.DOCS_BASE || (process.env.GITHUB_ACTIONS ? '/subone-doc/' : '/')

export default defineConfig({
  title: 'Subone',
  description: '多源多节点聚合配置生成系统使用文档',
  base,
  lang: 'zh-CN',

  // 默认浅色模式配置
  appearance: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#CC785C' }],
    // 强制无选择记录时默认浅色 (Light Mode)
    [
      'script',
      {},
      `(() => {
        const saved = localStorage.getItem('vitepress-theme-appearance');
        if (!saved) {
          localStorage.setItem('vitepress-theme-appearance', 'light');
          document.documentElement.classList.remove('dark');
        }
      })()`
    ]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Subone',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '部署指南', link: '/guide/quick-start' },
      { text: '使用手册', link: '/manual/sources' },
      { text: '客户端配置', link: '/clients/singbox' },
      { text: '进阶特性', link: '/advanced/decoupling' },
      {
        text: '相关链接',
        items: [
          { text: 'Subone 仓库', link: 'https://github.com/cfm019/subone' },
          { text: '更新日志', link: 'https://github.com/cfm019/subone/releases' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '部署指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: 'Docker 部署', link: '/guide/docker' },
            { text: '源码编译', link: '/guide/source-build' },
            { text: '版本更新', link: '/guide/update' },
            { text: '反向代理', link: '/advanced/reverse-proxy' }
          ]
        }
      ],
      '/manual/': [
        {
          text: '基础使用',
          items: [
            { text: '导入节点', link: '/manual/sources' },
            { text: '获取订阅', link: '/manual/endpoints' }
          ]
        },
        {
          text: '进阶使用',
          items: [
            { text: '策略组', link: '/manual/groups' },
            { text: '分流规则', link: '/manual/rules' },
            { text: '多 Profile', link: '/manual/overview' },
            { text: '模版定制', link: '/manual/templates' }
          ]
        }
      ],
      '/clients/': [
        {
          text: '客户端配置',
          items: [
            { text: 'Sing-box', link: '/clients/singbox' },
            { text: 'Mihomo (Clash)', link: '/clients/mihomo' },
            { text: 'Loon / QX / 其他', link: '/clients/others' },
            { text: '路由器更新脚本', link: '/clients/router-update' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶特性',
          items: [
            { text: '按源解耦机制', link: '/advanced/decoupling' },
            { text: '反向代理与 HTTPS', link: '/advanced/reverse-proxy' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cfm019/subone' }
    ],

    // 右侧大纲
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 本地全文搜索
    search: {
      provider: 'local',
      options: {
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
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 页面交互本地化文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '主题外观',
    lightModeSwitchTitle: '切换为浅色模式',
    darkModeSwitchTitle: '切换为深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})
