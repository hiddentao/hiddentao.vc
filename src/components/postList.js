import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import styled from '@emotion/styled'
import { flex } from 'emotion-styled-utils'

import { formatDate } from "../utils/date"

const Container = styled.div`
  font-size: 1rem;

  ${({ theme }) => theme.media.when({ minW: 'desktop' })} {
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    display: block;
    padding: 0;

    li {
      margin-bottom: 0.7em;
      font-size: 1em;
      line-height: 1.4em;

      span {
        &:last-of-type {
          font-size: 70%;
          font-weight: lighter;
          color: ${({ theme }) => theme.postList.date.textColor};
          margin-left: 0.5em;
        }
      }
    }
  }
`

const UL = styled.ul``

const PostList = ({ className, posts }) => (
  <Container className={className}>
    <UL>
      {posts.map(post => (
        <li key={post.path}>
          <span><Link to={post.path}>{post.title}</Link></span>
          <span>{formatDate(post.date, 'MMM DD')}</span>
        </li>
      ))}
    </UL>
  </Container>
)

export default PostList
