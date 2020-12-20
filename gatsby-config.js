const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'My blog',
    titleTemplate: 'Front-end developer',
    position: 'Front-end developer',
    description: 'A blog about frontend development and other cool stuff.',
    url: 'https://github.com/fesantossp/fesantossp',
    image: 'https://avatars3.githubusercontent.com/u/6516578?s=460&u=0a6ea4b4449800984937bf48e9714e73d35b0a7f&v=4',
    twitterUsername: 'https://twitter.com/fesantossp'
  },
  plugins: [
    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
           // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              links: false
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-fsfront-github-io`
      }
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`
  ],
}
