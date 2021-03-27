import Color from 'color'
import { opacify } from 'emotion-styled-utils'

// standard colours
const white = '#fff'
const black = '#000'
const darkestGrey = '#333'
const darkGrey = '#666'
const green = '#0a0'
const red = '#f00'
const yellow = '0ff'
const grey = '#999'
const lightGrey = '#ccc'
const lighterGrey = '#eee'
const transparent = 'transparent'

// https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c
const paradisePink = '#ef476f'
const orangeYellowCrayola = '#ffd166'
const caribbeanGreen = '#06d6a0'
const blueNcs = '#118ab2'
const midnightGreenEagleGreen = '#073b4c'
const violet = '#6a4c93'

const textColor = black
const anchorColor = paradisePink

const sectionBgColor = opacify(violet, 0.9)//Color(caribbeanGreen).alpha(0.3).hex()
const sectionAnchorColor = anchorColor//Color(anchorColor).lighten(0.1).hex()

const shadowColor = 'rgba(0,0,0,0.75)'

export default {
  textColor,
  anchor: {
    textColor: anchorColor,
    hoverTextColor: white,
    hoverBgColor: anchorColor,
    borderColor: anchorColor,
    hoverBorderColor: anchorColor,
  },
  button: {
    disabledBgColor: grey,
    disabledTextColor: darkGrey,
    disabledBorderColor: grey,
    bgColor: anchorColor,
    textColor: white,
    borderColor: anchorColor,
    hoverBgColor: opacify(anchorColor, 0.9),
    hoverTextColor: white,
    hoverBorderColor: anchorColor,
    shadowColor,
  },
  ramImage: {
    shadowColor,
  },
  sidebar: {
    bgColor: 'transparent',
    textColor: white,
    anchor: {
      textColor: white,
      hoverTextColor: anchorColor,
      borderColor: transparent,
      hoverBgColor: transparent,
      borderColor: transparent,
      hoverBorderColor: anchorColor,
    },
    social: {
      anchor: {
        textColor: black,
        bgColor: white,
        borderColor: transparent,
        hoverTextColor: black,
        hoverBgColor: anchorColor,
        hoverBorderColor: anchorColor,
      },
    },
    menuButton: {
      bgColor: transparent,
      textColor: grey,
      borderColor: transparent,
      hoverBgColor: transparent,
      hoverTextColor: grey,
      hoverBorderColor: transparent,
      shadowColor,
    },
  },
  main: {
    bgColor: white,
    textColor: black,
  },
  investments: {
    year: {
      textColor: lightGrey,
    },
    anchor: {
      borderColor: lightGrey,
      hoverBorderColor: transparent,
      hoverShadowColor: shadowColor,
    },
  },
  contentSection: {
    bgColor: transparent,
    textColor,
  },
  lastUpdatedDate: {
    textColor: Color(blueNcs).darken(0.2).hex(),
    warning: {
      textColor: orangeYellowCrayola,
    },
  },
  readTime: {
    textColor: lightGrey,
  },
  footer: {
    borderColor: orangeYellowCrayola,
    anchor: {
      textColor: anchorColor,
      hoverTextColor: white,
      hoverBgColor: anchorColor,
      borderColor: transparent,
      hoverBorderColor: anchorColor,
    },
    copyright: {
      textColor: textColor,
    },
  },
  archives: {
    year: {
      borderColor: darkGrey,
    },
  },
  languageModal: {
    title: {
      textColor: black,
    },
  },
  postList: {
    date: {
      textColor: blueNcs,
    }
  },
  alert: {
    warning: {
      bgColor: yellow,
      borderColor: yellow,
    }
  },
  pageBottomNav: {
    borderColor: grey,
  },
  code: {
    bgColor: opacify(orangeYellowCrayola, 0.5),
  },
}

