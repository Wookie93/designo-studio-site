module.exports = {
  siteMetadata: {
    title: `designo`,
    description: `One of my example project. Inpired by FrontedMentor page`,
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
        icon: 'src/assets/images/logo-light.png',
      },
    },
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
