import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

import { Language } from '@constant/languageKey'
import english from './english'
import chinese from './chinese'

use(initReactI18next).init({
  resources: {
    [Language.EN]: english,
    [Language.ZH]: chinese,
  },
  lng: Language.EN,
  fallbackLng: Language.EN,
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  defaultNS: 'global',
})
