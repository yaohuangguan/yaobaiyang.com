// fonts
import './static/fonts/firacode.css'
// prism theme
import './static/prism-custom.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '@arco-design/web-react/dist/css/arco.css'
// i18n
import './src/locales'
// dayjs
import './src/utils/dayjs'

import React from 'react'
import { navigate } from 'gatsby'
import { LanguageProvider } from './src/utils/languageProvider'

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/private') {
    return navigate('/')
  }
}
