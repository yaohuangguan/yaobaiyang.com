import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from 'react-use'
import dayjs from 'dayjs'
import { Language } from '@constant/languageKey'

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage('language', Language.EN)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!language) return
    i18n.changeLanguage(language)
    console.log(language)
    dayjs.locale(language.toLowerCase().replace('_', '-'))
  }, [i18n, language])

  return {
    language: language || Language.EN,
    setLanguage,
  }
}
