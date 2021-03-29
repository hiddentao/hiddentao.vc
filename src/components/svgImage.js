import React from 'react'

const SVG = {
  'disco': require('../images/disco.svg'),
  'rentify': require('../images/rentify.svg'),
  'jetlenses': require('../images/jetlenses.svg'),
  'flow': require('../images/flow.svg'),
}

const SvgImage = ({ src, ...props }) => {
  const Comp = SVG[src.substr(0, src.length-4)]
  return <Comp {...props} />
}

export default SvgImage