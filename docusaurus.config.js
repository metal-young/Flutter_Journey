// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flutter Journey',
  tagline: 'Flutter is cool',
  favicon: 'img/flutter_logo.png',

  // Set the production url of your site here
  url: 'https://flutterjourney.kaminono.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'metal-young', // Usually your GitHub org/user name.
  projectName: 'Flutter_Journey', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-CN'],
    //
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: true,
          editUrl:
            'https://github.com/metal-young/Flutter_Journey/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: true,
          editUrl:
            'https://github.com/metal-young/Flutter_Journey/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/flutter.png',
      navbar: {
        title: 'Flutter Journey',
        logo: {
          alt: 'Flutter Journey Logo',
          src: 'img/flutter_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'officalSidebar',
            position: 'left',
            label: 'Offical',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
          },      
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            to: '/blog',
            label: 'Blog',
          },
          {
            href: 'https://github.com/metal-young/Flutter_Journey',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flutter Journey. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
