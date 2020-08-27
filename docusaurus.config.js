const oembed = require('@agentofuser/remark-oembed')
module.exports = {
  title: 'Gravity PDF',
  url: 'https://gravitypdf.com/documentation',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gravityPDF', // Usually your GitHub org/user name.
  projectName: 'gravity-pdf-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gravity PDF',
      logo: {
        alt: 'Gravity PDF',
        src: 'img/logo.svg',
      },

      hideOnScroll: true,

      items: [
        {
          label: 'Version',
          position: 'left',
          items: [
            {
              label: 'v5',
              to: 'v5/five-minute-install/',
            },

            {
              label: 'v4',
              to: 'v4/five-minute-install/',
            },

            {
              label: 'v3',
              to: 'v3/installation-requirements',
            },
          ]
        },
        {
          href: 'https://github.com/gravityPDF/gravity-pdf-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gravity PDF.`,
    },
    prism: {
      defaultLanguage: 'php',
    },
    versionNotices: {
      v3: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v3 end of life was 2017-06-20 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v4: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v4 end of life was 2019-10-04 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v5: ``
    },
    latestVersion: 'v5'
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gravityPDF/gravity-pdf-documentation/edit/master/',
          remarkPlugins: [
            oembed.default
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        showLastUpdateTime: true,
      },
    ],
  ],
};
