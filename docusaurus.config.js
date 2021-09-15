const oembed = require('@agentofuser/remark-oembed')
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
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCLdyzpNdEw71lvfhkfiTmAA',
            },

            {
              label: 'Facebook',
              href: 'https://www.facebook.com/gravitypdf',
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
      copyright: `Documentation Licensed under <a href="https://github.com/GravityPDF/gravity-pdf-documentation/LICENSE.md">CC BY-SA 4.0</a>`,
    },
    prism: {
      defaultLanguage: 'php',
    },
    versionNotices: {
      v3: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v3 end of life was 2017-06-20 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v4: `<div class="alert alert--danger margin-bottom--md" role="alert">&#x1F525; Gravity PDF v4 end of life was 2019-10-04 and <strong>this version is no longer supported</strong>. This legacy documentation is kept for reference only.</div>`,
      v5: `<div class="admonition admonition-caution alert alert--warning" role="alert"><h5><span class="admonition-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></span>CAUTION</h5>️Version 5 of Gravity PDF does not have full support for Gravity Forms 2.5 and <a href="/v6/users/v5-to-v6-migration">you should consider upgrading to version 6</a>. If you cannot, version 5 will still function but have a degraded admin experience. Support and bug/security fixes will be provided until at least 27 April 2022.</div>`,
      v6: ``
    },
    latestVersion: 'v6',

    googleAnalytics: {
      trackingID: 'UA-58177521-3',
      anonymizeIP: true,
    },

    algolia: {
      apiKey: '3f8f81a078907e98ed8d3a5bedc3c61c',
      indexName: 'gravitypdf',
      searchParameters: {},
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
          remarkPlugins: [
            oembed.default
          ],
          showLastUpdateTime: true,
          disableVersioning: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      },
    ],
  ],
};
