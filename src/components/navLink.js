import { Link } from "gatsby-plugin-intl"
import styled from '@emotion/styled'
import { Location } from '@reach/router'
import React from 'react'

import Icon from './icon'
import { isViewingUrl } from '../utils/string'

const Anchor = styled.a`
  svg {
    font-size: 80%;
  }
`

export const NavLink = ({ navLink, ...props }) => (
  (navLink.path.startsWith('http')) ? (
    <Anchor {...props} href={navLink.path} title={navLink.title}>{navLink.label} <Icon name={['fas', 'external-link-alt']} /></Anchor>
  ) : (
    <Link {...props} to={navLink.path} title={navLink.title}>{navLink.label}</Link>
  )
)


export const NavLinks = ({ navLinks, Component, ...props }) => (
  <div {...props}>
    <Location>
      {({ location }) => (
        navLinks.map(navLink => (
          <Component
            key={navLink.label}
            selected={isViewingUrl(location, navLink.regexTest)}
          >
            <NavLink navLink={navLink} />
          </Component>
        ))
      )}
    </Location>
  </div>
)
