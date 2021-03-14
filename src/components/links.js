import React from 'react'
import styled from '@emotion/styled'

import Icon from './icon'

const SocialList = styled.ul`
  list-style: none;
  display: block;
`

const SocialListItem = styled.li`
  margin-bottom: 1em;

  svg {
    min-width: 2em;
    color: ${({ theme }) => theme.textColor};
  }

  a {
    text-decoration: none;
    span {
      margin-left: 0.2em;
      text-decoration: underline;
    }
  }
`

const SocialLink = styled.span`
`

const Text = ({ children, noText }) => {
  return noText ? null : <span>{children}</span>
}

export const AboutLink = () => (
  <a href='https://hiddentao.com' title='My personal website'>
    About <Icon name={['fas', 'external-link-alt']} />
  </a>
)

export const TwitterLink = ({ children, noText }) => (
  <a href="https://twitter.com/hiddentao">
    {children || (
      <SocialLink title='Twitter'>
        <Icon name={['fab', 'twitter']} />
        <Text noText={noText}>Twitter</Text>
      </SocialLink>
    )}
  </a>
)

export const AngelListLink = ({ children, noText }) => (
  <a href="https://angel.co/u/ramesh-nair">
    {children || (
      <SocialLink title='AngelList'>
        <Icon name={['fab', 'angellist']} /><Text noText={noText}>AngelList</Text>
      </SocialLink>
    )}
  </a>
)

export const EmailLink = ({ children, noText }) => (
  <a href="mailto:ram@hiddentao.com">
    {children || (
      <SocialLink title='Email'>
        <Icon name={['fas', 'envelope']} /><Text noText={noText}>Email</Text>
      </SocialLink>
    )}
  </a>
)

export const FeedLink = ({ children, noText }) => (
  <a href="http://feedpress.me/hiddentao">
    {children || (
      <SocialLink title='RSS'>
        <Icon name={['fas', 'rss']} /><Text noText={noText}>RSS</Text>
      </SocialLink>
    )}
  </a>
)

const SocialLinks = ({ className, ...props }) => {
  return (
    <SocialList className={className}>
      <SocialListItem>
        <AngelListLink {...props} />
      </SocialListItem>
      <SocialListItem>
        <TwitterLink {...props} />
      </SocialListItem>
      <SocialListItem>
        <EmailLink {...props} />
      </SocialListItem>
      <SocialListItem>
        <FeedLink {...props} />
      </SocialListItem>
    </SocialList>
  )
}

export default SocialLinks
