module.exports = {
    title: 'RealDesk',
    description: 'RealDesk 사용자 가이드 및 개발자 문서',
    plugins: ['@vuepress/last-updated'],
    base: '/',
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(require('markdown-it-task-checkbox'));
        }
    },
    themeConfig: {
      nav: [
        { text: 'Guide', link: '/guide/' },
        { text: 'Developer', link: '/developer/' },
        { text: 'GitHub', link: 'https://github.com/realdesk/docs' },
      ],
      sidebar: {
        '/guide': [
          {
            title: '사용자 가이드',
            path: '/guide/',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guide/',
              '/guide/help',
            ],
          },
        ],
        '/developer': [
          {
            path: '/developer/',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/developer/',
            ],
          },          
        ]
      },
    },
}
