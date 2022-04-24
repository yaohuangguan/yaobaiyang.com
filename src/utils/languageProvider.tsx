import { useLanguage } from '@hooks/useLanguage'
import { ConfigProvider } from '@arco-design/web-react'
import enUS from '@arco-design/web-react/es/locale/en-US'
import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import React from 'react'

const LangReflect = {
  en: enUS,
  zh: zhCN,
}

export const LanguageProvider: React.FC = ({ children }) => {
  const { language } = useLanguage()

  return (
    <ConfigProvider locale={LangReflect[language]}>{children}</ConfigProvider>
  )
}
