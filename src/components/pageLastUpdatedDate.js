import React from "react"
import styled from '@emotion/styled'

import { formatDate } from "../utils/date"

const Container = styled.div``

const Date = styled.span`
  color: ${({ theme }) => theme.lastUpdatedDate.textColor};
  font-weight: lighter;
`

const PageLastUpdatedDate = ({ date, className }) => (
  <Container className={className}>
    <Date>{formatDate(date, 'MMM DD, YYYY')}</Date>
  </Container>
)

export default PageLastUpdatedDate
