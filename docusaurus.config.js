// @ts-check
const config = {
  title: 'Безопасность аккаунтов',
  tagline: 'Практические рекомендации по безопасности учётных записей в социальных сетях',
  favicon: 'img/favicon.ico',
  
  // ⚠️ Ваши данные для GitHub Pages:
  url: 'https://ChedCM.github.io',
  baseUrl: '/urfu-project-practicum/',
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  
  // Настройки деплоя
  deploymentConfig: {
    github: {
      username: 'ChedCM',
      projectName: 'urfu-project-practicum',
    },
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  
  themeConfig: {
    navbar: {
      title: 'Безопасность аккаунтов',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Инструкции',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Разделы',
          items: [
            { label: 'Главная', to: '/' },
            { label: 'Telegram', to: '/platforms/tg-basic' },
            { label: 'VK', to: '/platforms/vk-login' },
            { label: 'MAX', to: '/platforms/max-2fa' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Безопасность аккаунтов`,
    },
  },
};

module.exports = config;