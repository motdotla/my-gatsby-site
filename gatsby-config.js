/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()
console.log(process.env) // for debugging purposes. remove when ready.

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
