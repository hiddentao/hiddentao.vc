import React from 'react'

const SVG = {
  'rentify': require('../images/rentify.svg'),
  'jetlenses': require('../images/jetlenses.svg'),
  'flow': require('../images/flow.svg'),
}

const SvgImage = ({ src, ...props }) => {
  const Comp = SVG[src.substr(0, src.length-4)]
  return <Comp {...props} />
}

export default SvgImage