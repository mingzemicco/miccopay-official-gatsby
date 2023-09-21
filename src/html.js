import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          Commande et paiement simplifiés : MiccoPay, votre solution tout-en-un pour
          les restaurants
        </title>
        <meta name="keywords" content="paiement en ligne, prise de commande, " />
        <meta
          name="description"
          content="Simplifiez le paiement au restaurant avec une solution digitale qui permet à vos clients de commander et payer facilement en quelques secondes en scannant un QR code. Optez pour la solution de paiement adaptée à votre restaurant pour une expérience fluide et rapide."
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
        <link rel="preload" as="style" href="/frontend-2f902131.css" />
        <link rel="stylesheet" href="/frontend-2f902131.css" />
        <script src="/init.js"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} class="font-golos bg-body-bg text-body group/body theme-light">
        <script src="/tabler-theme.min.js"></script>
        <script src="/navbar-shrink.js"></script>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}