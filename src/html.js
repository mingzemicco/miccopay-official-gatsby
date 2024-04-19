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
          Scan and visualize the menu in no matter which restaurant in the
          world.
        </title>
        <meta
          name="keywords"
          content="Scan Menu, translate automatic the plates, OCR, show plat,menu,dish images, intelligent AI food solution for tourist and travelers "
        />
        <meta
          name="description"
          content="PlatBook helps you translate and visualize the correct image of the dishes/plates in any restaurants, it makes easy for travellers to enjoy every meal, no surprise"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link rel="preload" as="style" href="/frontend-2f902131.css" />
        <link rel="stylesheet" href="/frontend-2f902131.css" />
        <script src="/init.js"></script>
        {props.headComponents}
      </head>
      <body
        {...props.bodyAttributes}
        className="font-golos bg-body-bg text-body group/body theme-light"
      >
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
