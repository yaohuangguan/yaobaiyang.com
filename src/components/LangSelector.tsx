import React, { useRef } from 'react'
import { getLanguageLabel, Language } from '@constant/languageKey'
import { useLanguage } from '@hooks/useLanguage'
import { Button, Select } from '@arco-design/web-react'
import { IconLanguage } from '@arco-design/web-react/icon'
import { useTranslation } from 'react-i18next'
import { EnumValues } from 'enum-values'

const { Option } = Select

export const LanguageSelector: React.FC = () => {
  const { setLanguage } = useLanguage()
  const refSelect = useRef(null)

  const { t } = useTranslation('global')
  return (
    <Select
      ref={refSelect}
      onChange={(value) => {
        setLanguage(value)
      }}
      trigger="hover"
      triggerProps={{
        autoAlignPopupWidth: false,
        autoAlignPopupMinWidth: true,
        position: 'bl',
        autoFitPosition: true,
      }}
      triggerElement={<Button icon={<IconLanguage />} type="text" />}
    >
      {EnumValues.getValues(Language).map((value) => (
        <Option key={value} value={value}>
          {getLanguageLabel({ t })[value]}
        </Option>
      ))}
    </Select>
  )
}
