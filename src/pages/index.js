import React, { useMemo } from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, IntlContextConsumer } from 'gatsby-plugin-intl'
import { flex, childAnchors } from 'emotion-styled-utils'

import Layout from "../components/layout"
import Icon from "../components/icon"
import SEO from "../components/seo"
import MaxContentWidth from "../components/maxContentWidth"
import PostList from "../components/postList"
import { TwitterLink, AngelListLink, EmailLink, AboutLink } from '../components/links'
import { getResolvedVersionForLanguage } from '../utils/node'
import { parseDate } from '../utils/date'


const Content = styled(MaxContentWidth)`
  max-width: 90%;

  & > h2 {
    font-size: 2rem;
    text-align: center;
  }
`

const Splash = styled.div`
  ${flex({ direction: 'column', justify: 'center', align: 'center' })};
  margin-bottom: 4rem;
`

const SplashTop = styled.div`
  ${flex({ direction: 'row', justify: 'center', align: 'center' })};
`

const SplashBottom = styled.div`
  ${flex({ direction: 'row', justify: 'center', align: 'center', wrap: 'wrap' })};
  margin-top: 2rem;
  text-align: center;
  max-width: 80%;

  ${({ theme }) => childAnchors(theme.splash.anchor)};

  a {
    ${flex({ direction: 'row', justify: 'center', align: 'center', basis: 0 })};
    font-size: 1.4rem;
    margin: 1rem;
    text-transform: lowercase;

    & > svg {
      color: ${({ theme }) => theme.splash.anchor.anchorColor};
      font-size: 70%;
      margin: 0 0.5em;
    }
  }

  ${({ theme }) => theme.media.when({ minW: 'desktop' })} {
    a {
      margin: 0.5rem 2rem;
    }
  }
`

const SplashText = styled.h1`
  ${({ theme }) => theme.font('header', 'bold')};
  font-size: 2rem;
  line-height: 1.4em;
  max-width: 90%;
  text-align: center;
  margin: 0;
`

const Posts = styled.div`
  h2 {
    font-size: 1.2rem;
  }  

  ${({ theme }) => theme.media.when({ minW: 'desktop' })} {
    max-width: 600px;
    margin: 0 auto;
  }
`

const StyledPostList = styled(PostList)`
  margin: 0 auto;
`

const Investments = styled.div`
  ${flex({ direction: 'row', justify: 'center', align: 'flex-start', wrap: 'wrap' })};
`

const YearList = styled.ul`
  display: block;
  margin: 0 2rem 4rem;
  text-align: center;
`

const Year = styled.div`
  ${({ theme }) => theme.font('body', 'bold')};
  font-size: 1.5em;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.investments.year.textColor};
`

const CategoryList = styled.ul`
  display: block;
  margin: 0 0 1rem;
  font-size: 0.9em;
`

const Category = styled.div`
  ${({ theme }) => theme.font('body', 'regular')};
  color: ${({ theme }) => theme.investments.category.textColor};
  font-size: 90%;
`

const Name = styled.div`
  margin: 0.7rem 0;
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
      catKeys[v.platform] = true
      m[d.year][v.platform] = m[d.year][v.platform] || []
      m[d.year][v.platform].push(v)
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
        <Splash>
          <SplashTop>
            <SplashText>
              I am a London-based investor with a focus on <em>early-stage</em> startups and <em>blockchain</em>.
            </SplashText>
          </SplashTop>
          <SplashBottom>
            <Link to='/blog' title='Investment thoughts'>Blog</Link>
            <AboutLink />
            <AngelListLink noText={true} />
            <TwitterLink noText={true} />
            <EmailLink noText={true} />
          </SplashBottom>
        </Splash>
        <Investments>
          {years.map(year => (
            <YearList>
              <li>
                <Year>~ {year} ~</Year>
                {categories.map(cat => {
                  const rows = investments[year][cat]
                  if (rows && rows.length) {
                    return (
                      <CategoryList>
                        <li>
                          <Category>{cat}</Category>
                          {rows.map(row => (
                            <Name><a href={row.profile}>{row.name}</a></Name>
                          ))}
                        </li>
                      </CategoryList>
                    )
                  } else {
                    return null
                  }
                })}
              </li>
            </YearList>
          ))}
        </Investments>
        <Posts>
          <h2>Latest thoughts</h2>
          <StyledPostList posts={posts} />
        </Posts>
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

