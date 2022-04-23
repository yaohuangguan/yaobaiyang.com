import Typography from 'typography'

import '../../static/global.css'

const HEADER_FONT_FAMILY = ['granville', 'serif']
const BODY_FONT_FAMILY = [
  'neue-haas-unica',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: HEADER_FONT_FAMILY,
  bodyFontFamily: BODY_FONT_FAMILY,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
