import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import Sidebar from "react-sidebar"
import { flex, childAnchors, loadFonts, buttonStyles } from 'emotion-styled-utils'


import { useMediaQuery} from '../hooks/media'
import { setupThemes } from '../themes'
import GlobalStyles from './globalStyles'
import SocialLinks from './links'
import { NavLinks, NavLink } from "./navLink"
import Image from "./image"
import Button from "./button"
import Icon from "./icon"
import RamImage from "./ramImage"

const themes = setupThemes({
  width: {
    mobile: '450px',
    desktop: '750px',
  },
  height: {
    tall: '800px',
  }
})

const SidebarButton = styled(Button)`
  position: fixed;
  top: 5px;
  left: 5px;
  padding: 0.2em;

  ${({ theme, disabled: inDisabledState }) => buttonStyles({
    ...theme.sidebar.menuButton,
    inDisabledState,
  })}
`

const sidebarWidth = 180

const SidebarDiv = styled(Image)`
  height: 100%;
  width: ${sidebarWidth}px;
  color: ${({ theme }) => theme.sidebar.textColor};
  padding: 2rem;
  text-align: center;
  ${flex({ direction: 'column', justify: 'flex-start', align: 'center' })};

  ${({ theme }) => childAnchors(theme.sidebar.anchor)};

  a {
    font-size: 0.9rem;
    text-transform: lowercase;
    
  }
`

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 2rem 3rem;
  background-color: ${({ theme }) => theme.main.bgColor};
  color: ${({ theme }) => theme.main.textColor};
`

const StyledNavLinks = styled(NavLinks)`
  margin: 1.5rem 0 0;
`

const NavLinkItem = styled.div`
  margin: 0 0 1em;
`

const PersonalLink = styled(NavLink)`
`

const StyledSocialLinks = styled(SocialLinks)`
  ${flex({ direction: 'row', justify: 'center', align: 'center', basis: 0 })};
  position: absolute;
  bottom: 8rem;

  ${({ theme }) => theme.media.when({ minW: 'mobile' })} {
    bottom: 2rem;
  }
  
  li {
    display: inline-block;
    font-size: 0.4rem;
    margin: 0 1em;

    ${({ theme }) => childAnchors(theme.sidebar.social.anchor)};

    a {
      display: block;
      height: 2em;
      width: 2em;
      border-radius: 40px;
      ${flex({ direction: 'column', justify: 'center', align: 'center' })};

      span {
        display: block;
      }

      svg {
        color: ${({ theme }) => theme.sidebar.social.anchor.textColor};
      }
    }
  }
`

const Layout = ({ children }) => {
  const sidebarDocked = useMediaQuery('only screen and (min-width: 750px)')
  const [ showSidebar, setShowSidebar ] = useState(false)

  const toggleSidebar = useCallback(() => {
    setShowSidebar(!showSidebar)
  }, [ showSidebar ])

  const [ , forceUpdate ] = useState()

  useEffect(() => {
    loadFonts({
      header: {
        name: 'Raleway',
        weights: {
          thin: 300,
          regular: 400,
          bold: 700,
        }
      },
      body: {
        name: 'Roboto',
        weights: {
          thin: 300,
          regular: 400,
          bold: 700,
        }
      },
      text: {
        name: 'Crimson Text',
        weights: {
          regular: 400,
          bold: 700,
        }
      }
    }, window.document).then(forceUpdate, err => console.error(err))
  }, [])

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const navLinks = useMemo(() => [
    {
      regexTest: /.?/,
      label: 'Portfolio',
      path: '/',
      title: 'Portfolio',
    },
    // {
    //   regexTest: /blog$/,
    //   label: 'Writings',
    //   path: '/blog',
    //   title: 'Investment thoughts',
    // },
  ], [ data ])


  const personalLink = {
    regexTest: /personal$/,
    label: 'Personal',
    path: 'https://hiddentao.com',
    title: 'Personal website',
  }

  return (
    <ThemeProvider theme={themes.get('default')}>
      <GlobalStyles />
      <Sidebar
        defaultSidebarWidth={sidebarWidth}
        docked={sidebarDocked}
        open={showSidebar}
        onSetOpen={toggleSidebar}
        touch={false}
        sidebar={(
          <SidebarDiv bg={true} src='bg.png' style={{
            backgroundPosition: 'auto',
            backgroundColor: '#fffbe9',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}>
            <div>
              <RamImage size={100} />
              <StyledNavLinks
                navLinks={navLinks}
                Component={NavLinkItem}
              />
              <PersonalLink navLink={personalLink} />
            </div>
            <StyledSocialLinks noText={true} />
          </SidebarDiv>
        )}
      >
        <Main>
          <SidebarButton onClick={toggleSidebar}>&#9655;</SidebarButton>
          {children}
        </Main>
      </Sidebar>
    </ThemeProvider>
  )
}

export default Layout
