module.exports = {
  siteMetadata: {
    title: `designo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '16a065f4e69c2bcb1a7adb47dedf9a',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Jost:400,500'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-image',
      options: {
        defaults: {
          placeholder: 'blurred',
          backgroundColor: `transparent`,
          formats: [`webp`, `png`, `jpeg`],
          quality: 90,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/logo-dark.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-root-import',
    //   options: {
    //     assets: path.join(__dirname, 'designo', 'src', 'assets'),
    //     components: path.join(__dirname, 'designo', 'src', 'components'),
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
  ],
};
