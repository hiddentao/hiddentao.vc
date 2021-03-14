import { Themes } from 'emotion-styled-utils'

import light from './light'

export const setupThemes = breakpoints => {
  const themes = new Themes({}, breakpoints)

  themes.add('default', light)

  return themes
}