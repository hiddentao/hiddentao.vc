import safeGet from 'lodash.get'
import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BgImg from 'gatsby-background-image'

import SvgImage from './svgImage'

const Image = ({ src, bg, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
              presentationWidth
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => src === relativePath)
  ), [ data, src ])

  if (src.endsWith('.svg')) {
    return (
      <SvgImage src={src} {...props} />
    )
  }

  const fluid = safeGet(match, 'childImageSharp.fluid')

  if (fluid) {
    return bg ? (
      <BgImg
        fluid={fluid}
        {...props}
      />
    ) : (
      <Img
        fluid={fluid}
        style={{
          maxWidth: '100px',
          margin: "0 auto",
        }}
        Tag='div'
        {...props}
      />
    )
  } else {
    return null
  }
}

export default Image
