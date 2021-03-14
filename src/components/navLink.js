import { Link } from "gatsby-plugin-intl"
import styled from '@emotion/styled'
import React from 'react'

import Icon from './icon'

const Anchor = styled.a`
  svg {
    font-size: 80%;
  }
`

export default ({ navLink, ...props }) => (
  (navLink.path.startsWith('http')) ? (
    <Anchor {...props} href={navLink.path} title={navLink.title}>{navLink.label} <Icon name={['fas', 'external-link-alt']} /></Anchor>
  ) : (
    <Link {...props} to={navLink.path} title={navLink.title}>{navLink.label}</Link>
  )
)
