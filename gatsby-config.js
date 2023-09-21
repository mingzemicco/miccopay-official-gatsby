/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogImages',
        path: `${__dirname}/src/images/blog/`,
      },
    },
  ],
  siteMetadata: {
    title: "Commande et paiement simplifiés : MiccoPay, votre solution tout-en-un pour les restaurants",
    description: 'Simplifiez le paiement au restaurant avec une solution digitale qui permet à vos clients de commander et payer facilement en quelques secondes en scannant un QR code. Optez pour la solution de paiement adaptée à votre restaurant pour une expérience fluide et rapide.',
    copyright: 'Copyright © 2023 Micco, Everest Finance',
    contact: 'hello@getmicco.com ',
  },
}
