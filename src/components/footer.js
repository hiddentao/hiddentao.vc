import { Link } from "gatsby-plugin-intl"
import React from "react"
import { flex, childAnchors } from 'emotion-styled-utils'
import styled from '@emotion/styled'

import SocialLinks, { AboutLink } from './links'

const Container = styled.footer`
  background-color: ${({ theme }) => theme.footer.bgColor};
  padding: 0 2rem 2rem;
  margin-top: 3rem;
  text-align: center;

  ${({ theme }) => childAnchors(theme.footer.anchor)};
`

const Divider = styled.div`
  width: 100px;
  border-top: 3px dashed ${({ theme }) => theme.footer.borderColor};;
  height: 3px;
  margin: 0 auto;
  padding-bottom: 2rem;
`

const Social = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const Copyright = styled.div`
  font-size: 60%;
  color: ${({ theme }) => theme.footer.copyright.textColor};
`

const StyledSocialLinks = styled(SocialLinks)`
  li {
    display: inline-block;
    color: ${({ theme }) => theme.footer.anchor.textColor};
    font-size: 70%;
    margin: 0 1em 0.4em;
  }
`

const Footer = ({ navLinks }) => (
  <Container>
    <Divider />
    <Social>
      <StyledSocialLinks noText={true} />
    </Social>
    <Copyright>
      © Hiddentao Ventures
    </Copyright>
</Container>
)

export default Footer
