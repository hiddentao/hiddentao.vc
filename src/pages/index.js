import React, { useMemo } from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, IntlContextConsumer } from 'gatsby-plugin-intl'
import { flex, childAnchors, boxShadow } from 'emotion-styled-utils'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { getResolvedVersionForLanguage } from '../utils/node'
import { parseDate } from '../utils/date'


const Content = styled.div`
  & > h2 {
    font-size: 2rem;
  }
`

const Intro = styled.div`
  margin-bottom: 2rem;
  font-size: 1.7rem;
  line-height: 1.3em;

  em {
    font-weight: bolder;
  }
`

const YearList = styled.ul`
  display: block;

  & > li {
    margin-bottom: 2rem;
  }
`

const Year = styled.div`
  ${({ theme }) => theme.font('header')};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.investments.year.textColor};
`

const List = styled.ul`
  ${flex({ direction: 'row', justify: 'flex-start', align: 'flex-start', wrap: 'wrap' })};
  margin: 0 0 0.5rem;
  font-size: 0.9em;
`

const Inv = styled.li`
  display: block;
  margin: 0 1rem 1rem 0;
  width: ${({ cat }) => cat === 'blockchain' ? '150px' : '100px'};
  height: ${({ cat }) => cat === 'blockchain' ? '150px' : '100px'};
`

const InvAnchor = styled.a`
  width: 100%;
  height: 100%;
  ${flex({ direction: 'column', justify: 'center', align: 'center' })};

  &, &:link, &:visited {
    border: 1px solid ${({ theme }) => theme.investments.anchor.borderColor};
    border-radius: 5px;
  }

  &:hover {
    background-color: transparent;
    border-color: ${({ theme }) => theme.investments.anchor.hoverBorderColor};
    ${({ theme }) => boxShadow({ color: theme.investments.anchor.hoverShadowColor })};
  }
`

const InvImageContainer = styled.div`
  width: 75%;
  max-height: 75%;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`

const InvImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const Page = ({ lang }) => {
  const data = useStaticQuery(graphql`    
    fragment MarkdownPageFields on MarkdownPage {
      path
      type
      lang
      versions {
        lang
        date
        title
        summary
        markdown
      }
    }

    fragment InvestmentFields on Investment {
      name
      profile
      date
      platform
      category
      img
      imgBg
    }

    query {
      allMarkdownPage(filter: { type: { eq: "blog" }, draft: { ne: true } }, sort: { order:DESC, fields: date }, limit: 5 ) {
        nodes {
          ...MarkdownPageFields
        }
      }
      allInvestment(sort: {fields: date, order: DESC}) {
        nodes {
          ...InvestmentFields
        }
      }
    }
  `)

  const posts = useMemo(() => {
    return data.allMarkdownPage.nodes
      .map(n => ({
        ...getResolvedVersionForLanguage(n.versions, lang, n.lang),
        path: n.path,
      }))
  }, [ data, lang ])

  const { investments, categories, years } = useMemo(() => {
    const catKeys = []

    const i = data.allInvestment.nodes.reduce((m, v) => {
      const d = parseDate(v.date)
      d.year = (d.year < 2021) ? '2014-2020' : `${d.year}`
      m[d.year] = m[d.year] || {}
      catKeys[v.category] = true
      m[d.year][v.category] = m[d.year][v.category] || []
      m[d.year][v.category].push(v)
      return m
    }, {})

    const years = Object.keys(i).sort((a, b) => a < b ? 1 : -1)
    const categories = Object.keys(catKeys).sort()

    return { investments: i, categories, years }
  }, [data])

  return (
    <Layout noHeader={true}>
      <SEO />
      <Content>
        <Intro>
          London-based investor focusing on <em>cryptocurrency</em> and <em>early-stage</em> startups.
        </Intro>
        <YearList>
          {years.map(year => (
            <li key={year}>
              <Year>{year}</Year>
              {categories.map(cat => {
                const rows = investments[year][cat]
                if (rows && rows.length) {
                  return (
                    <List key={cat}>
                      {rows.map(row => (
                        <Inv key={row.name} cat={cat}>
                          <InvAnchor href={row.profile} title={row.name}>
                            <InvImageContainer bgColor={row.imgBg}>
                              <InvImage src={row.img} />
                            </InvImageContainer>
                          </InvAnchor>
                        </Inv>
                      ))}
                    </List>
                  )
                } else {
                  return null
                }
              })}
            </li>
          ))}
        </YearList>
      </Content>
    </Layout>
  )
}


const IndexPage = () => (
  <IntlContextConsumer>
    {({ language: lang }) => (
      <Page lang={lang} />
    )}
  </IntlContextConsumer>
)

export default IndexPage

