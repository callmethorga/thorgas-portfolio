// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thorga\'s Portfolio.',
  tagline: 'Just call me Thor. I am a Tech Enthusiast.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thorgas-portfolio.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'callmethorga', // Usually your GitHub org/user name.
  projectName: 'thorgas-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Thorga',
        logo: {
          alt: 'Thorga',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tech Projects',
          },
          {to: '/blog', label: 'Other Works', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Me',
            items: [
              {
                label: 'Tech Projects',
                to: '/docs/intro',
              },
              {
                label: 'Other Works',
                to: '/blog',
              },
              {
                label: 'Certifications',
                href: 'https://github.com/callmethorga',
              },
              {
                label: 'Writings',
                href: 'https://github.com/callmethorga',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/thrq.0x1',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/thqyprtm',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UchinagaToriku',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/thoriq-yoga-pratama-67298b281',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/callmethorga',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thoriq Yoga.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
