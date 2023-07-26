
module.exports = {
  title: 'Gravity PDF',
  url: 'https://docs.gravitypdf.com',
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
              label: 'v6',
              to: 'v6/users/five-minute-install/',
            },

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
              to: 'v3/installation-requirements/',
            },
          ]
        },

        {
          href: 'https://gravitypdf.com/support/',
          label: 'Get Help',
          position: 'right',
        },

        {
          href: 'https://gravitypdf.com/redirect-to-download-latest-version-of-gravity-pdf/',
          label: 'Download',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Back to GravityPDF.com',
              href: 'https://gravitypdf.com/',
            },

            {
              label: 'Gravity PDF Demo',
              href: 'https://demo.gravitypdf.com/',
            },

            {
              html: 'Affiliate links to Gravity Forms and third party Gravity Forms plugins are used throughout this website.'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/gravitypdf',
            },

            {
              label: 'Facebook',
              href: 'https://www.facebook.com/gravitypdf',
            },

            {
              label: 'Vimeo',
              href: 'https://vimeo.com/gravitypdf',
            },

            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@gravitypdf',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Support',
              href: 'https://gravitypdf.com/support/',
            },

            {
              label: 'Shop',
              href: 'https://gravitypdf.com/store/',
            },

            {
              label: 'News',
              href: 'https://gravitypdf.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gravityPDF/gravity-pdf',
            },
          ],
        },
      ],
      copyright: `Copyright © Gravity PDF. All Rights Reserved.`,
    },
    prism: {
      defaultLanguage: 'php',
      additionalLanguages: ['php'],
    },
    versionNotices: {
      v3: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v3 end of life was 2017-06-20 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v4: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v4 end of life was 2019-10-04 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v5: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v5 end of life was 2023-04-28 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v6: ``
    },
    latestVersion: 'v6',

    algolia: {
      appId: 'NKKEAC9I6I',
      apiKey: '0b9c90c6e089769be381f47196dbb313',
      indexName: 'gravitypdf',
      contextualSearch: false,
      searchParameters: {},
      searchPagePath: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gravityPDF/gravity-pdf-documentation/edit/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://simon.gravitypdf.com/js/script.outbound-links.js',
      defer: true,
      'data-domain': 'docs.gravitypdf.com',
      'data-api': 'https://simon.gravitypdf.com/js/event'
    }
  ],
};
