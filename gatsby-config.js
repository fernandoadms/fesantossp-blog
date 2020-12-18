const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'My blog',
    position: 'Front-end developer',
    description: 'A blog about frontend development and other cool stuff.'
  }, 
  plugins: [
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
