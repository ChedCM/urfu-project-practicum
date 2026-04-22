import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Проектный практикум УрФУ',
  tagline: 'Практические рекомендации по безопасности',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ChedCM.github.io',
  baseUrl: '/urfu-project-practicum/',
  organizationName: 'ChedCM',
  projectName: 'urfu-project-practicum',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // editUrl: 'https://github.com/ChedCM/urfu-project-practicum/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'Безопасность в соцсетях',
          logo: {
            alt: 'Логотип проекта',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Рекомендации',
            },
            {
              href: 'https://github.com/ChedCM/urfu-project-practicum',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Навигация',
              items: [
                {
                  label: 'Читать рекомендации',
                  to: '/',
                },
              ],
            },
            {
              title: 'Проект',
              items: [
                {
                  label: 'GitHub репозиторий',
                  href: 'https://github.com/ChedCM/urfu-project-practicum',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} УрФУ Проектный практикум.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;