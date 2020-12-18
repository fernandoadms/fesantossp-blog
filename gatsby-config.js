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
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`
  ],
}
